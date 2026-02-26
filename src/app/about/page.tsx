import Link from 'next/link';

export default function About() {
  return (
    <div className="portfolio-card">
      <div className="hero-section" style={{ paddingBottom: '40px' }}>
        <nav className="nav" style={{ marginBottom: '20px' }}>
          <h1>My Portfolio</h1>
          <div className="nav-links">
            <Link href="/"><span>Home</span></Link>
            <Link href="/about"><span className="active">About</span></Link>
            <Link href="/contact"><span>Contact</span></Link>
          </div>
        </nav>
      </div>

      <div className="content-section">
        <section className="about-me">
          <h2 className="section-title">About Me</h2>
          <p>
            I am an aspiring web developer eager <strong>to learn and apply</strong> the field of development. I have a passion for creating user-friendly and responsive websites.
          </p>
        </section>

        <section className="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <span className="skill-badge skill-html">HTML</span>
            <span className="skill-badge skill-css">CSS</span>
            <span className="skill-badge skill-js">JavaScript</span>
          </div>
        </section>
      </div>
    </div>
  )
}
