import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      return;
    }
    if (!isValidEmail(formData.email)) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/riyasavaliya530@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: 'New message from your portfolio',
          _captcha: 'false',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <span className="section-eyebrow fade-up" style={{ color: 'var(--charcoal-muted)' }}>
        06 / REACH OUT
      </span>

      <div className="editorial-reveal-group" style={{ marginBottom: '2.2rem' }}>
        <div className="editorial-mask-line">
          <h2 className="contact-giant-heading editorial-mask-inner" style={{ marginBottom: 0 }}>
            LET'S CREATE
          </h2>
        </div>
        <div className="editorial-mask-line">
          <h2 className="contact-giant-heading editorial-mask-inner" style={{ marginBottom: 0 }}>
            <span className="serif">SOMETHING</span>
          </h2>
        </div>
        <div className="editorial-mask-line">
          <h2 className="contact-giant-heading editorial-mask-inner" style={{ marginBottom: 0 }}>
            GREAT.
          </h2>
        </div>
      </div>

      {/* Social and Profile Tiles */}
      <div className="social-links-grid">
        <a
          className="social-tile cursor-interactive"
          data-cursor="GITHUB"
          href="https://github.com/riyasavalia09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>GitHub</span>
          <GithubIcon size={16} color="var(--dusty-pink)" />
        </a>

        <a
          className="social-tile cursor-interactive"
          data-cursor="LINKEDIN"
          href="https://www.linkedin.com/in/riya-savaliya-9032ba382"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>LinkedIn</span>
          <LinkedinIcon size={16} color="var(--dusty-pink)" />
        </a>

        <a
          className="social-tile cursor-interactive"
          data-cursor="EMAIL"
          href="mailto:riyasavaliya530@gmail.com"
          style={{ gridColumn: 'span 2' }}
        >
          <span>Email: riyasavaliya530@gmail.com</span>
          <Mail size={16} color="var(--dusty-pink)" />
        </a>
      </div>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form-field">
          <label htmlFor="contact-name" className="contact-form-label">Name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-form-input"
          />
        </div>

        <div className="contact-form-field">
          <label htmlFor="contact-email" className="contact-form-label">Email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-form-input"
          />
        </div>

        <div className="contact-form-field">
          <label htmlFor="contact-message" className="contact-form-label">Message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Have an idea? Let's talk..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="contact-form-input contact-form-textarea"
          />
        </div>

        <button
          type="submit"
          className="contact-form-submit cursor-interactive"
          data-cursor="SEND"
          disabled={status === 'sending'}
        >
          <span>{status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}</span>
          <Send size={16} />
        </button>

        {status === 'success' && (
          <p className="contact-form-status contact-form-success">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="contact-form-status contact-form-error">
            Something went wrong. Please check all fields and try again.
          </p>
        )}
      </form>
    </section>
  );
}
