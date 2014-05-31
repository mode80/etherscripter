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
  <block type="LLL_init" id="100" x="-26" y="71">
    <statement name="INIT">
      <block type="LLL_comment" id="101">
        <field name="NOTE">A utility contract that returns a pseudo-random number in a given range from an optional seed</field>
        <next>
          <block type="LLL_comment" id="102">
            <field name="NOTE">1st input is the lower bound of the range, inclusive</field>
            <next>
              <block type="LLL_comment" id="103">
                <field name="NOTE">2nd input is the upper bound of the range, inclusive</field>
                <next>
                  <block type="LLL_comment" id="104">
                    <field name="NOTE">optional 3nd input is used as a seed for random number generation</field>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
    <statement name="BODY">
      <block type="LLL_mstore" id="105" inline="true">
        <field name="SPOT">lower_bound</field>
        <value name="VAL">
          <block type="LLL_input" id="106">
            <field name="INDEX">0</field>
          </block>
        </value>
        <next>
          <block type="LLL_mstore" id="107" inline="true">
            <field name="SPOT">upper_bound</field>
            <value name="VAL">
              <block type="LLL_input" id="108">
                <field name="INDEX">1</field>
              </block>
            </value>
            <next>
              <block type="LLL_mstore" id="109" inline="true">
                <field name="SPOT">seed</field>
                <value name="VAL">
                  <block type="LLL_input" id="110">
                    <field name="INDEX">2</field>
                  </block>
                </value>
                <next>
                  <block type="LLL_mstore" id="111" inline="false">
                    <field name="SPOT">range</field>
                    <value name="VAL">
                      <block type="LLL_math" id="112" inline="true">
                        <field name="OP">+</field>
                        <value name="A">
                          <block type="LLL_math" id="113" inline="true">
                            <field name="OP">-</field>
                            <value name="A">
                              <block type="LLL_mval" id="114">
                                <field name="VAL">upper_bound</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_mval" id="115">
                                <field name="VAL">lower_bound</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="116">
                            <field name="VAL">1</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="LLL_reserve" id="117" inline="true">
                        <value name="LEN">
                          <block type="LLL_val" id="118">
                            <field name="VAL">2</field>
                          </block>
                        </value>
                        <value name="SPOT">
                          <block type="LLL_val" id="119">
                            <field name="VAL">hashable</field>
                          </block>
                        </value>
                        <next>
                          <block type="LLL_array_set" id="120" inline="true">
                            <value name="INDEX">
                              <block type="LLL_val" id="121">
                                <field name="VAL">0</field>
                              </block>
                            </value>
                            <value name="SPOT">
                              <block type="LLL_val" id="122">
                                <field name="VAL">hashable</field>
                              </block>
                            </value>
                            <value name="VAL">
                              <block type="LLL_mval" id="123">
                                <field name="VAL">seed</field>
                              </block>
                            </value>
                            <next>
                              <block type="LLL_array_set" id="124" inline="true">
                                <value name="INDEX">
                                  <block type="LLL_val" id="125">
                                    <field name="VAL">1</field>
                                  </block>
                                </value>
                                <value name="SPOT">
                                  <block type="LLL_val" id="126">
                                    <field name="VAL">hashable</field>
                                  </block>
                                </value>
                                <value name="VAL">
                                  <block type="LLL_blockinfo" id="127">
                                    <field name="PROP">timestamp</field>
                                  </block>
                                </value>
                                <next>
                                  <block type="LLL_mstore" id="128" inline="false">
                                    <field name="SPOT">random_piece</field>
                                    <value name="VAL">
                                      <block type="LLL_hash" id="129" inline="true">
                                        <value name="DATA_START">
                                          <block type="LLL_mval" id="130">
                                            <field name="VAL">hashable</field>
                                          </block>
                                        </value>
                                        <value name="DATA_LEN">
                                          <block type="LLL_val" id="131">
                                            <field name="VAL">64</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="LLL_mstore" id="132" inline="false">
                                        <field name="SPOT">result</field>
                                        <value name="VAL">
                                          <block type="LLL_math" id="133" inline="true">
                                            <field name="OP">+</field>
                                            <value name="A">
                                              <block type="LLL_mval" id="134">
                                                <field name="VAL">lowerbound</field>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_math" id="135" inline="true">
                                                <field name="OP">mod</field>
                                                <value name="A">
                                                  <block type="LLL_mval" id="136">
                                                    <field name="VAL">random_piece</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_mval" id="137">
                                                    <field name="VAL">range</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="LLL_return" id="138" inline="false">
                                            <value name="DATA_START">
                                              <block type="LLL_mval" id="139">
                                                <field name="VAL">result</field>
                                              </block>
                                            </value>
                                            <value name="DATA_LEN">
                                              <block type="LLL_val" id="140">
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
    </statement>
  </block>
</xml>
*/}),

