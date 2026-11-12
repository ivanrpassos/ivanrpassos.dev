import { useEffect, useRef, useState } from 'react'
import { Mail01Icon, MoreVerticalIcon, Link01Icon } from '@/components/ui/icons'
import '@/components/layout/header-menu.css'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

export function HeaderMenu() {
  const [open, setOpen] = useState(false)
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
            <MoreVerticalIcon aria-hidden="true" />
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
            <a href="/loops">
              Loops <Mail01Icon aria-hidden="true" />
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/links">
              Links <Link01Icon aria-hidden="true" />
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
