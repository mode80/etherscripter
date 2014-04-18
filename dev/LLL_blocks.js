/*
 * @license
 * Ethereum LLL generator for Blockly
 *
 * Copyright 2014 mode80
 */

/**
 * @fileoverview block definitions for LLL-blocks
 * @author mode80@users.noreply.github.com
 */

'use strict'

goog.provide('Blockly.Blocks.LLL')

goog.require('Blockly.Blocks')


var VALUE_COLOR = 190
var VAR_COLOR = 260
var FLOW_COLOR = 210 
var LOOP_COLOR = 160
var MATH_COLOR = 230 
var PROCEDURE_COLOR = 290
var STATEMENT_COLOR = 330
var OTHER_COLOR = 58 
var UNUSED_COLOR = 160

//
// Experimental POC-4 blocks 
//

var valValidator = function(given) {return given.replace(/[^a-z0-9_]/gi,'')}

Blockly.Blocks['LLL_mstore'] = {
  init: function() {
    this.setColour(VAR_COLOR)
    this.appendDummyInput()
      .appendField('@')
      .appendField(new Blockly.FieldTextInput('', valValidator ), 'SLOT')
    this.appendValueInput('VAL')
      .appendField('=')
    this.setInputsInline(true)
    this.setPreviousStatement(true)
    this.setNextStatement(true)
  }
}

Blockly.Blocks['LLL_sstore'] = {
  init: function() {
    this.setColour(VAR_COLOR)
    this.appendDummyInput()
      .appendField('store @@')
      .appendField(new Blockly.FieldTextInput('', valValidator ), 'SLOT')
    this.appendValueInput('VAL')
      .appendField('=')
    this.setInputsInline(true)
    this.setPreviousStatement(true)
    this.setNextStatement(true)
  }
}


Blockly.Blocks['LLL_mval'] = {
  init: function() {
    this.setColour(VAR_COLOR)
    this.appendDummyInput()
        .appendField('@')
        .appendField(new Blockly.FieldTextInput('', valValidator ), 'VAL')
    this.setOutput(true)
  }
}

Blockly.Blocks['LLL_sval'] = {
  init: function() {
    this.setColour(VAR_COLOR)
    this.appendDummyInput()
        .appendField('@@')
        .appendField(new Blockly.FieldTextInput('', valValidator ), 'VAL')
    this.setOutput(true)
  }
}

Blockly.Blocks['LLL_textval'] = {
  // validating input block for LLL-legal values
  init: function() {
    var validator = function(given) {return given.substr(0,32)}
    this.setColour(VALUE_COLOR)
    this.appendDummyInput()
        .appendField('"')
        .appendField(new Blockly.FieldTextInput('', validator ), 'VAL')
        .appendField('"')
    this.setOutput(true)
  }
}

///////
// New POC-4 blocks 
///////

Blockly.Blocks['LLL_spend'] = {
  init: function() {
    this.setColour(STATEMENT_COLOR);
    this.appendValueInput('MONEY')
      .appendField('spend')
      .setCheck('Number')
    this.appendValueInput('TO')
      .appendField('to')
    this.setInputsInline(true)
    this.setPreviousStatement(true)
    this.setNextStatement(true)
  }
}

Blockly.Blocks['LLL_blockinfo'] = {
  init: function() {
    var VALS =
        [
         ['number', 'number'],
         ['prevhash', 'prevhash'],
         ['coinbase', 'coinbase'],
         ['timestamp', 'timestamp'],
         ['difficulty', 'difficulty'],
         ['total fee budget', 'gaslimit'],
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
         ['amount', 'callvalue'], // monetary value
         //['origin', 'origin'], // missing from POC-4 ? 
         ['fee budget left', 'gas'],
         ['input slot count', '_input_slot_count'],// to be derived from (calldatasize)
         ['input byte count', '_input_byte_count'],// as per (calldatasize) 
         //['gas price', 'gasprice'],// missing from POC-4 ?  
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
      [['caller', 'caller'],
       ['address', 'address'],
       ['balance', 'balance']]
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
      .appendField('fingerprint for data')
    this.appendValueInput('DATA_START')
      .appendField('from start slot');
    this.appendValueInput('DATA_END')
      .appendField('thru end slot');
    this.setInputsInline(false);
  }
}

Blockly.Blocks['LLL_return'] = {
  init: function() {
    this.setColour(PROCEDURE_COLOR);
    this.appendDummyInput()
      .appendField('reply with data')
    this.appendValueInput('DATA_START')
      .appendField('from start slot')
    this.appendValueInput('DATA_END')
      .appendField('thru end slot')
    this.setPreviousStatement(true)
    this.setInputsInline(false)
  }
}

Blockly.Blocks['LLL_prefixop'] = {
  init: function() {
    var OPERATORS =
      [['not', 'not'],
      ['negative', 'neg']]
    this.setColour(MATH_COLOR)
    this.setOutput(true)
    this.appendValueInput('A')
      .setCheck('Number')
      .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP')
    this.setInputsInline(true)
  }
}

Blockly.Blocks['LLL_forloop'] = {
  init: function() {
    this.setColour(LOOP_COLOR);
    this.appendStatementInput('FIRST')
        .appendField('once do')
    this.appendValueInput('COND')
        .setCheck('Boolean')
        .appendField('then while')
    this.appendStatementInput('LOOP')
        .appendField('repeatedly')
    this.appendStatementInput('AFTER_EACH')
        .appendField('& each time')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
  }
}

Blockly.Blocks['LLL_whileloop'] = {
  init: function() {
    var OPERATORS =
        [['while', 'WHILE'],
        ['until', 'UNTIL']]
    this.setColour(LOOP_COLOR)
    this.appendValueInput('COND')
        .setCheck('Boolean')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'WORD');
    this.appendStatementInput('DO')
        .appendField('repeat')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
  }
}

