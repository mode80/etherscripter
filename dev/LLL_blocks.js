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

'use strict';

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
// POC-5 blocks 
//

Blockly.Blocks['LLL_compile'] = {
  init: function() {
    this.setTooltip('Compiles code to memory at the slot provided, and returns the compiled length, measured in bytes).')
    this.setColour(VAR_COLOR)
    this.appendStatementInput('CODE')
      .appendField('compile')
    this.appendValueInput('TO_START')
      .appendField('to temp slot')
    this.setInputsInline(false)
    this.setPreviousStatement(false)
    this.setNextStatement(false)
    this.setOutput(true)
  }
};

Blockly.Blocks['LLL_compile_thru'] = {
  init: function() {
    this.setTooltip('Compiles code to memory at the slot provided, and returns the compiled length, measured in bytes. Compiled code will be truncated if necessary so as not to exceed the supplied end slot in memory.')
    this.setColour(VAR_COLOR)
    this.appendStatementInput('CODE')
      .appendField('compile')
    this.appendValueInput('TO_START')
      .appendField('to temp slot')
    this.appendValueInput('TO_END')
      .appendField('thru end slot')
    this.setInputsInline(false)
    this.setPreviousStatement(false)
    this.setNextStatement(false)
    this.setOutput(true)
  }
};

// Blockly.Blocks['LLL_init'] = {
//   init: function() {
//     this.setColour(LOOP_COLOR)
//     this.appendStatementInput('INIT')
//       .appendField('init')
//     this.appendStatementInput('BODY')
//       .appendField('body')
//     this.setInputsInline(false)
//     this.setPreviousStatement(false)
//     this.setNextStatement(false)
//   }
// };


//
// Kept POC-4 blocks 
//

var valValidator = function(given) {return given.replace(/[^a-z0-9_]/gi,'')}

Blockly.Blocks['LLL_mstore'] = {
  init: function() {
    this.setTooltip('Labels a temporary result. This stores the result at a temp slot identified by the @-prefixed label. This is a compact form of the [in temp slot __ put __] block. Data in temp slots last only until the contract stops running this time.')
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
    this.setTooltip('Labels a saved result. This stores the result in a save slot identified by the @@-prefixed label. This is a compact form of the [in save slot __ put __] block. Data in save slots are still available the next time this contract runs.')
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
    this.setTooltip('The data in a given temp slot. It is a compact form of the [data at temp slot ___] block.')
    this.setColour(VAR_COLOR)
    this.appendDummyInput()
        .appendField('@')
        .appendField(new Blockly.FieldTextInput('', valValidator ), 'VAL')
    this.setOutput(true)
  }
}

Blockly.Blocks['LLL_sval'] = {
  init: function() {
    this.setTooltip('The data in a given save slot. It is a compact form of the [data at save slot ___] block.')
    this.setColour(VAR_COLOR)
    this.appendDummyInput()
        .appendField('@@')
        .appendField(new Blockly.FieldTextInput('', valValidator ), 'VAL')
    this.setOutput(true)
  }
}

