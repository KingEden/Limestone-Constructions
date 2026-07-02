import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import limestoneHomepage from '../project/Limestone Homepage.jpeg'

// B-17 Pine Business Square imports
import pineB17_1 from '../project/Pine Business Square/1.jpeg'
import pineB17_2 from '../project/Pine Business Square/2.jpeg'
import pineB17_3 from '../project/Pine Business Square/3.jpeg'
import pineB17_4 from '../project/Pine Business Square/4.jpeg'
import pineB17Pdf from '../project/Pine Business Square/Brochure Pine Business Square.pdf'

// Bahria Enclave imports
import bahria1 from '../project/Bahira Enclave/WhatsApp Image 2026-06-25 at 5.17.32 PM.jpeg'
import bahria2 from '../project/Bahira Enclave/2.jpeg'
import bahria3 from '../project/Bahira Enclave/3.jpeg'
import bahria4 from '../project/Bahira Enclave/4.jpeg'
import bahria5 from '../project/Bahira Enclave/5.jpeg'
import bahria6 from '../project/Bahira Enclave/6.jpeg'
import bahria7 from '../project/Bahira Enclave/7.jpeg'
import bahria8 from '../project/Bahira Enclave/8.jpeg'
import bahria9 from '../project/Bahira Enclave/9.jpeg'
import bahria10 from '../project/Bahira Enclave/10.jpeg'
import bahria11 from '../project/Bahira Enclave/11.jpeg'
import bahria12 from '../project/Bahira Enclave/12.jpeg'
import bahria13 from '../project/Bahira Enclave/13.jpeg'

// Shoukat Limestone Arcade imports
import shoukat1 from '../project/Shoukat limestone Arcade/1.jpg'
import shoukat2 from '../project/Shoukat limestone Arcade/2.jpg'
import shoukat3 from '../project/Shoukat limestone Arcade/3.jpg'
import shoukat4 from '../project/Shoukat limestone Arcade/4.jpg'

const projectsData = [
  {
    "id": 1,
    "category": "Commercial",
    "location": "Block B-1 Ext, B-17, Islamabad",
    "name": "Pine Business Square (B-17)",
    "meta": "Corporate Plaza & Retail located in Block B-1 Ext, B-17 Islamabad",
    "image": pineB17_4,
    "images": [pineB17_4, pineB17_1, pineB17_2, pineB17_3],
    "pdf": pineB17Pdf
  },
  {
    "id": 2,
    "category": "Residential",
    "location": "Bahria Enclave, Islamabad",
    "name": "5 Marla Luxury House",
    "meta": "Premium Modern Residence located in Bahria Enclave Islamabad",
    "image": bahria1,
    "images": [bahria1, bahria2, bahria3, bahria4, bahria5, bahria6, bahria7, bahria8, bahria9, bahria10, bahria11, bahria12, bahria13]
  },
  {
    "id": 3,
    "category": "Commercial",
    "location": "B-17, Islamabad",
    "name": "Shoukat Limestone Arcade",
    "meta": "Premium Limestone-Clad Corporate & Retail Plaza in B-17 Islamabad",
    "image": shoukat1,
    "images": [shoukat1, shoukat2, shoukat3, shoukat4]
  }
];

const statusTexts = {
  1: 'Phase 1: Conceptual Survey & Boundary Mapping',
  2: 'Phase 2: Architectural Layout Plan (Floor 1)',
  3: 'Phase 3: MEP Schematics & Engineering Approval',
  4: 'Phase 4: Foundation Grid & Tie-Beam Framing',
  5: 'Phase 5: Completed Structure Ready for Handover'
};

const testimonials = [
  {
    "quote": "Limestone Constructions brought our dream home to life with a level of craftsmanship and care we hadn't imagined possible. The attention to every detail was extraordinary.",
    "author": "Ahmed & Sara Malik",
    "role": "Homeowners, DHA Phase 2, Islamabad",
    "initials": "AS"
  },
  {
    "quote": "The level of transparency, project scheduling, and structural engineering expertise is unparalleled in Pakistan. Highly professional team.",
    "author": "Mian Kamran",
    "role": "CEO, TechHub Office Complex · Blue Area",
    "initials": "MK"
  },
  {
    "quote": "Building a luxury villa remotely from the UK was a breeze. Weekly drone progress reports and clear cost tracking made it stress-free.",
    "author": "Zainab & Bilal Chaudhry",
    "role": "Overseas Client, Sector E-11, Islamabad",
    "initials": "ZC"
  }
];

