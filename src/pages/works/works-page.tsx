import { Layout } from '@/components/layout/site-layout'
import { WorkCards } from '@/components/cards/work-cards'
import { featuredWorks, otherWorks, workDetails } from '@/data/works'
import '@/styles/pages.css'
import '@/pages/works/works-page.css'

const showFeaturedWorks = false

export default function WorksPage() {
  const visibleWorks = showFeaturedWorks ? otherWorks : workDetails
  return (
    <Layout>
      <main className="artifact-main artifact-subpage artifact-works">
        <section className="artifact-page-heading">
          <h1>Projetos</h1>
          <p>Uma seleção de trabalhos que fazem parte da minha trajetória.</p>
        </section>
        {showFeaturedWorks && featuredWorks.length > 0 && (
          <section
            className="works-collection"
            aria-labelledby="featured-works-heading"
          >
            <div className="works-collection-heading">
              <h2 id="featured-works-heading">Em destaque</h2>
              <span>Uma seleção para começar.</span>
            </div>
            <WorkCards works={featuredWorks} featured />
          </section>
        )}
        {visibleWorks.length > 0 && (
          <section
            className="works-collection"
            aria-labelledby="other-works-heading"
          >
            <div className="works-collection-heading">
              <h2 id="other-works-heading">
                {showFeaturedWorks ? 'Mais projetos' : 'Todos os projetos'}
              </h2>
              <span>{visibleWorks.length} projetos</span>
            </div>
            <WorkCards works={visibleWorks} />
          </section>
        )}
      </main>
    </Layout>
  )
}
