import { useEffect, useRef, useState } from 'react'
import { HERO_FRAGMENT_SHADER, HERO_VERTEX_SHADER } from '@/lib/heroGradientShader'

const CANVAS_STYLE = {
  position: 'absolute',
  inset: '0',
  width: '100%',
  height: '100%',
  display: 'block',
  zIndex: '0',
} as const

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader))
    return null
  }
  return shader
}

/**
 * Port of the source's inline #gradientHeroCanvas script: a full-screen fragment shader at DPR <= 1.5,
 * paused while offscreen or in a hidden tab. Reduced motion (or no WebGL) shows the static CSS fallback.
 */
export default function HeroGradientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const parent = c.parentElement!
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const gl = reduce
      ? null
      : ((c.getContext('webgl') || c.getContext('experimental-webgl')) as WebGLRenderingContext | null)
    if (!gl) {
      setFallback(true)
      return
    }
    const p = gl.createProgram()!
    const vs = compile(gl, gl.VERTEX_SHADER, HERO_VERTEX_SHADER)
    const fs = compile(gl, gl.FRAGMENT_SHADER, HERO_FRAGMENT_SHADER)
    if (!vs || !fs) {
      setFallback(true)
      return
    }
    gl.attachShader(p, vs)
    gl.attachShader(p, fs)
    gl.linkProgram(p)
    gl.useProgram(p)
    const bf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, bf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const l = gl.getAttribLocation(p, 'p')
    gl.enableVertexAttribArray(l)
    gl.vertexAttribPointer(l, 2, gl.FLOAT, false, 0, 0)
    const uR = gl.getUniformLocation(p, 'u_res')
    const uT = gl.getUniformLocation(p, 'u_time')

    const rs = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const w = Math.floor(c.clientWidth * dpr)
      const h = Math.floor(c.clientHeight * dpr)
      if (c.width !== w || c.height !== h) {
        c.width = w
        c.height = h
        gl.viewport(0, 0, w, h)
      }
    }

    let raf = 0
    let run = true
    const st = performance.now()
    const fr = (now: number) => {
      if (!run) return
      rs()
      gl.uniform2f(uR, c.width, c.height)
      gl.uniform1f(uT, (now - st) / 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
      raf = requestAnimationFrame(fr)
    }
    const start = () => {
      if (run) return
      run = true
      raf = requestAnimationFrame(fr)
    }
    const stop = () => {
      run = false
      cancelAnimationFrame(raf)
    }
    raf = requestAnimationFrame(fr)

    const io = new IntersectionObserver((entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())), {
      threshold: 0,
    })
    io.observe(parent)
    const onVisibility = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      gl.deleteBuffer(bf)
      gl.deleteProgram(p)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
    }
  }, [])

  return (
    <>
      {fallback ? <div className="gradient-hero-fallback" /> : null}
      <canvas
        ref={canvasRef}
        id="gradientHeroCanvas"
        style={fallback ? { ...CANVAS_STYLE, display: 'none' } : CANVAS_STYLE}
      />
    </>
  )
}
