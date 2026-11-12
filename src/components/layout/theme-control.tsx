import '@/components/layout/theme-control.css'
import { useEffect, useState } from 'react'
import { ComputerIcon, MoonIcon, Sun01Icon } from '@/components/ui/icons'
type Theme = 'system' | 'light' | 'dark'
const themes = [
  { value: 'system', label: 'Tema do dispositivo', icon: ComputerIcon },
  { value: 'light', label: 'Tema claro', icon: Sun01Icon },
  { value: 'dark', label: 'Tema escuro', icon: MoonIcon },
] as const

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('theme')
      return saved === 'light' || saved === 'dark' ? saved : 'system'
    } catch {
      return 'system'
    }
  })
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const apply = () => {
      const resolved =
        theme === 'system' ? (media.matches ? 'dark' : 'light') : theme
      document.documentElement.dataset.theme = resolved
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', resolved === 'dark' ? '#0a0a0a' : '#f5f5f5')
    }
    apply()
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* Theme remains usable without storage. */
    }
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [theme])
  return { theme, setTheme }
}

export function ThemeControl() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="theme-control" role="group" aria-label="Escolher tema">
      {themes.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          aria-label={label}
          title={label}
          aria-pressed={theme === value}
          onClick={() => setTheme(value)}
        >
          <Icon />
        </button>
      ))}
    </div>
  )
}
