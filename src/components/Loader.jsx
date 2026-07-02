import React, { useState, useEffect } from 'react'

function Loader({ onFinished }) {
  const [stepClass, setStepClass] = useState('');

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('limestoneIntro');

    if (hasPlayed) {
      // Subsequent visits: instant loader animation
      setStepClass('instant');
      const t1 = setTimeout(() => {
        setStepClass('instant loaded');
        const t2 = setTimeout(() => {
          if (onFinished) onFinished();
        }, 800);
        return () => clearTimeout(t2);
      }, 50);
      return () => clearTimeout(t1);
    } else {
      // First visit: play full introductory sequence
      const startTime = Date.now();
      const minDuration = 4000;

      // Step 1: Crafting Spaces
      const t1 = setTimeout(() => {
        setStepClass('step-1');
      }, 100);

      // Step 2: Defining Architecture
      const t2 = setTimeout(() => {
        setStepClass(prev => prev.includes('loaded') ? prev : 'step-2');
      }, 1300);

      // Step 3: Limestone Constructions title card
      const t3 = setTimeout(() => {
        setStepClass(prev => prev.includes('loaded') ? prev : 'step-3');
      }, 2500);

      // Step 3 Active: Expanding gold line
      const t4 = setTimeout(() => {
        setStepClass(prev => prev.includes('loaded') ? prev : 'step-3 step-3-active');
      }, 2800);

      const finishLoader = () => {
        setStepClass(prev => prev.includes('loaded') ? prev : prev + ' loaded');
        sessionStorage.setItem('limestoneIntro', 'true');
        const tFade = setTimeout(() => {
          if (onFinished) onFinished();
        }, 1300);
        return () => clearTimeout(tFade);
      };

      // Poll loader until minDuration is reached
      let checkTimer;
      const checkAndFinish = () => {
        const elapsed = Date.now() - startTime;
        if (elapsed >= minDuration) {
          finishLoader();
        } else {
          checkTimer = setTimeout(checkAndFinish, 50);
        }
      };

      checkAndFinish();

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        clearTimeout(checkTimer);
      };
    }
  }, [onFinished]);

  return (
    <div id="loader" className={`loader-wrapper ${stepClass}`}>
      <div className="loader-bg-grid">
        <div className="loader-grid-column"></div>
        <div className="loader-grid-column"></div>
        <div className="loader-grid-column"></div>
        <div className="loader-grid-column"></div>
      </div>
      <div className="loader-content">
        {/* Detailed Architectural Building SVG */}
        <svg className="loader-building" viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Ground base */}
          <rect x="0" y="415" width="520" height="5" fill="rgba(254,190,16,0.15)"/>
          {/* Ground reflection line */}
          <rect x="60" y="413" width="400" height="1" fill="rgba(254,190,16,0.08)"/>

          {/* === LEFT WING (shorter) === */}
          <rect x="60" y="230" width="110" height="185" fill="#1a1610" stroke="rgba(254,190,16,0.1)" strokeWidth="0.5"/>
          {/* Left wing cornice */}
          <rect x="55" y="225" width="120" height="8" fill="#211d17" stroke="rgba(254,190,16,0.15)" strokeWidth="0.5"/>
          {/* Left wing top trim */}
          <rect x="62" y="218" width="106" height="7" fill="#1e1a13"/>

          {/* Left wing windows — 7 rows x 3 cols */}
          <rect className="win wr-1" x="73" y="390" width="20" height="14" rx="1"/>
          <rect className="win wr-1" x="101" y="390" width="20" height="14" rx="1"/>
          <rect className="win wr-1" x="129" y="390" width="20" height="14" rx="1"/>
          <rect className="win wr-2" x="73" y="368" width="20" height="14" rx="1"/>
          <rect className="win wr-2" x="101" y="368" width="20" height="14" rx="1"/>
          <rect className="win wr-2" x="129" y="368" width="20" height="14" rx="1"/>
          <rect className="win wr-3" x="73" y="346" width="20" height="14" rx="1"/>
          <rect className="win wr-3" x="101" y="346" width="20" height="14" rx="1"/>
          <rect className="win wr-3" x="129" y="346" width="20" height="14" rx="1"/>
          <rect className="win wr-4" x="73" y="324" width="20" height="14" rx="1"/>
          <rect className="win wr-4" x="101" y="324" width="20" height="14" rx="1"/>
          <rect className="win wr-4" x="129" y="324" width="20" height="14" rx="1"/>
          <rect className="win wr-5" x="73" y="302" width="20" height="14" rx="1"/>
          <rect className="win wr-5" x="101" y="302" width="20" height="14" rx="1"/>
          <rect className="win wr-5" x="129" y="302" width="20" height="14" rx="1"/>
          <rect className="win wr-6" x="73" y="280" width="20" height="14" rx="1"/>
          <rect className="win wr-6" x="101" y="280" width="20" height="14" rx="1"/>
          <rect className="win wr-6" x="129" y="280" width="20" height="14" rx="1"/>
          <rect className="win wr-7" x="73" y="258" width="20" height="14" rx="1"/>
          <rect className="win wr-7" x="101" y="258" width="20" height="14" rx="1"/>
          <rect className="win wr-7" x="129" y="258" width="20" height="14" rx="1"/>

          {/* === RIGHT WING (shorter) === */}
          <rect x="350" y="230" width="110" height="185" fill="#1a1610" stroke="rgba(254,190,16,0.1)" strokeWidth="0.5"/>
          {/* Right wing cornice */}
          <rect x="345" y="225" width="120" height="8" fill="#211d17" stroke="rgba(254,190,16,0.15)" strokeWidth="0.5"/>
          <rect x="352" y="218" width="106" height="7" fill="#1e1a13"/>

          {/* Right wing windows — 7 rows x 3 cols */}
          <rect className="win wr-1" x="363" y="390" width="20" height="14" rx="1"/>
          <rect className="win wr-1" x="391" y="390" width="20" height="14" rx="1"/>
          <rect className="win wr-1" x="419" y="390" width="20" height="14" rx="1"/>
          <rect className="win wr-2" x="363" y="368" width="20" height="14" rx="1"/>
          <rect className="win wr-2" x="391" y="368" width="20" height="14" rx="1"/>
          <rect className="win wr-2" x="419" y="368" width="20" height="14" rx="1"/>
          <rect className="win wr-3" x="363" y="346" width="20" height="14" rx="1"/>
          <rect className="win wr-3" x="391" y="346" width="20" height="14" rx="1"/>
          <rect className="win wr-3" x="419" y="346" width="20" height="14" rx="1"/>
          <rect className="win wr-4" x="363" y="324" width="20" height="14" rx="1"/>
          <rect className="win wr-4" x="391" y="324" width="20" height="14" rx="1"/>
          <rect className="win wr-4" x="419" y="324" width="20" height="14" rx="1"/>
          <rect className="win wr-5" x="363" y="302" width="20" height="14" rx="1"/>
          <rect className="win wr-5" x="391" y="302" width="20" height="14" rx="1"/>
          <rect className="win wr-5" x="419" y="302" width="20" height="14" rx="1"/>
          <rect className="win wr-6" x="363" y="280" width="20" height="14" rx="1"/>
          <rect className="win wr-6" x="391" y="280" width="20" height="14" rx="1"/>
          <rect className="win wr-6" x="419" y="280" width="20" height="14" rx="1"/>
          <rect className="win wr-7" x="363" y="258" width="20" height="14" rx="1"/>
          <rect className="win wr-7" x="391" y="258" width="20" height="14" rx="1"/>
          <rect className="win wr-7" x="419" y="258" width="20" height="14" rx="1"/>

          {/* === MAIN TOWER === */}
          <rect x="160" y="50" width="200" height="365" fill="#201c16" stroke="rgba(254,190,16,0.12)" strokeWidth="0.5"/>
          {/* Tower mid-section shadow */}
          <rect x="160" y="200" width="200" height="2" fill="rgba(0,0,0,0.3)"/>
          {/* Tower cornice */}
          <rect x="153" y="42" width="214" height="12" fill="#2a251d" stroke="rgba(254,190,16,0.2)" strokeWidth="0.8"/>
          {/* Tower upper accent ledge */}
          <rect x="162" y="36" width="196" height="6" fill="#252019"/>

          {/* Tower top step-back */}
          <rect x="185" y="12" width="150" height="30" fill="#2a251d" stroke="rgba(254,190,16,0.18)" strokeWidth="0.6"/>
          {/* Spire base */}
          <rect x="253" y="2" width="14" height="12" fill="#febe10" opacity="0.7"/>
          {/* Spire tip light */}
          <circle className="spire-light" cx="260" cy="2" r="3" fill="#febe10" opacity="0.9"/>

          {/* Vertical tower pilasters (decorative columns) */}
          <rect x="170" y="50" width="4" height="365" fill="rgba(254,190,16,0.06)"/>
          <rect x="214" y="50" width="4" height="365" fill="rgba(254,190,16,0.04)"/>
          <rect x="258" y="50" width="4" height="365" fill="rgba(254,190,16,0.04)"/>
          <rect x="302" y="50" width="4" height="365" fill="rgba(254,190,16,0.04)"/>
          <rect x="346" y="50" width="4" height="365" fill="rgba(254,190,16,0.06)"/>

          {/* Tower windows — 5 cols x 10 rows */}
          <rect className="win wr-1" x="174" y="388" width="28" height="20" rx="1"/>
          <rect className="win wr-1" x="218" y="388" width="28" height="20" rx="1"/>
          <rect className="win wr-1" x="262" y="388" width="28" height="20" rx="1"/>
          <rect className="win wr-1" x="306" y="388" width="28" height="20" rx="1"/>
          <rect className="win wr-2" x="174" y="362" width="28" height="20" rx="1"/>
          <rect className="win wr-2" x="218" y="362" width="28" height="20" rx="1"/>
          <rect className="win wr-2" x="262" y="362" width="28" height="20" rx="1"/>
          <rect className="win wr-2" x="306" y="362" width="28" height="20" rx="1"/>
          <rect className="win wr-3" x="174" y="336" width="28" height="20" rx="1"/>
          <rect className="win wr-3" x="218" y="336" width="28" height="20" rx="1"/>
          <rect className="win wr-3" x="262" y="336" width="28" height="20" rx="1"/>
          <rect className="win wr-3" x="306" y="336" width="28" height="20" rx="1"/>
          <rect className="win wr-4" x="174" y="310" width="28" height="20" rx="1"/>
          <rect className="win wr-4" x="218" y="310" width="28" height="20" rx="1"/>
          <rect className="win wr-4" x="262" y="310" width="28" height="20" rx="1"/>
          <rect className="win wr-4" x="306" y="310" width="28" height="20" rx="1"/>
          <rect className="win wr-5" x="174" y="284" width="28" height="20" rx="1"/>
          <rect className="win wr-5" x="218" y="284" width="28" height="20" rx="1"/>
          <rect className="win wr-5" x="262" y="284" width="28" height="20" rx="1"/>
          <rect className="win wr-5" x="306" y="284" width="28" height="20" rx="1"/>
          <rect className="win wr-6" x="174" y="258" width="28" height="20" rx="1"/>
          <rect className="win wr-6" x="218" y="258" width="28" height="20" rx="1"/>
          <rect className="win wr-6" x="262" y="258" width="28" height="20" rx="1"/>
          <rect className="win wr-6" x="306" y="258" width="28" height="20" rx="1"/>
          <rect className="win wr-7" x="174" y="232" width="28" height="20" rx="1"/>
          <rect className="win wr-7" x="218" y="232" width="28" height="20" rx="1"/>
          <rect className="win wr-7" x="262" y="232" width="28" height="20" rx="1"/>
          <rect className="win wr-7" x="306" y="232" width="28" height="20" rx="1"/>
          <rect className="win wr-8" x="174" y="206" width="28" height="20" rx="1"/>
          <rect className="win wr-8" x="218" y="206" width="28" height="20" rx="1"/>
          <rect className="win wr-8" x="262" y="206" width="28" height="20" rx="1"/>
          <rect className="win wr-8" x="306" y="206" width="28" height="20" rx="1"/>
          <rect className="win wr-9" x="174" y="180" width="28" height="20" rx="1"/>
          <rect className="win wr-9" x="218" y="180" width="28" height="20" rx="1"/>
          <rect className="win wr-9" x="262" y="180" width="28" height="20" rx="1"/>
          <rect className="win wr-9" x="306" y="180" width="28" height="20" rx="1"/>
          <rect className="win wr-10" x="174" y="154" width="28" height="20" rx="1"/>
          <rect className="win wr-10" x="218" y="154" width="28" height="20" rx="1"/>
          <rect className="win wr-10" x="262" y="154" width="28" height="20" rx="1"/>
          <rect className="win wr-10" x="306" y="154" width="28" height="20" rx="1"/>

          {/* Lobby entrance */}
          <rect x="218" y="380" width="84" height="35" fill="#0e0c08" stroke="rgba(254,190,16,0.2)" strokeWidth="0.8" rx="1"/>
          <rect x="256" y="380" width="8" height="35" fill="rgba(254,190,16,0.08)"/>
          {/* Lobby door frame */}
          <rect x="218" y="380" width="84" height="3" fill="rgba(254,190,16,0.3)"/>

          {/* Ground floor horizontal band */}
          <rect x="60" y="406" width="400" height="9" fill="#18150f" stroke="rgba(254,190,16,0.1)" strokeWidth="0.4"/>

          {/* === CONSTRUCTION ELEMENTS === */}
          {/* 1. Drafting Dimensions and Alignment Guides */}
          <g className="loader-drafting" stroke="rgba(254,190,16,0.18)" strokeWidth="0.8">
            <line className="dim-line" x1="25" y1="50" x2="25" y2="415"/>
            <line x1="20" y1="50" x2="30" y2="50"/>
            <line x1="20" y1="415" x2="30" y2="415"/>
            <text x="17" y="240" fill="rgba(254,190,16,0.3)" fontFamily="Josefin Sans" fontSize="8" textAnchor="middle" transform="rotate(-90 17 240)" letterSpacing="1">H: 415.00m</text>

            <line className="dim-line" x1="60" y1="28" x2="460" y2="28"/>
            <line x1="60" y1="23" x2="60" y2="33"/>
            <line x1="460" y1="23" x2="460" y2="33"/>
            <text x="260" y="20" fill="rgba(254,190,16,0.3)" fontFamily="Josefin Sans" fontSize="8" textAnchor="middle" letterSpacing="1">W: 400.00m</text>

            <path d="M15,30 h10 M20,25 v10"/>
            <path d="M495,30 h10 M500,25 v10"/>
          </g>

          {/* 2. Left Wing Scaffolding */}
          <g className="loader-scaffolding" stroke="rgba(254,190,16,0.25)" strokeWidth="0.8" fill="none">
            <line x1="65" y1="230" x2="65" y2="415"/>
            <line x1="100" y1="230" x2="100" y2="415"/>
            <line x1="135" y1="230" x2="135" y2="415"/>
            <line x1="165" y1="230" x2="165" y2="415"/>

            <line x1="60" y1="250" x2="170" y2="250"/>
            <line x1="60" y1="285" x2="170" y2="285"/>
            <line x1="60" y1="320" x2="170" y2="320"/>
            <line x1="60" y1="355" x2="170" y2="355"/>
            <line x1="60" y1="390" x2="170" y2="390"/>

            <line x1="65" y1="390" x2="100" y2="355"/>
            <line x1="100" y1="390" x2="65" y2="355"/>
            <line x1="100" y1="320" x2="135" y2="285"/>
            <line x1="135" y1="320" x2="100" y2="285"/>
            <line x1="135" y1="250" x2="165" y2="285"/>

            <g fill="var(--gold)" opacity="0.6">
              <circle className="scaff-node" cx="65" cy="250" r="1.5"/>
              <circle className="scaff-node" cx="100" cy="250" r="1.5"/>
              <circle className="scaff-node" cx="135" cy="250" r="1.5"/>
              <circle className="scaff-node" cx="65" cy="285" r="1.5"/>
              <circle className="scaff-node" cx="100" cy="285" r="1.5"/>
              <circle className="scaff-node" cx="135" cy="285" r="1.5"/>
              <circle className="scaff-node" cx="65" cy="320" r="1.5"/>
              <circle className="scaff-node" cx="100" cy="320" r="1.5"/>
              <circle className="scaff-node" cx="135" cy="320" r="1.5"/>
              <circle className="scaff-node" cx="65" cy="355" r="1.5"/>
              <circle className="scaff-node" cx="100" cy="355" r="1.5"/>
              <circle className="scaff-node" cx="135" cy="355" r="1.5"/>
              <circle className="scaff-node" cx="65" cy="390" r="1.5"/>
              <circle className="scaff-node" cx="100" cy="390" r="1.5"/>
              <circle className="scaff-node" cx="135" cy="390" r="1.5"/>
            </g>
          </g>

          {/* 3. Right Side Tower Crane */}
          <g className="loader-crane" stroke="rgba(254,190,16,0.3)" strokeWidth="0.8" fill="none">
            <line x1="476" y1="35" x2="476" y2="415"/>
            <line x1="484" y1="35" x2="484" y2="415"/>
            <path d="M476,415 l8,-20 M484,395 l-8,-20 M476,375 l8,-20 M484,355 l-8,-20 M476,335 l8,-20 M484,315 l-8,-20 M476,295 l8,-20 M484,275 l-8,-20 M476,255 l8,-20 M484,235 l-8,-20 M476,215 l8,-20 M484,195 l-8,-20 M476,175 l8,-20 M484,155 l-8,-20 M476,135 l8,-20 M484,115 l-8,-20 M476,95 l8,-20 M484,75 l-8,-20 M476,55 l8,-20 M484,35 l-8,-10"/>

            <rect x="473" y="23" width="14" height="12" fill="#201c16" stroke="var(--gold)" strokeWidth="0.6"/>
            <circle className="crane-light" cx="474" cy="27" r="1.5" fill="#febe10"/>

            <polygon points="480,8 476,23 484,23" fill="#201c16" stroke="var(--gold)" strokeWidth="0.6"/>

            <line x1="473" y1="23" x2="210" y2="23"/>
            <line x1="473" y1="16" x2="210" y2="23"/>
            <path d="M473,23 l-20,-7 M453,23 l-20,-7 M433,23 l-20,-7 M413,23 l-20,-7 M393,23 l-20,-7 M373,23 l-20,-7 M353,23 l-20,-7 M333,23 l-20,-7 M313,23 l-20,-7 M293,23 l-20,-7 M273,23 l-20,-7 M253,23 l-20,-7 M233,23 l-20,-7"/>

            <line x1="487" y1="23" x2="512" y2="23"/>
            <line x1="487" y1="18" x2="512" y2="23"/>
            <line x1="500" y1="23" x2="500" y2="18"/>
            <rect x="502" y="21" width="8" height="6" fill="#febe10" opacity="0.7"/>

            <line x1="480" y1="8" x2="330" y2="23" strokeWidth="0.5"/>
            <line x1="480" y1="8" x2="505" y2="23" strokeWidth="0.5"/>

            <g className="loader-hoist-assembly">
              <rect x="275" y="22" width="10" height="3" fill="#febe10"/>
              <line x1="280" y1="25" x2="280" y2="110" stroke="var(--gold)" strokeWidth="1.2" strokeDasharray="2 2"/>
              <path d="M278,110 q2,4 2,0 t2,0" stroke="var(--gold)" strokeWidth="1.2"/>
              
              <line x1="280" y1="110" x2="250" y2="123" stroke="var(--gold)" strokeWidth="0.8"/>
              <line x1="280" y1="110" x2="310" y2="123" stroke="var(--gold)" strokeWidth="0.8"/>

              <g className="loader-girder">
                <line x1="240" y1="123" x2="320" y2="123" stroke="var(--gold)" strokeWidth="1.5"/>
                <line x1="240" y1="131" x2="320" y2="131" stroke="var(--gold)" strokeWidth="1.5"/>
                <path d="M240,123 l10,8 l10,-8 l10,8 l10,-8 l10,8 l10,-8 l10,8 l10,-8 l10,8" stroke="var(--gold)" strokeWidth="0.8"/>
                <line x1="240" y1="123" x2="240" y2="131" stroke="var(--gold)" strokeWidth="1.5"/>
                <line x1="320" y1="123" x2="320" y2="131" stroke="var(--gold)" strokeWidth="1.5"/>
              </g>
            </g>
          </g>
        </svg>

        {/* Dynamic Text Overlays for Loader Stages */}
        <div className="intro-text-1">
          <div className="intro-phrase">Crafting <span>Spaces</span></div>
        </div>
        <div className="intro-text-2">
          <div className="intro-phrase">Defining <span>Architecture</span></div>
        </div>
        <div className="intro-text-3">
          <div className="loader-logo-text">Limestone</div>
          <div className="loader-logo-sub">Constructions</div>
          <div className="loader-line-container">
            <div className="loader-line"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
