# EtherScripter
block-like-language editor for Ethereum smart contracts
##

### TODO
* implement blocks for remaining LLL/EVM primitives
* make convert -1 to (neg 1) and restrict strings to max (.setCheck)
* add data array input to mktx block
* restrict use of "text" block in wrong places (ie mktx addy)
* make samples
* test on ipad
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
* RELEASE
* style the builder UI
* integrate EVM compiler
* library block functions for common functionality
  - stop if insufficient fee
  - author backdoor
    * update code
    * withdraw contract funds
    * deposit contract funds without other execution
