import { useId, useState, type ReactNode } from 'react'
import { RiArrowRightUpLine } from '@remixicon/react'
import { contact } from '../data/works'
import avatar from '../assets/avatar.jpg'
import { HeaderMenu } from './header-menu'
import { BottomBlur } from './bottom-blur'
import '../Home.css'
export function Subscribe() {
  const [notice, setNotice] = useState(false)
  const noticeId = useId()
  return (
    <div className="artifact-newsletter">
      <form
        className="artifact-form"
        aria-label="Inscrição na newsletter"
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
          As inscrições estarão disponíveis em breve. Seu e-mail ainda não foi
          cadastrado.
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
          Contato <RiArrowRightUpLine aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}
export function Footer() {
  return (
    <footer className="artifact-footer">
      <div>
        <h2>
          Ideias e aprendizados.
          <br />
          <span>Direto no seu e-mail.</span>
        </h2>
        <Subscribe />
        <p>
          © {new Date().getFullYear()} Ivan Passos &nbsp; · &nbsp; Empreendedor
          &amp; Criativo &nbsp; · &nbsp; <a href="/links">Todos os links</a>
        </p>
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
    </div>
  )
}
