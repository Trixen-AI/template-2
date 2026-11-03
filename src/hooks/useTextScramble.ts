import { useEffect } from 'react'

/*
 * Port of @flowbase-co/boosters-text-scramble@1.0.0, which the source drives with attributes:
 * fb-scramble, fb-scramble-trigger (hover | view), fb-scramble-type (all | forward),
 * fb-scramble-speed, fb-scramble-count. Every scrambled link on this page uses
 * trigger=hover, type=all, speed=30, count=5.
 */
const CHARS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', ...'<>[]()/:;.-_?!%$*+=#&@', ' ']
const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)]

function createScrambler(el: HTMLElement) {
  const original = el.textContent?.trim() || ''
  const type = el.getAttribute('fb-scramble-type') || 'forward'
  const speed = Number(el.getAttribute('fb-scramble-speed')) || (type === 'all' ? 60 : 20)
  const count = Number(el.getAttribute('fb-scramble-count')) || (type === 'all' ? 15 : 5)
  let interval: ReturnType<typeof setInterval> | undefined

  const unscramble = () => {
    el.textContent = original
    if (interval) clearInterval(interval)
  }
  const scrambleAll = () => {
    const chars = original.split('')
    let step = 0
    interval = setInterval(() => {
      if (step >= count) return unscramble()
      chars.forEach((_, i) => (chars[i] = randomChar()))
      step += 1
      el.textContent = chars.join('')
    }, speed)
  }
  const scrambleForward = () => {
    const chars = original.split('')
    let index = 0
    let step = 0
    interval = setInterval(() => {
      if (index >= original.length) return unscramble()
      if (step >= count) {
        chars[index] = original[index]
        index += 1
        step = 0
      } else {
        chars[index] = randomChar()
        step += 1
      }
      el.textContent = chars.join('')
    }, speed)
  }
  const scramble = () => {
    if (!original) return
    if (type === 'all') scrambleAll()
    if (type === 'forward') scrambleForward()
  }
  return { scramble, unscramble }
}

export function useTextScramble() {
  useEffect(() => {
    const cleanups: Array<() => void> = []
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          createScrambler(e.target as HTMLElement).scramble()
          io.unobserve(e.target)
        }),
      { threshold: 1 },
    )
    document.querySelectorAll<HTMLElement>('[fb-scramble]').forEach((el) => {
      if (!el.textContent) return
      const trigger = el.getAttribute('fb-scramble-trigger') || 'hover'
      if (trigger === 'view') io.observe(el)
      if (trigger === 'hover') {
        const s = createScrambler(el)
        el.addEventListener('mouseover', s.scramble)
        el.addEventListener('mouseleave', s.unscramble)
        cleanups.push(() => {
          s.unscramble()
          el.removeEventListener('mouseover', s.scramble)
          el.removeEventListener('mouseleave', s.unscramble)
        })
      }
    })
    return () => {
      io.disconnect()
      cleanups.forEach((fn) => fn())
    }
  }, [])
}
