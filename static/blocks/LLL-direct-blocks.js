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
         ['data_count', "data_count"]];
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

//
// 1-input values 
//

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
    this.setOutput(true, 'Currency');
  }
};

// TODO validated ethereum string/text block 

// TODO validated ethereum number 


//
// flow control
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

// TODO ethereum specific if block 

//
// 2-input math 
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
      ['remainder of', 'smod'],
      ['+divide+', 'div'],
      ['+remainder of+', 'mod']];
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

//
// 1-input math 
//

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

// 
// statements
// 

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
      .setCheck('Currency')
    this.appendDummyInput()
      .appendField("to")
    this.appendValueInput('TO')
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

/*
// other statements 
    ',extro (deprecated), return(undocumented) ' +


//


// arrayish statements 2-input
    'mload,mstore,sload,sstore,txdata,' +

// crypto
    'sha256,ripemd160,ecmul,ecadd,ecsign,ecrecover,ecvalid,sha3,' +

// 2-input expressions
//   'lt,le,gt,ge,eq,' +

// 2-input flow control
// if, for when, unless

// 1-input flow contro
// not

// 2-input logic 
// 'and', 'or'.

*/