import { ArrowUpRight, MapPin } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Hero({ onScrollDown }) {
  return (
    <section className="hero-section" id="hero">
      {/* ── Warm ambient background glow ── */}
      <div className="hero-warm-glow" aria-hidden="true" />

      {/* ── Small decorative accent lines (top-right) ── */}
      <div className="hero-decor-accent" aria-hidden="true">
        <span className="hero-decor-line-1" />
        <span className="hero-decor-line-2" />
      </div>

      {/* ── Main two-column hero layout ── */}
      <div className="hero-main-grid">
        {/* ══════ LEFT COLUMN ══════ */}
        <div className="hero-left">
          {/* "HEY, THERE" with line */}
          <div className="hero-hey-row editorial-reveal-group">
            <div className="editorial-mask-line">
              <span className="hero-hey-text editorial-mask-inner serif-italic">HEY, THERE</span>
            </div>
            <span className="hero-hey-line" aria-hidden="true" />
          </div>

          {/* "I'm" + "Riya Savaliya" */}
          <div className="hero-name-block editorial-reveal-group">
            <div className="editorial-mask-line">
              <span className="hero-im-text editorial-mask-inner serif-italic">I'm</span>
            </div>
            <div className="editorial-mask-line">
              <h1 className="hero-name-line editorial-mask-inner">
                Riya <span className="accent serif-italic">Savaliya</span>
              </h1>
            </div>
          </div>

          {/* "ASPIRING FULL STACK DEVELOPER" */}
          <div className="hero-subtitle-row fade-up">
            <span className="hero-subtitle-text">ASPIRING FULL STACK DEVELOPER</span>
          </div>

          {/* Intro paragraph */}
          <p className="hero-intro-text fade-up">
            I build modern, meaningful digital experiences while{' '}
            exploring Web Development, AI & Data Science.
          </p>

          {/* GitHub and LinkedIn buttons */}
          <div className="hero-cta-buttons fade-up">
            <a
              href="https://github.com/riyasavalia09"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-btn cursor-interactive"
              data-cursor="GITHUB"
              aria-label="Riya Savaliya on GitHub"
            >
              <GithubIcon size={18} color="var(--charcoal)" />
              <span>GitHub</span>
              <ArrowUpRight size={14} className="hero-cta-arrow" />
            </a>
            <a
              href="https://www.linkedin.com/in/riya-savaliya-9032ba382"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-btn cursor-interactive"
              data-cursor="LINKEDIN"
              aria-label="Riya Savaliya on LinkedIn"
            >
              <span className="linkedin-icon-box">in</span>
              <span>LinkedIn</span>
              <ArrowUpRight size={14} className="hero-cta-arrow" />
            </a>
          </div>
        </div>

        {/* ══════ RIGHT COLUMN ══════ */}
        <div className="hero-right fade-up">
          {/* Portrait with decorative arches behind */}
          <div className="hero-portrait-wrapper">
            <div className="hero-arch hero-arch-outer" aria-hidden="true" />
            <div className="hero-arch hero-arch-inner" aria-hidden="true" />
            <div className="hero-portrait-glow" aria-hidden="true" />
            <img
              className="hero-portrait-img"
              src={`${import.meta.env.BASE_URL}riya-hero.jpeg`}
              alt="Riya Savaliya — Aspiring Full Stack Developer"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* ── Bottom bar with decorative elements ── */}
      <div className="hero-bottom-bar">
        {/* Bottom-left: dot + LEARN BUILD GROW */}
        <div className="hero-bottom-left fade-up">
          <span className="hero-accent-dot" aria-hidden="true" />
          <div className="hero-steps-text">
            <span>LEARN.</span>
            <span>BUILD.</span>
            <span>GROW.</span>
          </div>
        </div>

        {/* Bottom-center: scroll indicator */}
        <div className="hero-bottom-center" onClick={onScrollDown}>
          <div className="hero-scroll-icon-wrap">
            <div className="hero-scroll-dot" />
          </div>
          <span className="hero-scroll-label">SCROLL TO EXPLORE</span>
        </div>

        {/* Bottom-right: location */}
        <div className="hero-bottom-right fade-up">
          <MapPin size={14} className="hero-location-pin" />
          <span className="hero-location-text">BASED IN AHMEDABAD</span>
          <span className="hero-location-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
