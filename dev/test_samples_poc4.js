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

splitter_contract: fnCommentToString(function(){/*! 
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="LLL_comment" id="85" x="34" y="45">
    <field name="NOTE">Cash splitter; splits the value sent amongst each of the addresses given as inputs.</field>
  </block>
  <block type="LLL_init" id="86" x="33" y="71">
    <statement name="INIT">
      <block type="LLL_mstore" id="87" inline="true">
        <field name="SLOT">0</field>
        <value name="VAL">
          <block type="LLL_textval" id="88">
            <field name="VAL">Splitter</field>
          </block>
        </value>
        <next>
          <block type="LLL_comment" id="89">
            <field name="NOTE">Missing pieces default to 0 here</field>
            <next>
              <block type="LLL_call" id="90" inline="false">
                <value name="ADDRESS">
                  <block type="LLL_val" id="91">
                    <field name="VAL">0x929b11b8eeea00966e873a241d4b67f7540d1f38</field>
                  </block>
                </value>
                <value name="SEND_DATA_START">
                  <block type="LLL_val" id="92">
                    <field name="VAL">0</field>
                  </block>
                </value>
                <value name="SEND_DATA_BYTES">
                  <block type="LLL_val" id="93">
                    <field name="VAL">8</field>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
    <statement name="BODY">
      <block type="LLL_comment" id="94">
        <field name="NOTE">The contract takes input as 20-byte addresses in a blob of bytes (yuck)</field>
        <next>
          <block type="LLL_mstore" id="95" inline="true">
            <field name="SLOT">count</field>
            <value name="VAL">
              <block type="LLL_math" id="96" inline="true">
                <field name="OP">div</field>
                <value name="A">
                  <block type="LLL_tx" id="97">
                    <field name="PROP">_input_byte_count</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_val" id="98">
                    <field name="VAL">20</field>
                  </block>
                </value>
              </block>
            </value>
            <next>
              <block type="LLL_mstore" id="99" inline="true">
                <field name="SLOT">pay</field>
                <value name="VAL">
                  <block type="LLL_math" id="100" inline="true">
                    <field name="OP">div</field>
                    <value name="A">
                      <block type="LLL_tx" id="101">
                        <field name="PROP">callvalue</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_mval" id="102">
                        <field name="VAL">count</field>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="LLL_forloop" id="103" inline="false">
                    <statement name="FIRST">
                      <block type="LLL_comment" id="104" disabled="true">
                        <field name="NOTE">nothing. (A while loop would be prettier here)</field>
                      </block>
                    </statement>
                    <value name="COND">
                      <block type="LLL_compare" id="105" inline="true">
                        <field name="OP">&lt;</field>
                        <value name="A">
                          <block type="LLL_mval" id="106">
                            <field name="VAL">i</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_mval" id="107">
                            <field name="VAL">count</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="LOOP">
                      <block type="LLL_spend" id="108" inline="true">
                        <value name="MONEY">
                          <block type="LLL_mval" id="109">
                            <field name="VAL">pay</field>
                          </block>
                        </value>
                        <value name="TO">
                          <block type="LLL_load" id="110" inline="true">
                            <field name="PLACE">_input_load_bytes</field>
                            <value name="SLOT">
                              <block type="LLL_math" id="111" inline="true">
                                <field name="OP">*</field>
                                <value name="A">
                                  <block type="LLL_mval" id="112">
                                    <field name="VAL">i</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_val" id="113">
                                    <field name="VAL">20</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </statement>
                    <statement name="AFTER_EACH">
                      <block type="LLL_mstore" id="114" inline="true">
                        <field name="SLOT">i</field>
                        <value name="VAL">
                          <block type="LLL_math" id="115" inline="true">
                            <field name="OP">+</field>
                            <value name="A">
                              <block type="LLL_mval" id="116">
                                <field name="VAL">i</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_val" id="117">
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
    </statement>
  </block>
</xml>
*/}),

