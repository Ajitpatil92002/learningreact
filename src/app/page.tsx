import { protofolioData } from "@/data/protofolio";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="portfolio-card">
      <div className="hero-section">
        <nav className="nav">
          <h1>My Portfolio</h1>
          <div className="nav-links">
            <Link href="/"><span className="active">Home</span></Link>
            <Link href="/about"><span>About</span></Link>
            <Link href="/contact"><span>Contact</span></Link>
          </div>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hello, I'm {protofolioData.name}</h1>
            <p>{protofolioData.title}</p>
            <button className="download-btn">
              Download Resume
            </button>
          </div>
          <div className="profile-img-container">
            <img
              className="profile-img"
              src={protofolioData.img}
              alt={protofolioData.name}
            />
          </div>
        </div>
      </div>

      <div className="content-section">
        <section className="about-me">
          <h2 className="section-title">About Me</h2>
          <p>
            {protofolioData.aboutme}
          </p>
        </section>

        <section className="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            {
              protofolioData.skills.map((skill, index) => (
                <span key={index} className="skill-badge skill-html">{skill}</span>
              ))
            }
          </div>
        </section>

        <section className="contact">
          <h2 className="section-title">Contact</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>{protofolioData.contact.email}</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>{protofolioData.contact.phone}</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>{protofolioData.contact.address}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}