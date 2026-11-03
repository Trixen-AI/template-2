import type { Ref } from 'react'
import NavDropdown from '@/components/nav/NavDropdown'

type Props = { navOpen: boolean; menuRef: Ref<HTMLElement> }

/** The `.w-nav-menu`: inline at desktop, moved into the overlay while the collapsed navbar is open. */
export default function NavMenu({ navOpen, menuRef }: Props) {
  return (
    <nav
      ref={menuRef}
      role="navigation"
      className="c-navigation-wrapper w-nav-menu"
      data-nav-menu-open={navOpen ? '' : undefined}
    >
      <div className="c-nav-dropdown-wrapper">
        <NavDropdown
          index={0}
          delay={10}
          wId="2317771a-7304-3bfe-f95d-03ebc4d53a9a"
          label="Products"
          listClassName="c-nav-dropdown cc-columns"
          navOpen={navOpen}
        >
          <div className="c-dropdown-wrapper">
            <div className="c-nav-column-wrapper">
              <div className="c-nav-column cc-border-right">
                <div className="c-text-wrapper cc-navigation-icons">
                  <div className="c-nav-subheading">Zama App</div>
                  <a
                    href="https://app.zama.org/shield"
                    target="_blank"
                    className="c-nav-link-wrapper cc-icon-link w-inline-block"
                  >
                    <div className="c-nav-icon-link">
                      <div className="c-yellow-icon">
                        <img
                          loading="lazy"
                          src="/assets/6a2697d4297b7ffd2479b5f3_shield_(4).svg"
                          alt=""
                          className="c-icon-img"
                        />
                      </div>
                      <div className="c-paragraph">Shield ↗</div>
                    </div>
                  </a>
                  <a
                    href="https://app.zama.org/unshield"
                    target="_blank"
                    className="c-nav-link-wrapper cc-icon-link w-inline-block"
                  >
                    <div className="c-nav-icon-link">
                      <div className="c-yellow-icon">
                        <img
                          loading="lazy"
                          src="/assets/6a2697ac91114a16fc72b873_shield-off_(1).svg"
                          alt=""
                          className="c-icon-img"
                        />
                      </div>
                      <div className="c-paragraph">Unshield ↗</div>
                    </div>
                  </a>
                  <a
                    href="https://app.zama.org/send"
                    target="_blank"
                    className="c-nav-link-wrapper cc-icon-link w-inline-block"
                  >
                    <div className="c-nav-icon-link">
                      <div className="c-yellow-icon">
                        <img
                          loading="lazy"
                          src="/assets/6a2697c002352cf869df01ff_send_(1).svg"
                          alt=""
                          className="c-icon-img"
                        />
                      </div>
                      <div className="c-paragraph">Send ↗</div>
                    </div>
                  </a>
                  <a
                    href="https://app.zama.org/earn"
                    target="_blank"
                    className="c-nav-link-wrapper cc-icon-link w-inline-block"
                  >
                    <div className="c-nav-icon-link">
                      <div className="c-yellow-icon">
                        <img
                          loading="lazy"
                          src="/assets/6a26986c03b09f1df9b0b7e8_coins_(1).svg"
                          alt=""
                          className="c-icon-img"
                        />
                      </div>
                      <div className="c-paragraph">Earn ↗</div>
                    </div>
                  </a>
                  <a
                    href="https://app.zama.org/swap"
                    target="_blank"
                    className="c-nav-link-wrapper cc-icon-link w-inline-block"
                  >
                    <div className="c-nav-icon-link">
                      <div className="c-yellow-icon">
                        <img
                          loading="lazy"
                          src="/assets/6a86cd412ba115b5dc4b03e7_arrow-left-right_(1).svg"
                          alt=""
                          className="c-icon-img"
                        />
                      </div>
                      <div className="c-paragraph">Swap ↗</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="c-nav-column cc-border-right">
                <div className="c-text-wrapper cc-navigation-icons">
                  <div className="c-nav-subheading">Onchain Finance</div>
                  <a
                    href="https://www.zama.org/confidential-tokens"
                    className="c-nav-link-wrapper cc-icon-link cc-confidential-token-link w-inline-block"
                  >
                    <div className="c-nav-icon-link">
                      <div className="c-yellow-icon">
                        <img
                          loading="lazy"
                          src="/assets/6a86d191455201bcfa1a07a4_circle-dollar-sign_(1).svg"
                          alt=""
                          className="c-icon-img"
                        />
                      </div>
                      <div className="c-paragraph">Confidential Tokens</div>
                    </div>
                  </a>
                  <a
                    href="https://www.zama.org/confidential-vaults"
                    className="c-nav-link-wrapper cc-icon-link w-inline-block"
                  >
                    <div className="c-nav-icon-link">
                      <div className="c-yellow-icon">
                        <img
                          loading="lazy"
                          src="/assets/6a86cd2473d8efed973d307c_vault.svg"
                          alt=""
                          className="c-icon-img"
                        />
                      </div>
                      <div className="c-paragraph">Confidential Vaults</div>
                    </div>
                  </a>
                  <a
                    href="https://www.zama.org/confidential-swap"
                    className="c-nav-link-wrapper cc-icon-link w-inline-block"
                  >
                    <div className="c-nav-icon-link">
                      <div className="c-yellow-icon">
                        <img
                          loading="lazy"
                          src="/assets/6a86cd412ba115b5dc4b03e7_arrow-left-right_(1).svg"
                          alt=""
                          className="c-icon-img"
                        />
                      </div>
                      <div className="c-paragraph">Confidential Swap</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="c-nav-column">
                <div className="c-text-wrapper cc-navigation-icons">
                  <div className="c-nav-subheading">Infra</div>
                  <a href="https://www.zama.org/erc-7984" className="c-nav-link-wrapper cc-icon-link w-inline-block">
                    <div className="c-nav-icon-link">
                      <div className="c-yellow-icon">
                        <img
                          loading="lazy"
                          src="/assets/6a26989402352cf869df758c_layers-2.svg"
                          alt=""
                          className="c-icon-img"
                        />
                      </div>
                      <div className="c-paragraph">ERC-7984</div>
                    </div>
                  </a>
                  <a
                    href="https://docs.zama.org/protocol/sdk"
                    target="_blank"
                    className="c-nav-link-wrapper cc-icon-link w-inline-block"
                  >
                    <div className="c-nav-icon-link">
                      <div className="c-yellow-icon">
                        <img
                          loading="lazy"
                          src="/assets/6a26989dc541dc1297d3bf2b_layers.svg"
                          alt=""
                          className="c-icon-img"
                        />
                      </div>
                      <div className="c-paragraph">SDK ↗</div>
                    </div>
                  </a>
                  <div className="c-nav-mobile-divider" />
                </div>
              </div>
            </div>
          </div>
        </NavDropdown>
        <NavDropdown
          index={1}
          delay={0}
          wId="2317771a-7304-3bfe-f95d-03ebc4d53af5"
          label="Ecosystem"
          listClassName="c-nav-dropdown"
          navOpen={navOpen}
        >
          <div className="c-dropdown-wrapper">
            <div className="c-nav-column">
              <div className="c-text-wrapper cc-gap-small">
                <a href="https://www.zama.org/stories" className="c-nav-link-wrapper cc-text-link w-inline-block">
                  <div className="c-paragraph cc-single-line">Stories</div>
                </a>
                <a href="https://www.zama.org/ecosystem" className="c-nav-link-wrapper cc-text-link w-inline-block">
                  <div className="c-paragraph cc-single-line">Ecosystem</div>
                </a>
                <div className="c-nav-mobile-divider" />
              </div>
            </div>
          </div>
        </NavDropdown>
        <NavDropdown
          index={2}
          delay={0}
          wId="2317771a-7304-3bfe-f95d-03ebc4d53b05"
          label="Resources"
          listClassName="c-nav-dropdown"
          navOpen={navOpen}
        >
          <div className="c-dropdown-wrapper">
            <div className="c-nav-column">
              <div className="c-text-wrapper cc-gap-small">
                <a href="https://www.zama.org/developer-hub" className="c-nav-link-wrapper cc-text-link w-inline-block">
                  <div className="c-paragraph cc-single-line">Developer Hub</div>
                </a>
                <a
                  href="https://docs.zama.org/protocol"
                  target="_blank"
                  className="c-nav-link-wrapper cc-text-link w-inline-block"
                >
                  <div className="c-paragraph cc-single-line">Documentations ↗</div>
                </a>
                <a
                  href="https://github.com/zama-ai"
                  target="_blank"
                  className="c-nav-link-wrapper cc-text-link w-inline-block"
                >
                  <div className="c-paragraph cc-single-line">Github ↗</div>
                </a>
                <a href="https://www.zama.org/blog" className="c-nav-link-wrapper cc-text-link w-inline-block">
                  <div className="c-paragraph cc-single-line">Blog</div>
                </a>
                <a
                  href="https://dune.com/zama_fhe/protocol-overview"
                  target="_blank"
                  className="c-nav-link-wrapper cc-text-link w-inline-block"
                >
                  <div className="c-paragraph cc-single-line">Dune Dashboard ↗</div>
                </a>
                <a
                  href="https://jobs.zama.org"
                  target="_blank"
                  className="c-nav-link-wrapper cc-text-link w-inline-block"
                >
                  <div className="c-paragraph cc-single-line">Jobs ↗</div>
                </a>
                <div className="c-nav-mobile-divider" />
              </div>
            </div>
          </div>
        </NavDropdown>
        <div className="c-mobile-nav-button-wrapper">
          <a href="https://www.zama.org/contact" className="c-btn cc-black w-button">
            Contact us
          </a>
          <a href="https://app.zama.org" target="_blank" className="c-btn w-button">
            Launch App ↗
          </a>
        </div>
      </div>
      <div className="c-mobile-menu-background" />
    </nav>
  )
}
