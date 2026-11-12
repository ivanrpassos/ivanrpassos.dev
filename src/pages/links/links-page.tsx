import { useState } from 'react'
import {
  LinkedinIcon,
  BehanceIcon,
  InstagramIcon,
  Link01Icon,
  PaintBoardIcon,
  YoutubeIcon,
  Message01Icon,
  GridViewIcon,
  ArrowUpRightIcon,
} from '@/components/ui/icons'
import { socials, software } from '@/data/profile'
import { CardHeading, LinkCard } from '@/components/cards/link-card'
import { ThemeControl } from '@/components/layout/theme-control'
import avatar from '@/assets/avatar.jpg'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import '@/pages/links/links-page.css'

const external = { target: '_blank', rel: 'noopener noreferrer' } as const
function LinksPage() {
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
          <p>Design, código e ideias em construção.</p>
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
            title="Meu site"
            description="Projetos, serviços e um pouco da minha trajetória."
            href="https://ivanrpassos.dev"
            icon={Link01Icon}
          />
          <LinkCard
            title="Suaaave"
            description="Um espaço para explorar meu lado criativo."
            href="https://suaaave.com/@ivanrpassos"
            icon={PaintBoardIcon}
          />
          <section className="content-card video-card" aria-label="YouTube">
            <CardHeading title="YouTube" icon={YoutubeIcon} />
            <div
              className="video-placeholder"
              role="img"
              aria-label="Espaço reservado para futuros vídeos"
            />
          </section>
          <LinkCard
            title="Meu portfólio"
            description="Veja meus trabalhos no Behance."
            href="https://www.behance.net/ivanrpassos"
            icon={BehanceIcon}
          />
          <a
            className="content-card instagram-card"
            href="https://instagram.com/ivanrpassos"
            {...external}
          >
            <div className="instagram-heading">
              <CardHeading title="No Instagram" icon={InstagramIcon} />
              <ArrowUpRightIcon aria-hidden="true" />
            </div>
            <div className="instagram-strip" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} />
              ))}
            </div>
          </a>
          <section className="content-card" aria-label="Deixe uma mensagem">
            <CardHeading title="Deixe uma mensagem" icon={Message01Icon} />
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
                placeholder="O que você tem em mente?"
                required
              />
              <button className="form-button" type="submit">
                Enviar mensagem
              </button>
              {contactNotice && (
                <p className="form-notice" role="status">
                  Sua mensagem não foi enviada. Por enquanto, fale comigo pelo
                  link “Vamos conversar?” abaixo.
                </p>
              )}
            </form>
          </section>
          <section
            className="content-card newsletter-card"
            aria-labelledby="newsletter-title"
          >
            <h2 id="newsletter-title">Loops</h2>
            <p>
              Design, código e o que aprendo criando.
              <br />
              Inscrições em breve. <a href="/loops">Leia as edições.</a>
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
                As inscrições ainda não estão abertas. Seu e-mail não foi
                cadastrado.
              </p>
            )}
          </section>
          <section className="content-card" aria-label="Ferramentas que uso">
            <CardHeading title="Ferramentas que uso" icon={GridViewIcon} />
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
            description="Conheça meu caminho profissional no LinkedIn."
            href="https://linkedin.com/in/ivanrpassos"
            icon={LinkedinIcon}
          />
          <hr className="section-divider" />
          <LinkCard
            title="Vamos conversar?"
            description="Conte sua ideia, seu projeto ou mande um oi."
            href="https://tally.so/r/2EGYpp"
            icon={Message01Icon}
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
          <Message01Icon aria-hidden="true" />
          Vamos conversar?
        </a>
      </aside>
    </>
  )
}
export default LinksPage
