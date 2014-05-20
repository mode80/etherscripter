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

coin_flip: fnCommentToString(function(){/*! 
<xml>
  <block type="LLL_comment" id="33" x="37" y="186">
    <field name="NOTE">Coin flipping smart contract</field>
    <next>
      <block type="LLL_comment" id="34">
        <field name="NOTE">When the time in seconds is even, consider it a winning flip</field>
        <next>
          <block type="LLL_when" id="35" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LLL_compare" id="36" inline="true">
                <field name="OP">=</field>
                <value name="A">
                  <block type="LLL_math" id="37" inline="true">
                    <field name="OP">smod</field>
                    <value name="A">
                      <block type="LLL_block" id="38">
                        <field name="PROP">timestamp</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_val" id="39">
                        <field name="VAL">2</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_val" id="40">
                    <field name="VAL">0</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="LLL_comment" id="41">
                <field name="NOTE">On a winning flip, the sender gets double their money back</field>
                <next>
                  <block type="LLL_mktx" id="42" inline="true">
                    <value name="MONEY">
                      <block type="LLL_math" id="43" inline="true">
                        <field name="OP">mul</field>
                        <value name="A">
                          <block type="LLL_transaction" id="44">
                            <field name="PROP">value</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="45">
                            <field name="VAL">2</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="TO">
                      <block type="LLL_transaction" id="46">
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
    </next>
  </block>
</xml>
*/}),

