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

data_feed: fnCommentToString(function(){/*! 
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="LLL_comment" id="321" x="26" y="158">
    <field name="NOTE">A contract for key-value publishing (ie. a datafeed)</field>
  </block>
  <block type="LLL_init" id="322" x="26" y="183">
    <statement name="INIT">
      <block type="LLL_comment" id="323">
        <field name="NOTE">remember the creator</field>
        <next>
          <block type="LLL_store" id="351" inline="true">
            <field name="PLACE">sstore</field>
            <value name="VAL">
              <block type="LLL_tx" id="325">
                <field name="PROP">caller</field>
              </block>
            </value>
            <value name="SLOT">
              <block type="LLL_val" id="352">
                <field name="VAL">69</field>
              </block>
            </value>
          </block>
        </next>
      </block>
    </statement>
    <statement name="BODY">
      <block type="LLL_comment" id="326">
        <field name="NOTE">when the creator calls back with data...</field>
        <next>
          <block type="LLL_when" id="327" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LLL_compare" id="328" inline="true">
                <field name="OP">=</field>
                <value name="A">
                  <block type="LLL_tx" id="329">
                    <field name="PROP">caller</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_load" id="350" inline="true">
                    <field name="PLACE">sload</field>
                    <value name="SLOT">
                      <block type="LLL_val" id="353">
                        <field name="VAL">69</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="LLL_comment" id="331">
                <field name="NOTE">from the contract input, take two 32-byte chunks at a time  </field>
                <next>
                  <block type="LLL_forloop" id="332" inline="false">
                    <statement name="FIRST">
                      <block type="LLL_comment" id="333" disabled="true">
                        <field name="NOTE">nothing</field>
                      </block>
                    </statement>
                    <value name="COND">
                      <block type="LLL_compare" id="334" inline="true">
                        <field name="OP">&lt;</field>
                        <value name="A">
                          <block type="LLL_mval" id="335">
                            <field name="VAL">i</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_tx" id="336">
                            <field name="PROP">_input_byte_count</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="LOOP">
                      <block type="LLL_comment" id="337">
                        <field name="NOTE">store the "value" in the storage slot given by the "key"</field>
                        <next>
                          <block type="LLL_comment" id="338">
                            <field name="NOTE">where the key is given by the 1st chunk and the value by the 2nd chunk</field>
                            <next>
                              <block type="LLL_store" id="339" inline="false">
                                <field name="PLACE">sstore</field>
                                <value name="VAL">
                                  <block type="LLL_load" id="340" inline="true">
                                    <field name="PLACE">_input_load_bytes</field>
                                    <value name="SLOT">
                                      <block type="LLL_math" id="341" inline="true">
                                        <field name="OP">+</field>
                                        <value name="A">
                                          <block type="LLL_mval" id="342">
                                            <field name="VAL">i</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_val" id="343">
                                            <field name="VAL">32</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="SLOT">
                                  <block type="LLL_load" id="344" inline="true">
                                    <field name="PLACE">_input_load_bytes</field>
                                    <value name="SLOT">
                                      <block type="LLL_mval" id="345">
                                        <field name="VAL">i</field>
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
                    <statement name="AFTER_EACH">
                      <block type="LLL_mstore" id="346" inline="true">
                        <field name="SLOT">i</field>
                        <value name="VAL">
                          <block type="LLL_math" id="347" inline="true">
                            <field name="OP">+</field>
                            <value name="A">
                              <block type="LLL_mval" id="348">
                                <field name="VAL">i</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_val" id="349">
                                <field name="VAL">64</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </statement>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>
*/}),

