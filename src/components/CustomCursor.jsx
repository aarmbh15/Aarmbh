import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion || !isVisible) return null;
  // Add this inside CustomCursor.jsx (before return)
if (window.innerWidth < 768) return null; // Hide on mobile

  return (
    <>
      {/* GLOWING GOLD CURSOR */}
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full z-50 mix-blend-screen"
        style={{
          background: "radial-gradient(circle, rgba(251,191,36,0.85) 0%, rgba(251,191,36,0.35) 60%, transparent 100%)",
          boxShadow: "0 0 20px rgba(251,191,36,0.7), 0 0 40px rgba(251,191,36,0.4)",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* HIDE DEFAULT CURSOR */}
      <div className="pointer-events-none fixed inset-0 z-40" style={{ cursor: 'none' }} />
    </>
  );
};

export default React.memo(CustomCursor);