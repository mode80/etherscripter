/**
 * @license
 * Copyright 2014 mode80
 */

/**
 * @fileoverview Generator of LLL from LLL-specific blocks 
 * @author mode80@users.noreply.github.com
 */

goog.provide('Blockly.LLL.LLLblocks_generator');

goog.require('Blockly.LLL');


Blockly.LLL['LLL_block'] = function(block) {
  // block related values 
  var code
  var val = block.getFieldValue('PROP');
  if (val == 'basefee')
    code = '(basefee)'
  else
    code = '(blk_' + val + ')' 
  return [code, Blockly.LLL.ORDER_ATOMIC];
};

Blockly.LLL['LLL_transaction'] = function(block) {
  // transaction related values 
  var code
  var val = block.getFieldValue('PROP');
  code = '(tx' + val + ')'
  return [code, Blockly.LLL.ORDER_ATOMIC];
};

Blockly.LLL['LLL_contract'] = function(block) {
  // contract related values
  var code
  var val = block.getFieldValue('PROP');
  if (val == 'address')
    code = '(myaddress)'
  else if (val == 'balance')
    code =  '(balance myaddress)'
  return [code, Blockly.LLL.ORDER_ATOMIC];
};

Blockly.LLL['LLL_if'] = function(block) {
  // if statement
  var cond = Blockly.LLL.valueToCode(block, 'COND', Blockly.LLL.ORDER_NONE);
  var then_do = Blockly.LLL.statementToCode(block, 'THEN');
  var else_do = Blockly.LLL.statementToCode(block, 'ELSE');
  var code = '(if ' + cond + '\n (seq \n' + then_do + ' )\n (seq \n' + else_do + ' )\n)\n';
  return code;
};

Blockly.LLL['LLL_when'] = function(block) {
  // when statement
  var word = block.getFieldValue('WORD') 
  var cond = Blockly.LLL.valueToCode(block, 'COND', Blockly.LLL.ORDER_NONE);
  var then_do = Blockly.LLL.statementToCode(block, 'THEN');
  var code = '(' + word + ' '+ cond + '\n (seq \n' + then_do + ' )\n)\n';
  return code;
};

Blockly.LLL['LLL_for'] = function(block) {
  // LLL for loop is really a while / until loop.
  var is_until = (block.getFieldValue('WORD') == 'UNTIL')
  var cond = Blockly.LLL.valueToCode(block, 'COND',
      is_until ? Blockly.LLL.ORDER_LOGICAL_NOT :
      Blockly.LLL.ORDER_NONE) || 'false';
  var branch = Blockly.LLL.statementToCode(block, 'DO');
  if (is_until) {
    cond = '(! ' + cond + ' )';
  }
  return '(for ' + cond + '\n (seq \n' + branch + ' ) \n)\n';
};

Blockly.LLL.twoArgForms = function(block) {
  // math functions, and other 2-argument forms 
  var op = block.getFieldValue('OP')
  var a = Blockly.LLL.valueToCode(block, 'A', Blockly.LLL.ORDER_NONE)
  var b = Blockly.LLL.valueToCode(block, 'B', Blockly.LLL.ORDER_NONE)
  var code = '(' + op + ' ' + a + ' ' + b + ')' 
  return [code, Blockly.LLL.ORDER_ATOMIC]
}

Blockly.LLL['LLL_math'] = Blockly.LLL.twoArgForms 
Blockly.LLL['LLL_logic'] = Blockly.LLL.twoArgForms 
Blockly.LLL['LLL_compare'] = Blockly.LLL.twoArgForms 

Blockly.LLL['LLL_val'] = function(block) {
  // takes user input and uses it as a number or string val 
  var order = Blockly.LLL.ORDER_NONE;
  var val = block.getFieldValue('VAL') || 0  
  var code = '' 
  if ( isNaN(val) ) {
    var is_hexprefixed = ((val+'').substr(0,2).toUpperCase()=='0X') 
    var is_allhexchars = (/[^0-9a-fx]/i.exec(val)===null) 
    if (is_hexprefixed && is_allhexchars)  // don't quote hexy strings 
      code = val
    else 
      code = '"' + val + '"' // quote normal strings
  } else { // is a number
    code = (val<0) ? '(neg ' + -val + ')' : val + '' 
  }
  return [code, Blockly.LLL.ORDER_ATOMIC]
};

Blockly.LLL['LLL_comment'] = function(block) {
  // a LLL comment  
  return ';; ' + block.getFieldValue('NOTE') + '\n' 
};

Blockly.LLL['LLL_stop'] = function(block) {
  // stop statement
  return '(stop)\n' 
};

Blockly.LLL['LLL_currency'] = function(block) {
  // currency value 
  var order = Blockly.LLL.ORDER_NONE;
  var amt = Blockly.LLL.valueToCode(block,'AMT', order) || 0 
  var denom = block.getFieldValue('DENOM')
  var code = amt + '' + denom 
  return [code, Blockly.LLL.ORDER_ATOMIC] 
};

Blockly.LLL['LLL_mktx'] = function(block) {
  // mktx statement
  var order = Blockly.LLL.ORDER_NONE;
  var to = Blockly.LLL.valueToCode(block,'TO', order) || 0  
  var money = Blockly.LLL.valueToCode(block,'MONEY', order) || '0wei' 
  var code = '(mktx ' + to + ' ' + money + ' 0)\n' 
  return code
};

Blockly.LLL['LLL_suicide'] = function(block) {
  // suicide statement
  var order = Blockly.LLL.ORDER_NONE;
  var to = Blockly.LLL.valueToCode(block,'TO', order) || 0 
  var code = '(suicide ' + to + ')\n' 
  return code
};

Blockly.LLL['LLL_load'] = function(block) {
  // mload sload txdata value functions 
  var order = Blockly.LLL.ORDER_NONE;
  var place = block.getFieldValue('PLACE') 
  var slot = Blockly.LLL.valueToCode(block,'SLOT', order) || 0 
  var code = '('+ place + ' ' + slot + ')'
  return [code, Blockly.LLL.ORDER_ATOMIC]
};

Blockly.LLL['LLL_balance'] = function(block) {
  // balance of address 
  var order = Blockly.LLL.ORDER_NONE;
  var addr = block.getFieldValue('ADDR') 
  var code = '(balance '+ addr + ')'
  return [code, Blockly.LLL.ORDER_ATOMIC]
};

Blockly.LLL['LLL_store'] = function(block) {
  // mstore sstore statements
  var order = Blockly.LLL.ORDER_NONE;
  var place = block.getFieldValue('PLACE')  
  var slot = Blockly.LLL.valueToCode(block,'SLOT', order) || 0 
  var val = Blockly.LLL.valueToCode(block,'VAL', order) || 0 
  var code = '('+ place + ' ' + slot + ' ' + val + ')\n'
  return code
};

