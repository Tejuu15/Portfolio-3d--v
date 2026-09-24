import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <a className="logo" href="#top" aria-label="Back to top" onClick={closeMenu}>
        KMT<span>.</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="site-nav"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span className="sr-only">Toggle navigation</span>
      </button>

      <nav
        id="site-nav"
        className={`site-nav${isMenuOpen ? ' open' : ''}`}
        aria-label="Main navigation"
      >
        <a href="#work" onClick={closeMenu}>Projects</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <a className="header-cta" href="#contact">
        Let&apos;s connect <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

export default Navbar
