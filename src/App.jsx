import { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { useGSAPAnimations } from './hooks/useGSAPAnimations';
import { useScrollColorReveal } from './hooks/useScrollColorReveal';

// Components
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollTo } = useLenis();

  // Trigger GSAP masked reveals and scroll animations when preloader completes
  useGSAPAnimations(isLoaded);

  // Scroll-driven text color reveal (pink → charcoal) on section titles
  useScrollColorReveal(isLoaded);

  const handleNavigate = (targetId) => {
    scrollTo(targetId, { offset: 0 });
  };

  const handleScrollDown = () => {
    scrollTo('#about', { offset: -20 });
  };

  const handleBackToTop = () => {
    scrollTo(0);
  };

  return (
    <>
      {/* Cinematic Preloader */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      {/* Custom Cursor for pointer devices */}
      <CustomCursor />

      {/* Fixed Editorial Navbar */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main>
        {/* 01 — HOME / HERO */}
        <Hero onScrollDown={handleScrollDown} />

        {/* 02 — ABOUT ME */}
        <About />

        {/* 03 — EDUCATION */}
        <Education />

        {/* 04 — SKILLS (Category Cards Infinite Marquee) */}
        <Skills />

        {/* 05 — PROJECTS */}
        <Projects />

        {/* 06 — CERTIFICATES (Single unified section) */}
        <Certificates />

        {/* 07 — CONTACT */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer onBackToTop={handleBackToTop} />
    </>
  );
}
