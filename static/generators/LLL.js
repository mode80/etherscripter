/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating JavaScript for blocks.
 * @author fraser@google.com (Neil Fraser)
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
    'if,when,unless,for,seq,and,or' +
    // also the opcodes from https://github.com/ethereum/wiki/wiki/%5BEnglish%5D-White-Paper#language-specification
    'stop,add,mul,sub,div,sdiv,mod,smod,exp,neg,lt,le,gt,ge,eq,not,' +
    'myaddress,txsender,tx,value,txdatan,txdata,' +
    'blk_prevhash,blk_coinbase,blk_timestamp,blk_number,blk_difficulty,blk_nonce,basefee,' +
    'sha256,ripemd160,ecmul,ecadd,ecsign,ecrecover,ecvalid,sha3,' +
    'push,pop,dup,swap,' +
    'mload,mstore,sload,sstore,' +
    'jmp,jmpi,ind,' +
    'extro,balance,mktx,suicide' );

/**
 * Order of operation ENUMs.
 */
Blockly.LLL.ORDER_ATOMIC = 0;         // 0 "" ...
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
      defvars[x] = ';; ' +
          Blockly.LLL.variableDB_.getName(variables[x],
          Blockly.Variables.NAME_TYPE) ;
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
