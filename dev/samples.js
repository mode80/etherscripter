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

namecoin: fnCommentToString(function(){/*!
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="LLL_comment" id="229" x="58" y="176">
    <field name="NOTE">A simple name registry for Ethereum addresses</field>
    <next>
      <block type="LLL_if" id="230" inline="false">
        <value name="COND">
          <block type="LLL_math" id="231" inline="true">
            <field name="OP">&lt;</field>
            <value name="A">
              <block type="LLL_transaction" id="232">
                <field name="PROP">value</field>
              </block>
            </value>
            <value name="B">
              <block type="LLL_math" id="233" inline="true">
                <field name="OP">mul</field>
                <value name="A">
                  <block type="LLL_block" id="234">
                    <field name="PROP">basefee</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_val" id="235">
                    <field name="VAL">100</field>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="THEN">
          <block type="LLL_comment" id="236">
            <field name="NOTE">stop when fee is insufficient</field>
            <next>
              <block type="LLL_stop" id="237"></block>
            </next>
          </block>
        </statement>
        <statement name="ELSE">
          <block type="LLL_comment" id="238">
            <field name="NOTE">store the name, given as the first data item, into a storage slot for the sender address</field>
            <next>
              <block type="LLL_store" id="239" inline="true">
                <field name="PLACE">sstore</field>
                <value name="VAL">
                  <block type="LLL_load" id="240" inline="true">
                    <field name="PLACE">txdata</field>
                    <value name="SLOT">
                      <block type="LLL_val" id="241">
                        <field name="VAL">0</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="SLOT">
                  <block type="LLL_transaction" id="242">
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

iwanthalf: fnCommentToString(function(){/*!
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
