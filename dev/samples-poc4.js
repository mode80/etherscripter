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
  <block type="LLL_store" id="81" inline="true" x="25" y="171">
    <field name="PLACE">sstore</field>
    <value name="VAL">
      <block type="LLL_tx" id="82">
        <field name="PROP">caller</field>
      </block>
    </value>
    <value name="SLOT">
      <block type="LLL_val" id="83">
        <field name="VAL">69</field>
      </block>
    </value>
    <next>
      <block type="LLL_when" id="84" inline="false">
        <field name="WORD">when</field>
        <value name="COND">
          <block type="LLL_compare" id="85" inline="true">
            <field name="OP">=</field>
            <value name="A">
              <block type="LLL_tx" id="86">
                <field name="PROP">caller</field>
              </block>
            </value>
            <value name="B">
              <block type="LLL_load" id="87" inline="true">
                <field name="PLACE">sload</field>
                <value name="SLOT">
                  <block type="LLL_val" id="88">
                    <field name="VAL">69</field>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="THEN">
          <block type="LLL_forloop" id="89" inline="false">
            <value name="COND">
              <block type="LLL_compare" id="90" inline="true">
                <field name="OP">&lt;</field>
                <value name="A">
                  <block type="LLL_load" id="91" inline="true">
                    <field name="PLACE">mload</field>
                    <value name="SLOT">
                      <block type="LLL_val" id="92">
                        <field name="VAL">i</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_tx" id="93">
                    <field name="PROP">_input_byte_count</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="LOOP">
              <block type="LLL_store" id="94" inline="true">
                <field name="PLACE">sstore</field>
                <value name="VAL">
                  <block type="LLL_load" id="95" inline="true">
                    <field name="PLACE">_input_load_bytes</field>
                    <value name="SLOT">
                      <block type="LLL_math" id="96" inline="true">
                        <field name="OP">+</field>
                        <value name="A">
                          <block type="LLL_load" id="97" inline="true">
                            <field name="PLACE">mload</field>
                            <value name="SLOT">
                              <block type="LLL_val" id="98">
                                <field name="VAL">i</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="99">
                            <field name="VAL">32</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="SLOT">
                  <block type="LLL_load" id="100" inline="true">
                    <field name="PLACE">_input_load_bytes</field>
                    <value name="SLOT">
                      <block type="LLL_load" id="101" inline="true">
                        <field name="PLACE">mload</field>
                        <value name="SLOT">
                          <block type="LLL_val" id="102">
                            <field name="VAL">i</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </statement>
            <statement name="AFTER_EACH">
              <block type="LLL_store" id="103" inline="true">
                <field name="PLACE">mstore</field>
                <value name="VAL">
                  <block type="LLL_math" id="104" inline="true">
                    <field name="OP">+</field>
                    <value name="A">
                      <block type="LLL_load" id="105" inline="true">
                        <field name="PLACE">mload</field>
                        <value name="SLOT">
                          <block type="LLL_val" id="106">
                            <field name="VAL">i</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_val" id="107">
                        <field name="VAL">64</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="SLOT">
                  <block type="LLL_val" id="108">
                    <field name="VAL">i</field>
                  </block>
                </value>
              </block>
            </statement>
          </block>
        </statement>
      </block>
    </next>
  </block>
</xml>*/
}),


}
