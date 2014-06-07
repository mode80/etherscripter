function fnCommentToString(f) {
  // a super hacky workaround to get multiline strings in JS
  // takes a function and returns the innars /*! delimited thus */ as a big string 
  return f.toString().
      replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');
}

window.samples = {

random: fnCommentToString(function(){/*! 
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="INIT" id="166" x="11" y="87">
    <statement name="INIT">
      <block type="COMMENT" id="47">
        <field name="NOTE">A utility contract that returns a pseudo-random number in a given range</field>
        <next>
          <block type="COMMENT" id="48">
            <field name="NOTE">1st input is the lower bound of the range, inclusive</field>
            <next>
              <block type="COMMENT" id="49">
                <field name="NOTE">2nd input is the upper bound of the range, inclusive</field>
                <next>
                  <block type="COMMENT" id="50">
                    <field name="NOTE">optional 3rd input is used as a seed for random number generation</field>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
    <statement name="BODY">
      <block type="MSTORE" id="51" inline="true">
        <field name="SPOT">lower_bound</field>
        <value name="VAL">
          <block type="INPUT" id="52">
            <field name="INDEX">0</field>
          </block>
        </value>
        <next>
          <block type="MSTORE" id="53" inline="true">
            <field name="SPOT">upper_bound</field>
            <value name="VAL">
              <block type="INPUT" id="54">
                <field name="INDEX">1</field>
              </block>
            </value>
            <next>
              <block type="MSTORE" id="55" inline="true">
                <field name="SPOT">seed</field>
                <value name="VAL">
                  <block type="INPUT" id="56">
                    <field name="INDEX">2</field>
                  </block>
                </value>
                <next>
                  <block type="MSTORE" id="57" inline="false">
                    <field name="SPOT">range</field>
                    <value name="VAL">
                      <block type="MATH" id="58" inline="true">
                        <field name="OP">+</field>
                        <value name="A">
                          <block type="MATH" id="59" inline="true">
                            <field name="OP">-</field>
                            <value name="A">
                              <block type="MVAL" id="60">
                                <field name="SPOT">upper_bound</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="MVAL" id="61">
                                <field name="SPOT">lower_bound</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="VAL" id="62">
                            <field name="VAL">1</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="RESERVE" id="63" inline="true">
                        <value name="LEN">
                          <block type="VAL" id="64">
                            <field name="VAL">3</field>
                          </block>
                        </value>
                        <next>
                          <block type="STORE" id="65" inline="true">
                            <field name="POOL">mstore</field>
                            <value name="SPOT">
                              <block type="VAL" id="66">
                                <field name="VAL">1</field>
                              </block>
                            </value>
                            <value name="VAL">
                              <block type="BLOCKINFO" id="67">
                                <field name="PROP">prevhash</field>
                              </block>
                            </value>
                            <next>
                              <block type="STORE" id="68" inline="true">
                                <field name="POOL">mstore</field>
                                <value name="SPOT">
                                  <block type="VAL" id="69">
                                    <field name="VAL">2</field>
                                  </block>
                                </value>
                                <value name="VAL">
                                  <block type="MVAL" id="70">
                                    <field name="SPOT">seed</field>
                                  </block>
                                </value>
                                <next>
                                  <block type="MSTORE" id="71" inline="false">
                                    <field name="SPOT">randomness</field>
                                    <value name="VAL">
                                      <block type="HASH" id="72" inline="false">
                                        <value name="DATA_START">
                                          <block type="VAL" id="73">
                                            <field name="VAL">1</field>
                                          </block>
                                        </value>
                                        <value name="DATA_LEN">
                                          <block type="VAL" id="74">
                                            <field name="VAL">2</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="MSTORE" id="161" inline="true">
                                        <field name="SPOT">result</field>
                                        <value name="VAL">
                                          <block type="MATH" id="167" inline="true">
                                            <field name="OP">+</field>
                                            <value name="A">
                                              <block type="MVAL" id="168">
                                                <field name="SPOT">lower_bound</field>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="MATH" id="163" inline="true">
                                                <field name="OP">mod</field>
                                                <value name="A">
                                                  <block type="MVAL" id="164">
                                                    <field name="SPOT">randomness</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="MVAL" id="165">
                                                    <field name="SPOT">range</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="STORE" id="75" inline="true">
                                            <field name="POOL">mstore</field>
                                            <value name="SPOT">
                                              <block type="VAL" id="76">
                                                <field name="VAL">3</field>
                                              </block>
                                            </value>
                                            <value name="VAL">
                                              <block type="MVAL" id="77">
                                                <field name="SPOT">result</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="RETURN" id="78" inline="false">
                                                <value name="DATA_START">
                                                  <block type="VAL" id="79">
                                                    <field name="VAL">3</field>
                                                  </block>
                                                </value>
                                                <value name="DATA_LEN">
                                                  <block type="VAL" id="80">
                                                    <field name="VAL">1</field>
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
    </statement>
  </block>
</xml>
*/}),

mitch_jack_bet: fnCommentToString(function(){/*! 
<xml>
  <block type="INIT" id="79" x="18" y="19">
    <statement name="INIT">
      <block type="COMMENT" id="80">
        <field name="NOTE">Simple Bet v2</field>
        <next>
          <block type="COMMENT" id="81">
            <field name="NOTE">Mitch bets Jack that BTC will be over $2000 by Dec 5, 2014</field>
            <next>
              <block type="COMMENT" id="82">
                <field name="NOTE">This "init" code runs one time only when the contract is first created</field>
                <next>
                  <block type="COMMENT" id="83">
                    <field name="NOTE">These addresses are fake but you can see the format</field>
                    <next>
                      <block type="STORE" id="84" inline="true">
                        <field name="POOL">sstore</field>
                        <value name="SPOT">
                          <block type="VAL" id="85">
                            <field name="VAL">Mitch</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="VAL" id="86">
                            <field name="VAL">0xf4b7cc7faa866a2275972317598e7d936cfc9adc</field>
                          </block>
                        </value>
                        <next>
                          <block type="STORE" id="87" inline="true">
                            <field name="POOL">sstore</field>
                            <value name="SPOT">
                              <block type="VAL" id="88">
                                <field name="VAL">Jack</field>
                              </block>
                            </value>
                            <value name="VAL">
                              <block type="VAL" id="89">
                                <field name="VAL">0x52c5535efae9bd86e04c627aa5c716a392358c5e</field>
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
      <block type="COMMENT" id="90">
        <field name="NOTE">Grabbing outside data like the BTC price will be available eventually...</field>
        <next>
          <block type="COMMENT" id="91">
            <field name="NOTE">...by asking a "data feed" contract once the ecosystem evolves.</field>
            <next>
              <block type="COMMENT" id="92">
                <field name="NOTE">Until then, we can take the data supplied to the contract as the BTC price.</field>
                <next>
                  <block type="COMMENT" id="93">
                    <field name="NOTE">We use a temp slot here since we don't need to store it between runs.</field>
                    <next>
                      <block type="STORE" id="94" inline="true">
                        <field name="POOL">mstore</field>
                        <value name="SPOT">
                          <block type="VAL" id="95">
                            <field name="VAL">BTC</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="INPUT" id="96">
                            <field name="INDEX">0</field>
                          </block>
                        </value>
                        <next>
                          <block type="COMMENT" id="97">
                            <field name="NOTE">We can use an 'OR' block here to avoid duplicating the code for each person</field>
                            <next>
                              <block type="WHEN" id="98" inline="false">
                                <field name="WORD">when</field>
                                <value name="COND">
                                  <block type="LOGIC" id="99" inline="false">
                                    <field name="OP">or</field>
                                    <value name="A">
                                      <block type="COMPARE" id="100" inline="true">
                                        <field name="OP">=</field>
                                        <value name="A">
                                          <block type="CONTRACT" id="101">
                                            <field name="PROP">caller</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LOAD" id="102" inline="true">
                                            <field name="POOL">sload</field>
                                            <value name="SPOT">
                                              <block type="VAL" id="103">
                                                <field name="VAL">Mitch</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="COMPARE" id="104" inline="true">
                                        <field name="OP">=</field>
                                        <value name="A">
                                          <block type="CONTRACT" id="105">
                                            <field name="PROP">caller</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LOAD" id="106" inline="true">
                                            <field name="POOL">sload</field>
                                            <value name="SPOT">
                                              <block type="VAL" id="107">
                                                <field name="VAL">Jack</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="THEN">
                                  <block type="COMMENT" id="108">
                                    <field name="NOTE">block.timestamp will be seconds elapsed since 1970 GMT.</field>
                                    <next>
                                      <block type="COMMENT" id="109">
                                        <field name="NOTE">So for 12/04/2015 that's 1449187200 </field>
                                        <next>
                                          <block type="WHEN" id="110" inline="false">
                                            <field name="WORD">when</field>
                                            <value name="COND">
                                              <block type="COMPARE" id="111" inline="true">
                                                <field name="OP">&gt;</field>
                                                <value name="A">
                                                  <block type="BLOCKINFO" id="112">
                                                    <field name="PROP">timestamp</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="VAL" id="113">
                                                    <field name="VAL">1449187200</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="THEN">
                                              <block type="IF" id="114" inline="false">
                                                <value name="COND">
                                                  <block type="COMPARE" id="115" inline="true">
                                                    <field name="OP">&gt;</field>
                                                    <value name="A">
                                                      <block type="LOAD" id="116" inline="true">
                                                        <field name="POOL">mload</field>
                                                        <value name="SPOT">
                                                          <block type="VAL" id="117">
                                                            <field name="VAL">BTC</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="VAL" id="118">
                                                        <field name="VAL">2000</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="THEN">
                                                  <block type="COMMENT" id="119">
                                                    <field name="NOTE">If BTC is over 2000 pay off Mitch</field>
                                                    <next>
                                                      <block type="SPEND" id="120" inline="true">
                                                        <value name="AMOUNT">
                                                          <block type="CONTRACT" id="121">
                                                            <field name="PROP">balance</field>
                                                          </block>
                                                        </value>
                                                        <value name="TO">
                                                          <block type="LOAD" id="122" inline="true">
                                                            <field name="POOL">sload</field>
                                                            <value name="SPOT">
                                                              <block type="VAL" id="123">
                                                                <field name="VAL">Mitch</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </statement>
                                                <statement name="ELSE">
                                                  <block type="COMMENT" id="124">
                                                    <field name="NOTE">Otherwise it must not be over 2000 so pay off Jack</field>
                                                    <next>
                                                      <block type="SPEND" id="125" inline="true">
                                                        <value name="AMOUNT">
                                                          <block type="CONTRACT" id="126">
                                                            <field name="PROP">balance</field>
                                                          </block>
                                                        </value>
                                                        <value name="TO">
                                                          <block type="LOAD" id="127" inline="true">
                                                            <field name="POOL">sload</field>
                                                            <value name="SPOT">
                                                              <block type="VAL" id="128">
                                                                <field name="VAL">Jack</field>
                                                              </block>
                                                            </value>
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
                                </statement>
                                <next>
                                  <block type="COMMENT" id="129">
                                    <field name="NOTE">We don't need explicit "stop" blocks since contract will stop when it reaches the end.</field>
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

coin_flip: fnCommentToString(function(){/*! 
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="INIT" id="501" x="34" y="40">
    <statement name="INIT">
      <block type="COMMENT" id="502">
        <field name="NOTE">Coin flipping smart contract</field>
      </block>
    </statement>
    <statement name="BODY">
      <block type="COMMENT" id="503">
        <field name="NOTE">When the time in seconds is even, consider it a winning flip</field>
        <next>
          <block type="WHEN" id="504" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="COMPARE" id="505" inline="true">
                <field name="OP">=</field>
                <value name="A">
                  <block type="MATH" id="506" inline="true">
                    <field name="OP">mod</field>
                    <value name="A">
                      <block type="BLOCKINFO" id="507">
                        <field name="PROP">timestamp</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="VAL" id="508">
                        <field name="VAL">2</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="B">
                  <block type="VAL" id="509">
                    <field name="VAL">0</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="COMMENT" id="510">
                <field name="NOTE">On a winning flip, the sender gets double their money back</field>
                <next>
                  <block type="SPEND" id="511" inline="true">
                    <value name="AMOUNT">
                      <block type="MATH" id="512" inline="true">
                        <field name="OP">*</field>
                        <value name="A">
                          <block type="TX" id="513">
                            <field name="PROP">callvalue</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="VAL" id="514">
                            <field name="VAL">2</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="TO">
                      <block type="TX" id="515">
                        <field name="PROP">origin</field>
                      </block>
                    </value>
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

sales: fnCommentToString(function(){/*! 
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="INIT" id="113" x="52" y="55">
    <statement name="INIT">
      <block type="COMMENT" id="80">
        <field name="NOTE">*** An Ethereum smart contract to sell a website for "5000 by March"</field>
        <next>
          <block type="COMMENT" id="81">
            <field name="NOTE">First, store buyer's ethereum address:</field>
            <next>
              <block type="STORE" id="82" inline="true">
                <field name="POOL">sstore</field>
                <value name="SPOT">
                  <block type="VAL" id="154">
                    <field name="VAL">BUYER</field>
                  </block>
                </value>
                <value name="VAL">
                  <block type="VAL" id="83">
                    <field name="VAL">0x6af26739b9ffef8aa2985252e5357fde</field>
                  </block>
                </value>
                <next>
                  <block type="COMMENT" id="85">
                    <field name="NOTE">Then, store seller's ethereum address:</field>
                    <next>
                      <block type="STORE" id="86" inline="true">
                        <field name="POOL">sstore</field>
                        <value name="SPOT">
                          <block type="VAL" id="151">
                            <field name="VAL">SELLER</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="VAL" id="87">
                            <field name="VAL">0xfeab802c014588f08bfee2741086c375</field>
                          </block>
                        </value>
                        <next>
                          <block type="COMMENT" id="89">
                            <field name="NOTE">April 1, 2014 is 1396310400 in "computer time"</field>
                            <next>
                              <block type="STORE" id="90" inline="true">
                                <field name="POOL">sstore</field>
                                <value name="SPOT">
                                  <block type="VAL" id="152">
                                    <field name="VAL">DEADLINE</field>
                                  </block>
                                </value>
                                <value name="VAL">
                                  <block type="VAL" id="91">
                                    <field name="VAL">1396310400</field>
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
    </statement>
    <statement name="BODY">
      <block type="COMMENT" id="93">
        <field name="NOTE">If the agreed amount is received on time...</field>
        <next>
          <block type="WHEN" id="94" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LOGIC" id="95" inline="false">
                <field name="OP">and</field>
                <value name="A">
                  <block type="COMPARE" id="96" inline="true">
                    <field name="OP">&gt;=</field>
                    <value name="A">
                      <block type="CONTRACT" id="114">
                        <field name="PROP">balance</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="CURRENCY" id="98" inline="true">
                        <field name="DENOM">ether</field>
                        <value name="AMT">
                          <block type="VAL" id="99">
                            <field name="VAL">5000</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="B">
                  <block type="COMPARE" id="100" inline="true">
                    <field name="OP">&lt;=</field>
                    <value name="A">
                      <block type="BLOCKINFO" id="101">
                        <field name="PROP">timestamp</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LOAD" id="102" inline="true">
                        <field name="POOL">sload</field>
                        <value name="SPOT">
                          <block type="VAL" id="153">
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
              <block type="COMMENT" id="104">
                <field name="NOTE">... then designate the buyer as the new website admin and pay the seller</field>
                <next>
                  <block type="STORE" id="105" inline="true">
                    <field name="POOL">sstore</field>
                    <value name="SPOT">
                      <block type="VAL" id="149">
                        <field name="VAL">WEBSITE_ADMIN</field>
                      </block>
                    </value>
                    <value name="VAL">
                      <block type="LOAD" id="106" inline="true">
                        <field name="POOL">sload</field>
                        <value name="SPOT">
                          <block type="VAL" id="150">
                            <field name="VAL">BUYER</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="SPEND" id="109" inline="true">
                        <value name="AMOUNT">
                          <block type="CONTRACT" id="110">
                            <field name="PROP">balance</field>
                          </block>
                        </value>
                        <value name="TO">
                          <block type="LOAD" id="111" inline="true">
                            <field name="POOL">sload</field>
                            <value name="SPOT">
                              <block type="VAL" id="155">
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
    </statement>
  </block>
</xml>
*/}),

last_will: fnCommentToString(function(){/*! 
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="COMMENT" id="52" x="18" y="15">
    <field name="NOTE">Last Will &amp; Testament using a "dead-man's-switch"</field>
    <next>
      <block type="COMMENT" id="53">
        <field name="NOTE">If the contract isn't touched by the creator at least once per month, he's dead</field>
        <next>
          <block type="COMMENT" id="54">
            <field name="NOTE">Therefore, split all funds among the heirs</field>
          </block>
        </next>
      </block>
    </next>
  </block>
  <block type="INIT" id="55" x="18" y="92">
    <statement name="INIT">
      <block type="COMMENT" id="56">
        <field name="NOTE">On contract creation, record the creator</field>
        <next>
          <block type="STORE" id="57" inline="true">
            <field name="POOL">sstore</field>
            <value name="SPOT">
              <block type="VAL" id="58">
                <field name="VAL">CREATOR</field>
              </block>
            </value>
            <value name="VAL">
              <block type="TX" id="59">
                <field name="PROP">origin</field>
              </block>
            </value>
          </block>
        </next>
      </block>
    </statement>
    <statement name="BODY">
      <block type="COMMENT" id="60">
        <field name="NOTE">A future transaction received from the creator does three things: </field>
        <next>
          <block type="COMMENT" id="61">
            <field name="NOTE">    1) It's proves he's alive and supresses distribution for another 30 days</field>
            <next>
              <block type="COMMENT" id="62">
                <field name="NOTE">    2) It naturally increases the contract's balance by the amount of the transaction value</field>
                <next>
                  <block type="COMMENT" id="63">
                    <field name="NOTE">    3) It optionally supplies a new list of heirs</field>
                    <next>
                      <block type="IF" id="64" inline="false">
                        <value name="COND">
                          <block type="COMPARE" id="65" inline="true">
                            <field name="OP">=</field>
                            <value name="A">
                              <block type="TX" id="66">
                                <field name="PROP">origin</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LOAD" id="67" inline="true">
                                <field name="POOL">sload</field>
                                <value name="SPOT">
                                  <block type="VAL" id="68">
                                    <field name="VAL">CREATOR</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="THEN">
                          <block type="COMMENT" id="69">
                            <field name="NOTE">Here we record the time of this touch by the creator. He's still alive.</field>
                            <next>
                              <block type="STORE" id="70" inline="true">
                                <field name="POOL">sstore</field>
                                <value name="SPOT">
                                  <block type="VAL" id="71">
                                    <field name="VAL">LAST_TOUCH</field>
                                  </block>
                                </value>
                                <value name="VAL">
                                  <block type="BLOCKINFO" id="72">
                                    <field name="PROP">timestamp</field>
                                  </block>
                                </value>
                                <next>
                                  <block type="WHEN" id="73" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="COMPARE" id="74" inline="true">
                                        <field name="OP">&gt;</field>
                                        <value name="A">
                                          <block type="CONTRACT" id="146">
                                            <field name="PROP">_input_count</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="VAL" id="76">
                                            <field name="VAL">0</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="THEN">
                                      <block type="COMMENT" id="77">
                                        <field name="NOTE">The creator defines heirs by supplying their payment addresses as (padded 32-byte) inputs to the contract</field>
                                        <next>
                                          <block type="COMMENT" id="78">
                                            <field name="NOTE">He can change these by supplying a new set of addresses which replaces all of the old set</field>
                                            <next>
                                              <block type="WHILELOOP" id="79" inline="false">
                                                <field name="WORD">WHILE</field>
                                                <value name="COND">
                                                  <block type="COMPARE" id="80" inline="true">
                                                    <field name="OP">&lt;=</field>
                                                    <value name="A">
                                                      <block type="MVAL" id="81">
                                                        <field name="SPOT">i</field>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="CONTRACT" id="149">
                                                        <field name="PROP">_input_count</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO">
                                                  <block type="COMMENT" id="83">
                                                    <field name="NOTE">each heir will be recorded for future reference in the storage range 1000+</field>
                                                    <next>
                                                      <block type="MSTORE" id="92" inline="true">
                                                        <field name="SPOT">i</field>
                                                        <value name="VAL">
                                                          <block type="MATH" id="93" inline="true">
                                                            <field name="OP">+</field>
                                                            <value name="A">
                                                              <block type="MVAL" id="94">
                                                                <field name="SPOT">i</field>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="VAL" id="95">
                                                                <field name="VAL">1</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="STORE" id="84" inline="true">
                                                            <field name="POOL">sstore</field>
                                                            <value name="SPOT">
                                                              <block type="MATH" id="85" inline="true">
                                                                <field name="OP">+</field>
                                                                <value name="A">
                                                                  <block type="VAL" id="86">
                                                                    <field name="VAL">1000</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="MVAL" id="87">
                                                                    <field name="SPOT">i</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="VAL">
                                                              <block type="THINPUT" id="147" inline="true">
                                                                <value name="ORDINAL">
                                                                  <block type="MVAL" id="148">
                                                                    <field name="SPOT">i</field>
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
                                                  <block type="WHILELOOP" id="96" inline="false">
                                                    <field name="WORD">WHILE</field>
                                                    <value name="COND">
                                                      <block type="COMPARE" id="97" inline="true">
                                                        <field name="OP">&lt;=</field>
                                                        <value name="A">
                                                          <block type="MVAL" id="98">
                                                            <field name="SPOT">i</field>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="LOAD" id="99" inline="true">
                                                            <field name="POOL">sload</field>
                                                            <value name="SPOT">
                                                              <block type="VAL" id="100">
                                                                <field name="VAL">HEIR_COUNT</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO">
                                                      <block type="COMMENT" id="101">
                                                        <field name="NOTE">any extra former heirs are removed</field>
                                                        <next>
                                                          <block type="MSTORE" id="107" inline="true">
                                                            <field name="SPOT">i</field>
                                                            <value name="VAL">
                                                              <block type="MATH" id="108" inline="true">
                                                                <field name="OP">+</field>
                                                                <value name="A">
                                                                  <block type="MVAL" id="109">
                                                                    <field name="SPOT">i</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="VAL" id="110">
                                                                    <field name="VAL">1</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="STORE" id="102" inline="true">
                                                                <field name="POOL">sstore</field>
                                                                <value name="SPOT">
                                                                  <block type="MATH" id="103" inline="true">
                                                                    <field name="OP">+</field>
                                                                    <value name="A">
                                                                      <block type="VAL" id="104">
                                                                        <field name="VAL">1000</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="MVAL" id="105">
                                                                        <field name="SPOT">i</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="VAL">
                                                                  <block type="VAL" id="106">
                                                                    <field name="VAL">0</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </next>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <next>
                                                      <block type="COMMENT" id="111">
                                                        <field name="NOTE">remember how many heirs we have for later</field>
                                                        <next>
                                                          <block type="STORE" id="112" inline="true">
                                                            <field name="POOL">sstore</field>
                                                            <value name="SPOT">
                                                              <block type="VAL" id="113">
                                                                <field name="VAL">HEIR_COUNT</field>
                                                              </block>
                                                            </value>
                                                            <value name="VAL">
                                                              <block type="CONTRACT" id="150">
                                                                <field name="PROP">_input_count</field>
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
                          <block type="COMMENT" id="115">
                            <field name="NOTE">A transaction received by anyone else triggers distribution to heirs if we haven't heard from the creator </field>
                            <next>
                              <block type="COMMENT" id="116">
                                <field name="NOTE">(there are 2,592,000 seconds in a month)</field>
                                <next>
                                  <block type="WHEN" id="117" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="COMPARE" id="118" inline="true">
                                        <field name="OP">&gt;</field>
                                        <value name="A">
                                          <block type="BLOCKINFO" id="119">
                                            <field name="PROP">timestamp</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="MATH" id="120" inline="true">
                                            <field name="OP">+</field>
                                            <value name="A">
                                              <block type="LOAD" id="121" inline="true">
                                                <field name="POOL">sload</field>
                                                <value name="SPOT">
                                                  <block type="VAL" id="122">
                                                    <field name="VAL">LAST_TOUCH</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="VAL" id="123">
                                                <field name="VAL">2592000</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="THEN">
                                      <block type="COMMENT" id="124">
                                        <field name="NOTE">calculate the equal portion for each heir</field>
                                        <next>
                                          <block type="MSTORE" id="125" inline="true">
                                            <field name="SPOT">PORTION</field>
                                            <value name="VAL">
                                              <block type="MATH" id="126" inline="true">
                                                <field name="OP">div</field>
                                                <value name="A">
                                                  <block type="CONTRACT" id="127">
                                                    <field name="PROP">balance</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LOAD" id="128" inline="true">
                                                    <field name="POOL">sload</field>
                                                    <value name="SPOT">
                                                      <block type="VAL" id="129">
                                                        <field name="VAL">HEIR_COUNT</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="COMMENT" id="130">
                                                <field name="NOTE">distribute the portions out to the heirs</field>
                                                <next>
                                                  <block type="WHILELOOP" id="131" inline="false">
                                                    <field name="WORD">WHILE</field>
                                                    <value name="COND">
                                                      <block type="COMPARE" id="132" inline="true">
                                                        <field name="OP">&lt;</field>
                                                        <value name="A">
                                                          <block type="MVAL" id="133">
                                                            <field name="SPOT">i</field>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="LOAD" id="134" inline="true">
                                                            <field name="POOL">sload</field>
                                                            <value name="SPOT">
                                                              <block type="VAL" id="135">
                                                                <field name="VAL">HEIR_COUNT</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO">
                                                      <block type="SPEND" id="136" inline="true">
                                                        <value name="AMOUNT">
                                                          <block type="MVAL" id="137">
                                                            <field name="SPOT">PORTION</field>
                                                          </block>
                                                        </value>
                                                        <value name="TO">
                                                          <block type="LOAD" id="138" inline="true">
                                                            <field name="POOL">sload</field>
                                                            <value name="SPOT">
                                                              <block type="MATH" id="139" inline="true">
                                                                <field name="OP">+</field>
                                                                <value name="A">
                                                                  <block type="VAL" id="140">
                                                                    <field name="VAL">1000</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="MVAL" id="141">
                                                                    <field name="SPOT">i</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="MSTORE" id="142" inline="true">
                                                            <field name="SPOT">i</field>
                                                            <value name="VAL">
                                                              <block type="MATH" id="143" inline="true">
                                                                <field name="OP">+</field>
                                                                <value name="A">
                                                                  <block type="MVAL" id="144">
                                                                    <field name="SPOT">i</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="VAL" id="145">
                                                                    <field name="VAL">1</field>
                                                                  </block>
                                                                </value>
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

marriage: fnCommentToString(function(){/*! 
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="INIT" id="290" x="9" y="12">
    <statement name="INIT">
      <block type="COMMENT" id="291">
        <field name="NOTE">"I WANT HALF!" Marriage Smart Contract [based on the idea by @mids106 et al]</field>
        <next>
          <block type="COMMENT" id="292">
            <field name="NOTE">At contract creation, we store the sender as partner_1 with partner_2 given as the 1st data item</field>
            <next>
              <block type="STORE" id="293" inline="true">
                <field name="POOL">sstore</field>
                <value name="SPOT">
                  <block type="VAL" id="294">
                    <field name="VAL">PARTNER_1</field>
                  </block>
                </value>
                <value name="VAL">
                  <block type="TX" id="295">
                    <field name="PROP">sender</field>
                  </block>
                </value>
                <next>
                  <block type="STORE" id="296" inline="true">
                    <field name="POOL">sstore</field>
                    <value name="SPOT">
                      <block type="VAL" id="297">
                        <field name="VAL">PARTNER_2</field>
                      </block>
                    </value>
                    <value name="VAL">
                      <block type="INPUT" id="298">
                        <field name="INDEX">0</field>
                      </block>
                    </value>
                    <next>
                      <block type="STORE" id="299" inline="true">
                        <field name="POOL">sstore</field>
                        <value name="SPOT">
                          <block type="VAL" id="300">
                            <field name="VAL">STATE</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="VAL" id="301">
                            <field name="VAL">PROPOSED</field>
                          </block>
                        </value>
                        <next>
                          <block type="COMMENT" id="302">
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
        </next>
      </block>
    </statement>
    <statement name="BODY">
      <block type="WHEN" id="303" inline="false">
        <field name="WORD">when</field>
        <value name="COND">
          <block type="COMPARE" id="304" inline="true">
            <field name="OP">=</field>
            <value name="A">
              <block type="LOAD" id="305" inline="true">
                <field name="POOL">sload</field>
                <value name="SPOT">
                  <block type="VAL" id="306">
                    <field name="VAL">STATE</field>
                  </block>
                </value>
              </block>
            </value>
            <value name="B">
              <block type="VAL" id="307">
                <field name="VAL">PROPOSED</field>
              </block>
            </value>
          </block>
        </value>
        <statement name="THEN">
          <block type="COMMENT" id="308">
            <field name="NOTE"> Partner_2 can accept the proposal by sending in a transaction with partner_1 given as the first data item</field>
            <next>
              <block type="WHEN" id="309" inline="false">
                <field name="WORD">when</field>
                <value name="COND">
                  <block type="LOGIC" id="310" inline="false">
                    <field name="OP">and</field>
                    <value name="A">
                      <block type="COMPARE" id="311" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="TX" id="312">
                            <field name="PROP">origin</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="VAL" id="313">
                            <field name="VAL">PARTNER_2</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="B">
                      <block type="COMPARE" id="314" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="INPUT" id="315">
                            <field name="INDEX">0</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LOAD" id="316" inline="true">
                            <field name="POOL">sload</field>
                            <value name="SPOT">
                              <block type="VAL" id="317">
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
                  <block type="STORE" id="318" inline="true">
                    <field name="POOL">sstore</field>
                    <value name="SPOT">
                      <block type="VAL" id="319">
                        <field name="VAL">STATE</field>
                      </block>
                    </value>
                    <value name="VAL">
                      <block type="VAL" id="320">
                        <field name="VAL">MARRIED</field>
                      </block>
                    </value>
                  </block>
                </statement>
                <next>
                  <block type="COMMENT" id="321">
                    <field name="NOTE">Partner_1 and Partner_2 are now "MARRIED"!</field>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
        <next>
          <block type="WHEN" id="322" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LOGIC" id="323" inline="false">
                <field name="OP">and</field>
                <value name="A">
                  <block type="COMPARE" id="324" inline="true">
                    <field name="OP">=</field>
                    <value name="A">
                      <block type="LOAD" id="325" inline="true">
                        <field name="POOL">sload</field>
                        <value name="SPOT">
                          <block type="VAL" id="326">
                            <field name="VAL">STATE</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="B">
                      <block type="VAL" id="327">
                        <field name="VAL">MARRIED</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="B">
                  <block type="LOGIC" id="328" inline="false">
                    <field name="OP">or</field>
                    <value name="A">
                      <block type="COMPARE" id="329" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="TX" id="330">
                            <field name="PROP">origin</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="VAL" id="331">
                            <field name="VAL">PARTNER_1</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="B">
                      <block type="COMPARE" id="332" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="TX" id="333">
                            <field name="PROP">origin</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="VAL" id="334">
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
              <block type="COMMENT" id="335">
                <field name="NOTE">Once married, the contract is a "joint" account and each partner must send in the same instruction to make a withdraw</field>
                <next>
                  <block type="COMMENT" id="336">
                    <field name="NOTE">A valid withdrawal instruction is an incoming transaction where: </field>
                    <next>
                      <block type="COMMENT" id="337">
                        <field name="NOTE">1st input is the withdraw code, 2nd input is the destination address, and 3rd input is the amount</field>
                        <next>
                          <block type="WHEN" id="338" inline="false">
                            <field name="WORD">when</field>
                            <value name="COND">
                              <block type="COMPARE" id="339" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="INPUT" id="340">
                                    <field name="INDEX">0</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="VAL" id="341">
                                    <field name="VAL">WITHDRAW</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="THEN">
                              <block type="IF" id="342" inline="false">
                                <value name="COND">
                                  <block type="LOGIC" id="343" inline="false">
                                    <field name="OP">and</field>
                                    <value name="A">
                                      <block type="COMPARE" id="344" inline="true">
                                        <field name="OP">!=</field>
                                        <value name="A">
                                          <block type="LOAD" id="345" inline="true">
                                            <field name="POOL">sload</field>
                                            <value name="SPOT">
                                              <block type="VAL" id="346">
                                                <field name="VAL">WITHDRAW_CREATOR</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="TX" id="347">
                                            <field name="PROP">origin</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="LOGIC" id="348" inline="false">
                                        <field name="OP">and</field>
                                        <value name="A">
                                          <block type="COMPARE" id="349" inline="true">
                                            <field name="OP">=</field>
                                            <value name="A">
                                              <block type="THINPUT" id="411" inline="true">
                                                <value name="ORDINAL">
                                                  <block type="VAL" id="412">
                                                    <field name="VAL">2</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LOAD" id="352" inline="true">
                                                <field name="POOL">sload</field>
                                                <value name="SPOT">
                                                  <block type="VAL" id="353">
                                                    <field name="VAL">WITHDRAW_TO</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="COMPARE" id="354" inline="true">
                                            <field name="OP">=</field>
                                            <value name="A">
                                              <block type="THINPUT" id="413" inline="true">
                                                <value name="ORDINAL">
                                                  <block type="VAL" id="414">
                                                    <field name="VAL">3</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LOAD" id="357" inline="true">
                                                <field name="POOL">sload</field>
                                                <value name="SPOT">
                                                  <block type="VAL" id="358">
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
                                  <block type="COMMENT" id="359">
                                    <field name="NOTE">If a withdraw request is already pending from the other partner and this request matches, then do it.</field>
                                    <next>
                                      <block type="SPEND" id="360" inline="true">
                                        <value name="AMOUNT">
                                          <block type="LOAD" id="361" inline="true">
                                            <field name="POOL">sload</field>
                                            <value name="SPOT">
                                              <block type="VAL" id="362">
                                                <field name="VAL">WITHDRAW_AMOUNT</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="TO">
                                          <block type="LOAD" id="363" inline="true">
                                            <field name="POOL">sload</field>
                                            <value name="SPOT">
                                              <block type="VAL" id="364">
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
                                  <block type="COMMENT" id="365">
                                    <field name="NOTE">this is a new withdraw request; store it as pending until a matching request is received from other partner</field>
                                    <next>
                                      <block type="STORE" id="366" inline="true">
                                        <field name="POOL">sstore</field>
                                        <value name="SPOT">
                                          <block type="VAL" id="367">
                                            <field name="VAL">WITHDRAW_TO</field>
                                          </block>
                                        </value>
                                        <value name="VAL">
                                          <block type="THINPUT" id="415" inline="true">
                                            <value name="ORDINAL">
                                              <block type="VAL" id="416">
                                                <field name="VAL">2</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="STORE" id="370" inline="true">
                                            <field name="POOL">sstore</field>
                                            <value name="SPOT">
                                              <block type="VAL" id="371">
                                                <field name="VAL">WITHDRAW_AMOUNT</field>
                                              </block>
                                            </value>
                                            <value name="VAL">
                                              <block type="THINPUT" id="417" inline="true">
                                                <value name="ORDINAL">
                                                  <block type="VAL" id="418">
                                                    <field name="VAL">3</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="STORE" id="374" inline="true">
                                                <field name="POOL">sstore</field>
                                                <value name="SPOT">
                                                  <block type="VAL" id="375">
                                                    <field name="VAL">WITHDRAW_CREATOR</field>
                                                  </block>
                                                </value>
                                                <value name="VAL">
                                                  <block type="TX" id="376">
                                                    <field name="PROP">origin</field>
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
                              <block type="COMMENT" id="377">
                                <field name="NOTE">Once married, the partners must both agree in order to get divorced and split the pot. I WANT HALF!</field>
                                <next>
                                  <block type="WHEN" id="378" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="COMPARE" id="379" inline="true">
                                        <field name="OP">=</field>
                                        <value name="A">
                                          <block type="INPUT" id="380">
                                            <field name="INDEX">0</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="VAL" id="381">
                                            <field name="VAL">DIVORCE</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="THEN">
                                      <block type="IF" id="382" inline="false">
                                        <value name="COND">
                                          <block type="COMPARE" id="383" inline="true">
                                            <field name="OP">!=</field>
                                            <value name="A">
                                              <block type="LOAD" id="384" inline="true">
                                                <field name="POOL">sload</field>
                                                <value name="SPOT">
                                                  <block type="VAL" id="385">
                                                    <field name="VAL">DIVORCE_CREATOR</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="TX" id="386">
                                                <field name="PROP">origin</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="THEN">
                                          <block type="COMMENT" id="387">
                                            <field name="NOTE">a divorce request is already pending and 2nd party is agreeing, so split the pot</field>
                                            <next>
                                              <block type="STORE" id="388" inline="true">
                                                <field name="POOL">mstore</field>
                                                <value name="SPOT">
                                                  <block type="VAL" id="389">
                                                    <field name="VAL">HALF</field>
                                                  </block>
                                                </value>
                                                <value name="VAL">
                                                  <block type="MATH" id="390" inline="true">
                                                    <field name="OP">div</field>
                                                    <value name="A">
                                                      <block type="CONTRACT" id="391">
                                                        <field name="PROP">balance</field>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="VAL" id="392">
                                                        <field name="VAL">2</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="SPEND" id="393" inline="true">
                                                    <value name="AMOUNT">
                                                      <block type="LOAD" id="394" inline="true">
                                                        <field name="POOL">mload</field>
                                                        <value name="SPOT">
                                                          <block type="VAL" id="395">
                                                            <field name="VAL">HALF</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="TO">
                                                      <block type="LOAD" id="396" inline="true">
                                                        <field name="POOL">sload</field>
                                                        <value name="SPOT">
                                                          <block type="VAL" id="397">
                                                            <field name="VAL">PARTNER_1</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="SPEND" id="398" inline="true">
                                                        <value name="AMOUNT">
                                                          <block type="LOAD" id="399" inline="true">
                                                            <field name="POOL">mload</field>
                                                            <value name="SPOT">
                                                              <block type="VAL" id="400">
                                                                <field name="VAL">HALF</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="TO">
                                                          <block type="LOAD" id="401" inline="true">
                                                            <field name="POOL">sload</field>
                                                            <value name="SPOT">
                                                              <block type="VAL" id="402">
                                                                <field name="VAL">PARTNER_2</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="STORE" id="403" inline="true">
                                                            <field name="POOL">sstore</field>
                                                            <value name="SPOT">
                                                              <block type="VAL" id="404">
                                                                <field name="VAL">STATE</field>
                                                              </block>
                                                            </value>
                                                            <value name="VAL">
                                                              <block type="VAL" id="405">
                                                                <field name="VAL">DIVORCED</field>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="COMMENT" id="406">
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
                                          <block type="COMMENT" id="407">
                                            <field name="NOTE">make a new divorce request pending, waiting for agreement</field>
                                            <next>
                                              <block type="STORE" id="408" inline="true">
                                                <field name="POOL">sstore</field>
                                                <value name="SPOT">
                                                  <block type="VAL" id="409">
                                                    <field name="VAL">DIVORCE_CREATOR</field>
                                                  </block>
                                                </value>
                                                <value name="VAL">
                                                  <block type="TX" id="410">
                                                    <field name="PROP">origin</field>
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
    </statement>
  </block>
</xml>
*/}),

toothfairy: fnCommentToString(function(){/*! 
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="COMMENT" id="50" x="32" y="48">
    <field name="NOTE">Toothfairy smart contract</field>
  </block>
  <block type="INIT" id="51" x="31" y="75">
    <statement name="INIT">
      <block type="STORE" id="52" inline="true">
        <field name="POOL">sstore</field>
        <value name="SPOT">
          <block type="VAL" id="53">
            <field name="VAL">CHILD</field>
          </block>
        </value>
        <value name="VAL">
          <block type="VAL" id="54">
            <field name="VAL">0xb7b2e5e12992267f85455ffee1435f02760402f0</field>
          </block>
        </value>
        <next>
          <block type="STORE" id="55" inline="true">
            <field name="POOL">sstore</field>
            <value name="SPOT">
              <block type="VAL" id="56">
                <field name="VAL">TOOTHFAIRY</field>
              </block>
            </value>
            <value name="VAL">
              <block type="VAL" id="57">
                <field name="VAL">0xc61185cffa955bd1a6b914a6c616b3cdd5206aa1</field>
              </block>
            </value>
          </block>
        </next>
      </block>
    </statement>
    <statement name="BODY">
      <block type="COMMENT" id="58">
        <field name="NOTE">Child calling... with proof of lost tooth given as the contract input</field>
        <next>
          <block type="WHEN" id="59" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="COMPARE" id="60" inline="true">
                <field name="OP">=</field>
                <value name="A">
                  <block type="CONTRACT" id="61">
                    <field name="PROP">caller</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LOAD" id="62" inline="true">
                    <field name="POOL">sload</field>
                    <value name="SPOT">
                      <block type="VAL" id="63">
                        <field name="VAL">CHILD</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="STORE" id="64" inline="true">
                <field name="POOL">sstore</field>
                <value name="SPOT">
                  <block type="VAL" id="65">
                    <field name="VAL">PROOF_OF_TOOTH</field>
                  </block>
                </value>
                <value name="VAL">
                  <block type="INPUT" id="66">
                    <field name="INDEX">0</field>
                  </block>
                </value>
              </block>
            </statement>
            <next>
              <block type="COMMENT" id="67">
                <field name="NOTE">Toothfairy calling... to release contract funds to child</field>
                <next>
                  <block type="IF" id="68" inline="false">
                    <value name="COND">
                      <block type="COMPARE" id="69" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="CONTRACT" id="70">
                            <field name="PROP">caller</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LOAD" id="71" inline="true">
                            <field name="POOL">sload</field>
                            <value name="SPOT">
                              <block type="VAL" id="72">
                                <field name="VAL">TOOTHFAIRY</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="THEN">
                      <block type="SPEND" id="73" inline="true">
                        <value name="AMOUNT">
                          <block type="CONTRACT" id="74">
                            <field name="PROP">balance</field>
                          </block>
                        </value>
                        <value name="TO">
                          <block type="LOAD" id="75" inline="true">
                            <field name="POOL">sload</field>
                            <value name="SPOT">
                              <block type="VAL" id="76">
                                <field name="VAL">CHILD</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </statement>
                    <statement name="ELSE">
                      <block type="COMMENT" id="77">
                        <field name="NOTE">Anyone else calling just gets their funds back</field>
                        <next>
                          <block type="SPEND" id="78" inline="true">
                            <value name="AMOUNT">
                              <block type="TX" id="79">
                                <field name="PROP">callvalue</field>
                              </block>
                            </value>
                            <value name="TO">
                              <block type="CONTRACT" id="80">
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
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="COMMENT" id="324" x="14" y="6">
    <field name="NOTE">Insurance Policy</field>
  </block>
  <block type="INIT" id="325" x="14" y="32">
    <statement name="INIT">
      <block type="STORE" id="326" inline="true">
        <field name="POOL">sstore</field>
        <value name="SPOT">
          <block type="VAL" id="327">
            <field name="VAL">CUSTOMER</field>
          </block>
        </value>
        <value name="VAL">
          <block type="VAL" id="328">
            <field name="VAL">0xb7b2e5e12992267f85455ffee1435f02760402f0</field>
          </block>
        </value>
        <next>
          <block type="STORE" id="329" inline="true">
            <field name="POOL">sstore</field>
            <value name="SPOT">
              <block type="VAL" id="330">
                <field name="VAL">CLAIM_ADJUSTER</field>
              </block>
            </value>
            <value name="VAL">
              <block type="VAL" id="331">
                <field name="VAL">0xc61185cffa955bd1a6b914a6c616b3cdd5206aa1</field>
              </block>
            </value>
            <next>
              <block type="STORE" id="332" inline="true">
                <field name="POOL">sstore</field>
                <value name="SPOT">
                  <block type="VAL" id="333">
                    <field name="VAL">MONTHLY_PREMIUM</field>
                  </block>
                </value>
                <value name="VAL">
                  <block type="CURRENCY" id="334" inline="true">
                    <field name="DENOM">ether</field>
                    <value name="AMT">
                      <block type="VAL" id="335">
                        <field name="VAL">100</field>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="COMMENT" id="336">
                    <field name="NOTE">Seconds in a month: 2628000, Seconds since 1970 on 1/1/2014: 1387584000</field>
                    <next>
                      <block type="STORE" id="337" inline="true">
                        <field name="POOL">sstore</field>
                        <value name="SPOT">
                          <block type="VAL" id="338">
                            <field name="VAL">START_DATE</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="VAL" id="339">
                            <field name="VAL">1387584000</field>
                          </block>
                        </value>
                        <next>
                          <block type="STORE" id="340" inline="true">
                            <field name="POOL">sstore</field>
                            <value name="SPOT">
                              <block type="VAL" id="341">
                                <field name="VAL">ARBITRATOR</field>
                              </block>
                            </value>
                            <value name="VAL">
                              <block type="VAL" id="342">
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
      <block type="COMMENT" id="343">
        <field name="NOTE">Customer calling... with claim evidence provided as the contract input</field>
        <next>
          <block type="WHEN" id="344" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="COMPARE" id="345" inline="true">
                <field name="OP">=</field>
                <value name="A">
                  <block type="CONTRACT" id="346">
                    <field name="PROP">caller</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LOAD" id="347" inline="true">
                    <field name="POOL">sload</field>
                    <value name="SPOT">
                      <block type="VAL" id="348">
                        <field name="VAL">CUSTOMER</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="COMMENT" id="349">
                <field name="NOTE">Increment customer's balance with the amount he's sending in</field>
                <next>
                  <block type="STORE" id="350" inline="false">
                    <field name="POOL">sstore</field>
                    <value name="SPOT">
                      <block type="VAL" id="351">
                        <field name="VAL">CUSTOMER_BALANCE</field>
                      </block>
                    </value>
                    <value name="VAL">
                      <block type="MATH" id="352" inline="true">
                        <field name="OP">+</field>
                        <value name="A">
                          <block type="LOAD" id="353" inline="true">
                            <field name="POOL">sload</field>
                            <value name="SPOT">
                              <block type="VAL" id="354">
                                <field name="VAL">CUSTOMER_BALANCE</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="TX" id="355">
                            <field name="PROP">callvalue</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="STORE" id="356" inline="true">
                        <field name="POOL">sstore</field>
                        <value name="SPOT">
                          <block type="VAL" id="357">
                            <field name="VAL">PROOF_OF_GOOF</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="INPUT" id="394">
                            <field name="INDEX">0</field>
                          </block>
                        </value>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
            <next>
              <block type="COMMENT" id="360">
                <field name="NOTE">Adjuster calling... with the payout amount as the contract input</field>
                <next>
                  <block type="COMMENT" id="361">
                    <field name="NOTE">(Or it's the arbitrator calling... in the event there was a dispute)</field>
                    <next>
                      <block type="WHEN" id="362" inline="false">
                        <field name="WORD">when</field>
                        <value name="COND">
                          <block type="LOGIC" id="363" inline="false">
                            <field name="OP">or</field>
                            <value name="A">
                              <block type="COMPARE" id="364" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="CONTRACT" id="365">
                                    <field name="PROP">caller</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LOAD" id="366" inline="true">
                                    <field name="POOL">sload</field>
                                    <value name="SPOT">
                                      <block type="VAL" id="367">
                                        <field name="VAL">ARBITRATOR</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="COMPARE" id="368" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="CONTRACT" id="369">
                                    <field name="PROP">caller</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LOAD" id="370" inline="true">
                                    <field name="POOL">sload</field>
                                    <value name="SPOT">
                                      <block type="VAL" id="371">
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
                          <block type="COMMENT" id="372">
                            <field name="NOTE">label the calculation for elapsed policy months</field>
                            <next>
                              <block type="MSTORE" id="373" inline="true">
                                <field name="SPOT">POLICY_MONTHS</field>
                                <value name="VAL">
                                  <block type="MATH" id="374" inline="true">
                                    <field name="OP">div</field>
                                    <value name="A">
                                      <block type="MATH" id="375" inline="true">
                                        <field name="OP">-</field>
                                        <value name="A">
                                          <block type="BLOCKINFO" id="376">
                                            <field name="PROP">timestamp</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LOAD" id="377" inline="true">
                                            <field name="POOL">sload</field>
                                            <value name="SPOT">
                                              <block type="VAL" id="378">
                                                <field name="VAL">START_DATE</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="VAL" id="379">
                                        <field name="VAL">2628000</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <next>
                                  <block type="COMMENT" id="380">
                                    <field name="NOTE">when the received premiums have equaled the required premium, the policy is paid up, so pay claim</field>
                                    <next>
                                      <block type="WHEN" id="381" inline="false">
                                        <field name="WORD">when</field>
                                        <value name="COND">
                                          <block type="COMPARE" id="382" inline="false">
                                            <field name="OP">&gt;=</field>
                                            <value name="A">
                                              <block type="MATH" id="383" inline="true">
                                                <field name="OP">div</field>
                                                <value name="A">
                                                  <block type="LOAD" id="384" inline="true">
                                                    <field name="POOL">sload</field>
                                                    <value name="SPOT">
                                                      <block type="VAL" id="385">
                                                        <field name="VAL">CUSTOMER_BALANCE</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="MVAL" id="386">
                                                    <field name="SPOT">POLICY_MONTHS</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LOAD" id="387" inline="true">
                                                <field name="POOL">sload</field>
                                                <value name="SPOT">
                                                  <block type="VAL" id="388">
                                                    <field name="VAL">MONTHLY_PREMIUM</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="THEN">
                                          <block type="SPEND" id="389" inline="true">
                                            <value name="AMOUNT">
                                              <block type="INPUT" id="395">
                                                <field name="INDEX">0</field>
                                              </block>
                                            </value>
                                            <value name="TO">
                                              <block type="LOAD" id="392" inline="true">
                                                <field name="POOL">sload</field>
                                                <value name="SPOT">
                                                  <block type="VAL" id="393">
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
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="COMMENT" id="554" x="40" y="36">
    <field name="NOTE">A basic vote registration contract</field>
  </block>
  <block type="INIT" id="555" x="40" y="61">
    <statement name="INIT">
      <block type="COMMENT" id="556">
        <field name="NOTE">Designate the "admin", who will receive any collected funds at the end</field>
        <next>
          <block type="COMMENT" id="557">
            <field name="NOTE">(Donations are optional and don't affect the voting but we like a way to get received funds out.)</field>
            <next>
              <block type="SSTORE" id="558" inline="true">
                <field name="SPOT">ADMIN</field>
                <value name="VAL">
                  <block type="CONTRACT" id="559">
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
      <block type="COMMENT" id="560">
        <field name="NOTE">The user supplies what they're voting for as the contract input (e.g. "COKE" or "PEPSI") </field>
        <next>
          <block type="MSTORE" id="561" inline="true">
            <field name="SPOT">VOTED_ITEM</field>
            <value name="VAL">
              <block type="INPUT" id="562">
                <field name="INDEX">0</field>
              </block>
            </value>
            <next>
              <block type="COMMENT" id="563">
                <field name="NOTE">Make sure they haven't voted already first</field>
                <next>
                  <block type="WHEN" id="564" inline="false">
                    <field name="WORD">when</field>
                    <value name="COND">
                      <block type="PREFIXOP" id="565" inline="true">
                        <field name="OP">not</field>
                        <value name="A">
                          <block type="LOAD" id="566" inline="true">
                            <field name="POOL">sload</field>
                            <value name="SPOT">
                              <block type="CONTRACT" id="567">
                                <field name="PROP">caller</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="THEN">
                      <block type="COMMENT" id="568">
                        <field name="NOTE">The contract records a vote by incrementing the number of votes associated with the provided input</field>
                        <next>
                          <block type="STORE" id="569" inline="false">
                            <field name="POOL">sstore</field>
                            <value name="SPOT">
                              <block type="MVAL" id="570">
                                <field name="SPOT">VOTED_ITEM</field>
                              </block>
                            </value>
                            <value name="VAL">
                              <block type="MATH" id="571" inline="true">
                                <field name="OP">+</field>
                                <value name="A">
                                  <block type="LOAD" id="572" inline="true">
                                    <field name="POOL">sload</field>
                                    <value name="SPOT">
                                      <block type="MVAL" id="573">
                                        <field name="SPOT">VOTED_ITEM</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="VAL" id="574">
                                    <field name="VAL">1</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <next>
                              <block type="COMMENT" id="575">
                                <field name="NOTE">It also records the address of the caller and what they voted for, so this is public record</field>
                                <next>
                                  <block type="STORE" id="576" inline="true">
                                    <field name="POOL">sstore</field>
                                    <value name="SPOT">
                                      <block type="CONTRACT" id="577">
                                        <field name="PROP">caller</field>
                                      </block>
                                    </value>
                                    <value name="VAL">
                                      <block type="MVAL" id="578">
                                        <field name="SPOT">VOTED_ITEM</field>
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
                      <block type="COMMENT" id="579">
                        <field name="NOTE">Release all funds to the admin when they call in without a vote</field>
                        <next>
                          <block type="WHEN" id="580" inline="false">
                            <field name="WORD">when</field>
                            <value name="COND">
                              <block type="LOGIC" id="581" inline="false">
                                <field name="OP">and</field>
                                <value name="A">
                                  <block type="COMPARE" id="582" inline="true">
                                    <field name="OP">=</field>
                                    <value name="A">
                                      <block type="CONTRACT" id="583">
                                        <field name="PROP">caller</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="SVAL" id="584">
                                        <field name="SPOT">ADMIN</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="PREFIXOP" id="585" inline="true">
                                    <field name="OP">not</field>
                                    <value name="A">
                                      <block type="MVAL" id="586">
                                        <field name="SPOT">VOTED_ITEM</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="THEN">
                              <block type="SPEND" id="587" inline="true">
                                <value name="AMOUNT">
                                  <block type="CONTRACT" id="588">
                                    <field name="PROP">balance</field>
                                  </block>
                                </value>
                                <value name="TO">
                                  <block type="SVAL" id="589">
                                    <field name="SPOT">ADMIN</field>
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
  <block type="INIT" id="472" x="41" y="32">
    <statement name="INIT">
      <block type="COMMENT" id="399">
        <field name="NOTE">"Swear Jar" - An informal method among groups to self-discourage bad behavior</field>
        <next>
          <block type="COMMENT" id="400">
            <field name="NOTE">(swearing, being late for meetings, smoking, missing a workout, etc.)</field>
            <next>
              <block type="COMMENT" id="401">
                <field name="NOTE">Members voluntarily pay in for each infraction &amp; the best-behaved gets the pot each month</field>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
    <statement name="BODY">
      <block type="COMMENT" id="405">
        <field name="NOTE">First add this caller to the participant list if they are new and give them a minimal total</field>
        <next>
          <block type="MSTORE" id="402" inline="true">
            <field name="SPOT">CALLER_TOTAL</field>
            <value name="VAL">
              <block type="LOAD" id="403" inline="true">
                <field name="POOL">sload</field>
                <value name="SPOT">
                  <block type="CONTRACT" id="404">
                    <field name="PROP">caller</field>
                  </block>
                </value>
              </block>
            </value>
            <next>
              <block type="WHEN" id="406" inline="false">
                <field name="WORD">when</field>
                <value name="COND">
                  <block type="COMPARE" id="407" inline="true">
                    <field name="OP">=</field>
                    <value name="A">
                      <block type="MVAL" id="408">
                        <field name="SPOT">CALLER_TOTAL</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="VAL" id="409">
                        <field name="VAL">0</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="THEN">
                  <block type="STORE" id="410" inline="true">
                    <field name="POOL">sstore</field>
                    <value name="SPOT">
                      <block type="SVAL" id="411">
                        <field name="SPOT">NEXT_MEMBER_SPOT</field>
                      </block>
                    </value>
                    <value name="VAL">
                      <block type="CONTRACT" id="412">
                        <field name="PROP">caller</field>
                      </block>
                    </value>
                    <next>
                      <block type="SSTORE" id="413" inline="true">
                        <field name="SPOT">NEXT_MEMBER_SPOT</field>
                        <value name="VAL">
                          <block type="MATH" id="414" inline="true">
                            <field name="OP">+</field>
                            <value name="A">
                              <block type="SVAL" id="415">
                                <field name="SPOT">NEXT_MEMBER_SPOT</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="VAL" id="416">
                                <field name="VAL">1</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="STORE" id="417" inline="true">
                            <field name="POOL">sstore</field>
                            <value name="SPOT">
                              <block type="CONTRACT" id="418">
                                <field name="PROP">caller</field>
                              </block>
                            </value>
                            <value name="VAL">
                              <block type="CURRENCY" id="419" inline="true">
                                <field name="DENOM">wei</field>
                                <value name="AMT">
                                  <block type="VAL" id="420">
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
                  <block type="COMMENT" id="421">
                    <field name="NOTE">Next update their infraction total for the world to see (social pressure)</field>
                    <next>
                      <block type="STORE" id="422" inline="true">
                        <field name="POOL">sstore</field>
                        <value name="SPOT">
                          <block type="CONTRACT" id="423">
                            <field name="PROP">caller</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="MATH" id="424" inline="true">
                            <field name="OP">+</field>
                            <value name="A">
                              <block type="MVAL" id="425">
                                <field name="SPOT">CALLER_TOTAL</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="TX" id="426">
                                <field name="PROP">callvalue</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="COMMENT" id="427">
                            <field name="NOTE">If it's a month (2592000 seconds) since the last time, find the best-behaved member to pay off </field>
                            <next>
                              <block type="WHEN" id="428" inline="false">
                                <field name="WORD">when</field>
                                <value name="COND">
                                  <block type="COMPARE" id="429" inline="true">
                                    <field name="OP">&lt;</field>
                                    <value name="A">
                                      <block type="SVAL" id="430">
                                        <field name="SPOT">LAST_EMPTY_TIME</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="MATH" id="431" inline="true">
                                        <field name="OP">-</field>
                                        <value name="A">
                                          <block type="BLOCKINFO" id="432">
                                            <field name="PROP">timestamp</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="VAL" id="433">
                                            <field name="VAL">2592000</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="THEN">
                                  <block type="SSTORE" id="434" inline="true">
                                    <field name="SPOT">LAST_EMPTY_TIME</field>
                                    <value name="VAL">
                                      <block type="BLOCKINFO" id="435">
                                        <field name="PROP">timestamp</field>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="COMMENT" id="436">
                                        <field name="NOTE">Initialize the "best total" to something terribly high. (We'll see why later)</field>
                                        <next>
                                          <block type="MSTORE" id="437" inline="true">
                                            <field name="SPOT">BEST_TOTAL</field>
                                            <value name="VAL">
                                              <block type="CURRENCY" id="438" inline="true">
                                                <field name="DENOM">ether</field>
                                                <value name="AMT">
                                                  <block type="VAL" id="439">
                                                    <field name="VAL">99999999999</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="COMMENT" id="440">
                                                <field name="NOTE">Loop through members looking for the best behaved (the one with the lowest total)</field>
                                                <next>
                                                  <block type="WHILELOOP" id="441" inline="false">
                                                    <field name="WORD">WHILE</field>
                                                    <value name="COND">
                                                      <block type="COMPARE" id="442" inline="true">
                                                        <field name="OP">&lt;</field>
                                                        <value name="A">
                                                          <block type="MVAL" id="443">
                                                            <field name="SPOT">i</field>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="SVAL" id="444">
                                                            <field name="SPOT">NEXT_MEMBER_SPOT</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO">
                                                      <block type="MSTORE" id="445" inline="true">
                                                        <field name="SPOT">ONE_MEMBER</field>
                                                        <value name="VAL">
                                                          <block type="LOAD" id="446" inline="true">
                                                            <field name="POOL">sload</field>
                                                            <value name="SPOT">
                                                              <block type="MVAL" id="447">
                                                                <field name="SPOT">i</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="MSTORE" id="448" inline="true">
                                                            <field name="SPOT">ONE_MEMBER_TOTAL</field>
                                                            <value name="VAL">
                                                              <block type="LOAD" id="449" inline="true">
                                                                <field name="POOL">sload</field>
                                                                <value name="SPOT">
                                                                  <block type="MVAL" id="450">
                                                                    <field name="SPOT">ONE_MEMBER</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="WHEN" id="451" inline="false">
                                                                <field name="WORD">when</field>
                                                                <value name="COND">
                                                                  <block type="COMPARE" id="452" inline="true">
                                                                    <field name="OP">&lt;</field>
                                                                    <value name="A">
                                                                      <block type="MVAL" id="453">
                                                                        <field name="SPOT">ONE_MEMBER_TOTAL</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="MVAL" id="454">
                                                                        <field name="SPOT">BEST_TOTAL</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <statement name="THEN">
                                                                  <block type="COMMENT" id="455">
                                                                    <field name="NOTE">Label the best one so far. (Early registration breaks a tie)</field>
                                                                    <next>
                                                                      <block type="MSTORE" id="456" inline="true">
                                                                        <field name="SPOT">BEST_MEMBER</field>
                                                                        <value name="VAL">
                                                                          <block type="MVAL" id="457">
                                                                            <field name="SPOT">ONE_MEMBER</field>
                                                                          </block>
                                                                        </value>
                                                                        <next>
                                                                          <block type="MSTORE" id="458" inline="true">
                                                                            <field name="SPOT">BEST_TOTAL</field>
                                                                            <value name="VAL">
                                                                              <block type="MVAL" id="459">
                                                                                <field name="SPOT">ONE_MEMBER_TOTAL</field>
                                                                              </block>
                                                                            </value>
                                                                            <next>
                                                                              <block type="COMMENT" id="460">
                                                                                <field name="NOTE">Reset each score to the minimum for the coming  month</field>
                                                                                <next>
                                                                                  <block type="STORE" id="461" inline="true">
                                                                                    <field name="POOL">sstore</field>
                                                                                    <value name="SPOT">
                                                                                      <block type="MVAL" id="462">
                                                                                        <field name="SPOT">ONE_MEMBER</field>
                                                                                      </block>
                                                                                    </value>
                                                                                    <value name="VAL">
                                                                                      <block type="CURRENCY" id="463" inline="true">
                                                                                        <field name="DENOM">wei</field>
                                                                                        <value name="AMT">
                                                                                          <block type="VAL" id="464">
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
                                                                  <block type="MSTORE" id="465" inline="true">
                                                                    <field name="SPOT">i</field>
                                                                    <value name="VAL">
                                                                      <block type="MATH" id="466" inline="true">
                                                                        <field name="OP">+</field>
                                                                        <value name="A">
                                                                          <block type="MVAL" id="467">
                                                                            <field name="SPOT">i</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="B">
                                                                          <block type="VAL" id="468">
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
                                                      <block type="SPEND" id="469" inline="true">
                                                        <value name="AMOUNT">
                                                          <block type="CONTRACT" id="471">
                                                            <field name="PROP">balance</field>
                                                          </block>
                                                        </value>
                                                        <value name="TO">
                                                          <block type="MVAL" id="470">
                                                            <field name="SPOT">BEST_MEMBER</field>
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
*/}),

rock_paper_scissors: fnCommentToString(function(){/*! 
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="INIT" id="630" x="24" y="48">
    <statement name="INIT">
      <block type="COMMENT" id="631">
        <field name="NOTE">Rock, Paper, Scissors</field>
        <next>
          <block type="STORE" id="632" inline="true">
            <field name="POOL">sstore</field>
            <value name="SPOT">
              <block type="MATH" id="633" inline="true">
                <field name="OP">+</field>
                <value name="A">
                  <block type="VAL" id="634">
                    <field name="VAL">PLAYER</field>
                  </block>
                </value>
                <value name="B">
                  <block type="VAL" id="635">
                    <field name="VAL">1</field>
                  </block>
                </value>
              </block>
            </value>
            <value name="VAL">
              <block type="VAL" id="636">
                <field name="VAL">0xb7b2e5e12992267f85455ffee1435f02760402f0</field>
              </block>
            </value>
            <next>
              <block type="STORE" id="637" inline="true">
                <field name="POOL">sstore</field>
                <value name="SPOT">
                  <block type="MATH" id="638" inline="true">
                    <field name="OP">+</field>
                    <value name="A">
                      <block type="VAL" id="639">
                        <field name="VAL">PLAYER</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="VAL" id="640">
                        <field name="VAL">2</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="VAL">
                  <block type="VAL" id="641">
                    <field name="VAL">0xfeab802c014588f08bfee2741086c37582b30dc2</field>
                  </block>
                </value>
                <next>
                  <block type="STORE" id="642" inline="true">
                    <field name="POOL">sstore</field>
                    <value name="SPOT">
                      <block type="VAL" id="643">
                        <field name="VAL">0xb7b2e5e12992267f85455ffee1435f02760402f0</field>
                      </block>
                    </value>
                    <value name="VAL">
                      <block type="VAL" id="644">
                        <field name="VAL">1</field>
                      </block>
                    </value>
                    <next>
                      <block type="STORE" id="645" inline="true">
                        <field name="POOL">sstore</field>
                        <value name="SPOT">
                          <block type="VAL" id="646">
                            <field name="VAL">0xfeab802c014588f08bfee2741086c37582b30dc2</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="VAL" id="647">
                            <field name="VAL">2</field>
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
    <statement name="BODY">
      <block type="MSTORE" id="648" inline="true">
        <field name="SPOT">PLAYER_NUM</field>
        <value name="VAL">
          <block type="LOAD" id="649" inline="true">
            <field name="POOL">sload</field>
            <value name="SPOT">
              <block type="CONTRACT" id="650">
                <field name="PROP">caller</field>
              </block>
            </value>
          </block>
        </value>
        <next>
          <block type="STORE" id="651" inline="true">
            <field name="POOL">sstore</field>
            <value name="SPOT">
              <block type="MATH" id="652" inline="true">
                <field name="OP">+</field>
                <value name="A">
                  <block type="VAL" id="653">
                    <field name="VAL">CHOICE</field>
                  </block>
                </value>
                <value name="B">
                  <block type="MVAL" id="654">
                    <field name="SPOT">PLAYER_NUM</field>
                  </block>
                </value>
              </block>
            </value>
            <value name="VAL">
              <block type="INPUT" id="655">
                <field name="INDEX">0</field>
              </block>
            </value>
            <next>
              <block type="STORE" id="656" inline="true">
                <field name="POOL">sstore</field>
                <value name="SPOT">
                  <block type="MATH" id="657" inline="true">
                    <field name="OP">+</field>
                    <value name="A">
                      <block type="VAL" id="658">
                        <field name="VAL">IN_BLOCK</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="MVAL" id="659">
                        <field name="SPOT">PLAYER_NUM</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="VAL">
                  <block type="BLOCKINFO" id="660">
                    <field name="PROP">number</field>
                  </block>
                </value>
                <next>
                  <block type="COMMENT" id="661">
                    <field name="NOTE">Ensure both players' choices came in at the same time. (No peeking!)</field>
                    <next>
                      <block type="WHEN" id="662" inline="false">
                        <field name="WORD">when</field>
                        <value name="COND">
                          <block type="COMPARE" id="663" inline="false">
                            <field name="OP">!=</field>
                            <value name="A">
                              <block type="LOAD" id="664" inline="true">
                                <field name="POOL">sload</field>
                                <value name="SPOT">
                                  <block type="MATH" id="665" inline="true">
                                    <field name="OP">+</field>
                                    <value name="A">
                                      <block type="VAL" id="666">
                                        <field name="VAL">IN_BLOCK</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="VAL" id="667">
                                        <field name="VAL">1</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LOAD" id="668" inline="true">
                                <field name="POOL">sload</field>
                                <value name="SPOT">
                                  <block type="MATH" id="669" inline="true">
                                    <field name="OP">+</field>
                                    <value name="A">
                                      <block type="VAL" id="670">
                                        <field name="VAL">IN_BLOCK</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="VAL" id="671">
                                        <field name="VAL">2</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="THEN">
                          <block type="STOP" id="672"></block>
                        </statement>
                        <next>
                          <block type="COMMENT" id="673">
                            <field name="NOTE">Label each player's choice for easy reference</field>
                            <next>
                              <block type="MSTORE" id="674" inline="true">
                                <field name="SPOT">CHOICE1</field>
                                <value name="VAL">
                                  <block type="LOAD" id="675" inline="true">
                                    <field name="POOL">sload</field>
                                    <value name="SPOT">
                                      <block type="MATH" id="676" inline="true">
                                        <field name="OP">+</field>
                                        <value name="A">
                                          <block type="VAL" id="677">
                                            <field name="VAL">CHOICE</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="VAL" id="678">
                                            <field name="VAL">1</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <next>
                                  <block type="MSTORE" id="679" inline="true">
                                    <field name="SPOT">CHOICE2</field>
                                    <value name="VAL">
                                      <block type="LOAD" id="680" inline="true">
                                        <field name="POOL">sload</field>
                                        <value name="SPOT">
                                          <block type="MATH" id="681" inline="true">
                                            <field name="OP">+</field>
                                            <value name="A">
                                              <block type="VAL" id="682">
                                                <field name="VAL">CHOICE</field>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="VAL" id="683">
                                                <field name="VAL">2</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="COMMENT" id="684">
                                        <field name="NOTE">If it's a tie, nobody wins, so stop here</field>
                                        <next>
                                          <block type="WHEN" id="685" inline="false">
                                            <field name="WORD">when</field>
                                            <value name="COND">
                                              <block type="COMPARE" id="686" inline="true">
                                                <field name="OP">=</field>
                                                <value name="A">
                                                  <block type="MVAL" id="687">
                                                    <field name="SPOT">CHOICE1</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="MVAL" id="688">
                                                    <field name="SPOT">CHOICE2</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="THEN">
                                              <block type="STOP" id="689"></block>
                                            </statement>
                                            <next>
                                              <block type="COMMENT" id="690">
                                                <field name="NOTE">Unless both players made a valid choice, stop here. (No "dynamite" allowed!)</field>
                                                <next>
                                                  <block type="WHEN" id="691" inline="false">
                                                    <field name="WORD">unless</field>
                                                    <value name="COND">
                                                      <block type="LOGIC" id="692" inline="false">
                                                        <field name="OP">&amp;&amp;</field>
                                                        <value name="A">
                                                          <block type="LOGIC" id="693" inline="false">
                                                            <field name="OP">||</field>
                                                            <value name="A">
                                                              <block type="COMPARE" id="694" inline="true">
                                                                <field name="OP">=</field>
                                                                <value name="A">
                                                                  <block type="MVAL" id="695">
                                                                    <field name="SPOT">CHOICE1</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="TEXTVAL" id="696">
                                                                    <field name="VAL">ROCK</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="LOGIC" id="697" inline="false">
                                                                <field name="OP">||</field>
                                                                <value name="A">
                                                                  <block type="COMPARE" id="698" inline="true">
                                                                    <field name="OP">=</field>
                                                                    <value name="A">
                                                                      <block type="MVAL" id="699">
                                                                        <field name="SPOT">CHOICE1</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="TEXTVAL" id="700">
                                                                        <field name="VAL">PAPER</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="COMPARE" id="701" inline="true">
                                                                    <field name="OP">=</field>
                                                                    <value name="A">
                                                                      <block type="MVAL" id="702">
                                                                        <field name="SPOT">CHOICE1</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="TEXTVAL" id="703">
                                                                        <field name="VAL">SCISSORS</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="LOGIC" id="704" inline="false">
                                                            <field name="OP">||</field>
                                                            <value name="A">
                                                              <block type="COMPARE" id="705" inline="true">
                                                                <field name="OP">=</field>
                                                                <value name="A">
                                                                  <block type="MVAL" id="706">
                                                                    <field name="SPOT">CHOICE2</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="TEXTVAL" id="707">
                                                                    <field name="VAL">ROCK</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="LOGIC" id="708" inline="false">
                                                                <field name="OP">||</field>
                                                                <value name="A">
                                                                  <block type="COMPARE" id="709" inline="true">
                                                                    <field name="OP">=</field>
                                                                    <value name="A">
                                                                      <block type="MVAL" id="710">
                                                                        <field name="SPOT">CHOICE2</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="TEXTVAL" id="711">
                                                                        <field name="VAL">PAPER</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="COMPARE" id="712" inline="true">
                                                                    <field name="OP">=</field>
                                                                    <value name="A">
                                                                      <block type="MVAL" id="713">
                                                                        <field name="SPOT">CHOICE2</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="TEXTVAL" id="714">
                                                                        <field name="VAL">SCISSORS</field>
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
                                                      <block type="STOP" id="715"></block>
                                                    </statement>
                                                    <next>
                                                      <block type="COMMENT" id="716">
                                                        <field name="NOTE">Check each valid combo to determine the winner</field>
                                                        <next>
                                                          <block type="WHEN" id="717" inline="false">
                                                            <field name="WORD">when</field>
                                                            <value name="COND">
                                                              <block type="COMPARE" id="718" inline="true">
                                                                <field name="OP">=</field>
                                                                <value name="A">
                                                                  <block type="MVAL" id="719">
                                                                    <field name="SPOT">CHOICE1</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="TEXTVAL" id="720">
                                                                    <field name="VAL">ROCK</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <statement name="THEN">
                                                              <block type="IF" id="721" inline="false">
                                                                <value name="COND">
                                                                  <block type="COMPARE" id="722" inline="true">
                                                                    <field name="OP">=</field>
                                                                    <value name="A">
                                                                      <block type="MVAL" id="723">
                                                                        <field name="SPOT">CHOICE2</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="TEXTVAL" id="724">
                                                                        <field name="VAL">SCISSORS</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <statement name="THEN">
                                                                  <block type="MSTORE" id="725" inline="true">
                                                                    <field name="SPOT">WINNER</field>
                                                                    <value name="VAL">
                                                                      <block type="VAL" id="726">
                                                                        <field name="VAL">1</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </statement>
                                                                <statement name="ELSE">
                                                                  <block type="MSTORE" id="727" inline="true">
                                                                    <field name="SPOT">WINNER</field>
                                                                    <value name="VAL">
                                                                      <block type="VAL" id="728">
                                                                        <field name="VAL">2</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </statement>
                                                              </block>
                                                            </statement>
                                                            <next>
                                                              <block type="WHEN" id="729" inline="false">
                                                                <field name="WORD">when</field>
                                                                <value name="COND">
                                                                  <block type="COMPARE" id="730" inline="true">
                                                                    <field name="OP">=</field>
                                                                    <value name="A">
                                                                      <block type="MVAL" id="731">
                                                                        <field name="SPOT">CHOICE1</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="TEXTVAL" id="732">
                                                                        <field name="VAL">PAPER</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <statement name="THEN">
                                                                  <block type="IF" id="733" inline="false">
                                                                    <value name="COND">
                                                                      <block type="COMPARE" id="734" inline="true">
                                                                        <field name="OP">=</field>
                                                                        <value name="A">
                                                                          <block type="MVAL" id="735">
                                                                            <field name="SPOT">CHOICE2</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="B">
                                                                          <block type="TEXTVAL" id="736">
                                                                            <field name="VAL">ROCK</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                    <statement name="THEN">
                                                                      <block type="MSTORE" id="737" inline="true">
                                                                        <field name="SPOT">WINNER</field>
                                                                        <value name="VAL">
                                                                          <block type="VAL" id="738">
                                                                            <field name="VAL">1</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </statement>
                                                                    <statement name="ELSE">
                                                                      <block type="MSTORE" id="739" inline="true">
                                                                        <field name="SPOT">WINNER</field>
                                                                        <value name="VAL">
                                                                          <block type="VAL" id="740">
                                                                            <field name="VAL">2</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </statement>
                                                                  </block>
                                                                </statement>
                                                                <next>
                                                                  <block type="WHEN" id="741" inline="false">
                                                                    <field name="WORD">when</field>
                                                                    <value name="COND">
                                                                      <block type="COMPARE" id="742" inline="true">
                                                                        <field name="OP">=</field>
                                                                        <value name="A">
                                                                          <block type="MVAL" id="743">
                                                                            <field name="SPOT">CHOICE1</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="B">
                                                                          <block type="TEXTVAL" id="744">
                                                                            <field name="VAL">SCISSORS</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                    <statement name="THEN">
                                                                      <block type="IF" id="745" inline="false">
                                                                        <value name="COND">
                                                                          <block type="COMPARE" id="746" inline="true">
                                                                            <field name="OP">=</field>
                                                                            <value name="A">
                                                                              <block type="MVAL" id="747">
                                                                                <field name="SPOT">CHOICE2</field>
                                                                              </block>
                                                                            </value>
                                                                            <value name="B">
                                                                              <block type="TEXTVAL" id="748">
                                                                                <field name="VAL">PAPER</field>
                                                                              </block>
                                                                            </value>
                                                                          </block>
                                                                        </value>
                                                                        <statement name="THEN">
                                                                          <block type="MSTORE" id="749" inline="true">
                                                                            <field name="SPOT">WINNER</field>
                                                                            <value name="VAL">
                                                                              <block type="VAL" id="750">
                                                                                <field name="VAL">1</field>
                                                                              </block>
                                                                            </value>
                                                                          </block>
                                                                        </statement>
                                                                        <statement name="ELSE">
                                                                          <block type="MSTORE" id="751" inline="true">
                                                                            <field name="SPOT">WINNER</field>
                                                                            <value name="VAL">
                                                                              <block type="VAL" id="752">
                                                                                <field name="VAL">2</field>
                                                                              </block>
                                                                            </value>
                                                                          </block>
                                                                        </statement>
                                                                      </block>
                                                                    </statement>
                                                                    <next>
                                                                      <block type="COMMENT" id="753">
                                                                        <field name="NOTE">Pay the winner</field>
                                                                        <next>
                                                                          <block type="SPEND" id="754" inline="true">
                                                                            <value name="AMOUNT">
                                                                              <block type="CONTRACT" id="755">
                                                                                <field name="PROP">balance</field>
                                                                              </block>
                                                                            </value>
                                                                            <value name="TO">
                                                                              <block type="LOAD" id="756" inline="true">
                                                                                <field name="POOL">sload</field>
                                                                                <value name="SPOT">
                                                                                  <block type="MATH" id="757" inline="true">
                                                                                    <field name="OP">+</field>
                                                                                    <value name="A">
                                                                                      <block type="VAL" id="758">
                                                                                        <field name="VAL">PLAYER</field>
                                                                                      </block>
                                                                                    </value>
                                                                                    <value name="B">
                                                                                      <block type="MVAL" id="759">
                                                                                        <field name="SPOT">WINNER</field>
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