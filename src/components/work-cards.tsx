import { RiShoppingBagLine } from '@remixicon/react'
import { workDetails } from '../data/works'
export function WorkCards({
  limit,
  works = workDetails,
}: {
  limit?: number
  works?: typeof workDetails
}) {
  return (
    <div className="artifact-three">
      {works.slice(0, limit).map((work) => (
        <a href={'/works/' + work.slug} key={work.slug}>
          <div className="artifact-image" />
          <div className="artifact-work-caption">
            <span>{work.name}</span>
            <small>{work.category}</small>
          </div>
        </a>
      ))}
    </div>
  )
}
export function ProductPlaceholder() {
  return (
    <article className="artifact-product">
      <header>
        <span className="artifact-icon-label">
          <RiShoppingBagLine aria-hidden="true" />
          Novidades em breve
        </span>
      </header>
      <div className="artifact-image" />
      <p>
        Novas criações <small>Em preparação</small>
      </p>
    </article>
  )
}
