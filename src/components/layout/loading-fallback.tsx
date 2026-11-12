import { useEffect, useState } from 'react'
import { PageSkeleton } from '@/components/layout/page-skeleton'

// Avoid flashing a skeleton for pages that are already cached or load quickly.
export function LoadingFallback() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 200)
    return () => window.clearTimeout(timer)
  }, [])
  return visible ? <PageSkeleton /> : null
}
