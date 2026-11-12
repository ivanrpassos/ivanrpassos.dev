import type { ComponentPropsWithoutRef } from 'react'
import '@/components/magicui/marquee.css'

// Adapted from https://magicui.design/r/marquee.json for the project's plain CSS.
export function Marquee({
  children,
  className = '',
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props} className={`magic-marquee ${className}`}>
      {[0, 1].map((copy) => (
        <div
          className="magic-marquee-track"
          key={copy}
          aria-hidden={copy === 1 ? true : undefined}
          inert={copy === 1 ? true : undefined}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
