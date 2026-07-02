import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Media from './pages/Media'
import Contact from './pages/Contact'
import ScrollToTopButton from './components/ScrollToTopButton'

// ScrollToTop component ensures page scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme === 'dark' || (savedTheme === null && prefersDark);
  });
  
  const [loading, setLoading] = useState(true);

  // Transition States for Curtain Slide Page Changes
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState(''); // 'covering', 'revealing', or ''
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sync theme to body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Triggers staggered columns page transition on route change
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsTransitioning(true);
      setTransitionStage('covering');
      document.body.classList.add('transitioning');

      // 1. Wait for grid columns to cover the viewport fully (450ms covers active delay stagger)
      const coverTimeout = setTimeout(() => {
        // Update the route component contents underneath the cover
        setDisplayLocation(location);
        // Change transition stage to slide up out of viewport
        setTransitionStage('revealing');

        // 2. Wait for columns to clear off-screen (500ms)
        const revealTimeout = setTimeout(() => {
          setIsTransitioning(false);
          setTransitionStage('');
          document.body.classList.remove('transitioning');
        }, 500);

        return () => clearTimeout(revealTimeout);
      }, 450);

      return () => clearTimeout(coverTimeout);
    }
  }, [location, displayLocation]);

  const handleLoaderFinished = () => {
    setLoading(false);
    document.body.classList.remove('loading');
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <>
      {loading && <Loader onFinished={handleLoaderFinished} />}
      
      {/* Dynamic Page Transition Staggered Columns curtain */}
      {isTransitioning && (
        <div className={`transition-curtain ${transitionStage}`}>
          <div className="transition-column"></div>
          <div className="transition-column"></div>
          <div className="transition-column"></div>
          <div className="transition-column"></div>
        </div>
      )}

      <div className={`app-container ${loading ? 'app-loading' : 'app-loaded'}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <ScrollToTop />
        <main>
          <Routes location={displayLocation}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <ScrollToTopButton />
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