sales: fnCommentToString(function(){/*! 
<xml>
  <block type="LLL_comment" id="47" x="43" y="78">
    <field name="NOTE">*** An Ethereum smart contract to sell a website for "5000 by March"</field>
    <next>
      <block type="LLL_comment" id="48">
        <field name="NOTE">First, store buyer's ethereum address:</field>
        <next>
          <block type="LLL_store" id="49" inline="true">
            <field name="POOL">sstore</field>
            <value name="VAL">
              <block type="LLL_val" id="50">
                <field name="VAL">0x6af26739b9ffef8aa2985252e5357fde</field>
              </block>
            </value>
            <value name="SPOT">
              <block type="LLL_val" id="51">
                <field name="VAL">BUYER</field>
              </block>
            </value>
            <next>
              <block type="LLL_comment" id="52">
                <field name="NOTE">Then, store seller's ethereum address:</field>
                <next>
                  <block type="LLL_store" id="53" inline="true">
                    <field name="POOL">sstore</field>
                    <value name="VAL">
                      <block type="LLL_val" id="54">
                        <field name="VAL">0xfeab802c014588f08bfee2741086c375</field>
                      </block>
                    </value>
                    <value name="SPOT">
                      <block type="LLL_val" id="55">
                        <field name="VAL">SELLER</field>
                      </block>
                    </value>
                    <next>
                      <block type="LLL_comment" id="56">
                        <field name="NOTE">April 1, 2014 is 1396310400 in "computer time"</field>
                        <next>
                          <block type="LLL_store" id="57" inline="true">
                            <field name="POOL">sstore</field>
                            <value name="VAL">
                              <block type="LLL_val" id="58">
                                <field name="VAL">1396310400</field>
                              </block>
                            </value>
                            <value name="SPOT">
                              <block type="LLL_val" id="59">
                                <field name="VAL">DEADLINE</field>
                              </block>
                            </value>
                            <next>
                              <block type="LLL_comment" id="60">
                                <field name="NOTE">If the agreed amount is received on time...</field>
                                <next>
                                  <block type="LLL_when" id="61" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="LLL_logic" id="62" inline="false">
                                        <field name="OP">and</field>
                                        <value name="A">
                                          <block type="LLL_compare" id="63" inline="true">
                                            <field name="OP">&gt;=</field>
                                            <value name="A">
                                              <block type="LLL_transaction" id="64">
                                                <field name="PROP">value</field>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_currency" id="65" inline="true">
                                                <field name="DENOM">ether</field>
                                                <value name="AMT">
                                                  <block type="LLL_val" id="66">
                                                    <field name="VAL">5000</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_compare" id="67" inline="true">
                                            <field name="OP">&lt;=</field>
                                            <value name="A">
                                              <block type="LLL_block" id="68">
                                                <field name="PROP">timestamp</field>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_load" id="69" inline="true">
                                                <field name="POOL">sload</field>
                                                <value name="SPOT">
                                                  <block type="LLL_val" id="70">
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
                                      <block type="LLL_comment" id="71">
                                        <field name="NOTE">... then designate the buyer as the new website admin and pay the seller</field>
                                        <next>
                                          <block type="LLL_store" id="72" inline="true">
                                            <field name="POOL">sstore</field>
                                            <value name="VAL">
                                              <block type="LLL_load" id="73" inline="true">
                                                <field name="POOL">sload</field>
                                                <value name="SPOT">
                                                  <block type="LLL_val" id="74">
                                                    <field name="VAL">BUYER</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="SPOT">
                                              <block type="LLL_val" id="75">
                                                <field name="VAL">WEBSITE_ADMIN</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="LLL_mktx" id="76" inline="true">
                                                <value name="MONEY">
                                                  <block type="LLL_contract" id="77">
                                                    <field name="PROP">balance</field>
                                                  </block>
                                                </value>
                                                <value name="TO">
                                                  <block type="LLL_load" id="78" inline="true">
                                                    <field name="POOL">sload</field>
                                                    <value name="SPOT">
                                                      <block type="LLL_val" id="79">
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

last_will: fnCommentToString(function(){/*! 
<xml>
  <block type="LLL_comment" id="80" x="25" y="20">
    <field name="NOTE">Last Will &amp; Testament using a "dead-man's-switch"</field>
    <next>
      <block type="LLL_comment" id="81">
        <field name="NOTE">If the contract isn't touched by the creator at least once per month, he's dead</field>
        <next>
          <block type="LLL_comment" id="82">
            <field name="NOTE">Therefore, split all funds among the heirs</field>
            <next>
              <block type="LLL_when" id="83" inline="false">
                <field name="WORD">when</field>
                <value name="COND">
                  <block type="LLL_compare" id="84" inline="true">
                    <field name="OP">&lt;</field>
                    <value name="A">
                      <block type="LLL_transaction" id="85">
                        <field name="PROP">value</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_math" id="86" inline="true">
                        <field name="OP">mul</field>
                        <value name="A">
                          <block type="LLL_block" id="87">
                            <field name="PROP">basefee</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="88">
                            <field name="VAL">100</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="THEN">
                  <block type="LLL_comment" id="89">
                    <field name="NOTE">stop if insufficient funds for execution</field>
                    <next>
                      <block type="LLL_stop" id="90"></block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="LLL_if" id="91" inline="false">
                    <value name="COND">
                      <block type="LLL_compare" id="92" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="LLL_load" id="93" inline="true">
                            <field name="POOL">sload</field>
                            <value name="SPOT">
                              <block type="LLL_val" id="94">
                                <field name="VAL">CREATOR</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="95">
                            <field name="VAL">0</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="THEN">
                      <block type="LLL_comment" id="96">
                        <field name="NOTE">This must be a newly created Will contact. Here we record the creator.</field>
                        <next>
                          <block type="LLL_store" id="97" inline="true">
                            <field name="POOL">sstore</field>
                            <value name="VAL">
                              <block type="LLL_transaction" id="98">
                                <field name="PROP">sender</field>
                              </block>
                            </value>
                            <value name="SPOT">
                              <block type="LLL_val" id="99">
                                <field name="VAL">CREATOR</field>
                              </block>
                            </value>
                            <next>
                              <block type="LLL_comment" id="100">
                                <field name="NOTE">A future transaction received from the creator does three things: </field>
                                <next>
                                  <block type="LLL_comment" id="101">
                                    <field name="NOTE">    1) It's proves he's alive and supresses distribution for another 30 days</field>
                                    <next>
                                      <block type="LLL_comment" id="102">
                                        <field name="NOTE">    2) It naturally increases the contract's balance by the amount of the transaction value</field>
                                        <next>
                                          <block type="LLL_comment" id="103">
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
                      <block type="LLL_if" id="104" inline="false">
                        <value name="COND">
                          <block type="LLL_compare" id="105" inline="true">
                            <field name="OP">=</field>
                            <value name="A">
                              <block type="LLL_transaction" id="106">
                                <field name="PROP">sender</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_load" id="107" inline="true">
                                <field name="POOL">sload</field>
                                <value name="SPOT">
                                  <block type="LLL_val" id="108">
                                    <field name="VAL">CREATOR</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="THEN">
                          <block type="LLL_comment" id="109">
                            <field name="NOTE">Here we record the time of this touch by the creator. He's still alive.</field>
                            <next>
                              <block type="LLL_store" id="110" inline="true">
                                <field name="POOL">sstore</field>
                                <value name="VAL">
                                  <block type="LLL_block" id="111">
                                    <field name="PROP">timestamp</field>
                                  </block>
                                </value>
                                <value name="SPOT">
                                  <block type="LLL_val" id="112">
                                    <field name="VAL">LAST_TOUCH</field>
                                  </block>
                                </value>
                                <next>
                                  <block type="LLL_when" id="113" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="LLL_compare" id="114" inline="true">
                                        <field name="OP">&gt;</field>
                                        <value name="A">
                                          <block type="LLL_transaction" id="115">
                                            <field name="PROP">datan</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_val" id="116">
                                            <field name="VAL">0</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="THEN">
                                      <block type="LLL_comment" id="117">
                                        <field name="NOTE">The creator defines heirs by supplying their payment addresses via the transaction data items</field>
                                        <next>
                                          <block type="LLL_comment" id="118">
                                            <field name="NOTE">He can change these by supplying a new set of addresses which replaces all of the old set</field>
                                            <next>
                                              <block type="LLL_for" id="119" inline="false">
                                                <field name="WORD">WHILE</field>
                                                <value name="COND">
                                                  <block type="LLL_compare" id="120" inline="true">
                                                    <field name="OP">&lt;</field>
                                                    <value name="A">
                                                      <block type="LLL_load" id="121" inline="true">
                                                        <field name="POOL">mload</field>
                                                        <value name="SPOT">
                                                          <block type="LLL_val" id="122">
                                                            <field name="VAL">i</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="LLL_transaction" id="123">
                                                        <field name="PROP">datan</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO">
                                                  <block type="LLL_comment" id="124">
                                                    <field name="NOTE">each heir will be recorded for future reference in the storage range 1000+</field>
                                                    <next>
                                                      <block type="LLL_store" id="125" inline="true">
                                                        <field name="POOL">sstore</field>
                                                        <value name="VAL">
                                                          <block type="LLL_load" id="126" inline="true">
                                                            <field name="POOL">txdata</field>
                                                            <value name="SPOT">
                                                              <block type="LLL_val" id="127">
                                                                <field name="VAL">i</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="SPOT">
                                                          <block type="LLL_math" id="128" inline="true">
                                                            <field name="OP">add</field>
                                                            <value name="A">
                                                              <block type="LLL_val" id="129">
                                                                <field name="VAL">1000</field>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="LLL_val" id="130">
                                                                <field name="VAL">i</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="LLL_store" id="131" inline="true">
                                                            <field name="POOL">mstore</field>
                                                            <value name="VAL">
                                                              <block type="LLL_math" id="132" inline="true">
                                                                <field name="OP">add</field>
                                                                <value name="A">
                                                                  <block type="LLL_val" id="133">
                                                                    <field name="VAL">i</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_val" id="134">
                                                                    <field name="VAL">1</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="SPOT">
                                                              <block type="LLL_val" id="135">
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
                                                  <block type="LLL_for" id="136" inline="false">
                                                    <field name="WORD">WHILE</field>
                                                    <value name="COND">
                                                      <block type="LLL_compare" id="137" inline="true">
                                                        <field name="OP">&lt;</field>
                                                        <value name="A">
                                                          <block type="LLL_load" id="138" inline="true">
                                                            <field name="POOL">mload</field>
                                                            <value name="SPOT">
                                                              <block type="LLL_val" id="139">
                                                                <field name="VAL">i</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="LLL_load" id="140" inline="true">
                                                            <field name="POOL">sload</field>
                                                            <value name="SPOT">
                                                              <block type="LLL_val" id="141">
                                                                <field name="VAL">HEIR_COUNT</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO">
                                                      <block type="LLL_comment" id="142">
                                                        <field name="NOTE">any former heirs are removed in favor of this new set</field>
                                                        <next>
                                                          <block type="LLL_store" id="143" inline="true">
                                                            <field name="POOL">sstore</field>
                                                            <value name="VAL">
                                                              <block type="LLL_val" id="144">
                                                                <field name="VAL">0</field>
                                                              </block>
                                                            </value>
                                                            <value name="SPOT">
                                                              <block type="LLL_math" id="145" inline="true">
                                                                <field name="OP">add</field>
                                                                <value name="A">
                                                                  <block type="LLL_val" id="146">
                                                                    <field name="VAL">1000</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_val" id="147">
                                                                    <field name="VAL">i</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="LLL_store" id="148" inline="true">
                                                                <field name="POOL">mstore</field>
                                                                <value name="VAL">
                                                                  <block type="LLL_math" id="149" inline="true">
                                                                    <field name="OP">add</field>
                                                                    <value name="A">
                                                                      <block type="LLL_val" id="150">
                                                                        <field name="VAL">i</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="LLL_val" id="151">
                                                                        <field name="VAL">1</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="SPOT">
                                                                  <block type="LLL_val" id="152">
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
                                                      <block type="LLL_comment" id="153">
                                                        <field name="NOTE">remember how many heirs we have for later</field>
                                                        <next>
                                                          <block type="LLL_store" id="154" inline="true">
                                                            <field name="POOL">mstore</field>
                                                            <value name="VAL">
                                                              <block type="LLL_transaction" id="155">
                                                                <field name="PROP">datan</field>
                                                              </block>
                                                            </value>
                                                            <value name="SPOT">
                                                              <block type="LLL_val" id="156">
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
                          <block type="LLL_comment" id="157">
                            <field name="NOTE">A transaction received by anyone else triggers distribution to heirs if we haven't heard from the creator </field>
                            <next>
                              <block type="LLL_comment" id="158">
                                <field name="NOTE">(there are 2,592,000 seconds in a month)</field>
                                <next>
                                  <block type="LLL_when" id="159" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="LLL_compare" id="160" inline="true">
                                        <field name="OP">&gt;</field>
                                        <value name="A">
                                          <block type="LLL_block" id="161">
                                            <field name="PROP">timestamp</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_math" id="162" inline="true">
                                            <field name="OP">add</field>
                                            <value name="A">
                                              <block type="LLL_load" id="163" inline="true">
                                                <field name="POOL">sload</field>
                                                <value name="SPOT">
                                                  <block type="LLL_val" id="164">
                                                    <field name="VAL">LAST_TOUCH</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_val" id="165">
                                                <field name="VAL">2592000</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="THEN">
                                      <block type="LLL_comment" id="166">
                                        <field name="NOTE">make sure there are heirs or else stop</field>
                                        <next>
                                          <block type="LLL_when" id="167" inline="false">
                                            <field name="WORD">when</field>
                                            <value name="COND">
                                              <block type="LLL_compare" id="168" inline="true">
                                                <field name="OP">=</field>
                                                <value name="A">
                                                  <block type="LLL_load" id="169" inline="true">
                                                    <field name="POOL">sload</field>
                                                    <value name="SPOT">
                                                      <block type="LLL_val" id="170">
                                                        <field name="VAL">HEIR_COUNT</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_val" id="171">
                                                    <field name="VAL">0</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="THEN">
                                              <block type="LLL_stop" id="172"></block>
                                            </statement>
                                            <next>
                                              <block type="LLL_comment" id="173">
                                                <field name="NOTE">calculate the even portion</field>
                                                <next>
                                                  <block type="LLL_store" id="174" inline="true">
                                                    <field name="POOL">mstore</field>
                                                    <value name="VAL">
                                                      <block type="LLL_math" id="175" inline="true">
                                                        <field name="OP">sdiv</field>
                                                        <value name="A">
                                                          <block type="LLL_contract" id="176">
                                                            <field name="PROP">balance</field>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="LLL_load" id="177" inline="true">
                                                            <field name="POOL">sload</field>
                                                            <value name="SPOT">
                                                              <block type="LLL_val" id="178">
                                                                <field name="VAL">HEIR_COUNT</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="SPOT">
                                                      <block type="LLL_val" id="179">
                                                        <field name="VAL">PORTION</field>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="LLL_comment" id="180">
                                                        <field name="NOTE">distribute the portions out to the heirs</field>
                                                        <next>
                                                          <block type="LLL_for" id="181" inline="false">
                                                            <field name="WORD">WHILE</field>
                                                            <value name="COND">
                                                              <block type="LLL_compare" id="182" inline="true">
                                                                <field name="OP">&lt;</field>
                                                                <value name="A">
                                                                  <block type="LLL_load" id="183" inline="true">
                                                                    <field name="POOL">mload</field>
                                                                    <value name="SPOT">
                                                                      <block type="LLL_val" id="184">
                                                                        <field name="VAL">i</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_load" id="185" inline="true">
                                                                    <field name="POOL">sload</field>
                                                                    <value name="SPOT">
                                                                      <block type="LLL_val" id="186">
                                                                        <field name="VAL">HEIR_COUNT</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <statement name="DO">
                                                              <block type="LLL_mktx" id="187" inline="true">
                                                                <value name="MONEY">
                                                                  <block type="LLL_val" id="188">
                                                                    <field name="VAL">PORTION</field>
                                                                  </block>
                                                                </value>
                                                                <value name="TO">
                                                                  <block type="LLL_load" id="189" inline="true">
                                                                    <field name="POOL">sload</field>
                                                                    <value name="SPOT">
                                                                      <block type="LLL_math" id="190" inline="true">
                                                                        <field name="OP">add</field>
                                                                        <value name="A">
                                                                          <block type="LLL_val" id="191">
                                                                            <field name="VAL">1000</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="B">
                                                                          <block type="LLL_val" id="192">
                                                                            <field name="VAL">i</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <next>
                                                                  <block type="LLL_store" id="193" inline="true">
                                                                    <field name="POOL">mstore</field>
                                                                    <value name="VAL">
                                                                      <block type="LLL_math" id="194" inline="true">
                                                                        <field name="OP">add</field>
                                                                        <value name="A">
                                                                          <block type="LLL_val" id="195">
                                                                            <field name="VAL">i</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="B">
                                                                          <block type="LLL_val" id="196">
                                                                            <field name="VAL">1</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                    <value name="SPOT">
                                                                      <block type="LLL_val" id="197">
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
</xml>
*/}),

