import { useEffect, useRef, useState } from 'react'
import { RiMore2Fill, RiMoonLine, RiSunLine, RiLink } from '@remixicon/react'
import './header-menu.css'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from './ui/dropdown-menu'

export function HeaderMenu() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(
    () => document.documentElement.dataset.theme === 'dark',
  )
  const hover = useRef(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  )
  const cancelClose = () => clearTimeout(closeTimer.current)
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => {
      if (hover.current) setOpen(false)
    }, 160)
  }
  useEffect(() => () => clearTimeout(closeTimer.current), [])
  useEffect(() => {
    const sync = () =>
      setDark(document.documentElement.dataset.theme === 'dark')
    const observer = new MutationObserver(sync)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    const media = matchMedia('(prefers-color-scheme: dark)')
    const followSystem = () => {
      try {
        if (['light', 'dark'].includes(localStorage.getItem('theme') || ''))
          return
      } catch {
        /* Use device preference when storage is unavailable. */
      }
      document.documentElement.dataset.theme = media.matches ? 'dark' : 'light'
    }
    media.addEventListener('change', followSystem)
    return () => {
      observer.disconnect()
      media.removeEventListener('change', followSystem)
    }
  }, [])
  const toggleTheme = () => {
    const next =
      document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', next === 'dark' ? '#0a0a0a' : '#ffffff')
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* Keep switching available without storage. */
    }
    setDark(next === 'dark')
  }
  return (
    <div className="header-more">
      <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
        <DropdownMenuTrigger asChild>
          <button
            className="header-more-trigger"
            type="button"
            aria-label="Mais opções"
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') {
                cancelClose()
                hover.current = true
                setOpen(true)
              }
            }}
            onPointerLeave={scheduleClose}
            onPointerDown={(event) => {
              if (event.button === 0) {
                event.preventDefault()
                cancelClose()
                hover.current = false
                setOpen(true)
              }
            }}
            onKeyDown={() => {
              hover.current = false
              cancelClose()
            }}
          >
            <RiMore2Fill aria-hidden="true" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="header-more-panel"
          align="start"
          onPointerEnter={cancelClose}
          onPointerLeave={scheduleClose}
          onKeyDown={() => {
            hover.current = false
            cancelClose()
          }}

          onCloseAutoFocus={(event) => {
            if (hover.current) event.preventDefault()
          }}
        >
          <DropdownMenuItem asChild>
            <a href="/drops">
              Drops <RiLink aria-hidden="true" />
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/links">
              Links <RiLink aria-hidden="true" />
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="header-menu-separator" />
          <DropdownMenuItem
            onSelect={(event) => {
              event.preventDefault()
              toggleTheme()
            }}
            aria-label={
              dark ? 'Alternar para tema claro' : 'Alternar para tema escuro'
            }
          >
            Alternar tema{' '}
            {dark ? (
              <RiMoonLine aria-hidden="true" />
            ) : (
              <RiSunLine aria-hidden="true" />
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
