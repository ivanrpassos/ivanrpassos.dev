import { ArrowRight02Icon, ArrowUpRightIcon } from '@/components/ui/icons'
import { Layout } from '@/components/layout/site-layout'
import { WorkCards } from '@/components/cards/work-cards'
import { workDetails } from '@/data/works'
import '@/styles/pages.css'
import '@/pages/works/work-detail-page.css'
export default function WorkDetail({ slug }: { slug: string }) {
  const work = workDetails.find((item) => item.slug === slug)
  if (!work)
    return (
      <Layout>
        <main className="artifact-main artifact-subpage">
          <section className="artifact-page-heading">
            <h1>Projeto não encontrado</h1>
            <a href="/works">
              Voltar aos projetos <ArrowRight02Icon aria-hidden="true" />
            </a>
          </section>
        </main>
      </Layout>
    )
  return (
    <Layout>
      <main className="artifact-detail">
        <section className="artifact-main artifact-page-heading artifact-detail-heading">
          <div>
            <h1>{work.name}</h1>
            {work.special && (
              <span className="work-special-tag">Projeto especial</span>
            )}
            {work.preview && (
              <span className="artifact-case-status">Case demonstrativo</span>
            )}
            <p>{work.description}</p>
          </div>
          {work.url && (
            <a className="artifact-button" href={work.url}>
              Visitar o site <ArrowUpRightIcon aria-hidden="true" />
            </a>
          )}
        </section>
        <div
          className="artifact-detail-cover"
          role="img"
          aria-label={'Espaço para capa de ' + work.name}
        />
        <div className="artifact-main">
          <section className="artifact-detail-story">
            <p className="artifact-detail-meta">{work.services.join(' · ')}</p>
            {work.preview && (
              <p className="artifact-case-notice">
                Este texto é uma prévia fictícia do case. Os detalhes do
                trabalho, minha participação e os resultados ainda serão
                revisados.
              </p>
            )}
            {work.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
          <section
            className="artifact-detail-gallery"
            aria-label="Galeria do projeto"
          >
            {Array.from({ length: work.images }, (_, i) => (
              <div
                key={i}
                role="img"
                aria-label={'Espaço reservado para imagem ' + (i + 1)}
              />
            ))}
          </section>
          <section className="artifact-section artifact-detail-more">
            <h2>
              <a href="/works">Mais projetos</a>
            </h2>
            <WorkCards
              works={workDetails.filter((item) => item.slug !== slug)}
              limit={3}
            />
          </section>
        </div>
      </main>
    </Layout>
  )
}
