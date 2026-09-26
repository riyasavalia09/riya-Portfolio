import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const projects = [
    {
      id: '01',
      category: 'EDUCATION PLATFORM',
      title: 'EduSphere',
      tagline: 'A comprehensive education platform designed to enhance learning experiences and academic management.',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      githubLink: 'https://github.com/riyasavalia09/EduSphere.git',
    },
    {
      id: '02',
      category: 'JOB MATCHING',
      title: 'InternMatch',
      tagline: 'An internship matching platform connecting students with relevant opportunities based on their skills and interests.',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      githubLink: 'https://github.com/riyasavalia09/InternMatch.git',
    },
    {
      id: '03',
      category: 'CAMPUS TECH',
      title: 'AttendHub',
      tagline: 'A smart attendance tracking and management system for educational institutions with analytics capabilities.',
      techStack: ['Python', 'Flask', 'MySQL', 'JavaScript'],
      githubLink: 'https://github.com/riyasavalia09/AttendHub.git',
    },
    {
      id: '04',
      category: 'E-COMMERCE',
      title: 'Bharatiya Janata Mart',
      tagline: 'A full-featured e-commerce platform with product browsing, cart management, and seamless checkout experience.',
      techStack: ['React', 'JavaScript', 'CSS3', 'Responsive UI'],
      githubLink: 'https://github.com/riyasavalia09/E-commerce.git',
    },
  ];

  return (
    <section className="projects-section-container" id="projects">
      <div className="projects-header-area">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="section-eyebrow fade-up">04 / PORTFOLIO</span>
            <div className="editorial-reveal-group">
              <div className="editorial-mask-line">
                <h2 className="section-heading-editorial editorial-mask-inner" style={{ marginBottom: 0 }}>
                  FEATURED
                </h2>
              </div>
              <div className="editorial-mask-line">
                <h2 className="section-heading-editorial editorial-mask-inner" style={{ marginBottom: 0 }}>
                  <span className="serif-italic">PROJECTS</span>
                </h2>
              </div>
            </div>
            <p className="fade-up" style={{ fontSize: '0.9rem', color: 'var(--charcoal-muted)', marginTop: '0.5rem', maxWidth: '540px' }}>
              A curated selection of projects showcasing my skills in full stack development and problem solving.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--charcoal-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            <span>Swipe Horizontally</span>
            <ArrowRight size={14} color="var(--dusty-pink)" />
          </div>
        </div>
      </div>

      <div className="projects-horizontal-track" id="projectsTrack">
        {projects.map((project) => (
          <article className="project-card cursor-interactive" data-cursor="PROJECT" key={project.id}>
            <div className="project-card-body">
              <div>
                <span className="project-badge-num" style={{ position: 'relative', display: 'inline-block', marginBottom: '0.75rem' }}>{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>

                <div className="tech-pill-list">
                  {project.techStack.map((tech, idx) => (
                    <span className="tech-pill" key={idx}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-action-row">
                <a
                  className="btn-project-ghost cursor-interactive"
                  data-cursor="CODE"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={14} />
                  <span>View Code</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