marriage: fnCommentToString(function(){/*! 
<xml>
  <block type="LLL_comment" id="198" x="29" y="21">
    <field name="NOTE">"I WANT HALF!" Marriage Smart Contract [based on the idea by @mids106 et al]</field>
    <next>
      <block type="LLL_when" id="199" inline="false">
        <field name="WORD">when</field>
        <value name="COND">
          <block type="LLL_compare" id="200" inline="true">
            <field name="OP">&lt;</field>
            <value name="A">
              <block type="LLL_transaction" id="201">
                <field name="PROP">value</field>
              </block>
            </value>
            <value name="B">
              <block type="LLL_math" id="202" inline="true">
                <field name="OP">mul</field>
                <value name="A">
                  <block type="LLL_block" id="203">
                    <field name="PROP">basefee</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_val" id="204">
                    <field name="VAL">100</field>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="THEN">
          <block type="LLL_comment" id="205">
            <field name="NOTE">The contract must receive at least 100x basefee for execution or it stops</field>
            <next>
              <block type="LLL_stop" id="206"></block>
            </next>
          </block>
        </statement>
        <next>
          <block type="LLL_when" id="207" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LLL_compare" id="208" inline="true">
                <field name="OP">=</field>
                <value name="A">
                  <block type="LLL_load" id="209" inline="true">
                    <field name="POOL">sload</field>
                    <value name="SPOT">
                      <block type="LLL_val" id="210">
                        <field name="VAL">STATE</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_val" id="211">
                    <field name="VAL">0</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="LLL_comment" id="212">
                <field name="NOTE">At contract creation, we store the sender as partner_1 with partner_2 given as the 1st data item</field>
                <next>
                  <block type="LLL_store" id="213" inline="true">
                    <field name="POOL">sstore</field>
                    <value name="VAL">
                      <block type="LLL_transaction" id="214">
                        <field name="PROP">sender</field>
                      </block>
                    </value>
                    <value name="SPOT">
                      <block type="LLL_val" id="215">
                        <field name="VAL">PARTNER_1</field>
                      </block>
                    </value>
                    <next>
                      <block type="LLL_store" id="216" inline="true">
                        <field name="POOL">sstore</field>
                        <value name="VAL">
                          <block type="LLL_load" id="217" inline="true">
                            <field name="POOL">txdata</field>
                            <value name="SPOT">
                              <block type="LLL_val" id="218">
                                <field name="VAL">0</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="SPOT">
                          <block type="LLL_val" id="219">
                            <field name="VAL">PARTNER_2</field>
                          </block>
                        </value>
                        <next>
                          <block type="LLL_store" id="220" inline="true">
                            <field name="POOL">sstore</field>
                            <value name="VAL">
                              <block type="LLL_val" id="221">
                                <field name="VAL">PROPOSED</field>
                              </block>
                            </value>
                            <value name="SPOT">
                              <block type="LLL_val" id="222">
                                <field name="VAL">STATE</field>
                              </block>
                            </value>
                            <next>
                              <block type="LLL_comment" id="223">
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
              <block type="LLL_when" id="224" inline="false">
                <field name="WORD">when</field>
                <value name="COND">
                  <block type="LLL_compare" id="225" inline="true">
                    <field name="OP">=</field>
                    <value name="A">
                      <block type="LLL_load" id="226" inline="true">
                        <field name="POOL">sload</field>
                        <value name="SPOT">
                          <block type="LLL_val" id="227">
                            <field name="VAL">STATE</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_val" id="228">
                        <field name="VAL">PROPOSED</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="THEN">
                  <block type="LLL_comment" id="229">
                    <field name="NOTE"> Partner_2 can accept the proposal by sending in a transaction with partner_1 given as the first data item</field>
                    <next>
                      <block type="LLL_when" id="230" inline="false">
                        <field name="WORD">when</field>
                        <value name="COND">
                          <block type="LLL_logic" id="231" inline="false">
                            <field name="OP">and</field>
                            <value name="A">
                              <block type="LLL_compare" id="232" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_transaction" id="233">
                                    <field name="PROP">sender</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_val" id="234">
                                    <field name="VAL">PARTNER_2</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_compare" id="235" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_load" id="236" inline="true">
                                    <field name="POOL">txdata</field>
                                    <value name="SPOT">
                                      <block type="LLL_val" id="237">
                                        <field name="VAL">0</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_load" id="238" inline="true">
                                    <field name="POOL">sload</field>
                                    <value name="SPOT">
                                      <block type="LLL_val" id="239">
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
                          <block type="LLL_store" id="240" inline="true">
                            <field name="POOL">sstore</field>
                            <value name="VAL">
                              <block type="LLL_val" id="241">
                                <field name="VAL">MARRIED</field>
                              </block>
                            </value>
                            <value name="SPOT">
                              <block type="LLL_val" id="242">
                                <field name="VAL">STATE</field>
                              </block>
                            </value>
                          </block>
                        </statement>
                        <next>
                          <block type="LLL_comment" id="243">
                            <field name="NOTE">Partner_1 and Partner_2 are now "MARRIED"!</field>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="LLL_when" id="244" inline="false">
                    <field name="WORD">when</field>
                    <value name="COND">
                      <block type="LLL_logic" id="245" inline="false">
                        <field name="OP">and</field>
                        <value name="A">
                          <block type="LLL_compare" id="246" inline="true">
                            <field name="OP">=</field>
                            <value name="A">
                              <block type="LLL_load" id="247" inline="true">
                                <field name="POOL">sload</field>
                                <value name="SPOT">
                                  <block type="LLL_val" id="248">
                                    <field name="VAL">STATE</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_val" id="249">
                                <field name="VAL">MARRIED</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_logic" id="250" inline="false">
                            <field name="OP">or</field>
                            <value name="A">
                              <block type="LLL_compare" id="251" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_transaction" id="252">
                                    <field name="PROP">sender</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_val" id="253">
                                    <field name="VAL">PARTNER_1</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_compare" id="254" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_transaction" id="255">
                                    <field name="PROP">sender</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_val" id="256">
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
                      <block type="LLL_comment" id="257">
                        <field name="NOTE">Once married, the contract is a "joint" account and each partner must send in the same instruction to make a withdraw</field>
                        <next>
                          <block type="LLL_comment" id="258">
                            <field name="NOTE">A valid withdrawal instruction is an incoming transaction where: </field>
                            <next>
                              <block type="LLL_comment" id="259">
                                <field name="NOTE">data item 0 is the withdraw code, data item 1 is the destination address, and data item 2 is the amount</field>
                                <next>
                                  <block type="LLL_when" id="260" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="LLL_compare" id="261" inline="true">
                                        <field name="OP">=</field>
                                        <value name="A">
                                          <block type="LLL_load" id="262" inline="true">
                                            <field name="POOL">txdata</field>
                                            <value name="SPOT">
                                              <block type="LLL_val" id="263">
                                                <field name="VAL">0</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_val" id="264">
                                            <field name="VAL">WITHDRAW</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="THEN">
                                      <block type="LLL_if" id="265" inline="false">
                                        <value name="COND">
                                          <block type="LLL_logic" id="266" inline="false">
                                            <field name="OP">and</field>
                                            <value name="A">
                                              <block type="LLL_compare" id="267" inline="true">
                                                <field name="OP">!=</field>
                                                <value name="A">
                                                  <block type="LLL_load" id="268" inline="true">
                                                    <field name="POOL">sload</field>
                                                    <value name="SPOT">
                                                      <block type="LLL_val" id="269">
                                                        <field name="VAL">WITHDRAW_CREATOR</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_transaction" id="270">
                                                    <field name="PROP">sender</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_logic" id="271" inline="false">
                                                <field name="OP">and</field>
                                                <value name="A">
                                                  <block type="LLL_compare" id="272" inline="true">
                                                    <field name="OP">=</field>
                                                    <value name="A">
                                                      <block type="LLL_load" id="273" inline="true">
                                                        <field name="POOL">txdata</field>
                                                        <value name="SPOT">
                                                          <block type="LLL_val" id="274">
                                                            <field name="VAL">1</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="LLL_load" id="275" inline="true">
                                                        <field name="POOL">sload</field>
                                                        <value name="SPOT">
                                                          <block type="LLL_val" id="276">
                                                            <field name="VAL">WITHDRAW_TO</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_compare" id="277" inline="true">
                                                    <field name="OP">=</field>
                                                    <value name="A">
                                                      <block type="LLL_load" id="278" inline="true">
                                                        <field name="POOL">txdata</field>
                                                        <value name="SPOT">
                                                          <block type="LLL_val" id="279">
                                                            <field name="VAL">2</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="LLL_load" id="280" inline="true">
                                                        <field name="POOL">sload</field>
                                                        <value name="SPOT">
                                                          <block type="LLL_val" id="281">
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
                                          <block type="LLL_comment" id="282">
                                            <field name="NOTE">If a withdraw request is already pending from the other partner and this request matches, then do it.</field>
                                            <next>
                                              <block type="LLL_mktx" id="283" inline="true">
                                                <value name="MONEY">
                                                  <block type="LLL_load" id="284" inline="true">
                                                    <field name="POOL">sload</field>
                                                    <value name="SPOT">
                                                      <block type="LLL_val" id="285">
                                                        <field name="VAL">WITHDRAW_AMOUNT</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="TO">
                                                  <block type="LLL_load" id="286" inline="true">
                                                    <field name="POOL">sload</field>
                                                    <value name="SPOT">
                                                      <block type="LLL_val" id="287">
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
                                          <block type="LLL_comment" id="288">
                                            <field name="NOTE">this is a new withdraw request; store it as pending until a matching request is received from other partner</field>
                                            <next>
                                              <block type="LLL_store" id="289" inline="true">
                                                <field name="POOL">sstore</field>
                                                <value name="VAL">
                                                  <block type="LLL_load" id="290" inline="true">
                                                    <field name="POOL">txdata</field>
                                                    <value name="SPOT">
                                                      <block type="LLL_val" id="291">
                                                        <field name="VAL">1</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="SPOT">
                                                  <block type="LLL_val" id="292">
                                                    <field name="VAL">WITHDRAW_TO</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="LLL_store" id="293" inline="true">
                                                    <field name="POOL">sstore</field>
                                                    <value name="VAL">
                                                      <block type="LLL_load" id="294" inline="true">
                                                        <field name="POOL">txdata</field>
                                                        <value name="SPOT">
                                                          <block type="LLL_val" id="295">
                                                            <field name="VAL">2</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="SPOT">
                                                      <block type="LLL_val" id="296">
                                                        <field name="VAL">WITHDRAW_AMOUNT</field>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="LLL_store" id="297" inline="true">
                                                        <field name="POOL">sstore</field>
                                                        <value name="VAL">
                                                          <block type="LLL_transaction" id="298">
                                                            <field name="PROP">sender</field>
                                                          </block>
                                                        </value>
                                                        <value name="SPOT">
                                                          <block type="LLL_val" id="299">
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
                                      <block type="LLL_comment" id="300">
                                        <field name="NOTE">Once married, the partners must both agree in order to get divorced and split the pot. I WANT HALF!</field>
                                        <next>
                                          <block type="LLL_when" id="301" inline="false">
                                            <field name="WORD">when</field>
                                            <value name="COND">
                                              <block type="LLL_compare" id="302" inline="true">
                                                <field name="OP">=</field>
                                                <value name="A">
                                                  <block type="LLL_load" id="303" inline="true">
                                                    <field name="POOL">txdata</field>
                                                    <value name="SPOT">
                                                      <block type="LLL_val" id="304">
                                                        <field name="VAL">0</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_val" id="305">
                                                    <field name="VAL">DIVORCE</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="THEN">
                                              <block type="LLL_if" id="306" inline="false">
                                                <value name="COND">
                                                  <block type="LLL_compare" id="307" inline="true">
                                                    <field name="OP">!=</field>
                                                    <value name="A">
                                                      <block type="LLL_load" id="308" inline="true">
                                                        <field name="POOL">sload</field>
                                                        <value name="SPOT">
                                                          <block type="LLL_val" id="309">
                                                            <field name="VAL">DIVORCE_CREATOR</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="LLL_transaction" id="310">
                                                        <field name="PROP">sender</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="THEN">
                                                  <block type="LLL_comment" id="311">
                                                    <field name="NOTE">a divorce request is already pending and 2nd party is agreeing, so split the pot</field>
                                                    <next>
                                                      <block type="LLL_store" id="312" inline="true">
                                                        <field name="POOL">mstore</field>
                                                        <value name="VAL">
                                                          <block type="LLL_math" id="313" inline="true">
                                                            <field name="OP">sdiv</field>
                                                            <value name="A">
                                                              <block type="LLL_contract" id="314">
                                                                <field name="PROP">balance</field>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="LLL_val" id="315">
                                                                <field name="VAL">2</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="SPOT">
                                                          <block type="LLL_val" id="316">
                                                            <field name="VAL">HALF</field>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="LLL_mktx" id="317" inline="true">
                                                            <value name="MONEY">
                                                              <block type="LLL_load" id="318" inline="true">
                                                                <field name="POOL">mload</field>
                                                                <value name="SPOT">
                                                                  <block type="LLL_val" id="319">
                                                                    <field name="VAL">HALF</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="TO">
                                                              <block type="LLL_load" id="320" inline="true">
                                                                <field name="POOL">sload</field>
                                                                <value name="SPOT">
                                                                  <block type="LLL_val" id="321">
                                                                    <field name="VAL">PARTNER_1</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="LLL_mktx" id="322" inline="true">
                                                                <value name="MONEY">
                                                                  <block type="LLL_load" id="323" inline="true">
                                                                    <field name="POOL">mload</field>
                                                                    <value name="SPOT">
                                                                      <block type="LLL_val" id="324">
                                                                        <field name="VAL">HALF</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="TO">
                                                                  <block type="LLL_load" id="325" inline="true">
                                                                    <field name="POOL">sload</field>
                                                                    <value name="SPOT">
                                                                      <block type="LLL_val" id="326">
                                                                        <field name="VAL">PARTNER_2</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <next>
                                                                  <block type="LLL_store" id="327" inline="true">
                                                                    <field name="POOL">sstore</field>
                                                                    <value name="VAL">
                                                                      <block type="LLL_val" id="328">
                                                                        <field name="VAL">DIVORCED</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="SPOT">
                                                                      <block type="LLL_val" id="329">
                                                                        <field name="VAL">STATE</field>
                                                                      </block>
                                                                    </value>
                                                                    <next>
                                                                      <block type="LLL_comment" id="330">
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
                                                  <block type="LLL_comment" id="331">
                                                    <field name="NOTE">make a new divorce request pending, waiting for agreement</field>
                                                    <next>
                                                      <block type="LLL_store" id="332" inline="true">
                                                        <field name="POOL">sstore</field>
                                                        <value name="VAL">
                                                          <block type="LLL_transaction" id="333">
                                                            <field name="PROP">sender</field>
                                                          </block>
                                                        </value>
                                                        <value name="SPOT">
                                                          <block type="LLL_val" id="334">
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
*/}),

