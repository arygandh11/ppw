import { useEffect, useRef } from 'react';

// Spawns a short-lived ripple div at the pointer position on move.
// Skips touch-only devices (no fine pointer) since there's no cursor to trail.
function CustomCursor() {
  const containerRef = useRef(null);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return undefined;

    function handleMouseMove(event) {
      const now = performance.now();
      if (now - lastSpawnRef.current < 60) return; // throttle
      lastSpawnRef.current = now;

      const ripple = document.createElement('div');
      ripple.className = 'near-cursor';
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      containerRef.current?.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 650);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={containerRef} aria-hidden="true" />;
}

export default CustomCursor;