Blockly.Blocks['LLL_send'] = {
  init: function() {
    this.setColour(PROCEDURE_COLOR)
    this.appendValueInput('ADDRESS')
      .appendField('send to address')
    this.appendValueInput('MONEY')
      .appendField('   amount')
    this.appendValueInput('GAS')
      .appendField('   with fee budget')
    this.appendDummyInput()
      .appendField('and data from')
    this.appendValueInput('SEND_DATA_START')
      .appendField('   start slot')
    this.appendValueInput('SEND_DATA_END')
      .appendField('   end slot')
    this.appendDummyInput()
      .appendField('getting reply into')
    this.appendValueInput('REPLY_DATA_START')
      .appendField('   start slot')
    this.appendValueInput('REPLY_DATA_END')
      .appendField('   end slot')
    this.setInputsInline(false)
    this.setPreviousStatement(true)
    this.setNextStatement(true)
  }
}

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
    this.appendValueInput('SEND_DATA_BYTES')
      .appendField('   with byte length')
    this.appendDummyInput()
      .appendField('getting reply into')
    this.appendValueInput('REPLY_DATA_START')
      .appendField('   start slot')
    this.appendValueInput('REPLY_DATA_BYTES')
      .appendField('   with byte length')
    this.setOutput(false) // technically returns true when successful?
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setInputsInline(false)
  }
}

Blockly.Blocks['LLL_init'] = {
  init: function() {
    this.setColour(LOOP_COLOR)
    this.appendStatementInput('INIT')
      .appendField('init')
    this.appendStatementInput('BODY')
      .appendField('body')
    this.setInputsInline(false)
    this.setPreviousStatement(false)
    this.setNextStatement(false)
  }
};


//////
// POC-3 & POC-4 compatible blocks
//////

// Value blocks 

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
        retval = parseInt(retval) // strip decimals
        // retval = Math.abs(retval) // negative vals converted to (neg -val) in generator 
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

// Flow control blocks

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
      ['unless','unless']]
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

// Function value blocks 

Blockly.Blocks['LLL_compare'] = {
  init: function() {
    var OPERATORS =
      [['=', '='],
      ['>', '>'],
      ['<', '<'],
      ['\u2260', '!='],
      ['\u2264', '<='],
      ['\u2265', '>=']]
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
      ['or', 'or'] ,
      ['(xor)', 'xor'] ,
      ];
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
      [['+', '+'],
      ['×', '*'],
      ['-', '-'],
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
    [['fixed slot', 'sload'],
    ['temp slot', 'mload'],
    ['input slot', '_input_load_slots'],
    ['input byte', '_input_load_bytes']]
    this.setColour(VAR_COLOR);
    this.appendDummyInput()
      .appendField('data at')
      .appendField(new Blockly.FieldDropdown(PLACES), 'PLACE')
    this.appendValueInput('SLOT')
      .setCheck('Number')
    this.setOutput(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['LLL_byte'] = {
  init: function() {
    this.setColour(MATH_COLOR);
    this.appendValueInput('BYTE_I')
      .appendField('byte at')
    this.appendValueInput('DATA')
      .appendField('in')
    this.setInputsInline(true);
    this.setOutput(true);
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

// Statements

Blockly.Blocks['LLL_comment'] = {
  init: function() {
    this.setColour(OTHER_COLOR);
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

Blockly.Blocks['LLL_store'] = {
  init: function() {
    var PLACES = 
	  [['fixed slot', 'sstore'],
    ['temp slot', 'mstore']]
    this.setColour(VAR_COLOR);
    this.appendValueInput('SLOT')
      .appendField('in')
      .appendField(new Blockly.FieldDropdown(PLACES), 'PLACE')
      .setCheck('Number')
    this.appendValueInput('VAL')
      .appendField('put')
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


/////////
// deprecated POC-3 blocks
/////////

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

