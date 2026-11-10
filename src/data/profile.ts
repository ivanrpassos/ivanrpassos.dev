import {
  RiLinkedinFill,
  RiBehanceFill,
  RiInstagramLine,
  RiBriefcaseLine,
  RiSparklingFill,
  RiOpenaiFill,
  RiVercelFill,
  RiGithubFill,
  RiFigmaFill,
  RiNotionFill,
  RiLink,
} from '@remixicon/react'
type IconType = typeof RiLink
// Illustrative counts chosen for the layout, pending real profile counts.
export const socials = [
  {
    name: 'LinkedIn',
    count: '1,2K',
    href: 'https://linkedin.com/in/ivanrpassos',
    icon: RiLinkedinFill,
  },
  {
    name: 'Behance',
    count: '1,6K',
    href: 'https://www.behance.net/ivanrpassos',
    icon: RiBehanceFill,
  },
  {
    name: 'Instagram',
    count: '1,8K',
    href: 'https://instagram.com/ivanrpassos',
    icon: RiInstagramLine,
  },
]
// Add only work platforms confirmed by the profile owner.
export const software: {
  name: string
  category: string
  href: string
  icon: IconType
}[] = [
  {
    name: 'Runey',
    category: 'Gestão de negócios',
    href: 'https://runey.app/',
    icon: RiBriefcaseLine,
  },
  {
    name: 'Contra',
    category: 'Trabalho e projetos',
    href: 'https://contra.com/',
    icon: RiSparklingFill,
  },
  {
    name: 'ChatGPT',
    category: 'Inteligência artificial',
    href: 'https://chatgpt.com/',
    icon: RiOpenaiFill,
  },
  {
    name: 'Vercel',
    category: 'Publicação de sites',
    href: 'https://vercel.com/',
    icon: RiVercelFill,
  },
  {
    name: 'GitHub',
    category: 'Projetos',
    href: 'https://github.com/',
    icon: RiGithubFill,
  },
  {
    name: 'Figma',
    category: 'Design',
    href: 'https://www.figma.com/',
    icon: RiFigmaFill,
  },
  {
    name: 'Notion',
    category: 'Organização',
    href: 'https://www.notion.so/',
    icon: RiNotionFill,
  },
]
