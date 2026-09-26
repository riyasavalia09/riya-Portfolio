export default function Statement() {
  return (
    <section className="statement-section" id="statement">
      <div className="editorial-reveal-group">
        <div className="editorial-mask-line">
          <div className="statement-line editorial-mask-inner">I BUILD</div>
        </div>
        <div className="editorial-mask-line">
          <div className="statement-line editorial-mask-inner">
            <span className="serif">DIGITAL</span>
          </div>
        </div>
        <div className="editorial-mask-line">
          <div className="statement-line editorial-mask-inner">EXPERIENCES</div>
        </div>
      </div>
      <p
        className="fade-up"
        style={{
          fontSize: '1.05rem',
          lineHeight: 1.65,
          color: 'var(--charcoal-muted)',
          marginTop: '2rem',
          maxWidth: '560px',
        }}
      >
        Synthesizing precise engineering with thoughtful editorial aesthetics. Crafting user-friendly web solutions that balance typographic elegance, responsive resilience, and meaningful impact.
      </p>
    </section>
  );
}
