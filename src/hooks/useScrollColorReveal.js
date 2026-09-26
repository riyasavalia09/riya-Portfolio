import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Scroll-driven text color reveal effect for section titles.
 *
 * Architecture (matches reference video):
 * ─────────────────────────────────────────
 * BASE LAYER  = original h2 text, set to #4A4A4A (charcoal grey)
 * TOP LAYER   = pink overlay span (#E2B4BD) placed INSIDE the h2
 *
 * The pink overlay starts fully visible (clip-path covers 100%).
 * As the user scrolls, the pink overlay is progressively clipped
 * from left → right, revealing the grey base text underneath.
 *
 * Scroll progress 0%   → 100% pink
 * Scroll progress 50%  → left half grey, right half pink
 * Scroll progress 100% → 100% grey
 *
 * Scrolling back up reverses the clip-path, restoring the pink.
 *
 * The overlay is placed INSIDE the h2 (as a child) so it inherits
 * the h2's translateY transform during the editorial mask-in animation.
 * This keeps both layers perfectly aligned at all times.
 */
export function useScrollColorReveal(isLoaded) {
  useEffect(() => {
    if (!isLoaded) return;

    gsap.registerPlugin(ScrollTrigger);

    let ctx;

    // Small delay to ensure editorial mask-in animations are initialized
    const timeoutId = setTimeout(() => {
      ctx = gsap.context(() => {
        const groups = document.querySelectorAll('.editorial-reveal-group');

        groups.forEach((group) => {
          // Skip hero section — hero has its own animation
          if (group.closest('#hero')) return;

          const headings = group.querySelectorAll('.section-heading-editorial');

          headings.forEach((heading) => {
            // Guard against double-processing
            if (heading.querySelector('.scroll-color-overlay')) return;

            // ── 1. BASE LAYER: set heading text to grey (#4A4A4A) ──
            heading.style.color = '#4A4A4A';
            heading.style.position = 'relative';

            // Also set serif-italic spans inside to grey
            heading.querySelectorAll('.serif-italic').forEach((span) => {
              span.style.color = '#4A4A4A';
            });

            // ── 2. TOP LAYER: create pink overlay inside the heading ──
            // Capture innerHTML BEFORE appending anything
            const contentHTML = heading.innerHTML;

            const overlay = document.createElement('span');
            overlay.classList.add('scroll-color-overlay');
            overlay.setAttribute('aria-hidden', 'true');
            overlay.innerHTML = contentHTML;
            overlay.style.color = '#E2B4BD';
            // Start fully visible → title appears 100% pink initially
            overlay.style.clipPath = 'inset(0 0 0 0)';

            // Set serif-italic spans inside overlay to pink too
            overlay.querySelectorAll('.serif-italic').forEach((s) => {
              s.style.color = '#E2B4BD';
            });

            // Append overlay INSIDE the heading — inherits h2 transforms
            heading.appendChild(overlay);

            // ── 3. SCROLL-DRIVEN ANIMATION ──
            // clip-path: inset(0 0 0 0)   = fully visible (all pink)
            // clip-path: inset(0 0 0 100%) = fully hidden  (all grey)
            // The pink clips away from LEFT to RIGHT, revealing grey underneath
            gsap.timeline({
              scrollTrigger: {
                trigger: group,
                start: 'top 75%',
                end: 'top 25%',
                scrub: true,
              },
            }).fromTo(
              overlay,
              { clipPath: 'inset(0 0 0 0)' },
              { clipPath: 'inset(0 0 0 100%)', ease: 'none' }
            );
          });
        });

        // Recalculate all ScrollTrigger positions
        ScrollTrigger.refresh();
      });
    }, 150);

    // ── CLEANUP ──
    return () => {
      clearTimeout(timeoutId);

      // Revert all GSAP animations & ScrollTriggers created in our context
      if (ctx) ctx.revert();

      // Remove overlay DOM elements
      document.querySelectorAll('.scroll-color-overlay').forEach((el) => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });

      // Reset inline styles on original headings
      document.querySelectorAll('.editorial-reveal-group').forEach((group) => {
        if (group.closest('#hero')) return;
        group.querySelectorAll('.section-heading-editorial').forEach((h2) => {
          h2.style.color = '';
          h2.style.position = '';
          h2.querySelectorAll('.serif-italic').forEach((span) => {
            span.style.color = '';
          });
        });
      });
    };
  }, [isLoaded]);
}
