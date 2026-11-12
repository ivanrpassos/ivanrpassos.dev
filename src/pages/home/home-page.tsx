import { ProductCard } from '@/components/cards/product-card'
import { software, socials } from '@/data/profile'
import { recentWorks } from '@/data/works'
import { BrandMarquee } from '@/components/home/brand-marquee'
import { loops } from '@/data/loops'
import '@/styles/portfolio.css'
import { Layout, Subscribe } from '@/components/layout/site-layout'
import { WorkCards } from '@/components/cards/work-cards'

const heroPhotos = {
  principal: {
    src: '/images/hero/ivan-passos.jpg',
    position: '50% 32%',
    alt: 'Ivan Passos de camisa preta, sentado em um sofá',
  },
  'evento-1': {
    src: '/images/hero/ivan-passos-evento-1.jpg',
    position: '50% 25%',
    alt: 'Ivan Passos com um microfone durante um evento',
  },
  'evento-2': {
    src: '/images/hero/ivan-passos-evento-2.jpg',
    position: '50% 22%',
    alt: 'Ivan Passos participando de uma conversa em um evento',
  },
}

export default function Home() {
  const previewPhoto = import.meta.env.DEV
    ? new URLSearchParams(window.location.search).get('foto')
    : null
  const photo =
    heroPhotos[previewPhoto as keyof typeof heroPhotos] ?? heroPhotos.principal
  return (
    <Layout>
      <main className="artifact-main">
        <section className="artifact-hero">
          <div className="artifact-intro-cover">
            <img
              className="artifact-intro-photo"
              src={photo.src}
              alt={photo.alt}
              style={{ objectPosition: photo.position }}
              fetchPriority="high"
            />
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
                Sou Ivan Passos, estrategista de marca, designer e
                desenvolvedor. Trabalhar em uma grande empresa me deu repertório
                e orgulho da minha trajetória. Mas a vontade de construir algo
                meu sempre falou alto.
              </p>
              <p>
                Hoje, levo essa experiência para os negócios que ajudo a criar e
                para os meus próprios projetos. Me move a curiosidade de
                aprender, a coragem de empreender e a satisfação de ver uma
                ideia ganhar vida.
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
            <span className="artifact-tag upcoming">Newsletter</span>
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
