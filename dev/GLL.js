/**
 * @license
 * Copyright 2014 mode80
 */

/**
 * @fileoverview Helper functions for generating GLL from blocks.
 * @author mode80@users.noreply.github.com
 */
'use strict';

goog.provide('Blockly.GLL');

goog.require('Blockly.Generator');


Blockly.GLL = new Blockly.Generator('GLL');

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.GLL.addReservedWords(
    // see https://github.com/ethereum/go-ethereum/wiki/Mutan
    'this, if, else, return, exit, for, asm, nil, transact, create, call, sizeof, true, false' 
     );

/**
 * Order of operation ENUMs.
 */
Blockly.GLL.ORDER_ATOMIC = 0;            // 0 "" ...
Blockly.GLL.ORDER_COLLECTION = 1;        // tuples, lists, dictionaries
Blockly.GLL.ORDER_STRING_CONVERSION = 1; // `expression...`
Blockly.GLL.ORDER_MEMBER = 2;            // . []
Blockly.GLL.ORDER_FUNCTION_CALL = 2;     // ()
Blockly.GLL.ORDER_EXPONENTIATION = 3;    // **
Blockly.GLL.ORDER_UNARY_SIGN = 4;        // + -
Blockly.GLL.ORDER_BITWISE_NOT = 4;       // ~
Blockly.GLL.ORDER_MULTIPLICATIVE = 5;    // * / // %
Blockly.GLL.ORDER_ADDITIVE = 6;          // + -
Blockly.GLL.ORDER_BITWISE_SHIFT = 7;     // << >>
Blockly.GLL.ORDER_BITWISE_AND = 8;       // &
Blockly.GLL.ORDER_BITWISE_XOR = 9;       // ^
Blockly.GLL.ORDER_BITWISE_OR = 10;       // |
Blockly.GLL.ORDER_RELATIONAL = 11;       // in, not in, is, is not,
                                            //     <, <=, >, >=, <>, !=, ==
Blockly.GLL.ORDER_LOGICAL_NOT = 12;      // not
Blockly.GLL.ORDER_LOGICAL_AND = 13;      // and
Blockly.GLL.ORDER_LOGICAL_OR = 14;       // or
Blockly.GLL.ORDER_CONDITIONAL = 15;      // if else
Blockly.GLL.ORDER_LAMBDA = 16;           // lambda
Blockly.GLL.ORDER_NONE = 99;             // (...)

/**
 * Arbitrary code to inject into locations that risk causing infinite loops.
 * Any instances of '%1' will be replaced by the block ID that failed.
 * E.g. '  checkTimeout(%1);\n'
 * @type ?string
 */
Blockly.GLL.INFINITE_LOOP_TRAP = null;

/**
 * Initialise the database of variable names.
 */
Blockly.GLL.init = function() {
  // Create a dictionary of definitions to be printed before the code.
  Blockly.GLL.definitions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.GLL.functionNames_ = Object.create(null);

  if (Blockly.Variables) {
    if (!Blockly.GLL.variableDB_) {
      Blockly.GLL.variableDB_ =
          new Blockly.Names(Blockly.GLL.RESERVED_WORDS_);
    } else {
      Blockly.GLL.variableDB_.reset();
    }

    var defvars = [];
    var variables = Blockly.Variables.allVariables();
    for (var x = 0; x < variables.length; x++) {
      defvars[x] = '("' +
          Blockly.GLL.variableDB_.getName(variables[x] ,
          Blockly.Variables.NAME_TYPE) + '" 0)' ;
    }
    Blockly.GLL.definitions_['variables'] = defvars.join('\n');
  }
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.GLL.finish = function(code) {
  // Convert the definitions dictionary into a list.
  var definitions = [];
  var retval
  for (var name in Blockly.GLL.definitions_) {
    definitions.push(Blockly.GLL.definitions_[name]);
  }
  retval = definitions.join('\n') + '\n\n' + code;
  retval = '' + code + ''
  return retval
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.GLL.scrubNakedValue = function(line) {
  return line + '\n';
};

/**
 * Encode a string as a (properly escaped?) GLL string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} GLL string.
 * @private
 */
Blockly.GLL.quote_ = function(string) {
  return '"' + string + '"';
};

/**
 * Common tasks for generating GLL from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The GLL code created for this block.
 * @return {string} GLL code with comments and subsequent blocks added.
 * @private
 */
Blockly.GLL.scrub_ = function(block, code) {
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
      commentCode += this.prefixLines(comment, '// ') + '\n';
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var x = 0; x < block.inputList.length; x++) {
      if (block.inputList[x].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[x].connection.targetBlock();
        if (childBlock) {
          var comment = this.allNestedComments(childBlock);
          if (comment) {
            commentCode += this.prefixLines(comment, '// ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = this.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};
