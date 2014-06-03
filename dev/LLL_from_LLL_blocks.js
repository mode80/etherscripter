/**
 * @license
 * Copyright 2014 mode80
 */

/**
 * @fileoverview Generator of LLL from LLL-specific blocks 
 * @author mode80@users.noreply.github.com
 */

goog.provide('Blockly.LLL.LLLblocks_generator');

goog.require('Blockly.LLL');

/////
// New POC-5 blocks
/////

Blockly.LLL['LLL_array_make'] = function(block) {
  var order = Blockly.HLL.ORDER_NONE;
  var len = Blockly.HLL.valueToCode(block,'LEN', order) || 0 
  var spot = block.getFieldValue('SPOT') || ''  
  var code = ''
  for (var index = 0; index < len; index++ )
    code += '(mstore ' + spot + index+ ' 0)\n' 
  return code
}

Blockly.LLL['LLL_reserve'] = function(block) {
  //TODO doesnt work with expressions given for len  
  //replace with (alloc) when ready
  var order = Blockly.HLL.ORDER_NONE;
  var len = Blockly.HLL.valueToCode(block,'LEN', order) || 0 
  var code = ''
  for (var index = 0; index <= len; index++ )
    code += '(mstore (+ temp (* ' + index+ ' 32)) 0)\n' 
  return code
}

