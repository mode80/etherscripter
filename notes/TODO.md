# EtherScripter
Visual smart contract builder for Ethereum
##

### TODO
* dropdown version of the "th input" block
* serpent sha3 variable length
* make call/return usable in Serpent 
  with[reserve __ spots at new temp spot ___]
      [___ spots past __ =]
      [___ spots past __]
* pull input out of "data at ___ spot" with [__th input] and (maybe) [__bytes starting at byte ___ of _/memory/input_]
* erradicate bytes and target the Serpent subset?
* add Serpent 
  . [data at temp spot _(var)x_] or [... _1_] not consistent between LLL and Serpent
  . check order of operations are correct in block combos
  x what to do about init block indenting?
  x revisit mval sval store etc to ensure consistency between LLL & Serpent 
    in serpent x, y is '[0x0, mload, 0x20, mload]' (the dereferenced values of x, y)
    in LLL x,y is just 0x0, 0x20 (the memory addresses)
* add Mutan? would need to post-process in order to add var definitions
* sample to test new POC-5 blocks
* save functionality using appengine(?) cloud storage (gitlab?)
* what is etherscripter page
* integrate or port EVM compiler
* integrate or port HLL compiler 
* bug report menu item
* add help urls
* reverse generate blockly XML from LLL
* fix for the limited workspace problem in no-category mode
* smart insert seq() only when needed
* make "else" of if block responsive and remove when/then block
* undo 
* localstorage not loading on ipad
* mechanism for creating a contract with mktx
* enable right click functionality on ipad
* make context menu appear on ipad dblclick event
* intro.js or similar guided tour
* style the builder UI
* a runtime simulator, debugger
* forum?
* directory 
* contract code collaboration (via gitlab?)
* library block functions for common functionality
  - define inputs
  - author admin functions 
    * update code
    * withdraw contract funds
    * deposit contract funds without other execution
