import { useEffect, useState } from 'react'
import { RiMoonLine, RiSunLine } from '@remixicon/react'

export function LocalStatus({
  city,
  timeZone,
}: {
  city: string
  timeZone: string
}) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const time = new Intl.DateTimeFormat('pt-BR', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).format(now)
  const hour = Number(time.split(':')[0])
  const resting = hour < 8 || hour >= 22

  return (
    <>
      <span
        className="artifact-icon-label"
        title="Status automático de acordo com o horário local"
      >
        {resting ? 'Descansando' : 'Por aqui'}
        {resting ? (
          <RiMoonLine aria-hidden="true" />
        ) : (
          <RiSunLine aria-hidden="true" />
        )}
      </span>
      <span aria-hidden="true">·</span>
      <span>
        {city} <time dateTime={now.toISOString()}>{time}</time>
      </span>
    </>
  )
}
