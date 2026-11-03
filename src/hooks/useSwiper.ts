import { useEffect, useRef } from 'react'
import Swiper from 'swiper/bundle'
import type { SwiperOptions } from 'swiper'

/**
 * Creates a Swiper 8 instance on the returned ref. `swiper/bundle` registers every module, matching the
 * UMD `swiper-bundle.min.js` the source loads (so A11y, the default-on module, behaves identically).
 * `scope` is the class the source config uses to build its `.cc-x .swiper-pagination` style selectors.
 */
export function useSwiper(scope: string, options: SwiperOptions) {
  const ref = useRef<HTMLDivElement>(null)
  // options are static module-level constants for each carousel
  const optionsRef = useRef(options)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const opts = optionsRef.current
    // only set the module params a carousel uses: an explicit `undefined` would wipe Swiper's module defaults
    const params: SwiperOptions = { ...opts }
    if (opts.pagination) params.pagination = { ...(opts.pagination as object), el: `.${scope} .swiper-pagination` }
    if (opts.navigation) {
      params.navigation = { nextEl: `.${scope} .swiper-button-next`, prevEl: `.${scope} .swiper-button-prev` }
    }
    const swiper = new Swiper(el, params)
    return () => swiper.destroy(true, true)
  }, [scope])

  return ref
}
