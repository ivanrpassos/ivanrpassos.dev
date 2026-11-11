import { useEffect } from 'react'
import { RiArrowLeftLine } from '@remixicon/react'
import { Layout } from './components/site-layout'
import { drops } from './data/drops'
import './Pages.css'
import './Drops.css'

export default function Drops({ slug }: { slug?: string }) {
  const drop = drops.find((item) => item.slug === slug)
  useEffect(() => {
    document.title = `${drop?.title ?? (slug ? 'Drop não encontrado' : 'Drops — Loops')} · Ivan Passos`
  }, [drop, slug])

  return (
    <Layout>
      <main className="artifact-main artifact-subpage artifact-drops-page">
        {slug ? (
          <>
            <a className="drops-back" href="/drops">
              <RiArrowLeftLine aria-hidden="true" /> Todos os drops
            </a>
            {drop ? (
              <article>
                <header className="artifact-page-heading">
                  <span className="drops-eyebrow">Loops · Por Ivan Passos</span>
                  <h1>{drop.title}</h1>
                  <p>{drop.intro}</p>
                </header>
                <div className="drops-prose">
                  {drop.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <nav className="drops-related" aria-label="Continue lendo">
                  <h2>Mais drops</h2>
                  {drops
                    .filter((item) => item.slug !== slug)
                    .map((item) => (
                      <a href={`/drops/${item.slug}`} key={item.slug}>
                        {item.title}
                      </a>
                    ))}
                </nav>
              </article>
            ) : (
              <section className="artifact-page-heading">
                <h1>Drop não encontrado.</h1>
                <p>Explore as outras edições do Loops.</p>
              </section>
            )}
          </>
        ) : (
          <>
            <header className="artifact-page-heading">
              <h1>Drops</h1>
              <p>
                Ideias, processos e descobertas. As edições do Loops, em um só
                lugar.
              </p>
            </header>
            <div className="drops-list">
              {drops.map((item) => (
                <a href={`/drops/${item.slug}`} key={item.slug}>
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
