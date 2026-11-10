import { RiLink } from '@remixicon/react'
type IconType = typeof RiLink
const external = { target: '_blank', rel: 'noopener noreferrer' } as const
export function CardHeading({
  title,
  icon: Icon,
}: {
  title: string
  icon: IconType
}) {
  return (
    <div className="card-heading">
      <span className="link-icon">
        <Icon aria-hidden="true" />
      </span>
      <h2>{title}</h2>
    </div>
  )
}
export function LinkCard({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string
  description: string
  href: string
  icon: IconType
}) {
  return (
    <a className="link-card" href={href} {...external}>
      <span className="link-icon" aria-hidden="true">
        <Icon />
      </span>
      <span className="link-copy">
        <h2>{title}</h2>
        <span>{description}</span>
      </span>
    </a>
  )
}
