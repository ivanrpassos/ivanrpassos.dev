import { useEffect, useMemo, useState } from 'react'
import { getLocalStatus } from '@/data/status'

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
  const status = getLocalStatus(hour)

  return (
    <>
      <span
        className="artifact-icon-label"
        title="Status automático de acordo com o horário local"
      >
        {status.label} <span aria-hidden="true">{status.emoji}</span>
      </span>
      <span aria-hidden="true">·</span>
      <span>
        {city} <time dateTime={now.toISOString()}>{time}</time>
      </span>
    </>
  )
}
