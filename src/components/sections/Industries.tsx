import { OVERFLOW_CARDS } from '@/data/swipers'
import { useSwiper } from '@/hooks/useSwiper'

export default function Industries() {
  const swiperRef = useSwiper('cc-overflow-cards', OVERFLOW_CARDS)

  return (
    <section className="c-section">
      <div className="w-layout-blockcontainer c-container cc-padding-bottom-small w-container">
        <div className="c-content">
          <div className="c-text-wrapper">
            <div className="c-max-width-800">
              <h2 className="c-heading-2">
                {"Built for the industries where confidentiality isn't optional"}
                <br />
              </h2>
            </div>
            <div className="c-max-width-800">
              <p className="c-paragraph">
                {
                  "For institutions, confidentiality and compliance aren't features. They're operating requirements to move their activities on public blockchains."
                }
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-layout-blockcontainer c-container cc-padding-bottom-default cc-swiper w-container">
        <div className="c-content cc-swiper-content">
          <div className="c-swiper-component">
            <div ref={swiperRef} className="swiper cc-overflow-cards">
              <div className="swiper-wrapper">
                <div className="c-icon-column swiper-slide">
                  <img
                    src="/assets/6a293579aac8585a2a205497_landmark_(3).svg"
                    loading="lazy"
                    alt=""
                    className="c-column-icon"
                  />
                  <div className="c-text-wrapper cc-gap-small">
                    <h3 className="c-heading-4">Confidential RWA Tokenization</h3>
                    <p className="c-paragraph cc-small cc-color-black-opacity-64">
                      Bring real-world assets onchain without exposing investor identities, deal terms, or cap table
                      structure.
                    </p>
                  </div>
                </div>
                <div className="c-icon-column swiper-slide">
                  <img
                    src="/assets/6a29358d5e0f2a0b7451e18e_credit-card_(2).svg"
                    loading="lazy"
                    alt=""
                    className="c-column-icon"
                  />
                  <div className="c-text-wrapper cc-gap-small">
                    <h3 className="c-heading-4">Confidential Payments and Payroll</h3>
                    <p className="c-paragraph cc-small cc-color-black-opacity-64">
                      Settle, invoice, and compensate onchain without making transaction amounts visible to the world.
                    </p>
                  </div>
                </div>
                <div className="c-icon-column swiper-slide">
                  <img
                    src="/assets/6a2935a20011b1a919b2bc61_chart-candlestick_(2).svg"
                    loading="lazy"
                    alt=""
                    className="c-column-icon"
                  />
                  <div className="c-text-wrapper cc-gap-small">
                    <h3 className="c-heading-4">Confidential DeFi and Trading</h3>
                    <p className="c-paragraph cc-small cc-color-black-opacity-64">
                      Trade, stake, and earn yield onchain without leaking positions, strategies, or counterparty data.
                    </p>
                  </div>
                </div>
                <div className="c-icon-column swiper-slide">
                  <img
                    src="/assets/6a2935afa39d0eeb7e8b2cf1_hand-coins_(2).svg"
                    loading="lazy"
                    alt=""
                    className="c-column-icon"
                  />
                  <div className="c-text-wrapper cc-gap-small">
                    <h3 className="c-heading-4">Confidential Token Distribution</h3>
                    <p className="c-paragraph cc-small cc-color-black-opacity-64">
                      Run vesting, airdrops, and allocations onchain without exposing who gets what.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-embed" />
              </div>
              <div className="c-pagination-wrapper w-embed">
                <div className="swiper-pagination cc-overflow-cards-pagination" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