name_registrar: fnCommentToString(function(){/*!
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="LLL_comment" id="47" x="18" y="12">
    <field name="NOTE">Name Registrar</field>
  </block>
  <block type="LLL_init" id="48" x="18" y="37">
    <statement name="INIT">
      <block type="LLL_store" id="49" inline="true">
        <field name="PLACE">sstore</field>
        <value name="SLOT">
          <block type="LLL_contract" id="51">
            <field name="PROP">address</field>
          </block>
        </value>
        <value name="VAL">
          <block type="LLL_val" id="50">
            <field name="VAL">"NameReg"</field>
          </block>
        </value>
        <next>
          <block type="LLL_store" id="52" inline="true">
            <field name="PLACE">sstore</field>
            <value name="SLOT">
              <block type="LLL_val" id="54">
                <field name="VAL">"NameReg"</field>
              </block>
            </value>
            <value name="VAL">
              <block type="LLL_contract" id="53">
                <field name="PROP">address</field>
              </block>
            </value>
            <next>
              <block type="LLL_store" id="55" inline="true">
                <field name="PLACE">sstore</field>
                <value name="SLOT">
                  <block type="LLL_val" id="57">
                    <field name="VAL">69</field>
                  </block>
                </value>
                <value name="VAL">
                  <block type="LLL_contract" id="56">
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
      <block type="LLL_comment" id="58">
        <field name="NOTE">If there's at least one argument</field>
        <next>
          <block type="LLL_if" id="59" inline="false">
            <value name="COND">
              <block type="LLL_tx" id="60">
                <field name="PROP">_input_byte_count</field>
              </block>
            </value>
            <statement name="THEN">
              <block type="LLL_comment" id="61">
                <field name="NOTE">Stop if the first arg (name) has already been registered.</field>
                <next>
                  <block type="LLL_when" id="62" inline="false">
                    <field name="WORD">when</field>
                    <value name="COND">
                      <block type="LLL_load" id="63" inline="true">
                        <field name="PLACE">sload</field>
                        <value name="SLOT">
                          <block type="LLL_load" id="64" inline="true">
                            <field name="PLACE">_input_load_slots</field>
                            <value name="SLOT">
                              <block type="LLL_val" id="65">
                                <field name="VAL">0</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="THEN">
                      <block type="LLL_stop" id="66"></block>
                    </statement>
                    <next>
                      <block type="LLL_comment" id="67">
                        <field name="NOTE">Zero out any existing name registered to this sender</field>
                        <next>
                          <block type="LLL_when" id="68" inline="false">
                            <field name="WORD">when</field>
                            <value name="COND">
                              <block type="LLL_load" id="69" inline="true">
                                <field name="PLACE">sload</field>
                                <value name="SLOT">
                                  <block type="LLL_contract" id="70">
                                    <field name="PROP">caller</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="THEN">
                              <block type="LLL_store" id="71" inline="true">
                                <field name="PLACE">sstore</field>
                                <value name="SLOT">
                                  <block type="LLL_load" id="73" inline="true">
                                    <field name="PLACE">sload</field>
                                    <value name="SLOT">
                                      <block type="LLL_contract" id="74">
                                        <field name="PROP">caller</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="VAL">
                                  <block type="LLL_val" id="72">
                                    <field name="VAL">0</field>
                                  </block>
                                </value>
                              </block>
                            </statement>
                            <next>
                              <block type="LLL_comment" id="75">
                                <field name="NOTE">Store sender at name, and name at sender</field>
                                <next>
                                  <block type="LLL_store" id="76" inline="true">
                                    <field name="PLACE">sstore</field>
                                    <value name="SLOT">
                                      <block type="LLL_load" id="78" inline="true">
                                        <field name="PLACE">_input_load_slots</field>
                                        <value name="SLOT">
                                          <block type="LLL_val" id="79">
                                            <field name="VAL">0</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="VAL">
                                      <block type="LLL_contract" id="77">
                                        <field name="PROP">caller</field>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="LLL_store" id="80" inline="true">
                                        <field name="PLACE">sstore</field>
                                        <value name="SLOT">
                                          <block type="LLL_contract" id="83">
                                            <field name="PROP">caller</field>
                                          </block>
                                        </value>
                                        <value name="VAL">
                                          <block type="LLL_load" id="81" inline="true">
                                            <field name="PLACE">_input_load_slots</field>
                                            <value name="SLOT">
                                              <block type="LLL_val" id="82">
                                                <field name="VAL">0</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="LLL_stop" id="84"></block>
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
            </statement>
            <statement name="ELSE">
              <block type="LLL_comment" id="85">
                <field name="NOTE">No arguments - either deregister or suicide (if it's from owner's adderss).</field>
                <next>
                  <block type="LLL_when" id="86" inline="false">
                    <field name="WORD">when</field>
                    <value name="COND">
                      <block type="LLL_compare" id="87" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="LLL_contract" id="88">
                            <field name="PROP">caller</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_load" id="89" inline="true">
                            <field name="PLACE">sload</field>
                            <value name="SLOT">
                              <block type="LLL_val" id="90">
                                <field name="VAL">69</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="THEN">
                      <block type="LLL_comment" id="91">
                        <field name="NOTE">Suicide if it's from owner's address.</field>
                        <next>
                          <block type="LLL_suicide" id="92" inline="true">
                            <value name="TO">
                              <block type="LLL_contract" id="93">
                                <field name="PROP">caller</field>
                              </block>
                            </value>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <next>
                      <block type="LLL_comment" id="94">
                        <field name="NOTE">Otherwise, just deregister any name sender has, if they are registered.</field>
                        <next>
                          <block type="LLL_when" id="95" inline="false">
                            <field name="WORD">when</field>
                            <value name="COND">
                              <block type="LLL_load" id="96" inline="true">
                                <field name="PLACE">sload</field>
                                <value name="SLOT">
                                  <block type="LLL_contract" id="97">
                                    <field name="PROP">caller</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="THEN">
                              <block type="LLL_store" id="98" inline="true">
                                <field name="PLACE">sstore</field>
                                <value name="SLOT">
                                  <block type="LLL_load" id="100" inline="true">
                                    <field name="PLACE">sload</field>
                                    <value name="SLOT">
                                      <block type="LLL_contract" id="101">
                                        <field name="PROP">caller</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="VAL">
                                  <block type="LLL_val" id="99">
                                    <field name="VAL">0</field>
                                  </block>
                                </value>
                                <next>
                                  <block type="LLL_store" id="102" inline="true">
                                    <field name="PLACE">sstore</field>
                                    <value name="SLOT">
                                      <block type="LLL_contract" id="104">
                                        <field name="PROP">caller</field>
                                      </block>
                                    </value>
                                    <value name="VAL">
                                      <block type="LLL_val" id="103">
                                        <field name="VAL">0</field>
                                      </block>
                                    </value>
                                  </block>
                                </next>
                              </block>
                            </statement>
                            <next>
                              <block type="LLL_stop" id="105"></block>
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
    </statement>
  </block>
</xml>
*/}),