function Home() {
  const [activeStep, setActiveStep] = useState(1);
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const autoplayTimer = useRef(null);

  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (proj, index = 0) => {
    setActiveProject(proj);
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveProject(null);
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    if (!activeProject) return;
    const imgs = activeProject.images || [activeProject.image];
    setActiveImageIndex((prev) => (prev + 1) % imgs.length);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    if (!activeProject) return;
    const imgs = activeProject.images || [activeProject.image];
    setActiveImageIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  // Keyboard navigation hook for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeProject) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [slideIndex]);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer.current = setInterval(() => {
      setDirection('next');
      setSlideIndex(prev => (prev + 1) % testimonials.length);
    }, 7000);
  };

  const stopAutoplay = () => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }
  };

  const nextSlide = () => {
    setDirection('next');
    setSlideIndex(prev => (prev + 1) % testimonials.length);
    startAutoplay();
  };

  const prevSlide = () => {
    setDirection('prev');
    setSlideIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    startAutoplay();
  };

  return (
    <>
      {/* HERO */}
<section className="hero">
  <div className="hero-grid-lines"></div>
  <div className="hero-circle"></div>
  <div className="hero-circle-2"></div>

  <div className="hero-content">
    <div className="hero-eyebrow">
      <span className="eyebrow-badge-prefix">■</span>
      <span>Architecture & Construction · Est. 2009</span>
    </div>
    <h1 className="hero-title">
      Build<span className="line-gold">ing</span>
      <span className="line-thin">Dreams in</span>
      Stone
    </h1>
    <p className="hero-desc">
      Limestone Constructions brings precision-crafted residential and commercial spaces to life. From concept to completion — we build landmarks, not just structures.
    </p>
    <div className="hero-actions">
      <Link to="/projects" className="btn-primary">
        Explore Our Work
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
      <Link to="/projects" className="btn-ghost">View All Projects →</Link>
    </div>
  </div>



  <div className="hero-scroll">
    <div className="scroll-line"></div>
    <span className="scroll-text">Scroll to Explore</span>
  </div>
</section>

{/* MARQUEE */}
<div className="marquee-strip">
  <div className="marquee-inner">
    <span className="marquee-item">Residential Design</span><span className="marquee-dot">◆</span>
    <span className="marquee-item">Commercial Architecture</span><span className="marquee-dot">◆</span>
    <span className="marquee-item">Architectural Planning</span><span className="marquee-dot">◆</span>
    <span className="marquee-item">Interior Design</span><span className="marquee-dot">◆</span>
    <span className="marquee-item">Project Management</span><span className="marquee-dot">◆</span>
    <span className="marquee-item">Property Consultancy</span><span className="marquee-dot">◆</span>
    <span className="marquee-item">Residential Design</span><span className="marquee-dot">◆</span>
    <span className="marquee-item">Commercial Architecture</span><span className="marquee-dot">◆</span>
    <span className="marquee-item">Architectural Planning</span><span className="marquee-dot">◆</span>
    <span className="marquee-item">Interior Design</span><span className="marquee-dot">◆</span>
    <span className="marquee-item">Project Management</span><span className="marquee-dot">◆</span>
    <span className="marquee-item">Property Consultancy</span><span className="marquee-dot">◆</span>
  </div>
</div>

{/* ABOUT */}
<section className="about">
  <div>
    <div className="section-tag">
      <div className="tag-line"></div>
      <span>Who We Are</span>
    </div>
    <h2 className="section-title">
      Crafting Spaces
      <em>Where Vision Meets Reality</em>
    </h2>
    <p className="section-body">Limestone Constructions is a premier architecture and construction firm based in Islamabad. We blend innovative design with meticulous craftsmanship to deliver spaces that inspire, function, and endure.</p>
    <p className="section-body">From bespoke designer villas to landmark commercial developments, our team of expert architects and engineers brings your vision to life with uncompromising quality.</p>
    <div className="about-features">
      <div className="feature-item">
        <div className="feature-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
        <span className="feature-label">Residential Design</span>
      </div>
      <div className="feature-item">
        <div className="feature-icon"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="1"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg></div>
        <span className="feature-label">Commercial Projects</span>
      </div>
      <div className="feature-item">
        <div className="feature-icon"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
        <span className="feature-label">Premium Quality</span>
      </div>
      <div className="feature-item">
        <div className="feature-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
        <span className="feature-label">On-Time Delivery</span>
      </div>
    </div>
  </div>

  <div className="about-visual">
    <div className="about-img-frame" style={{
      backgroundImage: `url("${limestoneHomepage}")`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative'
    }}>
      <div className="about-frame-lines"></div>
    </div>
    <div className="about-badge">
      <span className="badge-num">15+</span>
      <span className="badge-text">Years of Excellence</span>
    </div>
  </div>
</section>

{/* SERVICES */}
<section className="services">
  <div className="services-header">
    <div>
      <div className="section-tag"><div className="tag-line"></div><span>What We Do</span></div>
      <h2 className="section-title" style={{marginBottom: '0'}}>Our <em style={{display: 'inline', fontWeight: '100'}}>Core</em> Services</h2>
    </div>
    <Link to="/services" className="btn-primary" style={{flexShrink: '0'}}>All Services</Link>
  </div>
  <div className="services-grid">
    <div className="service-card">
      <div className="svc-num">01</div>
      <div className="svc-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
      <h3 className="svc-title">Residential Design</h3>
      <p className="svc-desc">Custom homes and villas crafted to reflect your lifestyle — blending comfort, elegance, and modern functionality.</p>
      <Link to="/services" className="svc-link">Learn More →</Link>
    </div>
    <div className="service-card">
      <div className="svc-num">02</div>
      <div className="svc-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="1"/><path d="M8 21h8m-4-4v4"/></svg></div>
      <h3 className="svc-title">Commercial Architecture</h3>
      <p className="svc-desc">Corporate offices, retail spaces, and mixed-use developments designed for functionality and maximum ROI.</p>
      <Link to="/services" className="svc-link">Learn More →</Link>
    </div>
    <div className="service-card">
      <div className="svc-num">03</div>
      <div className="svc-icon"><svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg></div>
      <h3 className="svc-title">Construction</h3>
      <p className="svc-desc">End-to-end construction management with precision engineering, quality materials, and strict timelines.</p>
      <Link to="/services" className="svc-link">Learn More →</Link>
    </div>
    <div className="service-card">
      <div className="svc-num">04</div>
      <div className="svc-icon"><svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></svg></div>
      <h3 className="svc-title">Interior Design</h3>
      <p className="svc-desc">Curated interiors that transform spaces into experiences — from concept boards to final furnishings.</p>
      <Link to="/services" className="svc-link">Learn More →</Link>
    </div>
    <div className="service-card">
      <div className="svc-num">05</div>
      <div className="svc-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>
      <h3 className="svc-title">Project Management</h3>
      <p className="svc-desc">Comprehensive oversight from groundbreaking to handover — coordinating teams and timelines with precision.</p>
      <Link to="/services" className="svc-link">Learn More →</Link>
    </div>
    <div className="service-card">
      <div className="svc-num">06</div>
      <div className="svc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg></div>
      <h3 className="svc-title">Real Estate Marketing</h3>
      <p className="svc-desc">Advisory services on buying, selling, and trading across property sectors in Rawalpindi and Islamabad supported by market-leading research.</p>
      <Link to="/services" className="svc-link">Learn More →</Link>
    </div>
  </div>
</section>

{/* PROJECTS */}
<section className="projects">
  <div className="projects-header">
    <div>
      <div className="section-tag"><div className="tag-line"></div><span>Portfolio</span></div>
      <h2 className="section-title" style={{marginBottom: '0'}}>Featured <em style={{display: 'inline', fontWeight: '100'}}>Projects</em></h2>
    </div>
    <Link to="/projects" style={{fontFamily: '\'Josefin Sans\',sans-serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--earth-light)', textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: '3px'}}>View All →</Link>
  </div>
  <div className="projects-grid">
    <div className="project-card" style={{ cursor: 'pointer' }} onClick={() => openLightbox(projectsData[0])}>
      <div className="project-img" style={{ backgroundImage: `url(${projectsData[0].image})` }}>
        <div className="proj-overlay"></div>
        <div className="proj-info">
          <span className="proj-cat">{projectsData[0].category} · {projectsData[0].location}</span>
          <div className="proj-name">{projectsData[0].name}</div>
          <div className="proj-meta">{projectsData[0].meta}</div>
        </div>
      </div>
    </div>
    <div className="project-card" style={{ cursor: 'pointer' }} onClick={() => openLightbox(projectsData[1])}>
      <div className="project-img" style={{ backgroundImage: `url(${projectsData[1].image})` }}>
        <div className="proj-overlay"></div>
        <div className="proj-info">
          <span className="proj-cat">{projectsData[1].category} · {projectsData[1].location}</span>
          <div className="proj-name">{projectsData[1].name}</div>
          <div className="proj-meta">{projectsData[1].meta}</div>
        </div>
      </div>
    </div>
    
    <Link to="/projects" className="project-card view-all-card">
      <div className="view-all-card-content">
        <div className="view-all-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
        <span className="view-all-subtitle">Portfolio</span>
        <h3 className="view-all-title">View All Projects</h3>
      </div>
    </Link>
  </div>
</section>

{/* LIGHTBOX MODAL */}
{activeProject && (
  <div className={`project-lightbox ${activeProject ? 'active' : ''}`} onClick={closeLightbox}>
    <button className="lightbox-close-btn" onClick={closeLightbox}>&times;</button>
    
    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
      <div className="lightbox-viewer">
        {(activeProject.images || [activeProject.image]).length > 1 && (
          <button className="lightbox-nav-btn prev" onClick={prevImage}>
            <svg viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <img 
          className="lightbox-img" 
          src={(activeProject.images || [activeProject.image])[activeImageIndex]} 
          alt={activeProject.name} 
        />

        {(activeProject.images || [activeProject.image]).length > 1 && (
          <button className="lightbox-nav-btn next" onClick={nextImage}>
            <svg viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      <div className="lightbox-details">
        <h3 className="lightbox-title">
          {activeProject.name.split('(')[0]}
          {activeProject.name.includes('(') && (
            <span>({activeProject.name.split('(')[1]}</span>
          )}
        </h3>
        <p className="lightbox-meta">
          <strong>Location:</strong> {activeProject.location} <br />
          <strong>Description:</strong> {activeProject.meta}
        </p>
        {activeProject.pdf && (
          <div style={{ marginTop: '16px' }}>
            <a 
              href={activeProject.pdf} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="lightbox-pdf-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'var(--gold)',
                color: 'var(--earth-dark)',
                textDecoration: 'none',
                fontFamily: "'Josefin Sans', sans-serif",
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px' }}>
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              View Project Brochure (PDF)
            </a>
          </div>
        )}
        {(activeProject.images || [activeProject.image]).length > 1 && (
          <div className="lightbox-counter">
            Image {activeImageIndex + 1} of {(activeProject.images || [activeProject.image]).length}
          </div>
        )}
      </div>
    </div>
  </div>
)}

{/* WHY US */}
<section className="why">
  <div className="why-ambient"></div>
  <div className="why-content">
    <div className="why-left">
      <div className="section-tag"><div className="tag-line"></div><span>Why Choose Us</span></div>
      <h2 className="section-title">Our <em>Commitment to Excellence</em></h2>
      <p className="section-body">Every project we undertake reflects our dedication to quality, innovation, and lasting relationships with our clients across Pakistan.</p>
      <Link to="/about" className="btn-primary" style={{marginTop: '20px'}}>About Limestone</Link>
    </div>
    <div className="why-grid">
      <div className="why-item">
        <div className="why-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div className="why-title">Proven Quality</div>
        <p className="why-desc">Over 200 delivered projects across Pakistan, each a testament to our uncompromising standards of craftsmanship.</p>
      </div>
      <div className="why-item">
        <div className="why-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
        <div className="why-title">On-Time Delivery</div>
        <p className="why-desc">Rigorous project management ensures every milestone is met, keeping your vision firmly on schedule.</p>
      </div>
      <div className="why-item">
        <div className="why-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div>
        <div className="why-title">Expert Team</div>
        <p className="why-desc">Our architects, engineers, and designers bring decades of combined experience to every project.</p>
      </div>
      <div className="why-item">
        <div className="why-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg></div>
        <div className="why-title">Transparent Pricing</div>
        <p className="why-desc">No hidden costs — detailed breakdowns and regular updates keep you in full control of your investment.</p>
      </div>
    </div>
  </div>
</section>

{/* PROCESS */}
<section className="process" id="workflow">
  <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
    <div style={{textAlign: 'center', marginBottom: '56px'}}>
      <div className="section-tag"><div className="tag-line"></div><span>Our Methodology</span></div>
      <h2 className="section-title">Our <em style={{display: 'inline', fontWeight: '100'}}>Proven</em> Process</h2>
    </div>

    <div className="process-grid">
      {/* Steps List */}
      <div className="process-list">
        <div className={`process-interactive-step ${activeStep === 1 ? "active" : ""}`} onClick={() => setActiveStep(1)}>
          <div className="step-num-badge">01</div>
          <div className="step-content">
            <h3 className="step-title-text">Consultation & Survey</h3>
            <p className="step-desc-text">We listen to your vision, goals, and budget to understand the full scope of your project and analyze the site survey contours.</p>
          </div>
        </div>
        <div className={`process-interactive-step ${activeStep === 2 ? "active" : ""}`} onClick={() => setActiveStep(2)}>
          <div className="step-num-badge">02</div>
          <div className="step-content">
            <h3 className="step-title-text">Architectural Design</h3>
            <p className="step-desc-text">Our architects craft detailed floor layouts and 3D elevations, optimizing spacing, door swings, and natural ventilation.</p>
          </div>
        </div>
        <div className={`process-interactive-step ${activeStep === 3 ? "active" : ""}`} onClick={() => setActiveStep(3)}>
          <div className="step-num-badge">03</div>
          <div className="step-content">
            <h3 className="step-title-text">MEP & Engineering Approvals</h3>
            <p className="step-desc-text">We generate full structural framing blueprints, mechanical, electrical, and plumbing schematics, and obtain regulatory stamps.</p>
          </div>
        </div>
        <div className={`process-interactive-step ${activeStep === 4 ? "active" : ""}`} onClick={() => setActiveStep(4)}>
          <div className="step-num-badge">04</div>
          <div className="step-content">
            <h3 className="step-title-text">Precision Construction</h3>
            <p className="step-desc-text">Our engineering teams cast columns, beams, and foundations with seismic-reinforced structures under rigorous site supervision.</p>
          </div>
        </div>
        <div className={`process-interactive-step ${activeStep === 5 ? "active" : ""}`} onClick={() => setActiveStep(5)}>
          <div className="step-num-badge">05</div>
          <div className="step-content">
            <h3 className="step-title-text">Final Handover</h3>
            <p className="step-desc-text">We deliver a snagging-free, fully finished architectural marvel with comprehensive documentation and structural warranties.</p>
          </div>
        </div>
      </div>

      {/* Interactive Blueprint Display */}
      <div className="blueprint-desk">
        <div className="blueprint-desk-lines"></div>
        <div className="blueprint-svg-container">
          {/* Layer 1: Consultation / Survey Plan */}
          <svg key="bp-1" className={`blueprint-layer ${activeStep === 1 ? "active" : ""}`} id="bp-1" viewBox="0 0 400 300" fill="none" stroke="currentColor" stroke-width="1.2">
            <text x="20" y="30" fill="var(--gold)" font-family="Josefin Sans" font-size="9" letter-spacing="1">SURVEY & BOUNDARY PLAN</text>
            <rect x="50" y="50" width="300" height="180" stroke="rgba(254,190,16,0.2)" stroke-dasharray="4 4"/>
            {/* Boundary coordinates */}
            <line x1="50" y1="50" x2="350" y2="50" stroke="var(--gold)" stroke-width="1.5"/>
            <line x1="350" y1="50" x2="350" y2="230" stroke="var(--gold)" stroke-width="1.5"/>
            <line x1="350" y1="230" x2="50" y2="230" stroke="var(--gold)" stroke-width="1.5"/>
            <line x1="50" y1="230" x2="50" y2="50" stroke="var(--gold)" stroke-width="1.5"/>
            {/* Crosshairs */}
            <circle cx="50" cy="50" r="3" fill="var(--gold)"/>
            <circle cx="350" cy="50" r="3" fill="var(--gold)"/>
            <circle cx="350" cy="230" r="3" fill="var(--gold)"/>
            <circle cx="50" cy="230" r="3" fill="var(--gold)"/>
            {/* Contour lines */}
            <path d="M70 100c40-10 80 20 120 10s70-30 110-20" stroke="rgba(255,255,255,0.15)"/>
            <path d="M60 150c50-5 90 30 140 20s60-40 120-10" stroke="rgba(255,255,255,0.15)"/>
            <path d="M80 200c30-15 70 10 110 5s80-20 120-5" stroke="rgba(255,255,255,0.15)"/>
            {/* Plot Dimensions */}
            <text x="160" y="42" fill="rgba(255,255,255,0.4)" font-family="Jost" font-size="7">300.00 FT (N 90° E)</text>
            <text x="160" y="242" fill="rgba(255,255,255,0.4)" font-family="Jost" font-size="7">300.00 FT (S 90° W)</text>
          </svg>

          {/* Layer 2: Design / Architectural Floor Plan */}
          <svg key="bp-2" className={`blueprint-layer ${activeStep === 2 ? "active" : ""}`} id="bp-2" viewBox="0 0 400 300" fill="none" stroke="currentColor" stroke-width="1.2">
            <text x="20" y="30" fill="var(--gold)" font-family="Josefin Sans" font-size="9" letter-spacing="1">ARCHITECTURAL LAYOUT - FLOOR 1</text>
            {/* Outer Walls */}
            <rect x="60" y="60" width="280" height="170" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
            {/* Inner Walls */}
            <line x1="180" y1="60" x2="180" y2="230" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
            <line x1="60" y1="150" x2="180" y2="150" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
            <line x1="180" y1="140" x2="340" y2="140" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
            {/* Room labels */}
            <text x="80" y="105" fill="var(--gold)" font-family="Josefin Sans" font-size="9" font-weight="600">MASTER BED</text>
            <text x="95" y="195" fill="var(--gold)" font-family="Josefin Sans" font-size="9" font-weight="600">KITCHEN</text>
            <text x="210" y="105" fill="var(--gold)" font-family="Josefin Sans" font-size="9" font-weight="600">LIVING LOUNGE</text>
            <text x="220" y="195" fill="var(--gold)" font-family="Josefin Sans" font-size="9" font-weight="600">DINING AREA</text>
            {/* Door swings (arch) */}
            <path d="M180 95a25 25 0 0 1-25-25" stroke="var(--gold)" stroke-width="1"/>
            <line x1="180" y1="95" x2="155" y2="95" stroke="var(--gold)"/>
            <path d="M180 175a25 25 0 0 0-25 25" stroke="var(--gold)" stroke-width="1"/>
            <line x1="180" y1="175" x2="155" y2="175" stroke="var(--gold)"/>
          </svg>

          {/* Layer 3: Approvals / Engineering & MEP Stamps */}
          <svg key="bp-3" className={`blueprint-layer ${activeStep === 3 ? "active" : ""}`} id="bp-3" viewBox="0 0 400 300" fill="none" stroke="currentColor" stroke-width="1.2">
            <text x="20" y="30" fill="var(--gold)" font-family="Josefin Sans" font-size="9" letter-spacing="1">MEP & STRUCTURAL APPROVAL</text>
            {/* Faded Wall Outlines */}
            <rect x="60" y="60" width="280" height="170" stroke="rgba(255,255,255,0.15)"/>
            <line x1="180" y1="60" x2="180" y2="230" stroke="rgba(255,255,255,0.15)"/>
            {/* Structural Columns (solid squares) */}
            <rect x="58" y="58" width="6" height="6" fill="var(--gold)"/>
            <rect x="177" y="58" width="6" height="6" fill="var(--gold)"/>
            <rect x="336" y="58" width="6" height="6" fill="var(--gold)"/>
            <rect x="58" y="147" width="6" height="6" fill="var(--gold)"/>
            <rect x="177" y="137" width="6" height="6" fill="var(--gold)"/>
            <rect x="336" y="137" width="6" height="6" fill="var(--gold)"/>
            <rect x="58" y="226" width="6" height="6" fill="var(--gold)"/>
            <rect x="177" y="226" width="6" height="6" fill="var(--gold)"/>
            <rect x="336" y="226" width="6" height="6" fill="var(--gold)"/>
            {/* Electrical conduit routing */}
            <path d="M80 80q40 20 100 0t100 20" stroke="rgba(254,190,16,0.5)" stroke-width="1.2" stroke-dasharray="2 2"/>
            <circle cx="80" cy="80" r="3" fill="none" stroke="var(--gold)"/>
            <circle cx="180" cy="80" r="3" fill="none" stroke="var(--gold)"/>
            <circle cx="280" cy="100" r="3" fill="none" stroke="var(--gold)"/>
            {/* Engineering Seal */}
            <circle cx="300" cy="190" r="22" stroke="var(--gold)" stroke-width="1.5" stroke-dasharray="4 2"/>
            <circle cx="300" cy="190" r="18" stroke="var(--gold)" stroke-width="0.8"/>
            <text x="287" y="193" fill="var(--gold)" font-family="Josefin Sans" font-size="6" font-weight="700">APPROVED</text>
          </svg>

          {/* Layer 4: Construction / Foundation & Frame */}
          <svg key="bp-4" className={`blueprint-layer ${activeStep === 4 ? "active" : ""}`} id="bp-4" viewBox="0 0 400 300" fill="none" stroke="currentColor" stroke-width="1.2">
            <text x="20" y="30" fill="var(--gold)" font-family="Josefin Sans" font-size="9" letter-spacing="1">FOUNDATION & STRUCTURAL FRAMING</text>
            {/* Grid Lines */}
            <line x1="30" y1="90" x2="370" y2="90" stroke="rgba(255,255,255,0.06)" stroke-dasharray="2 2"/>
            <line x1="30" y1="180" x2="370" y2="180" stroke="rgba(255,255,255,0.06)" stroke-dasharray="2 2"/>
            <line x1="120" y1="40" x2="120" y2="270" stroke="rgba(255,255,255,0.06)" stroke-dasharray="2 2"/>
            <line x1="260" y1="40" x2="260" y2="270" stroke="rgba(255,255,255,0.06)" stroke-dasharray="2 2"/>
            {/* Foundation Footings */}
            <rect x="50" y="50" width="22" height="22" stroke="rgba(255,255,255,0.3)" stroke-dasharray="2 2"/>
            <rect x="56" y="56" width="10" height="10" fill="none" stroke="var(--gold)"/>
            <rect x="180" y="50" width="22" height="22" stroke="rgba(255,255,255,0.3)" stroke-dasharray="2 2"/>
            <rect x="186" y="56" width="10" height="10" fill="none" stroke="var(--gold)"/>
            <rect x="310" y="50" width="22" height="22" stroke="rgba(255,255,255,0.3)" stroke-dasharray="2 2"/>
            <rect x="316" y="56" width="10" height="10" fill="none" stroke="var(--gold)"/>
            
            <rect x="50" y="160" width="22" height="22" stroke="rgba(255,255,255,0.3)" stroke-dasharray="2 2"/>
            <rect x="56" y="166" width="10" height="10" fill="none" stroke="var(--gold)"/>
            <rect x="180" y="160" width="22" height="22" stroke="rgba(255,255,255,0.3)" stroke-dasharray="2 2"/>
            <rect x="186" y="166" width="10" height="10" fill="none" stroke="var(--gold)"/>
            <rect x="310" y="160" width="22" height="22" stroke="rgba(255,255,255,0.3)" stroke-dasharray="2 2"/>
            <rect x="316" y="166" width="10" height="10" fill="none" stroke="var(--gold)"/>
            {/* Tie Beams connecting columns */}
            <line x1="61" y1="61" x2="321" y2="61" stroke="rgba(254,190,16,0.4)" stroke-width="2"/>
            <line x1="61" y1="171" x2="321" y2="171" stroke="rgba(254,190,16,0.4)" stroke-width="2"/>
            <line x1="61" y1="61" x2="61" y2="171" stroke="rgba(254,190,16,0.4)" stroke-width="2"/>
            <line x1="191" y1="61" x2="191" y2="171" stroke="rgba(254,190,16,0.4)" stroke-width="2"/>
            <line x1="321" y1="61" x2="321" y2="171" stroke="rgba(254,190,16,0.4)" stroke-width="2"/>
          </svg>

          {/* Layer 5: Handover / Completed Elevation */}
          <svg key="bp-5" className={`blueprint-layer ${activeStep === 5 ? "active" : ""}`} id="bp-5" viewBox="0 0 400 300" fill="none" stroke="currentColor" stroke-width="1.2">
            <text x="20" y="30" fill="var(--gold)" font-family="Josefin Sans" font-size="9" letter-spacing="1">ARCHITECTURAL ELEVATION - FINAL HANDOVER</text>
            {/* Ground Line */}
            <line x1="40" y1="220" x2="360" y2="220" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
            {/* Building Outline */}
            <rect x="80" y="80" width="240" height="140" stroke="var(--gold)" stroke-width="2"/>
            {/* Roof Outline */}
            <polygon points="70,80 200,30 330,80" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
            {/* Door */}
            <rect x="175" y="140" width="50" height="80" stroke="rgba(255,255,255,0.5)"/>
            <circle cx="215" cy="180" r="1.5" fill="var(--gold)"/>
            {/* Windows */}
            <rect x="110" y="110" width="40" height="40" stroke="rgba(255,255,255,0.4)"/>
            <line x1="130" y1="110" x2="130" y2="150" stroke="rgba(255,255,255,0.4)"/>
            <line x1="110" y1="130" x2="150" y2="130" stroke="rgba(255,255,255,0.4)"/>
            
            <rect x="250" y="110" width="40" height="40" stroke="rgba(255,255,255,0.4)"/>
            <line x1="270" y1="110" x2="270" y2="150" stroke="rgba(255,255,255,0.4)"/>
            <line x1="250" y1="130" x2="290" y2="130" stroke="rgba(255,255,255,0.4)"/>
            {/* Landscaping Trees */}
            <path d="M50 220v-20M50 200c5-5 5-15 0-20s-15-5-20 0 5 15 0 20c5 5 15 5 20 0z" stroke="rgba(255,255,255,0.2)"/>
            <path d="M350 220v-30M350 190c8-8 8-20 0-28s-20-8-28 0 8 20 0 28c8 8 20 8 28 0z" stroke="rgba(255,255,255,0.2)"/>
          </svg>
        </div>
        <div className="blueprint-overlay-text" id="blueprint-status">{statusTexts[activeStep]}</div>
      </div>
    </div>
  </div>
</section>

{/* TESTIMONIAL */}
<section className="testimonial">
  <div className="testimonial-ambient-circles">
    <div className="tac-1"></div>
    <div className="tac-2"></div>
  </div>
  <div style={{ textAlign: 'center', marginBottom: '56px', position: 'relative', zIndex: '2' }}>
    <div className="section-tag" style={{ justifyContent: 'center' }}><div className="tag-line"></div><span>Client Stories</span></div>
    <h2 className="section-title" style={{ marginBottom: '0' }}>What Our <em>Clients</em> Say</h2>
  </div>

  <div className="testimonial-container">
    <button className="testimonial-btn btn-prev" aria-label="Previous Testimonial" onClick={prevSlide}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 19l-7-7 7-7"/></svg>
    </button>
    
    <div className="testimonial-slider">
      {testimonials.map((t, idx) => (
        <div 
          key={idx} 
          className={`testimonial-slide ${idx === slideIndex ? 'active' : ''} ${idx !== slideIndex && direction === 'next' ? 'slide-left' : ''}`}
          style={{ transform: idx === slideIndex ? '' : (direction === 'next' ? 'translateX(40px)' : 'translateX(-40px)') }}
        >
          <div className="testimonial-card">
            <span className="quote-mark">“</span>
            <p className="quote-text">{t.quote}</p>
            <div className="quote-author">
              <div className="author-avatar">{t.initials}</div>
              <div className="author-meta">
                <div className="author-name">{t.author}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <button className="testimonial-btn btn-next" aria-label="Next Testimonial" onClick={nextSlide}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7"/></svg>
    </button>
  </div>
  
  <div className="testimonial-dots">
    {testimonials.map((_, idx) => (
      <span 
        key={idx} 
        className={`dot ${idx === slideIndex ? 'active' : ''}`} 
        onClick={() => {
          setDirection(idx > slideIndex ? 'next' : 'prev');
          setSlideIndex(idx);
        }}
      ></span>
    ))}
  </div>
</section>

{/* CTA */}
<section className="cta">
  <div className="cta-bg"></div>
  <div className="cta-content">
    <h2 className="cta-title">
      Ready to Build
      <span>Something Extraordinary?</span>
    </h2>
    <div className="cta-actions">
      <Link to="/contact" className="btn-dark">
        Start Your Project
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
      <p className="cta-contact">Or call: <a href="tel:+92300000000">+92 300 000 0000</a></p>
    </div>
  </div>
</section>

{/* FOOTER */}
    </>
  )
}

export default Home
