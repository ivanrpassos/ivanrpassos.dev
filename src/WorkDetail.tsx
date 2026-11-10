import { RiArrowRightLine, RiArrowRightUpLine } from '@remixicon/react'
import { Layout } from './components/site-layout'
import { workDetails } from './data/works'
import './Pages.css'
import './WorkDetail.css'
export default function WorkDetail({ slug }: { slug: string }) {
  const work = workDetails.find((item) => item.slug === slug)
  if (!work)
    return (
      <Layout>
        <main className="artifact-main artifact-subpage">
          <section className="artifact-page-heading">
            <h1>Projeto não encontrado</h1>
            <a href="/works">
              Voltar aos projetos <RiArrowRightLine aria-hidden="true" />
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
            {work.preview && (
              <span className="artifact-case-status">Case demonstrativo</span>
            )}
            <p>{work.description}</p>
          </div>
          {work.url && (
            <a className="artifact-button" href={work.url}>
              Visitar projeto <RiArrowRightUpLine aria-hidden="true" />
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
            <p className="artifact-detail-meta">{work.category}</p>
            {work.preview && (
              <p className="artifact-case-notice">
                Conteúdo fictício para apresentação do portfólio. Escopo,
                participação e resultados ainda serão validados.
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
              <a href="/works">
                Mais projetos <RiArrowRightLine aria-hidden="true" />
              </a>
            </h2>
            <div className="artifact-three">
              {workDetails
                .filter((item) => item.slug !== slug)
                .slice(0, 3)
                .map((item) => (
                  <a key={item.slug} href={'/works/' + item.slug}>
                    <div className="artifact-image" />
                    <div className="artifact-work-caption">
                      <span>
                        <RiArrowRightUpLine aria-hidden="true" /> {item.name}
                      </span>
                      <small>{item.category}</small>
                    </div>
                  </a>
                ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}
