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
  <block type="LLL_store" id="54" inline="true" x="25" y="171">
    <field name="PLACE">sstore</field>
    <value name="VAL">
      <block type="LLL_tx" id="55">
        <field name="PROP">caller</field>
      </block>
    </value>
    <value name="SLOT">
      <block type="LLL_val" id="56">
        <field name="VAL">69</field>
      </block>
    </value>
    <next>
      <block type="LLL_when" id="57" inline="false">
        <field name="WORD">when</field>
        <value name="COND">
          <block type="LLL_compare" id="58" inline="true">
            <field name="OP">=</field>
            <value name="A">
              <block type="LLL_tx" id="59">
                <field name="PROP">caller</field>
              </block>
            </value>
            <value name="B">
              <block type="LLL_load" id="60" inline="true">
                <field name="PLACE">sload</field>
                <value name="SLOT">
                  <block type="LLL_val" id="61">
                    <field name="VAL">69</field>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="THEN">
          <block type="LLL_forloop" id="62" inline="false">
            <value name="COND">
              <block type="LLL_compare" id="63" inline="true">
                <field name="OP">&lt;</field>
                <value name="A">
                  <block type="LLL_load" id="64" inline="true">
                    <field name="PLACE">mload</field>
                    <value name="SLOT">
                      <block type="LLL_val" id="65">
                        <field name="VAL">i</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_tx" id="66">
                    <field name="PROP">calldatasize</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="LOOP">
              <block type="LLL_store" id="67" inline="true">
                <field name="PLACE">sstore</field>
                <value name="VAL">
                  <block type="LLL_load" id="68" inline="true">
                    <field name="PLACE">calldataload</field>
                    <value name="SLOT">
                      <block type="LLL_math" id="69" inline="true">
                        <field name="OP">+</field>
                        <value name="A">
                          <block type="LLL_load" id="70" inline="true">
                            <field name="PLACE">mload</field>
                            <value name="SLOT">
                              <block type="LLL_val" id="71">
                                <field name="VAL">i</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="72">
                            <field name="VAL">32</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="SLOT">
                  <block type="LLL_load" id="73" inline="true">
                    <field name="PLACE">calldataload</field>
                    <value name="SLOT">
                      <block type="LLL_load" id="74" inline="true">
                        <field name="PLACE">mload</field>
                        <value name="SLOT">
                          <block type="LLL_val" id="75">
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
              <block type="LLL_store" id="76" inline="true">
                <field name="PLACE">mstore</field>
                <value name="VAL">
                  <block type="LLL_math" id="77" inline="true">
                    <field name="OP">+</field>
                    <value name="A">
                      <block type="LLL_load" id="78" inline="true">
                        <field name="PLACE">mload</field>
                        <value name="SLOT">
                          <block type="LLL_val" id="79">
                            <field name="VAL">i</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_val" id="80">
                        <field name="VAL">64</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="SLOT">
                  <block type="LLL_val" id="81">
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
</xml>
*/}),


}