toothfairy: fnCommentToString(function(){/*! 
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="LLL_comment" id="50" x="32" y="48">
    <field name="NOTE">Toothfairy smart contract</field>
  </block>
  <block type="LLL_init" id="51" x="31" y="75">
    <statement name="INIT">
      <block type="LLL_store" id="52" inline="true">
        <field name="POOL">sstore</field>
        <value name="SPOT">
          <block type="LLL_val" id="53">
            <field name="VAL">CHILD</field>
          </block>
        </value>
        <value name="VAL">
          <block type="LLL_val" id="54">
            <field name="VAL">0xb7b2e5e12992267f85455ffee1435f02760402f0</field>
          </block>
        </value>
        <next>
          <block type="LLL_store" id="55" inline="true">
            <field name="POOL">sstore</field>
            <value name="SPOT">
              <block type="LLL_val" id="56">
                <field name="VAL">TOOTHFAIRY</field>
              </block>
            </value>
            <value name="VAL">
              <block type="LLL_val" id="57">
                <field name="VAL">0xc61185cffa955bd1a6b914a6c616b3cdd5206aa1</field>
              </block>
            </value>
          </block>
        </next>
      </block>
    </statement>
    <statement name="BODY">
      <block type="LLL_comment" id="58">
        <field name="NOTE">Child calling... with proof of lost tooth given as the contract input</field>
        <next>
          <block type="LLL_when" id="59" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LLL_compare" id="60" inline="true">
                <field name="OP">=</field>
                <value name="A">
                  <block type="LLL_contract" id="61">
                    <field name="PROP">caller</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_load" id="62" inline="true">
                    <field name="POOL">sload</field>
                    <value name="SPOT">
                      <block type="LLL_val" id="63">
                        <field name="VAL">CHILD</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="LLL_store" id="64" inline="true">
                <field name="POOL">sstore</field>
                <value name="SPOT">
                  <block type="LLL_val" id="65">
                    <field name="VAL">PROOF_OF_TOOTH</field>
                  </block>
                </value>
                <value name="VAL">
                  <block type="LLL_contract" id="66">
                    <field name="PROP">_input</field>
                  </block>
                </value>
              </block>
            </statement>
            <next>
              <block type="LLL_comment" id="67">
                <field name="NOTE">Toothfairy calling... to release contract funds to child</field>
                <next>
                  <block type="LLL_if" id="68" inline="false">
                    <value name="COND">
                      <block type="LLL_compare" id="69" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="LLL_contract" id="70">
                            <field name="PROP">caller</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_load" id="71" inline="true">
                            <field name="POOL">sload</field>
                            <value name="SPOT">
                              <block type="LLL_val" id="72">
                                <field name="VAL">TOOTHFAIRY</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="THEN">
                      <block type="LLL_spend" id="73" inline="true">
                        <value name="MONEY">
                          <block type="LLL_contract" id="74">
                            <field name="PROP">balance</field>
                          </block>
                        </value>
                        <value name="TO">
                          <block type="LLL_load" id="75" inline="true">
                            <field name="POOL">sload</field>
                            <value name="SPOT">
                              <block type="LLL_val" id="76">
                                <field name="VAL">CHILD</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </statement>
                    <statement name="ELSE">
                      <block type="LLL_comment" id="77">
                        <field name="NOTE">Anyone else calling just gets their funds back</field>
                        <next>
                          <block type="LLL_spend" id="78" inline="true">
                            <value name="MONEY">
                              <block type="LLL_tx" id="79">
                                <field name="PROP">callvalue</field>
                              </block>
                            </value>
                            <value name="TO">
                              <block type="LLL_contract" id="80">
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
</xml>
*/}),


