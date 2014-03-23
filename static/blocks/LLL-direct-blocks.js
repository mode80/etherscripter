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
// Value blocks 
//

Blockly.Blocks['LLL_block'] = {
  init: function() {
    var VALS =
        [['number', 'number'],
         ['prevhash', 'prevhash'],
         ['coinbase', 'coinbase'],
         ['timestamp', 'timestamp'],
         ['difficulty', 'difficulty'],
         ['nonce', 'nonce'],
         ['basefee', 'basefee']];
    this.setColour(60);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField('block');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(VALS), 'PROP');
  }
};

Blockly.Blocks['LLL_transaction'] = {
  init: function() {
    var VALS =
        [['value', 'value'],
         ['sender', 'sender'],
         ['data count', "data_count"]];
    this.setColour(60);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField('transaction')
        .appendField(new Blockly.FieldDropdown(VALS), 'PROP');
  }
};

Blockly.Blocks['LLL_contract'] = {
  init: function() {
    var VALS =
        [['address', 'address'],
         ['balance', 'balance']];
    this.setColour(60);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField('contract')
        .appendField(new Blockly.FieldDropdown(VALS), 'PROP');
  }
};

Blockly.Blocks['LLL_currency'] = {
  init: function() {
    var DENOMS =
      [
      ['wei','wei'],
      ['Kwei','Kwei'],
      ['Mwei','Mwei'],
      ['Gwei','Gwei'],
      ['szabo','szabo'],
      ['finney','finney'],
      ['ether','ether'],
      ['Kether','Kether'],
      ['Mether','Mether'],
      ['Gether','Gether'],
      ['Tether','Tether'],
      ['Pether','Pether'],
      ['Eether','Eether'],
      ['Zether','Zether'],
      ['Yether','Yether'],
      ['Nether','Nether'],
      ['Dether','Dether'],
      ['Vether','Vether'],
      ['Uether','Uether'],
      ];
    this.setColour(60);
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput('0',
	    Blockly.FieldTextInput.nonnegativeIntegerValidator), 'AMT')
   	  .appendField(new Blockly.FieldDropdown(DENOMS), 'DENOM');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
  }
};

// TODO validated LLL text block 

// TODO validated LLL number 

//
// Flow control blocks
//

// TODO ethereum specific if block (,when, unless) 

//
// Function value blocks 
//

Blockly.Blocks['LLL_math'] = {
  /** add,mul,sub,div,sdiv,mod,smod,exp */
  init: function() {
    var OPERATORS =
      [['increase', 'add'],
      ['multiply', 'mul'],
      ['reduce', 'sub'],
      ['divide', 'sdiv'],
      ['raise', 'exp'],
      ['remainder of', 'smod']];
    this.setColour(60);
    this.setOutput(true, 'Number');
    this.appendDummyInput()
   	  .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.appendValueInput('A')
      .setCheck('Number')
    this.appendDummyInput()
      .appendField("by")
    this.appendValueInput('B')
      .setCheck('Number')
    this.setInputsInline(true);
  }
};

Blockly.Blocks['LLL_neg'] = {
  init: function() {
    this.setColour(60);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.appendDummyInput()
      .appendField("negative")
    this.appendValueInput('NUM')
      .setCheck('Number')
  }
};

Blockly.Blocks['LLL_load'] = {
  init: function() {
    var PLACES = 
	  [["memory", "mload"],
	  ["storage", "sload"],
	  ["transaction data", "txdata"]]
    this.setColour(60);
    this.appendDummyInput()
   	  .appendField(new Blockly.FieldDropdown(PLACES), 'PLACE');
    this.appendDummyInput()
      .appendField("slot #")
    this.appendValueInput('SLOT')
      .setCheck('Number')
    this.setOutput(true);
    this.setInputsInline(true);
  }
};

// 
// Statements
// 

Blockly.Blocks['LLL_seq'] = {
  init: function() {
    this.setColour(60);
    this.appendDummyInput()
        .appendField("in sequence")
    this.appendStatementInput('DO')
        .appendField("do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['LLL_stop'] = {
  init: function() {
    this.setColour(60);
    this.appendDummyInput()
      .appendField("stop")
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['LLL_suicide'] = {
  init: function() {
    this.setColour(60);
    this.appendDummyInput()
      .appendField("self-destruct to")
    this.appendValueInput('TO')
    this.setPreviousStatement(true);
    this.setInputsInline(true);
    this.setTooltip("contract sends full balance to specified address, then self-destructs");
  }
};

Blockly.Blocks['LLL_mktx'] = {
  init: function() {
    this.setColour(60);
    this.appendDummyInput().appendField("send")
    this.appendValueInput('MONEY')
      .setCheck('Number')
    this.appendDummyInput()
      .appendField("to")
    this.appendValueInput('TO')
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['LLL_store'] = {
  init: function() {
    var PLACES = 
	  [["memory", "mstore"],
	  ["storage", "sstore"]]
    this.setColour(60);
    this.appendDummyInput().appendField("store")
    this.appendValueInput('VAL')
    this.appendDummyInput()
      .appendField("to")
    this.appendDummyInput()
   	  .appendField(new Blockly.FieldDropdown(PLACES), 'PLACE');
    this.appendDummyInput()
      .appendField("slot #")
    this.appendValueInput('SLOT')
      .setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

// arrayish 2-input
//    'mload,mstore,sload,sstore,txdata,' +


/*
// TODO other statements 
    ',extro (deprecated), return(undocumented) ' +


// crypto
    'sha256,ripemd160,ecmul,ecadd,ecsign,ecrecover,ecvalid,sha3,' +

// TODO LLL-specific expression operators
//   'lt,le,gt,ge,eq,' +

// TODO LLL-specific loop 
// for 

// TODO LLL-specific 1-input flow contro
// not

// 2-input logic 
// 'and', 'or'.

*/