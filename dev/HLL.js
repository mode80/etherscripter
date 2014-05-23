/**
 * @license
 * Copyright 2014 mode80
 */

/**
 * @fileoverview Helper functions for generating HLL from blocks.
 * @author mode80@users.noreply.github.com
 */
'use strict';

goog.provide('Blockly.HLL');

goog.require('Blockly.Generator');


Blockly.HLL = new Blockly.Generator('HLL');

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.HLL.addReservedWords(
    // TODO make best guesses per https://github.com/ethereum/serpent/blob/master/serpent/compiler.py#L44
    'TODO,find,comma,separated,listofthese' 
     );

/**
 * Order of operation ENUMs.
 */
Blockly.HLL.ORDER_ATOMIC = 0;            // 0 "" ...
Blockly.HLL.ORDER_COLLECTION = 1;        // tuples, lists, dictionaries
Blockly.HLL.ORDER_STRING_CONVERSION = 1; // `expression...`
Blockly.HLL.ORDER_MEMBER = 2;            // . []
Blockly.HLL.ORDER_FUNCTION_CALL = 2;     // ()
Blockly.HLL.ORDER_EXPONENTIATION = 3;    // **
Blockly.HLL.ORDER_UNARY_SIGN = 4;        // + -
Blockly.HLL.ORDER_BITWISE_NOT = 4;       // ~
Blockly.HLL.ORDER_MULTIPLICATIVE = 5;    // * / // %
Blockly.HLL.ORDER_ADDITIVE = 6;          // + -
Blockly.HLL.ORDER_BITWISE_SHIFT = 7;     // << >>
Blockly.HLL.ORDER_BITWISE_AND = 8;       // &
Blockly.HLL.ORDER_BITWISE_XOR = 9;       // ^
Blockly.HLL.ORDER_BITWISE_OR = 10;       // |
Blockly.HLL.ORDER_RELATIONAL = 11;       // in, not in, is, is not,
                                            //     <, <=, >, >=, <>, !=, ==
Blockly.HLL.ORDER_LOGICAL_NOT = 12;      // not
Blockly.HLL.ORDER_LOGICAL_AND = 13;      // and
Blockly.HLL.ORDER_LOGICAL_OR = 14;       // or
Blockly.HLL.ORDER_CONDITIONAL = 15;      // if else
Blockly.HLL.ORDER_LAMBDA = 16;           // lambda
Blockly.HLL.ORDER_NONE = 99;             // (...)

/**
 * Arbitrary code to inject into locations that risk causing infinite loops.
 * Any instances of '%1' will be replaced by the block ID that failed.
 * E.g. '  checkTimeout(%1);\n'
 * @type ?string
 */
Blockly.HLL.INFINITE_LOOP_TRAP = null;

/**
 * Initialise the database of variable names.
 */
Blockly.HLL.init = function() {
  // Create a dictionary of definitions to be printed before the code.
  Blockly.HLL.definitions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.HLL.functionNames_ = Object.create(null);

  if (Blockly.Variables) {
    if (!Blockly.HLL.variableDB_) {
      Blockly.HLL.variableDB_ =
          new Blockly.Names(Blockly.HLL.RESERVED_WORDS_);
    } else {
      Blockly.HLL.variableDB_.reset();
    }

    var defvars = [];
    var variables = Blockly.Variables.allVariables();
    for (var x = 0; x < variables.length; x++) {
      defvars[x] = '("' +
          Blockly.HLL.variableDB_.getName(variables[x] ,
          Blockly.Variables.NAME_TYPE) + '" 0)' ;
    }
    Blockly.HLL.definitions_['variables'] = defvars.join('\n');
  }
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.HLL.finish = function(code) {
  // Convert the definitions dictionary into a list.
  var definitions = [];
  var retval
  for (var name in Blockly.HLL.definitions_) {
    definitions.push(Blockly.HLL.definitions_[name]);
  }
  retval = definitions.join('\n') + '\n\n' + code;
  retval = '\n' + code + '\n'
  return retval
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.HLL.scrubNakedValue = function(line) {
  return line + '\n';
};

/**
 * Encode a string as a (properly escaped?) HLL string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} HLL string.
 * @private
 */
Blockly.HLL.quote_ = function(string) {
  return '"' + string + '"';
};

/**
 * Common tasks for generating HLL from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The HLL code created for this block.
 * @return {string} HLL code with comments and subsequent blocks added.
 * @private
 */
Blockly.HLL.scrub_ = function(block, code) {
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
