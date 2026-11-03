export default function Developers() {
  return (
    <section className="c-section cc-black cc-flare">
      <div className="w-layout-blockcontainer c-container cc-padding-top cc-padding-bottom-default w-container">
        <div className="c-content cc-padding-bottom-small">
          <div className="c-text-wrapper">
            <div className="c-max-width-700 cc-center">
              <h2 className="c-title-display cc-align-center cc-color-white">
                <span className="cc-text-gradient-warm">{'Integrate confidentiality '}</span>
                in a few lines of Solidity
                <br />
              </h2>
            </div>
            <div className="c-max-width-400 cc-center">
              <p className="c-paragraph cc-text-align-center cc-white">
                {
                  "Whether you're building confidential apps or integrating confidential tokens, start with our SDK and docs."
                }
                <br />
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="c-code-wrapper">
            <div className="c-code-block-text-wrapper">
              <p className="c-paragraph cc-white">
                ERC-7984 - Confidential Token Standard
                <br />
              </p>
              <div className="c-button-wrapper">
                <a href="https://docs.zama.org/protocol/solidity-guides" target="_blank" className="c-btn w-button">
                  Docs ↗
                </a>
              </div>
            </div>
            <pre
              contentEditable={false}
              className="code-block w-code-block"
              style={{ display: 'block', overflowX: 'auto', background: '#2b2b2b', color: '#f8f8f2', padding: '0.5em' }}
            >
              <code className="language-javascript" style={{ whiteSpace: 'pre-wrap' }}>
                <span style={{ display: 'flex' }}>
                  <span
                    className="comment linenumber react-syntax-highlighter-line-number"
                    style={{
                      display: 'inline-block',
                      minWidth: '2.25em',
                      paddingRight: '1em',
                      textAlign: 'right',
                      userSelect: 'none',
                    }}
                  >
                    1
                  </span>
                  <span style={{ color: '#d4d0ab' }}>// SPDX-License-Identifier: BSD-3-Clause-Clear</span>
                  <span>{'\n'}</span>
                </span>
                <span style={{ display: 'flex' }}>
                  <span
                    className="comment linenumber react-syntax-highlighter-line-number"
                    style={{
                      display: 'inline-block',
                      minWidth: '2.25em',
                      paddingRight: '1em',
                      textAlign: 'right',
                      userSelect: 'none',
                    }}
                  >
                    2
                  </span>
                  <span>pragma solidity ^</span>
                  <span style={{ color: '#f5ab35' }}>0.8</span>
                  <span style={{ color: '#f5ab35' }}>.27</span>
                  <span>{';\n'}</span>
                </span>
                <span style={{ display: 'flex' }}>
                  <span
                    className="comment linenumber react-syntax-highlighter-line-number"
                    style={{
                      display: 'inline-block',
                      minWidth: '2.25em',
                      paddingRight: '1em',
                      textAlign: 'right',
                      userSelect: 'none',
                    }}
                  >
                    3
                  </span>
                  {'\n'}
                </span>
                <span style={{ display: 'flex' }}>
                  <span
                    className="comment linenumber react-syntax-highlighter-line-number"
                    style={{
                      display: 'inline-block',
                      minWidth: '2.25em',
                      paddingRight: '1em',
                      textAlign: 'right',
                      userSelect: 'none',
                    }}
                  >
                    4
                  </span>
                  <span />
                  <span style={{ color: '#dcc6e0' }}>import</span>
                  <span>{' {FHE} '}</span>
                  <span style={{ color: '#dcc6e0' }}>from</span>
                  <span> </span>
                  <span style={{ color: '#abe338' }}>{'"@fhevm/solidity/lib/FHE.sol"'}</span>
                  <span>{';\n'}</span>
                </span>
                <span style={{ display: 'flex' }}>
                  <span
                    className="comment linenumber react-syntax-highlighter-line-number"
                    style={{
                      display: 'inline-block',
                      minWidth: '2.25em',
                      paddingRight: '1em',
                      textAlign: 'right',
                      userSelect: 'none',
                    }}
                  >
                    5
                  </span>
                  <span />
                  <span style={{ color: '#dcc6e0' }}>import</span>
                  <span>{' {ZamaEthereumConfig} '}</span>
                  <span style={{ color: '#dcc6e0' }}>from</span>
                  <span> </span>
                  <span style={{ color: '#abe338' }}>{'"@fhevm/solidity/config/ZamaConfig.sol"'}</span>
                  <span>{';\n'}</span>
                </span>
                <span style={{ display: 'flex' }}>
                  <span
                    className="comment linenumber react-syntax-highlighter-line-number"
                    style={{
                      display: 'inline-block',
                      minWidth: '2.25em',
                      paddingRight: '1em',
                      textAlign: 'right',
                      userSelect: 'none',
                    }}
                  >
                    6
                  </span>
                  <span />
                  <span style={{ color: '#dcc6e0' }}>import</span>
                  <span>{' {ERC7984} '}</span>
                  <span style={{ color: '#dcc6e0' }}>from</span>
                  <span> </span>
                  <span style={{ color: '#abe338' }}>
                    {'"@openzeppelin/confidential-contracts/token/ERC7984/ERC7984.sol"'}
                  </span>
                  <span>{';\n'}</span>
                </span>
                <span style={{ display: 'flex' }}>
                  <span
                    className="comment linenumber react-syntax-highlighter-line-number"
                    style={{
                      display: 'inline-block',
                      minWidth: '2.25em',
                      paddingRight: '1em',
                      textAlign: 'right',
                      userSelect: 'none',
                    }}
                  >
                    7
                  </span>
                  {'\n'}
                </span>
                <span style={{ display: 'flex' }}>
                  <span
                    className="comment linenumber react-syntax-highlighter-line-number"
                    style={{
                      display: 'inline-block',
                      minWidth: '2.25em',
                      paddingRight: '1em',
                      textAlign: 'right',
                      userSelect: 'none',
                    }}
                  >
                    8
                  </span>
                  {'contract ConfidentialToken is ZamaEthereumConfig, ERC7984 {\n'}
                </span>
                <span style={{ display: 'flex' }}>
                  <span
                    className="comment linenumber react-syntax-highlighter-line-number"
                    style={{
                      display: 'inline-block',
                      minWidth: '2.25em',
                      paddingRight: '1em',
                      textAlign: 'right',
                      userSelect: 'none',
                    }}
                  >
                    9
                  </span>
                  <span>{'    '}</span>
                  <span style={{ color: '#00e0e0' }}>constructor</span>
                  <span>(</span>
                  <span style={{ color: '#f5ab35' }}>uint64 amount</span>
                  <span>{') '}</span>
                  <span style={{ color: '#00e0e0' }}>ERC7984</span>
                  <span>(</span>
                  <span style={{ color: '#abe338' }}>{'"Confidential Token"'}</span>
                  <span style={{ color: '#f5ab35' }}>{', '}</span>
                  <span style={{ color: '#abe338' }}>{'"cTOKEN"'}</span>
                  <span style={{ color: '#f5ab35' }}>{', '}</span>
                  <span style={{ color: '#abe338' }}>{'""'}</span>
                  <span>{') {\n'}</span>
                </span>
                <span style={{ display: 'flex' }}>
                  <span
                    className="comment linenumber react-syntax-highlighter-line-number"
                    style={{
                      display: 'inline-block',
                      minWidth: '2.25em',
                      paddingRight: '1em',
                      textAlign: 'right',
                      userSelect: 'none',
                    }}
                  >
                    10
                  </span>
                  {'        _mint(msg.sender, FHE.asEuint64(amount));\n'}
                </span>
                <span style={{ display: 'flex' }}>
                  <span
                    className="comment linenumber react-syntax-highlighter-line-number"
                    style={{
                      display: 'inline-block',
                      minWidth: '2.25em',
                      paddingRight: '1em',
                      textAlign: 'right',
                      userSelect: 'none',
                    }}
                  >
                    11
                  </span>
                  {'    }\n'}
                </span>
                <span style={{ display: 'flex' }}>
                  <span
                    className="comment linenumber react-syntax-highlighter-line-number"
                    style={{
                      display: 'inline-block',
                      minWidth: '2.25em',
                      paddingRight: '1em',
                      textAlign: 'right',
                      userSelect: 'none',
                    }}
                  >
                    12
                  </span>
                  {'}'}
                </span>
              </code>
            </pre>
            <div className="cc-code-bg cc-hide" />
            <div className="w-embed" />
          </div>
        </div>
      </div>
    </section>
  )
}
