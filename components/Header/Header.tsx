'use client'

import { useState, useEffect, useRef } from 'react';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProjectsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as any).contains(e.target)) {
        closeMenu();
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === 'down' ? '-100%' : '0%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left */}
          <Link href="/contact" className="text-gray-700 font-medium">
            Contact Us
          </Link>

          {/* Center Logo */}
          <Link href="/" className="text-2xl font-light text-gray-900">
            BrandLogo
          </Link>

          {/* Hamburger for all screens */}
          <button onClick={toggleMenu} className="text-gray-700 z-50 relative cursor-pointer">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* MOBILE + DESKTOP MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="fixed top-0 right-0 h-full w-full lg:w-[40%] bg-white z-99 px-6 py-8 overflow-y-auto shadow-lg"
          >
            {/* Top Logo + Close */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-2xl font-light text-gray-900">
                Baderwals
              </div>
              <button onClick={closeMenu} className="text-gray-700 cursor-pointer">
                <X size={28} />
              </button>
            </div>

            <ul className="space-y-4 text-lg font-medium text-gray-800">
              <li>
                <Link href="/" onClick={closeMenu}>Home</Link>
              </li>

              {/* PROJECTS WITH ANIMATED DROPDOWN */}
              <li className="relative">
                <button
                  onClick={() => setIsProjectsOpen(prev => !prev)}
                  className="w-full flex items-center justify-between cursor-pointer"
                >
                  <span>Projects</span>
                  <motion.span
                    animate={{ rotate: isProjectsOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isProjectsOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 mt-2 space-y-2 text-base overflow-hidden"
                    >
                      <li>
                        <Link href="/projects/upcoming" onClick={closeMenu}>
                          Upcoming
                        </Link>
                      </li>
                      <li>
                        <Link href="/projects/ongoing" onClick={closeMenu}>
                          Ongoing
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link href="/about" onClick={closeMenu}>About</Link>
              </li>
              <li>
                <Link href="/blog" onClick={closeMenu}>Blog</Link>
              </li>
              <li>
                <Link href="/faq" onClick={closeMenu}>FAQs</Link>
              </li>
              <li>
                <Link href="/career" onClick={closeMenu}>Career</Link>
              </li>
              <li>
                <Link href="/contact" onClick={closeMenu}>Contact</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer so content isn’t hidden under fixed header */}
      <div className="h-[56px]" />
    </>
  );
}