insurance: fnCommentToString(function(){/*! 
<xml>
  <block type="LLL_comment" id="116" x="14" y="6">
    <field name="NOTE">Insurance Policy</field>
  </block>
  <block type="LLL_init" id="117" x="14" y="32">
    <statement name="INIT">
      <block type="LLL_store" id="118" inline="true">
        <field name="POOL">sstore</field>
        <value name="SPOT">
          <block type="LLL_val" id="119">
            <field name="VAL">CUSTOMER</field>
          </block>
        </value>
        <value name="VAL">
          <block type="LLL_val" id="120">
            <field name="VAL">0xb7b2e5e12992267f85455ffee1435f02760402f0</field>
          </block>
        </value>
        <next>
          <block type="LLL_store" id="121" inline="true">
            <field name="POOL">sstore</field>
            <value name="SPOT">
              <block type="LLL_val" id="122">
                <field name="VAL">CLAIM_ADJUSTER</field>
              </block>
            </value>
            <value name="VAL">
              <block type="LLL_val" id="123">
                <field name="VAL">0xc61185cffa955bd1a6b914a6c616b3cdd5206aa1</field>
              </block>
            </value>
            <next>
              <block type="LLL_store" id="124" inline="true">
                <field name="POOL">sstore</field>
                <value name="SPOT">
                  <block type="LLL_val" id="125">
                    <field name="VAL">MONTHLY_PREMIUM</field>
                  </block>
                </value>
                <value name="VAL">
                  <block type="LLL_currency" id="126" inline="true">
                    <field name="DENOM">ether</field>
                    <value name="AMT">
                      <block type="LLL_val" id="127">
                        <field name="VAL">100</field>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="LLL_comment" id="128">
                    <field name="NOTE">Seconds in a month: 2628000, Seconds since 1970 on 1/1/2014: 1387584000</field>
                    <next>
                      <block type="LLL_store" id="129" inline="true">
                        <field name="POOL">sstore</field>
                        <value name="SPOT">
                          <block type="LLL_val" id="130">
                            <field name="VAL">START_DATE</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="LLL_val" id="131">
                            <field name="VAL">1387584000</field>
                          </block>
                        </value>
                        <next>
                          <block type="LLL_store" id="132" inline="true">
                            <field name="POOL">sstore</field>
                            <value name="SPOT">
                              <block type="LLL_val" id="133">
                                <field name="VAL">ARBITRATOR</field>
                              </block>
                            </value>
                            <value name="VAL">
                              <block type="LLL_val" id="134">
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
      <block type="LLL_comment" id="135">
        <field name="NOTE">Customer calling... with claim evidence provided as the contract input</field>
        <next>
          <block type="LLL_when" id="136" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LLL_compare" id="137" inline="true">
                <field name="OP">=</field>
                <value name="A">
                  <block type="LLL_contract" id="138">
                    <field name="PROP">caller</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_load" id="139" inline="true">
                    <field name="POOL">sload</field>
                    <value name="SPOT">
                      <block type="LLL_val" id="140">
                        <field name="VAL">CUSTOMER</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="LLL_comment" id="141">
                <field name="NOTE">Increment customer's balance with the amount he's sending in</field>
                <next>
                  <block type="LLL_store" id="142" inline="false">
                    <field name="POOL">sstore</field>
                    <value name="SPOT">
                      <block type="LLL_val" id="143">
                        <field name="VAL">CUSTOMER_BALANCE</field>
                      </block>
                    </value>
                    <value name="VAL">
                      <block type="LLL_math" id="144" inline="true">
                        <field name="OP">+</field>
                        <value name="A">
                          <block type="LLL_load" id="186" inline="true">
                            <field name="POOL">sload</field>
                            <value name="SPOT">
                              <block type="LLL_val" id="187">
                                <field name="VAL">CUSTOMER_BALANCE</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_tx" id="146">
                            <field name="PROP">callvalue</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="LLL_store" id="147" inline="true">
                        <field name="POOL">sstore</field>
                        <value name="SPOT">
                          <block type="LLL_val" id="148">
                            <field name="VAL">PROOF_OF_GOOF</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="LLL_load" id="149" inline="true">
                            <field name="POOL">_input_load_slots</field>
                            <value name="SPOT">
                              <block type="LLL_val" id="150">
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
              <block type="LLL_comment" id="151">
                <field name="NOTE">Adjuster calling... with the payout amount as the contract input</field>
                <next>
                  <block type="LLL_comment" id="152">
                    <field name="NOTE">(Or it's the arbitrator calling... in the event there was a dispute)</field>
                    <next>
                      <block type="LLL_when" id="153" inline="false">
                        <field name="WORD">when</field>
                        <value name="COND">
                          <block type="LLL_logic" id="154" inline="false">
                            <field name="OP">or</field>
                            <value name="A">
                              <block type="LLL_compare" id="155" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_contract" id="156">
                                    <field name="PROP">caller</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_load" id="157" inline="true">
                                    <field name="POOL">sload</field>
                                    <value name="SPOT">
                                      <block type="LLL_val" id="158">
                                        <field name="VAL">ARBITRATOR</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_compare" id="159" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_contract" id="160">
                                    <field name="PROP">caller</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_load" id="161" inline="true">
                                    <field name="POOL">sload</field>
                                    <value name="SPOT">
                                      <block type="LLL_val" id="162">
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
                          <block type="LLL_comment" id="163">
                            <field name="NOTE">label the calculation for elapsed policy months</field>
                            <next>
                              <block type="LLL_mstore" id="164" inline="true">
                                <field name="SPOT">POLICY_MONTHS</field>
                                <value name="VAL">
                                  <block type="LLL_math" id="165" inline="true">
                                    <field name="OP">div</field>
                                    <value name="A">
                                      <block type="LLL_math" id="166" inline="true">
                                        <field name="OP">-</field>
                                        <value name="A">
                                          <block type="LLL_blockinfo" id="167">
                                            <field name="PROP">timestamp</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_load" id="168" inline="true">
                                            <field name="POOL">sload</field>
                                            <value name="SPOT">
                                              <block type="LLL_val" id="169">
                                                <field name="VAL">START_DATE</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="LLL_val" id="170">
                                        <field name="VAL">2628000</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <next>
                                  <block type="LLL_comment" id="171">
                                    <field name="NOTE">when the received premiums have equaled the required premium, the policy is paid up, so pay claim</field>
                                    <next>
                                      <block type="LLL_when" id="172" inline="false">
                                        <field name="WORD">when</field>
                                        <value name="COND">
                                          <block type="LLL_compare" id="173" inline="false">
                                            <field name="OP">&gt;=</field>
                                            <value name="A">
                                              <block type="LLL_math" id="174" inline="true">
                                                <field name="OP">div</field>
                                                <value name="A">
                                                  <block type="LLL_load" id="175" inline="true">
                                                    <field name="POOL">sload</field>
                                                    <value name="SPOT">
                                                      <block type="LLL_val" id="176">
                                                        <field name="VAL">CUSTOMER_BALANCE</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_mval" id="177">
                                                    <field name="VAL">POLICY_MONTHS</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_load" id="178" inline="true">
                                                <field name="POOL">sload</field>
                                                <value name="SPOT">
                                                  <block type="LLL_val" id="179">
                                                    <field name="VAL">MONTHLY_PREMIUM</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="THEN">
                                          <block type="LLL_spend" id="180" inline="true">
                                            <value name="MONEY">
                                              <block type="LLL_load" id="181" inline="true">
                                                <field name="POOL">_input_load_slots</field>
                                                <value name="SPOT">
                                                  <block type="LLL_val" id="182">
                                                    <field name="VAL">0</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="TO">
                                              <block type="LLL_load" id="183" inline="true">
                                                <field name="POOL">sload</field>
                                                <value name="SPOT">
                                                  <block type="LLL_val" id="184">
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
</xml>
*/}),

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
                <field name="SPOT">ADMIN</field>
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
            <field name="SPOT">VOTED_ITEM</field>
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
                            <field name="POOL">sload</field>
                            <value name="SPOT">
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
                            <field name="POOL">sstore</field>
                            <value name="SPOT">
                              <block type="LLL_mval" id="326">
                                <field name="VAL">VOTED_ITEM</field>
                              </block>
                            </value>
                            <value name="VAL">
                              <block type="LLL_math" id="327" inline="true">
                                <field name="OP">+</field>
                                <value name="A">
                                  <block type="LLL_load" id="328" inline="true">
                                    <field name="POOL">sload</field>
                                    <value name="SPOT">
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
                                    <field name="POOL">sstore</field>
                                    <value name="SPOT">
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
  <block type="LLL_comment" id="48" x="37" y="15">
    <field name="NOTE">"Swear Jar" - An informal method among groups to self-discourage bad behavior</field>
    <next>
      <block type="LLL_comment" id="49">
        <field name="NOTE">(swearing, being late for meetings, smoking, missing a workout, etc.)</field>
        <next>
          <block type="LLL_comment" id="50">
            <field name="NOTE">Members voluntarily pay in for each infraction &amp; the best-behaved gets the pot each month</field>
            <next>
              <block type="LLL_mstore" id="51" inline="true">
                <field name="SPOT">CALLER_TOTAL</field>
                <value name="VAL">
                  <block type="LLL_load" id="52" inline="true">
                    <field name="POOL">sload</field>
                    <value name="SPOT">
                      <block type="LLL_contract" id="53">
                        <field name="PROP">caller</field>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="LLL_comment" id="54">
                    <field name="NOTE">First add this caller to the participant list if they are new and give them a minimal total</field>
                    <next>
                      <block type="LLL_when" id="55" inline="false">
                        <field name="WORD">when</field>
                        <value name="COND">
                          <block type="LLL_compare" id="56" inline="true">
                            <field name="OP">=</field>
                            <value name="A">
                              <block type="LLL_mval" id="57">
                                <field name="VAL">CALLER_TOTAL</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_val" id="58">
                                <field name="VAL">0</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="THEN">
                          <block type="LLL_store" id="59" inline="true">
                            <field name="POOL">sstore</field>
                            <value name="SPOT">
                              <block type="LLL_sval" id="60">
                                <field name="VAL">NEXT_MEMBER_SPOT</field>
                              </block>
                            </value>
                            <value name="VAL">
                              <block type="LLL_contract" id="61">
                                <field name="PROP">caller</field>
                              </block>
                            </value>
                            <next>
                              <block type="LLL_sstore" id="62" inline="true">
                                <field name="SPOT">NEXT_MEMBER_SPOT</field>
                                <value name="VAL">
                                  <block type="LLL_math" id="63" inline="true">
                                    <field name="OP">+</field>
                                    <value name="A">
                                      <block type="LLL_sval" id="64">
                                        <field name="VAL">NEXT_MEMBER_SPOT</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="LLL_val" id="65">
                                        <field name="VAL">1</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <next>
                                  <block type="LLL_store" id="66" inline="true">
                                    <field name="POOL">sstore</field>
                                    <value name="SPOT">
                                      <block type="LLL_contract" id="67">
                                        <field name="PROP">caller</field>
                                      </block>
                                    </value>
                                    <value name="VAL">
                                      <block type="LLL_currency" id="68" inline="true">
                                        <field name="DENOM">wei</field>
                                        <value name="AMT">
                                          <block type="LLL_val" id="69">
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
                          <block type="LLL_comment" id="70">
                            <field name="NOTE">Next update their infraction total for the world to see (social pressure)</field>
                            <next>
                              <block type="LLL_store" id="71" inline="true">
                                <field name="POOL">sstore</field>
                                <value name="SPOT">
                                  <block type="LLL_contract" id="72">
                                    <field name="PROP">caller</field>
                                  </block>
                                </value>
                                <value name="VAL">
                                  <block type="LLL_math" id="73" inline="true">
                                    <field name="OP">+</field>
                                    <value name="A">
                                      <block type="LLL_mval" id="74">
                                        <field name="VAL">CALLER_TOTAL</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="LLL_tx" id="75">
                                        <field name="PROP">callvalue</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <next>
                                  <block type="LLL_comment" id="76">
                                    <field name="NOTE">If it's a month (2592000 seconds) since the last time, find the best-behaved member to pay off </field>
                                    <next>
                                      <block type="LLL_when" id="77" inline="false">
                                        <field name="WORD">when</field>
                                        <value name="COND">
                                          <block type="LLL_compare" id="78" inline="true">
                                            <field name="OP">&lt;</field>
                                            <value name="A">
                                              <block type="LLL_sval" id="79">
                                                <field name="VAL">LAST_EMPTY_TIME</field>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_math" id="80" inline="true">
                                                <field name="OP">-</field>
                                                <value name="A">
                                                  <block type="LLL_blockinfo" id="81">
                                                    <field name="PROP">timestamp</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_val" id="82">
                                                    <field name="VAL">2592000</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="THEN">
                                          <block type="LLL_sstore" id="83" inline="true">
                                            <field name="SPOT">LAST_EMPTY_TIME</field>
                                            <value name="VAL">
                                              <block type="LLL_blockinfo" id="84">
                                                <field name="PROP">timestamp</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="LLL_comment" id="85">
                                                <field name="NOTE">Initialize the "best total" to something terribly high. (We'll see why later)</field>
                                                <next>
                                                  <block type="LLL_mstore" id="86" inline="true">
                                                    <field name="SPOT">BEST_TOTAL</field>
                                                    <value name="VAL">
                                                      <block type="LLL_currency" id="87" inline="true">
                                                        <field name="DENOM">ether</field>
                                                        <value name="AMT">
                                                          <block type="LLL_val" id="88">
                                                            <field name="VAL">99999999999</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="LLL_comment" id="89">
                                                        <field name="NOTE">Loop through members looking for the best behaved (the one with the lowest total)</field>
                                                        <next>
                                                          <block type="LLL_whileloop" id="90" inline="false">
                                                            <field name="WORD">WHILE</field>
                                                            <value name="COND">
                                                              <block type="LLL_compare" id="91" inline="true">
                                                                <field name="OP">&lt;</field>
                                                                <value name="A">
                                                                  <block type="LLL_mval" id="92">
                                                                    <field name="VAL">i</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_sval" id="93">
                                                                    <field name="VAL">NEXT_MEMBER_SPOT</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <statement name="DO">
                                                              <block type="LLL_mstore" id="94" inline="true">
                                                                <field name="SPOT">ONE_MEMBER</field>
                                                                <value name="VAL">
                                                                  <block type="LLL_load" id="95" inline="true">
                                                                    <field name="POOL">sload</field>
                                                                    <value name="SPOT">
                                                                      <block type="LLL_mval" id="96">
                                                                        <field name="VAL">i</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <next>
                                                                  <block type="LLL_mstore" id="97" inline="true">
                                                                    <field name="SPOT">ONE_MEMBER_TOTAL</field>
                                                                    <value name="VAL">
                                                                      <block type="LLL_load" id="98" inline="true">
                                                                        <field name="POOL">sload</field>
                                                                        <value name="SPOT">
                                                                          <block type="LLL_mval" id="99">
                                                                            <field name="VAL">ONE_MEMBER</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                    <next>
                                                                      <block type="LLL_when" id="100" inline="false">
                                                                        <field name="WORD">when</field>
                                                                        <value name="COND">
                                                                          <block type="LLL_compare" id="101" inline="true">
                                                                            <field name="OP">&lt;</field>
                                                                            <value name="A">
                                                                              <block type="LLL_mval" id="102">
                                                                                <field name="VAL">ONE_MEMBER_TOTAL</field>
                                                                              </block>
                                                                            </value>
                                                                            <value name="B">
                                                                              <block type="LLL_mval" id="103">
                                                                                <field name="VAL">BEST_TOTAL</field>
                                                                              </block>
                                                                            </value>
                                                                          </block>
                                                                        </value>
                                                                        <statement name="THEN">
                                                                          <block type="LLL_comment" id="104">
                                                                            <field name="NOTE">Label the best one so far. (Early registration breaks a tie)</field>
                                                                            <next>
                                                                              <block type="LLL_mstore" id="105" inline="true">
                                                                                <field name="SPOT">BEST_MEMBER</field>
                                                                                <value name="VAL">
                                                                                  <block type="LLL_mval" id="106">
                                                                                    <field name="VAL">ONE_MEMBER</field>
                                                                                  </block>
                                                                                </value>
                                                                                <next>
                                                                                  <block type="LLL_mstore" id="107" inline="true">
                                                                                    <field name="SPOT">BEST_TOTAL</field>
                                                                                    <value name="VAL">
                                                                                      <block type="LLL_mval" id="108">
                                                                                        <field name="VAL">ONE_MEMBER_TOTAL</field>
                                                                                      </block>
                                                                                    </value>
                                                                                    <next>
                                                                                      <block type="LLL_comment" id="109">
                                                                                        <field name="NOTE">Reset each score to the minimum for the coming  month</field>
                                                                                        <next>
                                                                                          <block type="LLL_store" id="110" inline="true">
                                                                                            <field name="POOL">sstore</field>
                                                                                            <value name="SPOT">
                                                                                              <block type="LLL_mval" id="111">
                                                                                                <field name="VAL">ONE_MEMBER</field>
                                                                                              </block>
                                                                                            </value>
                                                                                            <value name="VAL">
                                                                                              <block type="LLL_currency" id="112" inline="true">
                                                                                                <field name="DENOM">wei</field>
                                                                                                <value name="AMT">
                                                                                                  <block type="LLL_val" id="113">
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
                                                                          <block type="LLL_mstore" id="114" inline="true">
                                                                            <field name="SPOT">i</field>
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
                                                                        </next>
                                                                      </block>
                                                                    </next>
                                                                  </block>
                                                                </next>
                                                              </block>
                                                            </statement>
                                                            <next>
                                                              <block type="LLL_spend" id="118" inline="true">
                                                                <value name="MONEY">
                                                                  <block type="LLL_mval" id="119">
                                                                    <field name="VAL">BEST_MEMBER</field>
                                                                  </block>
                                                                </value>
                                                                <value name="TO">
                                                                  <block type="LLL_contract" id="120">
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
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>
*/})

}