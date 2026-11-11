import { useEffect, useMemo, useState } from 'react'
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
    let timer: ReturnType<typeof setTimeout>
    const schedule = () => {
      timer = setTimeout(
        () => {
          setNow(new Date())
          schedule()
        },
        60_000 - (Date.now() % 60_000),
      )
    }
    schedule()
    return () => clearTimeout(timer)
  }, [])

  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat('pt-BR', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
      }),
    [timeZone],
  )
  const time = formatter.format(now)
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
