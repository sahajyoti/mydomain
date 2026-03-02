import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-200/40 bg-white/95 dark:border-emerald-800/40 dark:bg-slate-950/95 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-16 sm:h-20 lg:h-24 gap-4">
          <Link href="/" className="flex items-center gap-2 min-w-0 shrink-0 group">
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 overflow-hidden flex items-center justify-center flex-shrink-0">
              <Image
                src="/file_000000000a607208a8ac6109a01e508c-removebg-preview.png"
                alt="DS Biomedical logo"
                fill
                priority
                sizes="(max-width: 640px) 56px, (max-width: 1024px) 64px, 80px"
                className="object-contain object-center scale-100 group-hover:scale-125 transition"
              />
            </div>
            <span className="hidden lg:inline text-sm font-bold text-slate-900 dark:text-white max-w-[140px] truncate">
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
