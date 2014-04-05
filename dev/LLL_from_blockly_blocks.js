/**
 * @license
 * Copyright 2014 mode80
 */

/**
 * @fileoverview Generator of LLL from (some) standard Blockly blocks 
 * @author mode80@users.noreply.github.com
 */

'use strict';
goog.provide('Blockly.LLL.from_blocklyblocks');

goog.require('Blockly.LLL');

Blockly.LLL['controls_if'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var code = ""
  var argument = Blockly.LLL.valueToCode(block, 'IF' + n,
      Blockly.LLL.ORDER_NONE) || '0';
  var branch = Blockly.LLL.statementToCode(block, 'DO' + n);
  var if_or_when = (block.elseCount_ + block.elseifCount_) ? "if" : "when"
  code += '(' + if_or_when + ' ' + argument + '\n';
  code += ' (seq \n' +  branch + ' )\n' ;
    for (n = 1; n <= block.elseifCount_; n++) {
      argument = Blockly.LLL.valueToCode(block, 'IF' + n,
          Blockly.LLL.ORDER_NONE) || '0';
      branch = Blockly.LLL.statementToCode(block, 'DO' + n);
      if_or_when = (n == block.elseifCount_) ? "when" : "if"
      code += ' (' + if_or_when + ' ' + argument + '\n';
      code += ' (seq \n' +  branch + ' )\n' ;
    }
  if (block.elseCount_) {
    branch = Blockly.LLL.statementToCode(block, 'ELSE');
    code += ' (seq \n' + branch + ' )\n' ;
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
  var order = (operator == '==' || operator == '!=') ?
      Blockly.LLL.ORDER_EQUALITY : Blockly.LLL.ORDER_RELATIONAL;
  var argument0 = Blockly.LLL.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.LLL.valueToCode(block, 'B', order) || '0';
  var code = '(' + operator + ' ' + argument0 + ' ' + argument1 + ')';
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
    argument0 = '0';
    argument1 = '0';
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

Blockly.LLL['logic_negate'] = function(block) {
  // Negation.
  var order = Blockly.LLL.ORDER_LOGICAL_NOT;
  var argument0 = Blockly.LLL.valueToCode(block, 'BOOL', order) ||
      '1';
  var code = '(! ' + argument0 + ')';
  return [code, Blockly.LLL.ORDER_ATOMIC];
};

Blockly.LLL['logic_boolean'] = function(block) {
  // Boolean values true and false.
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? '1' : '0';
  return [code, Blockly.LLL.ORDER_ATOMIC];
};

Blockly.LLL['controls_whileUntil'] = function(block) {
  // Do while/until loop.
  var until = block.getFieldValue('MODE') == 'UNTIL';
  var argument0 = Blockly.LLL.valueToCode(block, 'BOOL',
      until ? Blockly.LLL.ORDER_LOGICAL_NOT :
      Blockly.LLL.ORDER_NONE) || 'false';
  var branch = Blockly.LLL.statementToCode(block, 'DO');
  if (Blockly.LLL.INFINITE_LOOP_TRAP) {
    branch = Blockly.LLL.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + block.id + '\'') + branch;
  }
  if (until) {
    argument0 = '(! ' + argument0 + ' )';
  }
  return '(for ' + argument0 + '\n (seq \n' + branch + ' ) \n)\n';
};

Blockly.LLL['math_number'] = function(block) {
  // Numeric value.
  // TODO: enforce no floats at the block UI level
  var code = parseInt(block.getFieldValue('NUM'));
  return [code, Blockly.LLL.ORDER_ATOMIC];
};

Blockly.LLL['math_arithmetic'] = function(block) {
  // Basic arithmetic operators, and power.
  var OPERATORS = {
    ADD: ['+', Blockly.LLL.ORDER_ADDITION],
    MINUS: ['-', Blockly.LLL.ORDER_SUBTRACTION],
    MULTIPLY: ['*', Blockly.LLL.ORDER_MULTIPLICATION],
    DIVIDE: ['/', Blockly.LLL.ORDER_DIVISION],
    POWER: ['EXP', Blockly.LLL.ORDER_COMMA]
  };
  var tuple = OPERATORS[block.getFieldValue('OP')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.LLL.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.LLL.valueToCode(block, 'B', order) || '0';
  var code = '(' + operator + ' ' + argument0 + ' ' + argument1 + ')';
  return [code, Blockly.LLL.ORDER_ATOMIC];
};

// TODO Need a UI block and generator here to support NEG

Blockly.LLL['math_modulo'] = function(block) {
  // Remainder computation.
  var argument0 = Blockly.LLL.valueToCode(block, 'DIVIDEND',
      Blockly.LLL.ORDER_MODULUS) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'DIVISOR',
      Blockly.LLL.ORDER_MODULUS) || '0';
  var code = '(% ' + argument0 + ' ' + argument1 + ' )';
  return [code, Blockly.LLL.ORDER_ATOMIC];
};

Blockly.LLL['text'] = function(block) {
  // Text value.
  // TODO: should this truncate past 32 byte Ethereum max len?
  var code = Blockly.LLL.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.LLL.ORDER_ATOMIC];
};

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
