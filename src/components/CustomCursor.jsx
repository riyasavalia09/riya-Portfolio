import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const dot = dotRef.current;
    const follower = followerRef.current;

    const handleMouseMove = (e) => {
      if (dot && follower) {
        gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.05 });
        gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.22 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseEnter = (e) => {
      const target = e.currentTarget;
      document.body.classList.add('cursor-hover');
      const text = target.getAttribute('data-cursor') || '';
      if (follower) follower.textContent = text;
    };

    const handleMouseLeave = () => {
      document.body.classList.remove('cursor-hover');
      if (follower) follower.textContent = '';
    };

    const addListeners = () => {
      document.querySelectorAll('.cursor-interactive').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    addListeners();
    // Observe DOM changes to attach listeners to newly rendered items
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      document.querySelectorAll('.cursor-interactive').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor-dot" ref={dotRef} id="cursorDot"></div>
      <div className="custom-cursor-follower" ref={followerRef} id="cursorFollower"></div>
    </>
  );
}
