import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/tailwind.css'
import '@/styles/globals.css'
import { Route } from '@/app/routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Route />
  </StrictMode>,
)
