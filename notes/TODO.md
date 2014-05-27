# EtherScripter
Visual smart contract builder for Ethereum
##

### TODO
* add Serpent 
  . [data at temp spot _(var)x_] or [... _1_] not consistent between LLL and Serpent
  . what to do about init block indenting?
  . check order of operations are correct in block combos
  x revisit mval sval store etc to ensure consistency between LLL & Serpent 
    in serpent x, y is '[0x0, mload, 0x20, mload]' (the dereferenced values of x, y)
    in LLL x,y is just 0x0, 0x20 (the memory addresses)
* add Mutan?
* add codeMirror
* sample to test new POC-5 blocks
* save functionality using appengine(?) cloud storage
* what is etherscripter page
* create generator and block-set targeting HLL
* integrate or port EVM compiler
* integrate or port HLL compiler 
* bug report menu item
* add help urls
* reverse generate blockly XML from LLL
* fix for the limited workspace problem in no-category mode
* smart insert seq() only when needed
* make "else" of if block responsive and remove when/then block
* undo would be nice, eg when accidentally deleteing by all to toolbox 
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
  - stop if insufficient fee
  - stop if overwriting code
  - author admin functions 
    * update code
    * withdraw contract funds
    * deposit contract funds without other execution
