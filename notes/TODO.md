# EtherScripter
Visual smart contract builder for Ethereum
##

### TODO

* fix lll to work with new temp array paradigm

* switch to slots and slotlengths 
  . code expectations
    . serpent
    . lll
  . labels

* erradicate bytes and target the Serpent subset?
* storage "arrays?"
* relentlessly simplify remaining blocks 

* pull input out of "data at ___ spot",  replace with [__th input] and (maybe) [__bytes starting at byte ___ of _/memory/input_]
* consider changing val block to require explicit quotes 
* look for other places require quote removal when used a spot identifiers

* revisit tooltips

* sample to test new POC-5 blocks
* check order of operations are correct in block combos

* rename blocks with consistent underscores, rename xml fields ?
  . return -> reply

* RELEASE

* add Mutan? would need to post-process in order to add var definitions
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
