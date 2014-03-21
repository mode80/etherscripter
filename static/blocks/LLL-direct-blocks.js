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
    this.appendDummyInput()
        .appendField('transaction');
    this.appendDummyInput()
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
    this.appendDummyInput()
        .appendField('contract');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(VALS), 'VAL');
  }
};


/*
// 1-input flow

	'seq

// 2-input flow

    'if,when,unless,for,seq,and,or' +

// 2-input operators

    'add,mul,sub,div,sdiv,mod,smod,exp,neg,' +

// 1-input expresions
	not,

// 2-input expressions

    'lt,le,gt,ge,eq,' +

// arrayish statements 2-input

    'mload,mstore,sload,sstore,txdata,' +

// other statements 

    'stop,extro,mktx,suicide' +

// crypto

    'sha256,ripemd160,ecmul,ecadd,ecsign,ecrecover,ecvalid,sha3,' +
*/