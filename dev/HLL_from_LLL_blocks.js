/**
 * @license
 * Copyright 2014 mode80
 */

/**
 * @fileoverview Generator of HLL from LLL-specific blocks 
 * @author mode80@users.noreply.github.com
 */

goog.provide('Blockly.HLL.LLLblocks_generator');

goog.require('Blockly.HLL');

/////
// New POC-4 blocks
/////


Blockly.HLL['LLL_byte'] = function(block) {
  // returns the byte at postion BYTE in DATA 
  var order = Blockly.HLL.ORDER_NONE;
  var byte_i = Blockly.HLL.valueToCode(block,'BYTE_I', order) || 0 
  var data = Blockly.HLL.valueToCode(block,'DATA', order) || 0 
  var code = '(byte '+ byte_i + ' ' + data + ')'
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['LLL_mstore'] = function(block) {
  // mstore statement
  var order = Blockly.HLL.ORDER_NONE;
  var slot = block.getFieldValue('SLOT') || 0
  var val = Blockly.HLL.valueToCode(block,'VAL', order) || 0 
  var code = '[' + slot + ']:' + val
  return code + '\n'
}

Blockly.HLL['LLL_sstore'] = function(block) {
  // sstore statement
  var order = Blockly.HLL.ORDER_NONE;
  var slot = block.getFieldValue('SLOT') || 0
  var val = Blockly.HLL.valueToCode(block,'VAL', order) || 0 
  var code = '[[' + slot + ']]:' + val
  return code + '\n'
}

Blockly.HLL['LLL_mval'] = function(block) {
  // gets value from a memory slot 
  var order = Blockly.HLL.ORDER_NONE;
  var val = block.getFieldValue('VAL') || 0  
  var code = '@' + val
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['LLL_sval'] = function(block) {
  // gets value from a storage slot 
  var order = Blockly.HLL.ORDER_NONE;
  var val = block.getFieldValue('VAL') || 0  
  var code = '@@' + val
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['LLL_textval'] = function(block) {
  // gets value from a memory slot 
  var order = Blockly.HLL.ORDER_NONE;
  var val = block.getFieldValue('VAL') || 0  
  var code = '"' + val + '"'
  return [code, Blockly.HLL.ORDER_ATOMIC]
}


Blockly.HLL['LLL_comment'] = function(block) {
  // a LLL comment  
  return ';; ' + block.getFieldValue('NOTE') + '\n' 
}


Blockly.HLL['LLL_spend'] = function(block) {
  // spend statement (a stripped version of call that just spends)
  var order = Blockly.HLL.ORDER_NONE;
  var address = Blockly.HLL.valueToCode(block,'TO', order) || 0  
  var money = Blockly.HLL.valueToCode(block,'MONEY', order) || '0wei' 
  var op = 'call'
  var gas = '0'
  var send_start_i = '0'
  var send_bytes = '0'
  var reply_start_i = '0'
  var reply_bytes = '0'
  var code = '('+ 
    op +' '+ 
    address +' '+ 
    money +' '+ 
    gas +' '+ 
    send_start_i +' '+ 
    send_bytes +' '+ 
    reply_start_i +' '+ 
    reply_bytes + ')\n'
  return code
}

Blockly.HLL['LLL_prefixop'] = function(block) {
  // neg, not  and other 1-argument forms 
  var op = block.getFieldValue('OP')
  var a = Blockly.HLL.valueToCode(block, 'A', Blockly.HLL.ORDER_NONE)
  var code = '(' + op + ' ' + a + ')' 
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['LLL_hash'] = function(block) {
  // hash  
  var op = 'sha3' 
  var a = Blockly.HLL.valueToCode(block, 'DATA_START', Blockly.HLL.ORDER_NONE) || 0
  var b = Blockly.HLL.valueToCode(block, 'DATA_END', Blockly.HLL.ORDER_NONE) || 0
  var code = '(' + op + ' ' + a + ' ' + b + ')' 
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['LLL_call'] = function(block) {
  // call 
  var op = 'call' 
  var address = Blockly.HLL.valueToCode(block, 'ADDRESS', Blockly.HLL.ORDER_NONE) || '0x0' 
  var money = Blockly.HLL.valueToCode(block, 'MONEY', Blockly.HLL.ORDER_NONE) || 0
  var gas = Blockly.HLL.valueToCode(block, 'GAS', Blockly.HLL.ORDER_NONE) || 0
  var send_start_i = Blockly.HLL.valueToCode(block, 'SEND_DATA_START', Blockly.HLL.ORDER_NONE) || 0
  var send_bytes = Blockly.HLL.valueToCode(block, 'SEND_DATA_BYTES', Blockly.HLL.ORDER_NONE) || 0
  var reply_start_i = Blockly.HLL.valueToCode(block, 'REPLY_DATA_START', Blockly.HLL.ORDER_NONE) || 0
  var reply_bytes = Blockly.HLL.valueToCode(block, 'REPLY_DATA_BYTES', Blockly.HLL.ORDER_NONE) || 0
  var code = '('+ 
    op +' '+ 
    address +' '+ 
    money +' '+ 
    gas +' '+ 
    send_start_i +' '+ 
    send_bytes +' '+ 
    reply_start_i +' '+ 
    reply_bytes + ')\n'
  return code
}

Blockly.HLL['LLL_send'] = function(block) {
  // call 
  var op = 'call' 
  var address = Blockly.HLL.valueToCode(block, 'ADDRESS', Blockly.HLL.ORDER_NONE) || '0x0' 
  var money = Blockly.HLL.valueToCode(block, 'MONEY', Blockly.HLL.ORDER_NONE) || 0
  var gas = Blockly.HLL.valueToCode(block, 'GAS', Blockly.HLL.ORDER_NONE) || 0
  var send_start_i = Blockly.HLL.valueToCode(block, 'SEND_DATA_START', Blockly.HLL.ORDER_NONE) || 0
  var send_end_i = Blockly.HLL.valueToCode(block, 'SEND_DATA_END', Blockly.HLL.ORDER_NONE) || 0
  var reply_start_i = Blockly.HLL.valueToCode(block, 'REPLY_DATA_START', Blockly.HLL.ORDER_NONE) || 0
  var reply_end_i = Blockly.HLL.valueToCode(block, 'REPLY_DATA_END', Blockly.HLL.ORDER_NONE) || 0
  var send_bytes = (send_end_i - send_start_i) * 32 
  var reply_bytes = (reply_end_i - reply_start_i) * 32 
  var code = '('+ 
    op + ' '+ 
    address + ' '+ 
    money + ' '+ 
    gas + ' '+ 
    send_start_i + ' '+ 
    send_bytes + ' '+ 
    reply_start_i + ' '+ 
    reply_bytes + ')\n'
  return code
}

Blockly.HLL['LLL_return'] = function(block) {
  // return 
  var op = 'return' 
  var a = Blockly.HLL.valueToCode(block, 'DATA_START', Blockly.HLL.ORDER_NONE) || 0
  var b = Blockly.HLL.valueToCode(block, 'DATA_END', Blockly.HLL.ORDER_NONE) || 0
  var code = '(' + op + ' ' + a + ' ' + b + ')\n' 
  return code
}

Blockly.HLL['LLL_blockinfo'] = function(block) {
  // block related values 
  var code
  var val = block.getFieldValue('PROP')
  code = '(' + val + ')' 
  return [code, Blockly.HLL.ORDER_ATOMIC];
}

Blockly.HLL['LLL_tx'] = function(block) {
  // tx related values 
  var code
  var val = block.getFieldValue('PROP');
  if (val == '_input_slot_count') // count of 32-byte slots isn't supported natively but we can have it calculated
    code = '(add (div (calldatasize) 32) (if (mod calldatasize 32) 1 0) )' 
  else if (val == '_input_byte_count')
    code = '(calldatasize)' 
  else 
    code = '(' + val + ')'
  return [code, Blockly.HLL.ORDER_ATOMIC];
}

Blockly.HLL['LLL_contract'] = function(block) {
  // so called "closure" (contract) related values 
  var code
  var val = block.getFieldValue('PROP');
  if (val == 'balance')
    code = '(balance (address))' 
  else if (val == 'input')
    code = '(calldataload 0)' 
  else 
    code = '(' + val + ')' 
  return [code, Blockly.HLL.ORDER_ATOMIC];
}

Blockly.HLL['LLL_forloop'] = function(block) {
  // LLL for loop in POC-4+ is like javascript for loop.
  var cond = Blockly.HLL.valueToCode(block, 'COND',
      Blockly.HLL.ORDER_NONE) || '(1)' 
  var first = Blockly.HLL.statementToCode(block, 'FIRST') || '()'
  var loop = Blockly.HLL.statementToCode(block, 'LOOP') || '()'
  var after_each = Blockly.HLL.statementToCode(block, 'AFTER_EACH') || '()'
  first = first.trim()
  cond = cond.trim()
  after_each = after_each.trim()
  return '(for ' + first + ' ' + cond + ' ' + after_each + '\n { \n' + loop + ' }  \n)\n'
}

Blockly.HLL['LLL_init'] = function(block) {
  // wrapper for contract init and body 
  var init = Blockly.HLL.statementToCode(block, 'INIT');
  var body = Blockly.HLL.statementToCode(block, 'BODY');
  //return '{ ;; INIT\n\n' + init + '\n}\n\n{ ;; BODY\n\n' + body + '\n}'
  return init + '\n}\n\n{\n\n' + body 
}

Blockly.HLL['LLL_whileloop'] = function(block) {
  // LLL while loop in POC-4+ is implemented as a stubbed for loop.
  var is_until = (block.getFieldValue('WORD') == 'UNTIL')
  var cond = Blockly.HLL.valueToCode(block, 'COND',
      is_until ? Blockly.HLL.ORDER_LOGICAL_NOT :
      Blockly.HLL.ORDER_NONE) || 'false';
  var loop = Blockly.HLL.statementToCode(block, 'DO');
  if (is_until) {
    cond = '(not ' + cond + ' )';
  }
  return '(for ' + '()' + ' ' + cond + ' ()\n { \n' + loop + ' }\n)\n'
}

//////// 
// valid in POC-3 & POC-4 blocks
////////

Blockly.HLL['LLL_if'] = function(block) {
  // if statement
  var cond = Blockly.HLL.valueToCode(block, 'COND', Blockly.HLL.ORDER_NONE) || 1
  var then_do = Blockly.HLL.statementToCode(block, 'THEN');
  var else_do = Blockly.HLL.statementToCode(block, 'ELSE');
  var code = '(if ' + cond + '\n { \n' + then_do + ' }\n { \n' + else_do + ' }\n)\n';
  return code;
}

Blockly.HLL['LLL_when'] = function(block) {
  // when statement
  var word = block.getFieldValue('WORD') 
  var cond = Blockly.HLL.valueToCode(block, 'COND', Blockly.HLL.ORDER_NONE) || 1
  var then_do = Blockly.HLL.statementToCode(block, 'THEN');
  var code = '(' + word + ' '+ cond + '\n { \n' + then_do + ' }\n)\n';
  return code;
}

Blockly.HLL.twoArgForms = function(block) {
  // math functions, and other 2-argument forms 
  var op = block.getFieldValue('OP')
  var a = Blockly.HLL.valueToCode(block, 'A', Blockly.HLL.ORDER_NONE) || 0
  var b = Blockly.HLL.valueToCode(block, 'B', Blockly.HLL.ORDER_NONE) || 0
  var code = '(' + op + ' ' + a + ' ' + b + ')' 
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['LLL_math'] = Blockly.HLL.twoArgForms 
Blockly.HLL['LLL_logic'] = Blockly.HLL.twoArgForms 
Blockly.HLL['LLL_compare'] = Blockly.HLL.twoArgForms 

Blockly.HLL['LLL_val'] = function(block) {
  // takes user input and uses it as a number or string val 
  var order = Blockly.HLL.ORDER_NONE;
  var val = block.getFieldValue('VAL') || 0  
  var code = '' 
  // if ( isNaN(val) ) { // quote non-hexy string-like values
  //   var is_hexprefixed = ((val+'').substr(0,2).toUpperCase()=='0X') 
  //   var is_allhexchars = (/[^0-9a-fx]/i.exec(val)===null) 
  //   if (is_hexprefixed && is_allhexchars)  // don't quote hexy strings 
  //     code = val
  //   else 
  //     code = '"' + val + '"' // quote normal strings
  // } else  // is a number
    code = (val<0) ? '(neg ' + -val + ')' : val + '' 
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['LLL_comment'] = function(block) {
  // a LLL comment  
  return ';; ' + block.getFieldValue('NOTE') + '\n' 
}

Blockly.HLL['LLL_stop'] = function(block) {
  // stop statement
  return '(stop)\n' 
}

Blockly.HLL['LLL_currency'] = function(block) {
  // currency value 
  var order = Blockly.HLL.ORDER_NONE;
  var amt = Blockly.HLL.valueToCode(block,'AMT', order) || 0 
  var denom = block.getFieldValue('DENOM')
  var code = amt + '' + denom 
  return [code, Blockly.HLL.ORDER_ATOMIC] 
}

Blockly.HLL['LLL_suicide'] = function(block) {
  // suicide statement
  var order = Blockly.HLL.ORDER_NONE;
  var to = Blockly.HLL.valueToCode(block,'TO', order) || 0 
  var code = '(suicide ' + to + ')\n' 
  return code
}

Blockly.HLL['LLL_load'] = function(block) {
  // mload sload txdata value functions 
  var order = Blockly.HLL.ORDER_NONE;
  var place = block.getFieldValue('PLACE') 
  var slot = Blockly.HLL.valueToCode(block,'SLOT', order) || 0 
  var code
  if (place=='sload') code = '(sload ' + slot + ')'
  if (place=='mload') code = '(mload ' + slot + ')'
  if (place=='_input_load_slots') code = '(calldataload ' + slot * 32 + ')'
  if (place=='_input_load_bytes') code = '(calldataload ' + slot + ')'
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['LLL_store'] = function(block) {
  // mstore sstore statements
  var order = Blockly.HLL.ORDER_NONE;
  var place = block.getFieldValue('PLACE')  
  var slot = Blockly.HLL.valueToCode(block,'SLOT', order) || 0 
  var val = Blockly.HLL.valueToCode(block,'VAL', order) || 0 
  var code = '('+ place + ' ' + slot + ' ' + val + ')'
  // if (place=='sstore') code = '[[' + slot + ']] ' + val
  // if (place=='mstore') code = '[' + slot + '] ' + val
  return code + '\n'
}

Blockly.HLL['LLL_balance'] = function(block) {
  // balance of address 
  var order = Blockly.HLL.ORDER_NONE;
  var addr = block.getFieldValue('ADDR') || '0x0' 
  var code = '(balance '+ addr + ')'
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

