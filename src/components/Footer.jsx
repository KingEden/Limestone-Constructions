import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            <img src="/Limestone_logo.png" alt="Limestone Constructions" style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
          </div>
          <p className="footer-desc">Islamabad's trusted architecture and construction company. Delivering precision-crafted residential and commercial spaces since 2009.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/LimestoneConstructions/" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/limestoneconstructions" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/limestone-constructions/about/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Residential Design</Link></li>
            <li><Link to="/services">Commercial Architecture</Link></li>
            <li><Link to="/services">Construction</Link></li>
            <li><Link to="/services">Interior Design</Link></li>
            <li><Link to="/services">Project Management</Link></li>
            <li><Link to="/services">Real Estate Marketing</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Our Projects</Link></li>
            <li><Link to="/about#team">Our Team</Link></li>
            <li><Link to="/media">Blog</Link></li>
            <li><Link to="/contact">Careers</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <div className="contact-row">
            <span className="ci">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </span>
            <span>Office 103, 1st Floor, Islamabad Arcade 1, B1 Commercial, B-17, Islamabad, 44000</span>
          </div>
          <div className="contact-row" style={{ alignItems: 'flex-start' }}>
            <span className="ci" style={{ marginTop: '3px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.27-.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.07V16.92z"/>
              </svg>
            </span>
            <span>
              <a href="tel:+92515444562" style={{ color: 'inherit', textDecoration: 'none' }}>+92-51-5444562</a><br />
              <a href="tel:+923338206263" style={{ color: 'inherit', textDecoration: 'none' }}>+92 333 8206263</a><br />
              <a href="tel:+923008206263" style={{ color: 'inherit', textDecoration: 'none' }}>+92 300 8206263</a>
            </span>
          </div>
          <div className="contact-row">
            <span className="ci">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </span>
            <span><a href="mailto:info@limestoneconstructions.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@limestoneconstructions.com</a></span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '10px', letterSpacing: '1px' }}>© 2025 Limestone Constructions. All rights reserved.</span>
        <div className="footer-btm-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
