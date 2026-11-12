import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { PageMotion } from '@/components/motion/page-motion'
import '@/styles/tailwind.css'
import '@/styles/globals.css'
import { Route } from '@/app/routes'
import { PageSkeleton } from '@/components/layout/page-skeleton'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<PageSkeleton />}>
      <Route />
      <PageMotion />
    </Suspense>
  </StrictMode>,
)
