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

Blockly.Blocks['LLL_val'] = {
  init: function() {
		var validator = function(given) {
			var retval = given
			if ( isNaN(retval) ) { 
				var commafree = retval.replace(/,/g, '')	
				if ( !isNaN(commafree) ) retval = commafree 
			}
			if ( retval && !isNaN(retval) ) retval = parseInt(retval) // strip decimals
		  return String(retval) 
		}
    this.setColour(190);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('', validator ), 'VAL');
    this.setOutput(true);
  }
};

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
    this.setColour(190);
    this.setOutput(true);
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
    this.setColour(190);
    this.setOutput(true);
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
    this.setColour(190);
    this.setOutput(true);
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
    this.setColour(190);
    this.appendValueInput('AMT')
    		.setCheck('Number')
    this.appendDummyInput()
   	    .appendField(new Blockly.FieldDropdown(DENOMS), 'DENOM');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

// TODO validated LLL text block 

// TODO validated LLL number 

//
// Flow control blocks
//

Blockly.Blocks['LLL_if'] = {
  init: function() {
    this.setColour(190);
    this.appendValueInput('COND')
    		.setCheck('Boolean')
        .appendField("if")
    this.appendStatementInput('THEN')
        .appendField("then");
    this.appendStatementInput('ELSE')
        .appendField("else");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['LLL_when'] = {
  init: function() {
    var WORDS =
      [['when','when'],
      ['unless','unless']];
    this.setColour(190);
    this.appendValueInput('COND')
    		.setCheck('Boolean')
   			.appendField(new Blockly.FieldDropdown(WORDS), 'WORD');
    this.appendStatementInput('THEN')
        .appendField("then");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['LLL_for'] = {
  init: function() {
    var OPERATORS =
        [['while', 'WHILE'],
        ['until', 'UNTIL']];
    this.setColour(190);
    this.appendValueInput('BOOL')
        .setCheck('Boolean')
        .appendField('repeat')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'MODE');
    this.appendStatementInput('DO')
        .appendField('do');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

// TODO ethereum specific if block (,when, unless) 

//
// Function value blocks 
//

Blockly.Blocks['LLL_math'] = {
  /** add,mul,sub,div,sdiv,mod,smod,exp */
  init: function() {
    var OPERATORS =
      [[Blockly.Msg.MATH_ADDITION_SYMBOL, 'add'],
      [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, 'mul'],
      [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, 'sub'],
      [Blockly.Msg.MATH_DIVISION_SYMBOL, 'sdiv'],
      ['raised to', 'exp'],
      ['modulo', 'smod'],
      ['=', '='],
      ['\u2260', '!='],
      ['<', 'LT'],
      ['\u2264', '<='],
      ['>', 'GT'],
      ['\u2265', '>='],
      ['and', 'and'],
      ['or', 'or'] ];
    this.setColour(190);
    this.setOutput(true);
    this.appendValueInput('A')
      .setCheck('Number')
    this.appendDummyInput()
   	  .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.appendValueInput('B')
      .setCheck('Number')
    this.setInputsInline(true);
  }
};

Blockly.Blocks['LLL_neg'] = {
  init: function() {
    this.setColour(190);
    this.setOutput(true);
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
	  [["storage", "sload"],
	  ["memory", "mload"],
	  ["transaction data", "txdata"]]
    this.setColour(190);
    this.appendDummyInput()
   	  .appendField(new Blockly.FieldDropdown(PLACES), 'PLACE');
    this.appendDummyInput()
      .appendField("slot")
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
    this.setColour(190);
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
    this.setColour(190);
    this.appendDummyInput()
      .appendField("stop")
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['LLL_suicide'] = {
  init: function() {
    this.setColour(190);
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
    this.setColour(190);
    this.appendDummyInput().appendField("spend")
    this.appendValueInput('MONEY')
      .setCheck('Number')
    this.appendDummyInput()
      .appendField('to')
    this.appendValueInput('TO')
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['LLL_store'] = {
  init: function() {
    var PLACES = 
	  [["storage", "sstore"],
	  ["memory", "mstore"]]
    this.setColour(190);
    this.appendDummyInput().appendField("put")
    this.appendValueInput('VAL')
    this.appendDummyInput()
      .appendField('in')
    this.appendDummyInput()
   	  .appendField(new Blockly.FieldDropdown(PLACES), 'PLACE');
    this.appendDummyInput()
      .appendField("slot")
    this.appendValueInput('SLOT')
      .setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


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