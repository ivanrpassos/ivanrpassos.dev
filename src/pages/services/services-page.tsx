import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import {
  Layout01Icon,
  CodeIcon,
  ServerIcon,
  GridIcon,
  ArrowUpRightIcon,
} from '@/components/ui/icons'
import { Layout } from '@/components/layout/site-layout'

import { contact } from '@/data/works'
import '@/styles/pages.css'
import avatar from '@/assets/avatar.jpg'
const services = [
  [
    'UX/UI Design',
    'Organizo jornadas e desenho interfaces para que cada pessoa entenda onde está, o que pode fazer e qual é o próximo passo.',
    Layout01Icon,
  ],
  [
    'Engenharia de Software',
    'Transformo interfaces e regras de negócio em aplicações, com atenção ao funcionamento do produto e à evolução do código.',
    CodeIcon,
  ],
  [
    'Manutenção de Hospedagem',
    'Cuido da manutenção do ambiente que mantém seu site ou aplicação no ar, de acordo com as necessidades do projeto.',
    ServerIcon,
  ],
  [
    'Design Systems',
    'Estruturo componentes e padrões compartilhados para dar consistência às telas e aproximar o trabalho de design e desenvolvimento.',
    GridIcon,
  ],
] as const
const questions = [
  [
    'Como você pode ajudar meu projeto?',
    'Posso ajudar no desenho da experiência, no desenvolvimento da aplicação, na organização de um design system ou na manutenção da hospedagem. O ponto de partida é entender o momento do seu produto.',
  ],
  [
    'Você trabalha com criação de marcas?',
    'Não ofereço criação de marcas. Minha atuação é no design e no desenvolvimento de produtos digitais.',
  ],
  [
    'O que preciso enviar para começar?',
    'Conte o que você quer construir ou melhorar, para quem é o produto e o que já existe. Se tiver referências ou um prazo em mente, inclua também. Use o botão de contato para enviar essas informações.',
  ],
  [
    'Onde encontro seus trabalhos?',
    'Você encontra uma seleção na página Projetos e outros trabalhos no meu Behance, disponível nos links do site.',
  ],
]
export default function ServicesPage() {
  return (
    <Layout>
      <main className="artifact-main artifact-subpage artifact-services">
        <section className="artifact-page-heading">
          <h1>Serviços</h1>
          <p>
            Da experiência à implementação, cuidado em cada etapa do produto.
          </p>
        </section>
        <div className="artifact-services-grid">
          {services.map(([title, text, Icon]) => (
            <article className="artifact-service" key={title}>
              <span className="artifact-service-icon">
                <Icon aria-hidden="true" />
              </span>
              <h2>{title}</h2>
              <p>{text}</p>
              <a className="artifact-button" href={contact}>
                Vamos conversar <ArrowUpRightIcon aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        <section className="artifact-faq">
          <h2>Antes de começarmos</h2>
          <div className="artifact-faq-layout">
            <Accordion type="single" collapsible className="artifact-questions">
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
                Ficou com uma dúvida?
                <br />
                <span>Pode me contar.</span>
              </h3>
              <a className="artifact-button primary" href={contact}>
                Entre em contato <ArrowUpRightIcon aria-hidden="true" />
              </a>
            </aside>
          </div>
        </section>
        <section className="artifact-collaboration">
          <h2>O que você quer construir?</h2>
          <p>
            Uma ideia nova ou um produto que precisa evoluir. Conte o momento do
            seu projeto para conversarmos sobre o próximo passo.
          </p>
          <a className="artifact-button primary" href={contact}>
            Conte seu projeto <ArrowUpRightIcon aria-hidden="true" />
          </a>
        </section>
      </main>
    </Layout>
  )
}
