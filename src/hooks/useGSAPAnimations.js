import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useGSAPAnimations(isLoaded) {
  useEffect(() => {
    if (!isLoaded) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero text reveal immediately on load
      gsap.to('#hero .editorial-mask-inner', {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
      });

      // 2. Hero fade-up items
      gsap.to('#hero .fade-up', {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.2,
      });

      // 3. ScrollTrigger for all masked reveal headers
      document.querySelectorAll('.editorial-reveal-group').forEach((group) => {
        if (group.closest('#hero')) return;

        const inners = group.querySelectorAll('.editorial-mask-inner');
        gsap.to(inners, {
          scrollTrigger: {
            trigger: group,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          y: '0%',
          opacity: 1,
          duration: 1.2,
          stagger: 0.14,
          ease: 'power4.out',
        });
      });

      // 4. General fade-up elements across all active sections
      const sections = [
        '#about',
        '#education',
        '#skills',
        '#projects',
        '#certificates',
        '#contact',
      ];

      sections.forEach((secId) => {
        gsap.utils.toArray(`${secId} .fade-up`).forEach((elem) => {
          gsap.to(elem, {
            scrollTrigger: {
              trigger: elem,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
          });
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, [isLoaded]);
}
