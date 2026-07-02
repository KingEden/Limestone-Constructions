import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Project hero background image import
import pineBusinessSquare from '../project/pine_business_square.jpg'

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

function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredProjects = projectsData.filter(proj => 
    filter === 'All' || proj.category.toLowerCase().includes(filter.toLowerCase())
  );

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

  // Keyboard navigation hook
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

  return (
    <>
      <section className="hero" style={{ height: '50vh', minHeight: '400px' }}>
        <div className="hero-bg" style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(26,22,18,0.7), rgba(26,22,18,0.9)), url(${pineBusinessSquare})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="hero-content">
          <div className="page-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-badge-prefix">■</span>
            <span>Our Portfolio</span>
          </div>
          <h1 className="page-title">
            Our
            <span className="line-gold">Projects</span>
          </h1>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="filter-bar">
        {['All', 'Residential', 'Commercial'].map(cat => (
          <button 
            key={cat} 
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="projects-list">
        <div className="projects-grid-symmetrical">
          {filteredProjects.map(proj => (
            <div key={proj.id} className="project-card-premium" onClick={() => openLightbox(proj)}>
              <div className="proj-img-wrapper" style={{ aspectRatio: '1023 / 1537', background: 'none', position: 'relative' }}>
                <img 
                  src={proj.image} 
                  alt={proj.name} 
                  className="proj-card-img-element"
                  loading="lazy"
                />
                <div className="proj-overlay"></div>
                <div className="proj-arrow">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
              <div className="proj-card-details">
                <span className="proj-cat-tag" style={{ display: 'block', marginBottom: '8px' }}>{proj.category}</span>
                <div className="proj-card-name" style={{ marginBottom: '12px' }}>{proj.name}</div>
                <div className="proj-card-meta">{proj.meta}</div>
                
                <div className="proj-card-meta-grid">
                  <div>
                    <div className="proj-meta-label">Location</div>
                    <div className="proj-meta-value">{proj.location.split(',')[proj.location.split(',').length - 2] || proj.location}</div>
                  </div>
                  <div>
                    <div className="proj-meta-label">Classification</div>
                    <div className="proj-meta-value">{proj.category} Build</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

      {/* TESTIMONIAL STRIP */}
      <section className="testimonial-strip">
        <div className="testimonial-container">
          <div style={{ textAlign: 'center', maxWidth: '800px' }}>
            <span className="quote-mark" style={{ display: 'block', fontSize: '80px', color: 'var(--gold)', lineHeight: 1 }}>"</span>
            <p className="quote-text" style={{ fontSize: '20px', fontFamily: "'Jost', sans-serif", fontWeight: 300, color: 'var(--text-dark)', lineHeight: 1.8, margin: '-20px 0 24px' }}>
              Precision in structural framing, detailed drawings, and outstanding finishing details. Limestone Constructions is our primary contracting choice in Islamabad.
            </p>
            <div style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: "'Josefin Sans', sans-serif", color: 'var(--gold)', fontWeight: 600 }}>
              DHA Phase 2 Site Supervising Committee
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
