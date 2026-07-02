import React from 'react'
import { Link } from 'react-router-dom'
import legacyVilla from '../project/limestone_legacy_villa.png'
import zulfiqarAvatar from '../project/zulfiqar_avatar.png'
import farahAvatar from '../project/farah_avatar.png'
import architectureLegacy from '../project/architecture_as_a_legacy_photo.png'
import collaborationTrust from '../project/limestone_collaboration_trust.png'

function About() {
  return (
    <>
      <section className="page-hero">
  <div className="page-hero-grid"></div>
  <div className="page-hero-circle"></div>
  <div className="page-hero-content">
    <div className="page-eyebrow">
      <span className="eyebrow-badge-prefix">■</span>
      <span>Our Story · Est. 2018</span>
    </div>
    <h1 className="page-title">
      Built on
      <span className="line-gold">Trust &</span>
      Precision
    </h1>
    <p className="page-subtitle">From a small drafting table in Islamabad to one of Pakistan's most respected family-owned architectural and construction firms — our journey is defined by craft, commitment, and transparency.</p>
  </div>
</section>

<section className="about-story">
  <div className="about-visual">
    <div className="about-img-frame">
      <img src={legacyVilla} alt="Architecture As A Legacy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
      <div className="about-frame-lines" style={{ mixBlendMode: 'overlay', opacity: 0.6 }}></div>
    </div>
    <div className="about-badge"><span className="badge-num">2018</span><span className="badge-text">Est. December</span></div>
  </div>
  <div>
    <div className="section-tag"><div className="tag-line"></div><span>About Us</span></div>
    <h2 className="section-title">Excellent Service &<em>Quality Assurance</em></h2>
    <p className="section-body">We are a team of dreamers and innovators who are passionate about our field and strive to contribute towards the growth of Pakistan. Limestone Constructions is a premium family-owned business established in December 2018. As a relatively new and dynamic entrant in the market, we stand out from the rest of the crowd because we value transparency above all else.</p>
    <p className="section-body">Our work ethic is based on commitment and uncompromising attention to detail. We believe the client is the heart and soul of our business — we respect your time and resources, planning every structural phase with meticulous care. From private modern villas to commercial plazas, all our projects are well thought out, unique, and built to endure. Above all, we never forget to enjoy the creative journey of building together along the way!</p>
  </div>
</section>

<section className="about-legacy-sec" style={{ padding: '80px 5%', borderTop: '1px solid var(--border)' }}>
  <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'center' }} className="about-legacy-grid">
    <div>
      <div className="section-tag"><div className="tag-line"></div><span>Our Philosophy</span></div>
      <h2 className="section-title">Architecture<em>As A Legacy</em></h2>
      <p className="section-body">Limestone Constructions was founded with a singular belief: that every structure we build becomes part of someone's life story. We don't construct buildings — we shape environments where families grow, businesses thrive, and communities connect.</p>
      <p className="section-body">Our multidisciplinary team combines classical architectural principles with contemporary design intelligence, ensuring that each space is built to be both functionally superior and aesthetically timeless across Islamabad, Rawalpindi, and DHA.</p>
      <Link to="/projects" className="btn-primary" style={{marginTop: '16px'}}>Explore Our Work <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
    </div>
    <div className="about-visual">
      <div className="about-img-frame" style={{ width: '100%', aspectRatio: '4/3' }}>
        <img src={architectureLegacy} alt="Architecture As A Legacy Facade" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
        <div className="about-frame-lines" style={{ mixBlendMode: 'overlay', opacity: 0.6 }}></div>
      </div>
      <div className="about-badge" style={{ bottom: '-28px', left: '-28px', padding: '28px 32px', maxWidth: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '13.5px', fontStyle: 'italic', color: 'var(--earth-dark)', lineHeight: '1.65', margin: '0', fontWeight: 400 }}>
          "We shape our buildings; thereafter they shape us."
        </p>
        <span style={{ fontFamily: 'Josefin Sans,sans-serif', fontSize: '9px', color: 'rgba(81,72,53,0.85)', display: 'block', marginTop: '12px', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase' }}>— Winston Churchill</span>
      </div>
    </div>
  </div>
</section>

<section className="about-story" style={{ padding: '80px 5%', borderTop: '1px solid var(--border)' }}>
  <div className="about-visual">
    <div className="about-img-frame" style={{ width: '100%', aspectRatio: '4/3' }}>
      <img src={collaborationTrust} alt="Limestone Collaborative Architecture & Trust" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
      <div className="about-frame-lines" style={{ mixBlendMode: 'overlay', opacity: 0.6 }}></div>
    </div>
  </div>
  <div>
    <div className="section-tag"><div className="tag-line"></div><span>Who We Are</span></div>
    <h2 className="section-title">Relationships Built<em>On Trust & Loyalty</em></h2>
    <p className="section-body" style={{ marginBottom: '20px' }}>
      We not only build, design, and renovate your projects — instead, we’re committed to forming a long-term relationship of trust, care, and loyalty with our clients.
    </p>
    <p className="section-body" style={{ marginBottom: '24px' }}>
      Share your dream project with us, and we’ll share innovative solutions catered to your construction needs. Working together with our team of expert architects and builders, we deliver:
    </p>
    <ul className="svc-features" style={{ margin: '0 0 24px 0', padding: 0, listStyle: 'none' }}>
      <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', fontFamily: "'Josefin Sans', sans-serif", fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-dark)' }}>
        <span style={{ color: 'var(--gold)', marginRight: '14px', fontSize: '10px' }}>■</span> Excellent & Affordable Construction Services
      </li>
      <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', fontFamily: "'Josefin Sans', sans-serif", fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-dark)' }}>
        <span style={{ color: 'var(--gold)', marginRight: '14px', fontSize: '10px' }}>■</span> Eco-Friendly Construction
      </li>
      <li style={{ marginBottom: '0', display: 'flex', alignItems: 'center', fontFamily: "'Josefin Sans', sans-serif", fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-dark)' }}>
        <span style={{ color: 'var(--gold)', marginRight: '14px', fontSize: '10px' }}>■</span> Custom-Tailored Construction Solutions
      </li>
    </ul>
  </div>
</section>


<div className="stats-band">
  <div className="stats-band-bg"></div>
  <div className="stats-row">
    <div className="stat-card"><div className="stat-big">80<span>+</span></div><span className="stat-lbl">Projects Delivered</span></div>
    <div className="stat-card"><div className="stat-big">8<span>+</span></div><span className="stat-lbl">Years of Trust</span></div>
    <div className="stat-card"><div className="stat-big">99<span>%</span></div><span className="stat-lbl">Client Satisfaction</span></div>
    <div className="stat-card"><div className="stat-big">25<span>+</span></div><span className="stat-lbl">Expert Team Members</span></div>
  </div>
</div>

<section className="values">
  <div className="values-header">
    <div className="section-tag" style={{justifyContent: 'center'}}><div className="tag-line"></div><span>Our Core Values</span></div>
    <h2 className="section-title" style={{textAlign: 'center'}}>What<em>Drives Us</em></h2>
  </div>
  <div className="values-grid">
    <div className="value-card"><div className="val-num">01</div><div className="val-icon"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><div className="val-title">Uncompromising Precision</div><p className="val-desc">Every millimetre counts. From structural calculations to finishing details, we hold ourselves to exacting standards that translate into lasting quality.</p></div>
    <div className="value-card"><div className="val-num">02</div><div className="val-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div><div className="val-title">On-Time Delivery</div><p className="val-desc">Our clients entrust us with their timelines. We honour that trust with meticulous project management and transparent communication at every phase.</p></div>
    <div className="value-card"><div className="val-num">03</div><div className="val-icon"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><div className="val-title">Client-Centric Approach</div><p className="val-desc">Your vision is our brief. We listen deeply, collaborate closely, and adapt continuously to ensure the final result exceeds your original imagination.</p></div>
    <div className="value-card"><div className="val-num">04</div><div className="val-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div><div className="val-title">Sustainable Building</div><p className="val-desc">We design with the future in mind — selecting materials and methods that reduce environmental impact without sacrificing structural integrity or aesthetic beauty.</p></div>
    <div className="value-card"><div className="val-num">05</div><div className="val-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg></div><div className="val-title">Innovation in Design</div><p className="val-desc">We embrace new technologies and design philosophies to deliver forward-thinking spaces that stand apart from the ordinary.</p></div>
    <div className="value-card"><div className="val-num">06</div><div className="val-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div className="val-title">Community & Legacy</div><p className="val-desc">We invest in the communities we build within — supporting local artisans, sustainable sourcing, and architecture that strengthens Islamabad's urban identity.</p></div>
  </div>
</section>

<section className="about-vision-section" style={{ background: 'var(--earth-dark)', color: '#fff', padding: '100px 5%', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(254,190,16,0.12)' }}>
  <div className="vision-bg-glow" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 50%, rgba(254,190,16,0.09) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
  
  {/* Giant text watermark for architectural scale */}
  <div style={{ position: 'absolute', right: '5%', top: '20px', fontSize: '130px', fontWeight: '900', fontFamily: "'Josefin Sans', sans-serif", color: 'rgba(254,190,16,0.02)', letterSpacing: '10px', textTransform: 'uppercase', pointerEvents: 'none', userSelect: 'none' }} className="vision-watermark">
    VISION
  </div>

  <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: '60px', alignItems: 'center' }} className="vision-grid">
    <div>
      <div className="section-tag" style={{ color: 'var(--gold)' }}><div className="tag-line" style={{ background: 'var(--gold)' }}></div><span>Our Focus</span></div>
      <h2 className="section-title" style={{ color: '#fff', fontSize: '38px', marginTop: '16px', lineHeight: '1.2' }}>Our Ambition<em>& Market Vision</em></h2>
      <p className="section-body" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.7', marginTop: '20px', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
        We align engineering competence with commercial integrity. Our vision dictates how we plan, who we partner with, and how we deliver spaces that transcend expectations.
      </p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} className="vision-cards-col">
      {/* Vision Card 1 */}
      <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderTop: '3px solid var(--gold)', padding: '36px', borderRadius: '4px', position: 'relative', transition: 'all 0.3s ease' }} className="vision-card-interactive">
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          <div style={{ background: 'rgba(254,190,16,0.1)', color: 'var(--gold)', padding: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '15px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#fff', margin: '0 0 8px 0' }}>The Preferred Building Partner</h3>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '15px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', margin: '0', fontWeight: 300 }}>
              To be the preferred building partner for value-minded clients.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Card 2 */}
      <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderTop: '3px solid var(--gold)', padding: '36px', borderRadius: '4px', position: 'relative', transition: 'all 0.3s ease' }} className="vision-card-interactive">
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          <div style={{ background: 'rgba(254,190,16,0.1)', color: 'var(--gold)', padding: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '15px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#fff', margin: '0 0 8px 0' }}>Value & Innovation Leader</h3>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '14.5px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.65', margin: '0', fontWeight: 300 }}>
              To become the leading construction company in Pakistan while delivering excellent value & innovative construction solutions to meet the requirements of clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="timeline">
  <div className="timeline-ambient"></div>
  <div className="timeline-content">
    <div className="timeline-header">
      <div className="section-tag"><div className="tag-line"></div><span>Our Journey</span></div>
      <h2 className="section-title">Milestones<em>That Shaped Us</em></h2>
      <p className="section-body">Delivering high-end residential villas and landmark commercial plazas since our foundation in December 2018.</p>
    </div>
    <div className="timeline-items">
      <div className="tl-item"><div className="tl-year">2018</div><div><div className="tl-title">Foundation</div><p className="tl-desc">Limestone Constructions established in Islamabad as a family-owned business with a commitment to absolute transparency in building.</p></div></div>
      <div className="tl-item"><div className="tl-year">2020</div><div><div className="tl-title">Commercial Plazas & Residential Expansion</div><p className="tl-desc">Delivered our first multi-storey commercial retail plaza in Islamabad alongside key custom luxury homes in Rawalpindi.</p></div></div>
      <div className="tl-item"><div className="tl-year">2022</div><div><div className="tl-title">50+ Projects Completed</div><p className="tl-desc">Successfully crossed 50 project handovers. Expanded our team and solidified our full-spectrum interior decoration division.</p></div></div>
      <div className="tl-item"><div className="tl-year">2024</div><div><div className="tl-title">B-17 Headquarters & Fleet</div><p className="tl-desc">Moved to our premium new headquarters in B-17 Islamabad, and expanded our self-owned logistics and heavy machinery fleet.</p></div></div>
      <div className="tl-item"><div className="tl-year">2026</div><div><div className="tl-title">Real Estate Marketing Launch</div><p className="tl-desc">Launched our new Real Estate Marketing & Advisory division to provide clients with wholescale buying, selling, and trading consultancy.</p></div></div>
    </div>
  </div>
