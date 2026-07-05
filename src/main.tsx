// React.js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Pages
import { Home } from './pages/Home'

// CSS
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
