# EtherScripter
Visual smart contract builder for Ethereum
##

### TODO

* test 
* revisit tooltips
* rename blocks with consistent underscores, rename xml fields ?
* sample to test calling a contract that returns 
* RELEASE

* is it (balance) or (balance (address))?

* relentlessly simplify remaining blocks 
  . make signed arthmatic / comparison the default and bury unsigned

* improve approachability of calling other contracts
  . make a global "success" var 
  . make a [_1st/2nd/etc_ response] block like the one for input
  . make blocks that take numbered slots+length take "inline array blocks" instead

* need [__bytes starting at byte ___ of _/memory/input_] ?


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
