import {
  lazy,
  Suspense,
  useEffect,
  useLayoutEffect,
  useState,
  startTransition,
} from 'react'
import { PageMotion } from '@/components/motion/page-motion'

const Links = lazy(() => import('@/pages/links/links-page'))
const Home = lazy(() => import('@/pages/home/home-page'))
const Services = lazy(() => import('@/pages/services/services-page'))
const Works = lazy(() => import('@/pages/works/works-page'))
const Products = lazy(() => import('@/pages/products/products-page'))
const WorkDetail = lazy(() => import('@/pages/works/work-detail-page'))
const Loops = lazy(() => import('@/pages/loops/loops-page'))

export function Route() {
  const [location, setLocation] = useState(
    () => window.location.pathname + window.location.search,
  )
  useEffect(() => {
    const update = () =>
      startTransition(() =>
        setLocation(window.location.pathname + window.location.search),
      )
    const navigate = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return
      const anchor =
        event.target instanceof Element ? event.target.closest('a[href]') : null
      if (
        !(anchor instanceof HTMLAnchorElement) ||
        anchor.hasAttribute('download') ||
        (anchor.target && anchor.target !== '_self')
      )
        return
      const url = new URL(anchor.href)
      if (url.origin !== window.location.origin || url.hash) return
      if (
        !/^\/(?:$|works(?:\/[^/]+)?\/?$|services\/?$|products\/?$|links\/?$|(?:loops|drops)(?:\/[^/]+)?\/?$|blog\/?$)/.test(
          url.pathname,
        )
      )
        return
      event.preventDefault()
      if (
        url.pathname + url.search ===
        window.location.pathname + window.location.search
      )
        return
      window.history.pushState(null, '', url)
      update()
    }
    document.addEventListener('click', navigate)
    window.addEventListener('popstate', update)
    return () => {
      document.removeEventListener('click', navigate)
      window.removeEventListener('popstate', update)
    }
  }, [])
  return (
    <Suspense fallback={null}>
      <Page key={location} path={location.split('?')[0].replace(/\/$/, '')} />
      <PageMotion key={'motion-' + location} />
    </Suspense>
  )
}

function Page({ path }: { path: string }) {
  useLayoutEffect(() => {
    const titles: Record<string, string> = {
      '/works': 'Projetos',
      '/services': 'Serviços',
      '/products': 'Produtos',
      '/links': 'Links',
    }
    document.title = titles[path]
      ? titles[path] + ' · Ivan Passos'
      : 'Ivan Passos — Design e Engenharia de Software'
  }, [path])
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
