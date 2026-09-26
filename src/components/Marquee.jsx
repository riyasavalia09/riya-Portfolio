export default function Marquee() {
  const items = [
    'WEB DEVELOPMENT',
    'AI & DATA SCIENCE',
    'CREATIVE CODING',
    'PROBLEM SOLVING',
    'REACT & NODE.JS',
    'FULL STACK SYSTEMS',
    'CLEAN ARCHITECTURE',
    'CONTINUOUS LEARNING',
  ];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        <div className="marquee-item">
          {items.map((item, idx) => (
            <span key={`m1-${idx}`}>
              <span>{item}</span> <span className="marquee-dot">•</span>{' '}
            </span>
          ))}
        </div>
        <div className="marquee-item">
          {items.map((item, idx) => (
            <span key={`m2-${idx}`}>
              <span>{item}</span> <span className="marquee-dot">•</span>{' '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
