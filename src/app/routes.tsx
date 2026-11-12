import { lazy } from 'react'

const Links = lazy(() => import('@/pages/links/links-page'))
const Home = lazy(() => import('@/pages/home/home-page'))
const Services = lazy(() => import('@/pages/services/services-page'))
const Works = lazy(() => import('@/pages/works/works-page'))
const Products = lazy(() => import('@/pages/products/products-page'))
const WorkDetail = lazy(() => import('@/pages/works/work-detail-page'))
const Loops = lazy(() => import('@/pages/loops/loops-page'))

const path = window.location.pathname.replace(/\/$/, '')

export function Route() {
  if (path === '/loops' || path === '/drops' || path === '/blog')
    return <Loops />
  if (path.startsWith('/drops/')) return <Loops slug={path.slice(7)} />
  if (path.startsWith('/loops/')) return <Loops slug={path.slice(7)} />
  if (path === '/links') return <Links />
  if (path === '/works') return <Works />
  if (path === '/services') return <Services />
  if (path === '/products') return <Products />
  if (path.startsWith('/works/')) return <WorkDetail slug={path.slice(7)} />
  return <Home />
}
