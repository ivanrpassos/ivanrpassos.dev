import './bottom-blur.css'

// Progressive blur measured from the reference: 100px, eight overlapping masks.
export function BottomBlur() {
  return (
    <div className="bottom-blur" aria-hidden="true">
      {Array.from({ length: 8 }, (_, index) => {
        const start = index * 12.5
        const stops = [`transparent ${start}%`, `black ${start + 12.5}%`]
        if (index < 7) stops.push(`black ${start + 25}%`)
        if (index < 6) stops.push(`transparent ${start + 37.5}%`)
        const mask = `linear-gradient(to bottom, ${stops.join(', ')})`
        const blur = `blur(${10 / 2 ** (7 - index)}px)`
        return (
          <span
            key={index}
            style={{
              maskImage: mask,
              WebkitMaskImage: mask,
              backdropFilter: blur,
              WebkitBackdropFilter: blur,
            }}
          />
        )
      })}
    </div>
  )
}
