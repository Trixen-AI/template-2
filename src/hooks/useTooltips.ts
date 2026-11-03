import { useEffect } from 'react'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away.css'

/*
 * Port of @flowbase-co/boosters-tooltip@1.1.0 (a tippy.js wrapper). Defaults used on this page:
 * animation shift-away, placement top, no arrow, dark (default) theme, show on mouseenter.
 */
export function useTooltips() {
  useEffect(() => {
    const instances = Array.from(document.querySelectorAll<HTMLElement>('[fb-tooltip]')).flatMap((el) => {
      const content = el.getAttribute('fb-tooltip-message')
      if (!content) return []
      return [
        tippy(el, {
          animation: el.getAttribute('fb-tooltip-animation') || 'shift-away',
          content,
          delay: [Number(el.getAttribute('fb-tooltip-show-delay')) || 0, null],
          placement: 'top',
          arrow: false,
          theme: '',
          trigger: 'mouseenter',
        }),
      ]
    })
    return () => instances.forEach((t) => t.destroy())
  }, [])
}
