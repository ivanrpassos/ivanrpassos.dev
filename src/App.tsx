import { useState } from 'react'
import {
  RiLinkedinFill,
  RiBehanceFill,
  RiInstagramLine,
  RiLink,
  RiPaletteLine,
  RiYoutubeLine,
  RiChat3Line,
  RiApps2Line,
  RiExternalLinkLine,
} from '@remixicon/react'
import { socials, software } from './data/profile'
import { CardHeading, LinkCard } from './components/link-card'
import { ThemeControl } from './components/theme-control'
import avatar from './assets/avatar.jpg'
import { FlickeringGrid } from './components/magicui/flickering-grid'
import './App.css'

const external = { target: '_blank', rel: 'noopener noreferrer' } as const
function App() {
  const [expanded, setExpanded] = useState(false)
  const [contactNotice, setContactNotice] = useState(false)
  const [newsletterNotice, setNewsletterNotice] = useState(false)
  return (
    <>
      <FlickeringGrid />
      <a className="skip-link" href="#links">
        Pular para o conteúdo
      </a>
      <main className="profile">
        <header className="profile-header">
          <img
            className="avatar"
            src={avatar}
            alt="Ivan Passos"
            width={48}
            height={48}
          />
          <h1>Ivan Passos</h1>
          <p>Empreendedor &amp; Criativo</p>
          <nav className="social-links" aria-label="Redes sociais">
            {socials.map(({ name, count, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                {...external}
                aria-label={`${name}: ${count} seguidores`}
                title={name}
              >
                <Icon aria-hidden="true" />
                <span>{count}</span>
              </a>
            ))}
          </nav>
        </header>
        <div id="links" className="links">
          <a
            className="feature-card"
            href="https://digisource.io"
            {...external}
          >
            <span className="feature-caption">
              <h2>Digisource</h2>
              <span>Conheça o projeto.</span>
            </span>
          </a>
          <LinkCard
            title="Meu website"
            description="Meu espaço na internet."
            href="https://ivanrpassos.dev"
            icon={RiLink}
          />
          <LinkCard
            title="Suaaave"
            description="Meu espaço criativo."
            href="https://suaaave.com/@ivanrpassos"
            icon={RiPaletteLine}
          />
          <section className="content-card video-card" aria-label="YouTube">
            <CardHeading title="YouTube" icon={RiYoutubeLine} />
            <div
              className="video-placeholder"
              role="img"
              aria-label="Espaço reservado para futuros vídeos"
            />
          </section>
          <LinkCard
            title="Meu portfólio"
            description="Meus projetos no Behance."
            href="https://www.behance.net/ivanrpassos"
            icon={RiBehanceFill}
          />
          <a
            className="content-card instagram-card"
            href="https://instagram.com/ivanrpassos"
            {...external}
          >
            <div className="instagram-heading">
              <CardHeading title="No Instagram" icon={RiInstagramLine} />
              <RiExternalLinkLine aria-hidden="true" />
            </div>
            <div className="instagram-strip" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} />
              ))}
            </div>
          </a>
          <section className="content-card" aria-label="Deixe uma mensagem">
            <CardHeading title="Deixe uma mensagem" icon={RiChat3Line} />
            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault()
                setContactNotice(true)
              }}
            >
              <div className="form-row">
                <input
                  aria-label="Seu nome"
                  name="name"
                  autoComplete="name"
                  placeholder="Seu nome"
                  required
                />
                <input
                  aria-label="Seu e-mail"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Seu e-mail"
                  required
                />
              </div>
              <textarea
                aria-label="Escreva sua mensagem"
                name="message"
                placeholder="Escreva sua mensagem..."
                required
              />
              <button className="form-button" type="submit">
                Enviar mensagem
              </button>
              {contactNotice && (
                <p className="form-notice" role="status">
                  O envio por aqui ainda não está disponível. Use o link “Vamos
                  conversar?” abaixo.
                </p>
              )}
            </form>
          </section>
          <section
            className="content-card newsletter-card"
            aria-labelledby="newsletter-title"
          >
            <h2 id="newsletter-title">Minha newsletter</h2>
            <p>
              Um espaço para compartilhar aprendizados.
              <br />
              Em breve.
            </p>
            <form
              className="newsletter-form"
              onSubmit={(event) => {
                event.preventDefault()
                setNewsletterNotice(true)
              }}
            >
              <input
                aria-label="Seu e-mail"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Seu e-mail"
                required
              />
              <button type="submit">Inscrever-se</button>
            </form>
            {newsletterNotice && (
              <p className="form-notice" role="status">
                As inscrições ainda não estão disponíveis. Seu e-mail não foi
                cadastrado.
              </p>
            )}
          </section>
          <section className="content-card" aria-label="Ferramentas que uso">
            <CardHeading title="Ferramentas que uso" icon={RiApps2Line} />
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
                      <span className="software-category">
                        {' '}
                        · {item.category}
                      </span>
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
          <LinkCard
            title="Minha trajetória"
            description="Experiências e conexões no LinkedIn."
            href="https://linkedin.com/in/ivanrpassos"
            icon={RiLinkedinFill}
          />
          <hr className="section-divider" />
          <LinkCard
            title="Vamos conversar?"
            description="Uma ideia, um projeto ou só um oi."
            href="https://tally.so/r/2EGYpp"
            icon={RiChat3Line}
          />
        </div>
        <footer className="template-footer">
          <span>© {new Date().getFullYear()} Ivan Passos</span>
          <span>·</span>
          <a href="https://ivanrpassos.dev">ivanrpassos.dev</a>
        </footer>
      </main>
      <ThemeControl />
      <aside className="template-badges" aria-label="Links de contato">
        <a href="https://tally.so/r/2EGYpp" {...external}>
          <RiChat3Line aria-hidden="true" />
          Vamos conversar?
        </a>
      </aside>
    </>
  )
}
export default App
