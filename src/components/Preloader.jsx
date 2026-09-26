import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const loaderRef = useRef(null);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 9) + 4;
      if (count >= 100) {
        count = 100;
        setPercent(100);
        clearInterval(interval);

        setTimeout(() => {
          if (loaderRef.current) {
            gsap.to(loaderRef.current, {
              yPercent: -100,
              duration: 0.9,
              ease: 'power4.inOut',
              onComplete: () => {
                if (loaderRef.current) {
                  loaderRef.current.style.display = 'none';
                }
                if (onComplete) onComplete();
              },
            });
          }
        }, 250);
      } else {
        setPercent(count);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div id="loader" ref={loaderRef}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontWeight: 700, letterSpacing: '0.05em', fontSize: '0.85rem', color: 'var(--charcoal)' }}>
          PORTFOLIO '26
        </span>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dusty-pink)', fontWeight: 600 }}>
          RIYA SAVALIYA
        </span>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h1 className="serif-italic" style={{ fontSize: 'clamp(3rem, 15vw, 6rem)', color: 'var(--charcoal)', lineHeight: 1 }}>
          Loading
        </h1>
        <div id="loaderCounter" style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--charcoal)', marginTop: '0.5rem' }}>
          {percent}%
        </div>
      </div>

      <div>
        <div className="loader-progress-track">
          <div className="loader-progress-bar" id="loaderBar" style={{ width: `${percent}%` }}></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--charcoal-muted)', marginTop: '0.6rem', letterSpacing: '0.04em' }}>
          <span>Crafting Experience</span>
          <span>Inter</span>
        </div>
      </div>
    </div>
  );
}
