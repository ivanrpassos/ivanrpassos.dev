import { useState } from 'react'
import { PauseIcon, PlayIcon } from '@/components/ui/icons'
import { workDetails } from '@/data/works'
import { Marquee } from '@/components/magicui/marquee'


const brandSizes: Record<string, { width: number; height: number }> = {
  'porto-seguros': { width: 122.5, height: 28 },
  slicefair: { width: 148, height: 28 },
  sinkle: { width: 109, height: 24 },
  ulox: { width: 98, height: 24 },
}

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
            {brandSizes[slug] ? (
              <span
                role="img"
                aria-label={name}
                className="block bg-current"
                style={{
                  ...brandSizes[slug],
                  mask: `url(/images/brands/${slug}.svg) center / contain no-repeat`,
                }}
              />
            ) : (
              name
            )}
          </span>
        ))}
      </Marquee>
      <button
        className="artifact-brands-toggle"
        type="button"
        onClick={() => setPaused((current) => !current)}
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

