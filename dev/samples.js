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
  <block type="LLL_val" id="95" x="61" y="151">
    <field name="VAL">;; This is NameCoin in Ethereum</field>
  </block>
  <block type="LLL_if" id="96" inline="false" x="51" y="204">
    <value name="COND">
      <block type="LLL_math" id="97" inline="true">
        <field name="OP">LT</field>
        <value name="A">
          <block type="LLL_transaction" id="98">
            <field name="PROP">value</field>
          </block>
        </value>
        <value name="B">
          <block type="LLL_math" id="99" inline="true">
            <field name="OP">mul</field>
            <value name="A">
              <block type="LLL_block" id="100">
                <field name="PROP">basefee</field>
              </block>
            </value>
            <value name="B">
              <block type="LLL_val" id="101">
                <field name="VAL">100</field>
              </block>
            </value>
          </block>
        </value>
      </block>
    </value>
    <statement name="THEN">
      <block type="LLL_stop" id="102"></block>
    </statement>
    <statement name="ELSE">
      <block type="LLL_store" id="103" inline="true">
        <field name="PLACE">sstore</field>
        <value name="VAL">
          <block type="LLL_load" id="104" inline="true">
            <field name="PLACE">txdata</field>
            <value name="SLOT">
              <block type="LLL_val" id="105">
                <field name="VAL">0</field>
              </block>
            </value>
          </block>
        </value>
        <value name="SLOT">
          <block type="LLL_transaction" id="106">
            <field name="PROP">sender</field>
          </block>
        </value>
      </block>
    </statement>
  </block>
</xml>
*/
})

}
