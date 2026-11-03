import type { MouseEvent } from 'react'
import FooterAccordion from '@/components/footer/FooterAccordion'

// The source runs Cookiebot.renew() here; the clone has no consent manager, so the link is inert.
const preventDefault = (e: MouseEvent) => e.preventDefault()

export default function Footer() {
  return (
    <section className="c-section">
      <div className="w-layout-blockcontainer c-container cc-padding-top-small cc-footer-container w-container">
        <div className="c-content">
          <div className="c-divider cc-dark-grey" />
          <div className="c-footer-content-wrapper">
            <div className="c-footer-mobile">
              <FooterAccordion index={3} wId="c73b4797-c419-87b4-83e0-1dae568c0fd5" title="Protocol">
                <div className="c-text-wrapper cc-gap-small">
                  <a
                    href="https://app.zama.org?utm_source=zama.org&utm_medium=referral&utm_campaign=website&utm_content=footer_cta"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link"
                  >
                    Zama App ↗
                  </a>
                  <a
                    href="https://www.zama.org/how-to-buy-zama-token"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Buy $ZAMA
                  </a>
                  <a
                    href="https://staking.zama.org"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link"
                  >
                    {'Stake $ZAMA ↗ '}
                  </a>
                  <a
                    href="https://bridge.zama.org/"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link"
                  >
                    {'Bridge $ZAMA ↗ '}
                  </a>
                  <a
                    href="https://docs.zama.org/protocol/zama-protocol-litepaper"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link"
                  >
                    {'Litepaper ↗ '}
                  </a>
                  <a
                    href="https://www.zama.org/shielded"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Shielded Report
                  </a>
                  <a
                    href="https://www.zama.org/security"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Security
                  </a>
                  <a
                    href="https://status.zama.org"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link"
                  >
                    {'Status ↗ '}
                  </a>
                </div>
              </FooterAccordion>
              <div className="c-divider cc-dark-grey" />
              <FooterAccordion index={4} wId="c73b4797-c419-87b4-83e0-1dae568c0fe3" title="Solutions">
                <div className="c-text-wrapper cc-gap-small">
                  <a
                    href="https://www.zama.org/solutions/confidential-rwa-tokenization"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Confidential RWA
                  </a>
                  <a
                    href="https://www.zama.org/solutions/confidential-corporate-payments"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Confidential Payments
                  </a>
                  <a
                    href="https://www.zama.org/solutions/confidential-onchain-payroll"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Confidential Payroll
                  </a>
                  <a
                    href="https://www.zama.org/solutions/confidential-defi"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Confidential DeFi
                  </a>
                  <a
                    href="https://www.zama.org/solutions/confidential-token-distribution"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Confidential Token Distribution
                  </a>
                </div>
              </FooterAccordion>
              <div className="c-divider cc-dark-grey" />
              <FooterAccordion index={5} wId="93b810c9-b55b-61c0-0665-6d6f8e5e8576" title="PRODUCTS">
                <div className="c-text-wrapper cc-gap-small">
                  <a
                    href="https://www.zama.org/confidential-tokens"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Confidential Tokens
                  </a>
                  <a
                    href="https://www.zama.org/confidential-tokens/cusdc"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Confidential USDC
                  </a>
                  <a
                    href="https://www.zama.org/confidential-vaults"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Confidential Vaults
                  </a>
                  <a
                    href="https://www.zama.org/confidential-swap"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Confidential Swap
                  </a>
                </div>
              </FooterAccordion>
              <div className="c-divider cc-dark-grey" />
              <FooterAccordion index={6} wId="c73b4797-c419-87b4-83e0-1dae568c0ff3" title="Resources">
                <div className="c-text-wrapper cc-gap-small">
                  <a
                    href="https://www.zama.org/developer-hub"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Developer Hub
                  </a>
                  <a
                    href="https://docs.zama.org"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link"
                  >
                    {'Documentation ↗ '}
                  </a>
                  <a
                    href="https://github.com/zama-ai"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link"
                  >
                    {'Github ↗ '}
                  </a>
                  <a
                    href="https://github.com/zama-ai/awesome-zama#research-papers-and-publications"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link"
                  >
                    {'Research Papers ↗ '}
                  </a>
                  <a
                    href="https://www.zama.org/introduction-to-homomorphic-encryption"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Introduction to FHE
                  </a>
                  <a
                    href="https://www.zama.org/stories"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Stories
                  </a>
                  <a
                    href="https://www.zama.org/ecosystem"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Ecosystem
                  </a>
                </div>
              </FooterAccordion>
              <div className="c-divider cc-dark-grey" />
              <FooterAccordion index={7} wId="c73b4797-c419-87b4-83e0-1dae568c1003" title="community">
                <div className="c-text-wrapper cc-gap-small">
                  <a
                    href="https://x.com/zama"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link"
                  >
                    X ↗
                  </a>
                  <a
                    href="https://t.me/zama_on_telegram"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link"
                  >
                    {'Telegram ↗ '}
                  </a>
                  <a
                    href="https://www.linkedin.com/company/34914422/"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link"
                  >
                    {'LinkedIn ↗ '}
                  </a>
                  <a
                    href="https://www.zama.org/events"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Events
                  </a>
                  <a
                    href="https://www.zama.org/community-channels"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    All Channels
                  </a>
                </div>
              </FooterAccordion>
              <div className="c-divider cc-dark-grey" />
              <FooterAccordion index={8} wId="c73b4797-c419-87b4-83e0-1dae568c1015" title="company">
                <div className="c-text-wrapper cc-gap-small">
                  <a
                    href="https://www.zama.org/about"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    About
                  </a>
                  <a
                    href="https://www.zama.org/inactive/contact-old"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Contact
                  </a>
                  <a
                    href="https://jobs.zama.org"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link"
                  >
                    {'Jobs ↗ '}
                  </a>
                  <a
                    href="https://www.zama.org/press-and-media"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    {'Press & Media'}
                  </a>
                  <a
                    href="https://www.zama.org/zama-brand-kit"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Brand Kit
                  </a>
                  <a
                    href="https://www.zama.org/legal"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link"
                  >
                    Legal
                  </a>
                  <div className="c-paragraph cc-link w-embed">
                    <a href="#" onClick={preventDefault} style={{ cursor: 'pointer', textDecoration: 'none' }}>
                      {'\n\tCookie Preferences\n'}
                    </a>
                  </div>
                </div>
              </FooterAccordion>
              <div className="c-divider cc-dark-grey" />
            </div>
            <div className="c-footer-grid">
              <div className="c-text-wrapper cc-gap-big">
                <p className="c-paragraph cc-caps cc-size-big">Protocol</p>
                <div className="c-text-wrapper cc-gap-small">
                  <a
                    href="https://app.zama.org?utm_source=zama.org&utm_medium=referral&utm_campaign=website&utm_content=footer_cta"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link-footer"
                  >
                    {'Zama App ↗ '}
                  </a>
                  <a
                    href="https://www.zama.org/how-to-buy-zama-token"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link-footer"
                  >
                    Buy $ZAMA
                  </a>
                  <a
                    href="https://staking.zama.org/"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link-footer"
                  >
                    {'Stake $ZAMA ↗ '}
                  </a>
                  <a
                    href="https://bridge.zama.org/"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link-footer"
                  >
                    {'Bridge $ZAMA ↗ '}
                  </a>
                  <a
                    href="https://docs.zama.org/protocol/zama-protocol-litepaper"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link-footer"
                  >
                    {'Litepaper ↗ '}
                  </a>
                  <a
                    href="https://www.zama.org/shielded"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link-footer"
                  >
                    Shielded Report
                  </a>
                  <a
                    href="https://www.zama.org/security"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link-footer"
                  >
                    Security
                  </a>
                  <a
                    href="https://status.zama.org"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link-footer"
                  >
                    {'Status ↗ '}
                  </a>
                </div>
              </div>
              <div id="w-node-c73b4797-c419-87b4-83e0-1dae568c1032-568c0fcf" className="c-text-wrapper cc-gap-big">
                <p className="c-paragraph cc-caps cc-size-big">PRODUCTS</p>
                <div className="c-text-wrapper cc-gap-small">
                  <a
                    href="https://www.zama.org/confidential-tokens"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link-footer"
                  >
                    Confidential Tokens
                  </a>
                  <a
                    href="https://www.zama.org/confidential-tokens/cusdc"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link-footer"
                  >
                    Confidential USDC
                  </a>
                  <a
                    href="https://www.zama.org/confidential-tokens/cusdt"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link-footer"
                  >
                    Confidential USDT
                  </a>
                  <a
                    href="https://www.zama.org/confidential-vaults"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link-footer"
                  >
                    Confidential Vaults
                  </a>
                  <a
                    href="https://www.zama.org/confidential-swap"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link-footer cc-padding-bottom-small"
                  >
                    Confidential Swap
                  </a>
                </div>
                <p className="c-paragraph cc-caps cc-size-big">SOLUTIONS</p>
                <a
                  href="https://www.zama.org/solutions/confidential-rwa-tokenization"
                  fb-scramble-count="5"
                  fb-scramble="true"
                  fb-scramble-trigger="hover"
                  fb-scramble-type="all"
                  fb-scramble-speed="30"
                  className="c-paragraph cc-link-footer"
                >
                  Confidential RWA
                </a>
                <a
                  href="https://www.zama.org/solutions/confidential-corporate-payments"
                  fb-scramble-count="5"
                  fb-scramble="true"
                  fb-scramble-trigger="hover"
                  fb-scramble-type="all"
                  fb-scramble-speed="30"
                  className="c-paragraph cc-link-footer"
                >
                  Confidential Payments
                </a>
                <a
                  href="https://www.zama.org/solutions/confidential-onchain-payroll"
                  fb-scramble-count="5"
                  fb-scramble="true"
                  fb-scramble-trigger="hover"
                  fb-scramble-type="all"
                  fb-scramble-speed="30"
                  className="c-paragraph cc-link-footer"
                >
                  Confidential Payroll
                </a>
                <a
                  href="https://www.zama.org/solutions/confidential-defi"
                  fb-scramble-count="5"
                  fb-scramble="true"
                  fb-scramble-trigger="hover"
                  fb-scramble-type="all"
                  fb-scramble-speed="30"
                  className="c-paragraph cc-link-footer"
                >
                  Confidential DeFi
                </a>
              </div>
              <div className="c-text-wrapper cc-gap-big">
                <p className="c-paragraph cc-caps cc-size-big">RESOURCES</p>
                <div className="c-text-wrapper cc-gap-small">
                  <a
                    href="https://www.zama.org/developer-hub"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link-footer"
                  >
                    Developer Hub
                  </a>
                  <a
                    href="https://docs.zama.org"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link-footer"
                  >
                    {'Documentation ↗ '}
                  </a>
                  <a
                    href="https://github.com/zama-ai"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link-footer"
                  >
                    {'Github ↗ '}
                  </a>
                  <a
                    href="https://github.com/zama-ai/awesome-zama#research-papers-and-publications"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link-footer"
                  >
                    {'Research Papers ↗ '}
                  </a>
                  <a
                    href="https://www.zama.org/introduction-to-homomorphic-encryption"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link-footer"
                  >
                    Introduction to FHE
                  </a>
                </div>
                <a
                  href="https://www.zama.org/ecosystem"
                  fb-scramble-count="5"
                  fb-scramble="true"
                  fb-scramble-trigger="hover"
                  fb-scramble-type="all"
                  fb-scramble-speed="30"
                  className="c-paragraph cc-link-footer"
                >
                  Ecosystem
                </a>
                <a
                  href="https://www.zama.org/stories"
                  fb-scramble-count="5"
                  fb-scramble="true"
                  fb-scramble-trigger="hover"
                  fb-scramble-type="all"
                  fb-scramble-speed="30"
                  className="c-paragraph cc-link-footer"
                >
                  Stories
                </a>
              </div>
              <div className="c-text-wrapper cc-gap-big">
                <p className="c-paragraph cc-caps cc-size-big">COMMUNITY</p>
                <div className="c-text-wrapper cc-gap-small">
                  <a
                    href="https://x.com/zama"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link-footer"
                  >
                    X ↗
                  </a>
                  <a
                    href="https://t.me/zama_on_telegram"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link-footer"
                  >
                    {'Telegram ↗ '}
                  </a>
                  <a
                    href="https://www.linkedin.com/company/34914422"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link-footer"
                  >
                    {'LinkedIn ↗ '}
                  </a>
                  <a
                    href="https://www.zama.org/events"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link-footer"
                  >
                    Events
                  </a>
                  <a
                    href="https://www.zama.org/community-channels"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link-footer"
                  >
                    All Channels
                  </a>
                </div>
              </div>
              <div className="c-text-wrapper cc-gap-big">
                <p className="c-paragraph cc-caps cc-size-big">COMPANY</p>
                <div className="c-text-wrapper cc-gap-small">
                  <a
                    href="https://www.zama.org/about"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link-footer"
                  >
                    About
                  </a>
                  <a
                    href="https://www.zama.org/contact"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link-footer"
                  >
                    Contact
                  </a>
                  <a
                    href="https://jobs.zama.org"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    target="_blank"
                    className="c-paragraph cc-link-footer"
                  >
                    {'Jobs ↗ '}
                  </a>
                  <a
                    href="https://www.zama.org/press-and-media"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link-footer"
                  >
                    {'Press & Media'}
                  </a>
                  <a
                    href="https://www.zama.org/zama-brand-kit"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link-footer"
                  >
                    Brand Kit
                  </a>
                  <a
                    href="https://www.zama.org/legal"
                    fb-scramble-count="5"
                    fb-scramble="true"
                    fb-scramble-trigger="hover"
                    fb-scramble-type="all"
                    fb-scramble-speed="30"
                    className="c-paragraph cc-link-footer"
                  >
                    Legal
                  </a>
                  <div className="c-paragraph cc-link-footer w-embed">
                    <a href="#" onClick={preventDefault} style={{ cursor: 'pointer', textDecoration: 'none' }}>
                      {'\n\tCookie Preferences\n'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="c-footer-logo-wrapper">
            <div className="c-footer-logo-fade" />
            <img loading="lazy" src="/assets/69b1c0aac03aa68244c45a9c_zama-logo.svg" alt="" className="c-footer-logo" />
          </div>
        </div>
      </div>
    </section>
  )
}
