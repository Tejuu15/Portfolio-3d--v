import { useEffect, useState } from 'react'
import './App.css'

const projects = [
  {
    name: 'Movie Recommendation System',
    description: 'Personalized discovery powered by content-based, collaborative, and hybrid filtering.',
    year: '01',
    category: 'AI / Recommendation / 2025',
    visual: 'aurora',
  },
  {
    name: 'Smart Legal Research Assistant',
    description: 'Semantic search, judgment summarization, and case recommendations for commercial courts.',
    year: '02',
    category: 'NLP / Product / 2025',
    visual: 'field',
  },
  {
    name: 'Human-centered interfaces',
    description: 'Clear, innovative experiences that make complex technology feel approachable.',
    year: '03',
    category: 'UI / UX / Competition',
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
          Re<span>co</span>
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
      <div className="signal-cube">K</div>
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

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              AI/ML engineer in the making
            </p>
            <h1>
              Building intelligent solutions with <em>purpose.</em>
            </h1>
            <p className="hero-intro">
              I&apos;m <strong>K M Tejamurthy</strong>, an Artificial Intelligence and
              Machine Learning engineering student passionate about secure, scalable,
              and user-centric applications.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <span>↓</span>
              </a>
              <a className="text-link" href="mailto:tejamurthykm@gmail.com">
                tejamurthykm@gmail.com <span>↗</span>
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
            <span className="art-label label-bottom">Kalaburagi, Karnataka ↓</span>
          </div>
        </section>

        <section id="work" className="work section-shell">
          <div className="section-heading">
            <p className="eyebrow">Selected projects</p>
            <h2>Ideas turned into working systems.</h2>
            <p>Intelligent products that bring together research, engineering, and thoughtful user experiences.</p>
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
            <p className="eyebrow">Profile</p>
            <h2>Curious by nature. Focused by craft.</h2>
            <p>Always learning, always looking for a better way to solve meaningful problems.</p>
          </div>
          <div className="about-content">
            <p className="about-lead">
              Technology should be <span>intelligent</span>, secure, and human.
            </p>
            <div className="about-details">
              <p>
                Passionate and versatile technology enthusiast with strong interests in Web
                Application Development, AI &amp; ML, Cybersecurity, Data Visualization,
                and Full-Stack Development.
              </p>
              <p>
                I enjoy creating optimized, interactive solutions with a focus on security,
                real-time processing, backend systems, and engaging frontend experiences.
              </p>
            </div>
          </div>
          <div className="tool-list" aria-label="Technical skills">
            <span>Java</span><span>Python</span><span>JavaScript</span><span>React.js</span>
            <span>Django</span><span>REST API</span><span>TensorFlow</span><span>Scikit-learn</span>
            <span>MongoDB</span><span>PostgreSQL</span><span>MySQL</span><span>GitHub</span>
          </div>
        </section>

        <section id="experience" className="resume-section section-shell">
          <div className="section-heading">
            <p className="eyebrow">Experience &amp; education</p>
            <h2>The foundation behind the work.</h2>
            <p>Learning through classrooms, internships, competitions, and building real projects.</p>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-date">APR — MAY 2026</div>
              <div><h3>AIML Intern · Elevate Labs</h3><p>Worked on real-time AI/ML projects involving data preprocessing, model building, and evaluation. Used Python, TensorFlow, and Scikit-learn while collaborating with the AI/ML team on practical intelligent solutions.</p></div>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">2023 — 2027</div>
              <div><h3>B.E. Artificial Intelligence &amp; Machine Learning</h3><p>Shetty Institute of Technology, Kalaburagi · CGPA: 8.5</p><small>Coursework: Computer Networks, OOP, DBMS, AIML, Operating Systems, Data Visualization</small></div>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">2020 — 2022</div>
              <div><h3>Physics, Chemistry, Mathematics &amp; Biology</h3><p>Kalmath Independence PU College, Bengaluru · Percentage: 78%</p></div>
            </article>
          </div>
        </section>

        <section className="highlights section-shell">
          <div><p className="eyebrow">Recognition</p><h2>Always showing up to learn and contribute.</h2></div>
          <div className="highlight-grid">
            <div><b>1st Prize</b><p>UI/UX Competition at TeckX COMEDKares for innovative, user-centric interface design.</p></div>
            <div><b>Certifications</b><p>AIML — Honeywell · Cybersecurity — Honeywell · Cybersecurity — Cyseck</p></div>
            <div><b>Hackathons</b><p>International Space Apps Challenge · Make4Mysore · InnovateX at Presidency University</p></div>
          </div>
        </section>

        <section id="contact" className="contact section-shell">
          <div>
            <p className="eyebrow">Have a good one?</p>
            <h2>
              Let&apos;s build something
              <br />
              <em>meaningful together.</em>
            </h2>
          </div>
          <a className="contact-link" href="mailto:tejamurthykm@gmail.com">
            tejamurthykm@gmail.com <span>↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <p>© {new Date().getFullYear()} K M Tejamurthy. Made with intent.</p>
        <div>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </footer>
    </>
  )
}

export default App
