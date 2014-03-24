# EtherScripter
Visual smart contract builder for Ethereum
##

### TODO
* implement blocks for remaining LLL/EVM primitives
* make samples
* fit screen, color categories, test on ipad
* DEMO ready
* make "else" of if block responsive and remove when/then block
* smart insert seq() only when needed
* add data array input to mktx block
* make LLL-specific value blocks that convert -1 to (neg 1) and restrict strings to max (.setCheck)
* restrict use of "text" block in wrong places (ie mktx addy)
* create & use Blockly.FieldTextInput.ethereumAddressValidator
* add tooltips and help urls
* create generator targeting HLL, based on python.js?
  - then integrate vitalik's compiler for free LLL?
* reverse generate blocks from XML 
* reverse generate blocky XML from LLL
* mechanism for creating a contract with mktx
* save functionality using appengine cloud storage
* create samples taken from community LLL
  - eg (gavin samples, vitalik samples, i want half etc.)
* intro.js or similar guided tour
* make workspace height exactly the window height - navbar
* make LLL_val robust against user supplied decimals, formatting commas etc
* jslint my code
* RELEASE
* style the builder UI
* integrate EVM compiler
* library block functions for common functionality
  - stop if insufficient fee
  - author backdoor
    * update code
    * withdraw contract funds
    * deposit contract funds without other execution
