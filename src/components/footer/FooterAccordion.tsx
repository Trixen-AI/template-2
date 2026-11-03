import { useLayoutEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { useWebflowDropdown } from '@/hooks/useWebflowDropdown'
import { cx } from '@/lib/cx'

type Props = { index: number; wId: string; title: string; children: ReactNode }

const CLOSED_HEIGHT = 80
const DURATION = 200
const ICON_TRANSFORM = (deg: number) =>
  `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${deg}deg) skew(0deg, 0deg)`

/**
 * Mobile footer accordion: a Webflow `.w-dropdown` (data-hover="false") driven by IX2
 * "Accordion Open / no color" (height 80px -> auto, icon 0 -> 180deg, 200ms) and
 * "Accordion Close / no color" (height -> 80px, 200ms cubic-bezier(.25,.25,.75,.75), icon -> 0).
 */
export default function FooterAccordion({ index, wId, title, children }: Props) {
  const { open, rootRef, rootProps, toggleProps } = useWebflowDropdown({ hover: false, delay: 0 })
  const firstRun = useRef(true)

  useLayoutEffect(() => {
    const el = rootRef.current
    if (!el) return
    if (firstRun.current) {
      firstRun.current = false
      return
    }
    const from = el.getBoundingClientRect().height
    el.style.transition = 'none'
    el.style.height = 'auto'
    const to = open ? el.getBoundingClientRect().height : CLOSED_HEIGHT
    el.style.height = `${from}px`
    void el.offsetHeight
    el.style.transition = `height ${DURATION}ms ${open ? 'ease' : 'cubic-bezier(0.25, 0.25, 0.75, 0.75)'}`
    el.style.height = `${to}px`
    if (!open) return
    const done = setTimeout(() => {
      el.style.transition = ''
      el.style.height = 'auto'
    }, DURATION)
    return () => clearTimeout(done)
  }, [open, rootRef])

  return (
    <div
      {...rootProps}
      data-delay="0"
      data-hover="false"
      data-w-id={wId}
      className="accordion-item cc-accordion-style w-dropdown"
      style={{ height: `${CLOSED_HEIGHT}px`, ...(open ? { zIndex: 901 } : null) }}
    >
      <div
        {...toggleProps}
        className={cx('accordion-toggle cc-footer w-dropdown-toggle', open && 'w--open')}
        id={`w-dropdown-toggle-${index}`}
        aria-controls={`w-dropdown-list-${index}`}
      >
        <p className="c-paragraph cc-size-big cc-caps cc-medium">{title}</p>
        <img
          loading="lazy"
          src="/assets/689f8ab045c2f710e5430348_arrow-down.svg"
          alt=""
          className="accordion-icon cc-accordion-icon-style"
          style={{
            transform: ICON_TRANSFORM(open ? 180 : 0),
            transformStyle: 'preserve-3d',
            transition: `transform ${DURATION}ms ease`,
          }}
        />
      </div>
      <nav
        className={cx('dropdown-list cc-padding-bottom-1-5rem w-dropdown-list', open && 'w--open')}
        id={`w-dropdown-list-${index}`}
        aria-labelledby={`w-dropdown-toggle-${index}`}
      >
        {children}
      </nav>
    </div>
  )
}
