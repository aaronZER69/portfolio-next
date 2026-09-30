'use client'

import { useEffect } from 'react'

export function PortfolioEffects() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = document.querySelector<HTMLElement>('.cursor-dot')
    const follower = document.querySelector<HTMLElement>('.cursor-follower')
    const orbital = document.querySelector<HTMLElement>('.cursor-orbital')
    if (!dot || !follower || !orbital) return
    const shapes = Array.from(document.querySelectorAll<HTMLElement>('.portfolio-shape'))
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let mouseX = 0
    let mouseY = 0
    let followerX = 0
    let followerY = 0
    let orbitalAngle = 0
    let frame = 0
    let trailCounter = 0
    let shapeX = 0
    let shapeY = 0

    const handleMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
      dot.style.opacity = '1'
      follower.style.opacity = '0.45'
      orbital.style.opacity = '0.8'

      if (trailCounter++ % 2 === 0) {
        const trail = document.createElement('span')
        trail.className = 'cursor-trail'
        trail.style.left = `${mouseX}px`
        trail.style.top = `${mouseY}px`
        document.body.appendChild(trail)
        window.setTimeout(() => trail.remove(), 500)
      }
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      follower.style.left = `${followerX}px`
      follower.style.top = `${followerY}px`
      orbitalAngle += 0.04
      orbital.style.left = `${mouseX + Math.cos(orbitalAngle) * 15 - 4}px`
      orbital.style.top = `${mouseY + Math.sin(orbitalAngle) * 15 - 4}px`

      if (!reducedMotion && shapes.length > 0) {
        const targetX = (mouseX / window.innerWidth - 0.5) * 18
        const targetY = (mouseY / window.innerHeight - 0.5) * 14
        shapeX += (targetX - shapeX) * 0.04
        shapeY += (targetY - shapeY) * 0.04
        shapes.forEach((shape, index) => {
          const factor = (index + 1) * 0.65
          shape.style.setProperty('--shape-x', `${shapeX * factor}px`)
          shape.style.setProperty('--shape-y', `${shapeY * factor}px`)
          shape.style.setProperty('--shape-rx', `${shapeY * factor * 0.35}deg`)
          shape.style.setProperty('--shape-ry', `${shapeX * factor * -0.35}deg`)
        })
      }
      frame = requestAnimationFrame(animate)
    }

    const hide = () => {
      dot.style.opacity = '0'
      follower.style.opacity = '0'
      orbital.style.opacity = '0'
    }

    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', hide)
    frame = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', hide)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div className="portfolio-background" aria-hidden="true">
        <span className="portfolio-blob portfolio-blob-one" />
        <span className="portfolio-blob portfolio-blob-two" />
        <span className="portfolio-blob portfolio-blob-three" />
        <span className="portfolio-shape portfolio-shape-one" />
        <span className="portfolio-shape portfolio-shape-two" />
        <span className="portfolio-shape portfolio-shape-three" />
      </div>
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-follower" aria-hidden="true" />
      <div className="cursor-orbital" aria-hidden="true" />
    </>
  )
}