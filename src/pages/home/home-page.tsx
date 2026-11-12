import { ProductCard } from '@/components/cards/product-card'
import { SparklesIcon } from '@/components/ui/icons'
import { software, socials } from '@/data/profile'
import { recentWorks } from '@/data/works'
import { BrandMarquee } from '@/components/home/brand-marquee'
import { loops } from '@/data/loops'
import '@/styles/portfolio.css'
import { Layout, Subscribe } from '@/components/layout/site-layout'
import { WorkCards } from '@/components/cards/work-cards'
export default function Home() {
  return (
    <Layout>
      <main className="artifact-main">
        <section className="artifact-hero">
          <div
            className="artifact-intro-cover"
            role="img"
            aria-label="Espaço reservado para uma foto de Ivan Passos"
          >
            <span className="artifact-intro-name">Ivan Passos</span>
            <nav className="artifact-intro-socials" aria-label="Redes sociais">
              {socials.map(({ name, href, icon: Icon }) => (
                <a href={href} key={name} aria-label={name}>
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>
          <div className="artifact-intro-bio">
            <h1>
              Do primeiro esboço
              <br />
              ao produto em uso.
            </h1>
            <div>
              <p>
                Sou Ivan Passos, empreendedor e criativo. Uno{' '}
                <a href="/services">UX/UI Design</a>,{' '}
                <a href="/services">Engenharia de Software</a> e{' '}
                <a href="/services">Design Systems</a> para criar produtos
                digitais com navegação clara e interfaces que fazem sentido.
              </p>
              <p>
                Veja meus projetos no{' '}
                <a href="https://www.behance.net/ivanrpassos">Behance</a> e
                conheça minha trajetória no{' '}
                <a href="https://linkedin.com/in/ivanrpassos">LinkedIn</a>.
              </p>
            </div>
          </div>
          <BrandMarquee />
        </section>
        <section className="artifact-feature">
          <div
            className="artifact-slideshow"
            role="img"
            aria-label="Espaço para imagem da newsletter Loops"
          />
          <div className="artifact-feature-copy">
            <span className="artifact-tag upcoming">
              Newsletter <SparklesIcon aria-hidden="true" />
            </span>
            <h2>
              Loops.
              <br />
              <span>Design, código e descobertas.</span>
            </h2>
            <Subscribe />
            <div className="artifact-scoop artifact-loops">
              <a className="artifact-tag" href="/loops">
                Últimas edições
              </a>
              <div>
                {loops.map(({ title, slug }) => (
                  <a
                    className="artifact-loop-badge"
                    href={`/loops/${slug}`}
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

        <section className="artifact-section">
          <h2>
            <a href="/products">Produtos</a>
          </h2>
          <div className="artifact-three">
            <ProductCard />
          </div>
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
