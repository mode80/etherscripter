/*
 * @license
 * Ethereum LLL3 generator for Blockly
 *
 * Copyright 2014 mode80
 */

/**
 * @fileoverview block definitions for LLL3-blocks
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
var COLOUR_COLOR = 58 

//
// New POC-4 blocks 
//
// don't implment: XOR, BYTE just yet 

Blockly.Blocks['LLL_spend'] = {
  init: function() {
    this.setColour(STATEMENT_COLOR);
    this.appendValueInput('MONEY')
      .appendField('spend')
      .setCheck('Number')
    this.appendValueInput('TO')
      .appendField('to')
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['LLL_blockinfo'] = {
  init: function() {
    var VALS =
        [
         ['prevhash', 'prevhash'],
         ['coinbase', 'coinbase'],
         ['timestamp', 'timestamp'],
         ['number', 'number'],
         ['difficulty', 'difficulty'],
         ['total gas', 'gaslimit'],
        ]
    this.setColour(VALUE_COLOR);
    this.setOutput(true);
    this.appendDummyInput()
        .appendField('block')
        .appendField(new Blockly.FieldDropdown(VALS), 'PROP')
  }
}

Blockly.Blocks['LLL_tx'] = {
  init: function() {
    var VALS =
        [
         ['value', 'callvalue'],
         //['origin', 'origin'], // missing from POC-4 ? 
         ['caller', 'caller'],
         ['data byte count', 'calldatasize'], // update to unpack this in 32-byte chunks as familiar tx.data 
         //['data bytes', 'calldataload'],// missing from POC-4 ?  
         //['gas price', 'gasprice'],// missing from POC-4 ?  
         ['gas left', 'gas'] 
        ]
    this.setColour(VALUE_COLOR)
    this.setOutput(true)
    this.appendDummyInput()
        .appendField('tx')
        .appendField(new Blockly.FieldDropdown(VALS), 'PROP')
  }
}

Blockly.Blocks['LLL_contract'] = {
  init: function() {
    var VALS =
        [
         ['address', 'address'],
         ['balance', 'balance'] 
        ]
    this.setColour(VALUE_COLOR)
    this.setOutput(true)
    this.appendDummyInput()
        .appendField('contract')
        .appendField(new Blockly.FieldDropdown(VALS), 'PROP')
  }
}

Blockly.Blocks['LLL_hash'] = {
  init: function() {
    this.setColour(MATH_COLOR);
    this.setOutput(true)
    this.appendDummyInput()
      .appendField('ID for data')
    this.appendValueInput('DATA_START')
      .appendField('from start slot');
    this.appendValueInput('DATA_END')
      .appendField('thru end slot');
    this.setInputsInline(false);
  }
};

Blockly.Blocks['LLL_return'] = {
  init: function() {
    this.setColour(STATEMENT_COLOR);
    this.appendDummyInput()
      .appendField('reply with data')
    this.appendValueInput('DATA_START')
      .appendField('from start slot');
    this.appendValueInput('DATA_END')
      .appendField('thru end slot');
    this.setPreviousStatement(true);
    this.setInputsInline(false);
  }
};

Blockly.Blocks['LLL_singleop'] = {
  init: function() {
    var OPERATORS =
      [['not', 'not'],
      ['negative', 'neg']]
    this.setColour(MATH_COLOR);
    this.setOutput(true);
    this.appendValueInput('A')
      .setCheck('Number')
      .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
  }
};

Blockly.Blocks['LLL_forloop'] = {
  init: function() {
    this.setColour(LOOP_COLOR);
    this.appendStatementInput('FIRST')
        .appendField('one time do');
    this.appendValueInput('COND')
        .setCheck('Boolean')
        .appendField('then as long as');
    this.appendStatementInput('LOOP')
        .appendField('repeatedly do');
    this.appendStatementInput('AFTER_EACH')
        .appendField('& each loop do');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['LLL_whileloop'] = {
  init: function() {
    var OPERATORS =
        [['while', 'WHILE'],
        ['until', 'UNTIL']];
    this.setColour(LOOP_COLOR);
    this.appendValueInput('COND')
        .setCheck('Boolean')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'WORD');
    this.appendStatementInput('DO')
        .appendField('repeat')
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['LLL_call'] = {
  init: function() {
    this.setColour(PROCEDURE_COLOR)
    this.appendValueInput('ADDRESS')
      .appendField('call address')
    this.appendValueInput('MONEY')
      .appendField('   sending amount')
    this.appendValueInput('GAS')
      .appendField('   with fee budget')
    this.appendDummyInput()
      .appendField('and data from')
    this.appendValueInput('SEND_DATA_START')
      .appendField('   start slot')
    this.appendValueInput('SEND_DATA_END')
      .appendField('   thru end slot')
    this.appendDummyInput()
      .appendField('getting reply into')
    this.appendValueInput('REPLY_DATA_START')
      .appendField('   start slot')
    this.appendValueInput('REPLY_DATA_BYTES')
      .appendField('   with byte length')
    // this.setOutput(true) // technically returns true when successful?
    this.setInputsInline(false)
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['LLL_init'] = {
  init: function() {
    this.setColour(FLOW_COLOR);
    this.appendDummyInput()
      .appendField('create contract')
    this.appendStatementInput('INIT')
        .appendField('initialize with');
    this.appendStatementInput('BODY')
        .appendField('thereafter run');
    this.setInputsInline(false)
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};



//
// Value blocks 
//

Blockly.Blocks['LLL_val'] = {
  // validating input block for LLL-legal values
  init: function() {
    var validator = function(given) {
      var retval = given ? given : ''
      var is_hexprefixed = ((retval+'').substr(0,2).toUpperCase()=='0X') 
      var is_allhexchars = (/[^0-9A-FX]/i.exec(retval)===null) 
      if (is_hexprefixed && is_allhexchars) return String(given) // hexy strings ok 
      if ( isNaN(retval) ) { // if a string 
        var commafree = retval.replace(/,/g, '')  // strip commas where otherwise numeric 
        if ( !isNaN(commafree) ) retval = commafree 
      }
      if ( retval && !isNaN(retval) ) { // if a number now
        retval = parseInt("0" + retval) // strip decimals
        retval = Math.abs(retval) // disallow negative vals 
      }
      else if ( retval && isNaN(retval) ) // if a string now
        retval = retval.substr(0,32) // truncate string to 32-byte Ethereum max
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
         ['data count', 'datan']];
    this.setColour(VALUE_COLOR);
    this.setOutput(true);
    this.appendDummyInput()
        .appendField('tx')
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
        .appendField('if')
    this.appendStatementInput('THEN')
        .appendField('then');
    this.appendStatementInput('ELSE')
        .appendField('else');
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
        .appendField('then');
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

Blockly.Blocks['LLL_compare'] = {
  init: function() {
    var OPERATORS =
      [['>', '>'],
      ['<', '<'],
      ['=', '='],
      ['\u2260', '!='],
      ['\u2264', '<='],
      ['\u2265', '>='] ];
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

Blockly.Blocks['LLL_logic'] = {
  init: function() {
    var OPERATORS =
      [['and', 'and'],
      ['or', 'or'] ];
    this.setColour(MATH_COLOR);
    this.setOutput(true);
    this.appendValueInput('A')
      .setCheck('Number')
    this.appendValueInput('B')
      .setCheck('Number')
      .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(false);
  }
};

Blockly.Blocks['LLL_math'] = {
  init: function() {
    var OPERATORS =
      [['+', 'add'],
      ['×', 'mul'],
      ['-', 'sub'],
      ['÷', 'sdiv'],// unsigned 'div' is also available but only leads to value ambiguity in contracts
      ['raised to', 'exp'],
      ['modulo', 'smod']] // ditto above for 'mod' 
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
    [['storage', 'sload'],
    ['memory', 'mload'],
    ['tx data', 'txdata']]
    this.setColour(LIST_COLOR);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(PLACES), 'PLACE')
    this.appendValueInput('SLOT')
      .setCheck('Number')
      .appendField('slot')
    this.appendDummyInput()
      .appendField('content')
    this.setOutput(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['LLL_balance'] = {
  init: function() {
    this.setColour(MATH_COLOR);
    this.appendValueInput('ADDR')
      .appendField('balance of')
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

// 
// Statements
// 

Blockly.Blocks['LLL_comment'] = {
  init: function() {
    this.setColour(COLOUR_COLOR);
    this.appendDummyInput()
      .appendField('note:')
      .appendField(new Blockly.FieldTextInput(''), 'NOTE')
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['LLL_stop'] = {
  init: function() {
    this.setColour(STATEMENT_COLOR);
    this.appendDummyInput()
      .appendField('stop')
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['LLL_suicide'] = {
  init: function() {
    this.setColour(STATEMENT_COLOR);
    this.appendValueInput('TO')
      .appendField('self-destruct to')
    this.setPreviousStatement(true);
    this.setInputsInline(true);
    this.setTooltip('contract sends full balance to specified address, then self-destructs');
  }
};

Blockly.Blocks['LLL_mktx'] = {
  init: function() {
    this.setColour(STATEMENT_COLOR);
    this.appendValueInput('MONEY')
      .appendField('spend')
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
	  [['storage', 'sstore'],
	  ['memory', 'mstore']]
    this.setColour(LIST_COLOR);
    this.appendValueInput('VAL')
      .appendField('put')
    this.appendValueInput('SLOT')
      .appendField('in')
      .appendField(new Blockly.FieldDropdown(PLACES), 'PLACE')
      .appendField('slot')
      .setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
