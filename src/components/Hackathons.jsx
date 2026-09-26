import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Hackathons() {
  const demoHackathons = [
    {
      name: 'Smart University Sprint Hackathon (Demo)',
      organizer: 'LJ Innovation & Incubation Council',
      year: '2024',
      role: 'Full Stack Developer',
      team: 'Team of 4',
      problem: 'Developing campus automation systems to reduce administrative paperwork and attendance latency.',
      solution: 'Engineered a role-based attendance & analytics web app with real-time audit logs.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      achievement: 'Top 5 Finalist / Best UI Experience Award',
      githubLink: 'https://github.com',
      demoLink: '#',
    },
    {
      name: 'National Level Web Innovation Contest (Demo)',
      organizer: 'Engineering Tech Fest',
      year: '2023',
      role: 'Frontend Architect',
      team: 'Team of 3',
      problem: 'Building accessible education tools for remote student engagement.',
      solution: 'Created an intuitive student dashboard featuring grade analytics and schedule timelines.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Python'],
      achievement: 'Special Mention for Accessibility Design',
      githubLink: 'https://github.com',
      demoLink: '#',
    },
  ];

  return (
    <section className="hackathons-section" id="hackathons">
      <span className="section-eyebrow fade-up">06 / COMPETITIONS</span>

      <div className="editorial-reveal-group" style={{ marginBottom: '2rem' }}>
        <div className="editorial-mask-line">
          <h2 className="section-heading-editorial editorial-mask-inner" style={{ marginBottom: 0 }}>
            HACKATHONS &
          </h2>
        </div>
        <div className="editorial-mask-line">
          <h2 className="section-heading-editorial editorial-mask-inner" style={{ marginBottom: 0 }}>
            <span className="serif-italic">ACHIEVEMENTS</span>
          </h2>
        </div>
      </div>

      <p className="fade-up" style={{ fontSize: '0.92rem', color: 'var(--charcoal-muted)', maxWidth: '560px' }}>
        Hackathon sprint participation, technical achievements, and innovation challenges (demo records will be updated with actual hackathons).
      </p>

      <div className="hackathons-grid">
        {demoHackathons.map((hack, idx) => (
          <div className="hackathon-card fade-up cursor-interactive" data-cursor="HACK" key={idx}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="hack-badge">✦ {hack.achievement}</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--dusty-pink)' }}>{hack.year}</span>
              </div>

              <h3 className="hack-title">{hack.name}</h3>
              <p className="hack-meta">
                {hack.organizer} • {hack.role} ({hack.team})
              </p>

              <p className="hack-desc">
                <strong>Problem:</strong> {hack.problem}
              </p>
              <p className="hack-desc">
                <strong>Solution:</strong> {hack.solution}
              </p>

              <div className="tech-pill-list" style={{ marginBottom: '1.2rem' }}>
                {hack.technologies.map((t, tIdx) => (
                  <span className="tech-pill" key={tIdx}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
              <a
                href={hack.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-project cursor-interactive"
                data-cursor="VIEW"
                style={{ fontSize: '0.78rem', padding: '0.6rem 0.85rem' }}
              >
                <span>Event / Solution</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href={hack.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-project-ghost cursor-interactive"
                data-cursor="REPO"
                style={{ fontSize: '0.78rem', padding: '0.6rem 0.85rem' }}
              >
                <GithubIcon size={13} />
                <span>Repo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
