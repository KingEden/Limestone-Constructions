import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

function Navbar({ darkMode, toggleDarkMode }) {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuActive(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (menuActive) {
      document.body.classList.add('loading');
    } else {
      document.body.classList.remove('loading');
    }
    return () => {
      document.body.classList.remove('loading');
    };
  }, [menuActive]);

  const handleToggle = () => {
    setMenuActive(prev => !prev);
  };

  const handleClose = () => {
    setMenuActive(false);
  };

  return (
    <nav id="main-nav" className={menuActive ? 'active' : ''}>
      <div className="nav-logo">
        <Link to="/" onClick={handleClose}>
          <img src="/Limestone_logo.png" alt="Limestone Constructions" />
        </Link>
      </div>
      
      <div className="nav-actions">
        {/* Mobile Theme Toggle Switcher */}
        <button 
          className="theme-toggle mobile-theme-toggle" 
          id="theme-toggle-mobile" 
          aria-label="Toggle Theme"
          onClick={toggleDarkMode}
        >
          <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <svg className="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
        
        {/* Hamburger Mobile Nav Toggle */}
        <button 
          className={`mobile-nav-toggle ${menuActive ? 'active' : ''}`} 
          id="mobile-nav-toggle" 
          aria-label="Toggle Navigation"
          onClick={handleToggle}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>

      {/* Navigation Links List */}
      <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/media" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>
            Media
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-cta" onClick={handleClose}>
            Get A Quote
          </NavLink>
        </li>
        
        {/* Desktop Theme Toggle Switcher */}
        <li className="theme-toggle-li">
          <button 
            className="theme-toggle" 
            id="theme-toggle" 
            aria-label="Toggle Theme"
            onClick={toggleDarkMode}
          >
            <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
            <svg className="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>
        </li>
        
        {/* Extra contact info details for Mobile Menu drawer */}
        {menuActive && (
          <div className="mobile-menu-extra">
            <div className="menu-divider"></div>
            <p className="menu-contact-title">Get in Touch</p>
            <a href="tel:+923338206263" className="menu-contact-link">+92 333 8206263</a>
            <a href="tel:+923008206263" className="menu-contact-link">+92 300 8206263</a>
            <a href="mailto:info@limestoneconstructions.com" className="menu-contact-link">info@limestoneconstructions.com</a>
            <div className="menu-socials">
              <a href="https://www.facebook.com/LimestoneConstructions/" target="_blank" rel="noopener noreferrer" className="menu-social-icon" title="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/limestoneconstructions" target="_blank" rel="noopener noreferrer" className="menu-social-icon" title="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/limestone-constructions/about/" target="_blank" rel="noopener noreferrer" className="menu-social-icon" title="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
