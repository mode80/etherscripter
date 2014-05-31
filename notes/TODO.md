# EtherScripter
Visual smart contract builder for Ethereum
##

### TODO
* switch to slots and slotlengths 
* erradicate bytes and target the Serpent subset?

* what should [temp slot ___] = val do in Serpent?
  * notes
    . ___ can be: number, text, or expression 
      if number: 
        mem[number] = val 
        mem[number] 
      if exp: 
        mem[exp] = val 
        mem[exp] 
      if text: 
        if !text : text = array(1)
        mem[text] = val
         
        text = [val] 
        text[0] 
  * problems
    . [temp slot _expression_] makes no sense in Serpent
    . [data at temp spot _(var)x_] or [... _1_] not consistent between LLL and Serpent

* Make only sets snap into block places that need sets

* pull input out of "data at ___ spot" with [__th input] and (maybe) [__bytes starting at byte ___ of _/memory/input_]
* consider changing val block to require explicit quotes 
* look for other places require quote removal when used a spot identifiers

* sample to test new POC-5 blocks
* check order of operations are correct in block combos
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
