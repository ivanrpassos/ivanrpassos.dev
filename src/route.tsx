import { lazy } from 'react'

const Links = lazy(() => import('./App'))
const Home = lazy(() => import('./Home'))
const Pages = lazy(() => import('./Pages'))
const WorkDetail = lazy(() => import('./WorkDetail'))
const Drops = lazy(() => import('./Drops'))

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
  if (path === '/drops' || path === '/blog') return <Drops />
  if (path.startsWith('/drops/')) return <Drops slug={path.slice(7)} />
  if (path === '/links') return <Links />
  if (page) return <Pages page={page} />
  if (path.startsWith('/works/')) return <WorkDetail slug={path.slice(7)} />
  return <Home />
}
