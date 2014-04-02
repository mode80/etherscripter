function loadSample(event) {
  var sample_id = event.target.id
  document.getElementById('content_XML')
    .value = samples[sample_id]
  window.xml_dirty = true
  showBLL()
}

function fnCommentToString(f) {
  // a super hacky workaround to get multiline strings in JS
  // takes a function and returns the innars /*! delimited thus */ as a big string 
  return f.toString().
      replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');
}

var samples = {

coinflip: fnCommentToString(function(){/*!
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="LLL_comment" id="111" x="37" y="186">
    <field name="NOTE">Coin flipping smart contract</field>
    <next>
      <block type="LLL_comment" id="123">
        <field name="NOTE">When the time in seconds is even, consider it a winning flip</field>
        <next>
          <block type="LLL_when" id="112" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LLL_compare" id="113" inline="true">
                <field name="OP">=</field>
                <value name="A">
                  <block type="LLL_math" id="114" inline="true">
                    <field name="OP">smod</field>
                    <value name="A">
                      <block type="LLL_block" id="115">
                        <field name="PROP">timestamp</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_val" id="116">
                        <field name="VAL">2</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_val" id="117">
                    <field name="VAL">0</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="LLL_comment" id="124">
                <field name="NOTE">On a winning flip, the sender gets double their money back</field>
                <next>
                  <block type="LLL_mktx" id="118" inline="true">
                    <value name="MONEY">
                      <block type="LLL_math" id="119" inline="true">
                        <field name="OP">mul</field>
                        <value name="A">
                          <block type="LLL_transaction" id="120">
                            <field name="PROP">value</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="121">
                            <field name="VAL">2</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="TO">
                      <block type="LLL_transaction" id="122">
                        <field name="PROP">sender</field>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>
*/}),

website_sale: fnCommentToString(function(){/*!
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="LLL_comment" id="198" x="43" y="78">
    <field name="NOTE">*** An Ethereum smart contract to sell a website for "5000 by March"</field>
    <next>
      <block type="LLL_comment" id="199">
        <field name="NOTE">First, store buyer's ethereum address:</field>
        <next>
          <block type="LLL_store" id="200" inline="true">
            <field name="PLACE">sstore</field>
            <value name="VAL">
              <block type="LLL_val" id="201">
                <field name="VAL">0x6af26739b9ffef8aa2985252e5357fde</field>
              </block>
            </value>
            <value name="SLOT">
              <block type="LLL_val" id="202">
                <field name="VAL">BUYER</field>
              </block>
            </value>
            <next>
              <block type="LLL_comment" id="203">
                <field name="NOTE">Then, store seller's ethereum address:</field>
                <next>
                  <block type="LLL_store" id="204" inline="true">
                    <field name="PLACE">sstore</field>
                    <value name="VAL">
                      <block type="LLL_val" id="205">
                        <field name="VAL">0xfeab802c014588f08bfee2741086c375</field>
                      </block>
                    </value>
                    <value name="SLOT">
                      <block type="LLL_val" id="206">
                        <field name="VAL">SELLER</field>
                      </block>
                    </value>
                    <next>
                      <block type="LLL_comment" id="207">
                        <field name="NOTE">April 1, 2014 is 1396310400 in "computer time"</field>
                        <next>
                          <block type="LLL_store" id="208" inline="true">
                            <field name="PLACE">sstore</field>
                            <value name="VAL">
                              <block type="LLL_val" id="209">
                                <field name="VAL">1396310400</field>
                              </block>
                            </value>
                            <value name="SLOT">
                              <block type="LLL_val" id="210">
                                <field name="VAL">DEADLINE</field>
                              </block>
                            </value>
                            <next>
                              <block type="LLL_comment" id="211">
                                <field name="NOTE">If the agreed amount is received on time...</field>
                                <next>
                                  <block type="LLL_when" id="212" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="LLL_logic" id="213" inline="false">
                                        <field name="OP">and</field>
                                        <value name="A">
                                          <block type="LLL_compare" id="214" inline="true">
                                            <field name="OP">&gt;=</field>
                                            <value name="A">
                                              <block type="LLL_transaction" id="215">
                                                <field name="PROP">value</field>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_currency" id="216" inline="true">
                                                <field name="DENOM">ether</field>
                                                <value name="AMT">
                                                  <block type="LLL_val" id="217">
                                                    <field name="VAL">5000</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_compare" id="218" inline="true">
                                            <field name="OP">&lt;=</field>
                                            <value name="A">
                                              <block type="LLL_block" id="219">
                                                <field name="PROP">timestamp</field>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_load" id="220" inline="true">
                                                <field name="PLACE">sload</field>
                                                <value name="SLOT">
                                                  <block type="LLL_val" id="221">
                                                    <field name="VAL">DEADLINE</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="THEN">
                                      <block type="LLL_comment" id="222">
                                        <field name="NOTE">... then designate the buyer as the new website admin and pay the seller</field>
                                        <next>
                                          <block type="LLL_store" id="223" inline="true">
                                            <field name="PLACE">sstore</field>
                                            <value name="VAL">
                                              <block type="LLL_load" id="224" inline="true">
                                                <field name="PLACE">sload</field>
                                                <value name="SLOT">
                                                  <block type="LLL_val" id="225">
                                                    <field name="VAL">BUYER</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="SLOT">
                                              <block type="LLL_val" id="226">
                                                <field name="VAL">WEBSITE_ADMIN</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="LLL_mktx" id="227" inline="true">
                                                <value name="MONEY">
                                                  <block type="LLL_contract" id="228">
                                                    <field name="PROP">balance</field>
                                                  </block>
                                                </value>
                                                <value name="TO">
                                                  <block type="LLL_load" id="229" inline="true">
                                                    <field name="PLACE">sload</field>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="230">
                                                        <field name="VAL">SELLER</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </statement>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>
*/}),

last_will: fnCommentToString(function(){/*!
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="LLL_comment" id="528" x="25" y="20">
    <field name="NOTE">Last Will &amp; Testament using a "dead-man's-switch"</field>
    <next>
      <block type="LLL_comment" id="529">
        <field name="NOTE">If the contract isn't touched by the creator at least once per month, he's dead</field>
        <next>
          <block type="LLL_comment" id="530">
            <field name="NOTE">Therefore, split all funds among the heirs</field>
            <next>
              <block type="LLL_when" id="531" inline="false">
                <field name="WORD">when</field>
                <value name="COND">
                  <block type="LLL_compare" id="532" inline="true">
                    <field name="OP">&lt;</field>
                    <value name="A">
                      <block type="LLL_transaction" id="533">
                        <field name="PROP">value</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_math" id="534" inline="true">
                        <field name="OP">mul</field>
                        <value name="A">
                          <block type="LLL_block" id="535">
                            <field name="PROP">basefee</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="536">
                            <field name="VAL">100</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="THEN">
                  <block type="LLL_comment" id="537">
                    <field name="NOTE">stop if insufficient funds for execution</field>
                    <next>
                      <block type="LLL_stop" id="538"></block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="LLL_if" id="539" inline="false">
                    <value name="COND">
                      <block type="LLL_compare" id="540" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="LLL_load" id="541" inline="true">
                            <field name="PLACE">sload</field>
                            <value name="SLOT">
                              <block type="LLL_val" id="542">
                                <field name="VAL">CREATOR</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="543">
                            <field name="VAL">0</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="THEN">
                      <block type="LLL_comment" id="544">
                        <field name="NOTE">This must be a newly created Will contact. Here we record the creator.</field>
                        <next>
                          <block type="LLL_store" id="545" inline="true">
                            <field name="PLACE">sstore</field>
                            <value name="VAL">
                              <block type="LLL_transaction" id="546">
                                <field name="PROP">sender</field>
                              </block>
                            </value>
                            <value name="SLOT">
                              <block type="LLL_val" id="547">
                                <field name="VAL">CREATOR</field>
                              </block>
                            </value>
                            <next>
                              <block type="LLL_comment" id="548">
                                <field name="NOTE">A future transaction received from the creator does three things: </field>
                                <next>
                                  <block type="LLL_comment" id="549">
                                    <field name="NOTE">    1) It's proves he's alive and supresses distribution for another 30 days</field>
                                    <next>
                                      <block type="LLL_comment" id="550">
                                        <field name="NOTE">    2) It naturally increases the contract's balance by the amount of the transaction value</field>
                                        <next>
                                          <block type="LLL_comment" id="551">
                                            <field name="NOTE">    3) It optionally supplies a new list of heirs</field>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <statement name="ELSE">
                      <block type="LLL_if" id="552" inline="false">
                        <value name="COND">
                          <block type="LLL_compare" id="553" inline="true">
                            <field name="OP">=</field>
                            <value name="A">
                              <block type="LLL_transaction" id="554">
                                <field name="PROP">sender</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_load" id="555" inline="true">
                                <field name="PLACE">sload</field>
                                <value name="SLOT">
                                  <block type="LLL_val" id="556">
                                    <field name="VAL">CREATOR</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="THEN">
                          <block type="LLL_comment" id="557">
                            <field name="NOTE">Here we record the time of this touch by the creator. He's still alive.</field>
                            <next>
                              <block type="LLL_store" id="558" inline="true">
                                <field name="PLACE">sstore</field>
                                <value name="VAL">
                                  <block type="LLL_block" id="559">
                                    <field name="PROP">timestamp</field>
                                  </block>
                                </value>
                                <value name="SLOT">
                                  <block type="LLL_val" id="560">
                                    <field name="VAL">LAST_TOUCH</field>
                                  </block>
                                </value>
                                <next>
                                  <block type="LLL_when" id="561" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="LLL_compare" id="562" inline="true">
                                        <field name="OP">&gt;</field>
                                        <value name="A">
                                          <block type="LLL_transaction" id="563">
                                            <field name="PROP">datan</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_val" id="564">
                                            <field name="VAL">0</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="THEN">
                                      <block type="LLL_comment" id="565">
                                        <field name="NOTE">The creator defines heirs by supplying their payment addresses via the transaction data items</field>
                                        <next>
                                          <block type="LLL_comment" id="566">
                                            <field name="NOTE">He can change these by supplying a new set of addresses which replaces all of the old set</field>
                                            <next>
                                              <block type="LLL_for" id="567" inline="false">
                                                <field name="WORD">WHILE</field>
                                                <value name="COND">
                                                  <block type="LLL_compare" id="568" inline="true">
                                                    <field name="OP">&lt;</field>
                                                    <value name="A">
                                                      <block type="LLL_load" id="569" inline="true">
                                                        <field name="PLACE">mload</field>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="570">
                                                            <field name="VAL">i</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="LLL_transaction" id="571">
                                                        <field name="PROP">datan</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO">
                                                  <block type="LLL_comment" id="572">
                                                    <field name="NOTE">each heir will be recorded for future reference in the storage range 1000+</field>
                                                    <next>
                                                      <block type="LLL_store" id="573" inline="true">
                                                        <field name="PLACE">sstore</field>
                                                        <value name="VAL">
                                                          <block type="LLL_load" id="574" inline="true">
                                                            <field name="PLACE">txdata</field>
                                                            <value name="SLOT">
                                                              <block type="LLL_val" id="575">
                                                                <field name="VAL">i</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="SLOT">
                                                          <block type="LLL_math" id="576" inline="true">
                                                            <field name="OP">add</field>
                                                            <value name="A">
                                                              <block type="LLL_val" id="577">
                                                                <field name="VAL">1000</field>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="LLL_val" id="578">
                                                                <field name="VAL">i</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="LLL_store" id="579" inline="true">
                                                            <field name="PLACE">mstore</field>
                                                            <value name="VAL">
                                                              <block type="LLL_math" id="580" inline="true">
                                                                <field name="OP">add</field>
                                                                <value name="A">
                                                                  <block type="LLL_val" id="581">
                                                                    <field name="VAL">i</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_val" id="582">
                                                                    <field name="VAL">1</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="SLOT">
                                                              <block type="LLL_val" id="583">
                                                                <field name="VAL">i</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </statement>
                                                <next>
                                                  <block type="LLL_for" id="584" inline="false">
                                                    <field name="WORD">WHILE</field>
                                                    <value name="COND">
                                                      <block type="LLL_compare" id="585" inline="true">
                                                        <field name="OP">&lt;</field>
                                                        <value name="A">
                                                          <block type="LLL_load" id="586" inline="true">
                                                            <field name="PLACE">mload</field>
                                                            <value name="SLOT">
                                                              <block type="LLL_val" id="587">
                                                                <field name="VAL">i</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="LLL_load" id="588" inline="true">
                                                            <field name="PLACE">sload</field>
                                                            <value name="SLOT">
                                                              <block type="LLL_val" id="589">
                                                                <field name="VAL">HEIR_COUNT</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO">
                                                      <block type="LLL_comment" id="590">
                                                        <field name="NOTE">any former heirs are removed in favor of this new set</field>
                                                        <next>
                                                          <block type="LLL_store" id="591" inline="true">
                                                            <field name="PLACE">sstore</field>
                                                            <value name="VAL">
                                                              <block type="LLL_val" id="592">
                                                                <field name="VAL">0</field>
                                                              </block>
                                                            </value>
                                                            <value name="SLOT">
                                                              <block type="LLL_math" id="593" inline="true">
                                                                <field name="OP">add</field>
                                                                <value name="A">
                                                                  <block type="LLL_val" id="594">
                                                                    <field name="VAL">1000</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_val" id="595">
                                                                    <field name="VAL">i</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="LLL_store" id="596" inline="true">
                                                                <field name="PLACE">mstore</field>
                                                                <value name="VAL">
                                                                  <block type="LLL_math" id="597" inline="true">
                                                                    <field name="OP">add</field>
                                                                    <value name="A">
                                                                      <block type="LLL_val" id="598">
                                                                        <field name="VAL">i</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="LLL_val" id="599">
                                                                        <field name="VAL">1</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="SLOT">
                                                                  <block type="LLL_val" id="600">
                                                                    <field name="VAL">i</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </next>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <next>
                                                      <block type="LLL_comment" id="601">
                                                        <field name="NOTE">remember how many heirs we have for later</field>
                                                        <next>
                                                          <block type="LLL_store" id="602" inline="true">
                                                            <field name="PLACE">mstore</field>
                                                            <value name="VAL">
                                                              <block type="LLL_transaction" id="603">
                                                                <field name="PROP">datan</field>
                                                              </block>
                                                            </value>
                                                            <value name="SLOT">
                                                              <block type="LLL_val" id="604">
                                                                <field name="VAL">HEIR_COUNT</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </statement>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                        <statement name="ELSE">
                          <block type="LLL_comment" id="605">
                            <field name="NOTE">A transaction received by anyone else triggers distribution to heirs if we haven't heard from the creator </field>
                            <next>
                              <block type="LLL_comment" id="606">
                                <field name="NOTE">(there are 2,592,000 seconds in a month)</field>
                                <next>
                                  <block type="LLL_when" id="607" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="LLL_compare" id="608" inline="true">
                                        <field name="OP">&gt;</field>
                                        <value name="A">
                                          <block type="LLL_block" id="609">
                                            <field name="PROP">timestamp</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_math" id="610" inline="true">
                                            <field name="OP">add</field>
                                            <value name="A">
                                              <block type="LLL_load" id="611" inline="true">
                                                <field name="PLACE">sload</field>
                                                <value name="SLOT">
                                                  <block type="LLL_val" id="612">
                                                    <field name="VAL">LAST_TOUCH</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_val" id="613">
                                                <field name="VAL">2592000</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="THEN">
                                      <block type="LLL_comment" id="614">
                                        <field name="NOTE">make sure there are heirs or else stop</field>
                                        <next>
                                          <block type="LLL_when" id="615" inline="false">
                                            <field name="WORD">when</field>
                                            <value name="COND">
                                              <block type="LLL_compare" id="616" inline="true">
                                                <field name="OP">=</field>
                                                <value name="A">
                                                  <block type="LLL_load" id="617" inline="true">
                                                    <field name="PLACE">sload</field>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="618">
                                                        <field name="VAL">HEIR_COUNT</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_val" id="619">
                                                    <field name="VAL">0</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="THEN">
                                              <block type="LLL_stop" id="620"></block>
                                            </statement>
                                            <next>
                                              <block type="LLL_comment" id="621">
                                                <field name="NOTE">calculate the even portion</field>
                                                <next>
                                                  <block type="LLL_store" id="622" inline="true">
                                                    <field name="PLACE">mstore</field>
                                                    <value name="VAL">
                                                      <block type="LLL_math" id="623" inline="true">
                                                        <field name="OP">sdiv</field>
                                                        <value name="A">
                                                          <block type="LLL_contract" id="624">
                                                            <field name="PROP">balance</field>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="LLL_load" id="625" inline="true">
                                                            <field name="PLACE">sload</field>
                                                            <value name="SLOT">
                                                              <block type="LLL_val" id="626">
                                                                <field name="VAL">HEIR_COUNT</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="627">
                                                        <field name="VAL">PORTION</field>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="LLL_comment" id="628">
                                                        <field name="NOTE">distribute the portions out to the heirs</field>
                                                        <next>
                                                          <block type="LLL_for" id="629" inline="false">
                                                            <field name="WORD">WHILE</field>
                                                            <value name="COND">
                                                              <block type="LLL_compare" id="630" inline="true">
                                                                <field name="OP">&lt;</field>
                                                                <value name="A">
                                                                  <block type="LLL_load" id="631" inline="true">
                                                                    <field name="PLACE">mload</field>
                                                                    <value name="SLOT">
                                                                      <block type="LLL_val" id="632">
                                                                        <field name="VAL">i</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_load" id="633" inline="true">
                                                                    <field name="PLACE">sload</field>
                                                                    <value name="SLOT">
                                                                      <block type="LLL_val" id="634">
                                                                        <field name="VAL">HEIR_COUNT</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <statement name="DO">
                                                              <block type="LLL_mktx" id="635" inline="true">
                                                                <value name="MONEY">
                                                                  <block type="LLL_val" id="636">
                                                                    <field name="VAL">PORTION</field>
                                                                  </block>
                                                                </value>
                                                                <value name="TO">
                                                                  <block type="LLL_load" id="637" inline="true">
                                                                    <field name="PLACE">sload</field>
                                                                    <value name="SLOT">
                                                                      <block type="LLL_math" id="638" inline="true">
                                                                        <field name="OP">add</field>
                                                                        <value name="A">
                                                                          <block type="LLL_val" id="639">
                                                                            <field name="VAL">1000</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="B">
                                                                          <block type="LLL_val" id="640">
                                                                            <field name="VAL">i</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <next>
                                                                  <block type="LLL_store" id="641" inline="true">
                                                                    <field name="PLACE">mstore</field>
                                                                    <value name="VAL">
                                                                      <block type="LLL_math" id="642" inline="true">
                                                                        <field name="OP">add</field>
                                                                        <value name="A">
                                                                          <block type="LLL_val" id="643">
                                                                            <field name="VAL">i</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="B">
                                                                          <block type="LLL_val" id="644">
                                                                            <field name="VAL">1</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                    <value name="SLOT">
                                                                      <block type="LLL_val" id="645">
                                                                        <field name="VAL">i</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </next>
                                                              </block>
                                                            </statement>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </statement>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                      </block>
                    </statement>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>
*/}),

i_want_half: fnCommentToString(function(){/*!
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="LLL_comment" id="646" x="29" y="21">
    <field name="NOTE">"I WANT HALF!" Marriage Smart Contract [based on the idea by @mids106 et al]</field>
    <next>
      <block type="LLL_when" id="647" inline="false">
        <field name="WORD">when</field>
        <value name="COND">
          <block type="LLL_compare" id="648" inline="true">
            <field name="OP">&lt;</field>
            <value name="A">
              <block type="LLL_transaction" id="649">
                <field name="PROP">value</field>
              </block>
            </value>
            <value name="B">
              <block type="LLL_math" id="650" inline="true">
                <field name="OP">mul</field>
                <value name="A">
                  <block type="LLL_block" id="651">
                    <field name="PROP">basefee</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_val" id="652">
                    <field name="VAL">100</field>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="THEN">
          <block type="LLL_comment" id="653">
            <field name="NOTE">The contract must receive at least 100x basefee for execution or it stops</field>
            <next>
              <block type="LLL_stop" id="654"></block>
            </next>
          </block>
        </statement>
        <next>
          <block type="LLL_when" id="655" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LLL_compare" id="656" inline="true">
                <field name="OP">=</field>
                <value name="A">
                  <block type="LLL_load" id="657" inline="true">
                    <field name="PLACE">sload</field>
                    <value name="SLOT">
                      <block type="LLL_val" id="658">
                        <field name="VAL">STATE</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_val" id="659">
                    <field name="VAL">0</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="LLL_comment" id="660">
                <field name="NOTE">At contract creation, we store the sender as partner_1 with partner_2 given as the 1st data item</field>
                <next>
                  <block type="LLL_store" id="661" inline="true">
                    <field name="PLACE">sstore</field>
                    <value name="VAL">
                      <block type="LLL_transaction" id="662">
                        <field name="PROP">sender</field>
                      </block>
                    </value>
                    <value name="SLOT">
                      <block type="LLL_val" id="663">
                        <field name="VAL">PARTNER_1</field>
                      </block>
                    </value>
                    <next>
                      <block type="LLL_store" id="664" inline="true">
                        <field name="PLACE">sstore</field>
                        <value name="VAL">
                          <block type="LLL_load" id="665" inline="true">
                            <field name="PLACE">txdata</field>
                            <value name="SLOT">
                              <block type="LLL_val" id="666">
                                <field name="VAL">0</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="SLOT">
                          <block type="LLL_val" id="667">
                            <field name="VAL">PARTNER_2</field>
                          </block>
                        </value>
                        <next>
                          <block type="LLL_store" id="668" inline="true">
                            <field name="PLACE">sstore</field>
                            <value name="VAL">
                              <block type="LLL_val" id="669">
                                <field name="VAL">PROPOSED</field>
                              </block>
                            </value>
                            <value name="SLOT">
                              <block type="LLL_val" id="670">
                                <field name="VAL">STATE</field>
                              </block>
                            </value>
                            <next>
                              <block type="LLL_comment" id="671">
                                <field name="NOTE">Partner_1 has now "PROPOSED" to partner_2 </field>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
            <next>
              <block type="LLL_when" id="672" inline="false">
                <field name="WORD">when</field>
                <value name="COND">
                  <block type="LLL_compare" id="673" inline="true">
                    <field name="OP">=</field>
                    <value name="A">
                      <block type="LLL_load" id="674" inline="true">
                        <field name="PLACE">sload</field>
                        <value name="SLOT">
                          <block type="LLL_val" id="675">
                            <field name="VAL">STATE</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_val" id="676">
                        <field name="VAL">PROPOSED</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="THEN">
                  <block type="LLL_comment" id="677">
                    <field name="NOTE"> Partner_2 can accept the proposal by sending in a transaction with partner_1 given as the first data item</field>
                    <next>
                      <block type="LLL_when" id="678" inline="false">
                        <field name="WORD">when</field>
                        <value name="COND">
                          <block type="LLL_logic" id="679" inline="false">
                            <field name="OP">and</field>
                            <value name="A">
                              <block type="LLL_compare" id="680" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_transaction" id="681">
                                    <field name="PROP">sender</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_val" id="682">
                                    <field name="VAL">PARTNER_2</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_compare" id="683" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_load" id="684" inline="true">
                                    <field name="PLACE">txdata</field>
                                    <value name="SLOT">
                                      <block type="LLL_val" id="685">
                                        <field name="VAL">0</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_load" id="686" inline="true">
                                    <field name="PLACE">sload</field>
                                    <value name="SLOT">
                                      <block type="LLL_val" id="687">
                                        <field name="VAL">PARTNER_1</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="THEN">
                          <block type="LLL_store" id="688" inline="true">
                            <field name="PLACE">sstore</field>
                            <value name="VAL">
                              <block type="LLL_val" id="689">
                                <field name="VAL">MARRIED</field>
                              </block>
                            </value>
                            <value name="SLOT">
                              <block type="LLL_val" id="690">
                                <field name="VAL">STATE</field>
                              </block>
                            </value>
                          </block>
                        </statement>
                        <next>
                          <block type="LLL_comment" id="691">
                            <field name="NOTE">Partner_1 and Partner_2 are now "MARRIED"!</field>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="LLL_when" id="692" inline="false">
                    <field name="WORD">when</field>
                    <value name="COND">
                      <block type="LLL_logic" id="693" inline="false">
                        <field name="OP">and</field>
                        <value name="A">
                          <block type="LLL_compare" id="694" inline="true">
                            <field name="OP">=</field>
                            <value name="A">
                              <block type="LLL_load" id="695" inline="true">
                                <field name="PLACE">sload</field>
                                <value name="SLOT">
                                  <block type="LLL_val" id="696">
                                    <field name="VAL">STATE</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_val" id="697">
                                <field name="VAL">MARRIED</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_logic" id="698" inline="false">
                            <field name="OP">or</field>
                            <value name="A">
                              <block type="LLL_compare" id="699" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_transaction" id="700">
                                    <field name="PROP">sender</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_val" id="701">
                                    <field name="VAL">PARTNER_1</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_compare" id="702" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_transaction" id="703">
                                    <field name="PROP">sender</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_val" id="704">
                                    <field name="VAL">PARTNER_2</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="THEN">
                      <block type="LLL_comment" id="705">
                        <field name="NOTE">Once married, the contract is a "joint" account and each partner must send in the same instruction to make a withdraw</field>
                        <next>
                          <block type="LLL_comment" id="706">
                            <field name="NOTE">A valid withdrawal instruction is an incoming transaction where: </field>
                            <next>
                              <block type="LLL_comment" id="707">
                                <field name="NOTE">data item 0 is the withdraw code, data item 1 is the destination address, and data item 2 is the amount</field>
                                <next>
                                  <block type="LLL_when" id="708" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="LLL_compare" id="709" inline="true">
                                        <field name="OP">=</field>
                                        <value name="A">
                                          <block type="LLL_load" id="710" inline="true">
                                            <field name="PLACE">txdata</field>
                                            <value name="SLOT">
                                              <block type="LLL_val" id="711">
                                                <field name="VAL">0</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_val" id="712">
                                            <field name="VAL">WITHDRAW</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="THEN">
                                      <block type="LLL_if" id="713" inline="false">
                                        <value name="COND">
                                          <block type="LLL_logic" id="714" inline="false">
                                            <field name="OP">and</field>
                                            <value name="A">
                                              <block type="LLL_compare" id="715" inline="true">
                                                <field name="OP">!=</field>
                                                <value name="A">
                                                  <block type="LLL_load" id="716" inline="true">
                                                    <field name="PLACE">sload</field>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="717">
                                                        <field name="VAL">WITHDRAW_CREATOR</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_transaction" id="718">
                                                    <field name="PROP">sender</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_logic" id="719" inline="false">
                                                <field name="OP">and</field>
                                                <value name="A">
                                                  <block type="LLL_compare" id="720" inline="true">
                                                    <field name="OP">=</field>
                                                    <value name="A">
                                                      <block type="LLL_load" id="721" inline="true">
                                                        <field name="PLACE">txdata</field>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="722">
                                                            <field name="VAL">1</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="LLL_load" id="723" inline="true">
                                                        <field name="PLACE">sload</field>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="724">
                                                            <field name="VAL">WITHDRAW_TO</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_compare" id="725" inline="true">
                                                    <field name="OP">=</field>
                                                    <value name="A">
                                                      <block type="LLL_load" id="726" inline="true">
                                                        <field name="PLACE">txdata</field>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="727">
                                                            <field name="VAL">2</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="LLL_load" id="728" inline="true">
                                                        <field name="PLACE">sload</field>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="729">
                                                            <field name="VAL">WITHDRAW_AMOUNT</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="THEN">
                                          <block type="LLL_comment" id="730">
                                            <field name="NOTE">If a withdraw request is already pending from the other partner and this request matches, then do it.</field>
                                            <next>
                                              <block type="LLL_mktx" id="731" inline="true">
                                                <value name="MONEY">
                                                  <block type="LLL_load" id="732" inline="true">
                                                    <field name="PLACE">sload</field>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="733">
                                                        <field name="VAL">WITHDRAW_AMOUNT</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="TO">
                                                  <block type="LLL_load" id="734" inline="true">
                                                    <field name="PLACE">sload</field>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="735">
                                                        <field name="VAL">WITHDRAW_TO</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </next>
                                          </block>
                                        </statement>
                                        <statement name="ELSE">
                                          <block type="LLL_comment" id="736">
                                            <field name="NOTE">this is a new withdraw request; store it as pending until a matching request is received from other partner</field>
                                            <next>
                                              <block type="LLL_store" id="737" inline="true">
                                                <field name="PLACE">sstore</field>
                                                <value name="VAL">
                                                  <block type="LLL_load" id="738" inline="true">
                                                    <field name="PLACE">txdata</field>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="739">
                                                        <field name="VAL">1</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="SLOT">
                                                  <block type="LLL_val" id="740">
                                                    <field name="VAL">WITHDRAW_TO</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="LLL_store" id="741" inline="true">
                                                    <field name="PLACE">sstore</field>
                                                    <value name="VAL">
                                                      <block type="LLL_load" id="742" inline="true">
                                                        <field name="PLACE">txdata</field>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="743">
                                                            <field name="VAL">2</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="744">
                                                        <field name="VAL">WITHDRAW_AMOUNT</field>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="LLL_store" id="745" inline="true">
                                                        <field name="PLACE">sstore</field>
                                                        <value name="VAL">
                                                          <block type="LLL_transaction" id="746">
                                                            <field name="PROP">sender</field>
                                                          </block>
                                                        </value>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="747">
                                                            <field name="VAL">WITHDRAW_CREATOR</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </statement>
                                      </block>
                                    </statement>
                                    <next>
                                      <block type="LLL_comment" id="748">
                                        <field name="NOTE">Once married, the partners must both agree in order to get divorced and split the pot. I WANT HALF!</field>
                                        <next>
                                          <block type="LLL_when" id="749" inline="false">
                                            <field name="WORD">when</field>
                                            <value name="COND">
                                              <block type="LLL_compare" id="750" inline="true">
                                                <field name="OP">=</field>
                                                <value name="A">
                                                  <block type="LLL_load" id="751" inline="true">
                                                    <field name="PLACE">txdata</field>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="752">
                                                        <field name="VAL">0</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_val" id="753">
                                                    <field name="VAL">DIVORCE</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="THEN">
                                              <block type="LLL_if" id="754" inline="false">
                                                <value name="COND">
                                                  <block type="LLL_compare" id="755" inline="true">
                                                    <field name="OP">!=</field>
                                                    <value name="A">
                                                      <block type="LLL_load" id="756" inline="true">
                                                        <field name="PLACE">sload</field>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="757">
                                                            <field name="VAL">DIVORCE_CREATOR</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="LLL_transaction" id="758">
                                                        <field name="PROP">sender</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="THEN">
                                                  <block type="LLL_comment" id="759">
                                                    <field name="NOTE">a divorce request is already pending and 2nd party is agreeing, so split the pot</field>
                                                    <next>
                                                      <block type="LLL_store" id="760" inline="true">
                                                        <field name="PLACE">mstore</field>
                                                        <value name="VAL">
                                                          <block type="LLL_math" id="761" inline="true">
                                                            <field name="OP">sdiv</field>
                                                            <value name="A">
                                                              <block type="LLL_contract" id="762">
                                                                <field name="PROP">balance</field>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="LLL_val" id="763">
                                                                <field name="VAL">2</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="764">
                                                            <field name="VAL">HALF</field>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="LLL_mktx" id="765" inline="true">
                                                            <value name="MONEY">
                                                              <block type="LLL_load" id="766" inline="true">
                                                                <field name="PLACE">mload</field>
                                                                <value name="SLOT">
                                                                  <block type="LLL_val" id="767">
                                                                    <field name="VAL">HALF</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="TO">
                                                              <block type="LLL_load" id="768" inline="true">
                                                                <field name="PLACE">sload</field>
                                                                <value name="SLOT">
                                                                  <block type="LLL_val" id="769">
                                                                    <field name="VAL">PARTNER_1</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="LLL_mktx" id="770" inline="true">
                                                                <value name="MONEY">
                                                                  <block type="LLL_load" id="771" inline="true">
                                                                    <field name="PLACE">mload</field>
                                                                    <value name="SLOT">
                                                                      <block type="LLL_val" id="772">
                                                                        <field name="VAL">HALF</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="TO">
                                                                  <block type="LLL_load" id="773" inline="true">
                                                                    <field name="PLACE">sload</field>
                                                                    <value name="SLOT">
                                                                      <block type="LLL_val" id="774">
                                                                        <field name="VAL">PARTNER_2</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <next>
                                                                  <block type="LLL_store" id="775" inline="true">
                                                                    <field name="PLACE">sstore</field>
                                                                    <value name="VAL">
                                                                      <block type="LLL_val" id="776">
                                                                        <field name="VAL">DIVORCED</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="SLOT">
                                                                      <block type="LLL_val" id="777">
                                                                        <field name="VAL">STATE</field>
                                                                      </block>
                                                                    </value>
                                                                    <next>
                                                                      <block type="LLL_comment" id="778">
                                                                        <field name="NOTE">The partners are now divorced. :(</field>
                                                                      </block>
                                                                    </next>
                                                                  </block>
                                                                </next>
                                                              </block>
                                                            </next>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </statement>
                                                <statement name="ELSE">
                                                  <block type="LLL_comment" id="779">
                                                    <field name="NOTE">make a new divorce request pending, waiting for agreement</field>
                                                    <next>
                                                      <block type="LLL_store" id="780" inline="true">
                                                        <field name="PLACE">sstore</field>
                                                        <value name="VAL">
                                                          <block type="LLL_transaction" id="781">
                                                            <field name="PROP">sender</field>
                                                          </block>
                                                        </value>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="782">
                                                            <field name="VAL">DIVORCE_CREATOR</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </statement>
                                              </block>
                                            </statement>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>
*/})


}
