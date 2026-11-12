import { useState } from 'react'
import { GridViewIcon } from '@/components/ui/icons'
import { software } from '@/data/profile'
import { CardHeading } from '@/components/cards/link-card'

// Preserved for future use; currently not rendered on the Links page.
export function SoftwareCard() {
  const [expanded, setExpanded] = useState(false)
  const external = { target: '_blank', rel: 'noopener noreferrer' } as const
  return (
    <section className="content-card" aria-label="Ferramentas que uso">
      <CardHeading title="Ferramentas que uso" icon={GridViewIcon} />
      <div id="software-list" className="software-list">
        {software
          .slice(0, expanded ? software.length : 4)
          .map(({ icon: Icon, ...item }) => (
            <a key={item.name} href={item.href} {...external}>
              <span className="software-logo" aria-hidden="true">
                <Icon />
              </span>
              <span>
                <strong>{item.name}</strong>
                <span className="software-category"> · {item.category}</span>
              </span>
            </a>
          ))}
      </div>
      {software.length > 4 && (
        <button
          className="form-button"
          aria-expanded={expanded}
          aria-controls="software-list"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Mostrar menos' : 'Mostrar mais'}
        </button>
      )}
    </section>
  )
}
