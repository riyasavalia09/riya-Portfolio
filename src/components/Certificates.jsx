import { ExternalLink, ShieldCheck, Trophy } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      name: 'LJ_Hackathon',
      type: 'Hackathon Certificate',
      link: 'https://drive.google.com/file/d/1ojOaD-okH3PThR7qnLxyv52A0gu6PWnL/view?usp=sharing',
    },
    {
      name: 'Data Analysis for Machine Learning (Coursera)',
      type: 'Course Certificate',
      link: 'https://drive.google.com/file/d/1tUyGaHo0RPXJ6AEKXcwS8YgsRgOpVV1D/view?usp=sharing',
    },
    {
      name: 'Introduction to CSS, HTML, and Javascript (Coursera)',
      type: 'Course Certificate',
      link: 'https://drive.google.com/file/d/1F15WxmNTApsiLonJgypYLJX-pU-7JDN7/view?usp=sharing',
    },
    {
      name: 'Inheritance in Data Structures using Java (Coursera)',
      type: 'Course Certificate',
      link: 'https://drive.google.com/file/d/1DkdyVz3lYdNiwyan-dFxyzUKglDhocHz/view?usp=sharing',
    },
    {
      name: 'Introduction to Java (Coursera)',
      type: 'Course Certificate',
      link: 'https://drive.google.com/file/d/1pD1t61vRC_5Ck-CSAeIe4nr4ey3Xpvrz/view?usp=sharing',
    },
  ];

  return (
    <section className="certificates-section" id="certificates">
      <span className="section-eyebrow fade-up">05 / CREDENTIALS</span>

      <div className="editorial-reveal-group" style={{ marginBottom: '2rem' }}>
        <div className="editorial-mask-line">
          <h2 className="section-heading-editorial editorial-mask-inner" style={{ marginBottom: 0 }}>
            <span className="serif-italic">CERTIFICATES</span>
          </h2>
        </div>
      </div>

      <p className="fade-up" style={{ fontSize: '0.92rem', color: 'var(--charcoal-muted)', maxWidth: '560px' }}>
        Verified certifications and hackathon credentials showcasing my continuous learning journey.
      </p>

      <div className="certificates-grid">
        {certificates.map((cert, idx) => (
          <a
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card fade-up cursor-interactive"
            data-cursor="CERT"
            aria-label={`View ${cert.name}`}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                <span className="cert-topic">✦ {cert.type}</span>
                {cert.type.includes('Hackathon') ? (
                  <Trophy size={16} color="var(--dusty-pink)" />
                ) : (
                  <ShieldCheck size={16} color="var(--dusty-pink)" />
                )}
              </div>
              <h3 className="cert-name">{cert.name}</h3>
            </div>

            <div className="cert-link-btn">
              <span>View Credential</span>
              <ExternalLink size={13} color="var(--dusty-pink)" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
