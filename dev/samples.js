function loadSample(event) {
  var sample_id = event.target.id
  document.getElementById('content_XML')
    .value = samples[sample_id]
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
  <block type="LLL_comment" id="31" x="58" y="176">
    <field name="NOTE">This is NameCoin, written in ethereum</field>
    <next>
      <block type="LLL_if" id="32" inline="false">
        <value name="COND">
          <block type="LLL_math" id="33" inline="true">
            <field name="OP">LT</field>
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
            <field name="NOTE">stop when fee is insufficient</field>
            <next>
              <block type="LLL_stop" id="39"></block>
            </next>
          </block>
        </statement>
        <statement name="ELSE">
          <block type="LLL_comment" id="40">
            <field name="NOTE">store the first contract input, keyed by the sender address</field>
            <next>
              <block type="LLL_store" id="41" inline="true">
                <field name="PLACE">sstore</field>
                <value name="VAL">
                  <block type="LLL_load" id="42" inline="true">
                    <field name="PLACE">txdata</field>
                    <value name="SLOT">
                      <block type="LLL_val" id="43">
                        <field name="VAL">0</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="SLOT">
                  <block type="LLL_transaction" id="44">
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
  <block type="LLL_val" id="583" x="56" y="25">
    <field name="VAL">;; I WANT HALF Marriage Contract</field>
  </block>
  <block type="LLL_when" id="584" inline="false" x="50" y="80">
    <field name="WORD">when</field>
    <value name="COND">
      <block type="LLL_math" id="585" inline="true">
        <field name="OP">LT</field>
        <value name="A">
          <block type="LLL_transaction" id="586">
            <field name="PROP">value</field>
          </block>
        </value>
        <value name="B">
          <block type="LLL_math" id="587" inline="true">
            <field name="OP">mul</field>
            <value name="A">
              <block type="LLL_block" id="588">
                <field name="PROP">basefee</field>
              </block>
            </value>
            <value name="B">
              <block type="LLL_val" id="589">
                <field name="VAL">100</field>
              </block>
            </value>
          </block>
        </value>
      </block>
    </value>
    <statement name="THEN">
      <block type="LLL_stop" id="590"></block>
    </statement>
    <next>
      <block type="LLL_when" id="591" inline="false">
        <field name="WORD">when</field>
        <value name="COND">
          <block type="LLL_math" id="592" inline="true">
            <field name="OP">=</field>
            <value name="A">
              <block type="LLL_load" id="593" inline="true">
                <field name="PLACE">sload</field>
                <value name="SLOT">
                  <block type="LLL_val" id="594">
                    <field name="VAL">STATE</field>
                  </block>
                </value>
              </block>
            </value>
            <value name="B">
              <block type="LLL_val" id="595">
                <field name="VAL">START</field>
              </block>
            </value>
          </block>
        </value>
        <statement name="THEN">
          <block type="LLL_store" id="596" inline="true">
            <field name="PLACE">sstore</field>
            <value name="VAL">
              <block type="LLL_transaction" id="597">
                <field name="PROP">sender</field>
              </block>
            </value>
            <value name="SLOT">
              <block type="LLL_val" id="598">
                <field name="VAL">PARTNER_1</field>
              </block>
            </value>
            <next>
              <block type="LLL_store" id="599" inline="true">
                <field name="PLACE">sstore</field>
                <value name="VAL">
                  <block type="LLL_load" id="600" inline="true">
                    <field name="PLACE">txdata</field>
                    <value name="SLOT">
                      <block type="LLL_val" id="601">
                        <field name="VAL">0</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="SLOT">
                  <block type="LLL_val" id="602">
                    <field name="VAL">PARTNER_2</field>
                  </block>
                </value>
                <next>
                  <block type="LLL_store" id="603" inline="true">
                    <field name="PLACE">sstore</field>
                    <value name="VAL">
                      <block type="LLL_val" id="604">
                        <field name="VAL">PROPOSED</field>
                      </block>
                    </value>
                    <value name="SLOT">
                      <block type="LLL_val" id="605">
                        <field name="VAL">STATE</field>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
        <next>
          <block type="LLL_when" id="606" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LLL_math" id="607" inline="true">
                <field name="OP">=</field>
                <value name="A">
                  <block type="LLL_load" id="608" inline="true">
                    <field name="PLACE">sload</field>
                    <value name="SLOT">
                      <block type="LLL_val" id="609">
                        <field name="VAL">STATE</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_val" id="610">
                    <field name="VAL">PROPOSED</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="LLL_when" id="611" inline="false">
                <field name="WORD">when</field>
                <value name="COND">
                  <block type="LLL_math" id="612" inline="false">
                    <field name="OP">and</field>
                    <value name="A">
                      <block type="LLL_math" id="613" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="LLL_transaction" id="614">
                            <field name="PROP">sender</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="615">
                            <field name="VAL">PARTNER_2</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_math" id="616" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="LLL_load" id="617" inline="true">
                            <field name="PLACE">txdata</field>
                            <value name="SLOT">
                              <block type="LLL_val" id="618">
                                <field name="VAL">0</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_load" id="619" inline="true">
                            <field name="PLACE">sload</field>
                            <value name="SLOT">
                              <block type="LLL_val" id="620">
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
                  <block type="LLL_store" id="621" inline="true">
                    <field name="PLACE">sstore</field>
                    <value name="VAL">
                      <block type="LLL_val" id="622">
                        <field name="VAL">MARRIED</field>
                      </block>
                    </value>
                    <value name="SLOT">
                      <block type="LLL_val" id="623">
                        <field name="VAL">STATE</field>
                      </block>
                    </value>
                  </block>
                </statement>
              </block>
            </statement>
            <next>
              <block type="LLL_when" id="624" inline="false">
                <field name="WORD">when</field>
                <value name="COND">
                  <block type="LLL_math" id="625" inline="false">
                    <field name="OP">and</field>
                    <value name="A">
                      <block type="LLL_math" id="626" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="LLL_load" id="627" inline="true">
                            <field name="PLACE">sload</field>
                            <value name="SLOT">
                              <block type="LLL_val" id="628">
                                <field name="VAL">STATE</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="629">
                            <field name="VAL">MARRIED</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_math" id="630" inline="false">
                        <field name="OP">or</field>
                        <value name="A">
                          <block type="LLL_math" id="631" inline="true">
                            <field name="OP">=</field>
                            <value name="A">
                              <block type="LLL_transaction" id="632">
                                <field name="PROP">sender</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_val" id="633">
                                <field name="VAL">PARTNER_1</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_math" id="634" inline="true">
                            <field name="OP">=</field>
                            <value name="A">
                              <block type="LLL_transaction" id="635">
                                <field name="PROP">sender</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_val" id="636">
                                <field name="VAL">PARTNER_2</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="LLL_when" id="637" inline="false">
                    <field name="WORD">when</field>
                    <value name="COND">
                      <block type="LLL_math" id="638" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="LLL_load" id="639" inline="true">
                            <field name="PLACE">sload</field>
                            <value name="SLOT">
                              <block type="LLL_val" id="640">
                                <field name="VAL">STATE</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="641">
                            <field name="VAL">DIVORCED</field>
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
  <block type="LLL_val" id="643" x="130" y="645">
    <field name="VAL">;; TODO: FInish this...</field>
  </block>
  <block type="LLL_val" id="644" x="127" y="726">
    <field name="VAL">;; TODO: FInish this...</field>
  </block>
</xml>
*/})


}
