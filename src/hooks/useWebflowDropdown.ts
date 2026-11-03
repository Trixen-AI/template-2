import { useCallback, useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'

// Webflow keeps one dropdown open site-wide: opening one closes every other.
const closers = new Set<() => void>()

const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches

/**
 * Behaviour of Webflow's `.w-dropdown` (webflow.js dropdown module):
 * - data-hover="true": opens on mouseenter, closes `delay` ms after mouseleave (mouse pointers only)
 * - the toggle opens/closes on click, Enter or Space; Escape and a click outside close it
 */
export function useWebflowDropdown({ hover, delay }: { hover: boolean; delay: number }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const close = useCallback(() => {
    clearTimeout(timer.current)
    setOpen(false)
  }, [])

  const show = useCallback(() => {
    clearTimeout(timer.current)
    closers.forEach((fn) => fn !== close && fn())
    setOpen(true)
  }, [close])

  useEffect(() => {
    closers.add(close)
    return () => {
      closers.delete(close)
      clearTimeout(timer.current)
    }
  }, [close])

  useEffect(() => {
    if (!open) return
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) close()
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [open, close])

  const toggle = () => (open ? close() : show())

  const rootProps = {
    ref: rootRef,
    onMouseEnter: hover ? () => canHover() && show() : undefined,
    onMouseLeave: hover
      ? () => {
          if (!canHover()) return
          clearTimeout(timer.current)
          timer.current = setTimeout(close, delay)
        }
      : undefined,
  }

  const toggleProps = {
    onClick: toggle,
    onKeyDown: (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        toggle()
      } else if (e.key === 'Escape') close()
    },
    'aria-haspopup': 'menu' as const,
    'aria-expanded': open,
    role: 'button',
    tabIndex: 0,
  }

  return { open, rootRef, rootProps, toggleProps }
}
