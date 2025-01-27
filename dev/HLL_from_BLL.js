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

Blockly.HLL.MAX_GAS = '(tx.gas - 100)'

/////
// New POC-5 blocks
/////

Blockly.HLL['RESERVE'] = function(block) {
  var order = Blockly.HLL.ORDER_NONE;
  var len = Blockly.HLL.valueToCode(block,'LEN', order) || 0 
  var code = 'temp = array(' + len + '+1)\n' // reserve an extra one for position 0
  return code
}

Blockly.HLL['ARRAY_MAKE'] = function(block) {
  var order = Blockly.HLL.ORDER_NONE;
  var spot = block.getFieldValue('SPOT') || ''  
  var len = Blockly.HLL.valueToCode(block,'LEN', order) || 0 
  var code = spot + ' = array(' + len + ')\n' 
  return code
}

Blockly.HLL['ARRAY_GET'] = function(block) {
  var order = Blockly.HLL.ORDER_NONE;
  var index = Blockly.HLL.valueToCode(block,'ORDINAL', order) || 0 
  var spot = block.getFieldValue('SPOT') || ''  
  var code = spot + '[' + index + '-1]'
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['ARRAY_SET'] = function(block) {
  var order = Blockly.HLL.ORDER_NONE;
  var index = Blockly.HLL.valueToCode(block,'ORDINAL', order) || 0 
  var spot = block.getFieldValue('SPOT') || ''  
  var val = Blockly.HLL.valueToCode(block,'VAL', order) || 0  
  var code = spot + '[' + index + '-1] = ' + val + '\n'
  return code
}

Blockly.HLL['ARRAY'] = function(block) {
  var order = Blockly.HLL.ORDER_NONE;
  var spot = block.getFieldValue('SPOT') || ''  
  var code = spot
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['INPUT'] = function(block) {
  var index = block.getFieldValue('INDEX') || 0
  var code = 'msg.data[' + index + ']' 
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['THINPUT'] = function(block) {
  var ordinal = Blockly.HLL.valueToCode(block, 'ORDINAL', Blockly.HLL.ORDER_NONE) || 1
  var index = '' + ordinal + '-1'
  var code = 'msg.data[' + index + ']' 
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['COMPILE_MAX'] = function(block) {
  var for_compiling = Blockly.HLL.statementToCode(block, 'CODE');
  var to_start = Blockly.HLL.valueToCode(block, 'TO_START', Blockly.HLL.ORDER_NONE) || 0
  var max_len = Blockly.HLL.valueToCode(block, 'MAX_LEN', Blockly.HLL.ORDER_NONE) || 0
  var code = '///// WARNING -- Serpent does not yet support inline compiling /////\n'
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['COPY'] = function(block) {
  var op = block.getFieldValue('OP') || ''  
  var a = Blockly.HLL.valueToCode(block, 'DATA_START', Blockly.HLL.ORDER_NONE) || 0
  var b = Blockly.HLL.valueToCode(block, 'DATA_LEN', Blockly.HLL.ORDER_NONE) || 0
  var code = '///// WARNING -- Serpent does not yet support copying code to memory /////\n'
  return code
}

/////
// POC-4 blocks
/////

Blockly.HLL['INIT'] = function(block) {
  // wrapper for contract init and body 
  var init = Blockly.HLL.statementToCode(block, 'INIT');
  var body = Blockly.HLL.statementToCode(block, 'BODY');
  return 'init:\n' + init + 'code:\n' + body + '\n' 
}

Blockly.HLL['BYTE'] = function(block) {
  // returns the byte at postion BYTE in DATA 
  var order = Blockly.HLL.ORDER_NONE;
  var byte_i = Blockly.HLL.valueToCode(block,'BYTE_I', order) || 0 
  var data = Blockly.HLL.valueToCode(block,'DATA', order) || 0 
  var code = 'getch('+ data + ', ' + byte_i + ')'
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['MSTORE'] = function(block) {
  // store value in memory 
  var order = Blockly.HLL.ORDER_NONE;
  var spot = block.getFieldValue('SPOT') || 0
  var val = Blockly.HLL.valueToCode(block,'VAL', order) || 0 
  var code = '' + spot  + ' = ' + val
  return code + '\n'
}

Blockly.HLL['SSTORE'] = function(block) {
  // store value in storage 
  var order = Blockly.HLL.ORDER_NONE;
  var spot = block.getFieldValue('SPOT') || 0
  spot = Blockly.HLL.smartVal(spot)
  var val = Blockly.HLL.valueToCode(block,'VAL', order) || 0 
  var code = 'contract.storage[' + spot  + '] = ' + val
  return code + '\n'
}

Blockly.HLL['MVAL'] = function(block) {
  // gets value from a memory spot 
  var order = Blockly.HLL.ORDER_NONE;
  var spot = block.getFieldValue('SPOT') || 0  
  var code = '' + spot + ''
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['SVAL'] = function(block) {
  // gets value from a storage spot 
  var order = Blockly.HLL.ORDER_NONE;
  var spot = block.getFieldValue('SPOT') || 0  
  spot = Blockly.HLL.smartVal(spot)
  var code = 'contract.storage[' + spot + ']'
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['TEXTVAL'] = function(block) {
  //a quoted text value 
  var order = Blockly.HLL.ORDER_NONE;
  var val = block.getFieldValue('VAL') || 0  
  var code = '"' + val + '"'
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['COMMENT'] = function(block) {
  // a comment  
  return '# ' + block.getFieldValue('NOTE') + '\n' 
}


Blockly.HLL['SPEND'] = function(block) {
  // spend statement (a stripped version of call that just spends)
  var order = Blockly.HLL.ORDER_NONE;
  var address = Blockly.HLL.valueToCode(block,'TO', order) || 0  
  var money = Blockly.HLL.valueToCode(block,'AMOUNT', order) || '0wei' 
  var gas = Blockly.HLL.MAX_GAS 
  var code = 'send('+ address +', '+ money +', '+ gas +')\n'
  return code
}

Blockly.HLL['PREFIXOP'] = function(block) {
  // neg, not  and other 1-argument forms 
  var code
  var op = block.getFieldValue('OP')
  var a = Blockly.HLL.valueToCode(block, 'A', Blockly.HLL.ORDER_NONE)
  if (op=='neg') code = '-(' + a + ')'
  if (op=='not') code = 'not (' + a + ')' 
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['HASH'] = function(block) {
  // hash  
  var code = ''
  var slot = Blockly.HLL.valueToCode(block, 'DATA_START', Blockly.HLL.ORDER_NONE) || 0
  var b = Blockly.HLL.valueToCode(block, 'DATA_LEN', Blockly.HLL.ORDER_NONE) || 0
  if (slot.substr(0,1) == '"' && slot.substr(-1,1) == '"') // we have text as the slot number 
    // using text as the temp slot number is possible but inefficient, so convert it to a matching serpent "autonumbered" var 
    slot = '[' + slot.replace(/"/g,'') + ']'
  else  // it's a number or expression for a slot number
    slot = 'temp+' + slot + '*32' 
  code += 'sha3(' + slot + ', ' + b + ')'
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['CALL'] = function(block) {
  // call = msg in serpent 
  var op = 'msg' 
  var address = Blockly.HLL.valueToCode(block, 'ADDRESS', Blockly.HLL.ORDER_NONE) || '0x0' 
  var money = Blockly.HLL.valueToCode(block, 'AMOUNT', Blockly.HLL.ORDER_NONE) || 0
  var gas = Blockly.HLL.valueToCode(block, 'GAS', Blockly.HLL.ORDER_NONE) || Blockly.HLL.MAX_GAS 
  var send_start = Blockly.HLL.valueToCode(block, 'SEND_DATA_START', Blockly.HLL.ORDER_NONE) || 0
  var send_len= Blockly.HLL.valueToCode(block, 'SEND_DATA_LEN', Blockly.HLL.ORDER_NONE) || 0
  var reply_start = Blockly.HLL.valueToCode(block, 'REPLY_DATA_START', Blockly.HLL.ORDER_NONE) || 0
  var reply_len= Blockly.HLL.valueToCode(block, 'REPLY_DATA_LEN', Blockly.HLL.ORDER_NONE) || 0
  send_start = 'temp+' + send_start + '*32' 
  reply_start= 'temp+' + reply_start + '*32' 
  // msg(to, value, gas, datastart, datalen, outputstart, outputlen)
  var code = 
    op +'( '+ 
    address +', '+ 
    money +', '+ 
    gas +', '+ 
    send_start +', '+  
    send_len+', '+ 
    reply_start +', '+ 
    reply_len + ')\n'
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['RETURN'] = function(block) {
  // return 
  var op = 'return' 
  var a = Blockly.HLL.valueToCode(block, 'DATA_START', Blockly.HLL.ORDER_NONE) || 0
  var b = Blockly.HLL.valueToCode(block, 'DATA_LEN', Blockly.HLL.ORDER_NONE) || 0
  var code = op + '(temp+' + a + '*32, ' + b + ')\n' 
  return code
}

Blockly.HLL['CREATE'] = function(block) {
  // create 
  var op = 'create' 
  var a = Blockly.HLL.valueToCode(block, 'AMOUNT', Blockly.HLL.ORDER_NONE) || 0
  var b = Blockly.HLL.valueToCode(block, 'DATA_START', Blockly.HLL.ORDER_NONE) || 0
  var c = Blockly.HLL.valueToCode(block, 'DATA_LEN', Blockly.HLL.ORDER_NONE) || 0
  var gas = Blockly.HLL.MAX_GAS
  //  x = create(endowment, gas, datastart, datalen) 
  var code = op + '( ' + a + ', ' + gas + ', temp+32*' + b + ', ' + c + ')' 
  return [code, Blockly.HLL.ORDER_ATOMIC];
}

Blockly.HLL['BLOCKINFO'] = function(block) {
  // block related values 
  var code
  var val = block.getFieldValue('PROP');
  code = 'block.' + val 
  return [code, Blockly.HLL.ORDER_ATOMIC];
}

Blockly.HLL['TX'] = function(block) {
  // tx related values 
  var code
  var val = block.getFieldValue('PROP');
  if (val == 'callvalue') 
    val = 'msg.value'
  else
    val = 'tx.' + val
  code = '' + val + ''
  return [code, Blockly.HLL.ORDER_ATOMIC];
}

Blockly.HLL['CONTRACT'] = function(block) {
  // contract related values 
  var code
  var val = block.getFieldValue('PROP');

  if (val == '_input')
    code = 'msg.data[0]' 
  else if (val == '_input_count')
    code = 'msg.datasize' 
  else if (val == '_input_byte_count')
    code = '(msg.datasize * 32)' 
  else if (val == 'address')
    code = 'contract.address' 
  else if (val == 'caller')
    code = 'msg.sender' 
  else if (val == 'balance')
    code = 'contract.balance' 
  else if (val == 'codesize')
    code = 'contract.codesize' 
  else if (val == 'msize')
    code = 'contract.memsize' 
  return [code, Blockly.HLL.ORDER_ATOMIC];
}

Blockly.HLL['FORLOOP'] = function(block) {
  var cond = Blockly.HLL.valueToCode(block, 'COND',
      Blockly.HLL.ORDER_NONE) || '(1)' 
  var first = Blockly.HLL.statementToCode(block, 'FIRST') || '()'
  var loop = Blockly.HLL.statementToCode(block, 'LOOP') || '()'
  var after_each = Blockly.HLL.statementToCode(block, 'AFTER_EACH') || '()'
  first = first.trim()
  cond = cond.trim()
  after_each = after_each.trim()
  return first + '\n' + 'while ' + cond + ':\n' + loop + '  ' + after_each + '' 
}

Blockly.HLL['WHILELOOP'] = function(block) {
  var is_until = (block.getFieldValue('WORD') == 'UNTIL')
  var cond = Blockly.HLL.valueToCode(block, 'COND',
      is_until ? Blockly.HLL.ORDER_LOGICAL_NOT :
      Blockly.HLL.ORDER_NONE) || 'false'
  var loop = Blockly.HLL.statementToCode(block, 'DO')
  if (is_until) {
    cond = 'not (' + cond + ')'
  }
  return 'while ' + cond + ':\n' + loop + '' 
}

//////// 
// valid in POC-3 & POC-4 blocks
////////

Blockly.HLL['IF'] = function(block) {
  // if statement
  var cond = Blockly.HLL.valueToCode(block, 'COND', Blockly.HLL.ORDER_NONE) || 1
  var then_do = Blockly.HLL.statementToCode(block, 'THEN')
  var else_do = Blockly.HLL.statementToCode(block, 'ELSE')
  var code = 'if ' + cond + ':\n' + then_do + 'else:\n' + else_do 
  return code;
}

Blockly.HLL['WHEN'] = function(block) {
  // when statement
  var op  = block.getFieldValue('WORD') 
  var cond = Blockly.HLL.valueToCode(block, 'COND', Blockly.HLL.ORDER_NONE) || 1
  var then_do = Blockly.HLL.statementToCode(block, 'THEN');
  if (op=='unless') cond = 'not (' + cond + ')'
  op = 'if'
  var code =  op + ' ' + cond + ':\n' + then_do ;
  return code;
}

Blockly.HLL.twoArgForms = function(block) {
  // math functions, and other 2-argument forms 
  var op = block.getFieldValue('OP')
  var a = Blockly.HLL.valueToCode(block, 'A', Blockly.HLL.ORDER_NONE) || 0
  var b = Blockly.HLL.valueToCode(block, 'B', Blockly.HLL.ORDER_NONE) || 0
  var code = op + '( ' + a + ', ' + b + ')' 
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL.smartVal = function(val) {
  // quotes non hexy strings and 'HLL-encodes' negative numbers
  var retval
  if ( isNaN(val) ) { // quote non-hexy string-like values
    var is_hexprefixed = ((val+'').substr(0,2).toUpperCase()=='0X') 
    var is_allhexchars = (/[^0-9a-fx]/i.exec(val)===null) 
    if (is_hexprefixed && is_allhexchars)  // don't quote hexy strings 
      retval = val
    else 
      retval = '"' + val.replace(/"/g,'') + '"' // outer quote normal strings
  } else  // is a number
    retval = (val<0) ? '-(' + -val + ')' : val + '' 
  return retval 
}

Blockly.HLL['MATH'] = function(block) {
  // math functions
  var op = block.getFieldValue('OP')
  var order = Blockly.HLL.ORDER_NONE 
  var a = Blockly.HLL.valueToCode(block, 'A', order ) || 0
  var b = Blockly.HLL.valueToCode(block, 'B', order ) || 0
  if (op=='+' || op=='-') {order = Blockly.HLL.ORDER_ADDITIVE }  
  if (op=='*') {order = Blockly.HLL.ORDER_MULTIPLICATIVE } 
  if (op=='div') {op = '/'; order = Blockly.HLL.ORDER_MULTIPLICATIVE }
  if (op=='exp') {op = '^'; order = Blockly.HLL.ORDER_EXPONENTIATION } 
  if (op=='mod') {op = '%'; order = Blockly.HLL.ORDER_MULTIPLICATIVE } 
  if (op=='sdiv') {op = '#/'; order = Blockly.HLL.ORDER_MULTIPLICATIVE } 
  if (op=='smod') {op = '#%'; order = Blockly.HLL.ORDER_MULTIPLICATIVE } 
  var code = '(' + a + ' ' + op + ' ' + b + ')' 
  return [code, order]
}

Blockly.HLL['LOGIC'] = function(block) {
  // logic functions
  var op = block.getFieldValue('OP')
  var a = Blockly.HLL.valueToCode(block, 'A', Blockly.HLL.ORDER_NONE) || 0
  var b = Blockly.HLL.valueToCode(block, 'B', Blockly.HLL.ORDER_NONE) || 0
  if (op=='||') op = 'or'
  if (op=='&&') op = 'and'
  var code = '(' + a + ' ' + op + ' ' + b + ')' 
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['COMPARE'] = function(block) {
  // compare functions
  var op = block.getFieldValue('OP')
  var a = Blockly.HLL.valueToCode(block, 'A', Blockly.HLL.ORDER_NONE) || 0
  var b = Blockly.HLL.valueToCode(block, 'B', Blockly.HLL.ORDER_NONE) || 0
  var code = ''
  if (op=='=') op = '==' 
  if (op=='!=')
    code = 'not (' + a + ' == ' + b + ')'
  else
    code = a + ' ' + op + ' ' + b 
  if (op=='sgt' || op=='slt') {
    code = '///// WARNING -- signed comparison operators not supported yet in Serpent /////' 
  }
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['BITLOGIC'] = function(block) {
  // bitlogic functions
  var op = block.getFieldValue('OP')
  var a = Blockly.HLL.valueToCode(block, 'A', Blockly.HLL.ORDER_NONE) || 0
  var b = Blockly.HLL.valueToCode(block, 'B', Blockly.HLL.ORDER_NONE) || 0
  if (op == '~' || op == '^' ) { 
    var code = '///// WARNING ~ and ^ bitwise operators not supported yet in Serpent /////'
  }
  else
    var code = a + ' ' + op + ' ' + b 
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['VAL'] = function(block) {
  // takes user input and uses it as a number or string val quoted as needed
  var order = Blockly.HLL.ORDER_NONE;
  var val = block.getFieldValue('VAL') || 0  
  var code = Blockly.HLL.smartVal(val) 
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['STOP'] = function(block) {
  // stop statement
  return 'stop\n' 
}

Blockly.HLL['CURRENCY'] = function(block) {
  // currency value 
  var order = Blockly.HLL.ORDER_NONE;
  var amt = Blockly.HLL.valueToCode(block,'AMT', order) || 0 
  var denom = block.getFieldValue('DENOM')
  var multiplier = {
    'wei'    : '',
    'Kwei'   : '*10^3', 
    'Mwei'   : '*10^6',  
    'Gwei'   : '*10^9',  
    'szabo'  : '*10^12',  
    'finney' : '*10^15',  
    'ether'  : '*10^18',  
    'Kether' : '*10^21',  
    'Mether' : '*10^24',  
    'Gether' : '*10^27',  
    'Tether' : '*10^30',  
    'Pether' : '*10^33',  
    'Eether' : '*10^37',  
    'Zether' : '*10^40',  
    'Yether' : '*10^43',  
    'Nether' : '*10^45',  
    'Dether' : '*10^48',  
    'Vether' : '*10^51',  
    'Uether' : '*10^54',  
  }
  var code = amt + multiplier[denom] 
  return [code, Blockly.HLL.ORDER_ATOMIC] 
}

Blockly.HLL['SUICIDE'] = function(block) {
  // suicide statement
  var order = Blockly.HLL.ORDER_NONE;
  var to = Blockly.HLL.valueToCode(block,'TO', order) || 0 
  var code = 'suicide(' + to + ')\n' 
  return code
}

Blockly.HLL['LOAD'] = function(block) {
  // mload sload value functions 
  var order = Blockly.HLL.ORDER_NONE;
  var pool = block.getFieldValue('POOL') 
  var slot = Blockly.HLL.valueToCode(block,'SPOT', order) || '0' 
  var code
  if (pool=='sload') 
    code = 'contract.storage[' + slot + ']'
  if (pool=='mload') {
    if (slot.substr(0,1) == '"' && slot.substr(-1,1) == '"') // we have text as the slot number 
      code = slot.replace(/"/g,'') // using text as the temp slot number is possible but inefficient, so convert it to a matching serpent "autonumbered" var  
    else  // it's a number or expression for a slot number
      code = 'temp[' + slot + ']' // dereference 
  }
  return [code, Blockly.HLL.ORDER_ATOMIC]
}

Blockly.HLL['STORE'] = function(block) {
  // mstore sstore statements
  var order = Blockly.HLL.ORDER_NONE;
  var pool = block.getFieldValue('POOL')  
  var slot = Blockly.HLL.valueToCode(block,'SPOT', order) || '0' 
  var val = Blockly.HLL.valueToCode(block,'VAL', order) || 0 
  if (pool =='mstore') {
    if (slot.substr(0,1) == '"' && slot.substr(-1,1) == '"') // we have quoted text as the slot number 
      // using text as the temp slot number is possible but inefficient, so convert it to a matching serpent "autonumbered" var 
      code = slot.replace(/"/g,'') 
    else  // it's a number or expression for a slot number
      code = 'temp[' + slot + ']' // dereference 
    var code = code + ' = ' + val + '\n'
  }
  if (pool =='sstore') 
    var code = 'contract.storage[' + slot + '] = ' + val + '\n'
  return code 
}

