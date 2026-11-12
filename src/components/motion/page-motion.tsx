import { useLayoutEffect } from 'react'
import Lenis from 'lenis'
import '@/components/motion/lenis.css'
import '@/components/motion/page-motion.css'

// Animate independent blocks, never their containers as well.
const targets = [
  '.artifact-intro-cover',
  '.artifact-intro-bio',
  '.artifact-brands',
  '.loops-list > a',
  '.loops-prose > p',
  '.loops-related',
  '.artifact-actions > a',
  '.artifact-feature',
  '.artifact-section > h2',
  '.artifact-three > a',
  '.artifact-product',
  '.artifact-about',
  '.artifact-stack > a',
  '.artifact-page-heading',
  '.artifact-service',
  '.artifact-faq > h2',
  '.artifact-question',
  '.artifact-chat',
  '.artifact-collaboration',
  '.artifact-detail-cover',
  '.artifact-detail-story',
  '.artifact-detail-gallery > div',
  '.artifact-footer > div',
  '.profile-header',
  '.links > *',
].join(',')

export function PageMotion() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let dispose = () => {}
    const setup = () => {
      dispose()
      if (preference.matches) return
      const lenis = new Lenis({
        autoRaf: true,
        lerp: 0.09,
        anchors: { offset: -80 },
        prevent: (node) => node.tagName === 'TEXTAREA',
      })
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>(targets),
      )
      const animations = new Map<HTMLElement, Animation>()
      const reveal = (element: HTMLElement) => {
        element.classList.remove('reveal-pending')
        if (!element.animate) return
        const animation = element.animate(
          [
            { opacity: 0, transform: 'translateY(18px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          { duration: 650, easing: 'cubic-bezier(.22,1,.36,1)' },
        )
        animations.set(element, animation)
        animation.onfinish = () => animations.delete(element)
      }
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            reveal(entry.target as HTMLElement)
            observer.unobserve(entry.target)
          }
        },
        { threshold: 0, rootMargin: '0px 0px -24px 0px' },
      )
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        if (rect.bottom < 0) return
        element.classList.add('reveal-pending')
        observer.observe(element)
      })
      // Keyboard focus must never land on concealed content.
      const onFocus = (event: FocusEvent) => {
        if (!(event.target instanceof Element)) return
        const element = event.target.closest<HTMLElement>('.reveal-pending')
        if (element) {
          observer.unobserve(element)
          element.classList.remove('reveal-pending')
        }
      }
      document.addEventListener('focusin', onFocus)
      dispose = () => {
        lenis.destroy()
        observer.disconnect()
        document.removeEventListener('focusin', onFocus)
        animations.forEach((animation) => animation.cancel())
        elements.forEach((element) =>
          element.classList.remove('reveal-pending'),
        )
      }
    }
    setup()
    preference.addEventListener('change', setup)
    return () => {
      dispose()
      preference.removeEventListener('change', setup)
    }
  }, [])
  return null
}
