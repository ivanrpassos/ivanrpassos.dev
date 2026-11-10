// shadcn/ui composition adapted to the site's CSS tokens and Remix icons.
import * as Primitive from '@radix-ui/react-dropdown-menu'
import type { ComponentProps } from 'react'
export const DropdownMenu = Primitive.Root
export const DropdownMenuTrigger = Primitive.Trigger
export const DropdownMenuItem = Primitive.Item
export const DropdownMenuSeparator = Primitive.Separator
export function DropdownMenuContent({
  sideOffset = 4,
  ...props
}: ComponentProps<typeof Primitive.Content>) {
  // Keep the content within the themed subtree; Radix still handles positioning.
  return (
    <Primitive.Content
      sideOffset={sideOffset}
      collisionPadding={16}
      {...props}
    />
  )
}
