import React, { useState, useEffect } from 'react'

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className={`scroll-to-top-btn ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to Top"
    >
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
}

export default ScrollToTopButton
