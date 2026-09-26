import { Code, Layout, Server, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const categorizedSkills = [
    {
      category: 'Languages',
      icon: <Code size={18} color="var(--dusty-pink)" />,
      items: ['C / C++', 'Python', 'Java', 'JavaScript'],
    },
    {
      category: 'Frontend',
      icon: <Layout size={18} color="var(--dusty-pink)" />,
      items: ['HTML5', 'CSS3', 'Bootstrap', 'React'],
    },
    {
      category: 'Backend',
      icon: <Server size={18} color="var(--dusty-pink)" />,
      items: ['Node.js', 'Express.js', 'Flask', 'Django'],
    },
    {
      category: 'Database',
      icon: <Database size={18} color="var(--dusty-pink)" />,
      items: ['MongoDB', 'MySQL'],
    },
    {
      category: 'Tools & Platforms',
      icon: <Wrench size={18} color="var(--dusty-pink)" />,
      items: ['Git', 'GitHub', 'VS Code'],
    },
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...categorizedSkills, ...categorizedSkills];

  return (
    <section className="skills-marquee-section" id="skills">
      <div className="skills-header-container">
        <span className="section-eyebrow fade-up">03 / CAPABILITIES</span>
        <div className="editorial-reveal-group">
          <div className="editorial-mask-line">
            <h2 className="section-heading-editorial editorial-mask-inner" style={{ marginBottom: 0 }}>
              TECHNICAL
            </h2>
          </div>
          <div className="editorial-mask-line">
            <h2 className="section-heading-editorial editorial-mask-inner" style={{ marginBottom: 0 }}>
              <span className="serif-italic">STACK & TOOLS</span>
            </h2>
          </div>
        </div>
        <p className="fade-up" style={{ fontSize: '0.95rem', color: 'var(--charcoal-muted)', marginTop: '0.75rem', maxWidth: '580px' }}>
          Languages, frameworks, and developer toolchains leveraged to craft responsive interfaces, distributed services, and resilient data engines.
        </p>
      </div>

      {/* Infinite Seamless Scrolling Category Cards Marquee */}
      <div className="skills-cards-marquee-container">
        <div className="skills-cards-marquee-track">
          {marqueeItems.map((cat, idx) => (
            <div
              key={idx}
              className="skill-category-card cursor-interactive"
              data-cursor="STACK"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.1rem' }}>
                {cat.icon}
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--charcoal)' }}>
                  {cat.category}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="skill-pill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
