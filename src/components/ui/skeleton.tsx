import type { ComponentProps } from 'react'

// shadcn/ui Skeleton, adapted to the project's existing theme tokens.
// https://ui.shadcn.com/r/styles/new-york/skeleton.json
export function Skeleton({ className = '', ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={`animate-pulse rounded-md bg-(--border) motion-reduce:animate-none ${className}`}
      {...props}
    />
  )
}
