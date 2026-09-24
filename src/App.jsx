import { useEffect, useState } from 'react'
import './App.css'

const projects = [
  {
    name: 'Aurora Finance',
    description: 'A calmer way to understand your money.',
    year: '2024',
    category: 'Brand / Web',
    visual: 'aurora',
  },
  {
    name: 'Field Notes',
    description: 'Tools for a more intentional creative practice.',
    year: '2023',
    category: 'Product / UI',
    visual: 'field',
  },
  {
    name: 'Signal Studio',
    description: 'A visual identity for the next wave.',
    year: '2023',
    category: 'Identity / 3D',
    visual: 'signal',
  },
]

function ProjectVisual({ project }) {
  if (project.visual === 'aurora') {
    return (
      <div className="project-image image-aurora">
        <span className="image-tag">{project.category}</span>
        <div className="aurora-shape" />
        <strong>
          aurora<span>™</span>
        </strong>
      </div>
    )
  }

  if (project.visual === 'field') {
    return (
      <div className="project-image image-field">
        <span className="image-tag">{project.category}</span>
        <div className="field-window">
          <span>field notes</span>
          <b>→</b>
        </div>
      </div>
    )
  }

  return (
    <div className="project-image image-signal">
      <span className="image-tag">{project.category}</span>
      <div className="signal-cube">S</div>
      <div className="signal-lines" />
    </div>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handlePointerMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <div
        className="cursor-glow"
        aria-hidden="true"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      />

      <header className="site-header">
        <a className="logo" href="#top" aria-label="Back to top" onClick={closeMenu}>
          AM<span>.</span>
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
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a className="header-cta" href="#contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              Available for select projects
            </p>
            <h1>
              Designing bold ideas into <em>digital reality.</em>
            </h1>
            <p className="hero-intro">
              I&apos;m Alex Morgan, a creative developer crafting expressive websites and
              products where strategy, motion, and technology meet.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <span>↓</span>
              </a>
              <a className="text-link" href="mailto:hello@example.com">
                hello@example.com <span>↗</span>
              </a>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract 3D visual" role="img">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="orb">
              <div className="orb-shine" />
            </div>
            <span className="art-label label-top">01 / 03</span>
            <span className="art-label label-bottom">Scroll to explore ↓</span>
          </div>
        </section>

        <section id="work" className="work section-shell">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>A few things I&apos;ve made.</h2>
            <p>Digital experiences built with curiosity, clarity, and a little bit of magic.</p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card${index === 0 ? ' project-card-wide' : ''}`}
                key={project.name}
              >
                <ProjectVisual project={project} />
                <div className="project-meta">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <span className="project-year">{project.year}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about section-shell">
          <div className="section-heading">
            <p className="eyebrow">A little about me</p>
            <h2>Building with intention.</h2>
          </div>
          <div className="about-content">
            <p className="about-lead">
              Good work lives at the intersection of <span>empathy</span>, experimentation,
              and execution.
            </p>
            <div className="about-details">
              <p>
                I partner with ambitious people and teams to turn complex problems into
                simple, memorable experiences. From early sketches to the final line of code,
                I care about the details that make products feel human.
              </p>
              <p>
                When I&apos;m not designing or coding, you&apos;ll find me collecting old
                magazines, making coffee, or exploring a new city on foot.
              </p>
            </div>
          </div>
          <div className="tool-list" aria-label="Skills and tools">
            <span>Art direction</span>
            <span>UI/UX design</span>
            <span>Frontend development</span>
            <span>Creative coding</span>
            <span>Motion design</span>
          </div>
        </section>

        <section id="contact" className="contact section-shell">
          <div>
            <p className="eyebrow">Have a good one?</p>
            <h2>
              Let&apos;s make something
              <br />
              <em>great together.</em>
            </h2>
          </div>
          <a className="contact-link" href="mailto:hello@example.com">
            hello@example.com <span>↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <p>© {new Date().getFullYear()} Alex Morgan. Made with intent.</p>
        <div>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </footer>
    </>
  )
}

export default App
