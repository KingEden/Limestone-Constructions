import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Services() {
  const [area, setArea] = useState(3000);
  const [tier, setTier] = useState('premium');
  const [addons, setAddons] = useState([]);

  const handleAreaChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      setArea(val);
    } else {
      setArea(0);
    }
  };

  const toggleAddon = (addon) => {
    setAddons(prev => 
      prev.includes(addon) ? prev.filter(a => a !== addon) : [...prev, addon]
    );
  };

  const calculateTotal = () => {
    const rates = {
      premium: 4500,
      elite: 6500,
      signature: 9500
    };
    const addonRates = {
      smart: 350,
      solar: 550,
      interior: 1200
    };
    
    const baseRate = rates[tier] || 4500;
    const addonSum = addons.reduce((sum, current) => sum + (addonRates[current] || 0), 0);
    
    return area * (baseRate + addonSum);
  };

  return (
    <>
      <section className="page-hero">
  <div className="page-hero-grid"></div>
  <div className="page-hero-circle"></div>
  <div className="page-hero-content">
    <div className="page-eyebrow">
      <span className="eyebrow-badge-prefix">■</span>
      <span>What We Do · Full Spectrum</span>
    </div>
    <h1 className="page-title">
      Services
      <span className="line-gold">Crafted For</span>
      Every Vision
    </h1>
    <p className="page-subtitle">From architectural concept to construction completion, we offer an integrated suite of services that covers every stage of your build journey.</p>
  </div>
</section>

<section className="services-intro">
  <div>
    <div className="section-tag"><div className="tag-line"></div><span>Our Expertise</span></div>
    <h2 className="section-title">One Partner.<em>Every Stage.</em></h2>
    <p className="section-body">Most firms hand off between design and construction. We don't. Limestone Constructions provides seamless end-to-end service — so your project never loses momentum, context, or quality between phases.</p>
    <p className="section-body">Our 50-strong team includes registered architects, licensed engineers, interior designers, project managers, and site supervisors — all under one roof, all collaborating toward your vision.</p>
  </div>
  <div style={{background: 'var(--earth-dark)', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden'}}>
    <div style={{position: 'absolute', inset: '0', opacity: '0.05', backgroundImage: 'repeating-linear-gradient(90deg, #fff 0 1px, transparent 1px 40px), repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 40px)'}}></div>
    <span style={{fontFamily: 'Josefin Sans,sans-serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', display: 'block'}}>Design philosophy</span>
    <p style={{fontFamily: 'Jost,sans-serif', fontSize: '16px', fontWeight: '300', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', margin: '0'}}>
      “Details are not the details. They make the design.”
    </p>
    <span style={{fontFamily: 'Josefin Sans,sans-serif', fontSize: '11px', color: '#fff', marginTop: '16px', display: 'block', fontWeight: '600'}}>— Charles Eames</span>
  </div>
</section>

<section className="services-vision" style={{ background: 'var(--cream)', padding: '80px 5%', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
  <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
    <div className="section-tag" style={{ justifyContent: 'center' }}><div className="tag-line"></div><span>Market Vision</span></div>
    <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '24px', textTransform: 'uppercase' }}>Forward-Thinking<em>Market Vision</em></h2>
    <p className="section-body" style={{ fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', maxWidth: '800px', margin: '0 auto', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
      Limestone Constructions is a visionary company that commits to service excellence, by providing the clients with the right knowledge and leads in the real-estate sector of Pakistan. Our experienced personnel, strive to transcend the expectation and demands set by our clients to build a long-term commitment.
    </p>
  </div>
</section>

<section className="services-main">
  <div className="services-grid-full">
    <div className="svc-card">
      <div className="svc-num">01</div>
      <div className="svc-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
      <div className="svc-title">Residential Design</div>
      <p className="svc-desc">We create homes that reflect who you are. From compact 1-kanal plots to sprawling 4-kanal estates, every residential project receives the same meticulous design attention.</p>
      <ul className="svc-features">
        <li>Concept development & master planning</li>
        <li>Architectural drawings & 3D visualisations</li>
        <li>Landscape & exterior design</li>
        <li>Smart home integration planning</li>
      </ul>
      <Link to="/contact" className="svc-link">Enquire about this service &#8594;</Link>
    </div>
    <div className="svc-card">
      <div className="svc-num">02</div>
      <div className="svc-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div>
      <div className="svc-title">Commercial Architecture</div>
      <p className="svc-desc">Offices, retail spaces, and commercial towers built to maximise function, footfall, and brand presence. We understand that commercial spaces are investments — we build to ROI.</p>
      <ul className="svc-features">
        <li>Mixed-use & high-rise design</li>
        <li>Retail & hospitality architecture</li>
        <li>Office interior planning</li>
        <li>Building information modelling (BIM)</li>
      </ul>
      <Link to="/contact" className="svc-link">Enquire about this service &#8594;</Link>
    </div>
    <div className="svc-card">
      <div className="svc-num">03</div>
      <div className="svc-icon"><svg viewBox="0 0 24 24"><path d="M2 20h20M4 20V10l8-8 8 8v10"/><path d="M10 20v-6h4v6"/></svg></div>
      <div className="svc-title">Construction Management</div>
      <p className="svc-desc">Our on-site teams supervise every phase of construction — from groundbreaking to final handover — ensuring structural integrity, quality control, and schedule adherence.</p>
      <ul className="svc-features">
        <li>Site supervision & quality control</li>
        <li>Procurement & contractor management</li>
        <li>Progress reporting & documentation</li>
        <li>Safety compliance & risk management</li>
      </ul>
      <Link to="/contact" className="svc-link">Enquire about this service &#8594;</Link>
    </div>
    <div className="svc-card">
      <div className="svc-num">04</div>
      <div className="svc-icon"><svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg></div>
      <div className="svc-title">Interior Design</div>
      <p className="svc-desc">Spaces that speak before words do. Our interior design team crafts environments that balance aesthetic beauty with practical living — for both residential and commercial clients.</p>
      <ul className="svc-features">
        <li>Space planning & layout optimisation</li>
        <li>Material, colour & furniture selection</li>
        <li>Custom joinery & millwork design</li>
        <li>Lighting design & ambience</li>
      </ul>
      <Link to="/contact" className="svc-link">Enquire about this service &#8594;</Link>
    </div>
    <div className="svc-card">
      <div className="svc-num">05</div>
      <div className="svc-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
      <div className="svc-title">Project Management</div>
      <p className="svc-desc">Complex projects demand expert coordination. Our PMs keep all trades, timelines, and budgets aligned — acting as your single point of accountability from day one to handover.</p>
      <ul className="svc-features">
        <li>Full lifecycle project oversight</li>
        <li>Budget monitoring & cost control</li>
        <li>Stakeholder coordination</li>
        <li>Regulatory approvals & permits</li>
      </ul>
      <Link to="/contact" className="svc-link">Enquire about this service &#8594;</Link>
    </div>
    <div className="svc-card">
      <div className="svc-num">06</div>
      <div className="svc-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>
      <div className="svc-title">Renovations & Fit-Out</div>
      <p className="svc-desc">Transform existing spaces without the cost of a ground-up build. Our renovation team breathes new life into aging structures, combining modern aesthetics with preserved character.</p>
      <ul className="svc-features">
        <li>Structural assessment & remediation</li>
        <li>Full interior gut & renovation</li>
        <li>Commercial fit-out & tenant improvements</li>
        <li>Heritage building restoration</li>
      </ul>
      <Link to="/contact" className="svc-link">Enquire about this service &#8594;</Link>
    </div>
    
    <div className="svc-card svc-card-featured">
      <div className="svc-num">07</div>
      <div className="svc-featured-grid">
        <div>
          <div className="svc-icon" style={{ marginBottom: '24px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg>
          </div>
          <div className="svc-title" style={{ fontSize: '24px', marginBottom: '16px' }}>Real Estate Marketing</div>
          <p className="svc-desc" style={{ fontSize: '13px', lineHeight: '1.8', margin: 0 }}>
            Limestone Constructions after being the leading construction company in Pakistan is now ready to spread its wings and offer its valued clients the best marketing & real-estate services. With the current monopoly in the market, we at Limestone construction are thrilled to provide advisory services on buying, selling, and trading across all property sectors to help our clients make wise property decisions. Our company specializes in providing market-leading research which gives our clients in-depth opinions and insights into the market and keeps abreast of erratic real-estate trends.
          </p>
        </div>
        <div className="svc-featured-right">
          <span style={{ fontFamily: 'Josefin Sans,sans-serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px', display: 'block', fontWeight: 600 }}>Our Core Marketing Focus</span>
          <ul className="svc-features" style={{ margin: 0, padding: 0 }}>
            <li style={{ marginBottom: '16px' }}>Wholesome marketing efforts to link the most suitable properties with their rightful owners.</li>
            <li style={{ marginBottom: '16px' }}>Advisory services on buying, selling, and trading across all property sectors.</li>
            <li style={{ marginBottom: '16px' }}>Market-leading research giving in-depth opinions, insights, and trend analysis.</li>
            <li style={{ marginBottom: '0' }}>Customer-focused trading with personal interest in every property traded in Rawalpindi and Islamabad.</li>
          </ul>
          <Link to="/contact" className="svc-link" style={{ marginTop: '28px' }}>Enquire about this service &#8594;</Link>
        </div>
      </div>
    </div>
  </div>
</section>

{/* COST ESTIMATOR */}
<section className="cost-estimator" id="calculator">
  <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
    <div style={{textAlign: 'center', marginBottom: '56px'}}>
      <div className="section-tag"><div className="tag-line"></div><span>Cost Calculator</span></div>
      <h2 className="section-title">Construction Cost & Timeline <em>Estimator</em></h2>
      <p className="section-body" style={{maxWidth: '600px', margin: '0 auto'}}>Get an instant, localized cost estimation and project delivery timeline based on your specific architectural and construction parameters in Islamabad.</p>
    </div>

    <div className="estimator-grid">
      {/* Inputs */}
      <div className="estimator-inputs">
        {/* Project Type */}
        <div className="input-group">
          <label>01. Project Type</label>
          <div className="project-types">
            <button type="button" className="type-btn active" data-type="villa">Modern Villa</button>
            <button type="button" className="type-btn" data-type="commercial">Commercial Complex</button>
            <button type="button" className="type-btn" data-type="apartment">Apartment Block</button>
          </div>
        </div>

        {/* Area Size */}
        <div className="input-group">
          <div className="slider-header">
            <label>02. Built-Up Area (sq. ft.)</label>
            <span className="slider-val" id="area-val">4,500 sq.ft</span>
          </div>
          <input type="range" className="range-slider" id="area-slider" min="1000" max="15000" step="100" value="4500" />
        </div>

        {/* Quality Tier */}
        <div className="input-group">
          <label>03. Construction & Material Quality</label>
          <div className="tier-selector">
            <div className="tier-card active" data-tier="standard">
              <div className="tier-title">Standard</div>
              <div className="tier-rate">Rs. 4,800/sq.ft</div>
              <p style={{fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px', fontWeight: '300', lineHeight: '1.4'}}>Class-A bricks, local cement, standard plumbing & sanitary fittings.</p>
            </div>
            <div className="tier-card" data-tier="premium">
              <div className="tier-title">Premium</div>
              <div className="tier-rate">Rs. 6,500/sq.ft</div>
              <p style={{fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px', fontWeight: '300', lineHeight: '1.4'}}>Branded finishes, imported tiles, premium lighting, structural concrete.</p>
            </div>
            <div className="tier-card" data-tier="luxury">
              <div className="tier-title">Elite / Luxury</div>
              <div className="tier-rate">Rs. 8,500/sq.ft</div>
              <p style={{fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px', fontWeight: '300', lineHeight: '1.4'}}>Limestone travertine facades, smart features, Italian marble, custom joinery.</p>
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="input-group">
          <label>04. Optional Structural & Tech Add-ons</label>
          <div className="addons-grid">
            <label className="addon-label">
              <input type="checkbox" id="add-solar" />
              <span>Solar Energy Grid (10kW)</span>
            </label>
            <label className="addon-label">
              <input type="checkbox" id="add-smart" />
              <span>Smart Home Automation</span>
            </label>
            <label className="addon-label">
              <input type="checkbox" id="add-pool" />
              <span>Landscaping & Swimming Pool</span>
            </label>
            <label className="addon-label">
              <input type="checkbox" id="add-seismic" />
              <span>Seismic/Earthquake Safety Upgrade</span>
            </label>
          </div>
        </div>
      </div>

      {/* Results Display */}
      <div className="estimator-results">
        <h3 className="results-title">Project Estimate Summary</h3>
        
        <div className="result-row">
          <span className="result-label">Structure & Grey Works</span>
          <span className="result-val" id="res-grey">Rs. 0</span>
        </div>
        <div className="result-row">
          <span className="result-label">Finishes & Materials</span>
          <span className="result-val" id="res-finishes">Rs. 0</span>
        </div>
        <div className="result-row">
          <span className="result-label">Add-ons & Systems</span>
          <span className="result-val" id="res-addons">Rs. 0</span>
        </div>
        <div className="result-row">
          <span className="result-label">Architectural & Engineering Fees</span>
          <span className="result-val" id="res-fees">Rs. 0</span>
        </div>
        
        <div className="result-row total">
          <span className="result-label">Estimated Total Budget</span>
          <span className="result-val" id="res-total">Rs. 0</span>
        </div>

        <div className="timeline-display">
          <div className="timeline-title">Estimated Project Timeline</div>
          <div className="timeline-value" id="res-timeline">14 Months</div>
          <div style={{fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '6px', fontWeight: '300', lineHeight: '1.4'}}>Estimated from mobilization to handover under standard weather conditions.</div>
        </div>

        <Link to="/contact?source=estimator" className="btn-calc-cta">
          Discuss Estimate with Engineer
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </div>
  </div>
</section>

<section className="process-strip">
  <div className="process-header">
    <div className="section-tag" style={{justifyContent: 'center'}}><div className="tag-line"></div><span>Our Methodology</span></div>
    <h2 className="section-title" style={{textAlign: 'center', marginBottom: '0'}}>How We<em>Work With You</em></h2>
  </div>
  <div className="process-steps">
    <div className="process-step"><div className="step-num">01</div><div className="step-title">Discovery</div><p className="step-desc">We listen deeply to understand your vision, budget, and timeline before committing a single line to paper.</p></div>
    <div className="process-step"><div className="step-num">02</div><div className="step-title">Design</div><p className="step-desc">Our architects develop concept drawings and 3D visualisations, iterating with you until the design is right.</p></div>
    <div className="process-step"><div className="step-num">03</div><div className="step-title">Approvals</div><p className="step-desc">We handle all regulatory submissions, permit applications, and authority liaisons on your behalf.</p></div>
    <div className="process-step"><div className="step-num">04</div><div className="step-title">Construction</div><p className="step-desc">Our site teams execute with precision under continuous supervision — quality-checked at every milestone.</p></div>
    <div className="process-step"><div className="step-num">05</div><div className="step-title">Handover</div><p className="step-desc">We deliver a snagging-free project with full documentation, warranty support, and ongoing aftercare.</p></div>
  </div>
</section>

<section className="cta-strip">
  <div className="cta-bg"></div>
  <div className="cta-inner">
    <div className="cta-title">Ready to start<span>your project?</span></div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '16px', flexShrink: '0'}}>
      <Link to="/contact" className="btn-dark">Schedule a Consultation <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
      <span style={{fontSize: '13px', color: 'rgba(81,72,53,0.55)', textAlign: 'center'}}>Or call us: <strong style={{color: 'var(--earth-dark)'}}>+92 300 000 0000</strong></span>
    </div>
  </div>
</section>
    </>
  )
}

export default Services
