import { ArrowUp } from 'lucide-react';

export default function Footer({ onBackToTop }) {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p style={{ fontWeight: 700, color: 'var(--charcoal)', fontSize: '1rem' }}>
            RIYA SAVALIYA
          </p>
          <p style={{ fontSize: '0.78rem', color: 'var(--charcoal-muted)' }}>
            Aspiring Full Stack Developer & CS Engineering Student
          </p>
        </div>

        <button
          className="back-to-top-btn cursor-interactive"
          data-cursor="TOP"
          id="backToTopBtn"
          onClick={onBackToTop}
          aria-label="Scroll back to top"
        >
          <span>Top</span>
          <ArrowUp size={13} />
        </button>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Riya Savaliya. All rights reserved.</p>
        <p style={{ fontSize: '0.72rem', color: 'var(--dusty-pink)' }}>
          Editorial design system • #FFFFFF #F7D6D0 #E2B4BD #4A4A4A
        </p>
      </div>
    </footer>
  );
}
