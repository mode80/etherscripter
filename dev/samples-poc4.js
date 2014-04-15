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

key_value_publisher: fnCommentToString(function(){/*!
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="LLL_comment" id="63" x="26" y="158">
    <field name="NOTE">A contract for key-value publishing (ie. a datafeed)</field>
  </block>
  <block type="LLL_init" id="64" x="26" y="183">
    <statement name="INIT">
      <block type="LLL_comment" id="65">
        <field name="NOTE">remember the creator</field>
        <next>
          <block type="LLL_store" id="66" inline="true">
            <field name="PLACE">sstore</field>
            <value name="VAL">
              <block type="LLL_tx" id="67">
                <field name="PROP">caller</field>
              </block>
            </value>
            <value name="SLOT">
              <block type="LLL_val" id="68">
                <field name="VAL">creator</field>
              </block>
            </value>
          </block>
        </next>
      </block>
    </statement>
    <statement name="BODY">
      <block type="LLL_comment" id="69">
        <field name="NOTE">when the creator calls back with data...</field>
        <next>
          <block type="LLL_when" id="70" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LLL_compare" id="71" inline="true">
                <field name="OP">=</field>
                <value name="A">
                  <block type="LLL_tx" id="72">
                    <field name="PROP">caller</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_load" id="73" inline="true">
                    <field name="PLACE">sload</field>
                    <value name="SLOT">
                      <block type="LLL_val" id="74">
                        <field name="VAL">creator</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="LLL_comment" id="75">
                <field name="NOTE">from the contract input, take two 32-byte chunks at a time  </field>
                <next>
                  <block type="LLL_forloop" id="76" inline="false">
                    <statement name="FIRST">
                      <block type="LLL_comment" id="77" disabled="true">
                        <field name="NOTE">nothing</field>
                      </block>
                    </statement>
                    <value name="COND">
                      <block type="LLL_compare" id="78" inline="true">
                        <field name="OP">&lt;</field>
                        <value name="A">
                          <block type="LLL_load" id="79" inline="true">
                            <field name="PLACE">mload</field>
                            <value name="SLOT">
                              <block type="LLL_val" id="80">
                                <field name="VAL">i</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_tx" id="81">
                            <field name="PROP">_input_byte_count</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="LOOP">
                      <block type="LLL_comment" id="82">
                        <field name="NOTE">store the "value" in the storage slot given by the "key"</field>
                        <next>
                          <block type="LLL_comment" id="83">
                            <field name="NOTE">where the key is given by the 1st chunk and the value by the 2nd chunk</field>
                            <next>
                              <block type="LLL_store" id="84" inline="false">
                                <field name="PLACE">sstore</field>
                                <value name="VAL">
                                  <block type="LLL_load" id="85" inline="true">
                                    <field name="PLACE">_input_load_bytes</field>
                                    <value name="SLOT">
                                      <block type="LLL_math" id="86" inline="true">
                                        <field name="OP">+</field>
                                        <value name="A">
                                          <block type="LLL_load" id="87" inline="true">
                                            <field name="PLACE">mload</field>
                                            <value name="SLOT">
                                              <block type="LLL_val" id="88">
                                                <field name="VAL">i</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_val" id="89">
                                            <field name="VAL">32</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="SLOT">
                                  <block type="LLL_load" id="90" inline="true">
                                    <field name="PLACE">_input_load_bytes</field>
                                    <value name="SLOT">
                                      <block type="LLL_load" id="91" inline="true">
                                        <field name="PLACE">mload</field>
                                        <value name="SLOT">
                                          <block type="LLL_val" id="92">
                                            <field name="VAL">i</field>
                                          </block>
                                        </value>
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
                      <block type="LLL_store" id="93" inline="true">
                        <field name="PLACE">mstore</field>
                        <value name="VAL">
                          <block type="LLL_math" id="94" inline="true">
                            <field name="OP">+</field>
                            <value name="A">
                              <block type="LLL_load" id="95" inline="true">
                                <field name="PLACE">mload</field>
                                <value name="SLOT">
                                  <block type="LLL_val" id="96">
                                    <field name="VAL">i</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_val" id="97">
                                <field name="VAL">64</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="SLOT">
                          <block type="LLL_val" id="98">
                            <field name="VAL">i</field>
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


}