Blockly.LLL['LLL_array_get'] = function(block) {
  var order = Blockly.HLL.ORDER_NONE;
  var ordinal = Blockly.HLL.valueToCode(block,'ORDINAL', order) || 0 
  var spot = block.getFieldValue('SPOT') || ''  
  var code = '(mload (+ ' + spot + '0 (* 32 (- ' + ordinal + ' 1)) ))'
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.LLL['LLL_array_set'] = function(block) {
  var order = Blockly.HLL.ORDER_NONE;
  var ordinal = Blockly.HLL.valueToCode(block,'ORDINAL', order) || 0 
  var spot = block.getFieldValue('SPOT') || ''  
  var val = Blockly.HLL.valueToCode(block,'VAL', order) || 0  
  var code = '(mstore (+ ' + spot + '0 (* 32 (- ' + ordinal + ' 1)) ) ' + val + ')\n'
  return code
}

Blockly.LLL['LLL_array'] = function(block) {
  var order = Blockly.HLL.ORDER_NONE;
  var spot = block.getFieldValue('SPOT') || ''  
  var code
  code = spot + '0'
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.LLL['LLL_input'] = function(block) {
  var index = block.getFieldValue('INDEX') || 0
  var code = '(calldataload (* 32' + index + '))' 
  return [code, Blockly.LLL.ORDER_ATOMIC]
}

Blockly.LLL['LLL_thinput'] = function(block) {
  var ordinal = Blockly.LLL.valueToCode(block, 'ORDINAL', Blockly.LLL.ORDER_NONE) || 0
  var index = '(* (- ' + ordinal + ' 1) 32)'
  var code = '(calldataload ' + index + ')' 
  return [code, Blockly.LLL.ORDER_ATOMIC]
}

Blockly.LLL['LLL_compile_max'] = function(block) {
  var for_compiling = Blockly.LLL.statementToCode(block, 'CODE');
  var to_start = Blockly.LLL.valueToCode(block, 'TO_START', Blockly.LLL.ORDER_NONE) || 0
  var max_len = Blockly.LLL.valueToCode(block, 'MAX_LEN', Blockly.LLL.ORDER_NONE) || 0
  var code
  if (max_len == 0)
    code = '(lll\n (seq \n' + for_compiling + ' )\n (* 32 ' + to_start + ')\n)' 
  else
    code = '(lll\n (seq \n' + for_compiling + ' )\n (* 32 ' + to_start + ')\n (* 32 ' + max_len + ')\n)' 
  return [code, Blockly.LLL.ORDER_ATOMIC]
}

Blockly.LLL['LLL_copy'] = function(block) {
  var op = block.getFieldValue('OP') || ''  
  var a = Blockly.LLL.valueToCode(block, 'DATA_START', Blockly.LLL.ORDER_NONE) || 0
  var b = Blockly.LLL.valueToCode(block, 'DATA_LEN', Blockly.LLL.ORDER_NONE) || 0
  var code = '(' + op + ' (* 32 ' + a + ') 0 (* 32 ' + b + ') )\n' 
  return code
}

/////
// POC-4 blocks
/////

Blockly.LLL['LLL_init'] = function(block) {
  // wrapper for contract init and body 
  var init = Blockly.LLL.statementToCode(block, 'INIT');
  var body = Blockly.LLL.statementToCode(block, 'BODY');
  return init + '  (return 0 (lll (seq ;; START BODY \n\n' + body + '\n  ) 0)) ;; END BODY' 
}

Blockly.LLL['LLL_byte'] = function(block) {
  // returns the byte at postion BYTE in DATA 
  var order = Blockly.LLL.ORDER_NONE;
  var byte_i = Blockly.LLL.valueToCode(block,'BYTE_I', order) || 0 
  var data = Blockly.LLL.valueToCode(block,'DATA', order) || 0 
  var code = '(byte '+ byte_i + ' ' + data + ')'
  return [code, Blockly.LLL.ORDER_ATOMIC]
}

Blockly.LLL['LLL_mstore'] = function(block) {
  // mstore statement
  var order = Blockly.LLL.ORDER_NONE;
  var spot = block.getFieldValue('SPOT') || 0
  var val = Blockly.LLL.valueToCode(block,'VAL', order) || 0 
  var code = '[' + spot  + ']:' + val
  return code + '\n'
}

Blockly.LLL['LLL_sstore'] = function(block) {
  // sstore statement
  var order = Blockly.LLL.ORDER_NONE;
  var spot = block.getFieldValue('SPOT') || 0
  spot = Blockly.LLL.smartVal(spot)
  var val = Blockly.LLL.valueToCode(block,'VAL', order) || 0 
  var code = '[[' + spot + ']]:' + val
  return code + '\n'
}

Blockly.LLL['LLL_mval'] = function(block) {
  // gets value from a memory spot 
  var order = Blockly.LLL.ORDER_NONE;
  var spot = block.getFieldValue('VAL') || 0  
  var code = '@' + spot 
  return [code, Blockly.LLL.ORDER_ATOMIC]
}

Blockly.LLL['LLL_sval'] = function(block) {
  // gets value from a storage spot 
  var order = Blockly.LLL.ORDER_NONE;
  var spot = block.getFieldValue('VAL') || 0  
  spot = Blockly.LLL.smartVal(spot)
  var code = '@@' + spot 
  return [code, Blockly.LLL.ORDER_ATOMIC]
}

Blockly.LLL['LLL_textval'] = function(block) {
  // gets value from a memory spot 
  var order = Blockly.LLL.ORDER_NONE;
  var val = block.getFieldValue('VAL') || 0  
  var code = '"' + val + '"'
  return [code, Blockly.LLL.ORDER_ATOMIC]
}

Blockly.LLL['LLL_spend'] = function(block) {
  // spend statement (a stripped version of call that just spends)
  var order = Blockly.LLL.ORDER_NONE;
  var address = Blockly.LLL.valueToCode(block,'TO', order) || 0  
  var money = Blockly.LLL.valueToCode(block,'MONEY', order) || '0wei' 
  var op = 'call'
  var gas = '(- (gas) 100)'
  var send_start_i = '0'
  var send_bytes = '0'
  var reply_start_i = '0'
  var reply_bytes = '0'
  var code = '('+ 
    op +' '+ 
    gas +' '+ 
    address +' '+ 
    money +' '+ 
    send_start_i +' '+ 
    send_bytes +' '+ 
    reply_start_i +' '+ 
    reply_bytes + ')\n'
  return code
}

Blockly.LLL['LLL_prefixop'] = function(block) {
  // neg, not  and other 1-argument forms 
  var op = block.getFieldValue('OP')
  var a = Blockly.LLL.valueToCode(block, 'A', Blockly.LLL.ORDER_NONE)
  var code = '(' + op + ' ' + a + ')' 
  return [code, Blockly.LLL.ORDER_ATOMIC]
}

Blockly.LLL['LLL_hash'] = function(block) {
  // hash  
  var op = 'sha3' 
  var a = Blockly.LLL.valueToCode(block, 'DATA_START', Blockly.LLL.ORDER_NONE) || 0
  var b = Blockly.LLL.valueToCode(block, 'DATA_LEN', Blockly.LLL.ORDER_NONE) || 0
  a = a.replace(/"/g,'') // unquote text spots 
  var code = '(' + op + ' (+ temp (* 32' + a + ')) (* 32' + b + ') )' 
  return [code, Blockly.LLL.ORDER_ATOMIC]
}

Blockly.LLL['LLL_call'] = function(block) {
  // call 
  var op = 'call' 
  var address = Blockly.LLL.valueToCode(block, 'ADDRESS', Blockly.LLL.ORDER_NONE) || '0x0' 
  var money = Blockly.LLL.valueToCode(block, 'MONEY', Blockly.LLL.ORDER_NONE) || 0
  var gas = Blockly.LLL.valueToCode(block, 'GAS', Blockly.LLL.ORDER_NONE) || '(- (gas) 100)'
  var send_start_i = Blockly.LLL.valueToCode(block, 'SEND_DATA_START', Blockly.LLL.ORDER_NONE) || 0
  var send_bytes = Blockly.LLL.valueToCode(block, 'SEND_DATA_BYTES', Blockly.LLL.ORDER_NONE) || 0
  var reply_start_i = Blockly.LLL.valueToCode(block, 'REPLY_DATA_START', Blockly.LLL.ORDER_NONE) || 0
  var reply_bytes = Blockly.LLL.valueToCode(block, 'REPLY_DATA_BYTES', Blockly.LLL.ORDER_NONE) || 0
  send_start_i = '(+ temp (* ' + send_start_i + ' 32))'
  send_bytes = '(* 32 ' + send_bytes + ')' 
  reply_start_i = '(+ temp (* ' + reply_start_i + ' 32))'
  reply_bytes = '(* 32 ' + reply_bytes + ')' 
  var code = '('+ 
    op +' '+ 
    gas +' '+ 
    address +' '+ 
    money +' '+ 
    send_start_i +' '+ 
    send_bytes +' '+ 
    reply_start_i +' '+ 
    reply_bytes + ')\n'
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.LLL['LLL_return'] = function(block) {
  // return 
  var op = 'return' 
  var a = Blockly.LLL.valueToCode(block, 'DATA_START', Blockly.LLL.ORDER_NONE) || 0
  var b = Blockly.LLL.valueToCode(block, 'DATA_LEN', Blockly.LLL.ORDER_NONE) || 0
  var code = '(' + op + ' (* 32 ' + a + ') (* 32' + b + ') )\n' 
  return code
}

Blockly.LLL['LLL_create'] = function(block) {
  // create 
  var op = 'create' 
  var a = Blockly.LLL.valueToCode(block, 'MONEY', Blockly.LLL.ORDER_NONE) || 0
  var b = Blockly.LLL.valueToCode(block, 'DATA_START', Blockly.LLL.ORDER_NONE) || 0
  var c = Blockly.LLL.valueToCode(block, 'DATA_LEN', Blockly.LLL.ORDER_NONE) || 0
  var code = '(' + op + ' ' + a + ' (+ temp (* 32 ' + b + ')) (* 32 ' + c + ') )' 
  return [code, Blockly.LLL.ORDER_ATOMIC];
}

Blockly.LLL['LLL_blockinfo'] = function(block) {
  // block related values 
  var code
  var val = block.getFieldValue('PROP')
  code = '(' + val + ')' 
  return [code, Blockly.LLL.ORDER_ATOMIC];
}

Blockly.LLL['LLL_tx'] = function(block) {
  // tx related values 
  var code
  var val = block.getFieldValue('PROP');
  code = '(' + val + ')'
  return [code, Blockly.LLL.ORDER_ATOMIC];
}

Blockly.LLL['LLL_contract'] = function(block) {
  // so called "closure" (contract) related values 
  var code
  var val = block.getFieldValue('PROP');
  if (val == '_input')
    code = '(calldataload 0)' 
  else if (val == '_input_count')
    code = '(div (calldatasize) 32)' 
  else if (val == '_input_byte_count')
    code = '(calldatasize)' 
  else 
    code = '(' + val + ')' 
  return [code, Blockly.LLL.ORDER_ATOMIC];
}

Blockly.LLL['LLL_forloop'] = function(block) {
  // LLL for loop in POC-4+ is like javascript for loop.
  var cond = Blockly.LLL.valueToCode(block, 'COND',
      Blockly.LLL.ORDER_NONE) || '(1)' 
  var first = Blockly.LLL.statementToCode(block, 'FIRST') || '()'
  var loop = Blockly.LLL.statementToCode(block, 'LOOP') || '()'
  var after_each = Blockly.LLL.statementToCode(block, 'AFTER_EACH') || '()'
  first = first.trim()
  cond = cond.trim()
  after_each = after_each.trim()
  return '(for ' + first + ' ' + cond + ' ' + after_each + '\n (seq \n' + loop + ' )  \n)\n'
}

Blockly.LLL['LLL_whileloop'] = function(block) {
  // LLL while loop in POC-4+ is implemented as a stubbed for loop.
  var is_until = (block.getFieldValue('WORD') == 'UNTIL')
  var cond = Blockly.LLL.valueToCode(block, 'COND',
      is_until ? Blockly.LLL.ORDER_LOGICAL_NOT :
      Blockly.LLL.ORDER_NONE) || 'false';
  var loop = Blockly.LLL.statementToCode(block, 'DO');
  if (is_until) {
    cond = '(not ' + cond + ' )';
  }
  return '(for ' + '()' + ' ' + cond + ' ()\n (seq \n' + loop + ' )\n)\n'
}

//////// 
// valid in POC-3 & POC-4 blocks
////////

Blockly.LLL['LLL_if'] = function(block) {
  // if statement
  var cond = Blockly.LLL.valueToCode(block, 'COND', Blockly.LLL.ORDER_NONE) || 1
  var then_do = Blockly.LLL.statementToCode(block, 'THEN');
  var else_do = Blockly.LLL.statementToCode(block, 'ELSE');
  var code = '(if ' + cond + '\n (seq \n' + then_do + ' )\n (seq \n' + else_do + ' )\n)\n';
  return code;
}

Blockly.LLL['LLL_when'] = function(block) {
  // when statement
  var word = block.getFieldValue('WORD') 
  var cond = Blockly.LLL.valueToCode(block, 'COND', Blockly.LLL.ORDER_NONE) || 1
  var then_do = Blockly.LLL.statementToCode(block, 'THEN');
  var code = '(' + word + ' '+ cond + '\n (seq \n' + then_do + ' )\n)\n';
  return code;
}

Blockly.LLL.twoArgForms = function(block) {
  // math functions, and other 2-argument forms 
  var op = block.getFieldValue('OP')
  var a = Blockly.LLL.valueToCode(block, 'A', Blockly.LLL.ORDER_NONE) || 0
  var b = Blockly.LLL.valueToCode(block, 'B', Blockly.LLL.ORDER_NONE) || 0
  var code = '(' + op + ' ' + a + ' ' + b + ')' 
  return [code, Blockly.LLL.ORDER_ATOMIC]
}

Blockly.LLL.smartVal = function(val) {
  // quotes non hexy strings and 'LLL-encodes' negative numbers
  var retval
  if ( isNaN(val) ) { // quote non-hexy string-like values
    var is_hexprefixed = ((val+'').substr(0,2).toUpperCase()=='0X') 
    var is_allhexchars = (/[^0-9a-fx]/i.exec(val)===null) 
    if (is_hexprefixed && is_allhexchars)  // don't quote hexy strings 
      retval = val
    else 
      retval = '"' + val.replace(/"/g,'') + '"' // outer quote normal strings
  } else  // is a number
    retval = (val<0) ? '(neg ' + -val + ')' : val + '' 
  return retval 
}

Blockly.LLL['LLL_math'] = Blockly.LLL.twoArgForms 
Blockly.LLL['LLL_logic'] = Blockly.LLL.twoArgForms 
Blockly.LLL['LLL_compare'] = Blockly.LLL.twoArgForms 
Blockly.LLL['LLL_bitlogic'] = Blockly.LLL.twoArgForms 

Blockly.LLL['LLL_val'] = function(block) {
  // takes user input and uses it as a number or string val 
  var order = Blockly.LLL.ORDER_NONE;
  var val = block.getFieldValue('VAL') || 0  
  var code = Blockly.LLL.smartVal(val) 
  return [code, Blockly.LLL.ORDER_ATOMIC]
}

Blockly.LLL['LLL_comment'] = function(block) {
  // a LLL comment  
  return ';; ' + block.getFieldValue('NOTE') + '\n' 
}

Blockly.LLL['LLL_stop'] = function(block) {
  // stop statement
  return '(stop)\n' 
}

Blockly.LLL['LLL_currency'] = function(block) {
  // currency value 
  var order = Blockly.LLL.ORDER_NONE;
  var amt = Blockly.LLL.valueToCode(block,'AMT', order) || 0 
  var denom = block.getFieldValue('DENOM')
  var code = amt + '' + denom 
  return [code, Blockly.LLL.ORDER_ATOMIC] 
}

Blockly.LLL['LLL_suicide'] = function(block) {
  // suicide statement
  var order = Blockly.LLL.ORDER_NONE;
  var to = Blockly.LLL.valueToCode(block,'TO', order) || 0 
  var code = '(suicide ' + to + ')\n' 
  return code
}

Blockly.LLL['LLL_load'] = function(block) {
  // mload sload value functions 
  var order = Blockly.LLL.ORDER_NONE;
  var pool = block.getFieldValue('POOL') 
  var slot = Blockly.LLL.valueToCode(block,'SPOT', order) || '0' 
  var code
  if (pool=='sload') code = '(sload ' + slot + ')'
  if (pool =='mload') {
    if (slot.substr(0,1) == '"' && slot.substr(-1,1) == '"') // we have quoted text as the slot number 
      // using text as the temp slot number is possible but inefficient, so convert it to a matching serpent "autonumbered" var 
      slot = slot.replace(/"/g,'') 
    else  // it's a number or expression for a slot number
      slot = '(+ temp (* 32 ' + slot + '))' // dereference 
    code = '(mload ' + slot + ' )' 
  }
  return [code, Blockly.LLL.ORDER_ATOMIC]
}

Blockly.LLL['LLL_store'] = function(block) {
  // mstore sstore statements
  var order = Blockly.LLL.ORDER_NONE;
  var pool = block.getFieldValue('POOL')  
  var slot = Blockly.LLL.valueToCode(block,'SPOT', order) || '0' 
  var val = Blockly.LLL.valueToCode(block,'VAL', order) || 0 
  if (pool =='mstore') 
    if (slot.substr(0,1) == '"' && slot.substr(-1,1) == '"') // we have quoted text as the slot number 
      // using text as the temp slot number is possible but inefficient, so convert it to a matching serpent "autonumbered" var 
      slot = slot.replace(/"/g,'') 
    else  // it's a number or expression for a slot number
      slot = '(+ temp (* 32 ' + slot + '))' // dereference 
  var code = '('+ pool + ' ' + slot + ' ' + val + ')'
  return code + '\n'
}

// Blockly.LLL['LLL_balance'] = function(block) {
//   // balance of address 
//   var order = Blockly.LLL.ORDER_NONE;
//   var addr = block.getFieldValue('ADDR') || '0x0' 
//   var code = '(balance '+ addr + ')'
//   return [code, Blockly.LLL.ORDER_ATOMIC]
// }

