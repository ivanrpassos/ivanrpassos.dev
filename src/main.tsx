import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { PageMotion } from './components/page-motion'
import './index.css'
import { Route } from './route'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense
      fallback={
        <p role="status" className="page-loading">
          Carregando…
        </p>
      }
    >
      <Route />
      <PageMotion />
    </Suspense>
  </StrictMode>,
)
