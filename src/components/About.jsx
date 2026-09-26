export default function About() {
  return (
    <section className="about-section" id="about">
      <span className="section-eyebrow fade-up">01 / BACKGROUND</span>

      <div className="editorial-reveal-group" style={{ marginBottom: '2rem' }}>
        <div className="editorial-mask-line">
          <h2 className="section-heading-editorial editorial-mask-inner" style={{ marginBottom: 0 }}>
            A LITTLE
          </h2>
        </div>
        <div className="editorial-mask-line">
          <h2 className="section-heading-editorial editorial-mask-inner" style={{ marginBottom: 0 }}>
            <span className="serif-italic">ABOUT ME</span>
          </h2>
        </div>
      </div>

      <div className="about-lead-card fade-up">
        <p className="about-lead-text">
          I am a Computer Science Engineering student passionate about Web Development, AI, and Data Science. I enjoy turning ideas into practical, user-friendly digital solutions.
        </p>
        <p className="about-lead-text" style={{ marginBottom: '1.5rem' }}>
          I love learning new technologies, experimenting with ideas, and building meaningful projects.
        </p>
        <div className="about-highlight-box">
          <span className="serif-italic" style={{ color: 'var(--dusty-pink)', marginRight: '0.5rem' }}>✦</span>
          "Curious to learn. Passionate to build."
        </div>
      </div>
    </section>
  );
}
