/**
 * @license
 * Ethereum LLL generator for Blockly
 *
 * Copyright 2014 mode80
 */

/**
 * @fileoverview block definitions for LLL-direct functions
 * @author mode80@users.noreply.github.com
 */

 'use strict';

goog.provide('Blockly.Blocks.LLL');

goog.require('Blockly.Blocks');

//
// 0-input values 
//

Blockly.Blocks['LLL_block'] = {
  /**
   * Block for transaction values.
   * @this Blockly.Block
   */
  init: function() {
    var VALS =
        [['number', 'number'],
         ['prevhash', 'prevhash'],
         ['coinbase', 'coinbase'],
         ['timestamp', 'timestamp'],
         ['difficulty', 'difficulty'],
         ['nonce', 'nonce'],
         ['basefee', 'basefee']];
    this.setColour(10);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField('block');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(VALS), 'VAL');
  }
};

Blockly.Blocks['LLL_transaction'] = {
  /**
   * Block for transaction values.
   * @this Blockly.Block
   */
  init: function() {
    var VALS =
        [['value', 'value'],
         ['sender', 'sender'],
         ['data_count', "data_count"]];
    this.setColour(10);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField('transaction')
        .appendField(new Blockly.FieldDropdown(VALS), 'VAL');
  }
};

Blockly.Blocks['LLL_contract'] = {
  /**
   * Block for contract values.
   * @this Blockly.Block
   */
  init: function() {
    var VALS =
        [['address', 'address'],
         ['balance', 'balance']];
    this.setColour(10);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField('contract')
        .appendField(new Blockly.FieldDropdown(VALS), 'VAL');
  }
};

//
// 1-input flow control
//

Blockly.Blocks['LLL_seq'] = {
  /**
   * Block for wrapping a sequence of statements.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("in sequence")
    this.appendStatementInput('DO')
        .appendField("do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


/*
// 2-input flow control

    'if,when,unless,for,seq,and,or' +

// 2-input operators

    'add,mul,sub,div,sdiv,mod,smod,exp,' +
*/

Blockly.Blocks['LLL_math'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
      [['add', 'add'],
      ['multiply', 'mul'],
      ['subtract', 'sub'],
      ['divide', 'sdiv'],
      ['raise', 'exp'],
      ['remainder of', 'smod'],
      ['+divide+', 'div'],
      ['+remainder of+', 'mod']];
    this.setColour(40);
    this.setOutput(true, 'Number');
    this.appendDummyInput()
   	  .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.appendValueInput('A')
      .setCheck('Number')
    this.appendDummyInput()
      .appendField("with")
    this.appendValueInput('B')
      .setCheck('Number')
    this.setInputsInline(true);
  }
};

/*

// 1-input expresions
	not,neg,

// 2-input expressions

    'lt,le,gt,ge,eq,' +

// arrayish statements 2-input

    'mload,mstore,sload,sstore,txdata,' +

// other statements 

    'stop,extro,mktx,suicide' +

// crypto

    'sha256,ripemd160,ecmul,ecadd,ecsign,ecrecover,ecvalid,sha3,' +
*/