import { useEffect, useRef } from 'react'

type Props = { url: string; className: string; wId: string }

/**
 * Mirrors Webflow's `spline` module: `new Application(canvas).load(url)` on a canvas inside the
 * `[data-animation-type="spline"]` wrapper. The runtime is imported lazily, as the source does.
 * The scene's motion (coins passing through the shield) lives inside the .splinecode file.
 */
export default function SplineScene({ url, className, wId }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let cancelled = false
    let app: { dispose?: () => void } | undefined
    import('@splinetool/runtime').then(async ({ Application }) => {
      if (cancelled) return
      const instance = new Application(canvas)
      app = instance
      await instance.load(url)
      if (cancelled) instance.dispose?.()
    })
    return () => {
      cancelled = true
      app?.dispose?.()
    }
  }, [url])

  return (
    <div className={className} data-w-id={wId} data-animation-type="spline" data-spline-url={url}>
      <canvas ref={canvasRef} />
    </div>
  )
}
