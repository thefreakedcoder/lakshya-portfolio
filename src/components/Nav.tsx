import { useEffect, useState } from 'react'
import { useTheme } from '../themeContext'
import { profile } from '../data/profile'

const links = [
  ['work', 'Work'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
]

export default function Nav() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`nav${scrolled || open ? ' scrolled' : ''}`}>
      <div className="container nav-bar">
        <a href="#top" className="wordmark">{profile.name}</a>
        <nav className="nav-links" aria-label="Primary">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
        <div className="nav-tools">
          <button type="button" className="textbtn" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button
            type="button"
            className="textbtn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="sheet"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {open && (
        <nav id="sheet" className="sheet" aria-label="Menu">
          <div className="container">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
