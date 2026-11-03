import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { PARTNER_LOGOS } from '@/data/logos'
import { cx } from '@/lib/cx'

/**
 * Port of the source's infinite-logos embed: the logo sequence is rendered twice (the copy loads eagerly),
 * the distance to the first copy is measured into `--marquee-distance`, then `.is-marquee-ready` starts the
 * 30s linear `infinite-scroll` keyframes (paused on hover, see embeds.css).
 */
export default function LogoMarquee() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState<number | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const measure = () => {
      const first = track.children[0] as HTMLElement | undefined
      const firstCopy = track.children[PARTNER_LOGOS.length] as HTMLElement | undefined
      if (first && firstCopy) setDistance(firstCopy.offsetLeft - first.offsetLeft)
    }
    let raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(measure)
    })
    window.addEventListener('resize', measure, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <section className="c-section">
      <div className="w-layout-blockcontainer c-container cc-padding-bottom-small w-container">
        <div className="c-infinite-logos">
          <div className="c-logo-gradient" />
          <div className="c-logo-gradient cc-right" />
          <div
            ref={trackRef}
            className={cx('c-infinite-logos-track', distance !== null && 'is-marquee-ready')}
            data-marquee-ready="true"
            style={distance !== null ? ({ '--marquee-distance': `${distance}px` } as CSSProperties) : undefined}
          >
            {PARTNER_LOGOS.map((logo) => (
              <img key={logo.src} loading="lazy" src={logo.src} alt={logo.alt} className="c-carousel-logo" />
            ))}
            {PARTNER_LOGOS.map((logo) => (
              <img key={`copy-${logo.src}`} loading="eager" src={logo.src} alt={logo.alt} className="c-carousel-logo" />
            ))}
          </div>
          <div className="c-infinite-logos-embed w-embed w-script" />
        </div>
      </div>
    </section>
  )
}
