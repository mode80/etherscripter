# EtherScripter
Visual smart contract builder for Ethereum
##

### TODO
* make LLL POC-5 compatible
  x new init block
  x lll block 
  x make end slot of call block be "thru" not "up to"
  . choose either tx.input/size(s) or contract.input
  . change balance to take 0 args for POC5
  . new signature for (call)
    . call needs a non-zero gas limit 
    . (call (- (gas) 21) ... ) is essentially unlimited (gas cost to do the subtraction and the call)
  . SLT, SGT 
  . Bitwise & | ^(xor) ~(not)
  . fix block AND should be && not (and) == (&) 
  . revisit (balance) (only returns current contract balance now?) 
  . (origin)
  . tx.sender as synonym for contract.caller?
  . add (calldatacopy memindex calldataindex len) 
  . add (codecopy memindex codeindex) blocks
  . (codesize) -> contract.codesize
  . (gasprice) -> contract.codesize
  . (gaslimit) -> block.gaslimit
  . (PC) program counter
  . (&&) is now multinary?

* add Serpent 
  . find list of reserved words
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
