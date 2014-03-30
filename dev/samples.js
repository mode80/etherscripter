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

website_sale: fnCommentToString(function(){/*!
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="LLL_comment" id="78" x="43" y="78">
    <field name="NOTE">*** An Ethereum smart contract to sell a website for "5000 by March"</field>
    <next>
      <block type="LLL_comment" id="79">
        <field name="NOTE">First, store buyer's ethereum address:</field>
        <next>
          <block type="LLL_store" id="80" inline="true">
            <field name="PLACE">sstore</field>
            <value name="VAL">
              <block type="LLL_val" id="81">
                <field name="VAL">6af26739b9ffef8aa2985252e5357fde</field>
              </block>
            </value>
            <value name="SLOT">
              <block type="LLL_val" id="82">
                <field name="VAL">BUYER</field>
              </block>
            </value>
            <next>
              <block type="LLL_comment" id="83">
                <field name="NOTE">Then, store seller's ethereum address:</field>
                <next>
                  <block type="LLL_store" id="84" inline="true">
                    <field name="PLACE">sstore</field>
                    <value name="VAL">
                      <block type="LLL_val" id="85">
                        <field name="VAL">feab802c014588f08bfee2741086c375</field>
                      </block>
                    </value>
                    <value name="SLOT">
                      <block type="LLL_val" id="86">
                        <field name="VAL">SELLER</field>
                      </block>
                    </value>
                    <next>
                      <block type="LLL_comment" id="87">
                        <field name="NOTE">April 1, 2014 is 1396310400 in "computer time"</field>
                        <next>
                          <block type="LLL_store" id="88" inline="true">
                            <field name="PLACE">sstore</field>
                            <value name="VAL">
                              <block type="LLL_val" id="89">
                                <field name="VAL">1396310400</field>
                              </block>
                            </value>
                            <value name="SLOT">
                              <block type="LLL_val" id="90">
                                <field name="VAL">DEADLINE</field>
                              </block>
                            </value>
                            <next>
                              <block type="LLL_comment" id="91">
                                <field name="NOTE">If the agreed amount is received on time...</field>
                                <next>
                                  <block type="LLL_when" id="92" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="LLL_math" id="93" inline="false">
                                        <field name="OP">and</field>
                                        <value name="A">
                                          <block type="LLL_math" id="94" inline="true">
                                            <field name="OP">&gt;=</field>
                                            <value name="A">
                                              <block type="LLL_transaction" id="95">
                                                <field name="PROP">value</field>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_currency" id="96" inline="true">
                                                <field name="DENOM">ether</field>
                                                <value name="AMT">
                                                  <block type="LLL_val" id="97">
                                                    <field name="VAL">5000</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_math" id="98" inline="true">
                                            <field name="OP">&lt;=</field>
                                            <value name="A">
                                              <block type="LLL_block" id="99">
                                                <field name="PROP">timestamp</field>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_load" id="100" inline="true">
                                                <field name="PLACE">sload</field>
                                                <value name="SLOT">
                                                  <block type="LLL_val" id="101">
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
                                      <block type="LLL_comment" id="102">
                                        <field name="NOTE">... then designate the buyer as the new website admin and pay the seller</field>
                                        <next>
                                          <block type="LLL_store" id="103" inline="true">
                                            <field name="PLACE">sstore</field>
                                            <value name="VAL">
                                              <block type="LLL_load" id="104" inline="true">
                                                <field name="PLACE">sload</field>
                                                <value name="SLOT">
                                                  <block type="LLL_val" id="105">
                                                    <field name="VAL">BUYER</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="SLOT">
                                              <block type="LLL_val" id="106">
                                                <field name="VAL">WEBSITE_ADMIN</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="LLL_mktx" id="107" inline="true">
                                                <value name="MONEY">
                                                  <block type="LLL_contract" id="108">
                                                    <field name="PROP">balance</field>
                                                  </block>
                                                </value>
                                                <value name="TO">
                                                  <block type="LLL_load" id="109" inline="true">
                                                    <field name="PLACE">sload</field>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="110">
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

namecoin: fnCommentToString(function(){/*!
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="LLL_comment" id="111" x="38" y="137">
    <field name="NOTE">A simple name registry for Ethereum addresses</field>
    <next>
      <block type="LLL_if" id="112" inline="false">
        <value name="COND">
          <block type="LLL_math" id="113" inline="true">
            <field name="OP">&lt;</field>
            <value name="A">
              <block type="LLL_transaction" id="114">
                <field name="PROP">value</field>
              </block>
            </value>
            <value name="B">
              <block type="LLL_math" id="115" inline="true">
                <field name="OP">mul</field>
                <value name="A">
                  <block type="LLL_block" id="116">
                    <field name="PROP">basefee</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_val" id="117">
                    <field name="VAL">100</field>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="THEN">
          <block type="LLL_comment" id="118">
            <field name="NOTE">stop when fee is insufficient</field>
            <next>
              <block type="LLL_stop" id="119"></block>
            </next>
          </block>
        </statement>
        <statement name="ELSE">
          <block type="LLL_comment" id="120">
            <field name="NOTE">store the name, given as the first data item, into a storage slot for the sender address</field>
            <next>
              <block type="LLL_store" id="121" inline="true">
                <field name="PLACE">sstore</field>
                <value name="VAL">
                  <block type="LLL_load" id="122" inline="true">
                    <field name="PLACE">txdata</field>
                    <value name="SLOT">
                      <block type="LLL_val" id="123">
                        <field name="VAL">0</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="SLOT">
                  <block type="LLL_transaction" id="124">
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
</xml>
*/}),

