import { useEffect, useRef } from 'react'

// Adapted from Magic UI's Flickering Grid:
// https://magicui.design/r/flickering-grid.json
// Uses the existing CSS theme, reduced-motion support and a viewport-sized canvas.
export function FlickeringGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const step = 24
    const squareSize = 2
    const maxOpacity = 0.55
    const flickerChance = 0.3
    let visible = false
    let frame = 0
    let lastTime = 0
    let width = 0
    let height = 0
    let columns = 0
    let rows = 0
    let squares = new Float32Array(0)
    let color = ''

    const draw = () => {
      context.clearRect(0, 0, width, height)
      context.fillStyle = color
      for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
          context.globalAlpha = squares[x * rows + y]
          context.fillRect(x * step + 12, y * step + 12, squareSize, squareSize)
        }
      }
      context.globalAlpha = 1
    }
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      columns = Math.ceil(width / step)
      rows = Math.ceil(height / step)
      squares = Float32Array.from(
        { length: columns * rows },
        () => Math.random() * maxOpacity,
      )
      draw()
    }
    const updateColor = () => {
      color = getComputedStyle(document.documentElement)
        .getPropertyValue('--dots')
        .trim()
      draw()
    }
    const animate = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1)
      if (time - lastTime >= 1000 / 30) {
        lastTime = time
        let changed = false
        for (let i = 0; i < squares.length; i++) {
          if (Math.random() < flickerChance * delta) {
            squares[i] = Math.random() * maxOpacity
            changed = true
          }
        }
        if (changed) draw()
      }
      frame = requestAnimationFrame(animate)
    }
    const syncAnimation = () => {
      cancelAnimationFrame(frame)
      draw()
      if (visible && !motion.matches && !document.hidden) {
        lastTime = performance.now()
        frame = requestAnimationFrame(animate)
      }
    }
    updateColor()
    resize()
    syncAnimation()
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      syncAnimation()
    })
    visibilityObserver.observe(canvas)
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    const themeObserver = new MutationObserver(updateColor)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    motion.addEventListener('change', syncAnimation)
    document.addEventListener('visibilitychange', syncAnimation)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      visibilityObserver.disconnect()
      themeObserver.disconnect()
      motion.removeEventListener('change', syncAnimation)
      document.removeEventListener('visibilitychange', syncAnimation)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="animated-background"
      aria-hidden="true"
    />
  )
}
