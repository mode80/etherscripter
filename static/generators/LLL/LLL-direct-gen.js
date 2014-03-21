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
  var val = block.getFieldValue('VAL');
  if (val == 'basefee')
  	code = '(basefee)'
  else
  	code = '(blk_' + val + ')' 
  return [code, Blockly.LLL.ORDER_ATOMIC];
};

Blockly.LLL['LLL_transaction'] = function(block) {
  // Boolean values true and false.
  var code
  var val = block.getFieldValue('VAL');
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
  var val = block.getFieldValue('VAL');
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


