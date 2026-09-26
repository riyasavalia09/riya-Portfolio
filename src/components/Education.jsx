import { GraduationCap, Award, BookOpen, CheckCircle, Clock } from 'lucide-react';

export default function Education() {
  const semesters = [
    { sem: 'Semester 1', status: 'Completed', spi: 'SPI: 7.00', current: false },
    { sem: 'Semester 2', status: 'Completed', spi: 'SPI: 6.85', current: false },
    { sem: 'Semester 3', status: 'Completed', spi: 'SPI: 8.17', current: false },
    { sem: 'Semester 4', status: 'Completed', spi: 'SPI: 7.80', current: false },
    { sem: 'Semester 5', status: 'Currently Running', spi: 'Ongoing', current: true },
  ];

  return (
    <section className="education-section" id="education">
      <span className="section-eyebrow fade-up">02 / ACADEMICS</span>

      <div className="editorial-reveal-group" style={{ marginBottom: '2rem' }}>
        <div className="editorial-mask-line">
          <h2 className="section-heading-editorial editorial-mask-inner" style={{ marginBottom: 0 }}>
            ACADEMIC
          </h2>
        </div>
        <div className="editorial-mask-line">
          <h2 className="section-heading-editorial editorial-mask-inner" style={{ marginBottom: 0 }}>
            <span className="serif-italic">TIMELINE</span>
          </h2>
        </div>
      </div>

      {/* University Main Card */}
      <div className="education-card-main fade-up">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <GraduationCap size={24} color="var(--dusty-pink)" />
              <h3 className="edu-institution">LJ University</h3>
            </div>
            <p className="edu-degree">B.Tech — Computer Science Engineering</p>
            <span className="edu-duration">2024 — 2028</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--blush)', padding: '0.4rem 0.9rem', borderRadius: '20px', border: '1px solid var(--border-subtle)' }}>
            <BookOpen size={14} color="var(--charcoal)" />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Undergraduate Degree
            </span>
          </div>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--charcoal-muted)', marginBottom: '0.75rem' }}>
            Semester Progress
          </p>
          <div className="semester-grid">
            {semesters.map((s, idx) => (
              <div
                key={idx}
                className={`semester-card ${s.current ? 'current' : 'completed'} cursor-interactive`}
                data-cursor={s.current ? 'RUNNING' : 'DONE'}
              >
                <div>
                  <div className="sem-title">{s.sem}</div>
                  <div className={`sem-status ${s.current ? 'running' : ''}`}>
                    {s.current ? (
                      <>
                        <Clock size={12} /> Currently Running
                      </>
                    ) : (
                      <>
                        <CheckCircle size={12} color="var(--dusty-pink)" /> Completed
                      </>
                    )}
                  </div>
                </div>
                <div className="sem-cpi">{s.spi}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schooling Cards */}
      <div className="fade-up">
        <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--charcoal-muted)', marginBottom: '0.5rem' }}>
          Prior Academic Milestones
        </p>
        <div className="school-grid">
          <div className="school-card cursor-interactive" data-cursor="12TH">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <Award size={18} color="var(--dusty-pink)" />
                <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--charcoal)' }}>
                  Higher Secondary Education (12th)
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--charcoal-muted)' }}>
                Senior Secondary Board Examination
              </p>
            </div>
            <div className="school-score">85.66%</div>
          </div>

          <div className="school-card cursor-interactive" data-cursor="10TH">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <Award size={18} color="var(--dusty-pink)" />
                <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--charcoal)' }}>
                  Secondary School Certificate (10th)
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--charcoal-muted)' }}>
                Secondary Board Examination
              </p>
            </div>
            <div className="school-score">90.66%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