</section>

{/* FLEET SECTION */}
<section className="fleet-sec">
  <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
    <div style={{textAlign: 'center', marginBottom: '56px'}}>
      <div className="section-tag"><div className="tag-line"></div><span>Heavy Logistics</span></div>
      <h2 className="section-title">Our Construction <em>Fleet & Machinery</em></h2>
      <p className="section-body" style={{maxWidth: '600px', margin: '0 auto'}}>To ensure structural integrity and strict timelines, Limestone maintains its own fully-owned heavy equipment and logistics fleet — deploying top-tier technology directly on-site.</p>
    </div>

    <div className="fleet-grid">
      {/* Machine 1: Excavator */}
      <div className="fleet-card">
        <div className="fleet-icon-wrapper">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
            {/* Tracks */}
            <rect x="10" y="46" width="44" height="8" rx="4" stroke="currentColor"/>
            <circle cx="16" cy="50" r="1.5" fill="currentColor"/>
            <circle cx="24" cy="50" r="1.5" fill="currentColor"/>
            <circle cx="32" cy="50" r="1.5" fill="currentColor"/>
            <circle cx="40" cy="50" r="1.5" fill="currentColor"/>
            <circle cx="48" cy="50" r="1.5" fill="currentColor"/>
            {/* Cab */}
            <rect x="16" y="32" width="22" height="14" rx="2"/>
            <rect x="20" y="24" width="12" height="8" rx="1"/>
            {/* Counterweight */}
            <rect x="12" y="34" width="4" height="10" fill="currentColor"/>
            {/* Arm */}
            <path d="M34 36l8-14 10 2" stroke-linejoin="round" stroke-width="2"/>
            <path d="M52 24l4 14" stroke-linejoin="round" stroke-width="2"/>
            {/* Bucket */}
            <path d="M56 38l-4 4h-4l-1-4z" fill="currentColor"/>
          </svg>
        </div>
        <h3 className="fleet-name">CAT 320 Excavator</h3>
        <div className="fleet-badge active">
          <span className="dot"></span> Active (Meridian Tower)
        </div>
        <div className="fleet-specs">
          <div className="spec-row">
            <span className="spec-label">Operating Weight</span>
            <span className="spec-val">22.5 Tons</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Bucket Capacity</span>
            <span className="spec-val">1.2 m³</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Max Dig Depth</span>
            <span className="spec-val">6.7 Meters</span>
          </div>
        </div>
      </div>

      {/* Machine 2: Crane */}
      <div className="fleet-card">
        <div className="fleet-icon-wrapper">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
            {/* Mast */}
            <line x1="24" y1="12" x2="24" y2="58" stroke-width="2"/>
            <line x1="28" y1="12" x2="28" y2="58" stroke-width="2"/>
            {/* Bracings */}
            <line x1="24" y1="18" x2="28" y2="24"/>
            <line x1="28" y1="18" x2="24" y2="24"/>
            <line x1="24" y1="30" x2="28" y2="36"/>
            <line x1="28" y1="30" x2="24" y2="36"/>
            <line x1="24" y1="42" x2="28" y2="48"/>
            <line x1="28" y1="42" x2="24" y2="48"/>
            {/* Base */}
            <rect x="18" y="58" width="16" height="4" fill="currentColor"/>
            {/* Jib */}
            <line x1="6" y1="12" x2="58" y2="12" stroke-width="2"/>
            {/* Counterweight */}
            <rect x="8" y="14" width="8" height="6" fill="currentColor"/>
            {/* Cabin */}
            <rect x="22" y="8" width="8" height="8"/>
            {/* Hook */}
            <rect x="44" y="13" width="3" height="2" fill="currentColor"/>
            <line x1="45.5" y1="15" x2="45.5" y2="36" stroke-dasharray="2 2"/>
            <path d="M44 36h3l-1.5 2z" fill="currentColor"/>
          </svg>
        </div>
        <h3 className="fleet-name">Liebherr 150 EC-B</h3>
        <div className="fleet-badge active">
          <span className="dot"></span> Active (Arc Hub)
        </div>
        <div className="fleet-specs">
          <div className="spec-row">
            <span className="spec-label">Max Lift Capacity</span>
            <span className="spec-val">8.0 Tons</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Jib Reach Radius</span>
            <span className="spec-val">60.0 Meters</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Height Under Hook</span>
            <span className="spec-val">42.5 Meters</span>
          </div>
        </div>
      </div>

      {/* Machine 3: Mixer */}
      <div className="fleet-card">
        <div className="fleet-icon-wrapper">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
            {/* Wheels */}
            <circle cx="18" cy="48" r="6" stroke-width="1.8"/>
            <circle cx="46" cy="48" r="6" stroke-width="1.8"/>
            {/* Frame */}
            <rect x="10" y="38" width="44" height="6" fill="currentColor"/>
            {/* Cab */}
            <path d="M12 38v-10h10l4 4v6z" stroke-width="1.8"/>
            <rect x="15" y="30" width="6" height="4"/>
            {/* Drum */}
            <path d="M26 24l16-6 4 10-16 6z" stroke-width="1.8"/>
            {/* Stand */}
            <line x1="36" y1="38" x2="36" y2="28" stroke-width="2"/>
          </svg>
        </div>
        <h3 className="fleet-name">Transit Mixer</h3>
        <div className="fleet-badge available">
          <span className="dot"></span> Available (Fleet Depot)
        </div>
        <div className="fleet-specs">
          <div className="spec-row">
            <span className="spec-label">Drum Capacity</span>
            <span className="spec-val">8.0 m³</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Discharge Speed</span>
            <span className="spec-val">1.5 m³/min</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Engine Power</span>
            <span className="spec-val">340 hp</span>
          </div>
        </div>
      </div>

      {/* Machine 4: Pump */}
      <div className="fleet-card">
        <div className="fleet-icon-wrapper">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
            {/* Frame and Wheels */}
            <rect x="8" y="38" width="48" height="8" rx="2" stroke-width="1.8"/>
            <circle cx="18" cy="50" r="5" stroke-width="1.8"/>
            <circle cx="40" cy="50" r="5" stroke-width="1.8"/>
            <circle cx="48" cy="50" r="5" stroke-width="1.8"/>
            {/* Cab */}
            <path d="M10 38V28h12l4 4v6z" stroke-width="1.8"/>
            {/* Stabilizers */}
            <line x1="50" y1="44" x2="56" y2="52" stroke-width="2"/>
            {/* Boom Arm */}
            <path d="M34 38V24l12-12 12 4" stroke-width="2" stroke-linejoin="round"/>
            <path d="M58 16v18" stroke-dasharray="2 2"/>
          </svg>
        </div>
        <h3 className="fleet-name">Concrete Pump</h3>
        <div className="fleet-badge available">
          <span className="dot"></span> Available (Fleet Depot)
        </div>
        <div className="fleet-specs">
          <div className="spec-row">
            <span className="spec-label">Vertical Reach</span>
            <span className="spec-val">38.0 Meters</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Output Flow Rate</span>
            <span className="spec-val">160 m³/hour</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Max Pressure</span>
            <span className="spec-val">85 Bar</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="team-sec">
  <div className="team-header">
    <div><div className="section-tag"><div className="tag-line"></div><span>Leadership Team</span></div><h2 className="section-title">The Minds<em>Behind The Work</em></h2></div>
    <Link to="/contact" className="btn-dark">Work With Us <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
  </div>
  <div className="team-grid">
    <div className="team-card">
      <div className="team-img" style={{ position: 'relative' }}>
        <img src={zulfiqarAvatar} alt="Zulfiqar Parvez Butt" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
        <div className="team-img-fill" style={{ opacity: 0.15 }}></div>
      </div>
      <div className="team-info">
        <div className="team-name">Zulfiqar Parvez Butt</div>
        <div className="team-role">Founder / Owner & CEO</div>
        <p style={{ marginTop: '14px', fontSize: '13.5px', lineHeight: '1.65', color: 'var(--text-dark)', fontFamily: "'Jost', sans-serif", fontWeight: 300, margin: '14px 0 0 0' }}>
          Mr. Zulfiqar holds the title of CEO, playing a pivotal role in delivering business goals with more than 20 years of management experience. His interest in structural details and personal relationships with top multinational leaders make him stand out.
        </p>
      </div>
    </div>
    
    <div className="team-card">
      <div className="team-img" style={{ position: 'relative' }}>
        <img src={farahAvatar} alt="Farah Zulfiqar" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
        <div className="team-img-fill" style={{ opacity: 0.15 }}></div>
      </div>
      <div className="team-info">
        <div className="team-name">Farah Zulfiqar</div>
        <div className="team-role">Director</div>
        <p style={{ marginTop: '14px', fontSize: '13.5px', lineHeight: '1.65', color: 'var(--text-dark)', fontFamily: "'Jost', sans-serif", fontWeight: 300, margin: '14px 0 0 0' }}>
          An artist by training and a home-maker by nature, Farah is well-versed in the art of Interior Decoration and Design, ensuring all Limestone projects are aesthetically pleasing during and after construction.
        </p>
      </div>
    </div>

    <div className="team-card">
      <div className="team-img">
        <div className="team-img-fill"></div>
        <svg viewBox="0 0 240 300" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', opacity: '0.13'}} xmlns="http://www.w3.org/2000/svg"><ellipse cx="120" cy="100" rx="50" ry="55" fill="#febe10"/><rect x="50" y="180" width="140" height="120" rx="70" fill="#febe10"/></svg>
      </div>
      <div className="team-info">
        <div className="team-name">Hassan Raza</div>
        <div className="team-role">Founder & Principal Architect</div>
        <p style={{ marginTop: '14px', fontSize: '12px', lineHeight: '1.6', color: 'var(--text-dark)', fontFamily: "'Jost', sans-serif", fontWeight: 300, margin: '14px 0 0 0' }}>
          Lead architect with over a decade of design experience in modern residential villas and commercial complexes. Hassan blends contemporary aesthetic value with local materials to shape spaces that inspire.
        </p>
      </div>
    </div>

    <div className="team-card">
      <div className="team-img">
        <div className="team-img-fill"></div>
        <svg viewBox="0 0 240 300" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', opacity: '0.13'}} xmlns="http://www.w3.org/2000/svg"><ellipse cx="120" cy="100" rx="50" ry="55" fill="#febe10"/><rect x="50" y="180" width="140" height="120" rx="70" fill="#febe10"/></svg>
      </div>
      <div className="team-info">
        <div className="team-name">Omar Farooq</div>
        <div className="team-role">Senior Structural Engineer</div>
        <p style={{ marginTop: '14px', fontSize: '12px', lineHeight: '1.6', color: 'var(--text-dark)', fontFamily: "'Jost', sans-serif", fontWeight: 300, margin: '14px 0 0 0' }}>
          Registered structural engineer specializing in reinforced concrete framing and seismic compliance. Omar ensures that every structure matches Limestone's rigorous safety standards.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default About
