import { RiArrowRightLine, RiSparklingLine } from '@remixicon/react'
import { software } from './data/profile'
import { contact, recentWorks } from './data/works'
import { drops } from './data/drops'
import './Home.css'
import { Layout, Subscribe } from './components/site-layout'
import { WorkCards } from './components/work-cards'
export default function Home() {
  return (
    <Layout>
      <main className="artifact-main">
        <section className="artifact-hero">
          <h1>
            Ideias ganham forma.
            <br />
            Design e código dão vida.
          </h1>
          <div className="artifact-actions">
            {[
              ['Vamos conversar', 'Conte sobre seu projeto', contact],
              ['Meu trabalho', 'Conheça os projetos', '/works'],
              ['Conexões', 'Todos os meus links', '/links'],
            ].map(([label, text, url]) => (
              <a href={url} key={label}>
                <span>{label}</span>
                <strong>{text}</strong>
              </a>
            ))}
          </div>
        </section>
        <section className="artifact-feature">
          <div
            className="artifact-slideshow"
            role="img"
            aria-label="Espaço para imagem da newsletter Loops"
          />
          <div className="artifact-feature-copy">
            <span className="artifact-tag upcoming">
              Drop a newsletter <RiSparklingLine aria-hidden="true" />
            </span>
            <h2>
              Loops.
              <br />
              <span>Ideias que merecem circular.</span>
            </h2>
            <Subscribe />
            <div className="artifact-scoop artifact-drops">
              <a className="artifact-tag" href="/drops">
                Últimos drops
              </a>
              <div>
                {drops.map(({ title, slug }) => (
                  <a
                    className="artifact-drop-badge"
                    href={`/drops/${slug}`}
                    key={slug}
                  >
                    {title}
                  </a>
                ))}{' '}
              </div>
            </div>
          </div>
        </section>
        <section className="artifact-section">
          <h2>
            <a href="/works">Projetos recentes</a>
          </h2>
          <WorkCards works={recentWorks} limit={3} />
        </section>
        <section className="artifact-about">
          <h2>
            Sou <a href="/links">Ivan Passos</a>, empreendedor e criativo. Meu
            trabalho conecta <a href="/services">UX/UI Design</a>,{' '}
            <a href="/services">Engenharia de Software</a> e{' '}
            <a href="/services">Design Systems</a> para construir experiências
            digitais.
          </h2>
          <h2>
            Conheça meu portfólio no{' '}
            <a href="https://www.behance.net/ivanrpassos">Behance</a> e minha
            trajetória profissional no{' '}
            <a href="https://linkedin.com/in/ivanrpassos">LinkedIn</a>.
          </h2>
        </section>
        <section className="artifact-section">
          <h2>
            <a href="/products">
              Produtos recentes <RiArrowRightLine aria-hidden="true" />
            </a>
          </h2>
          <p className="artifact-coming-soon">Em breve</p>
        </section>
        <section
          className="artifact-section artifact-stack-section"
          id="ferramentas"
          hidden
        >
          <h2>Ferramentas que uso</h2>
          <div className="artifact-stack">
            {software.map(({ name, category, href, icon: Icon }) => (
              <a href={href} key={name}>
                <span className="artifact-tool-icon">
                  <Icon aria-hidden="true" />
                </span>
                <span>
                  {name}
                  <small>{category}</small>
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}
