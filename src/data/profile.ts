import {
  LinkedinIcon,
  BehanceIcon,
  InstagramIcon,
  BriefcaseIcon,
  SparklesIcon,
  AiChatIcon,
  DeploymentIcon,
  GithubIcon,
  FigmaIcon,
  NotionIcon,
  Link01Icon,
} from '@/components/ui/icons'
type IconType = typeof Link01Icon
// Illustrative counts chosen for the layout, pending real profile counts.
export const socials = [
  {
    name: 'LinkedIn',
    count: '1,2K',
    href: 'https://linkedin.com/in/ivanrpassos',
    icon: LinkedinIcon,
  },
  {
    name: 'Behance',
    count: '1,6K',
    href: 'https://www.behance.net/ivanrpassos',
    icon: BehanceIcon,
  },
  {
    name: 'Instagram',
    count: '1,8K',
    href: 'https://instagram.com/ivanrpassos',
    icon: InstagramIcon,
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
    icon: BriefcaseIcon,
  },
  {
    name: 'Contra',
    category: 'Trabalho e projetos',
    href: 'https://contra.com/',
    icon: SparklesIcon,
  },
  {
    name: 'ChatGPT',
    category: 'Inteligência artificial',
    href: 'https://chatgpt.com/',
    icon: AiChatIcon,
  },
  {
    name: 'Vercel',
    category: 'Publicação de sites',
    href: 'https://vercel.com/',
    icon: DeploymentIcon,
  },
  {
    name: 'GitHub',
    category: 'Projetos',
    href: 'https://github.com/',
    icon: GithubIcon,
  },
  {
    name: 'Figma',
    category: 'Design',
    href: 'https://www.figma.com/',
    icon: FigmaIcon,
  },
  {
    name: 'Notion',
    category: 'Organização',
    href: 'https://www.notion.so/',
    icon: NotionIcon,
  },
]
