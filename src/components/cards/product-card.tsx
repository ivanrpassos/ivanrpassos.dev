import { NotionIcon, ShoppingBagIcon } from '@/components/ui/icons'
export function ProductCard({ price = '$39' }: { price?: string }) {
  return (
    <a
      className="artifact-product studio-product"
      href="https://www.notion.com/templates/studio-os"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Studio OS — ${price} — template do Notion para organizar a rotina de estúdios e agências`}
    >
      <header>
        <span className="artifact-icon-label">
          <ShoppingBagIcon aria-hidden="true" />
          Template
        </span>
        <span className="studio-product-dots" aria-hidden="true">
          ··
        </span>
      </header>
      <div className="studio-product-cover" aria-hidden="true">
        <NotionIcon />
        <span>Studio OS</span>
        <small>Seu estúdio. Mais organizado.</small>
      </div>
      <div className="studio-product-caption">
        <h3>Studio OS</h3>
        {price && <span className="studio-product-price">{price}</span>}
      </div>
    </a>
  )
}
