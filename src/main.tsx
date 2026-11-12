import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { PageMotion } from '@/components/motion/page-motion'
import '@/styles/tailwind.css'
import '@/styles/globals.css'
import { Route } from '@/app/routes'
import { LoadingFallback } from '@/components/layout/loading-fallback'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <Route />
      <PageMotion />
    </Suspense>
  </StrictMode>,
)
