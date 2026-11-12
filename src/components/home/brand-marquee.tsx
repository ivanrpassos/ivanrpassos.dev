import { useState } from 'react'
import { PauseIcon, PlayIcon } from '@/components/ui/icons'
import { workDetails } from '@/data/works'
import { Marquee } from '@/components/magicui/marquee'

export function BrandMarquee() {
  const [paused, setPaused] = useState(false)
  return (
    <section className="artifact-brands" aria-label="Marcas com quem trabalhei">
      <Marquee data-paused={paused}>
        {workDetails.map(({ slug, name }) => (
          <span
            className="text-[22px] font-semibold whitespace-nowrap text-(--a-muted)"
            key={slug}
          >
            {name}
          </span>
        ))}
      </Marquee>
      <button
        className="artifact-brands-toggle"
        type="button"
        onClick={() => setPaused(!paused)}
        aria-label={
          paused
            ? 'Retomar movimento das marcas'
            : 'Pausar movimento das marcas'
        }
      >
        {paused ? (
          <PlayIcon aria-hidden="true" />
        ) : (
          <PauseIcon aria-hidden="true" />
        )}
      </button>
    </section>
  )
}