Blockly.Blocks['LLL_textval'] = {
  init: function() {
    this.setTooltip('Represents a string of text up to 32 letters long.')
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
    this.setTooltip('Spends the given amount of ethereum currency to the given address. The currency amount can be provided using a [__ ether] block for various denominations.')
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
    this.setTooltip('Provides info about this blockchain block.\n _timestamp_ is when the block was mined, measured as the number of seconds since 1970 UTC.\n _number_ is the block number.\n _previous_hash_ is the data fingerprint for the last block (not this one).\n _coinbase_ is the address of the miner rewarded for finding this block.\n _difficulty_ is a measure of the current difficulty for mining this block.\n _total_fee_budget_ is the total of all fees available for contract execution on this block, measured in gas units.\n')
    var VALS =
        [
         ['number', 'number'],
         ['previous hash', 'prevhash'],
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
    this.setTooltip('Provides info about this transaction. A transaction is any interaction with a contract caller.\n _amount_ is the monetary value sent in this transaction, measured in wei. _fee_budget_left_ is the remaining fees available for execution, measured in gas units. _input_slot_count_ is the number of input items provided. _input_byte_count_ is the length of all input(s) measured in bytes. (1 wei is the smallest unit of ethereum currency. 1 unit of gas is the minimum cost for an execution step.)\n')
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
    this.setTooltip('Provides info about this contract.\n _caller_ is the address of the account calling this contract. _address_ is this contract\'s address. _input_ is the first input provided by the caller. _balance_ is this contract\'s balance measured in wei.')
    var VALS =
      [['caller', 'caller'],
       ['address', 'address'],
       ['input', 'input'],
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
    this.setTooltip('Provides a "fingerprint" for the data in temp storage from the given start slot through the given end slot. Identical data always gives the same fingerprint.')
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
    this.setTooltip('Ends the contract execution and provides the temp data from the given start slot through the given end slot as a reply to this contract\'s caller.')
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
    this.setTooltip('Prefix operators. _not_ reverses a condition\'s result. _negative_ translates a positive numbers to its negative form. ')
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
    this.setTooltip('Sets up a loop of repeating code where: the _once_do_ statements happen first, then a _while_ condition is tested which either skips to the next block when false, or otherwise carries out the contents of _repeatedly_, followed by the contents of _each_time_ before looping back to test the _while_ condition once again, etc.')
    var OPERATORS =
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
    this.setTooltip('Sets up a loop of repeating code where: a _while_ or _until_ condition is tested, causing execution to either skip to the next block or otherwise carry out the contents of the _repeat_ section before looping back to test the condition once again, and so forth.')
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
    this.setTooltip('Sends data and ethereum currency to another contract, causing that contract to run and reply with data, if any. _address_ is given for the receiving contract. _amount_ is the number of ethereum currency units to send. _fee_budget_ is the maximum number of minimal-cost run steps this contract will pay for. A _start_slot_ and _end_slot_ must be given for temp data to be sent and the location of reply data to be received.')
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
    this.setTooltip('This is an alternative to the [send] block. It does the same thing but designates the temp data to be sent and received using the data length measured in bytes. The [send] block may be prefered to avoid dealing in bytes.')
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


//////
// POC-3 & POC-4 compatible blocks
//////

// Value blocks 

Blockly.Blocks['LLL_val'] = {
  // validating input block for LLL-legal values
  init: function() {
    this.setTooltip('Represents a number. Text provided here is converted to a number behind the scenes. Hex formated numbers, such as ethereum addresses, should be prefixed here with 0x.')
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
    this.setTooltip('Represents an amount of ethereum currency units.')
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
    this.setTooltip('Tests an _if_ condition and proceeds with the contents of _then_ when true or _else_ when false. A condition is usually supplied using a [compare] block. A result of 0 provided as a condition is considered false; anything else is considered true.')
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
    this.setTooltip('Tests a _when_ condition and proceeds with the contents of _then_ if it\'s true, or skips to the next block if it\'s false. A condition is usually supplied with a [compare] block. A result of 0 provided as a condition is considered false; anything else is considered true.')
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
    this.setTooltip('Compares two results for use in other blocks that require a condition.')
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
    this.setTooltip('Builds a new condition from two other conditions. _and_ has the same meaning as the English word. _or_ means either one or both. (_xor_ is rarely needed. It means one or the other, but not both.)')
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
    this.setTooltip('Represents the result of a math operation on two numbers. _+_ adds, _x_ multiplies, _-_ subtracts as expected. _÷_ divides, but gives the answer a "rounded down" whole number with no decimal places. _modulo_ gives the remainder after dividing the two numbers. _raised_to_ gives the result of the 1st number raised to the power of the 2nd number. (Traditional negative numbers are not available. Rather, numbers less than 0 "wrap around" to very large numbers between 2^128 and 2^255. The signed variations of _÷_ and _modulo_ treat these very large numbers as negative for the purpose of the calculation.)')
    var OPERATORS =
      [['+', '+'],
      ['×', '*'],
      ['-', '-'],
      ['÷', 'div'],
      ['raised to', 'exp'],
      ['modulo', 'mod'],
      ['(signed ÷)', 'sdiv'], // assumes top of the number range represents negative numbers 
      ['(signed mod)', 'smod'] // "
      ] // ditto above for 'mod' 
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
    this.setTooltip('Represents the data stored at the given temp slot or save slot, or alternatley, the input slot representing the data items provided by the caller, starting at 0.')
    var PLACES = 
    [['save slot', 'sload'],
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
    this.setTooltip('Represents the byte of data (often a "letter") numbered from 0 to 31 within the given data item.')
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
    this.setTooltip('Represents the currency unit balance of the provided address.')
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
    this.setTooltip('Has no effect on contract behaviour but provides for English notes on the nearby code.')
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
    this.setTooltip('Stops executing code (until the contract is called the next time)')
    this.setColour(STATEMENT_COLOR);
    this.appendDummyInput()
      .appendField('stop')
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['LLL_suicide'] = {
  init: function() {
    this.setTooltip('Destroys the contract along with any saved data, sending any ethereum currency balance to the provided address.')
    this.setColour(STATEMENT_COLOR);
    this.appendValueInput('TO')
      .appendField('self-destruct to')
    this.setPreviousStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['LLL_store'] = {
  init: function() {
    this.setTooltip('Stores a result at a given temp slot or save slot. Data in temp slots are only available while the contract runs this time. Data in save slots will also be available the next time it runs. Slots can be designated with either numbered or text labels.')
    var PLACES = 
	  [['save slot', 'sstore'],
    ['temp slot', 'mstore']]
    this.setColour(VAR_COLOR);
    this.appendValueInput('SLOT')
      .appendField('in')
      .appendField(new Blockly.FieldDropdown(PLACES), 'PLACE')
      .setCheck('Number')
    this.appendValueInput('VAL')
      .appendField('put')
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


