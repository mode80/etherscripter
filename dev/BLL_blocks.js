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
var PROCEDURE_COLOR = 100 
var STATEMENT_COLOR = 330
var COMMENT_COLOR = 58 
var ARRAY_COLOR = 290 

//
// POC-5 blocks 
//


Blockly.Blocks.ordinals =
  [
   ['1st', '0'],
   ['2nd', '1'],
   ['3rd', '2'],
   ['4th', '3'],
   ['5th', '4'],
   ['6th', '5'],
   ['7th', '6'],
   ['8th', '7'],
   ['9th', '8'],
   ['10th', '9'],
   ['11th', '10'],
   ['12th', '11'],
   ['13th', '12'],
   ['14th', '13'],
   ['15th', '14'],
   ['16th', '15'],
   ['17th', '16'],
   ['18th', '17'],
   ['19th', '18'],
   ['20th', '19'],
   ]

Blockly.Blocks['RESERVE'] = {
  init: function() {
    this.setTooltip('Reserves the given amount of numbered temp slots. Using numbered temp slots without reserving them first may cause unpredictable conflicts with named temp slots.')
    this.setColour(VAR_COLOR);
    this.appendValueInput('LEN')
      .appendField('reserve')
    this.appendDummyInput()
      .appendField('temp slots')
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['ARRAY_MAKE'] = {
  init: function() {
    this.setTooltip('Makes a new named data set of the given size.')
    this.setColour(ARRAY_COLOR);
    this.appendDummyInput()
      .appendField('make')
      .appendField(new Blockly.FieldTextInput('', varValidator ), 'SPOT')
    this.appendValueInput('LEN')
      .appendField('set of size')
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['ARRAY_GET'] = {
  init: function() {
    this.setTooltip('Get the numbered data item from the named set. The "1th" item is the first item in the set. "2th" is second, etc.')
    this.setColour(ARRAY_COLOR);
    this.appendValueInput('ORDINAL')
    this.appendDummyInput()
      .appendField('th item of')
      .appendField(new Blockly.FieldTextInput('', varValidator ), 'SPOT')
      .appendField('set')
    this.setOutput(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['ARRAY_SET'] = {
  init: function() {
    this.setTooltip('Set the numbered data item in the named set. The "1th" item is the first item in the set. "2th" is second, etc.')
    this.setColour(ARRAY_COLOR);
    this.appendValueInput('ORDINAL')
    this.appendValueInput('VAL')
      .appendField('th item of')
      .appendField(new Blockly.FieldTextInput('', varValidator ), 'SPOT')
      .appendField('set =')
    this.setOutput(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['ARRAY'] = {
  init: function() {
    this.setTooltip('A reference to a previously created named data set.')
    this.setColour(ARRAY_COLOR)
    this.appendDummyInput()
        .appendField('set')
        .appendField(new Blockly.FieldTextInput('', valValidator ), 'SPOT')
    this.setOutput(true)
  }
}

Blockly.Blocks['INPUT'] = {
  init: function() {
    this.setTooltip('The numbered input provided to this contract by the caller, as specified by the given ordinal number. The first item is "1th", second is "2th" etc.)')
    this.setColour(VALUE_COLOR)
    this.setOutput(true)
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(Blockly.Blocks.ordinals), 'INDEX')
      .appendField('input')
    this.setInputsInline(true)
  }
}

Blockly.Blocks['THINPUT'] = {
  init: function() {
    this.setTooltip('The numbered input provided to this contract by the caller, as specified by the given ordinal number. (Programmers note: the first item is 1 not 0)')
    this.setColour(VALUE_COLOR)
    this.setOutput(true)
    this.appendValueInput('ORDINAL')
    this.appendDummyInput()
      .appendField('th input')
    this.setInputsInline(true)
  }
}

Blockly.Blocks['COPY'] = {
  init: function() {
    var OPS =
        [
         ['code', 'codecopy'],
         ['input', 'calldatacopy'],
        ]
    this.setTooltip('Copies code or input data to temp storage.')
    this.setColour(PROCEDURE_COLOR);
    this.appendDummyInput()
      .appendField('copy')
      .appendField(new Blockly.FieldDropdown(OPS), 'OP')
    this.appendValueInput('DATA_LEN')
      .appendField('of length')
    this.appendValueInput('DATA_START')
      .appendField('to temp slot')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setInputsInline(false)
  }
}


Blockly.Blocks['COMPILE_MAX'] = {
  init: function() {
    this.setTooltip('Compiles code to the temp slot provided, and returns the compiled length, measured in bytes. Compiled code will be truncated if necessary so as not to exceed the maximum length provided in slots.')
    this.setColour(PROCEDURE_COLOR)
    this.appendStatementInput('CODE')
      .appendField('compile')
    this.appendValueInput('TO_START')
      .appendField('to temp slot')
    this.appendValueInput('MAX_LEN')
      .appendField('with max length')
    this.setInputsInline(false)
    this.setPreviousStatement(false)
    this.setNextStatement(false)
    this.setOutput(true)
  }
};

Blockly.Blocks['CREATE'] = {
  init: function() {
    this.setTooltip('Creates a new contract from the compiled code at the given temp slot, endows it with the given amount of currency, and returns the address of the new contract (or 0 if it fails).')
    this.setColour(PROCEDURE_COLOR);
    this.appendDummyInput()
      .appendField('create contract')
    this.appendDummyInput()
      .appendField('from code')
    this.appendValueInput('DATA_START')
      .appendField('   at start slot')
    this.appendValueInput('DATA_LEN')
      .appendField('   of length')
    this.appendValueInput('AMOUNT')
      .appendField('sending amount')
    this.setPreviousStatement(false)
    this.setNextStatement(false)
    this.setOutput(true)
    this.setInputsInline(false)
  }
}

Blockly.Blocks['INIT'] = {
  init: function() {
    this.setTooltip('Code inside "init" runs one time only at contract creation. Code inside "body" is the code that gets run on every other contact with the contract. An init block is required for valid LLL.')
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


// Blockly.Blocks['BALANCE'] = {
//   init: function() {
//     this.setTooltip('Represents the currency unit balance of the provided address.')
//     this.setColour(MATH_COLOR);
//     this.appendValueInput('ADDR')
//       .appendField('balance of')
//     this.setInputsInline(true);
//     this.setOutput(true);
//   }
// };

// Blockly.Blocks['SEND'] = {
//   init: function() {
//     this.setTooltip('Sends data and ethereum currency to another contract, causing that contract to run and reply with data, if any. _address_ is given for the receiving contract. _amount_ is the number of ethereum currency units to send. _fee_budget_ is the maximum number of minimal-cost run steps this contract will pay for. A _start_slot_ and _end_slot_ must be given for temp data to be sent and the location of reply data to be received.')
//     this.setColour(PROCEDURE_COLOR)
//     this.appendValueInput('ADDRESS')
//       .appendField('send to address')
//     this.appendValueInput('AMOUNT')
//       .appendField('   amount')
//     this.appendValueInput('GAS')
//       .appendField('   with fee budget')
//     this.appendDummyInput()
//       .appendField('and data from')
//     this.appendValueInput('SEND_DATA_START')
//       .appendField('   start slot')
//     this.appendValueInput('SEND_DATA_END')
//       .appendField('   end slot')
//     this.appendDummyInput()
//       .appendField('getting reply into')
//     this.appendValueInput('REPLY_DATA_START')
//       .appendField('   start slot')
//     this.appendValueInput('REPLY_DATA_END')
//       .appendField('   end slot')
//     this.setInputsInline(false)
//     this.setPreviousStatement(true)
//     this.setNextStatement(true)
//   }
// }


//
// Kept POC-4 blocks 
//

var valValidator = function(given) {return given.replace(/[^a-z0-9_]/gi,'')}
var varValidator = function(given) {return given.replace(/^[0-9]+|[^a-z0-9_]/gi,'')}

Blockly.Blocks['MSTORE'] = {
  init: function() {
    this.setTooltip('Labels a temporary result. This stores the result at a temp slot identified by the given label. This is a compact form of the [in temp slot __ put __] block which only accepts text labels. Data in a temp slot is cleared after the contract stops running each time.')
    this.setColour(VAR_COLOR)
    this.appendValueInput('VAL')
      // .appendField('label')
      .appendField(new Blockly.FieldTextInput('', varValidator ), 'SPOT')
      .appendField('=')
    this.setInputsInline(true)
    this.setPreviousStatement(true)
    this.setNextStatement(true)
  }
}

Blockly.Blocks['SSTORE'] = {
  init: function() {
    this.setTooltip('Labels a saved result. This stores the result in a save slot identified by the given label. This is a compact form of the [in save slot __ put __] block which only accepts text labels. Data in save slots are still available the next time this contract runs.')
    this.setColour(VAR_COLOR)
    this.appendDummyInput()
      .appendField('save at')
      .appendField(new Blockly.FieldTextInput('', varValidator ), 'SPOT')
    this.appendValueInput('VAL')
      .appendField('=')
    this.setInputsInline(true)
    this.setPreviousStatement(true)
    this.setNextStatement(true)
  }
}


Blockly.Blocks['MVAL'] = {
  init: function() {
    this.setTooltip('The data in a given temp slot. It is a compact form of the [data at temp slot ___] block.')
    this.setColour(VAR_COLOR)
    this.appendDummyInput()
        // .appendField('')
        .appendField(new Blockly.FieldTextInput('', varValidator ), 'SPOT')
    this.setOutput(true)
  }
}

Blockly.Blocks['SVAL'] = {
  init: function() {
    this.setTooltip('The data in a given save slot. It is a compact form of the [data at save slot ___] block.')
    this.setColour(VAR_COLOR)
    this.appendDummyInput()
        .appendField('saved at')
        .appendField(new Blockly.FieldTextInput('', varValidator ), 'SPOT')
    this.setOutput(true)
  }
}

Blockly.Blocks['TEXTVAL'] = {
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

Blockly.Blocks['SPEND'] = {
  init: function() {
    this.setTooltip('Spends the given amount of ethereum currency to the given address. The currency amount can be provided as a simple number representing the amount of wei, or using a [__ ether] block for various other denominations.')

    this.setColour(STATEMENT_COLOR);
    this.appendValueInput('AMOUNT')
      .appendField('spend')
      .setCheck('Number')
    this.appendValueInput('TO')
      .appendField('to')
    this.setInputsInline(true)
    this.setPreviousStatement(true)
    this.setNextStatement(true)
  }
}

Blockly.Blocks['BLOCKINFO'] = {
  init: function() {
    this.setTooltip('Provides info about this blockchain block.\n _timestamp_ is when the block was mined, measured as the number of seconds since 1970 UTC.\n _number_ is the block number.\n _previous_hash_ is the data fingerprint for the last block (not this one).\n _coinbase_ is the address of the miner rewarded for finding this block.\n _difficulty_ is a measure of the current difficulty for mining this block.\n _total_gas_ is the total of all fees available for contract execution on this block, measured in gas units.\n')
    var VALS =
        [
         ['timestamp', 'timestamp'],
         ['number', 'number'],
         ['previous hash', 'prevhash'],
         ['coinbase', 'coinbase'],
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

Blockly.Blocks['TX'] = {
  init: function() {
    this.setTooltip('Provides info about this transaction. A transaction is any interaction with a contract.\n _amount_ is the monetary value sent in this transaction, measured in wei. _origin_ is the address of the original sender (never a contract). _gas_left_ is the remaining fees available for execution, measured in gas units. _gas_price_ is the amount of wei on offer as a fee for 1 unit of gas. (1 wei is the smallest unit of ethereum currency. 1 unit of gas is the minimum cost for an execution step.)\n')
    var VALS =
        [
         ['amount', 'callvalue'], // monetary value
         ['origin', 'origin'], // most recent sender address 
         ['gas left', 'gas'],
         ['gas price', 'gasprice'],
        ]
    this.setColour(VALUE_COLOR)
    this.setOutput(true)
    this.appendDummyInput()
        .appendField('tx')
        .appendField(new Blockly.FieldDropdown(VALS), 'PROP')
  }
}

Blockly.Blocks['CONTRACT'] = {
  init: function() {
    this.setTooltip('Provides info about this contract.\n _caller_ is the address of the contract caller (could be a contract). _address_ is this contract\'s address. _balance_ is this contract\'s balance measured in wei. _1st_input_ is the first (32 bytes of) input provided by the caller. _input_count_ is the number of (32 byte) inputs provided.')
    var VALS =
      [['caller', 'caller'],
       ['address', 'address'],
       ['balance', 'balance'],
       ['1st input', '_input'],
       ['input count', '_input_count'],
       // ['calldata length', '_input_byte_count'], // works but overkill for typical usage
       // ['code length', 'codesize'], // ditto
       // ['temp storage size', 'msize'], // ditto
      ]
    this.setColour(VALUE_COLOR)
    this.setOutput(true)
    this.appendDummyInput()
        .appendField('contract')
        .appendField(new Blockly.FieldDropdown(VALS), 'PROP')
  }
}

Blockly.Blocks['HASH'] = {
  init: function() {
    this.setTooltip('Provides a "fingerprint" (also known as a hash) for the data in temp storage starting at the given start slot with the given length (in slots). Identical data always gives the same fingerprint.')
    this.setColour(MATH_COLOR);
    this.setOutput(true)
    this.appendDummyInput()
      .appendField('fingerprint for data')
    this.appendValueInput('DATA_START')
      .appendField('at temp slot #');
    this.appendValueInput('DATA_LEN')
      .appendField('of length');
    this.setInputsInline(false);
  }
}

Blockly.Blocks['RETURN'] = {
  init: function() {
    this.setTooltip('Provides the temp data starting at the given start slot and length (in slots) as a reply to this contract\'s caller then ends this contract\'s execution.')
    this.setColour(PROCEDURE_COLOR);
    this.appendDummyInput()
      .appendField('reply with data')
    this.appendValueInput('DATA_START')
      .appendField('   at temp slot #')
    this.appendValueInput('DATA_LEN')
      .appendField('   of length')
    this.setPreviousStatement(true)
    this.setInputsInline(false)
  }
}

Blockly.Blocks['PREFIXOP'] = {
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
    this.setInputsInline(false)
  }
}

Blockly.Blocks['FORLOOP'] = {
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

Blockly.Blocks['WHILELOOP'] = {
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

Blockly.Blocks['CALL'] = {
  init: function() {
    this.setTooltip('Sends data and currency to another contract, causing that contract to run and reply with data, if any. Results in a 0 upon failure or 1 upon success. _address_ is given for the receiving contract. _amount_ is the number of ethereum currency units to send. _fee_budget_ is the maximum number of minimal-cost run steps this contract will pay for. A _temp_slot_#_ and length (in slots) must be given for the temp data to be sent and the reply data to be received.')
    this.setColour(PROCEDURE_COLOR)
    this.appendDummyInput()
      .appendField('call contract')
    this.appendValueInput('ADDRESS')
      .appendField('   at address')
    this.appendValueInput('AMOUNT')
      .appendField('   sending amount')
    this.appendValueInput('GAS')
      .appendField('   with fee budget')
    this.appendDummyInput()
      .appendField('and with data at')
    this.appendValueInput('SEND_DATA_START')
      .appendField('   temp slot #')
    this.appendValueInput('SEND_DATA_LEN')
      .appendField('   of length')
    this.appendDummyInput()
      .appendField('getting reply into')
    this.appendValueInput('REPLY_DATA_START')
      .appendField('   temp slot #')
    this.appendValueInput('REPLY_DATA_LEN')
      .appendField('   with length')
    this.setOutput(true) // technically returns true when successful?
    this.setPreviousStatement(false)
    this.setNextStatement(false)
    this.setInputsInline(false)
  }
}


//////
// POC-3 & POC-4 compatible blocks
//////

// Value blocks 

Blockly.Blocks['VAL'] = {
  // validating input block for LLL-legal values
  init: function() {
    this.setTooltip('Represents a number. Quoted text provided here is converted to a number behind the scenes. Hex formated numbers, such as an ethereum addresses, should be prefixed here with 0x.')
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

Blockly.Blocks['CURRENCY'] = {
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

Blockly.Blocks['IF'] = {
  init: function() {
    this.setTooltip('Tests an _if_ condition and proceeds with the contents of _then_ when true or _else_ when false. A condition is usually supplied using a [compare] block. A result of 0 provided as a condition is considered false; any other number is considered true.')
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

Blockly.Blocks['WHEN'] = {
  init: function() {
    this.setTooltip('Tests a _when_ condition and proceeds with the contents of _then_ if it\'s true, or skips to the next block if it\'s false. A condition is usually supplied with a [compare] block. A result of 0 provided as a condition is considered false; any other number is considered true.')
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

Blockly.Blocks['BITLOGIC'] = {
  init: function() {
    this.setTooltip('Performs bitwise logic operations. These are almost never needed but if you do, you\'ll already know what they are.')
    var OPERATORS =
      [['|', '|'],
      ['&', '&'],
      ['^', '^'],
      ['~', '~']]
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

Blockly.Blocks['COMPARE'] = {
  init: function() {
    this.setTooltip('Compares two results for use in other blocks that require a condition.') // (Signed variations treat very large numbers above 2^128 as being negative.)')
    var OPERATORS =
      [['=', '='],
      ['>', '>'],
      ['<', '<'],
      ['\u2260', '!='],
      ['\u2264', '<='],
      ['\u2265', '>='],
      // ['(signed >)', 'sgt'],
      // ['(signed <)', 'slt']
      ]
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

Blockly.Blocks['LOGIC'] = {
  init: function() {
    this.setTooltip('Builds a new condition from two other conditions. _and_ has the same meaning as the English word. _or_ means either one or both.')
    var OPERATORS =
      [['or', '||'] ,
      ['and', '&&'],
      // ['(xor)', 'xor'] ,
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

Blockly.Blocks['MATH'] = {
  init: function() {
    this.setTooltip('Represents the result of a math operation on two numbers. _+_ adds, _x_ multiplies, _-_ subtracts as expected. _÷_ divides, but gives the answer a "rounded down" whole number with no decimal places. _modulo_ gives the remainder after dividing the two numbers. _raised_to_ gives the result of the 1st number raised to the power of the 2nd number. ') //(Traditional negative numbers are not available. Rather, numbers less than 0 "wrap around" to very large numbers between 2^128 and 2^255. The signed variations of _÷_ and _modulo_ treat these very large numbers as negative for the purpose of the calculation.)')
    var OPERATORS =
      [['+', '+'],
      ['×', '*'],
      ['-', '-'],
      ['÷', 'div'],
      ['raised to', 'exp'],
      ['modulo', 'mod'],
      // ['(signed ÷)', 'sdiv'], // assumes top of the number range represents negative numbers 
      // ['(signed mod)', 'smod'] // "
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

Blockly.Blocks['LOAD'] = {
  init: function() {
    this.setTooltip('Represents the data item stored at the given (named or numbered) location within temp storage or save storage. ')
    var PLACES = 
    [['save slot', 'sload'],
    ['temp slot', 'mload'],]
    this.setColour(VAR_COLOR);
    this.appendValueInput('SPOT')
      .appendField('data at')
      .appendField(new Blockly.FieldDropdown(PLACES), 'POOL')
      .setCheck('Number')
    this.setOutput(true);
    this.setInputsInline(false);
  }
};

Blockly.Blocks['BYTE'] = {
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

// Statements

Blockly.Blocks['COMMENT'] = {
  init: function() {
    this.setTooltip('Has no effect on contract behaviour but provides for human notes on the nearby code.')
    this.setColour(COMMENT_COLOR);
    this.appendDummyInput()
      .appendField('note:')
      .appendField(new Blockly.FieldTextInput(''), 'NOTE')
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['STOP'] = {
  init: function() {
    this.setTooltip('Stops executing code (until the contract is called the next time)')
    this.setColour(STATEMENT_COLOR);
    this.appendDummyInput()
      .appendField('stop')
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['SUICIDE'] = {
  init: function() {
    this.setTooltip('Destroys the contract along with any saved data, sending any ethereum currency balance to the provided address.')
    this.setColour(STATEMENT_COLOR);
    this.appendValueInput('TO')
      .appendField('self-destruct to')
    this.setPreviousStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['STORE'] = {
  init: function() {
    this.setTooltip('Stores a result at a given temp or save location. Data in temp locations are only available while the contract runs this time. Data in save locations will also be available the next time it runs. Locations here can be designated with either numbers or text labels.')
    var POOLS = 
	  [['save slot', 'sstore'],
    ['temp slot', 'mstore']]
    this.setColour(VAR_COLOR);
    this.appendValueInput('SPOT')
      .appendField('in')
      .appendField(new Blockly.FieldDropdown(POOLS), 'POOL')
      .setCheck('Number')
    this.appendValueInput('VAL')
      .appendField('put')
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

