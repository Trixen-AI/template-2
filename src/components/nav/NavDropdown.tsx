import type { ReactNode } from 'react'
import { useWebflowDropdown } from '@/hooks/useWebflowDropdown'
import { cx } from '@/lib/cx'

type Props = {
  index: number
  delay: number
  wId: string
  label: string
  listClassName: string
  /** true while the collapsed (mobile) navbar menu is open: Webflow adds its w--nav-dropdown-* classes */
  navOpen: boolean
  children: ReactNode
}

export default function NavDropdown({ index, delay, wId, label, listClassName, navOpen, children }: Props) {
  const { open, rootProps, toggleProps } = useWebflowDropdown({ hover: true, delay })

  return (
    <div
      {...rootProps}
      data-delay={delay}
      data-hover="true"
      className={cx('navigation-dropdown w-dropdown', navOpen && 'w--nav-dropdown-open')}
      style={open ? { zIndex: 901 } : undefined}
    >
      <div
        {...toggleProps}
        data-w-id={wId}
        className={cx('c-nav-link w-dropdown-toggle', navOpen && 'w--nav-dropdown-toggle-open', open && 'w--open')}
        id={`w-dropdown-toggle-${index}`}
        aria-controls={`w-dropdown-list-${index}`}
      >
        <div>{label}</div>
        <div className="dropdown-icon w-embed">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 10.5L12 15L16.5 10.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <nav
        className={cx(listClassName, 'w-dropdown-list', navOpen && 'w--nav-dropdown-list-open', open && 'w--open')}
        id={`w-dropdown-list-${index}`}
        aria-labelledby={`w-dropdown-toggle-${index}`}
      >
        {children}
      </nav>
    </div>
  )
}
