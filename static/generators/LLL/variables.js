/**
 * @license
 * Ethereum LLL generator for Blockly
 *
 * Copyright 2014 mode80
 */

/**
 * @fileoverview Generating LLL for variable blocks.
 * @author mode80@users.noreply.github.com
 */

'use strict';

goog.provide('Blockly.LLL.variables');

goog.require('Blockly.LLL');


Blockly.LLL['variables_get'] = function(block) {
  // Variable getter.
  var code = Blockly.LLL.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return ['("' + code + '")', Blockly.LLL.ORDER_ATOMIC];
};

Blockly.LLL['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.LLL.valueToCode(block, 'VALUE',
      Blockly.LLL.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.LLL.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return '("' + varName + '" ' + argument0 + ')\n';
};
