function loadSample(event) {
  var sample_id = event.target.id
  document.getElementById('content-XML')
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

toothfairy: fnCommentToString(function(){/*! 
<xml>
  <block type="LLL_comment" id="757" x="60" y="84">
    <field name="NOTE">Toothfairy smart contract</field>
  </block>
  <block type="LLL_init" id="758" x="59" y="110">
    <statement name="INIT">
      <block type="LLL_store" id="759" inline="true">
        <field name="PLACE">sstore</field>
        <value name="SLOT">
          <block type="LLL_val" id="760">
            <field name="VAL">CHILD</field>
          </block>
        </value>
        <value name="VAL">
          <block type="LLL_val" id="761">
            <field name="VAL">0xb7b2e5e12992267f85455ffee1435f02760402f0</field>
          </block>
        </value>
        <next>
          <block type="LLL_store" id="762" inline="true">
            <field name="PLACE">sstore</field>
            <value name="SLOT">
              <block type="LLL_val" id="763">
                <field name="VAL">TOOTHFAIRY</field>
              </block>
            </value>
            <value name="VAL">
              <block type="LLL_val" id="764">
                <field name="VAL">0xc61185cffa955bd1a6b914a6c616b3cdd5206aa1</field>
              </block>
            </value>
          </block>
        </next>
      </block>
    </statement>
    <statement name="BODY">
      <block type="LLL_comment" id="786">
        <field name="NOTE">Child calling... with proof of lost tooth given as the contract input</field>
        <next>
          <block type="LLL_when" id="765" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LLL_compare" id="766" inline="true">
                <field name="OP">=</field>
                <value name="A">
                  <block type="LLL_contract" id="767">
                    <field name="PROP">caller</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_load" id="768" inline="true">
                    <field name="PLACE">sload</field>
                    <value name="SLOT">
                      <block type="LLL_val" id="769">
                        <field name="VAL">CHILD</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="LLL_store" id="770" inline="false">
                <field name="PLACE">sstore</field>
                <value name="SLOT">
                  <block type="LLL_val" id="771">
                    <field name="VAL">PROOF_OF_TOOTH</field>
                  </block>
                </value>
                <value name="VAL">
                  <block type="LLL_load" id="772" inline="true">
                    <field name="PLACE">_input_load_slots</field>
                    <value name="SLOT">
                      <block type="LLL_val" id="773">
                        <field name="VAL">0</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </statement>
            <next>
              <block type="LLL_comment" id="787">
                <field name="NOTE">Toothfairy calling... to release contract funds to child</field>
                <next>
                  <block type="LLL_if" id="774" inline="false">
                    <value name="COND">
                      <block type="LLL_compare" id="775" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="LLL_contract" id="776">
                            <field name="PROP">caller</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_load" id="777" inline="true">
                            <field name="PLACE">sload</field>
                            <value name="SLOT">
                              <block type="LLL_val" id="778">
                                <field name="VAL">TOOTHFAIRY</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="THEN">
                      <block type="LLL_spend" id="779" inline="true">
                        <value name="MONEY">
                          <block type="LLL_contract" id="780">
                            <field name="PROP">balance</field>
                          </block>
                        </value>
                        <value name="TO">
                          <block type="LLL_load" id="781" inline="true">
                            <field name="PLACE">sload</field>
                            <value name="SLOT">
                              <block type="LLL_val" id="782">
                                <field name="VAL">CHILD</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </statement>
                    <statement name="ELSE">
                      <block type="LLL_comment" id="788">
                        <field name="NOTE">Anyone else calling just gets their funds back</field>
                        <next>
                          <block type="LLL_spend" id="783" inline="true">
                            <value name="MONEY">
                              <block type="LLL_tx" id="784">
                                <field name="PROP">callvalue</field>
                              </block>
                            </value>
                            <value name="TO">
                              <block type="LLL_contract" id="785">
                                <field name="PROP">caller</field>
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
    </statement>
  </block>
</xml>*/
}),


insurance: fnCommentToString(function(){/*! 
<xml>
  <block type="LLL_comment" id="284" x="14" y="6">
    <field name="NOTE">Insurance Policy</field>
  </block>
  <block type="LLL_init" id="285" x="14" y="32">
    <statement name="INIT">
      <block type="LLL_store" id="286" inline="true">
        <field name="PLACE">sstore</field>
        <value name="SLOT">
          <block type="LLL_val" id="287">
            <field name="VAL">CUSTOMER</field>
          </block>
        </value>
        <value name="VAL">
          <block type="LLL_val" id="288">
            <field name="VAL">0xb7b2e5e12992267f85455ffee1435f02760402f0</field>
          </block>
        </value>
        <next>
          <block type="LLL_store" id="289" inline="true">
            <field name="PLACE">sstore</field>
            <value name="SLOT">
              <block type="LLL_val" id="290">
                <field name="VAL">CLAIM_ADJUSTER</field>
              </block>
            </value>
            <value name="VAL">
              <block type="LLL_val" id="291">
                <field name="VAL">0xc61185cffa955bd1a6b914a6c616b3cdd5206aa1</field>
              </block>
            </value>
            <next>
              <block type="LLL_store" id="292" inline="true">
                <field name="PLACE">sstore</field>
                <value name="SLOT">
                  <block type="LLL_val" id="293">
                    <field name="VAL">MONTHLY_PREMIUM</field>
                  </block>
                </value>
                <value name="VAL">
                  <block type="LLL_currency" id="294" inline="true">
                    <field name="DENOM">ether</field>
                    <value name="AMT">
                      <block type="LLL_val" id="295">
                        <field name="VAL">100</field>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="LLL_comment" id="296">
                    <field name="NOTE">Seconds in a month: 2628000, Seconds since 1970 on 1/1/2014: 1387584000</field>
                    <next>
                      <block type="LLL_store" id="297" inline="true">
                        <field name="PLACE">sstore</field>
                        <value name="SLOT">
                          <block type="LLL_val" id="298">
                            <field name="VAL">START_DATE</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="LLL_val" id="299">
                            <field name="VAL">1387584000</field>
                          </block>
                        </value>
                        <next>
                          <block type="LLL_store" id="300" inline="true">
                            <field name="PLACE">sstore</field>
                            <value name="SLOT">
                              <block type="LLL_val" id="301">
                                <field name="VAL">ARBITRATOR</field>
                              </block>
                            </value>
                            <value name="VAL">
                              <block type="LLL_val" id="302">
                                <field name="VAL">0x38155ef3698a43b24b054d816a8a5f79fc148623</field>
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
    <statement name="BODY">
      <block type="LLL_comment" id="303">
        <field name="NOTE">Customer calling... with claim evidence provided as the contract input</field>
        <next>
          <block type="LLL_when" id="304" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LLL_compare" id="305" inline="true">
                <field name="OP">=</field>
                <value name="A">
                  <block type="LLL_contract" id="306">
                    <field name="PROP">caller</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_load" id="307" inline="true">
                    <field name="PLACE">sload</field>
                    <value name="SLOT">
                      <block type="LLL_val" id="308">
                        <field name="VAL">CUSTOMER</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="LLL_comment" id="309">
                <field name="NOTE">Increment customer's balance with the amount he's sending in</field>
                <next>
                  <block type="LLL_store" id="310" inline="true">
                    <field name="PLACE">sstore</field>
                    <value name="SLOT">
                      <block type="LLL_val" id="311">
                        <field name="VAL">CUSTOMER_BALANCE</field>
                      </block>
                    </value>
                    <value name="VAL">
                      <block type="LLL_math" id="312" inline="true">
                        <field name="OP">+</field>
                        <value name="A">
                          <block type="LLL_val" id="313">
                            <field name="VAL">CUSTOMER_BALANCE</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_tx" id="314">
                            <field name="PROP">callvalue</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="LLL_store" id="315" inline="true">
                        <field name="PLACE">sstore</field>
                        <value name="SLOT">
                          <block type="LLL_val" id="316">
                            <field name="VAL">PROOF_OF_GOOF</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="LLL_load" id="317" inline="true">
                            <field name="PLACE">_input_load_slots</field>
                            <value name="SLOT">
                              <block type="LLL_val" id="318">
                                <field name="VAL">0</field>
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
            <next>
              <block type="LLL_comment" id="319">
                <field name="NOTE">Adjuster calling... with the payout amount as the contract input</field>
                <next>
                  <block type="LLL_comment" id="320">
                    <field name="NOTE">(Or it's the arbitrator calling... in the event there was a dispute)</field>
                    <next>
                      <block type="LLL_when" id="357" inline="false">
                        <field name="WORD">when</field>
                        <value name="COND">
                          <block type="LLL_logic" id="322" inline="false">
                            <field name="OP">or</field>
                            <value name="A">
                              <block type="LLL_compare" id="323" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_contract" id="324">
                                    <field name="PROP">caller</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_load" id="325" inline="true">
                                    <field name="PLACE">sload</field>
                                    <value name="SLOT">
                                      <block type="LLL_val" id="326">
                                        <field name="VAL">ARBITRATOR</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_compare" id="327" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_contract" id="328">
                                    <field name="PROP">caller</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_load" id="329" inline="true">
                                    <field name="PLACE">sload</field>
                                    <value name="SLOT">
                                      <block type="LLL_val" id="330">
                                        <field name="VAL">CLAIM_ADJUSTER</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="THEN">
                          <block type="LLL_comment" id="331">
                            <field name="NOTE">label the calculation for elapsed policy months</field>
                            <next>
                              <block type="LLL_mstore" id="332" inline="true">
                                <field name="SLOT">POLICY_MONTHS</field>
                                <value name="VAL">
                                  <block type="LLL_math" id="333" inline="true">
                                    <field name="OP">div</field>
                                    <value name="A">
                                      <block type="LLL_math" id="334" inline="true">
                                        <field name="OP">-</field>
                                        <value name="A">
                                          <block type="LLL_blockinfo" id="335">
                                            <field name="PROP">timestamp</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_load" id="336" inline="true">
                                            <field name="PLACE">sload</field>
                                            <value name="SLOT">
                                              <block type="LLL_val" id="337">
                                                <field name="VAL">START_DATE</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="LLL_val" id="338">
                                        <field name="VAL">2628000</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <next>
                                  <block type="LLL_comment" id="339">
                                    <field name="NOTE">when the received premiums have equaled the required premium, the policy is paid up, so pay claim</field>
                                    <next>
                                      <block type="LLL_when" id="340" inline="false">
                                        <field name="WORD">when</field>
                                        <value name="COND">
                                          <block type="LLL_compare" id="341" inline="false">
                                            <field name="OP">&gt;=</field>
                                            <value name="A">
                                              <block type="LLL_math" id="342" inline="true">
                                                <field name="OP">div</field>
                                                <value name="A">
                                                  <block type="LLL_load" id="343" inline="true">
                                                    <field name="PLACE">sload</field>
                                                    <value name="SLOT">
                                                      <block type="LLL_val" id="344">
                                                        <field name="VAL">CUSTOMER_BALANCE</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_mval" id="345">
                                                    <field name="VAL">POLICY_MONTHS</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_load" id="346" inline="true">
                                                <field name="PLACE">sload</field>
                                                <value name="SLOT">
                                                  <block type="LLL_val" id="347">
                                                    <field name="VAL">MONTHLY_PREMIUM</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="THEN">
                                          <block type="LLL_spend" id="348" inline="true">
                                            <value name="MONEY">
                                              <block type="LLL_load" id="349" inline="true">
                                                <field name="PLACE">_input_load_slots</field>
                                                <value name="SLOT">
                                                  <block type="LLL_val" id="350">
                                                    <field name="VAL">0</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="TO">
                                              <block type="LLL_load" id="351" inline="true">
                                                <field name="PLACE">sload</field>
                                                <value name="SLOT">
                                                  <block type="LLL_val" id="352">
                                                    <field name="VAL">CUSTOMER</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </statement>
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
    </statement>
  </block>
</xml>*/}),

vote_registry: fnCommentToString(function(){/*! 
<xml>
  <block type="LLL_comment" id="315" x="40" y="36">
    <field name="NOTE">A basic vote registration contract</field>
  </block>
  <block type="LLL_init" id="316" x="40" y="61">
    <statement name="INIT">
      <block type="LLL_comment" id="317">
        <field name="NOTE">Designate the "admin", who will receive any collected funds at the end</field>
        <next>
          <block type="LLL_comment" id="318">
            <field name="NOTE">(Donations are optional and don't affect the voting but we like a way to get received funds out.)</field>
            <next>
              <block type="LLL_sstore" id="319" inline="true">
                <field name="SLOT">ADMIN</field>
                <value name="VAL">
                  <block type="LLL_contract" id="320">
                    <field name="PROP">caller</field>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
    <statement name="BODY">
      <block type="LLL_comment" id="321">
        <field name="NOTE">The user supplies what they're voting for as the contract input (e.g. "COKE" or "PEPSI") </field>
        <next>
          <block type="LLL_mstore" id="323" inline="true">
            <field name="SLOT">VOTED_ITEM</field>
            <value name="VAL">
              <block type="LLL_contract" id="324">
                <field name="PROP">input</field>
              </block>
            </value>
            <next>
              <block type="LLL_comment" id="348">
                <field name="NOTE">Make sure they haven't voted already first</field>
                <next>
                  <block type="LLL_when" id="347" inline="false">
                    <field name="WORD">when</field>
                    <value name="COND">
                      <block type="LLL_prefixop" id="382" inline="true">
                        <field name="OP">not</field>
                        <value name="A">
                          <block type="LLL_load" id="349" inline="true">
                            <field name="PLACE">sload</field>
                            <value name="SLOT">
                              <block type="LLL_contract" id="384">
                                <field name="PROP">caller</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="THEN">
                      <block type="LLL_comment" id="322">
                        <field name="NOTE">The contract records a vote by incrementing the number of votes associated with the provided input</field>
                        <next>
                          <block type="LLL_store" id="325" inline="false">
                            <field name="PLACE">sstore</field>
                            <value name="SLOT">
                              <block type="LLL_mval" id="326">
                                <field name="VAL">VOTED_ITEM</field>
                              </block>
                            </value>
                            <value name="VAL">
                              <block type="LLL_math" id="327" inline="true">
                                <field name="OP">+</field>
                                <value name="A">
                                  <block type="LLL_load" id="328" inline="true">
                                    <field name="PLACE">sload</field>
                                    <value name="SLOT">
                                      <block type="LLL_mval" id="329">
                                        <field name="VAL">VOTED_ITEM</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_val" id="330">
                                    <field name="VAL">1</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <next>
                              <block type="LLL_comment" id="331">
                                <field name="NOTE">It also records the address of the caller and what they voted for, so this is public record</field>
                                <next>
                                  <block type="LLL_store" id="333" inline="true">
                                    <field name="PLACE">sstore</field>
                                    <value name="SLOT">
                                      <block type="LLL_contract" id="334">
                                        <field name="PROP">caller</field>
                                      </block>
                                    </value>
                                    <value name="VAL">
                                      <block type="LLL_mval" id="335">
                                        <field name="VAL">VOTED_ITEM</field>
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
                    <next>
                      <block type="LLL_comment" id="336">
                        <field name="NOTE">Release all funds to the admin when they call in without a vote</field>
                        <next>
                          <block type="LLL_when" id="337" inline="false">
                            <field name="WORD">when</field>
                            <value name="COND">
                              <block type="LLL_logic" id="338" inline="false">
                                <field name="OP">and</field>
                                <value name="A">
                                  <block type="LLL_compare" id="339" inline="true">
                                    <field name="OP">=</field>
                                    <value name="A">
                                      <block type="LLL_contract" id="340">
                                        <field name="PROP">caller</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="LLL_sval" id="341">
                                        <field name="VAL">ADMIN</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_prefixop" id="342" inline="true">
                                    <field name="OP">not</field>
                                    <value name="A">
                                      <block type="LLL_mval" id="343">
                                        <field name="VAL">VOTED_ITEM</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="THEN">
                              <block type="LLL_spend" id="344" inline="true">
                                <value name="MONEY">
                                  <block type="LLL_contract" id="345">
                                    <field name="PROP">balance</field>
                                  </block>
                                </value>
                                <value name="TO">
                                  <block type="LLL_sval" id="346">
                                    <field name="VAL">ADMIN</field>
                                  </block>
                                </value>
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
</xml>
*/}),

swear_jar: fnCommentToString(function(){/*! 
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="LLL_init" id="120" x="27" y="10">
    <statement name="INIT">
      <block type="LLL_comment" id="121">
        <field name="NOTE">"Swear Jar" - An informal method among groups to self-discourage bad behavior</field>
        <next>
          <block type="LLL_comment" id="122">
            <field name="NOTE">(swearing, being late for meetings, smoking, missing a workout, etc.)</field>
            <next>
              <block type="LLL_comment" id="123">
                <field name="NOTE">Members voluntarily pay in for each infraction &amp; the best-behaved gets the pot each month</field>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
    <statement name="BODY">
      <block type="LLL_mstore" id="124" inline="true">
        <field name="SLOT">CALLER_TOTAL</field>
        <value name="VAL">
          <block type="LLL_load" id="125" inline="true">
            <field name="PLACE">sload</field>
            <value name="SLOT">
              <block type="LLL_contract" id="126">
                <field name="PROP">caller</field>
              </block>
            </value>
          </block>
        </value>
        <next>
          <block type="LLL_comment" id="127">
            <field name="NOTE">First add this caller to the participant list if they are new and give them a minimal total</field>
            <next>
              <block type="LLL_when" id="128" inline="false">
                <field name="WORD">when</field>
                <value name="COND">
                  <block type="LLL_compare" id="129" inline="true">
                    <field name="OP">=</field>
                    <value name="A">
                      <block type="LLL_mval" id="130">
                        <field name="VAL">CALLER_TOTAL</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_val" id="131">
                        <field name="VAL">0</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="THEN">
                  <block type="LLL_store" id="132" inline="true">
                    <field name="PLACE">sstore</field>
                    <value name="SLOT">
                      <block type="LLL_sval" id="133">
                        <field name="VAL">NEXT_MEMBER_SLOT</field>
                      </block>
                    </value>
                    <value name="VAL">
                      <block type="LLL_contract" id="134">
                        <field name="PROP">caller</field>
                      </block>
                    </value>
                    <next>
                      <block type="LLL_sstore" id="135" inline="true">
                        <field name="SLOT">NEXT_MEMBER_SLOT</field>
                        <value name="VAL">
                          <block type="LLL_math" id="136" inline="true">
                            <field name="OP">+</field>
                            <value name="A">
                              <block type="LLL_sval" id="137">
                                <field name="VAL">NEXT_MEMBER_SLOT</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_val" id="138">
                                <field name="VAL">1</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="LLL_store" id="139" inline="true">
                            <field name="PLACE">sstore</field>
                            <value name="SLOT">
                              <block type="LLL_contract" id="140">
                                <field name="PROP">caller</field>
                              </block>
                            </value>
                            <value name="VAL">
                              <block type="LLL_currency" id="141" inline="true">
                                <field name="DENOM">wei</field>
                                <value name="AMT">
                                  <block type="LLL_val" id="142">
                                    <field name="VAL">1</field>
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
                <next>
                  <block type="LLL_comment" id="143">
                    <field name="NOTE">Next update their infraction total for the world to see (social pressure)</field>
                    <next>
                      <block type="LLL_store" id="144" inline="true">
                        <field name="PLACE">sstore</field>
                        <value name="SLOT">
                          <block type="LLL_contract" id="145">
                            <field name="PROP">caller</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="LLL_math" id="146" inline="true">
                            <field name="OP">+</field>
                            <value name="A">
                              <block type="LLL_mval" id="147">
                                <field name="VAL">CALLER_TOTAL</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_tx" id="148">
                                <field name="PROP">callvalue</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="LLL_comment" id="149">
                            <field name="NOTE">If it's a month (2592000 seconds) since the last time, find the best-behaved member to pay off </field>
                            <next>
                              <block type="LLL_when" id="150" inline="false">
                                <field name="WORD">when</field>
                                <value name="COND">
                                  <block type="LLL_compare" id="151" inline="true">
                                    <field name="OP">&lt;</field>
                                    <value name="A">
                                      <block type="LLL_sval" id="152">
                                        <field name="VAL">LAST_EMPTY_TIME</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="LLL_math" id="153" inline="true">
                                        <field name="OP">-</field>
                                        <value name="A">
                                          <block type="LLL_blockinfo" id="154">
                                            <field name="PROP">timestamp</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_val" id="155">
                                            <field name="VAL">2592000</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="THEN">
                                  <block type="LLL_sstore" id="156" inline="true">
                                    <field name="SLOT">LAST_EMPTY_TIME</field>
                                    <value name="VAL">
                                      <block type="LLL_blockinfo" id="157">
                                        <field name="PROP">timestamp</field>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="LLL_comment" id="158">
                                        <field name="NOTE">Initialize the "best total" to something terribly high. (We'll see why later)</field>
                                        <next>
                                          <block type="LLL_mstore" id="159" inline="true">
                                            <field name="SLOT">BEST_TOTAL</field>
                                            <value name="VAL">
                                              <block type="LLL_currency" id="160" inline="true">
                                                <field name="DENOM">ether</field>
                                                <value name="AMT">
                                                  <block type="LLL_val" id="161">
                                                    <field name="VAL">99999999999</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="LLL_comment" id="162">
                                                <field name="NOTE">Loop through members looking for the best behaved (the one with the lowest total)</field>
                                                <next>
                                                  <block type="LLL_whileloop" id="163" inline="false">
                                                    <field name="WORD">WHILE</field>
                                                    <value name="COND">
                                                      <block type="LLL_compare" id="164" inline="true">
                                                        <field name="OP">&lt;</field>
                                                        <value name="A">
                                                          <block type="LLL_mval" id="165">
                                                            <field name="VAL">i</field>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="LLL_sval" id="166">
                                                            <field name="VAL">NEXT_MEMBER_SLOT</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO">
                                                      <block type="LLL_mstore" id="167" inline="true">
                                                        <field name="SLOT">ONE_MEMBER</field>
                                                        <value name="VAL">
                                                          <block type="LLL_load" id="168" inline="true">
                                                            <field name="PLACE">sload</field>
                                                            <value name="SLOT">
                                                              <block type="LLL_mval" id="169">
                                                                <field name="VAL">i</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="LLL_mstore" id="170" inline="true">
                                                            <field name="SLOT">ONE_MEMBER_TOTAL</field>
                                                            <value name="VAL">
                                                              <block type="LLL_load" id="171" inline="true">
                                                                <field name="PLACE">sload</field>
                                                                <value name="SLOT">
                                                                  <block type="LLL_mval" id="172">
                                                                    <field name="VAL">ONE_MEMBER</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="LLL_when" id="173" inline="false">
                                                                <field name="WORD">when</field>
                                                                <value name="COND">
                                                                  <block type="LLL_compare" id="174" inline="true">
                                                                    <field name="OP">&lt;</field>
                                                                    <value name="A">
                                                                      <block type="LLL_mval" id="175">
                                                                        <field name="VAL">ONE_MEMBER_TOTAL</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="LLL_mval" id="176">
                                                                        <field name="VAL">BEST_TOTAL</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <statement name="THEN">
                                                                  <block type="LLL_comment" id="177">
                                                                    <field name="NOTE">Label the best one so far. (Early registration breaks a tie)</field>
                                                                    <next>
                                                                      <block type="LLL_mstore" id="178" inline="true">
                                                                        <field name="SLOT">BEST_MEMBER</field>
                                                                        <value name="VAL">
                                                                          <block type="LLL_mval" id="179">
                                                                            <field name="VAL">ONE_MEMBER</field>
                                                                          </block>
                                                                        </value>
                                                                        <next>
                                                                          <block type="LLL_mstore" id="180" inline="true">
                                                                            <field name="SLOT">BEST_TOTAL</field>
                                                                            <value name="VAL">
                                                                              <block type="LLL_mval" id="181">
                                                                                <field name="VAL">ONE_MEMBER_TOTAL</field>
                                                                              </block>
                                                                            </value>
                                                                            <next>
                                                                              <block type="LLL_comment" id="182">
                                                                                <field name="NOTE">Reset each score to the minimum for the coming  month</field>
                                                                                <next>
                                                                                  <block type="LLL_store" id="183" inline="true">
                                                                                    <field name="PLACE">sstore</field>
                                                                                    <value name="SLOT">
                                                                                      <block type="LLL_mval" id="184">
                                                                                        <field name="VAL">ONE_MEMBER</field>
                                                                                      </block>
                                                                                    </value>
                                                                                    <value name="VAL">
                                                                                      <block type="LLL_currency" id="185" inline="true">
                                                                                        <field name="DENOM">wei</field>
                                                                                        <value name="AMT">
                                                                                          <block type="LLL_val" id="186">
                                                                                            <field name="VAL">1</field>
                                                                                          </block>
                                                                                        </value>
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
                                                                </statement>
                                                                <next>
                                                                  <block type="LLL_mstore" id="187" inline="true">
                                                                    <field name="SLOT">i</field>
                                                                    <value name="VAL">
                                                                      <block type="LLL_math" id="188" inline="true">
                                                                        <field name="OP">+</field>
                                                                        <value name="A">
                                                                          <block type="LLL_mval" id="189">
                                                                            <field name="VAL">i</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="B">
                                                                          <block type="LLL_val" id="190">
                                                                            <field name="VAL">1</field>
                                                                          </block>
                                                                        </value>
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
                                                    <next>
                                                      <block type="LLL_spend" id="191" inline="true">
                                                        <value name="MONEY">
                                                          <block type="LLL_mval" id="192">
                                                            <field name="VAL">BEST_MEMBER</field>
                                                          </block>
                                                        </value>
                                                        <value name="TO">
                                                          <block type="LLL_contract" id="193">
                                                            <field name="PROP">balance</field>
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
</xml>
*/})

}