// shadcn/ui composition adapted to the site's CSS tokens and Remix icons.
import * as Primitive from '@radix-ui/react-accordion'
import type { ComponentProps } from 'react'
import { RiArrowDownSLine } from '@remixicon/react'
export const Accordion = Primitive.Root
export const AccordionItem = Primitive.Item
export function AccordionTrigger({
  children,
  ...props
}: ComponentProps<typeof Primitive.Trigger>) {
  return (
    <Primitive.Header>
      <Primitive.Trigger {...props}>
        {children}
        <RiArrowDownSLine className="accordion-chevron" aria-hidden="true" />
      </Primitive.Trigger>
    </Primitive.Header>
  )
}
export function AccordionContent({
  children,
  ...props
}: ComponentProps<typeof Primitive.Content>) {
  return (
    <Primitive.Content className="accordion-content" {...props}>
      <div>{children}</div>
    </Primitive.Content>
  )
}
