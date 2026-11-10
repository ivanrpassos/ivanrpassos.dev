import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './components/ui/accordion'
import {
  RiLayoutLine,
  RiCodeLine,
  RiServerLine,
  RiGridLine,
  RiArrowRightUpLine,
} from '@remixicon/react'
import { Layout } from './components/site-layout'
import { WorkCards, ProductPlaceholder } from './components/work-cards'
import { contact } from './data/works'
import './Pages.css'
import avatar from './assets/avatar.jpg'
const services = [
  [
    'UX/UI Design',
    'Design de interfaces e experiências digitais, com atenção à clareza, à usabilidade e às necessidades de quem usa o produto.',
    RiLayoutLine,
  ],
  [
    'Engenharia de Software',
    'Desenvolvimento de aplicações e soluções digitais, conectando as necessidades do produto à sua implementação.',
    RiCodeLine,
  ],
  [
    'Manutenção de Hospedagem',
    'Manutenção do ambiente de hospedagem para dar continuidade à operação de sites e aplicações.',
    RiServerLine,
  ],
  [
    'Design Systems',
    'Organização de componentes, padrões e diretrizes para manter a consistência entre design e desenvolvimento.',
    RiGridLine,
  ],
] as const
const questions = [
  [
    'Com quais áreas você trabalha?',
    'Meu foco está em UX/UI Design, Engenharia de Software, Manutenção de Hospedagem e Design Systems.',
  ],
  [
    'Você trabalha com criação de marcas?',
    'Não. Meu foco está em produtos e experiências digitais, sem serviços de criação de marcas.',
  ],
  [
    'Como podemos conversar sobre um projeto?',
    'Use o botão de contato para compartilhar sua ideia e o que você precisa.',
  ],
  [
    'Onde encontro seus trabalhos?',
    'Na página de Projetos e no meu portfólio no Behance: behance.net/ivanrpassos.',
  ],
]
export default function Pages({
  page,
}: {
  page: 'works' | 'services' | 'products'
}) {
  const titles = {
    works: 'Projetos',
    services: 'Serviços',
    products: 'Produtos',
  }
  return (
    <Layout>
      <main className={'artifact-main artifact-subpage artifact-' + page}>
        <section className="artifact-page-heading">
          <h1>{titles[page]}</h1>
          <p>
            {page === 'works'
              ? 'Uma seleção de projetos e empresas com quem trabalhei.'
              : page === 'services'
                ? 'Design e desenvolvimento para produtos digitais.'
                : 'Um espaço para minhas próximas criações.'}
          </p>
        </section>
        {page === 'works' && <WorkCards />}
        {page === 'products' && (
          <div className="artifact-product-grid">
            <ProductPlaceholder />
          </div>
        )}
        {page === 'services' && (
          <>
            <div className="artifact-services-grid">
              {services.map(([title, text, Icon]) => (
                <article className="artifact-service" key={title}>
                  <span className="artifact-service-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h2>{title}</h2>
                  <p>{text}</p>
                  <a className="artifact-button" href={contact}>
                    Vamos conversar <RiArrowRightUpLine aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
            <section className="artifact-faq">
              <h2>Perguntas e respostas</h2>
              <div className="artifact-faq-layout">
                <Accordion
                  type="single"
                  collapsible
                  className="artifact-questions"
                >
                  {questions.map(([q, a], i) => (
                    <AccordionItem
                      className="artifact-question"
                      key={q}
                      value={'question-' + i}
                    >
                      <AccordionTrigger>{q}</AccordionTrigger>
                      <AccordionContent>
                        <p>{a}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <aside className="artifact-chat">
                  <img
                    className="artifact-image artifact-portrait"
                    src={avatar}
                    alt="Ivan Passos"
                    width={208}
                    height={117}
                    loading="lazy"
                  />
                  <h3>
                    Tem uma pergunta?
                    <br />
                    <span>Vamos conversar!</span>
                  </h3>
                  <a className="artifact-button primary" href={contact}>
                    Entre em contato <RiArrowRightUpLine aria-hidden="true" />
                  </a>
                </aside>
              </div>
            </section>
            <section className="artifact-collaboration">
              <h2>Vamos construir seu próximo projeto?</h2>
              <p>
                Conte sobre sua ideia, o momento do seu produto e o que você
                precisa desenvolver.
              </p>
              <a className="artifact-button primary" href={contact}>
                Vamos conversar <RiArrowRightUpLine aria-hidden="true" />
              </a>
            </section>
          </>
        )}
      </main>
    </Layout>
  )
}
