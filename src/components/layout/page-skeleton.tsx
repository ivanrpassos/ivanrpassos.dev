import { Skeleton } from '@/components/ui/skeleton'

function TextSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  )
}

export function PageSkeleton() {
  const path = window.location.pathname.replace(/\/$/, '')
  const links = path === '/links'
  const home = path === ''
  const archive = path === '/loops' || path === '/drops' || path === '/blog'
  const article = path.startsWith('/loops/') || path.startsWith('/drops/')

  return (
    <div
      role="status"
      aria-label="Carregando conteúdo"
      className="min-h-screen bg-white dark:bg-neutral-950"
    >
      <span className="sr-only">Carregando conteúdo…</span>
      <div aria-hidden="true">
        {!links && (
          <div className="border-0 border-b border-solid border-(--border)">
            <div className="mx-auto flex h-16 max-w-[800px] items-center gap-6 max-[850px]:mx-6">
              <Skeleton className="size-8 rounded-full" />
              <Skeleton className="h-4 w-14" />
              <Skeleton className="h-4 w-14" />
              <Skeleton className="h-4 w-14" />
              <Skeleton className="ml-auto h-8 w-20" />
            </div>
          </div>
        )}
        <div
          className={`mx-auto flex flex-col gap-12 px-6 py-16 min-[851px]:px-0 min-[851px]:py-24 ${links ? 'max-w-[480px]' : 'max-w-[800px]'}`}
        >
          {links ? (
            <>
              <Skeleton className="mx-auto size-12 rounded-full" />
              <Skeleton className="mx-auto h-7 w-40" />
              {[0, 1, 2, 3].map((item) => (
                <Skeleton key={item} className="h-24 w-full rounded-xl" />
              ))}
            </>
          ) : home ? (
            <>
              <Skeleton className="aspect-video w-full rounded-xl" />
              <div className="grid gap-8 min-[601px]:grid-cols-2">
                <Skeleton className="h-16 w-4/5" />
                <TextSkeleton />
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-4">
                <Skeleton className="h-10 w-3/5 max-w-96" />
                <Skeleton className="h-5 w-4/5 max-w-lg" />
              </div>
              {archive ? (
                <div className="flex flex-col gap-6">
                  {[0, 1, 2].map((item) => (
                    <Skeleton key={item} className="h-9 w-full" />
                  ))}
                </div>
              ) : article ? (
                <div className="flex max-w-[640px] flex-col gap-8">
                  <TextSkeleton />
                  <TextSkeleton />
                  <TextSkeleton />
                </div>
              ) : (
                <div className="grid gap-6 min-[601px]:grid-cols-2">
                  {[0, 1, 2, 3].map((item) => (
                    <div key={item} className="flex flex-col gap-4">
                      <Skeleton className="aspect-[1.5] w-full rounded-xl" />
                      <Skeleton className="h-5 w-2/3" />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
