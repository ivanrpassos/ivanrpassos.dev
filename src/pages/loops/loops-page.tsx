import { useEffect } from 'react'
import { ArrowLeft02Icon } from '@/components/ui/icons'
import { Layout } from '@/components/layout/site-layout'
import { loops } from '@/data/loops'
import '@/styles/pages.css'
import '@/pages/loops/loops-page.css'

export default function Loops({ slug }: { slug?: string }) {
  const drop = loops.find((item) => item.slug === slug)
  useEffect(() => {
    document.title = `${drop?.title ?? (slug ? 'Edição não encontrada' : 'Loops')} · Ivan Passos`
  }, [drop, slug])

  return (
    <Layout>
      <main className="artifact-main artifact-subpage artifact-loops-page">
        {slug ? (
          <>
            <a className="loops-back" href="/loops">
              <ArrowLeft02Icon aria-hidden="true" /> Todas as edições
            </a>
            {drop ? (
              <article>
                <header className="artifact-page-heading">
                  <span className="loops-eyebrow">Loops · Por Ivan Passos</span>
                  <h1>{drop.title}</h1>
                  <p>{drop.intro}</p>
                </header>
                <div className="loops-prose">
                  {drop.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <nav className="loops-related" aria-label="Continue lendo">
                  <h2>Mais edições</h2>
                  {loops
                    .filter((item) => item.slug !== slug)
                    .map((item) => (
                      <a href={`/loops/${item.slug}`} key={item.slug}>
                        {item.title}
                      </a>
                    ))}
                </nav>
              </article>
            ) : (
              <section className="artifact-page-heading">
                <h1>Edição não encontrada.</h1>
                <p>
                  Esta edição não está disponível. Encontre outra leitura no
                  Loops.
                </p>
              </section>
            )}
          </>
        ) : (
          <>
            <header className="artifact-page-heading">
              <h1>Loops</h1>
              <p>
                Minha newsletter sobre design, código e o que aprendo criando.
                Escolha uma edição e acompanhe essa conversa.
              </p>
            </header>
            <div className="loops-list">
              {loops.map((item) => (
                <a href={`/loops/${item.slug}`} key={item.slug}>
                  {item.title}
                </a>
              ))}
            </div>
          </>
        )}
      </main>
    </Layout>
  )
}
