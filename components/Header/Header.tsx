"use client";

import { useState, useEffect, useRef } from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
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
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === "down" ? "-100%" : "0%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-50 border-b border-b-white bg-black/30 "
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between ">
          {/* Left */}
          <Link href="/contact" className="text-white font-bold">
            Contact Us
          </Link>

          {/* Center Logo */}
          <Link href="/" className="text-2xl  text-white font-bold">
            BADERWAL
          </Link>

          {/* Hamburger for all screens */}
          <button
            onClick={toggleMenu}
            className="text-white z-50 relative cursor-pointer"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* MOBILE + DESKTOP MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed top-0 right-0 h-full w-full lg:w-[40%] bg-white z-99 px-6 py-8 overflow-y-auto shadow-lg"
          >
            {/* Top Logo + Close */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-2xl font-light text-gray-900">Baderwals</div>
              <button
                onClick={closeMenu}
                className="text-gray-700 cursor-pointer"
              >
                <X size={28} />
              </button>
            </div>

            <ul className="space-y-4 text-lg font-medium text-gray-800">
              <li>
                <Link href="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>

              <li>
                <Link href="/projects" onClick={closeMenu}>
                  Projects
                </Link>
              </li>

              <li>
                <Link href="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={closeMenu}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" onClick={closeMenu}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/career" onClick={closeMenu}>
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer so content isn’t hidden under fixed header */}
      {/* <div className="h-[56px]" /> */}
    </>
  );
}
