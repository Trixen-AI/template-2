import HeroGradientCanvas from '@/components/HeroGradientCanvas'
import { useShieldedMetrics } from '@/hooks/useShieldedMetrics'

export default function Hero() {
  const metrics = useShieldedMetrics()

  return (
    <section className="c-section">
      <div className="w-layout-blockcontainer c-container cc-padding-bottom-default cc-padding-top-xsmall w-container">
        <div className="c-homepage-hero">
          <div className="c-background-canvas cc-gradient w-embed w-script">
            <HeroGradientCanvas />
          </div>
          <div className="c-hero-text-wrapper">
            <div className="c-text-wrapper">
              <div className="c-max-width-800 cc-relative">
                <h1 className="c-heading-1">
                  {'Confidential '}
                  <br />
                  Onchain Finance
                  <br />
                </h1>
              </div>
              <div className="c-max-width-350 cc-relative">
                <p className="c-paragraph cc-hero-description">
                  The Zama Protocol enables confidential assets to be issued, traded, and managed natively on public
                  blockchains, with full verifiability and programmable compliance.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="c-hero-cta-wrapper homepage">
            <a
              data-wf--button--variant="secondary-transparent-scroll-down"
              href="#learn-more-section"
              className="c-button w-variant-22a95394-d48c-1d8e-167f-6e6a595138af w-inline-block"
            >
              <div className="c-button-text">Scroll to explore</div>
              <div className="c-button-icon-scroll-down w-embed">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10.5L12 15L16.5 10.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </a>
          </div>
          <div className="c-hero-stat-block">
            <div className="c-code-embed w-embed w-script" />
            <a
              href="https://dune.com/zama_fhe/protocol-overview"
              target="_blank"
              className="c-hero-stat-link w-inline-block"
            >
              <div fb-tooltip-message="Cumulative Shielded Volume" fb-tooltip="true" className="c-hero-stat-wrapper">
                <div>
                  <div className="div-block-93">
                    <p className="c-paragraph cc-color-black-opacity-64">
                      Shielded volume
                      <br />
                    </p>
                  </div>
                  <p className="c-cumulative-shielded-volume c-paragraph-kpi">{metrics.volume ?? <br />}</p>
                </div>
              </div>
            </a>
            <a
              href="https://dune.com/zama_fhe/protocol-overview"
              target="_blank"
              className="c-hero-stat-link w-inline-block"
            >
              <div
                fb-tooltip-message="Shielded TVL in the Zama Protocol"
                fb-tooltip="true"
                className="c-hero-stat-wrapper"
              >
                <div>
                  <div className="div-block-93">
                    <p className="c-paragraph cc-color-black-opacity-64">
                      Shielded TVL
                      <br />
                    </p>
                  </div>
                  <p className="c-shielded-tvl c-paragraph-kpi">{metrics.tvl ?? <br />}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
