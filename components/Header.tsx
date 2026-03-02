import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          <Link href="/" className="flex items-center gap-3 min-w-0">
            <div className="relative h-20 w-48 sm:h-24 sm:w-56 overflow-hidden flex items-center justify-center">
              <Image
                src="/file_000000000a607208a8ac6109a01e508c-removebg-preview.png"
                alt="DS Biomedical logo"
                fill
                priority
                sizes="(max-width: 640px) 192px, 224px"
                className="object-contain object-center scale-200"
              />
            </div>
            <span className="hidden lg:inline text-sm font-semibold truncate text-slate-900 dark:text-white">
              Biomedical & IT Services
            </span>
          </Link>
          
          <ul className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base">
            <li>
              <Link href="/" className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 transition">
                Services
              </Link>
            </li>
            <li className="hidden md:block">
              <Link href="/blog" className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 transition">
                Blog
              </Link>
            </li>
            <li className="hidden md:block">
              <Link href="/testimonials" className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 transition">
                Testimonials
              </Link>
            </li>
            <li className="hidden md:block">
              <Link href="/gallery" className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 transition">
                Gallery
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
            <li>
              <Link
                href="/contact"
                className="rounded-md bg-cyan-600 px-3 py-1.5 text-white hover:bg-cyan-700 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
