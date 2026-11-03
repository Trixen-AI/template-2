export default function WhyConfidentiality() {
  return (
    <section className="c-section">
      <div className="w-layout-blockcontainer c-container cc-padding-bottom-default w-container">
        <div className="c-content">
          <div className="c-image-text">
            <div className="c-text-column">
              <div className="c-column-text-wrapper">
                <h3 className="c-heading-3">
                  Confidentiality is the missing piece to unlock institutional onchain finance
                </h3>
                <p className="c-paragraph cc-color-black-opacity-64">
                  Until now, every transaction on a public blockchain exposed amounts and balances to anyone. For
                  institutions operating in regulated markets, that exposure has made onchain finance a non-starter.
                  Zama closes that gap, keeping amounts and balances confidential, while maintaining full verifiability
                  and compliance.
                  <br />
                </p>
              </div>
            </div>
            <div className="c-image-column">
              <div className="c-center-widget">
                <img
                  src="/assets/6a2bc387d8b08896cab60ad1_ledger_encrypted.svg"
                  loading="lazy"
                  alt=""
                  className="c-img"
                />
              </div>
            </div>
          </div>
          <div className="c-image-text">
            <div className="c-image-column cc-reversed">
              <img
                src="/assets/6a292038da5dd5718e4ce346_Zama_Homepage.avif"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                srcSet="/assets/6a292038da5dd5718e4ce346_Zama_Homepage-p-500.avif 500w, /assets/6a292038da5dd5718e4ce346_Zama_Homepage-p-800.avif 800w, /assets/6a292038da5dd5718e4ce346_Zama_Homepage-p-1080.avif 1080w, /assets/6a292038da5dd5718e4ce346_Zama_Homepage.avif 1336w"
                alt=""
                className="c-img-fit"
              />
            </div>
            <div className="c-text-column cc-reversed cc-black">
              <div className="c-column-text-wrapper">
                <h3 className="c-heading-3 cc-white">
                  Confidentiality should not require any architectural compromise
                </h3>
                <p className="c-paragraph cc-white">
                  The Zama Protocol runs natively on any L1 or L2, using Fully Homomorphic Encryption (FHE) to keep
                  amounts and balances encrypted at all times, including during processing. No new chain. No trusted
                  intermediary. Full public verifiability.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