sub_currency: fnCommentToString(function(){/*! 
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="LLL_comment" id="84" x="28" y="11">
    <field name="NOTE">A sub-currency</field>
  </block>
  <block type="LLL_init" id="83" x="27" y="36">
    <statement name="INIT">
      <block type="LLL_comment" id="88">
        <field name="NOTE">Give creator with a whole bunch of cash.</field>
        <next>
          <block type="LLL_store" id="86" inline="false">
            <field name="PLACE">sstore</field>
            <value name="SLOT">
              <block type="LLL_contract" id="85">
                <field name="PROP">caller</field>
              </block>
            </value>
            <value name="VAL">
              <block type="LLL_val" id="87">
                <field name="VAL">0x1000000000000000000000000</field>
              </block>
            </value>
            <next>
              <block type="LLL_mstore" id="147" inline="true">
                <field name="SLOT">0</field>
                <value name="VAL">
                  <block type="LLL_val" id="148">
                    <field name="VAL">"GavCoin"</field>
                  </block>
                </value>
                <next>
                  <block type="LLL_call" id="145" inline="true">
                    <value name="ADDRESS">
                      <block type="LLL_val" id="151">
                        <field name="VAL">0x929b11b8eeea00966e873a241d4b67f7540d1f38</field>
                      </block>
                    </value>
                    <value name="SEND_DATA_START">
                      <block type="LLL_val" id="150">
                        <field name="VAL">0</field>
                      </block>
                    </value>
                    <value name="SEND_DATA_BYTES">
                      <block type="LLL_val" id="149">
                        <field name="VAL">7</field>
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
    <statement name="BODY">
      <block type="LLL_comment" id="89">
        <field name="NOTE">Stop if there's not enough data passed.</field>
        <next>
          <block type="LLL_when" id="90" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LLL_compare" id="91" inline="true">
                <field name="OP">!=</field>
                <value name="A">
                  <block type="LLL_tx" id="92">
                    <field name="PROP">_input_byte_count</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_val" id="93">
                    <field name="VAL">64</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="LLL_stop" id="94"></block>
            </statement>
            <next>
              <block type="LLL_comment" id="102">
                <field name="NOTE">Get from-balance stored under the caller's address</field>
                <next>
                  <block type="LLL_mstore" id="95" inline="true">
                    <field name="SLOT">fromBal</field>
                    <value name="VAL">
                      <block type="LLL_load" id="96" inline="true">
                        <field name="PLACE">sload</field>
                        <value name="SLOT">
                          <block type="LLL_contract" id="97">
                            <field name="PROP">caller</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="LLL_comment" id="103">
                        <field name="NOTE">The recipient address, provided as the first contract input, we label as 'toBal' (?)</field>
                        <next>
                          <block type="LLL_mstore" id="98" inline="true">
                            <field name="SLOT">toBal</field>
                            <value name="VAL">
                              <block type="LLL_load" id="99" inline="true">
                                <field name="PLACE">sload</field>
                                <value name="SLOT">
                                  <block type="LLL_load" id="100" inline="true">
                                    <field name="PLACE">_input_load_slots</field>
                                    <value name="SLOT">
                                      <block type="LLL_val" id="101">
                                        <field name="VAL">0</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <next>
                              <block type="LLL_comment" id="105">
                                <field name="NOTE">The amount, provided as the 2nd contract input, we label as 'value'</field>
                                <next>
                                  <block type="LLL_mstore" id="104" inline="true">
                                    <field name="SLOT">value</field>
                                    <value name="VAL">
                                      <block type="LLL_load" id="106" inline="true">
                                        <field name="PLACE">_input_load_bytes</field>
                                        <value name="SLOT">
                                          <block type="LLL_val" id="107">
                                            <field name="VAL">32</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="LLL_comment" id="108">
                                        <field name="NOTE">Stop if there's not enough for the transfer.</field>
                                        <next>
                                          <block type="LLL_when" id="109" inline="false">
                                            <field name="WORD">when</field>
                                            <value name="COND">
                                              <block type="LLL_compare" id="110" inline="true">
                                                <field name="OP">&lt;</field>
                                                <value name="A">
                                                  <block type="LLL_mval" id="111">
                                                    <field name="VAL">fromBal</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_mval" id="112">
                                                    <field name="VAL">value</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="THEN">
                                              <block type="LLL_stop" id="113"></block>
                                            </statement>
                                            <next>
                                              <block type="LLL_store" id="114" inline="false">
                                                <field name="PLACE">sstore</field>
                                                <value name="SLOT">
                                                  <block type="LLL_contract" id="115">
                                                    <field name="PROP">caller</field>
                                                  </block>
                                                </value>
                                                <value name="VAL">
                                                  <block type="LLL_math" id="116" inline="true">
                                                    <field name="OP">-</field>
                                                    <value name="A">
                                                      <block type="LLL_mval" id="117">
                                                        <field name="VAL">fromBal</field>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="LLL_mval" id="118">
                                                        <field name="VAL">value</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="LLL_store" id="119" inline="false">
                                                    <field name="PLACE">sstore</field>
                                                    <value name="SLOT">
                                                      <block type="LLL_load" id="120" inline="true">
                                                        <field name="PLACE">_input_load_bytes</field>
                                                        <value name="SLOT">
                                                          <block type="LLL_val" id="121">
                                                            <field name="VAL">0</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="VAL">
                                                      <block type="LLL_math" id="122" inline="true">
                                                        <field name="OP">+</field>
                                                        <value name="A">
                                                          <block type="LLL_mval" id="123">
                                                            <field name="VAL">toBal</field>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="LLL_mval" id="124">
                                                            <field name="VAL">value</field>
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
  </block>
</xml>
*/}),

}