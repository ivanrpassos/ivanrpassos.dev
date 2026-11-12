import { NotionIcon } from '@/components/ui/icons'
export function ProductCard() {
  return (
    <a
      className="artifact-product studio-product"
      href="https://ivanrpassos.notion.site/studio-os-template-v1-0-0"
      target="_blank"
      rel="noopener noreferrer"
    >
      <header>
        <span className="artifact-icon-label">
          <NotionIcon aria-hidden="true" />
          Template para Notion
        </span>
      </header>
      <div className="studio-product-cover" aria-hidden="true">
        <NotionIcon />
        <span>Studio OS</span>
        <small>Seu estúdio. Mais organizado.</small>
      </div>
      <h3>Studio OS</h3>
      <p>
        Um template do Notion para organizar a rotina de estúdios e agências.
      </p>
      <span className="studio-product-cta">Conheça o template</span>
    </a>
  )
}
