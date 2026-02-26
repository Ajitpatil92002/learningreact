import Link from 'next/link';

export default function Contact() {
  return (
    <div className="portfolio-card">
      <div className="hero-section" style={{ paddingBottom: '40px' }}>
        <nav className="nav" style={{ marginBottom: '20px' }}>
          <h1>My Portfolio</h1>
          <div className="nav-links">
            <Link href="/"><span>Home</span></Link>
            <Link href="/about"><span>About</span></Link>
            <Link href="/contact"><span className="active">Contact</span></Link>
          </div>
        </nav>
      </div>

      <div className="content-section">
        <section className="contact">
          <h2 className="section-title">Contact Information</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>john@example.com</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>+123 456 7890</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Anytown, USA</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              <span>Anytown, USA</span>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  )
}
