import { useId, useState, type ReactNode } from 'react'
import { contact } from '@/data/works'
import avatar from '@/assets/avatar.jpg'
import { HeaderMenu } from '@/components/layout/header-menu'
import { BottomBlur } from '@/components/motion/bottom-blur'
import { LocalStatus } from '@/components/layout/local-status'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import '@/styles/portfolio.css'
import { ThemeControl } from '@/components/layout/theme-control'
export function Subscribe() {
  const [notice, setNotice] = useState(false)
  const noticeId = useId()
  return (
    <div className="artifact-newsletter">
      <form
        className="artifact-form"
        aria-label="Inscrição no Loops"
        onSubmit={(event) => {
          event.preventDefault()
          setNotice(true)
        }}
      >
        <input
          type="email"
          name="email"
          autoComplete="email"
          aria-label="Seu e-mail"
          placeholder="Seu e-mail"
          required
          aria-describedby={notice ? noticeId : undefined}
        />
        <button type="submit">Inscrever-se</button>
      </form>
      {notice && (
        <p className="artifact-newsletter-notice" id={noticeId} role="status">
          As inscrições ainda não estão abertas. Seu e-mail não foi cadastrado.
        </p>
      )}
    </div>
  )
}
export function Header() {
  return (
    <header className="artifact-header">
      <nav aria-label="Navegação principal">
        <a
          className="artifact-avatar"
          href="/"
          aria-label="Ivan Passos — início"
        >
          <img src={avatar} alt="" width={32} height={32} />
        </a>
        {[
          ['/works', 'Projetos'],
          ['/services', 'Serviços'],
          ['/products', 'Produtos'],
        ].map(([url, title]) => (
          <a
            key={url}
            className="header-primary-link"
            href={url}
            aria-current={
              window.location.pathname.startsWith(url) ? 'page' : undefined
            }
          >
            {title}
          </a>
        ))}
        <HeaderMenu />
        <a className="artifact-email" href={contact}>
          Vamos conversar?
        </a>
      </nav>
    </header>
  )
}
export function Footer() {
  return (
    <footer className="artifact-footer" id="newsletter">
      <FlickeringGrid />
      <div>
        <h2>
          Loops: o que aprendo criando.
          <br />
          <span>Design, código e ideias para explorar.</span>
        </h2>
        <Subscribe />
        <div className="artifact-footer-meta">
          <LocalStatus city="SP" timeZone="America/Sao_Paulo" />
          <span aria-hidden="true">·</span>
          <a role="link" aria-disabled="true" tabIndex={0}>
            Políticas de Privacidade
          </a>
          <span aria-hidden="true">·</span>
          <a role="link" aria-disabled="true" tabIndex={0}>
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  )
}
export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="artifact">
      <Header />
      {children}
      <Footer />
      <BottomBlur />
      <ThemeControl />
    </div>
  )
}
