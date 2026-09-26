import { Briefcase, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <span className="section-eyebrow fade-up">05 / CAREER</span>

      <div className="editorial-reveal-group" style={{ marginBottom: '2rem' }}>
        <div className="editorial-mask-line">
          <h2 className="section-heading-editorial editorial-mask-inner" style={{ marginBottom: 0 }}>
            WORK
          </h2>
        </div>
        <div className="editorial-mask-line">
          <h2 className="section-heading-editorial editorial-mask-inner" style={{ marginBottom: 0 }}>
            <span className="serif-italic">EXPERIENCE</span>
          </h2>
        </div>
      </div>

      <div className="placeholder-notice-box fade-up">
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', background: 'var(--pure-white)', marginBottom: '1rem', border: '1px solid var(--border-subtle)' }}>
          <Briefcase size={22} color="var(--dusty-pink)" />
        </div>
        <h3 className="placeholder-notice-title">Experience & Internship Portfolio</h3>
        <p className="placeholder-notice-text" style={{ maxWidth: '480px', margin: '0 auto 1.2rem' }}>
          Actively building project experience in Full Stack Web Development and AI. Professional internship and industrial training records will be updated here.
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 600, color: 'var(--charcoal)', background: 'var(--pure-white)', padding: '0.4rem 0.9rem', borderRadius: '20px', border: '1px solid var(--border-subtle)' }}>
          <Sparkles size={13} color="var(--dusty-pink)" />
          <span>Open to Software Engineering & Full Stack Internships</span>
        </div>
      </div>
    </section>
  );
}
