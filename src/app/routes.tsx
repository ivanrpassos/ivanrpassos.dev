import { lazy } from 'react'

const MINIMUM_SKELETON_MS = 1000

async function withMinimumLoadingTime<T>(loading: Promise<T>): Promise<T> {
  const [module] = await Promise.all([
    loading,
    new Promise<void>((resolve) => setTimeout(resolve, MINIMUM_SKELETON_MS)),
  ])
  return module
}

const Links = lazy(() =>
  withMinimumLoadingTime(import('@/pages/links/links-page')),
)
const Home = lazy(() =>
  withMinimumLoadingTime(import('@/pages/home/home-page')),
)
const Services = lazy(() =>
  withMinimumLoadingTime(import('@/pages/services/services-page')),
)
const Works = lazy(() =>
  withMinimumLoadingTime(import('@/pages/works/works-page')),
)
const Products = lazy(() =>
  withMinimumLoadingTime(import('@/pages/products/products-page')),
)
const WorkDetail = lazy(() =>
  withMinimumLoadingTime(import('@/pages/works/work-detail-page')),
)
const Loops = lazy(() =>
  withMinimumLoadingTime(import('@/pages/loops/loops-page')),
)

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