bank: fnCommentToString(function(){/*!
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="LLL_comment" id="208" x="33" y="18">
    <field name="NOTE">A very simple bank</field>
  </block>
  <block type="LLL_init" id="209" x="34" y="44">
    <statement name="INIT">
      <block type="LLL_comment" id="210">
        <field name="NOTE">Register "Bank" with the name registration service</field>
        <next>
          <block type="LLL_store" id="211" inline="true">
            <field name="PLACE">mstore</field>
            <value name="SLOT">
              <block type="LLL_val" id="212">
                <field name="VAL">0</field>
              </block>
            </value>
            <value name="VAL">
              <block type="LLL_val" id="213">
                <field name="VAL">"Bank"</field>
              </block>
            </value>
            <next>
              <block type="LLL_call" id="214" inline="false">
                <value name="ADDRESS">
                  <block type="LLL_val" id="215">
                    <field name="VAL">0x929b11b8eeea00966e873a241d4b67f7540d1f38</field>
                  </block>
                </value>
                <value name="MONEY">
                  <block type="LLL_val" id="216">
                    <field name="VAL">0</field>
                  </block>
                </value>
                <value name="GAS">
                  <block type="LLL_val" id="217">
                    <field name="VAL">0</field>
                  </block>
                </value>
                <value name="SEND_DATA_START">
                  <block type="LLL_val" id="218">
                    <field name="VAL">0</field>
                  </block>
                </value>
                <value name="SEND_DATA_BYTES">
                  <block type="LLL_val" id="219">
                    <field name="VAL">4</field>
                  </block>
                </value>
                <value name="REPLY_DATA_START">
                  <block type="LLL_val" id="220">
                    <field name="VAL">0</field>
                  </block>
                </value>
                <value name="REPLY_DATA_BYTES">
                  <block type="LLL_val" id="221">
                    <field name="VAL">0</field>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
    <statement name="BODY">
      <block type="LLL_comment" id="222">
        <field name="NOTE">Either withdraw or deposit</field>
        <next>
          <block type="LLL_if" id="223" inline="false">
            <value name="COND">
              <block type="LLL_compare" id="224" inline="false">
                <field name="OP">&gt;=</field>
                <value name="A">
                  <block type="LLL_load" id="225" inline="true">
                    <field name="PLACE">sload</field>
                    <value name="SLOT">
                      <block type="LLL_contract" id="226">
                        <field name="PROP">caller</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_load" id="227" inline="true">
                    <field name="PLACE">_input_load_slots</field>
                    <value name="SLOT">
                      <block type="LLL_val" id="228">
                        <field name="VAL">0</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="LLL_comment" id="229">
                <field name="NOTE">Withdraw when the first input is given and doesn't exceed the account balance</field>
                <next>
                  <block type="LLL_comment" id="241">
                    <field name="NOTE">Record the new (post-withdrawal) account balance</field>
                    <next>
                      <block type="LLL_store" id="230" inline="false">
                        <field name="PLACE">sstore</field>
                        <value name="SLOT">
                          <block type="LLL_contract" id="231">
                            <field name="PROP">caller</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="LLL_math" id="232" inline="false">
                            <field name="OP">-</field>
                            <value name="A">
                              <block type="LLL_load" id="233" inline="true">
                                <field name="PLACE">sload</field>
                                <value name="SLOT">
                                  <block type="LLL_contract" id="234">
                                    <field name="PROP">caller</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_load" id="235" inline="true">
                                <field name="PLACE">_input_load_slots</field>
                                <value name="SLOT">
                                  <block type="LLL_val" id="236">
                                    <field name="VAL">0</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="LLL_comment" id="242">
                            <field name="NOTE">Send the withdrawal to the second input, if given, or else the caller</field>
                            <next>
                              <block type="LLL_if" id="237" inline="false">
                                <value name="COND">
                                  <block type="LLL_compare" id="239" inline="true">
                                    <field name="OP">&lt;=</field>
                                    <value name="A">
                                      <block type="LLL_tx" id="238">
                                        <field name="PROP">_input_byte_count</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="LLL_val" id="240">
                                        <field name="VAL">32</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="THEN">
                                  <block type="LLL_spend" id="243" inline="true">
                                    <value name="MONEY">
                                      <block type="LLL_load" id="245" inline="true">
                                        <field name="PLACE">_input_load_slots</field>
                                        <value name="SLOT">
                                          <block type="LLL_val" id="246">
                                            <field name="VAL">0</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="TO">
                                      <block type="LLL_contract" id="244">
                                        <field name="PROP">caller</field>
                                      </block>
                                    </value>
                                  </block>
                                </statement>
                                <statement name="ELSE">
                                  <block type="LLL_spend" id="247" inline="true">
                                    <value name="MONEY">
                                      <block type="LLL_load" id="251" inline="true">
                                        <field name="PLACE">_input_load_slots</field>
                                        <value name="SLOT">
                                          <block type="LLL_val" id="252">
                                            <field name="VAL">0</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="TO">
                                      <block type="LLL_load" id="248" inline="true">
                                        <field name="PLACE">_input_load_slots</field>
                                        <value name="SLOT">
                                          <block type="LLL_val" id="249">
                                            <field name="VAL">1</field>
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
                </next>
              </block>
            </statement>
            <statement name="ELSE">
              <block type="LLL_comment" id="253">
                <field name="NOTE">Deposit; just increase the account balance by that amount.</field>
                <next>
                  <block type="LLL_comment" id="254">
                    <field name="NOTE">TODO: Shouldn't this happen outside the if block? (always credit them for sent funds)</field>
                    <next>
                      <block type="LLL_store" id="255" inline="false">
                        <field name="PLACE">sstore</field>
                        <value name="SLOT">
                          <block type="LLL_contract" id="256">
                            <field name="PROP">caller</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="LLL_math" id="259" inline="false">
                            <field name="OP">+</field>
                            <value name="A">
                              <block type="LLL_load" id="257" inline="true">
                                <field name="PLACE">sload</field>
                                <value name="SLOT">
                                  <block type="LLL_contract" id="258">
                                    <field name="PROP">caller</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_tx" id="260">
                                <field name="PROP">callvalue</field>
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
    </statement>
  </block>
</xml>
*/}),

}