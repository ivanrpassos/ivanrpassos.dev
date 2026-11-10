import { RiArrowRightUpLine, RiShoppingBagLine } from '@remixicon/react'
import { workDetails } from '../data/works'
export function WorkCards({ limit }: { limit?: number }) {
  return (
    <div className="artifact-three">
      {workDetails.slice(0, limit).map((work) => (
        <a href={'/works/' + work.slug} key={work.slug}>
          <div className="artifact-image" />
          <div className="artifact-work-caption">
            <span>
              <RiArrowRightUpLine aria-hidden="true" /> {work.name}
            </span>
            <small>{work.category}</small>
          </div>
          {work.preview && (
            <small className="artifact-case-caption">Case demonstrativo</small>
          )}
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
