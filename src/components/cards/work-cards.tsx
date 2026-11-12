import { ShoppingBagIcon } from '@/components/ui/icons'
import { workDetails } from '@/data/works'
export function WorkCards({
  limit,
  works = workDetails,
  featured = false,
}: {
  limit?: number
  works?: typeof workDetails
  featured?: boolean
}) {
  return (
    <div className={featured ? 'featured-works-grid' : 'artifact-three'}>
      {works.slice(0, limit).map((work) => (
        <a href={'/works/' + work.slug} key={work.slug}>
          <div className="artifact-image">
            {featured && (
              <span className="featured-work-badge">Em destaque</span>
            )}
          </div>
          <div className="artifact-work-caption">
            <span>{work.name}</span>
            <div className="work-services">
              {work.special && (
                <small className="work-special-tag">Projeto especial</small>
              )}
              {work.services.map((service) => (
                <small key={service}>{service}</small>
              ))}
            </div>
          </div>
          {featured && (
            <p className="featured-work-description">{work.description}</p>
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
          <ShoppingBagIcon aria-hidden="true" />
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
