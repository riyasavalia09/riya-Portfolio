import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDrawerOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  const resumeUrl = 'https://drive.google.com/file/d/1LWK_c0A35LmoKwfTVKzk7i9oCPTh9lZS/view?usp=sharing';

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsDrawerOpen(false);
    setActiveLink(href);
    if (onNavigate) {
      onNavigate(href);
    }
  };

  return (
    <>
      <header className={`site-nav ${isScrolled ? 'scrolled' : ''}`} id="mainNav">
        {/* Logo — top left */}
        <a
          className="brand-mark cursor-interactive"
          data-cursor="HOME"
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
        >
          <img
            className="brand-logo-img"
            src={`${import.meta.env.BASE_URL}rs-logo.jpg`}
            alt="RS Logo"
          />
        </a>

        {/* Center nav links — desktop only */}
        <nav className="nav-menu-desktop">
          {navItems.map((item) => (
            <a
              key={item.href}
              className={`nav-link-ref cursor-interactive ${activeLink === item.href ? 'active' : ''}`}
              data-cursor={item.label.toUpperCase()}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Resume button — top right on desktop */}
        <a
          href={resumeUrl}
          className="resume-btn-ref cursor-interactive"
          data-cursor="RESUME"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText size={14} />
          <span>Resume</span>
        </a>

        {/* Hamburger — mobile only */}
        <button
          aria-label="Toggle Navigation Menu"
          className="nav-toggle-btn cursor-interactive"
          id="menuToggle"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          {isDrawerOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${isDrawerOpen ? 'open' : ''}`}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`} id="mobileDrawer">
        <div className="mobile-nav-links">
          {navItems.map((item, idx) => (
            <a
              key={item.href}
              className={`mobile-link ${activeLink === item.href ? 'active' : ''}`}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              <span className="num">0{idx + 1}</span> {item.label}
            </a>
          ))}
        </div>

        <div className="mobile-drawer-footer">
          <a
            href={resumeUrl}
            className="mobile-resume-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText size={16} />
            <span>Download Resume</span>
          </a>
          <div className="mobile-drawer-info">
            <p className="mobile-drawer-label">Available For Opportunities</p>
            <p className="mobile-drawer-detail">Gujarat, India • Open to Roles & Collaborations</p>
          </div>
        </div>
      </div>
    </>
  );
}
