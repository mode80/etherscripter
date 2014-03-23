/**
 * @license
 * Ethereum LLL generator for Blockly
 *
 * Copyright 2014 mode80
 */

/**
 * @fileoverview Code generators for LLL operations translated 1-for-1
 * @author mode80@users.noreply.github.com
 */

goog.provide('Blockly.LLL.direct');

goog.require('Blockly.LLL');


Blockly.LLL['LLL_block'] = function(block) {
  // Boolean values true and false.
  var code
  var val = block.getFieldValue('PROP');
  if (val == 'basefee')
  	code = '(basefee)'
  else
  	code = '(blk_' + val + ')' 
  return [code, Blockly.LLL.ORDER_ATOMIC];
};

Blockly.LLL['LLL_transaction'] = function(block) {
  // Boolean values true and false.
  var code
  var val = block.getFieldValue('PROP');
  if (val == "value")
  	code = "(txvalue)"
  else if (val == "sender")
  	code = "(txsender)"
  else if (val == "data_count")
  	code = "(txdatan)"
  return [code, Blockly.LLL.ORDER_ATOMIC];
};

Blockly.LLL['LLL_contract'] = function(block) {
  // Boolean values true and false.
  var code
  var val = block.getFieldValue('PROP');
  if (val == "address")
  	code = "(myaddress)"
  else if (val == "balance")
  	code = "(balance myaddress)"
  return [code, Blockly.LLL.ORDER_ATOMIC];
};

Blockly.LLL['LLL_seq'] = function(block) {
  var repeats = Number(block.getFieldValue('TIMES'));
  var branch = Blockly.LLL.statementToCode(block, 'DO');
  var code = '(seq \n' + branch + ')\n';
  return code;
};

Blockly.LLL['LLL_math'] = function(block) {
  var op = block.getFieldValue('OP')
  var a = Blockly.LLL.valueToCode(block, 'A', Blockly.LLL.ORDER_NONE)
  var b = Blockly.LLL.valueToCode(block, 'B', Blockly.LLL.ORDER_NONE)
  var code = '(' + op + ' ' + a + ' ' + b + ')' 
  return [code, Blockly.LLL.ORDER_ATOMIC]
}

Blockly.LLL['LLL_neg'] = function(block) {
  // Negative.
  var order = Blockly.LLL.ORDER_NONE;
  var num = Blockly.LLL.valueToCode(block, 'NUM', order) || '0';
  var code = '(neg ' + num + ')';
  return [code, Blockly.LLL.ORDER_ATOMIC];
};

Blockly.LLL['LLL_stop'] = function(block) {
  // stop statement
  return "(stop)\n" 
};

Blockly.LLL['LLL_currency'] = function(block) {
  // stop statement
  var order = Blockly.LLL.ORDER_NONE;
  var amt = block.getFieldValue('AMT')
  var denom = block.getFieldValue('DENOM')
  var code = amt + '' + denom 
  return [code, Blockly.LLL.ORDER_ATOMIC] 
};

Blockly.LLL['LLL_mktx'] = function(block) {
  // mktx statement
  var order = Blockly.LLL.ORDER_NONE;
  var to = Blockly.LLL.valueToCode(block,'TO', order) || 0 
  var money = Blockly.LLL.valueToCode(block,'MONEY', order) || '0wei' 
  var code = '(mktx ' + to + ' ' + money + ' 0)\n' 
  return code
};

Blockly.LLL['LLL_suicide'] = function(block) {
  // suicide statement
  var order = Blockly.LLL.ORDER_NONE;
  var to = Blockly.LLL.valueToCode(block,'TO', order) || 0 
  var code = '(suicide ' + to + ')\n' 
  return code
};

Blockly.LLL['LLL_load'] = function(block) {
  // mload sload txdata value functions 
  var order = Blockly.LLL.ORDER_NONE;
  var place = Blockly.LLL.valueToCode(block,'PLACE', order) || 'mload' 
  var slot = Blockly.LLL.valueToCode(block,'SLOT', order) || 0 
  code = '('+ place + ' ' + slot + ')'
  return [code, Blockly.LLL.ORDER_ATOMIC]
};

Blockly.LLL['LLL_store'] = function(block) {
  // mstore sstore statements
  var order = Blockly.LLL.ORDER_NONE;
  var place = Blockly.LLL.valueToCode(block,'PLACE', order) || 'mstore' 
  var slot = Blockly.LLL.valueToCode(block,'SLOT', order) || 0 
  var val = Blockly.LLL.valueToCode(block,'VAL', order) || 0 
  code = '('+ place + ' ' + slot + ' ' + val + ')\n'
  return code
};