last_will: fnCommentToString(function(){/*!
<xml>
  <block type="LLL_comment" id="136" x="25" y="20">
    <field name="NOTE">Last Will &amp; Testament using a "dead-man's-switch"</field>
    <next>
      <block type="LLL_comment" id="137">
        <field name="NOTE">If the contract isn't touched by the creator at least once per month, he's dead</field>
        <next>
          <block type="LLL_comment" id="138">
            <field name="NOTE">Therefore, split all funds among the heirs</field>
            <next>
              <block type="LLL_when" id="139" inline="false">
                <field name="WORD">when</field>
                <value name="COND">
                  <block type="LLL_math" id="140" inline="true">
                    <field name="OP">&lt;</field>
                    <value name="A">
                      <block type="LLL_transaction" id="141">
                        <field name="PROP">value</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_math" id="142" inline="true">
                        <field name="OP">mul</field>
                        <value name="A">
                          <block type="LLL_block" id="143">
                            <field name="PROP">basefee</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="144">
                            <field name="VAL">100</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="THEN">
                  <block type="LLL_comment" id="145">
                    <field name="NOTE">stop if insufficient funds for execution</field>
                    <next>
                      <block type="LLL_stop" id="146"></block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="LLL_if" id="147" inline="false">
                    <value name="COND">
                      <block type="LLL_math" id="148" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="LLL_load" id="149" inline="true">
                            <field name="PLACE">sload</field>
                            <value name="SLOT">
                              <block type="LLL_val" id="150">
                                <field name="VAL">CREATOR</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="151">
                            <field name="VAL">0</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="THEN">
                      <block type="LLL_comment" id="152">
                        <field name="NOTE">This must be a newly created Will contact. Here we record the creator.</field>
                        <next>
                          <block type="LLL_store" id="153" inline="true">
                            <field name="PLACE">sstore</field>
                            <value name="VAL">
                              <block type="LLL_transaction" id="154">
                                <field name="PROP">sender</field>
                              </block>
                            </value>
                            <value name="SLOT">
                              <block type="LLL_val" id="155">
                                <field name="VAL">CREATOR</field>
                              </block>
                            </value>
                            <next>
                              <block type="LLL_comment" id="156">
                                <field name="NOTE">A future transaction received from the creator does three things: </field>
                                <next>
                                  <block type="LLL_comment" id="157">
                                    <field name="NOTE">    1) It's proves he's alive and supresses distribution for another 30 days</field>
                                    <next>
                                      <block type="LLL_comment" id="158">
                                        <field name="NOTE">    2) It naturally increases the contract's balance by the amount of the transaction value</field>
                                        <next>
                                          <block type="LLL_comment" id="159">
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
                      <block type="LLL_if" id="160" inline="false">
                        <value name="COND">
                          <block type="LLL_math" id="161" inline="true">
                            <field name="OP">=</field>
                            <value name="A">
                              <block type="LLL_transaction" id="162">
                                <field name="PROP">sender</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_load" id="163" inline="true">
                                <field name="PLACE">sload</field>
                                <value name="SLOT">
                                  <block type="LLL_val" id="164">
                                    <field name="VAL">CREATOR</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="THEN">
                          <block type="LLL_comment" id="165">
                            <field name="NOTE">Here we record the time of this touch by the creator. He's still alive.</field>
                            <next>
                              <block type="LLL_store" id="166" inline="true">
                                <field name="PLACE">sstore</field>
                                <value name="VAL">
                                  <block type="LLL_block" id="167">
                                    <field name="PROP">timestamp</field>
                                  </block>
                                </value>
                                <value name="SLOT">
                                  <block type="LLL_val" id="168">
                                    <field name="VAL">LAST_TOUCH</field>
                                  </block>
                                </value>
                                <next>
                                  <block type="LLL_when" id="255" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="LLL_math" id="257" inline="true">
                                        <field name="OP">&gt;</field>
                                        <value name="A">
                                          <block type="LLL_transaction" id="258">
                                            <field name="PROP">datan</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_val" id="259">
                                            <field name="VAL">0</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="THEN">
                                      <block type="LLL_comment" id="169">
                                        <field name="NOTE">The creator defines heirs by supplying their payment addresses via the transaction data items</field>
                                        <next>
                                          <block type="LLL_comment" id="170">
                                            <field name="NOTE">He can change these by supplying a new set of addresses which replaces all of the old set</field>
                                            <next>
                                              <block type="LLL_for" id="171" inline="false">
                                                <field name="WORD">WHILE</field>
                                                <value name="COND">
                                                  <block type="LLL_math" id="172" inline="true">
                                                    <field name="OP">&lt;</field>
                                                    <value name="A">
                                                      <block type="LLL_load" id="173" inline="true">
                                                        <field name="PLACE">mload</field>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="174">
                                                            <field name="VAL">i</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="LLL_transaction" id="175">
                                                        <field name="PROP">datan</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO">
                                                  <block type="LLL_comment" id="176">
                                                    <field name="NOTE">each heir will be recorded for future reference in the storage range 1000+</field>
                                                    <next>
                                                      <block type="LLL_store" id="177" inline="true">
                                                        <field name="PLACE">sstore</field>
                                                        <value name="VAL">
                                                          <block type="LLL_load" id="178" inline="true">
                                                            <field name="PLACE">txdata</field>
                                                            <value name="SLOT">
                                                              <block type="LLL_val" id="179">
                                                                <field name="VAL">i</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="SLOT">
                                                          <block type="LLL_math" id="180" inline="true">
                                                            <field name="OP">add</field>
                                                            <value name="A">
                                                              <block type="LLL_val" id="181">
                                                                <field name="VAL">1000</field>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="LLL_val" id="182">
                                                                <field name="VAL">i</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="LLL_store" id="183" inline="true">
                                                            <field name="PLACE">mstore</field>
                                                            <value name="VAL">
                                                              <block type="LLL_math" id="184" inline="true">
                                                                <field name="OP">add</field>
                                                                <value name="A">
                                                                  <block type="LLL_val" id="185">
                                                                    <field name="VAL">i</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_val" id="186">
                                                                    <field name="VAL">1</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="SLOT">
                                                              <block type="LLL_val" id="187">
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
                                                  <block type="LLL_for" id="188" inline="false">
                                                    <field name="WORD">WHILE</field>
                                                    <value name="COND">
                                                      <block type="LLL_math" id="189" inline="true">
                                                        <field name="OP">&lt;</field>
                                                        <value name="A">
                                                          <block type="LLL_load" id="190" inline="true">
                                                            <field name="PLACE">mload</field>
                                                            <value name="SLOT">
                                                              <block type="LLL_val" id="191">
                                                                <field name="VAL">i</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="LLL_load" id="192" inline="true">
                                                            <field name="PLACE">sload</field>
                                                            <value name="SLOT">
                                                              <block type="LLL_val" id="193">
                                                                <field name="VAL">HEIR_COUNT</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO">
                                                      <block type="LLL_comment" id="194">
                                                        <field name="NOTE">any former heirs are removed in favor of this new set</field>
                                                        <next>
                                                          <block type="LLL_store" id="195" inline="true">
                                                            <field name="PLACE">sstore</field>
                                                            <value name="VAL">
                                                              <block type="LLL_val" id="196">
                                                                <field name="VAL">0</field>
                                                              </block>
                                                            </value>
                                                            <value name="SLOT">
                                                              <block type="LLL_math" id="197" inline="true">
                                                                <field name="OP">add</field>
                                                                <value name="A">
                                                                  <block type="LLL_val" id="198">
                                                                    <field name="VAL">1000</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_val" id="199">
                                                                    <field name="VAL">i</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="LLL_store" id="200" inline="true">
                                                                <field name="PLACE">mstore</field>
                                                                <value name="VAL">
                                                                  <block type="LLL_math" id="201" inline="true">
                                                                    <field name="OP">add</field>
                                                                    <value name="A">
                                                                      <block type="LLL_val" id="202">
                                                                        <field name="VAL">i</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="LLL_val" id="203">
                                                                        <field name="VAL">1</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="SLOT">
                                                                  <block type="LLL_val" id="204">
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
                                                      <block type="LLL_comment" id="205">
                                                        <field name="NOTE">remember how many heirs we have for later</field>
                                                        <next>
                                                          <block type="LLL_store" id="206" inline="true">
                                                            <field name="PLACE">mstore</field>
                                                            <value name="VAL">
                                                              <block type="LLL_transaction" id="207">
                                                                <field name="PROP">datan</field>
                                                              </block>
                                                            </value>
                                                            <value name="SLOT">
                                                              <block type="LLL_val" id="208">
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
                          <block type="LLL_comment" id="209">
                            <field name="NOTE">A transaction received by anyone else triggers distribution to heirs if we haven't heard from the creator </field>
                            <next>
                              <block type="LLL_comment" id="210">
                                <field name="NOTE">(there are 2,592,000 seconds in a month)</field>
                                <next>
                                  <block type="LLL_when" id="211" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="LLL_math" id="212" inline="true">
                                        <field name="OP">&gt;</field>
                                        <value name="A">
                                          <block type="LLL_block" id="213">
                                            <field name="PROP">timestamp</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_math" id="214" inline="true">
                                            <field name="OP">add</field>
                                            <value name="A">
                                              <block type="LLL_load" id="215" inline="true">
                                                <field name="PLACE">sload</field>
                                                <value name="SLOT">
                                                  <block type="LLL_val" id="216">
                                                    <field name="VAL">LAST_TOUCH</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_val" id="217">
                                                <field name="VAL">2592000</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="THEN">
                                      <block type="LLL_comment" id="218">
                                        <field name="NOTE">make sure there are heirs or else stop</field>
                                        <next>
                                          <block type="LLL_when" id="219" inline="false">
                                            <field name="WORD">when</field>
                                            <value name="COND">
                                              <block type="LLL_math" id="220" inline="true">
                                                <field name="OP">=</field>
                                                <value name="A">
                                                  <block type="LLL_load" id="221" inline="true">
                                                    <field name="PLACE">sload</field>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="222">
                                                        <field name="VAL">HEIR_COUNT</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_val" id="223">
                                                    <field name="VAL">0</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="THEN">
                                              <block type="LLL_stop" id="224"></block>
                                            </statement>
                                            <next>
                                              <block type="LLL_comment" id="225">
                                                <field name="NOTE">calculate the even portion</field>
                                                <next>
                                                  <block type="LLL_store" id="226" inline="true">
                                                    <field name="PLACE">mstore</field>
                                                    <value name="VAL">
                                                      <block type="LLL_math" id="227" inline="true">
                                                        <field name="OP">sdiv</field>
                                                        <value name="A">
                                                          <block type="LLL_contract" id="228">
                                                            <field name="PROP">balance</field>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="LLL_load" id="229" inline="true">
                                                            <field name="PLACE">sload</field>
                                                            <value name="SLOT">
                                                              <block type="LLL_val" id="230">
                                                                <field name="VAL">HEIR_COUNT</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="231">
                                                        <field name="VAL">PORTION</field>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="LLL_comment" id="232">
                                                        <field name="NOTE">distribute the portions out to the heirs</field>
                                                        <next>
                                                          <block type="LLL_for" id="233" inline="false">
                                                            <field name="WORD">WHILE</field>
                                                            <value name="COND">
                                                              <block type="LLL_math" id="234" inline="true">
                                                                <field name="OP">&lt;</field>
                                                                <value name="A">
                                                                  <block type="LLL_load" id="235" inline="true">
                                                                    <field name="PLACE">mload</field>
                                                                    <value name="SLOT">
                                                                      <block type="LLL_val" id="236">
                                                                        <field name="VAL">i</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_load" id="237" inline="true">
                                                                    <field name="PLACE">sload</field>
                                                                    <value name="SLOT">
                                                                      <block type="LLL_val" id="238">
                                                                        <field name="VAL">HEIR_COUNT</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <statement name="DO">
                                                              <block type="LLL_mktx" id="239" inline="true">
                                                                <value name="MONEY">
                                                                  <block type="LLL_val" id="240">
                                                                    <field name="VAL">PORTION</field>
                                                                  </block>
                                                                </value>
                                                                <value name="TO">
                                                                  <block type="LLL_load" id="241" inline="true">
                                                                    <field name="PLACE">sload</field>
                                                                    <value name="SLOT">
                                                                      <block type="LLL_math" id="242" inline="true">
                                                                        <field name="OP">add</field>
                                                                        <value name="A">
                                                                          <block type="LLL_val" id="243">
                                                                            <field name="VAL">1000</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="B">
                                                                          <block type="LLL_val" id="244">
                                                                            <field name="VAL">i</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <next>
                                                                  <block type="LLL_store" id="245" inline="true">
                                                                    <field name="PLACE">mstore</field>
                                                                    <value name="VAL">
                                                                      <block type="LLL_math" id="246" inline="true">
                                                                        <field name="OP">add</field>
                                                                        <value name="A">
                                                                          <block type="LLL_val" id="247">
                                                                            <field name="VAL">i</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="B">
                                                                          <block type="LLL_val" id="248">
                                                                            <field name="VAL">1</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                    <value name="SLOT">
                                                                      <block type="LLL_val" id="249">
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
</xml>*/
}),

