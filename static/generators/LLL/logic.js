/**
 * @license
 * Ethereum LLL generator for Blockly
 *
 * Copyright 2014 mode80
 */

/**
 * @fileoverview Generating LLL for logic blocks.
 * @author mode80@users.noreply.github.com
 */

'use strict';

goog.provide('Blockly.LLL.logic');

goog.require('Blockly.LLL');


Blockly.LLL['controls_if'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var code = ""
  var argument = Blockly.LLL.valueToCode(block, 'IF' + n,
      Blockly.LLL.ORDER_NONE) || 'false';
  var branch = Blockly.LLL.statementToCode(block, 'DO' + n);
  var if_or_when = (block.elseCount_ + block.elseifCount_) ? "when" : "if"
  code += '(' + if_or_when + ' ' + argument + '\n';
  code += '  (seq \n' +  branch + '\n  )' ;
    for (n = 0; n <= block.elseifCount_; n++) {
      argument = Blockly.JavaScript.valueToCode(block, 'IF' + n,
          Blockly.LLL.ORDER_NONE) || 'false';
      branch = Blockly.LLL.statementToCode(block, 'DO' + n);
      if_or_when = (n == block.elseifCount_) ? "when" : "if"
      code += '(' + if_or_when + ' ' + argument + '\n';
      code += '  (seq \n' +  branch + '\n  )' ;
    }
    for (n = 0; n <= block.elseifCount_; n++) {
      code += '\n)'
    }
  if (block.elseCount_) {
    branch = Blockly.LLL.statementToCode(block, 'ELSE');
    code += '(seq \n' + branch + '\n  )' ;
  }
  return code + ')\n';
};

Blockly.LLL['logic_compare'] = function(block) {
  // Comparison operator.
  var OPERATORS = {
    EQ: '=',
    NEQ: '!=',
    LT: '<',
    LTE: '<=',
    GT: '>',
    GTE: '>='
  };
  var operator = OPERATORS[block.getFieldValue('OP')];
  var argument0 = Blockly.LLL.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.LLL.valueToCode(block, 'B', order) || '0';
  var code = '(' + operator + ' ' + argument0 + ' ' + argument1 ')';
  return [code, Blockly.LLL.ORDER_ATOMIC];
};

Blockly.LLL['logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  var operator = (block.getFieldValue('OP') == 'AND') ? 'and' : 'or';
  var order = (operator == 'and') ? Blockly.LLL.ORDER_LOGICAL_AND :
      Blockly.LLL.ORDER_LOGICAL_OR;
  var argument0 = Blockly.LLL.valueToCode(block, 'A', order);
  var argument1 = Blockly.LLL.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 'false';
    argument1 = 'false';
  } else {
    // Single missing arguments have no effect on the return value.
    var defaultArgument = (operator == 'and') ? '1' : '0';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  var code = '(' + operator + ' ' + argument0 + ' ' + argument1 + ')';
  return [code, Blockly.LLL.ORDER_ATOMIC];
};

Blockly.JavaScript['logic_negate'] = function(block) {
  // Negation.
  var order = Blockly.JavaScript.ORDER_LOGICAL_NOT;
  var argument0 = Blockly.JavaScript.valueToCode(block, 'BOOL', order) ||
      'true';
  var code = '(! ' + argument0 + ')';
  return [code, Blockly.LLL.ORDER_ATOMIC];
};

Blockly.JavaScript['logic_boolean'] = function(block) {
  // Boolean values true and false.
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? '1' : '0';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
Blockly.JavaScript['logic_null'] = function(block) {
  // Null data type.
  return ['null', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['logic_ternary'] = function(block) {
  // Ternary operator.
  var value_if = Blockly.JavaScript.valueToCode(block, 'IF',
      Blockly.JavaScript.ORDER_CONDITIONAL) || 'false';
  var value_then = Blockly.JavaScript.valueToCode(block, 'THEN',
      Blockly.JavaScript.ORDER_CONDITIONAL) || 'null';
  var value_else = Blockly.JavaScript.valueToCode(block, 'ELSE',
      Blockly.JavaScript.ORDER_CONDITIONAL) || 'null';
  var code = value_if + ' ? ' + value_then + ' : ' + value_else
  return [code, Blockly.JavaScript.ORDER_CONDITIONAL];
};
*/
