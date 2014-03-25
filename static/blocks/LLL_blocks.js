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


var VALUE_COLOR = 190
var LIST_COLOR = 260
var FLOW_COLOR = 210 
var LOOP_COLOR = 160
var MATH_COLOR = 230 
var PROCEDURE_COLOR = 290
var TEXT_COLOR = 160
var STATEMENT_COLOR = 330
var COLOUR_COLOR = 20

//
// Value blocks 
//

Blockly.Blocks['LLL_val'] = {
	// validating input block for LLL-legal values
  init: function() {
		var validator = function(given) {
			var retval = given ? given : ''
			if ( isNaN(retval) ) { 
				var commafree = retval.replace(/,/g, '')	
				if ( !isNaN(commafree) ) retval = commafree 
			}
			if ( retval && !isNaN(retval) ) 
				retval = parseInt(retval) // strip decimals
			else if ( retval && isNaN(retval) )
				retval = retval.substr(0,32) // truncate string 
		  return String(retval) 
		}
    this.setColour(VALUE_COLOR);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('', validator ), 'VAL');
    this.setOutput(true);
  }
};

Blockly.Blocks['LLL_block'] = {
  init: function() {
    var VALS =
        [['timestamp', 'timestamp'],
         ['number', 'number'],
         ['basefee', 'basefee'],
         ['prevhash', 'prevhash'],
         ['coinbase', 'coinbase'],
         ['difficulty', 'difficulty'],
         ['nonce', 'nonce'] ];
    this.setColour(VALUE_COLOR);
    this.setOutput(true);
    this.appendDummyInput()
        .appendField('block')
        .appendField(new Blockly.FieldDropdown(VALS), 'PROP');
  }
};

Blockly.Blocks['LLL_transaction'] = {
  init: function() {
    var VALS =
        [['value', 'value'],
         ['sender', 'sender'],
         ['data count', "datan"]];
    this.setColour(VALUE_COLOR);
    this.setOutput(true);
    this.appendDummyInput()
        .appendField('transaction')
        .appendField(new Blockly.FieldDropdown(VALS), 'PROP');
  }
};

Blockly.Blocks['LLL_contract'] = {
  init: function() {
    var VALS =
        [['balance', 'balance'],
        ['address', 'address']];
    this.setColour(VALUE_COLOR);
    this.setOutput(true);
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
    this.setColour(VALUE_COLOR);
    this.appendValueInput('AMT')
        .setCheck('Number')
    this.appendDummyInput()
   	    .appendField(new Blockly.FieldDropdown(DENOMS), 'DENOM');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

//
// Flow control blocks
//

Blockly.Blocks['LLL_if'] = {
  init: function() {
    this.setColour(FLOW_COLOR);
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
    this.setColour(FLOW_COLOR);
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
    this.setColour(LOOP_COLOR);
    this.appendValueInput('COND')
        .setCheck('Boolean')
        .appendField('repeat')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'WORD');
    this.appendStatementInput('DO')
        .appendField('do');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


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
    this.setColour(MATH_COLOR);
    this.setOutput(true);
    this.appendValueInput('A')
      .setCheck('Number')
    this.appendValueInput('B')
      .setCheck('Number')
      .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
  }
};

Blockly.Blocks['LLL_load'] = {
  init: function() {
    var PLACES = 
    [["storage", "sload"],
    ["memory", "mload"],
    ["transaction data", "txdata"]]
    this.setColour(LIST_COLOR);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(PLACES), 'PLACE')
    this.appendValueInput('SLOT')
      .setCheck('Number')
      .appendField("slot")
    this.setOutput(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['LLL_balance'] = {
  init: function() {
    this.setColour(MATH_COLOR);
    this.appendValueInput('ADDR')
      .appendField("balance of")
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

// 
// Statements
// 

Blockly.Blocks['LLL_stop'] = {
  init: function() {
    this.setColour(STATEMENT_COLOR);
    this.appendDummyInput()
      .appendField("stop")
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['LLL_suicide'] = {
  init: function() {
    this.setColour(STATEMENT_COLOR);
    this.appendValueInput('TO')
      .appendField("self-destruct to")
    this.setPreviousStatement(true);
    this.setInputsInline(true);
    this.setTooltip("contract sends full balance to specified address, then self-destructs");
  }
};

Blockly.Blocks['LLL_mktx'] = {
  init: function() {
    this.setColour(STATEMENT_COLOR);
    this.appendValueInput('MONEY')
      .appendField("spend")
      .setCheck('Number')
    this.appendValueInput('TO')
      .appendField('to')
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
    this.setColour(LIST_COLOR);
    this.appendValueInput('VAL')
      .appendField("put")
    this.appendValueInput('SLOT')
      .appendField('in')
      .appendField(new Blockly.FieldDropdown(PLACES), 'PLACE')
      .appendField("slot")
      .setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


/*
// TODO other statements 
    ',extro (deprecated), return(undocumented) ' +


// TODO crypto (deprecated)
    'sha256,ripemd160,ecmul,ecadd,ecsign,ecrecover,ecvalid,sha3,' +


*/