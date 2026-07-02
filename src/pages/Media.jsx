import React from 'react'
import mediaBg from '../project/galaxy_one_site.jpg'

function Media() {
  return (
    <>
      <section className="hero" style={{ height: '50vh', minHeight: '400px' }}>
        <div className="hero-bg" style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(26,22,18,0.7), rgba(26,22,18,0.9)), url(${mediaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="hero-content">
          <div className="page-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-badge-prefix">■</span>
            <span>News &amp; Articles</span>
          </div>
          <h1 className="page-title">
            Media
            <span className="line-gold">Insights</span>
          </h1>
        </div>
      </section>

      {/* COMING SOON MESSAGE */}
      <section className="media-gallery" style={{ padding: '120px 5%', textAlign: 'center', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: "'Josefin Sans', sans-serif", 
            fontSize: '32px', 
            fontWeight: 700, 
            letterSpacing: '1px', 
            textTransform: 'uppercase', 
            color: 'var(--earth-dark)', 
            marginBottom: '20px' 
          }}>
            Updates <em style={{ fontStyle: 'normal', fontWeight: 100, color: 'var(--earth-light)' }}>Coming Soon</em>
          </h2>
          <p style={{ 
            fontFamily: "'Jost', sans-serif", 
            fontSize: '16px', 
            fontWeight: 300, 
            lineHeight: '1.8', 
            color: 'var(--text-muted)', 
            marginBottom: '40px' 
          }}>
            Our latest project breakthroughs, construction insights, architectural articles, and video walkthroughs are currently being compiled. Check back soon for updates.
          </p>
          <div style={{ width: '80px', height: '1px', background: 'var(--gold)', margin: '0 auto' }}></div>
        </div>
      </section>
    </>
  )
}

export default Media
