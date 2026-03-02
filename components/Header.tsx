'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-emerald-200/40 dark:border-emerald-800/40 backdrop-blur transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 dark:bg-slate-950/98 shadow-md' 
        : 'bg-white/95 dark:bg-slate-950/95'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative flex justify-between items-center gap-4 transition-all duration-300 ${
          isScrolled ? 'h-16 sm:h-18 lg:h-20' : 'h-20 sm:h-22 lg:h-24'
        }`}>
          <Link href="/" className="flex items-center gap-3 min-w-0 shrink-0 group relative -my-4">
            <div className={`relative overflow-hidden flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
              isScrolled 
                ? 'h-36 w-36 sm:h-44 sm:w-44 lg:h-52 lg:w-52' 
                : 'h-44 w-44 sm:h-56 sm:w-56 lg:h-72 lg:w-72'
            }`}>
              <Image
                src="/file_000000000a607208a8ac6109a01e508c-removebg-preview.png"
                alt="DS Biomedical logo"
                fill
                priority
                sizes="(max-width: 640px) 176px, (max-width: 1024px) 224px, 288px"
                className="object-contain object-center scale-100 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="hidden xl:inline text-base font-bold text-slate-900 dark:text-white max-w-[160px] truncate">
              DS Biomedical
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-2 lg:gap-6 text-xs sm:text-sm lg:text-base">
            <li>
              <Link href="/" className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition font-medium">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition font-medium">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition font-medium">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition font-medium">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition font-medium">
                Gallery
              </Link>
            </li>
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden md:block rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white font-bold hover:from-emerald-700 hover:to-green-700 transition shadow-sm whitespace-nowrap"
            >
              Contact
            </Link>
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