mitch_jack_bet: fnCommentToString(function(){/*! 
<xml>
  <block type="LLL_init" id="79" x="18" y="19">
    <statement name="INIT">
      <block type="LLL_comment" id="80">
        <field name="NOTE">Simple Bet v2</field>
        <next>
          <block type="LLL_comment" id="81">
            <field name="NOTE">Mitch bets Jack that BTC will be over $2000 by Dec 5, 2014</field>
            <next>
              <block type="LLL_comment" id="82">
                <field name="NOTE">This "init" code runs one time only when the contract is first created</field>
                <next>
                  <block type="LLL_comment" id="83">
                    <field name="NOTE">These addresses are fake but you can see the format</field>
                    <next>
                      <block type="LLL_store" id="84" inline="true">
                        <field name="POOL">sstore</field>
                        <value name="SPOT">
                          <block type="LLL_val" id="85">
                            <field name="VAL">Mitch</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="LLL_val" id="86">
                            <field name="VAL">0xf4b7cc7faa866a2275972317598e7d936cfc9adc</field>
                          </block>
                        </value>
                        <next>
                          <block type="LLL_store" id="87" inline="true">
                            <field name="POOL">sstore</field>
                            <value name="SPOT">
                              <block type="LLL_val" id="88">
                                <field name="VAL">Jack</field>
                              </block>
                            </value>
                            <value name="VAL">
                              <block type="LLL_val" id="89">
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
      <block type="LLL_comment" id="90">
        <field name="NOTE">Grabbing outside data like the BTC price will be available eventually...</field>
        <next>
          <block type="LLL_comment" id="91">
            <field name="NOTE">...by asking a "data feed" contract once the ecosystem evolves.</field>
            <next>
              <block type="LLL_comment" id="92">
                <field name="NOTE">Until then, we can take the data supplied to the contract as the BTC price.</field>
                <next>
                  <block type="LLL_comment" id="93">
                    <field name="NOTE">We use a temp slot here since we don't need to store it between runs.</field>
                    <next>
                      <block type="LLL_store" id="94" inline="true">
                        <field name="POOL">mstore</field>
                        <value name="SPOT">
                          <block type="LLL_val" id="95">
                            <field name="VAL">BTC</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="LLL_input" id="96">
                            <field name="INDEX">0</field>
                          </block>
                        </value>
                        <next>
                          <block type="LLL_comment" id="97">
                            <field name="NOTE">We can use an 'OR' block here to avoid duplicating the code for each person</field>
                            <next>
                              <block type="LLL_when" id="98" inline="false">
                                <field name="WORD">when</field>
                                <value name="COND">
                                  <block type="LLL_logic" id="99" inline="false">
                                    <field name="OP">or</field>
                                    <value name="A">
                                      <block type="LLL_compare" id="100" inline="true">
                                        <field name="OP">=</field>
                                        <value name="A">
                                          <block type="LLL_contract" id="101">
                                            <field name="PROP">caller</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_load" id="102" inline="true">
                                            <field name="POOL">sload</field>
                                            <value name="SPOT">
                                              <block type="LLL_val" id="103">
                                                <field name="VAL">Mitch</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="LLL_compare" id="104" inline="true">
                                        <field name="OP">=</field>
                                        <value name="A">
                                          <block type="LLL_contract" id="105">
                                            <field name="PROP">caller</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_load" id="106" inline="true">
                                            <field name="POOL">sload</field>
                                            <value name="SPOT">
                                              <block type="LLL_val" id="107">
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
                                  <block type="LLL_comment" id="108">
                                    <field name="NOTE">block.timestamp will be seconds elapsed since 1970 GMT.</field>
                                    <next>
                                      <block type="LLL_comment" id="109">
                                        <field name="NOTE">So for 12/04/2015 that's 1449187200 </field>
                                        <next>
                                          <block type="LLL_when" id="110" inline="false">
                                            <field name="WORD">when</field>
                                            <value name="COND">
                                              <block type="LLL_compare" id="111" inline="true">
                                                <field name="OP">&gt;</field>
                                                <value name="A">
                                                  <block type="LLL_blockinfo" id="112">
                                                    <field name="PROP">timestamp</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_val" id="113">
                                                    <field name="VAL">1449187200</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="THEN">
                                              <block type="LLL_if" id="114" inline="false">
                                                <value name="COND">
                                                  <block type="LLL_compare" id="115" inline="true">
                                                    <field name="OP">&gt;</field>
                                                    <value name="A">
                                                      <block type="LLL_load" id="116" inline="true">
                                                        <field name="POOL">mload</field>
                                                        <value name="SPOT">
                                                          <block type="LLL_val" id="117">
                                                            <field name="VAL">BTC</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="LLL_val" id="118">
                                                        <field name="VAL">2000</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="THEN">
                                                  <block type="LLL_comment" id="119">
                                                    <field name="NOTE">If BTC is over 2000 pay off Mitch</field>
                                                    <next>
                                                      <block type="LLL_spend" id="120" inline="true">
                                                        <value name="MONEY">
                                                          <block type="LLL_contract" id="121">
                                                            <field name="PROP">balance</field>
                                                          </block>
                                                        </value>
                                                        <value name="TO">
                                                          <block type="LLL_load" id="122" inline="true">
                                                            <field name="POOL">sload</field>
                                                            <value name="SPOT">
                                                              <block type="LLL_val" id="123">
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
                                                  <block type="LLL_comment" id="124">
                                                    <field name="NOTE">Otherwise it must not be over 2000 so pay off Jack</field>
                                                    <next>
                                                      <block type="LLL_spend" id="125" inline="true">
                                                        <value name="MONEY">
                                                          <block type="LLL_contract" id="126">
                                                            <field name="PROP">balance</field>
                                                          </block>
                                                        </value>
                                                        <value name="TO">
                                                          <block type="LLL_load" id="127" inline="true">
                                                            <field name="POOL">sload</field>
                                                            <value name="SPOT">
                                                              <block type="LLL_val" id="128">
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
                                  <block type="LLL_comment" id="129">
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
  <block type="LLL_init" id="501" x="34" y="40">
    <statement name="INIT">
      <block type="LLL_comment" id="502">
        <field name="NOTE">Coin flipping smart contract</field>
      </block>
    </statement>
    <statement name="BODY">
      <block type="LLL_comment" id="503">
        <field name="NOTE">When the time in seconds is even, consider it a winning flip</field>
        <next>
          <block type="LLL_when" id="504" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LLL_compare" id="505" inline="true">
                <field name="OP">=</field>
                <value name="A">
                  <block type="LLL_math" id="506" inline="true">
                    <field name="OP">mod</field>
                    <value name="A">
                      <block type="LLL_blockinfo" id="507">
                        <field name="PROP">timestamp</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_val" id="508">
                        <field name="VAL">2</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_val" id="509">
                    <field name="VAL">0</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="LLL_comment" id="510">
                <field name="NOTE">On a winning flip, the sender gets double their money back</field>
                <next>
                  <block type="LLL_spend" id="511" inline="true">
                    <value name="MONEY">
                      <block type="LLL_math" id="512" inline="true">
                        <field name="OP">*</field>
                        <value name="A">
                          <block type="LLL_tx" id="513">
                            <field name="PROP">callvalue</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="514">
                            <field name="VAL">2</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="TO">
                      <block type="LLL_tx" id="515">
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
  <block type="LLL_init" id="113" x="52" y="55">
    <statement name="INIT">
      <block type="LLL_comment" id="80">
        <field name="NOTE">*** An Ethereum smart contract to sell a website for "5000 by March"</field>
        <next>
          <block type="LLL_comment" id="81">
            <field name="NOTE">First, store buyer's ethereum address:</field>
            <next>
              <block type="LLL_store" id="82" inline="true">
                <field name="POOL">sstore</field>
                <value name="SPOT">
                  <block type="LLL_val" id="154">
                    <field name="VAL">BUYER</field>
                  </block>
                </value>
                <value name="VAL">
                  <block type="LLL_val" id="83">
                    <field name="VAL">0x6af26739b9ffef8aa2985252e5357fde</field>
                  </block>
                </value>
                <next>
                  <block type="LLL_comment" id="85">
                    <field name="NOTE">Then, store seller's ethereum address:</field>
                    <next>
                      <block type="LLL_store" id="86" inline="true">
                        <field name="POOL">sstore</field>
                        <value name="SPOT">
                          <block type="LLL_val" id="151">
                            <field name="VAL">SELLER</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="LLL_val" id="87">
                            <field name="VAL">0xfeab802c014588f08bfee2741086c375</field>
                          </block>
                        </value>
                        <next>
                          <block type="LLL_comment" id="89">
                            <field name="NOTE">April 1, 2014 is 1396310400 in "computer time"</field>
                            <next>
                              <block type="LLL_store" id="90" inline="true">
                                <field name="POOL">sstore</field>
                                <value name="SPOT">
                                  <block type="LLL_val" id="152">
                                    <field name="VAL">DEADLINE</field>
                                  </block>
                                </value>
                                <value name="VAL">
                                  <block type="LLL_val" id="91">
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
      <block type="LLL_comment" id="93">
        <field name="NOTE">If the agreed amount is received on time...</field>
        <next>
          <block type="LLL_when" id="94" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LLL_logic" id="95" inline="false">
                <field name="OP">and</field>
                <value name="A">
                  <block type="LLL_compare" id="96" inline="true">
                    <field name="OP">&gt;=</field>
                    <value name="A">
                      <block type="LLL_contract" id="114">
                        <field name="PROP">balance</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_currency" id="98" inline="true">
                        <field name="DENOM">ether</field>
                        <value name="AMT">
                          <block type="LLL_val" id="99">
                            <field name="VAL">5000</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_compare" id="100" inline="true">
                    <field name="OP">&lt;=</field>
                    <value name="A">
                      <block type="LLL_blockinfo" id="101">
                        <field name="PROP">timestamp</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_load" id="102" inline="true">
                        <field name="POOL">sload</field>
                        <value name="SPOT">
                          <block type="LLL_val" id="153">
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
              <block type="LLL_comment" id="104">
                <field name="NOTE">... then designate the buyer as the new website admin and pay the seller</field>
                <next>
                  <block type="LLL_store" id="105" inline="true">
                    <field name="POOL">sstore</field>
                    <value name="SPOT">
                      <block type="LLL_val" id="149">
                        <field name="VAL">WEBSITE_ADMIN</field>
                      </block>
                    </value>
                    <value name="VAL">
                      <block type="LLL_load" id="106" inline="true">
                        <field name="POOL">sload</field>
                        <value name="SPOT">
                          <block type="LLL_val" id="150">
                            <field name="VAL">BUYER</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="LLL_spend" id="109" inline="true">
                        <value name="MONEY">
                          <block type="LLL_contract" id="110">
                            <field name="PROP">balance</field>
                          </block>
                        </value>
                        <value name="TO">
                          <block type="LLL_load" id="111" inline="true">
                            <field name="POOL">sload</field>
                            <value name="SPOT">
                              <block type="LLL_val" id="155">
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
  <block type="LLL_comment" id="52" x="18" y="15">
    <field name="NOTE">Last Will &amp; Testament using a "dead-man's-switch"</field>
    <next>
      <block type="LLL_comment" id="53">
        <field name="NOTE">If the contract isn't touched by the creator at least once per month, he's dead</field>
        <next>
          <block type="LLL_comment" id="54">
            <field name="NOTE">Therefore, split all funds among the heirs</field>
          </block>
        </next>
      </block>
    </next>
  </block>
  <block type="LLL_init" id="55" x="18" y="92">
    <statement name="INIT">
      <block type="LLL_comment" id="56">
        <field name="NOTE">On contract creation, record the creator</field>
        <next>
          <block type="LLL_store" id="57" inline="true">
            <field name="POOL">sstore</field>
            <value name="SPOT">
              <block type="LLL_val" id="58">
                <field name="VAL">CREATOR</field>
              </block>
            </value>
            <value name="VAL">
              <block type="LLL_tx" id="59">
                <field name="PROP">origin</field>
              </block>
            </value>
          </block>
        </next>
      </block>
    </statement>
    <statement name="BODY">
      <block type="LLL_comment" id="60">
        <field name="NOTE">A future transaction received from the creator does three things: </field>
        <next>
          <block type="LLL_comment" id="61">
            <field name="NOTE">    1) It's proves he's alive and supresses distribution for another 30 days</field>
            <next>
              <block type="LLL_comment" id="62">
                <field name="NOTE">    2) It naturally increases the contract's balance by the amount of the transaction value</field>
                <next>
                  <block type="LLL_comment" id="63">
                    <field name="NOTE">    3) It optionally supplies a new list of heirs</field>
                    <next>
                      <block type="LLL_if" id="64" inline="false">
                        <value name="COND">
                          <block type="LLL_compare" id="65" inline="true">
                            <field name="OP">=</field>
                            <value name="A">
                              <block type="LLL_tx" id="66">
                                <field name="PROP">origin</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_load" id="67" inline="true">
                                <field name="POOL">sload</field>
                                <value name="SPOT">
                                  <block type="LLL_val" id="68">
                                    <field name="VAL">CREATOR</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="THEN">
                          <block type="LLL_comment" id="69">
                            <field name="NOTE">Here we record the time of this touch by the creator. He's still alive.</field>
                            <next>
                              <block type="LLL_store" id="70" inline="true">
                                <field name="POOL">sstore</field>
                                <value name="SPOT">
                                  <block type="LLL_val" id="71">
                                    <field name="VAL">LAST_TOUCH</field>
                                  </block>
                                </value>
                                <value name="VAL">
                                  <block type="LLL_blockinfo" id="72">
                                    <field name="PROP">timestamp</field>
                                  </block>
                                </value>
                                <next>
                                  <block type="LLL_when" id="73" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="LLL_compare" id="74" inline="true">
                                        <field name="OP">&gt;</field>
                                        <value name="A">
                                          <block type="LLL_contract" id="146">
                                            <field name="PROP">_input_count</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_val" id="76">
                                            <field name="VAL">0</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="THEN">
                                      <block type="LLL_comment" id="77">
                                        <field name="NOTE">The creator defines heirs by supplying their payment addresses as (padded 32-byte) inputs to the contract</field>
                                        <next>
                                          <block type="LLL_comment" id="78">
                                            <field name="NOTE">He can change these by supplying a new set of addresses which replaces all of the old set</field>
                                            <next>
                                              <block type="LLL_whileloop" id="79" inline="false">
                                                <field name="WORD">WHILE</field>
                                                <value name="COND">
                                                  <block type="LLL_compare" id="80" inline="true">
                                                    <field name="OP">&lt;=</field>
                                                    <value name="A">
                                                      <block type="LLL_mval" id="81">
                                                        <field name="VAL">i</field>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="LLL_contract" id="149">
                                                        <field name="PROP">_input_count</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO">
                                                  <block type="LLL_comment" id="83">
                                                    <field name="NOTE">each heir will be recorded for future reference in the storage range 1000+</field>
                                                    <next>
                                                      <block type="LLL_mstore" id="92" inline="true">
                                                        <field name="SPOT">i</field>
                                                        <value name="VAL">
                                                          <block type="LLL_math" id="93" inline="true">
                                                            <field name="OP">+</field>
                                                            <value name="A">
                                                              <block type="LLL_mval" id="94">
                                                                <field name="VAL">i</field>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="LLL_val" id="95">
                                                                <field name="VAL">1</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="LLL_store" id="84" inline="true">
                                                            <field name="POOL">sstore</field>
                                                            <value name="SPOT">
                                                              <block type="LLL_math" id="85" inline="true">
                                                                <field name="OP">+</field>
                                                                <value name="A">
                                                                  <block type="LLL_val" id="86">
                                                                    <field name="VAL">1000</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_mval" id="87">
                                                                    <field name="VAL">i</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="VAL">
                                                              <block type="LLL_thinput" id="147" inline="true">
                                                                <value name="ORDINAL">
                                                                  <block type="LLL_mval" id="148">
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
                                                <next>
                                                  <block type="LLL_whileloop" id="96" inline="false">
                                                    <field name="WORD">WHILE</field>
                                                    <value name="COND">
                                                      <block type="LLL_compare" id="97" inline="true">
                                                        <field name="OP">&lt;=</field>
                                                        <value name="A">
                                                          <block type="LLL_mval" id="98">
                                                            <field name="VAL">i</field>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="LLL_load" id="99" inline="true">
                                                            <field name="POOL">sload</field>
                                                            <value name="SPOT">
                                                              <block type="LLL_val" id="100">
                                                                <field name="VAL">HEIR_COUNT</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO">
                                                      <block type="LLL_comment" id="101">
                                                        <field name="NOTE">any extra former heirs are removed</field>
                                                        <next>
                                                          <block type="LLL_mstore" id="107" inline="true">
                                                            <field name="SPOT">i</field>
                                                            <value name="VAL">
                                                              <block type="LLL_math" id="108" inline="true">
                                                                <field name="OP">+</field>
                                                                <value name="A">
                                                                  <block type="LLL_mval" id="109">
                                                                    <field name="VAL">i</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_val" id="110">
                                                                    <field name="VAL">1</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="LLL_store" id="102" inline="true">
                                                                <field name="POOL">sstore</field>
                                                                <value name="SPOT">
                                                                  <block type="LLL_math" id="103" inline="true">
                                                                    <field name="OP">+</field>
                                                                    <value name="A">
                                                                      <block type="LLL_val" id="104">
                                                                        <field name="VAL">1000</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="LLL_mval" id="105">
                                                                        <field name="VAL">i</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="VAL">
                                                                  <block type="LLL_val" id="106">
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
                                                      <block type="LLL_comment" id="111">
                                                        <field name="NOTE">remember how many heirs we have for later</field>
                                                        <next>
                                                          <block type="LLL_store" id="112" inline="true">
                                                            <field name="POOL">sstore</field>
                                                            <value name="SPOT">
                                                              <block type="LLL_val" id="113">
                                                                <field name="VAL">HEIR_COUNT</field>
                                                              </block>
                                                            </value>
                                                            <value name="VAL">
                                                              <block type="LLL_contract" id="150">
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
                          <block type="LLL_comment" id="115">
                            <field name="NOTE">A transaction received by anyone else triggers distribution to heirs if we haven't heard from the creator </field>
                            <next>
                              <block type="LLL_comment" id="116">
                                <field name="NOTE">(there are 2,592,000 seconds in a month)</field>
                                <next>
                                  <block type="LLL_when" id="117" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="LLL_compare" id="118" inline="true">
                                        <field name="OP">&gt;</field>
                                        <value name="A">
                                          <block type="LLL_blockinfo" id="119">
                                            <field name="PROP">timestamp</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_math" id="120" inline="true">
                                            <field name="OP">+</field>
                                            <value name="A">
                                              <block type="LLL_load" id="121" inline="true">
                                                <field name="POOL">sload</field>
                                                <value name="SPOT">
                                                  <block type="LLL_val" id="122">
                                                    <field name="VAL">LAST_TOUCH</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_val" id="123">
                                                <field name="VAL">2592000</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="THEN">
                                      <block type="LLL_comment" id="124">
                                        <field name="NOTE">calculate the equal portion for each heir</field>
                                        <next>
                                          <block type="LLL_mstore" id="125" inline="true">
                                            <field name="SPOT">PORTION</field>
                                            <value name="VAL">
                                              <block type="LLL_math" id="126" inline="true">
                                                <field name="OP">div</field>
                                                <value name="A">
                                                  <block type="LLL_contract" id="127">
                                                    <field name="PROP">balance</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_load" id="128" inline="true">
                                                    <field name="POOL">sload</field>
                                                    <value name="SPOT">
                                                      <block type="LLL_val" id="129">
                                                        <field name="VAL">HEIR_COUNT</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="LLL_comment" id="130">
                                                <field name="NOTE">distribute the portions out to the heirs</field>
                                                <next>
                                                  <block type="LLL_whileloop" id="131" inline="false">
                                                    <field name="WORD">WHILE</field>
                                                    <value name="COND">
                                                      <block type="LLL_compare" id="132" inline="true">
                                                        <field name="OP">&lt;</field>
                                                        <value name="A">
                                                          <block type="LLL_mval" id="133">
                                                            <field name="VAL">i</field>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="LLL_load" id="134" inline="true">
                                                            <field name="POOL">sload</field>
                                                            <value name="SPOT">
                                                              <block type="LLL_val" id="135">
                                                                <field name="VAL">HEIR_COUNT</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO">
                                                      <block type="LLL_spend" id="136" inline="true">
                                                        <value name="MONEY">
                                                          <block type="LLL_mval" id="137">
                                                            <field name="VAL">PORTION</field>
                                                          </block>
                                                        </value>
                                                        <value name="TO">
                                                          <block type="LLL_load" id="138" inline="true">
                                                            <field name="POOL">sload</field>
                                                            <value name="SPOT">
                                                              <block type="LLL_math" id="139" inline="true">
                                                                <field name="OP">+</field>
                                                                <value name="A">
                                                                  <block type="LLL_val" id="140">
                                                                    <field name="VAL">1000</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_mval" id="141">
                                                                    <field name="VAL">i</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="LLL_mstore" id="142" inline="true">
                                                            <field name="SPOT">i</field>
                                                            <value name="VAL">
                                                              <block type="LLL_math" id="143" inline="true">
                                                                <field name="OP">+</field>
                                                                <value name="A">
                                                                  <block type="LLL_mval" id="144">
                                                                    <field name="VAL">i</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_val" id="145">
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
  <block type="LLL_init" id="290" x="9" y="12">
    <statement name="INIT">
      <block type="LLL_comment" id="291">
        <field name="NOTE">"I WANT HALF!" Marriage Smart Contract [based on the idea by @mids106 et al]</field>
        <next>
          <block type="LLL_comment" id="292">
            <field name="NOTE">At contract creation, we store the sender as partner_1 with partner_2 given as the 1st data item</field>
            <next>
              <block type="LLL_store" id="293" inline="true">
                <field name="POOL">sstore</field>
                <value name="SPOT">
                  <block type="LLL_val" id="294">
                    <field name="VAL">PARTNER_1</field>
                  </block>
                </value>
                <value name="VAL">
                  <block type="LLL_tx" id="295">
                    <field name="PROP">sender</field>
                  </block>
                </value>
                <next>
                  <block type="LLL_store" id="296" inline="true">
                    <field name="POOL">sstore</field>
                    <value name="SPOT">
                      <block type="LLL_val" id="297">
                        <field name="VAL">PARTNER_2</field>
                      </block>
                    </value>
                    <value name="VAL">
                      <block type="LLL_input" id="298">
                        <field name="INDEX">0</field>
                      </block>
                    </value>
                    <next>
                      <block type="LLL_store" id="299" inline="true">
                        <field name="POOL">sstore</field>
                        <value name="SPOT">
                          <block type="LLL_val" id="300">
                            <field name="VAL">STATE</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="LLL_val" id="301">
                            <field name="VAL">PROPOSED</field>
                          </block>
                        </value>
                        <next>
                          <block type="LLL_comment" id="302">
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
      <block type="LLL_when" id="303" inline="false">
        <field name="WORD">when</field>
        <value name="COND">
          <block type="LLL_compare" id="304" inline="true">
            <field name="OP">=</field>
            <value name="A">
              <block type="LLL_load" id="305" inline="true">
                <field name="POOL">sload</field>
                <value name="SPOT">
                  <block type="LLL_val" id="306">
                    <field name="VAL">STATE</field>
                  </block>
                </value>
              </block>
            </value>
            <value name="B">
              <block type="LLL_val" id="307">
                <field name="VAL">PROPOSED</field>
              </block>
            </value>
          </block>
        </value>
        <statement name="THEN">
          <block type="LLL_comment" id="308">
            <field name="NOTE"> Partner_2 can accept the proposal by sending in a transaction with partner_1 given as the first data item</field>
            <next>
              <block type="LLL_when" id="309" inline="false">
                <field name="WORD">when</field>
                <value name="COND">
                  <block type="LLL_logic" id="310" inline="false">
                    <field name="OP">and</field>
                    <value name="A">
                      <block type="LLL_compare" id="311" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="LLL_tx" id="312">
                            <field name="PROP">origin</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="313">
                            <field name="VAL">PARTNER_2</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_compare" id="314" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="LLL_input" id="315">
                            <field name="INDEX">0</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_load" id="316" inline="true">
                            <field name="POOL">sload</field>
                            <value name="SPOT">
                              <block type="LLL_val" id="317">
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
                  <block type="LLL_store" id="318" inline="true">
                    <field name="POOL">sstore</field>
                    <value name="SPOT">
                      <block type="LLL_val" id="319">
                        <field name="VAL">STATE</field>
                      </block>
                    </value>
                    <value name="VAL">
                      <block type="LLL_val" id="320">
                        <field name="VAL">MARRIED</field>
                      </block>
                    </value>
                  </block>
                </statement>
                <next>
                  <block type="LLL_comment" id="321">
                    <field name="NOTE">Partner_1 and Partner_2 are now "MARRIED"!</field>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
        <next>
          <block type="LLL_when" id="322" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LLL_logic" id="323" inline="false">
                <field name="OP">and</field>
                <value name="A">
                  <block type="LLL_compare" id="324" inline="true">
                    <field name="OP">=</field>
                    <value name="A">
                      <block type="LLL_load" id="325" inline="true">
                        <field name="POOL">sload</field>
                        <value name="SPOT">
                          <block type="LLL_val" id="326">
                            <field name="VAL">STATE</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_val" id="327">
                        <field name="VAL">MARRIED</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_logic" id="328" inline="false">
                    <field name="OP">or</field>
                    <value name="A">
                      <block type="LLL_compare" id="329" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="LLL_tx" id="330">
                            <field name="PROP">origin</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="331">
                            <field name="VAL">PARTNER_1</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_compare" id="332" inline="true">
                        <field name="OP">=</field>
                        <value name="A">
                          <block type="LLL_tx" id="333">
                            <field name="PROP">origin</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_val" id="334">
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
              <block type="LLL_comment" id="335">
                <field name="NOTE">Once married, the contract is a "joint" account and each partner must send in the same instruction to make a withdraw</field>
                <next>
                  <block type="LLL_comment" id="336">
                    <field name="NOTE">A valid withdrawal instruction is an incoming transaction where: </field>
                    <next>
                      <block type="LLL_comment" id="337">
                        <field name="NOTE">1st input is the withdraw code, 2nd input is the destination address, and 3rd input is the amount</field>
                        <next>
                          <block type="LLL_when" id="338" inline="false">
                            <field name="WORD">when</field>
                            <value name="COND">
                              <block type="LLL_compare" id="339" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_input" id="340">
                                    <field name="INDEX">0</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_val" id="341">
                                    <field name="VAL">WITHDRAW</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="THEN">
                              <block type="LLL_if" id="342" inline="false">
                                <value name="COND">
                                  <block type="LLL_logic" id="343" inline="false">
                                    <field name="OP">and</field>
                                    <value name="A">
                                      <block type="LLL_compare" id="344" inline="true">
                                        <field name="OP">!=</field>
                                        <value name="A">
                                          <block type="LLL_load" id="345" inline="true">
                                            <field name="POOL">sload</field>
                                            <value name="SPOT">
                                              <block type="LLL_val" id="346">
                                                <field name="VAL">WITHDRAW_CREATOR</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_tx" id="347">
                                            <field name="PROP">origin</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="LLL_logic" id="348" inline="false">
                                        <field name="OP">and</field>
                                        <value name="A">
                                          <block type="LLL_compare" id="349" inline="true">
                                            <field name="OP">=</field>
                                            <value name="A">
                                              <block type="LLL_thinput" id="411" inline="true">
                                                <value name="ORDINAL">
                                                  <block type="LLL_val" id="412">
                                                    <field name="VAL">2</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_load" id="352" inline="true">
                                                <field name="POOL">sload</field>
                                                <value name="SPOT">
                                                  <block type="LLL_val" id="353">
                                                    <field name="VAL">WITHDRAW_TO</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_compare" id="354" inline="true">
                                            <field name="OP">=</field>
                                            <value name="A">
                                              <block type="LLL_thinput" id="413" inline="true">
                                                <value name="ORDINAL">
                                                  <block type="LLL_val" id="414">
                                                    <field name="VAL">3</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_load" id="357" inline="true">
                                                <field name="POOL">sload</field>
                                                <value name="SPOT">
                                                  <block type="LLL_val" id="358">
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
                                  <block type="LLL_comment" id="359">
                                    <field name="NOTE">If a withdraw request is already pending from the other partner and this request matches, then do it.</field>
                                    <next>
                                      <block type="LLL_spend" id="360" inline="true">
                                        <value name="MONEY">
                                          <block type="LLL_load" id="361" inline="true">
                                            <field name="POOL">sload</field>
                                            <value name="SPOT">
                                              <block type="LLL_val" id="362">
                                                <field name="VAL">WITHDRAW_AMOUNT</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="TO">
                                          <block type="LLL_load" id="363" inline="true">
                                            <field name="POOL">sload</field>
                                            <value name="SPOT">
                                              <block type="LLL_val" id="364">
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
                                  <block type="LLL_comment" id="365">
                                    <field name="NOTE">this is a new withdraw request; store it as pending until a matching request is received from other partner</field>
                                    <next>
                                      <block type="LLL_store" id="366" inline="true">
                                        <field name="POOL">sstore</field>
                                        <value name="SPOT">
                                          <block type="LLL_val" id="367">
                                            <field name="VAL">WITHDRAW_TO</field>
                                          </block>
                                        </value>
                                        <value name="VAL">
                                          <block type="LLL_thinput" id="415" inline="true">
                                            <value name="ORDINAL">
                                              <block type="LLL_val" id="416">
                                                <field name="VAL">2</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="LLL_store" id="370" inline="true">
                                            <field name="POOL">sstore</field>
                                            <value name="SPOT">
                                              <block type="LLL_val" id="371">
                                                <field name="VAL">WITHDRAW_AMOUNT</field>
                                              </block>
                                            </value>
                                            <value name="VAL">
                                              <block type="LLL_thinput" id="417" inline="true">
                                                <value name="ORDINAL">
                                                  <block type="LLL_val" id="418">
                                                    <field name="VAL">3</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="LLL_store" id="374" inline="true">
                                                <field name="POOL">sstore</field>
                                                <value name="SPOT">
                                                  <block type="LLL_val" id="375">
                                                    <field name="VAL">WITHDRAW_CREATOR</field>
                                                  </block>
                                                </value>
                                                <value name="VAL">
                                                  <block type="LLL_tx" id="376">
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
                              <block type="LLL_comment" id="377">
                                <field name="NOTE">Once married, the partners must both agree in order to get divorced and split the pot. I WANT HALF!</field>
                                <next>
                                  <block type="LLL_when" id="378" inline="false">
                                    <field name="WORD">when</field>
                                    <value name="COND">
                                      <block type="LLL_compare" id="379" inline="true">
                                        <field name="OP">=</field>
                                        <value name="A">
                                          <block type="LLL_input" id="380">
                                            <field name="INDEX">0</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_val" id="381">
                                            <field name="VAL">DIVORCE</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="THEN">
                                      <block type="LLL_if" id="382" inline="false">
                                        <value name="COND">
                                          <block type="LLL_compare" id="383" inline="true">
                                            <field name="OP">!=</field>
                                            <value name="A">
                                              <block type="LLL_load" id="384" inline="true">
                                                <field name="POOL">sload</field>
                                                <value name="SPOT">
                                                  <block type="LLL_val" id="385">
                                                    <field name="VAL">DIVORCE_CREATOR</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_tx" id="386">
                                                <field name="PROP">origin</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="THEN">
                                          <block type="LLL_comment" id="387">
                                            <field name="NOTE">a divorce request is already pending and 2nd party is agreeing, so split the pot</field>
                                            <next>
                                              <block type="LLL_store" id="388" inline="true">
                                                <field name="POOL">mstore</field>
                                                <value name="SPOT">
                                                  <block type="LLL_val" id="389">
                                                    <field name="VAL">HALF</field>
                                                  </block>
                                                </value>
                                                <value name="VAL">
                                                  <block type="LLL_math" id="390" inline="true">
                                                    <field name="OP">div</field>
                                                    <value name="A">
                                                      <block type="LLL_contract" id="391">
                                                        <field name="PROP">balance</field>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="LLL_val" id="392">
                                                        <field name="VAL">2</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="LLL_spend" id="393" inline="true">
                                                    <value name="MONEY">
                                                      <block type="LLL_load" id="394" inline="true">
                                                        <field name="POOL">mload</field>
                                                        <value name="SPOT">
                                                          <block type="LLL_val" id="395">
                                                            <field name="VAL">HALF</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="TO">
                                                      <block type="LLL_load" id="396" inline="true">
                                                        <field name="POOL">sload</field>
                                                        <value name="SPOT">
                                                          <block type="LLL_val" id="397">
                                                            <field name="VAL">PARTNER_1</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="LLL_spend" id="398" inline="true">
                                                        <value name="MONEY">
                                                          <block type="LLL_load" id="399" inline="true">
                                                            <field name="POOL">mload</field>
                                                            <value name="SPOT">
                                                              <block type="LLL_val" id="400">
                                                                <field name="VAL">HALF</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="TO">
                                                          <block type="LLL_load" id="401" inline="true">
                                                            <field name="POOL">sload</field>
                                                            <value name="SPOT">
                                                              <block type="LLL_val" id="402">
                                                                <field name="VAL">PARTNER_2</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="LLL_store" id="403" inline="true">
                                                            <field name="POOL">sstore</field>
                                                            <value name="SPOT">
                                                              <block type="LLL_val" id="404">
                                                                <field name="VAL">STATE</field>
                                                              </block>
                                                            </value>
                                                            <value name="VAL">
                                                              <block type="LLL_val" id="405">
                                                                <field name="VAL">DIVORCED</field>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="LLL_comment" id="406">
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
                                          <block type="LLL_comment" id="407">
                                            <field name="NOTE">make a new divorce request pending, waiting for agreement</field>
                                            <next>
                                              <block type="LLL_store" id="408" inline="true">
                                                <field name="POOL">sstore</field>
                                                <value name="SPOT">
                                                  <block type="LLL_val" id="409">
                                                    <field name="VAL">DIVORCE_CREATOR</field>
                                                  </block>
                                                </value>
                                                <value name="VAL">
                                                  <block type="LLL_tx" id="410">
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
                  <block type="LLL_input" id="66">
                    <field name="INDEX">0</field>
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
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="LLL_comment" id="324" x="14" y="6">
    <field name="NOTE">Insurance Policy</field>
  </block>
  <block type="LLL_init" id="325" x="14" y="32">
    <statement name="INIT">
      <block type="LLL_store" id="326" inline="true">
        <field name="POOL">sstore</field>
        <value name="SPOT">
          <block type="LLL_val" id="327">
            <field name="VAL">CUSTOMER</field>
          </block>
        </value>
        <value name="VAL">
          <block type="LLL_val" id="328">
            <field name="VAL">0xb7b2e5e12992267f85455ffee1435f02760402f0</field>
          </block>
        </value>
        <next>
          <block type="LLL_store" id="329" inline="true">
            <field name="POOL">sstore</field>
            <value name="SPOT">
              <block type="LLL_val" id="330">
                <field name="VAL">CLAIM_ADJUSTER</field>
              </block>
            </value>
            <value name="VAL">
              <block type="LLL_val" id="331">
                <field name="VAL">0xc61185cffa955bd1a6b914a6c616b3cdd5206aa1</field>
              </block>
            </value>
            <next>
              <block type="LLL_store" id="332" inline="true">
                <field name="POOL">sstore</field>
                <value name="SPOT">
                  <block type="LLL_val" id="333">
                    <field name="VAL">MONTHLY_PREMIUM</field>
                  </block>
                </value>
                <value name="VAL">
                  <block type="LLL_currency" id="334" inline="true">
                    <field name="DENOM">ether</field>
                    <value name="AMT">
                      <block type="LLL_val" id="335">
                        <field name="VAL">100</field>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="LLL_comment" id="336">
                    <field name="NOTE">Seconds in a month: 2628000, Seconds since 1970 on 1/1/2014: 1387584000</field>
                    <next>
                      <block type="LLL_store" id="337" inline="true">
                        <field name="POOL">sstore</field>
                        <value name="SPOT">
                          <block type="LLL_val" id="338">
                            <field name="VAL">START_DATE</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="LLL_val" id="339">
                            <field name="VAL">1387584000</field>
                          </block>
                        </value>
                        <next>
                          <block type="LLL_store" id="340" inline="true">
                            <field name="POOL">sstore</field>
                            <value name="SPOT">
                              <block type="LLL_val" id="341">
                                <field name="VAL">ARBITRATOR</field>
                              </block>
                            </value>
                            <value name="VAL">
                              <block type="LLL_val" id="342">
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
      <block type="LLL_comment" id="343">
        <field name="NOTE">Customer calling... with claim evidence provided as the contract input</field>
        <next>
          <block type="LLL_when" id="344" inline="false">
            <field name="WORD">when</field>
            <value name="COND">
              <block type="LLL_compare" id="345" inline="true">
                <field name="OP">=</field>
                <value name="A">
                  <block type="LLL_contract" id="346">
                    <field name="PROP">caller</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_load" id="347" inline="true">
                    <field name="POOL">sload</field>
                    <value name="SPOT">
                      <block type="LLL_val" id="348">
                        <field name="VAL">CUSTOMER</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <statement name="THEN">
              <block type="LLL_comment" id="349">
                <field name="NOTE">Increment customer's balance with the amount he's sending in</field>
                <next>
                  <block type="LLL_store" id="350" inline="false">
                    <field name="POOL">sstore</field>
                    <value name="SPOT">
                      <block type="LLL_val" id="351">
                        <field name="VAL">CUSTOMER_BALANCE</field>
                      </block>
                    </value>
                    <value name="VAL">
                      <block type="LLL_math" id="352" inline="true">
                        <field name="OP">+</field>
                        <value name="A">
                          <block type="LLL_load" id="353" inline="true">
                            <field name="POOL">sload</field>
                            <value name="SPOT">
                              <block type="LLL_val" id="354">
                                <field name="VAL">CUSTOMER_BALANCE</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="LLL_tx" id="355">
                            <field name="PROP">callvalue</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="LLL_store" id="356" inline="true">
                        <field name="POOL">sstore</field>
                        <value name="SPOT">
                          <block type="LLL_val" id="357">
                            <field name="VAL">PROOF_OF_GOOF</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="LLL_input" id="394">
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
              <block type="LLL_comment" id="360">
                <field name="NOTE">Adjuster calling... with the payout amount as the contract input</field>
                <next>
                  <block type="LLL_comment" id="361">
                    <field name="NOTE">(Or it's the arbitrator calling... in the event there was a dispute)</field>
                    <next>
                      <block type="LLL_when" id="362" inline="false">
                        <field name="WORD">when</field>
                        <value name="COND">
                          <block type="LLL_logic" id="363" inline="false">
                            <field name="OP">or</field>
                            <value name="A">
                              <block type="LLL_compare" id="364" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_contract" id="365">
                                    <field name="PROP">caller</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_load" id="366" inline="true">
                                    <field name="POOL">sload</field>
                                    <value name="SPOT">
                                      <block type="LLL_val" id="367">
                                        <field name="VAL">ARBITRATOR</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_compare" id="368" inline="true">
                                <field name="OP">=</field>
                                <value name="A">
                                  <block type="LLL_contract" id="369">
                                    <field name="PROP">caller</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_load" id="370" inline="true">
                                    <field name="POOL">sload</field>
                                    <value name="SPOT">
                                      <block type="LLL_val" id="371">
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
                          <block type="LLL_comment" id="372">
                            <field name="NOTE">label the calculation for elapsed policy months</field>
                            <next>
                              <block type="LLL_mstore" id="373" inline="true">
                                <field name="SPOT">POLICY_MONTHS</field>
                                <value name="VAL">
                                  <block type="LLL_math" id="374" inline="true">
                                    <field name="OP">div</field>
                                    <value name="A">
                                      <block type="LLL_math" id="375" inline="true">
                                        <field name="OP">-</field>
                                        <value name="A">
                                          <block type="LLL_blockinfo" id="376">
                                            <field name="PROP">timestamp</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_load" id="377" inline="true">
                                            <field name="POOL">sload</field>
                                            <value name="SPOT">
                                              <block type="LLL_val" id="378">
                                                <field name="VAL">START_DATE</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="LLL_val" id="379">
                                        <field name="VAL">2628000</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <next>
                                  <block type="LLL_comment" id="380">
                                    <field name="NOTE">when the received premiums have equaled the required premium, the policy is paid up, so pay claim</field>
                                    <next>
                                      <block type="LLL_when" id="381" inline="false">
                                        <field name="WORD">when</field>
                                        <value name="COND">
                                          <block type="LLL_compare" id="382" inline="false">
                                            <field name="OP">&gt;=</field>
                                            <value name="A">
                                              <block type="LLL_math" id="383" inline="true">
                                                <field name="OP">div</field>
                                                <value name="A">
                                                  <block type="LLL_load" id="384" inline="true">
                                                    <field name="POOL">sload</field>
                                                    <value name="SPOT">
                                                      <block type="LLL_val" id="385">
                                                        <field name="VAL">CUSTOMER_BALANCE</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_mval" id="386">
                                                    <field name="VAL">POLICY_MONTHS</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_load" id="387" inline="true">
                                                <field name="POOL">sload</field>
                                                <value name="SPOT">
                                                  <block type="LLL_val" id="388">
                                                    <field name="VAL">MONTHLY_PREMIUM</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="THEN">
                                          <block type="LLL_spend" id="389" inline="true">
                                            <value name="MONEY">
                                              <block type="LLL_input" id="395">
                                                <field name="INDEX">0</field>
                                              </block>
                                            </value>
                                            <value name="TO">
                                              <block type="LLL_load" id="392" inline="true">
                                                <field name="POOL">sload</field>
                                                <value name="SPOT">
                                                  <block type="LLL_val" id="393">
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
  <block type="LLL_comment" id="554" x="40" y="36">
    <field name="NOTE">A basic vote registration contract</field>
  </block>
  <block type="LLL_init" id="555" x="40" y="61">
    <statement name="INIT">
      <block type="LLL_comment" id="556">
        <field name="NOTE">Designate the "admin", who will receive any collected funds at the end</field>
        <next>
          <block type="LLL_comment" id="557">
            <field name="NOTE">(Donations are optional and don't affect the voting but we like a way to get received funds out.)</field>
            <next>
              <block type="LLL_sstore" id="558" inline="true">
                <field name="SPOT">ADMIN</field>
                <value name="VAL">
                  <block type="LLL_contract" id="559">
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
      <block type="LLL_comment" id="560">
        <field name="NOTE">The user supplies what they're voting for as the contract input (e.g. "COKE" or "PEPSI") </field>
        <next>
          <block type="LLL_mstore" id="561" inline="true">
            <field name="SPOT">VOTED_ITEM</field>
            <value name="VAL">
              <block type="LLL_input" id="562">
                <field name="INDEX">0</field>
              </block>
            </value>
            <next>
              <block type="LLL_comment" id="563">
                <field name="NOTE">Make sure they haven't voted already first</field>
                <next>
                  <block type="LLL_when" id="564" inline="false">
                    <field name="WORD">when</field>
                    <value name="COND">
                      <block type="LLL_prefixop" id="565" inline="true">
                        <field name="OP">not</field>
                        <value name="A">
                          <block type="LLL_load" id="566" inline="true">
                            <field name="POOL">sload</field>
                            <value name="SPOT">
                              <block type="LLL_contract" id="567">
                                <field name="PROP">caller</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="THEN">
                      <block type="LLL_comment" id="568">
                        <field name="NOTE">The contract records a vote by incrementing the number of votes associated with the provided input</field>
                        <next>
                          <block type="LLL_store" id="569" inline="false">
                            <field name="POOL">sstore</field>
                            <value name="SPOT">
                              <block type="LLL_mval" id="570">
                                <field name="VAL">VOTED_ITEM</field>
                              </block>
                            </value>
                            <value name="VAL">
                              <block type="LLL_math" id="571" inline="true">
                                <field name="OP">+</field>
                                <value name="A">
                                  <block type="LLL_load" id="572" inline="true">
                                    <field name="POOL">sload</field>
                                    <value name="SPOT">
                                      <block type="LLL_mval" id="573">
                                        <field name="VAL">VOTED_ITEM</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_val" id="574">
                                    <field name="VAL">1</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <next>
                              <block type="LLL_comment" id="575">
                                <field name="NOTE">It also records the address of the caller and what they voted for, so this is public record</field>
                                <next>
                                  <block type="LLL_store" id="576" inline="true">
                                    <field name="POOL">sstore</field>
                                    <value name="SPOT">
                                      <block type="LLL_contract" id="577">
                                        <field name="PROP">caller</field>
                                      </block>
                                    </value>
                                    <value name="VAL">
                                      <block type="LLL_mval" id="578">
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
                      <block type="LLL_comment" id="579">
                        <field name="NOTE">Release all funds to the admin when they call in without a vote</field>
                        <next>
                          <block type="LLL_when" id="580" inline="false">
                            <field name="WORD">when</field>
                            <value name="COND">
                              <block type="LLL_logic" id="581" inline="false">
                                <field name="OP">and</field>
                                <value name="A">
                                  <block type="LLL_compare" id="582" inline="true">
                                    <field name="OP">=</field>
                                    <value name="A">
                                      <block type="LLL_contract" id="583">
                                        <field name="PROP">caller</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="LLL_sval" id="584">
                                        <field name="VAL">ADMIN</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="LLL_prefixop" id="585" inline="true">
                                    <field name="OP">not</field>
                                    <value name="A">
                                      <block type="LLL_mval" id="586">
                                        <field name="VAL">VOTED_ITEM</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="THEN">
                              <block type="LLL_spend" id="587" inline="true">
                                <value name="MONEY">
                                  <block type="LLL_contract" id="588">
                                    <field name="PROP">balance</field>
                                  </block>
                                </value>
                                <value name="TO">
                                  <block type="LLL_sval" id="589">
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
  <block type="LLL_init" id="472" x="41" y="32">
    <statement name="INIT">
      <block type="LLL_comment" id="399">
        <field name="NOTE">"Swear Jar" - An informal method among groups to self-discourage bad behavior</field>
        <next>
          <block type="LLL_comment" id="400">
            <field name="NOTE">(swearing, being late for meetings, smoking, missing a workout, etc.)</field>
            <next>
              <block type="LLL_comment" id="401">
                <field name="NOTE">Members voluntarily pay in for each infraction &amp; the best-behaved gets the pot each month</field>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
    <statement name="BODY">
      <block type="LLL_comment" id="405">
        <field name="NOTE">First add this caller to the participant list if they are new and give them a minimal total</field>
        <next>
          <block type="LLL_mstore" id="402" inline="true">
            <field name="SPOT">CALLER_TOTAL</field>
            <value name="VAL">
              <block type="LLL_load" id="403" inline="true">
                <field name="POOL">sload</field>
                <value name="SPOT">
                  <block type="LLL_contract" id="404">
                    <field name="PROP">caller</field>
                  </block>
                </value>
              </block>
            </value>
            <next>
              <block type="LLL_when" id="406" inline="false">
                <field name="WORD">when</field>
                <value name="COND">
                  <block type="LLL_compare" id="407" inline="true">
                    <field name="OP">=</field>
                    <value name="A">
                      <block type="LLL_mval" id="408">
                        <field name="VAL">CALLER_TOTAL</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_val" id="409">
                        <field name="VAL">0</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="THEN">
                  <block type="LLL_store" id="410" inline="true">
                    <field name="POOL">sstore</field>
                    <value name="SPOT">
                      <block type="LLL_sval" id="411">
                        <field name="VAL">NEXT_MEMBER_SPOT</field>
                      </block>
                    </value>
                    <value name="VAL">
                      <block type="LLL_contract" id="412">
                        <field name="PROP">caller</field>
                      </block>
                    </value>
                    <next>
                      <block type="LLL_sstore" id="413" inline="true">
                        <field name="SPOT">NEXT_MEMBER_SPOT</field>
                        <value name="VAL">
                          <block type="LLL_math" id="414" inline="true">
                            <field name="OP">+</field>
                            <value name="A">
                              <block type="LLL_sval" id="415">
                                <field name="VAL">NEXT_MEMBER_SPOT</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_val" id="416">
                                <field name="VAL">1</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="LLL_store" id="417" inline="true">
                            <field name="POOL">sstore</field>
                            <value name="SPOT">
                              <block type="LLL_contract" id="418">
                                <field name="PROP">caller</field>
                              </block>
                            </value>
                            <value name="VAL">
                              <block type="LLL_currency" id="419" inline="true">
                                <field name="DENOM">wei</field>
                                <value name="AMT">
                                  <block type="LLL_val" id="420">
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
                  <block type="LLL_comment" id="421">
                    <field name="NOTE">Next update their infraction total for the world to see (social pressure)</field>
                    <next>
                      <block type="LLL_store" id="422" inline="true">
                        <field name="POOL">sstore</field>
                        <value name="SPOT">
                          <block type="LLL_contract" id="423">
                            <field name="PROP">caller</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="LLL_math" id="424" inline="true">
                            <field name="OP">+</field>
                            <value name="A">
                              <block type="LLL_mval" id="425">
                                <field name="VAL">CALLER_TOTAL</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_tx" id="426">
                                <field name="PROP">callvalue</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="LLL_comment" id="427">
                            <field name="NOTE">If it's a month (2592000 seconds) since the last time, find the best-behaved member to pay off </field>
                            <next>
                              <block type="LLL_when" id="428" inline="false">
                                <field name="WORD">when</field>
                                <value name="COND">
                                  <block type="LLL_compare" id="429" inline="true">
                                    <field name="OP">&lt;</field>
                                    <value name="A">
                                      <block type="LLL_sval" id="430">
                                        <field name="VAL">LAST_EMPTY_TIME</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="LLL_math" id="431" inline="true">
                                        <field name="OP">-</field>
                                        <value name="A">
                                          <block type="LLL_blockinfo" id="432">
                                            <field name="PROP">timestamp</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_val" id="433">
                                            <field name="VAL">2592000</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="THEN">
                                  <block type="LLL_sstore" id="434" inline="true">
                                    <field name="SPOT">LAST_EMPTY_TIME</field>
                                    <value name="VAL">
                                      <block type="LLL_blockinfo" id="435">
                                        <field name="PROP">timestamp</field>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="LLL_comment" id="436">
                                        <field name="NOTE">Initialize the "best total" to something terribly high. (We'll see why later)</field>
                                        <next>
                                          <block type="LLL_mstore" id="437" inline="true">
                                            <field name="SPOT">BEST_TOTAL</field>
                                            <value name="VAL">
                                              <block type="LLL_currency" id="438" inline="true">
                                                <field name="DENOM">ether</field>
                                                <value name="AMT">
                                                  <block type="LLL_val" id="439">
                                                    <field name="VAL">99999999999</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="LLL_comment" id="440">
                                                <field name="NOTE">Loop through members looking for the best behaved (the one with the lowest total)</field>
                                                <next>
                                                  <block type="LLL_whileloop" id="441" inline="false">
                                                    <field name="WORD">WHILE</field>
                                                    <value name="COND">
                                                      <block type="LLL_compare" id="442" inline="true">
                                                        <field name="OP">&lt;</field>
                                                        <value name="A">
                                                          <block type="LLL_mval" id="443">
                                                            <field name="VAL">i</field>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="LLL_sval" id="444">
                                                            <field name="VAL">NEXT_MEMBER_SPOT</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO">
                                                      <block type="LLL_mstore" id="445" inline="true">
                                                        <field name="SPOT">ONE_MEMBER</field>
                                                        <value name="VAL">
                                                          <block type="LLL_load" id="446" inline="true">
                                                            <field name="POOL">sload</field>
                                                            <value name="SPOT">
                                                              <block type="LLL_mval" id="447">
                                                                <field name="VAL">i</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="LLL_mstore" id="448" inline="true">
                                                            <field name="SPOT">ONE_MEMBER_TOTAL</field>
                                                            <value name="VAL">
                                                              <block type="LLL_load" id="449" inline="true">
                                                                <field name="POOL">sload</field>
                                                                <value name="SPOT">
                                                                  <block type="LLL_mval" id="450">
                                                                    <field name="VAL">ONE_MEMBER</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="LLL_when" id="451" inline="false">
                                                                <field name="WORD">when</field>
                                                                <value name="COND">
                                                                  <block type="LLL_compare" id="452" inline="true">
                                                                    <field name="OP">&lt;</field>
                                                                    <value name="A">
                                                                      <block type="LLL_mval" id="453">
                                                                        <field name="VAL">ONE_MEMBER_TOTAL</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="LLL_mval" id="454">
                                                                        <field name="VAL">BEST_TOTAL</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <statement name="THEN">
                                                                  <block type="LLL_comment" id="455">
                                                                    <field name="NOTE">Label the best one so far. (Early registration breaks a tie)</field>
                                                                    <next>
                                                                      <block type="LLL_mstore" id="456" inline="true">
                                                                        <field name="SPOT">BEST_MEMBER</field>
                                                                        <value name="VAL">
                                                                          <block type="LLL_mval" id="457">
                                                                            <field name="VAL">ONE_MEMBER</field>
                                                                          </block>
                                                                        </value>
                                                                        <next>
                                                                          <block type="LLL_mstore" id="458" inline="true">
                                                                            <field name="SPOT">BEST_TOTAL</field>
                                                                            <value name="VAL">
                                                                              <block type="LLL_mval" id="459">
                                                                                <field name="VAL">ONE_MEMBER_TOTAL</field>
                                                                              </block>
                                                                            </value>
                                                                            <next>
                                                                              <block type="LLL_comment" id="460">
                                                                                <field name="NOTE">Reset each score to the minimum for the coming  month</field>
                                                                                <next>
                                                                                  <block type="LLL_store" id="461" inline="true">
                                                                                    <field name="POOL">sstore</field>
                                                                                    <value name="SPOT">
                                                                                      <block type="LLL_mval" id="462">
                                                                                        <field name="VAL">ONE_MEMBER</field>
                                                                                      </block>
                                                                                    </value>
                                                                                    <value name="VAL">
                                                                                      <block type="LLL_currency" id="463" inline="true">
                                                                                        <field name="DENOM">wei</field>
                                                                                        <value name="AMT">
                                                                                          <block type="LLL_val" id="464">
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
                                                                  <block type="LLL_mstore" id="465" inline="true">
                                                                    <field name="SPOT">i</field>
                                                                    <value name="VAL">
                                                                      <block type="LLL_math" id="466" inline="true">
                                                                        <field name="OP">+</field>
                                                                        <value name="A">
                                                                          <block type="LLL_mval" id="467">
                                                                            <field name="VAL">i</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="B">
                                                                          <block type="LLL_val" id="468">
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
                                                      <block type="LLL_spend" id="469" inline="true">
                                                        <value name="MONEY">
                                                          <block type="LLL_contract" id="471">
                                                            <field name="PROP">balance</field>
                                                          </block>
                                                        </value>
                                                        <value name="TO">
                                                          <block type="LLL_mval" id="470">
                                                            <field name="VAL">BEST_MEMBER</field>
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
  <block type="LLL_init" id="630" x="24" y="48">
    <statement name="INIT">
      <block type="LLL_comment" id="631">
        <field name="NOTE">Rock, Paper, Scissors</field>
        <next>
          <block type="LLL_store" id="632" inline="true">
            <field name="POOL">sstore</field>
            <value name="SPOT">
              <block type="LLL_math" id="633" inline="true">
                <field name="OP">+</field>
                <value name="A">
                  <block type="LLL_val" id="634">
                    <field name="VAL">PLAYER</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_val" id="635">
                    <field name="VAL">1</field>
                  </block>
                </value>
              </block>
            </value>
            <value name="VAL">
              <block type="LLL_val" id="636">
                <field name="VAL">0xb7b2e5e12992267f85455ffee1435f02760402f0</field>
              </block>
            </value>
            <next>
              <block type="LLL_store" id="637" inline="true">
                <field name="POOL">sstore</field>
                <value name="SPOT">
                  <block type="LLL_math" id="638" inline="true">
                    <field name="OP">+</field>
                    <value name="A">
                      <block type="LLL_val" id="639">
                        <field name="VAL">PLAYER</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_val" id="640">
                        <field name="VAL">2</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="VAL">
                  <block type="LLL_val" id="641">
                    <field name="VAL">0xfeab802c014588f08bfee2741086c37582b30dc2</field>
                  </block>
                </value>
                <next>
                  <block type="LLL_store" id="642" inline="true">
                    <field name="POOL">sstore</field>
                    <value name="SPOT">
                      <block type="LLL_val" id="643">
                        <field name="VAL">0xb7b2e5e12992267f85455ffee1435f02760402f0</field>
                      </block>
                    </value>
                    <value name="VAL">
                      <block type="LLL_val" id="644">
                        <field name="VAL">1</field>
                      </block>
                    </value>
                    <next>
                      <block type="LLL_store" id="645" inline="true">
                        <field name="POOL">sstore</field>
                        <value name="SPOT">
                          <block type="LLL_val" id="646">
                            <field name="VAL">0xfeab802c014588f08bfee2741086c37582b30dc2</field>
                          </block>
                        </value>
                        <value name="VAL">
                          <block type="LLL_val" id="647">
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
      <block type="LLL_mstore" id="648" inline="true">
        <field name="SPOT">PLAYER_NUM</field>
        <value name="VAL">
          <block type="LLL_load" id="649" inline="true">
            <field name="POOL">sload</field>
            <value name="SPOT">
              <block type="LLL_contract" id="650">
                <field name="PROP">caller</field>
              </block>
            </value>
          </block>
        </value>
        <next>
          <block type="LLL_store" id="651" inline="true">
            <field name="POOL">sstore</field>
            <value name="SPOT">
              <block type="LLL_math" id="652" inline="true">
                <field name="OP">+</field>
                <value name="A">
                  <block type="LLL_val" id="653">
                    <field name="VAL">CHOICE</field>
                  </block>
                </value>
                <value name="B">
                  <block type="LLL_mval" id="654">
                    <field name="VAL">PLAYER_NUM</field>
                  </block>
                </value>
              </block>
            </value>
            <value name="VAL">
              <block type="LLL_input" id="655">
                <field name="INDEX">0</field>
              </block>
            </value>
            <next>
              <block type="LLL_store" id="656" inline="true">
                <field name="POOL">sstore</field>
                <value name="SPOT">
                  <block type="LLL_math" id="657" inline="true">
                    <field name="OP">+</field>
                    <value name="A">
                      <block type="LLL_val" id="658">
                        <field name="VAL">IN_BLOCK</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="LLL_mval" id="659">
                        <field name="VAL">PLAYER_NUM</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="VAL">
                  <block type="LLL_blockinfo" id="660">
                    <field name="PROP">number</field>
                  </block>
                </value>
                <next>
                  <block type="LLL_comment" id="661">
                    <field name="NOTE">Ensure both players' choices came in at the same time. (No peeking!)</field>
                    <next>
                      <block type="LLL_when" id="662" inline="false">
                        <field name="WORD">when</field>
                        <value name="COND">
                          <block type="LLL_compare" id="663" inline="false">
                            <field name="OP">!=</field>
                            <value name="A">
                              <block type="LLL_load" id="664" inline="true">
                                <field name="POOL">sload</field>
                                <value name="SPOT">
                                  <block type="LLL_math" id="665" inline="true">
                                    <field name="OP">+</field>
                                    <value name="A">
                                      <block type="LLL_val" id="666">
                                        <field name="VAL">IN_BLOCK</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="LLL_val" id="667">
                                        <field name="VAL">1</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="LLL_load" id="668" inline="true">
                                <field name="POOL">sload</field>
                                <value name="SPOT">
                                  <block type="LLL_math" id="669" inline="true">
                                    <field name="OP">+</field>
                                    <value name="A">
                                      <block type="LLL_val" id="670">
                                        <field name="VAL">IN_BLOCK</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="LLL_val" id="671">
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
                          <block type="LLL_stop" id="672"></block>
                        </statement>
                        <next>
                          <block type="LLL_comment" id="673">
                            <field name="NOTE">Label each player's choice for easy reference</field>
                            <next>
                              <block type="LLL_mstore" id="674" inline="true">
                                <field name="SPOT">CHOICE1</field>
                                <value name="VAL">
                                  <block type="LLL_load" id="675" inline="true">
                                    <field name="POOL">sload</field>
                                    <value name="SPOT">
                                      <block type="LLL_math" id="676" inline="true">
                                        <field name="OP">+</field>
                                        <value name="A">
                                          <block type="LLL_val" id="677">
                                            <field name="VAL">CHOICE</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="LLL_val" id="678">
                                            <field name="VAL">1</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <next>
                                  <block type="LLL_mstore" id="679" inline="true">
                                    <field name="SPOT">CHOICE2</field>
                                    <value name="VAL">
                                      <block type="LLL_load" id="680" inline="true">
                                        <field name="POOL">sload</field>
                                        <value name="SPOT">
                                          <block type="LLL_math" id="681" inline="true">
                                            <field name="OP">+</field>
                                            <value name="A">
                                              <block type="LLL_val" id="682">
                                                <field name="VAL">CHOICE</field>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="LLL_val" id="683">
                                                <field name="VAL">2</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="LLL_comment" id="684">
                                        <field name="NOTE">If it's a tie, nobody wins, so stop here</field>
                                        <next>
                                          <block type="LLL_when" id="685" inline="false">
                                            <field name="WORD">when</field>
                                            <value name="COND">
                                              <block type="LLL_compare" id="686" inline="true">
                                                <field name="OP">=</field>
                                                <value name="A">
                                                  <block type="LLL_mval" id="687">
                                                    <field name="VAL">CHOICE1</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="LLL_mval" id="688">
                                                    <field name="VAL">CHOICE2</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="THEN">
                                              <block type="LLL_stop" id="689"></block>
                                            </statement>
                                            <next>
                                              <block type="LLL_comment" id="690">
                                                <field name="NOTE">Unless both players made a valid choice, stop here. (No "dynamite" allowed!)</field>
                                                <next>
                                                  <block type="LLL_when" id="691" inline="false">
                                                    <field name="WORD">unless</field>
                                                    <value name="COND">
                                                      <block type="LLL_logic" id="692" inline="false">
                                                        <field name="OP">&amp;&amp;</field>
                                                        <value name="A">
                                                          <block type="LLL_logic" id="693" inline="false">
                                                            <field name="OP">||</field>
                                                            <value name="A">
                                                              <block type="LLL_compare" id="694" inline="true">
                                                                <field name="OP">=</field>
                                                                <value name="A">
                                                                  <block type="LLL_mval" id="695">
                                                                    <field name="VAL">CHOICE1</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_textval" id="696">
                                                                    <field name="VAL">ROCK</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="LLL_logic" id="697" inline="false">
                                                                <field name="OP">||</field>
                                                                <value name="A">
                                                                  <block type="LLL_compare" id="698" inline="true">
                                                                    <field name="OP">=</field>
                                                                    <value name="A">
                                                                      <block type="LLL_mval" id="699">
                                                                        <field name="VAL">CHOICE1</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="LLL_textval" id="700">
                                                                        <field name="VAL">PAPER</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_compare" id="701" inline="true">
                                                                    <field name="OP">=</field>
                                                                    <value name="A">
                                                                      <block type="LLL_mval" id="702">
                                                                        <field name="VAL">CHOICE1</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="LLL_textval" id="703">
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
                                                          <block type="LLL_logic" id="704" inline="false">
                                                            <field name="OP">||</field>
                                                            <value name="A">
                                                              <block type="LLL_compare" id="705" inline="true">
                                                                <field name="OP">=</field>
                                                                <value name="A">
                                                                  <block type="LLL_mval" id="706">
                                                                    <field name="VAL">CHOICE2</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_textval" id="707">
                                                                    <field name="VAL">ROCK</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="LLL_logic" id="708" inline="false">
                                                                <field name="OP">||</field>
                                                                <value name="A">
                                                                  <block type="LLL_compare" id="709" inline="true">
                                                                    <field name="OP">=</field>
                                                                    <value name="A">
                                                                      <block type="LLL_mval" id="710">
                                                                        <field name="VAL">CHOICE2</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="LLL_textval" id="711">
                                                                        <field name="VAL">PAPER</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_compare" id="712" inline="true">
                                                                    <field name="OP">=</field>
                                                                    <value name="A">
                                                                      <block type="LLL_mval" id="713">
                                                                        <field name="VAL">CHOICE2</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="LLL_textval" id="714">
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
                                                      <block type="LLL_stop" id="715"></block>
                                                    </statement>
                                                    <next>
                                                      <block type="LLL_comment" id="716">
                                                        <field name="NOTE">Check each valid combo to determine the winner</field>
                                                        <next>
                                                          <block type="LLL_when" id="717" inline="false">
                                                            <field name="WORD">when</field>
                                                            <value name="COND">
                                                              <block type="LLL_compare" id="718" inline="true">
                                                                <field name="OP">=</field>
                                                                <value name="A">
                                                                  <block type="LLL_mval" id="719">
                                                                    <field name="VAL">CHOICE1</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="LLL_textval" id="720">
                                                                    <field name="VAL">ROCK</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <statement name="THEN">
                                                              <block type="LLL_if" id="721" inline="false">
                                                                <value name="COND">
                                                                  <block type="LLL_compare" id="722" inline="true">
                                                                    <field name="OP">=</field>
                                                                    <value name="A">
                                                                      <block type="LLL_mval" id="723">
                                                                        <field name="VAL">CHOICE2</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="LLL_textval" id="724">
                                                                        <field name="VAL">SCISSORS</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <statement name="THEN">
                                                                  <block type="LLL_mstore" id="725" inline="true">
                                                                    <field name="SPOT">WINNER</field>
                                                                    <value name="VAL">
                                                                      <block type="LLL_val" id="726">
                                                                        <field name="VAL">1</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </statement>
                                                                <statement name="ELSE">
                                                                  <block type="LLL_mstore" id="727" inline="true">
                                                                    <field name="SPOT">WINNER</field>
                                                                    <value name="VAL">
                                                                      <block type="LLL_val" id="728">
                                                                        <field name="VAL">2</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </statement>
                                                              </block>
                                                            </statement>
                                                            <next>
                                                              <block type="LLL_when" id="729" inline="false">
                                                                <field name="WORD">when</field>
                                                                <value name="COND">
                                                                  <block type="LLL_compare" id="730" inline="true">
                                                                    <field name="OP">=</field>
                                                                    <value name="A">
                                                                      <block type="LLL_mval" id="731">
                                                                        <field name="VAL">CHOICE1</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <block type="LLL_textval" id="732">
                                                                        <field name="VAL">PAPER</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <statement name="THEN">
                                                                  <block type="LLL_if" id="733" inline="false">
                                                                    <value name="COND">
                                                                      <block type="LLL_compare" id="734" inline="true">
                                                                        <field name="OP">=</field>
                                                                        <value name="A">
                                                                          <block type="LLL_mval" id="735">
                                                                            <field name="VAL">CHOICE2</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="B">
                                                                          <block type="LLL_textval" id="736">
                                                                            <field name="VAL">ROCK</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                    <statement name="THEN">
                                                                      <block type="LLL_mstore" id="737" inline="true">
                                                                        <field name="SPOT">WINNER</field>
                                                                        <value name="VAL">
                                                                          <block type="LLL_val" id="738">
                                                                            <field name="VAL">1</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </statement>
                                                                    <statement name="ELSE">
                                                                      <block type="LLL_mstore" id="739" inline="true">
                                                                        <field name="SPOT">WINNER</field>
                                                                        <value name="VAL">
                                                                          <block type="LLL_val" id="740">
                                                                            <field name="VAL">2</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </statement>
                                                                  </block>
                                                                </statement>
                                                                <next>
                                                                  <block type="LLL_when" id="741" inline="false">
                                                                    <field name="WORD">when</field>
                                                                    <value name="COND">
                                                                      <block type="LLL_compare" id="742" inline="true">
                                                                        <field name="OP">=</field>
                                                                        <value name="A">
                                                                          <block type="LLL_mval" id="743">
                                                                            <field name="VAL">CHOICE1</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="B">
                                                                          <block type="LLL_textval" id="744">
                                                                            <field name="VAL">SCISSORS</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                    <statement name="THEN">
                                                                      <block type="LLL_if" id="745" inline="false">
                                                                        <value name="COND">
                                                                          <block type="LLL_compare" id="746" inline="true">
                                                                            <field name="OP">=</field>
                                                                            <value name="A">
                                                                              <block type="LLL_mval" id="747">
                                                                                <field name="VAL">CHOICE2</field>
                                                                              </block>
                                                                            </value>
                                                                            <value name="B">
                                                                              <block type="LLL_textval" id="748">
                                                                                <field name="VAL">PAPER</field>
                                                                              </block>
                                                                            </value>
                                                                          </block>
                                                                        </value>
                                                                        <statement name="THEN">
                                                                          <block type="LLL_mstore" id="749" inline="true">
                                                                            <field name="SPOT">WINNER</field>
                                                                            <value name="VAL">
                                                                              <block type="LLL_val" id="750">
                                                                                <field name="VAL">1</field>
                                                                              </block>
                                                                            </value>
                                                                          </block>
                                                                        </statement>
                                                                        <statement name="ELSE">
                                                                          <block type="LLL_mstore" id="751" inline="true">
                                                                            <field name="SPOT">WINNER</field>
                                                                            <value name="VAL">
                                                                              <block type="LLL_val" id="752">
                                                                                <field name="VAL">2</field>
                                                                              </block>
                                                                            </value>
                                                                          </block>
                                                                        </statement>
                                                                      </block>
                                                                    </statement>
                                                                    <next>
                                                                      <block type="LLL_comment" id="753">
                                                                        <field name="NOTE">Pay the winner</field>
                                                                        <next>
                                                                          <block type="LLL_spend" id="754" inline="true">
                                                                            <value name="MONEY">
                                                                              <block type="LLL_contract" id="755">
                                                                                <field name="PROP">balance</field>
                                                                              </block>
                                                                            </value>
                                                                            <value name="TO">
                                                                              <block type="LLL_load" id="756" inline="true">
                                                                                <field name="POOL">sload</field>
                                                                                <value name="SPOT">
                                                                                  <block type="LLL_math" id="757" inline="true">
                                                                                    <field name="OP">+</field>
                                                                                    <value name="A">
                                                                                      <block type="LLL_val" id="758">
                                                                                        <field name="VAL">PLAYER</field>
                                                                                      </block>
                                                                                    </value>
                                                                                    <value name="B">
                                                                                      <block type="LLL_mval" id="759">
                                                                                        <field name="VAL">WINNER</field>
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