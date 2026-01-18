"use client";

import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";

const navItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Portfolio", href: "#portfolio", id: "portfolio" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleObserver = (entries) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setActiveSection(visibleEntry.target.id);
      }
    };

    const options = {
      root: null,
      rootMargin: "-25% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // 🔥 FIX 1: Close menu when clicking outside
  const handleOutsideClick = useCallback((e) => {
    if (
      navRef.current &&
      !navRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen, handleOutsideClick]);

  // 🔥 FIX 2: Prevent body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[9999] bg-black/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#home" className="text-xl font-bold text-white tracking-tighter">
            Dikachi Nwankwo
          </Link>

          {/* Desktop menu - ALWAYS VISIBLE */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative py-2 text-sm font-medium transition-colors duration-300
                    ${isActive ? "text-purple-400" : "text-gray-400 hover:text-white"}
                  `}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-full bg-purple-500 transition-transform duration-300 ease-out origin-left
                      ${isActive ? "scale-x-100" : "scale-x-0"}
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* 🔥 FIX 3: Mobile menu button - ALWAYS VISIBLE */}
          <button 
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-200 text-gray-300"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 🔥 FIX 4: Mobile menu - PROPER OVERLAY + POSITIONING */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 animate-in slide-in-from-top-4 duration-300">
          <div className="pt-4 pb-8 space-y-4 px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-xl text-base font-medium transition-all duration-200 ${
                  activeSection === item.id 
                    ? "text-purple-400 bg-purple-500/20 border border-purple-500/50" 
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
