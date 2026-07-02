import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', 'sending'

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    
    const form = e.target;
    const formData = new FormData(form);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
    .then((response) => {
      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    })
    .catch((error) => {
      setSubmitStatus('error');
    });
  };

  return (
    <>
      <div className="contact-layout">
  <div className="contact-info-panel">
    <div className="contact-ambient"></div>
    <div className="contact-info-content">
      <div className="contact-info-eyebrow"><div className="eyebrow-line"></div><span>Get In Touch</span></div>
      <h1 className="contact-info-title">Let's Build<em>Something</em>Together</h1>
      <p className="contact-info-desc">Whether you have a fully formed vision or just a plot of land and a dream — we want to hear from you. Our team responds within 24 hours.</p>
      <div className="contact-details">
        <div className="contact-detail-item">
          <div className="cdi-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
          <div><div className="cdi-label">Head Office</div><div className="cdi-value">Office 103, 1st Floor, Islamabad Arcade 1,<br />B1 Commercial, B-17, Islamabad, 44000</div></div>
        </div>
        <div className="contact-detail-item">
          <div className="cdi-icon"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.27-.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.07V16.92z"/></svg></div>
          <div><div className="cdi-label">Phone & Mobile</div><div className="cdi-value">+92-51-5444562<br />+92 333 8206263<br />+92 300 8206263</div></div>
        </div>
        <div className="contact-detail-item">
          <div className="cdi-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
          <div><div className="cdi-label">Email</div><div className="cdi-value">info@limestoneconstructions.com</div></div>
        </div>
        <div className="contact-detail-item">
          <div className="cdi-icon"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div>
          <div><div className="cdi-label">Office Hours</div><div className="cdi-value">Mon – Fri: 8:00 AM – 7:00 PM<br />Sat – Sun: Closed</div></div>
        </div>
      </div>
    </div>
    <div className="contact-social">
      <a href="https://www.facebook.com/LimestoneConstructions/" target="_blank" rel="noopener noreferrer" title="Facebook">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      </a>
      <a href="https://www.instagram.com/limestoneconstructions" target="_blank" rel="noopener noreferrer" title="Instagram">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/company/limestone-constructions/about/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      </a>
    </div>
  </div>

  <div className="contact-form-panel">
    <div className="form-header">
      <div className="section-tag"><div className="tag-line"></div><span>Send A Message</span></div>
      <h2>Tell Us About<em>Your Project</em></h2>
    </div>
    <form id="contact-form" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">First Name</label>
          <input type="text" name="first_name" className="form-input" placeholder="Ahmed" required />
        </div>
        <div className="form-group">
          <label className="form-label">Last Name</label>
          <input type="text" name="last_name" className="form-input" placeholder="Sheikh" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input type="email" name="email" className="form-input" placeholder="ahmed@example.com" required />
        </div>
        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input type="tel" name="phone" className="form-input" placeholder="+92 300 000 0000" />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Service Required</label>
        <select name="service" className="form-input">
          <option value="">Select a service...</option>
          <option>Residential Design</option>
          <option>Commercial Architecture</option>
          <option>Construction Management</option>
          <option>Interior Design</option>
          <option>Project Management</option>
          <option>Renovation & Fit-Out</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Project Budget (PKR)</label>
        <select name="budget" className="form-input">
          <option value="">Select a range...</option>
          <option>Under 1 Crore</option>
          <option>1 – 3 Crore</option>
          <option>3 – 7 Crore</option>
          <option>7 – 15 Crore</option>
          <option>15 Crore +</option>
          <option>TBD / Not Sure</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Tell us about your project</label>
        <textarea name="message" className="form-input" placeholder="Describe your vision, location, plot size, or any specific requirements..."></textarea>
      </div>
      <button type="submit" className="form-submit">Send Message <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
      <div className="success-msg" id="success-msg">&#10003; Message sent! We will be in touch within 24 hours.</div>
    </form>
  </div>
</div>

<section className="offices">
  <div className="offices-header">
    <div className="section-tag" style={{justifyContent: 'center'}}><div className="tag-line"></div><span>Our Offices</span></div>
    <h2 className="section-title" style={{textAlign: 'center'}}>Where To<em>Find Us</em></h2>
  </div>
  <div className="offices-grid" style={{ display: 'flex', justifyContent: 'center', background: 'none' }}>
    <div className="office-card" style={{ maxWidth: '480px', width: '100%', border: '1px solid var(--border)', boxShadow: '0 8px 30px rgba(0,0,0,0.03)' }}>
      <div className="office-city">Islamabad</div>
      <div className="office-type">Headquarters</div>
      <div className="office-addr">Office 103, 1st Floor, Islamabad Arcade 1,<br />B1 Commercial, B-17, Islamabad, 44000</div>
      <div className="office-divider"></div>
      <div className="office-addr">
        +92-51-5444562<br />
        +92 333 8206263<br />
        +92 300 8206263<br />
        info@limestoneconstructions.com
      </div>
    </div>
  </div>
</section>
      
      {/* Dynamic Submit Status Overlays */}
      {submitStatus === 'success' && (
        <div style={{
          position: 'fixed', bottom: '30px', right: '30px', 
          background: '#febe10', color: '#1a1612', padding: '16px 28px',
          fontFamily: "'Josefin Sans', sans-serif", fontSize: '13px',
          fontWeight: 600, letterSpacing: '1px', zIndex: 1000,
          boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
        }}>
          MESSAGE SENT SUCCESSFULLY! WE WILL CONTACT YOU SOON.
        </div>
      )}
      {submitStatus === 'error' && (
        <div style={{
          position: 'fixed', bottom: '30px', right: '30px', 
          background: '#d9534f', color: '#fff', padding: '16px 28px',
          fontFamily: "'Josefin Sans', sans-serif", fontSize: '13px',
          fontWeight: 600, letterSpacing: '1px', zIndex: 1000,
          boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
        }}>
          ERROR SENDING MESSAGE. PLEASE TRY AGAIN LATER.
        </div>
      )}
      {submitStatus === 'sending' && (
        <div style={{
          position: 'fixed', bottom: '30px', right: '30px', 
          background: '#27221b', color: '#fff', padding: '16px 28px',
          fontFamily: "'Josefin Sans', sans-serif", fontSize: '13px',
          fontWeight: 600, letterSpacing: '1px', zIndex: 1000,
          boxShadow: '0 8px 30px rgba(0,0,0,0.15)', border: '1px solid rgba(254,190,16,0.2)'
        }}>
          SENDING MESSAGE...
        </div>
      )}
    </>
  )
}

export default Contact
