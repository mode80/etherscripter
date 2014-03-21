/**
 * @license
 * Ethereum LLL generator for Blockly
 *
 * Copyright 2014 mode80
 */

/**
 * @fileoverview Helper functions for generating LLL for blocks.
 * @author mode80@users.noreply.github.com
 */
'use strict';

goog.provide('Blockly.LLL');

goog.require('Blockly.Generator');


Blockly.LLL = new Blockly.Generator('LLL');

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.LLL.addReservedWords(
    // best guesses per https://github.com/ethereum/cpp-ethereum/wiki/LLL
    'if,when,unless,for,and,or,seq,' +
    // also the opcodes from https://github.com/ethereum/wiki/wiki/%5BEnglish%5D-White-Paper#language-specification
    'add,mul,sub,div,sdiv,mod,smod,exp,neg,' +
    'lt,le,gt,ge,eq,not,' +
    'myaddress,balance,' +
    'txsender,txvalue,txdatan,txdata,' +
    'blk_prevhash,blk_coinbase,blk_timestamp,blk_number,blk_difficulty,blk_nonce,basefee,' +
    'stop,extro,mktx,suicide,' +
    'sha256,ripemd160,ecmul,ecadd,ecsign,ecrecover,ecvalid,sha3,' +
    'mload,mstore,sload,sstore,' +
    'push,pop,dup,swap,jmp,jmpi,ind' 
     );

/**
 * Order of operation ENUMs.
 */
Blockly.LLL.ORDER_ATOMIC = 0;         // 0 "" ...
Blockly.LLL.ORDER_MEMBER = 1;         // . []
Blockly.LLL.ORDER_NEW = 1;            // new
Blockly.LLL.ORDER_FUNCTION_CALL = 2;  // ()
Blockly.LLL.ORDER_INCREMENT = 3;      // ++
Blockly.LLL.ORDER_DECREMENT = 3;      // --
Blockly.LLL.ORDER_LOGICAL_NOT = 4;    // !
Blockly.LLL.ORDER_BITWISE_NOT = 4;    // ~
Blockly.LLL.ORDER_UNARY_PLUS = 4;     // +
Blockly.LLL.ORDER_UNARY_NEGATION = 4; // -
Blockly.LLL.ORDER_TYPEOF = 4;         // typeof
Blockly.LLL.ORDER_VOID = 4;           // void
Blockly.LLL.ORDER_DELETE = 4;         // delete
Blockly.LLL.ORDER_MULTIPLICATION = 5; // *
Blockly.LLL.ORDER_DIVISION = 5;       // /
Blockly.LLL.ORDER_MODULUS = 5;        // %
Blockly.LLL.ORDER_ADDITION = 6;       // +
Blockly.LLL.ORDER_SUBTRACTION = 6;    // -
Blockly.LLL.ORDER_BITWISE_SHIFT = 7;  // << >> >>>
Blockly.LLL.ORDER_RELATIONAL = 8;     // < <= > >=
Blockly.LLL.ORDER_IN = 8;             // in
Blockly.LLL.ORDER_INSTANCEOF = 8;     // instanceof
Blockly.LLL.ORDER_EQUALITY = 9;       // == != === !==
Blockly.LLL.ORDER_BITWISE_AND = 10;   // &
Blockly.LLL.ORDER_BITWISE_XOR = 11;   // ^
Blockly.LLL.ORDER_BITWISE_OR = 12;    // |
Blockly.LLL.ORDER_LOGICAL_AND = 13;   // &&
Blockly.LLL.ORDER_LOGICAL_OR = 14;    // ||
Blockly.LLL.ORDER_CONDITIONAL = 15;   // ?:
Blockly.LLL.ORDER_ASSIGNMENT = 16;    // = += -= *= /= %= <<= >>= ...
Blockly.LLL.ORDER_COMMA = 17;         // ,
Blockly.LLL.ORDER_NONE = 99;          // (...)

/**
 * Arbitrary code to inject into locations that risk causing infinite loops.
 * Any instances of '%1' will be replaced by the block ID that failed.
 * E.g. '  checkTimeout(%1);\n'
 * @type ?string
 */
Blockly.LLL.INFINITE_LOOP_TRAP = null;

/**
 * Initialise the database of variable names.
 */
Blockly.LLL.init = function() {
  // Create a dictionary of definitions to be printed before the code.
  Blockly.LLL.definitions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.LLL.functionNames_ = Object.create(null);

  if (Blockly.Variables) {
    if (!Blockly.LLL.variableDB_) {
      Blockly.LLL.variableDB_ =
          new Blockly.Names(Blockly.LLL.RESERVED_WORDS_);
    } else {
      Blockly.LLL.variableDB_.reset();
    }

    var defvars = [];
    var variables = Blockly.Variables.allVariables();
    for (var x = 0; x < variables.length; x++) {
      defvars[x] = ';; ("' +
          Blockly.LLL.variableDB_.getName(variables[x] ,
          Blockly.Variables.NAME_TYPE) + '" 0)' ;
    }
    Blockly.LLL.definitions_['variables'] = defvars.join('\n');
  }
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.LLL.finish = function(code) {
  // Convert the definitions dictionary into a list.
  var definitions = [];
  for (var name in Blockly.LLL.definitions_) {
    definitions.push(Blockly.LLL.definitions_[name]);
  }
  return definitions.join('\n\n') + '\n\n\n' + code;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.LLL.scrubNakedValue = function(line) {
  return line + '\n';
};

/**
 * Encode a string as a (properly escaped?) LLL string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} LLL string.
 * @private
 */
Blockly.LLL.quote_ = function(string) {
  return '"' + string + '"';
};

/**
 * Common tasks for generating LLL from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The LLL code created for this block.
 * @return {string} LLL code with comments and subsequent blocks added.
 * @private
 */
Blockly.LLL.scrub_ = function(block, code) {
  if (code === null) {
    // Block has handled code generation itself.
    return '';
  }
  var commentCode = '';
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    if (comment) {
      commentCode += this.prefixLines(comment, ';; ') + '\n';
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var x = 0; x < block.inputList.length; x++) {
      if (block.inputList[x].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[x].connection.targetBlock();
        if (childBlock) {
          var comment = this.allNestedComments(childBlock);
          if (comment) {
            commentCode += this.prefixLines(comment, ';; ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = this.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};
