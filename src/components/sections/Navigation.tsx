import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import NavMenu from '@/components/nav/NavMenu'
import { cx } from '@/lib/cx'

// Webflow navbar config from the source markup: data-collapse="medium" (<= 991px), data-duration="400",
// data-easing / data-easing2 = "ease", data-doc-height="1".
const COLLAPSED = '(max-width: 991px)'
const DURATION = 400

type NavState = 'closed' | 'open' | 'closing'

/**
 * Behaviour of Webflow's `.w-nav`: when the collapsed menu opens, the `.w-nav-menu` moves into
 * `#w-nav-overlay-0` (sized to the document height minus the bar) and slides down from
 * translateY(-(barHeight + menuHeight)) to 0. Closing reverses the slide, then restores the menu.
 */
export default function Navigation() {
  const [state, setState] = useState<NavState>('closed')
  const [overlayHeight, setOverlayHeight] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const navOpen = state !== 'closed'

  const slideOffset = () => -((rootRef.current?.offsetHeight ?? 0) + (menuRef.current?.offsetHeight ?? 0))

  const openMenu = () => {
    clearTimeout(closeTimer.current)
    const barHeight = rootRef.current?.offsetHeight ?? 0
    setOverlayHeight(document.documentElement.scrollHeight - barHeight)
    setState('open')
  }

  const closeMenu = useCallback((immediate = false) => {
    const menu = menuRef.current
    if (immediate || !menu) {
      setState('closed')
      return
    }
    setState('closing')
    menu.style.transition = `transform ${DURATION}ms ease`
    menu.style.transform = `translateY(${slideOffset()}px)`
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setState('closed'), DURATION)
  }, [])

  // slide-in once the menu has been re-parented into the overlay
  useLayoutEffect(() => {
    const menu = menuRef.current
    if (state !== 'open' || !menu) return
    menu.style.transition = ''
    menu.style.transform = `translateY(${slideOffset()}px)`
    void menu.offsetHeight
    menu.style.transition = `all, transform ${DURATION}ms`
    menu.style.transform = 'translateY(0px)'
  }, [state])

  useEffect(() => {
    if (state !== 'open') return
    const onDocClick = (e: MouseEvent) => {
      const t = e.target as Node
      if (!menuRef.current?.contains(t) && !buttonRef.current?.contains(t)) closeMenu()
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeMenu()
    const mq = window.matchMedia(COLLAPSED)
    const onBreakpoint = () => !mq.matches && closeMenu(true)
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onBreakpoint)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onBreakpoint)
    }
  }, [state, closeMenu])

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  const toggle = () => (state === 'open' ? closeMenu() : openMenu())

  return (
    <div
      ref={rootRef}
      data-animation="default"
      className="c-navigation w-nav"
      data-easing2="ease"
      data-easing="ease"
      data-collapse="medium"
      role="banner"
      data-no-scroll="1"
      data-duration="400"
      data-doc-height="1"
    >
      <div className="w-embed" />
      <section className="c-section cc-white">
        <div className="c-container cc-navigation">
          <a
            aria-label="Go to Zama homepage"
            href="https://www.zama.org/"
            aria-current="page"
            className="c-nav-logo-link w-inline-block w--current"
          >
            <img
              loading="eager"
              src="/assets/68417dce00c33fce2253fc6e_Untitled_design_(1).svg"
              alt=""
              className="c-nav-logo-img"
            />
          </a>
          <div className="c-nav-container">{navOpen ? null : <NavMenu navOpen={false} menuRef={menuRef} />}</div>
          <div className="div-block-88">
            <a
              data-wf--button--variant="primary-black"
              href="https://www.zama.org/contact"
              className="c-button w-variant-d3a42be2-8df0-bd10-8119-0e792ceb3aa2 w-inline-block"
            >
              <div className="c-button-text">Contact us</div>
            </a>
            <a
              href="https://app.zama.org?utm_source=zama.org&utm_medium=referral&utm_campaign=website&utm_content=navbar_cta"
              target="_blank"
              className="c-btn cc-nav w-button"
            >
              Launch App ↗
            </a>
            <div
              ref={buttonRef}
              className={cx('c-nav-mobile-menu w-nav-button', state === 'open' && 'w--open')}
              style={{ WebkitUserSelect: 'text' }}
              aria-label="menu"
              role="button"
              tabIndex={0}
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded={state === 'open'}
              onClick={toggle}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggle()
                }
              }}
            >
              <div className="c-nav-mobile-menu-icon-open w-icon-nav-menu" />
              <img
                loading="lazy"
                src="/assets/6a21450eda86be131f32f81d_Vector_(12).svg"
                alt=""
                className="c-nav-mobile-menu-icon-close"
              />
            </div>
          </div>
        </div>
      </section>
      <div
        className="w-nav-overlay"
        data-wf-ignore=""
        id="w-nav-overlay-0"
        style={navOpen ? { height: `${overlayHeight}px`, display: 'block' } : undefined}
      >
        {navOpen ? <NavMenu navOpen menuRef={menuRef} /> : null}
      </div>
    </div>
  )
}
