import {
  RiArrowRightUpLine,
  RiArrowRightLine,
  RiSparklingLine,
  RiLink,
} from '@remixicon/react'
import { software, socials } from './data/profile'
import { contact } from './data/works'
import avatar from './assets/avatar.jpg'
import './Home.css'
import { Layout } from './components/site-layout'
import { WorkCards, ProductPlaceholder } from './components/work-cards'
export default function Home() {
  return (
    <Layout>
      <main className="artifact-main">
        <section className="artifact-hero">
          <h1>
            Design e engenharia
            <br />
            para experiências digitais.
          </h1>
          <div className="artifact-actions">
            {[
              ['Vamos conversar', 'Conte sobre seu projeto', contact],
              ['Meu trabalho', 'Conheça os projetos', '/works'],
              ['Conexões', 'Todos os meus links', '/links'],
            ].map(([label, text, url]) => (
              <a href={url} key={label}>
                <span>
                  {label}
                  <RiArrowRightUpLine aria-hidden="true" />
                </span>
                <strong>{text}</strong>
              </a>
            ))}
          </div>
        </section>
        <section className="artifact-feature">
          <div
            className="artifact-slideshow"
            role="img"
            aria-label="Espaço para imagem de destaque"
          />
          <div className="artifact-feature-copy">
            <a className="artifact-tag upcoming" href="/works/porto-seguros">
              Em destaque <RiSparklingLine aria-hidden="true" />
            </a>
            <h2>
              Porto Seguros.
              <br />
              <span>Explore o projeto.</span>
            </h2>
            <a className="artifact-button" href="/works/porto-seguros">
              Ver projeto <RiArrowRightUpLine aria-hidden="true" />
            </a>
            <div className="artifact-scoop">
              <span className="artifact-tag">
                Conecte-se <RiLink aria-hidden="true" />
              </span>
              <div>
                {socials.map(({ name, href, icon: Icon }) => (
                  <a href={href} key={name}>
                    <Icon aria-hidden="true" />
                    {name}
                    <RiArrowRightUpLine aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="artifact-section">
          <h2>
            <a href="/works">
              Meus projetos <RiArrowRightLine aria-hidden="true" />
            </a>
          </h2>
          <WorkCards limit={3} />
        </section>
        <section className="artifact-about">
          <h2>
            Sou{' '}
            <a className="artifact-person" href="/links">
              <span className="artifact-person-icon">
                <img
                  src={avatar}
                  alt=""
                  width={24}
                  height={24}
                  loading="lazy"
                />
              </span>
              Ivan Passos
            </a>
            , empreendedor e criativo. Meu trabalho conecta{' '}
            <a href="/services">UX/UI Design</a>,{' '}
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
              Produtos e criações <RiArrowRightLine aria-hidden="true" />
            </a>
          </h2>
          <div className="artifact-three">
            <ProductPlaceholder />
          </div>
        </section>
        <section
          className="artifact-section artifact-stack-section"
          id="ferramentas"
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
