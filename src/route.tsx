import { lazy } from 'react'

const Links = lazy(() => import('./App'))
const Home = lazy(() => import('./Home'))
const Pages = lazy(() => import('./Pages'))
const WorkDetail = lazy(() => import('./WorkDetail'))

const path = window.location.pathname.replace(/\/$/, '')
const page =
  path === '/works'
    ? 'works'
    : path === '/services'
      ? 'services'
      : path === '/products'
        ? 'products'
        : null

export function Route() {
  if (path === '/links') return <Links />
  if (page) return <Pages page={page} />
  if (path.startsWith('/works/')) return <WorkDetail slug={path.slice(7)} />
  return <Home />
}
