import { CASE_STUDIES } from '@/data/swipers'
import { useSwiper } from '@/hooks/useSwiper'

export default function CaseStudies() {
  const swiperRef = useSwiper('cc-case-studies', CASE_STUDIES)

  return (
    <section className="c-section">
      <div className="w-layout-blockcontainer c-container w-container">
        <div className="c-content cc-padding-bottom-small">
          <div className="c-text-wrapper">
            <div className="c-max-width-800 cc-center">
              <h2 className="c-heading-2 cc-align-center">
                Institutions and teams already building with Zama
                <br />
              </h2>
            </div>
            <div className="c-max-width-400 cc-center">
              <p className="c-paragraph cc-text-align-center">
                From confidential payroll to institutional trading — real deployments, on Ethereum mainnet, today.
                <br />
              </p>
            </div>
          </div>
          <div className="c-swiper-component">
            <div ref={swiperRef} className="swiper cc-case-studies">
              <div className="c-pagination-wrapper w-embed">
                <div className="swiper-button-prev" />
                {'\n'}
                <div className="swiper-pagination cc-case-studies-pagination" />
                {'\n'}
                <div className="swiper-button-next" />
              </div>
              <div className="swiper-wrapper">
                <div className="c-case-study-column-wrapper swiper-slide">
                  <div className="c-image-column cc-case">
                    <div className="c-center-widget cc-case-logo">
                      <img
                        loading="lazy"
                        src="/assets/6a60c170f88a3afb1804eeb8_zama_morpho.svg"
                        alt=""
                        className="c-img"
                      />
                    </div>
                  </div>
                  <div className="c-text-column cc-case">
                    <div className="c-column-text-wrapper">
                      <div className="c-text-wrapper">
                        <h3 className="c-heading-3">Morpho - Confidentiality Meets DeFi Yield</h3>
                        <p className="c-paragraph">
                          Confidential USDC now earns yield through Steakhouse USDC Prime on Morpho, the same vault
                          strategy and risk profile, with deposit size, direction, and timing encrypted onchain.
                          <br />
                        </p>
                      </div>
                      <div>
                        <a
                          href="https://www.zama.org/post/morpho-zama-steakhouse-launch-confidential-usdc-vault"
                          className="c-btn cc-black w-button"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-case-study-column-wrapper swiper-slide">
                  <div className="c-image-column cc-case">
                    <div className="c-center-widget cc-case-logo">
                      <img loading="lazy" src="/assets/6a2941b3c7c437763ce1681a_Frame_8.svg" alt="" className="c-img" />
                    </div>
                  </div>
                  <div className="c-text-column cc-case">
                    <div className="c-column-text-wrapper">
                      <div className="c-text-wrapper">
                        <h3 className="c-heading-3">
                          T-REX - Institutional-Grade Confidentiality Infrastructure for RWA
                        </h3>
                        <p className="c-paragraph">
                          Zama became the default confidentiality layer for T-REX Ledger, bringing FHE-powered privacy,
                          compliance and interoperability together in one public blockchain infrastructure built for
                          institutional scale.
                          <br />
                        </p>
                      </div>
                      <div>
                        <a
                          href="https://www.zama.org/post/zama-becomes-the-confidentiality-layer-for-the-t-rex-ledger"
                          className="c-btn cc-black w-button"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-case-study-column-wrapper swiper-slide">
                  <div className="c-image-column cc-case">
                    <div className="c-center-widget cc-case-logo">
                      <img
                        loading="lazy"
                        src="/assets/6a2941bfbc24526244d6d0a2_Frame_9-1.svg"
                        alt=""
                        className="c-img"
                      />
                    </div>
                  </div>
                  <div className="c-text-column cc-case">
                    <div className="c-column-text-wrapper">
                      <div className="c-text-wrapper">
                        <h3 className="c-heading-3">Bron - Confidential payroll on Ethereum mainnet.</h3>
                        <p className="c-paragraph">
                          {
                            "Bron's CFO paid team salaries on Ethereum mainnet using confidential USDT, amounts encrypted end-to-end with FHE, visible only to sender and recipient."
                          }
                          <br />
                        </p>
                      </div>
                      <div>
                        <a
                          href="https://www.zama.org/post/the-first-confidential-payroll-on-ethereum-mainnet"
                          className="c-btn cc-black w-button"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-case-study-column-wrapper swiper-slide">
                  <div className="c-image-column cc-case">
                    <div className="c-center-widget cc-case-logo">
                      <img
                        loading="lazy"
                        src="/assets/6a2941dfed4ccbec0ac50cc3_Frame_13.svg"
                        alt=""
                        className="c-img"
                      />
                    </div>
                  </div>
                  <div className="c-text-column cc-case">
                    <div className="c-column-text-wrapper">
                      <div className="c-text-wrapper">
                        <h3 className="c-heading-3">Raycash - Private, compliant banking rebuilt onchain.</h3>
                        <p className="c-paragraph">
                          {
                            "Raycash delivers a Revolut-style banking experience — IBANs, cards, yield — fully self-custodial and powered by Zama's FHE encryption, keeping balances and transactions private while remaining compliant with regulators."
                          }
                          <br />
                        </p>
                      </div>
                      <div>
                        <a
                          href="https://www.zama.org/post/raycash-global-money-account-running-on-confidential-stablecoins"
                          className="c-btn cc-black w-button"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-case-study-column-wrapper swiper-slide">
                  <div className="c-image-column cc-case">
                    <div className="c-center-widget cc-case-logo">
                      <img
                        loading="lazy"
                        src="/assets/6a2941eb79834dbd47731414_Frame_12.svg"
                        alt=""
                        className="c-img"
                      />
                    </div>
                  </div>
                  <div className="c-text-column cc-case">
                    <div className="c-column-text-wrapper">
                      <div className="c-text-wrapper">
                        <h3 className="c-heading-3">
                          Blockscout - The first explorer to support confidential tokens natively.
                        </h3>
                        <p className="c-paragraph">
                          Blockscout now indexes and displays ERC-7984 confidential token activity, showing transfers,
                          senders, and recipients onchain while keeping encrypted amounts fully private, powered by the
                          Zama Protocol.
                          <br />
                        </p>
                      </div>
                      <div>
                        <a
                          href="https://www.blog.blockscout.com/zama-confidential-tokens-block-explorer/"
                          className="c-btn cc-black w-button"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-case-study-column-wrapper swiper-slide">
                  <div className="c-image-column cc-case">
                    <div className="c-center-widget cc-case-logo">
                      <img loading="lazy" src="/assets/6a2941f9e98678e48e663ae6_Frame_9.svg" alt="" className="c-img" />
                    </div>
                  </div>
                  <div className="c-text-column cc-case">
                    <div className="c-column-text-wrapper">
                      <div className="c-text-wrapper">
                        <h3 className="c-heading-3">GSR - The first confidential OTC trade on Ethereum mainnet.</h3>
                        <p className="c-paragraph">
                          {
                            "GSR executed the first confidential over-the-counter trade using the Zama Protocol, with transaction amounts encrypted onchain between two KYC'd counterparties, eliminating information leakage and front-running risks."
                          }
                        </p>
                      </div>
                      <div>
                        <a
                          href="https://www.zama.org/post/the-confidentiality-layer-bringing-institutional-trade-execution-to-ethereum-with-gsr"
                          className="c-btn cc-black w-button"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-embed" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