i_want_half: fnCommentToString(function(){/*!
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="LLL_comment" id="31" x="29" y="21">
    <field name="NOTE">"I WANT HALF!" Marriage Smart Contract [based on the idea by @mids106 et al]</field>
    <next>
      <block type="LLL_when" id="32" inline="false">
        <field name="WORD">when</field>
        <value name="COND">
          <block type="LLL_math" id="33" inline="true">
            <field name="OP">&lt;</field>
            <value name="A">
              <block type="LLL_transaction" id="34">
                <field name="PROP">value</field>
              </block>
            </value>
            <value name="B">
              <block type="LLL_math" id="35" inline="true">
                <field name="OP">mul</field>
                <value name="A">
                  <block type="LLL_block" id="36">
                    <field name="PROP">basefee</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_val" id="37">
                    <field name="VAL">100</field>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="THEN">
          <block type="LLL_comment" id="38">
            <field name="NOTE">The contract must receive at least 100x basefee for execution or it stops</field>
            <next>
              <block type="LLL_stop" id="39"></block>
            </next>
          </block>
        </statement>
        <next>
          <block type="LLL_when" id="40" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LLL_math" id="41" inline="true">
                <field name="OP">=</field>
                <value name="A">
                  <block type="LLL_load" id="42" inline="true">
                    <field name="PLACE">sload</field>
                    <value name="SLOT">
                      <block type="LLL_val" id="43">
                        <field name="VAL">STATE</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_val" id="44">
                    <field name="VAL">0</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="LLL_comment" id="45">
                <field name="NOTE">At contract creation, we store the sender as partner_1 with partner_2 given as the 1st data item</field>
                <next>
                  <block type="LLL_store" id="46" inline="true">
                    <field name="PLACE">sstore</field>
                    <value name="VAL">
                      <block type="LLL_transaction" id="47">
                        <field name="PROP">sender</field>
                      </block>
                    </value>
                    <value name="SLOT">
                      <block type="LLL_val" id="48">
                        <field name="VAL">PARTNER_1</field>
                      </block>
                    </value>
                    <next>
                      <block type="LLL_store" id="49" inline="true">
                        <field name="PLACE">sstore</field>
                        <value name="VAL">
                          <block type="LLL_load" id="50" inline="true">
                            <field name="PLACE">txdata</field>
                            <value name="SLOT">
                              <block type="LLL_val" id="51">
                                <field name="VAL">0</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="SLOT">
                          <block type="LLL_val" id="52">
                            <field name="VAL">PARTNER_2</field>
                          </block>
                        </value>
                        <next>
                          <block type="LLL_store" id="53" inline="true">
                            <field name="PLACE">sstore</field>
                            <value name="VAL">
                              <block type="LLL_val" id="54">
                                <field name="VAL">PROPOSED</field>
                              </block>
                            </value>
                            <value name="SLOT">
                              <block type="LLL_val" id="55">
                                <field name="VAL">STATE</field>
                              </block>
                            </value>
                            <next>
                              <block type="LLL_comment" id="56">
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
              <block type="LLL_when" id="57" inline="false">
                <field name="WORD">when</field>
                <value name="COND">
                  <block type="LLL_math" id="58" inline="true">
                    <field name="OP">=</field>
                    <value name="A">
                      <block type="LLL_load" id="59" inline="true">
                        <field name="PLACE">sload</field>
                        <value name="SLOT">
                          <block type="LLL_val" id="60">
                            <field name="VAL">STATE</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_val" id="61">
                        <field name="VAL">PROPOSED</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="THEN">
                  <block type="LLL_comment" id="62">
                    <field name="NOTE"> Partner_2 can accept the proposal by sending in a transaction with partner_1 given as the first data item</field>
                    <next>
                      <block type="LLL_when" id="63" inline="false">
                        <field name="WORD">when</field>
                        <value name="COND">
                          <block type="LLL_math" id="64" inline="false">
                            <field name="OP">and</field>
                            <value name="A">
                              <block type="LLL_math" id="65" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_transaction" id="66">
                                    <field name="PROP">sender</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_val" id="67">
                                    <field name="VAL">PARTNER_2</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_math" id="68" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_load" id="69" inline="true">
                                    <field name="PLACE">txdata</field>
                                    <value name="SLOT">
                                      <block type="LLL_val" id="70">
                                        <field name="VAL">0</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_load" id="71" inline="true">
                                    <field name="PLACE">sload</field>
                                    <value name="SLOT">
                                      <block type="LLL_val" id="72">
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
                          <block type="LLL_store" id="73" inline="true">
                            <field name="PLACE">sstore</field>
                            <value name="VAL">
                              <block type="LLL_val" id="74">
                                <field name="VAL">MARRIED</field>
                              </block>
                            </value>
                            <value name="SLOT">
                              <block type="LLL_val" id="75">
                                <field name="VAL">STATE</field>
                              </block>
                            </value>
                          </block>
                        </statement>
                        <next>
                          <block type="LLL_comment" id="76">
                            <field name="NOTE">Partner_1 and Partner_2 are now "MARRIED"!</field>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="LLL_when" id="77" inline="false">
                    <field name="WORD">when</field>
                    <value name="COND">
                      <block type="LLL_math" id="78" inline="false">
                        <field name="OP">and</field>
                        <value name="A">
                          <block type="LLL_math" id="79" inline="true">
                            <field name="OP">=</field>
                            <value name="A">
                              <block type="LLL_load" id="80" inline="true">
                                <field name="PLACE">sload</field>
                                <value name="SLOT">
                                  <block type="LLL_val" id="81">
                                    <field name="VAL">STATE</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_val" id="82">
                                <field name="VAL">MARRIED</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_math" id="83" inline="false">
                            <field name="OP">or</field>
                            <value name="A">
                              <block type="LLL_math" id="84" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_transaction" id="85">
                                    <field name="PROP">sender</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_val" id="86">
                                    <field name="VAL">PARTNER_1</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_math" id="87" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_transaction" id="88">
                                    <field name="PROP">sender</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_val" id="89">
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
                      <block type="LLL_comment" id="90">
                        <field name="NOTE">Once married, the contract is a "joint" account and each partner must send in the same instruction to make a withdraw</field>
                        <next>
                          <block type="LLL_comment" id="91">
                            <field name="NOTE">A valid withdrawal instruction is an incoming transaction where: </field>
                            <next>
                              <block type="LLL_comment" id="92">
                                <field name="NOTE">data item 0 is the withdraw code, data item 1 is the destination address, and data item 2 is the amount</field>
                                <next>
                                  <block type="LLL_when" id="93" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="LLL_math" id="94" inline="true">
                                        <field name="OP">=</field>
                                        <value name="A">
                                          <block type="LLL_load" id="95" inline="true">
                                            <field name="PLACE">txdata</field>
                                            <value name="SLOT">
                                              <block type="LLL_val" id="96">
                                                <field name="VAL">0</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_val" id="97">
                                            <field name="VAL">WITHDRAW</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="THEN">
                                      <block type="LLL_if" id="98" inline="false">
                                        <value name="COND">
                                          <block type="LLL_math" id="113" inline="false">
                                            <field name="OP">and</field>
                                            <value name="A">
                                              <block type="LLL_math" id="127" inline="true">
                                                <field name="OP">!=</field>
                                                <value name="A">
                                                  <block type="LLL_load" id="128" inline="true">
                                                    <field name="PLACE">sload</field>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="129">
                                                        <field name="VAL">WITHDRAW_CREATOR</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_transaction" id="130">
                                                    <field name="PROP">sender</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_math" id="114" inline="false">
                                                <field name="OP">and</field>
                                                <value name="A">
                                                  <block type="LLL_math" id="117" inline="true">
                                                    <field name="OP">=</field>
                                                    <value name="A">
                                                      <block type="LLL_load" id="116" inline="true">
                                                        <field name="PLACE">txdata</field>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="120">
                                                            <field name="VAL">1</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="LLL_load" id="122" inline="true">
                                                        <field name="PLACE">sload</field>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="123">
                                                            <field name="VAL">WITHDRAW_TO</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_math" id="118" inline="true">
                                                    <field name="OP">=</field>
                                                    <value name="A">
                                                      <block type="LLL_load" id="119" inline="true">
                                                        <field name="PLACE">txdata</field>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="121">
                                                            <field name="VAL">2</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="LLL_load" id="125" inline="true">
                                                        <field name="PLACE">sload</field>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="126">
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
                                          <block type="LLL_comment" id="112">
                                            <field name="NOTE">If a withdraw request is already pending from the other partner and this request matches, then do it.</field>
                                            <next>
                                              <block type="LLL_mktx" id="132" inline="true">
                                                <value name="MONEY">
                                                  <block type="LLL_load" id="135" inline="true">
                                                    <field name="PLACE">sload</field>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="136">
                                                        <field name="VAL">WITHDRAW_AMOUNT</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="TO">
                                                  <block type="LLL_load" id="133" inline="true">
                                                    <field name="PLACE">sload</field>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="134">
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
                                          <block type="LLL_comment" id="138">
                                            <field name="NOTE">this is a new withdraw request; store it as pending until a matching request is received from other partner</field>
                                            <next>
                                              <block type="LLL_store" id="139" inline="true">
                                                <field name="PLACE">sstore</field>
                                                <value name="VAL">
                                                  <block type="LLL_load" id="140" inline="true">
                                                    <field name="PLACE">txdata</field>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="141">
                                                        <field name="VAL">1</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="SLOT">
                                                  <block type="LLL_val" id="142">
                                                    <field name="VAL">WITHDRAW_TO</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="LLL_store" id="143" inline="true">
                                                    <field name="PLACE">sstore</field>
                                                    <value name="VAL">
                                                      <block type="LLL_load" id="144" inline="true">
                                                        <field name="PLACE">txdata</field>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="145">
                                                            <field name="VAL">2</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="146">
                                                        <field name="VAL">WITHDRAW_AMOUNT</field>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="LLL_store" id="147" inline="true">
                                                        <field name="PLACE">sstore</field>
                                                        <value name="VAL">
                                                          <block type="LLL_transaction" id="151">
                                                            <field name="PROP">sender</field>
                                                          </block>
                                                        </value>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="150">
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
                                      <block type="LLL_comment" id="100">
                                        <field name="NOTE">Once married, the partners must both agree in order to get divorced and split the pot. I WANT HALF!</field>
                                        <next>
                                          <block type="LLL_when" id="101" inline="false">
                                            <field name="WORD">when</field>
                                            <value name="COND">
                                              <block type="LLL_math" id="102" inline="true">
                                                <field name="OP">=</field>
                                                <value name="A">
                                                  <block type="LLL_load" id="103" inline="true">
                                                    <field name="PLACE">txdata</field>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="104">
                                                        <field name="VAL">0</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_val" id="105">
                                                    <field name="VAL">DIVORCE</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="THEN">
                                              <block type="LLL_if" id="152" inline="false">
                                                <value name="COND">
                                                  <block type="LLL_math" id="166" inline="true">
                                                    <field name="OP">!=</field>
                                                    <value name="A">
                                                      <block type="LLL_load" id="167" inline="true">
                                                        <field name="PLACE">sload</field>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="168">
                                                            <field name="VAL">DIVORCE_CREATOR</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="LLL_transaction" id="161">
                                                        <field name="PROP">sender</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="THEN">
                                                  <block type="LLL_comment" id="170">
                                                    <field name="NOTE">a divorce request is already pending and 2nd party is agreeing, so split the pot</field>
                                                    <next>
                                                      <block type="LLL_store" id="174" inline="true">
                                                        <field name="PLACE">mstore</field>
                                                        <value name="VAL">
                                                          <block type="LLL_math" id="172" inline="true">
                                                            <field name="OP">sdiv</field>
                                                            <value name="A">
                                                              <block type="LLL_contract" id="171">
                                                                <field name="PROP">balance</field>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="LLL_val" id="173">
                                                                <field name="VAL">2</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="175">
                                                            <field name="VAL">HALF</field>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="LLL_mktx" id="176" inline="true">
                                                            <value name="MONEY">
                                                              <block type="LLL_load" id="178" inline="true">
                                                                <field name="PLACE">mload</field>
                                                                <value name="SLOT">
                                                                  <block type="LLL_val" id="179">
                                                                    <field name="VAL">HALF</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="TO">
                                                              <block type="LLL_load" id="180" inline="true">
                                                                <field name="PLACE">sload</field>
                                                                <value name="SLOT">
                                                                  <block type="LLL_val" id="181">
                                                                    <field name="VAL">PARTNER_1</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="LLL_mktx" id="182" inline="true">
                                                                <value name="MONEY">
                                                                  <block type="LLL_load" id="183" inline="true">
                                                                    <field name="PLACE">mload</field>
                                                                    <value name="SLOT">
                                                                      <block type="LLL_val" id="184">
                                                                        <field name="VAL">HALF</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="TO">
                                                                  <block type="LLL_load" id="185" inline="true">
                                                                    <field name="PLACE">sload</field>
                                                                    <value name="SLOT">
                                                                      <block type="LLL_val" id="186">
                                                                        <field name="VAL">PARTNER_2</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <next>
                                                                  <block type="LLL_store" id="188" inline="true">
                                                                    <field name="PLACE">sstore</field>
                                                                    <value name="VAL">
                                                                      <block type="LLL_val" id="189">
                                                                        <field name="VAL">DIVORCED</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="SLOT">
                                                                      <block type="LLL_val" id="190">
                                                                        <field name="VAL">STATE</field>
                                                                      </block>
                                                                    </value>
                                                                    <next>
                                                                      <block type="LLL_comment" id="194">
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
                                                  <block type="LLL_comment" id="187">
                                                    <field name="NOTE">make a new divorce request pending, waiting for agreement</field>
                                                    <next>
                                                      <block type="LLL_store" id="191" inline="true">
                                                        <field name="PLACE">sstore</field>
                                                        <value name="VAL">
                                                          <block type="LLL_transaction" id="192">
                                                            <field name="PROP">sender</field>
                                                          </block>
                                                        </value>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="193">
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
