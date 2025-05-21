'use client'
import { useEffect, useState } from 'react';

export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      setScrollDir(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDir);

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollDir;
}
