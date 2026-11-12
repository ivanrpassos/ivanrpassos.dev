import { Layout } from '@/components/layout/site-layout'
import { ProductCard } from '@/components/cards/product-card'
import '@/styles/pages.css'

export default function ProductsPage() {
  return (
    <Layout>
      <main className="artifact-main artifact-subpage artifact-products">
        <section className="artifact-page-heading">
          <h1>Produtos</h1>
          <p>Ferramentas que crio para facilitar o trabalho de quem cria.</p>
        </section>
        <div className="artifact-product-grid">
          <ProductCard />
        </div>
      </main>
    </Layout>
  )
}
