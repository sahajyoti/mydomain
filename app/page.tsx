import Link from "next/link";
import { blogPosts, testimonials } from "@/data/site";
import HeroShowcase from "@/components/HeroShowcase";
import ClientShowcase from "@/components/ClientShowcase";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main className="text-slate-900 dark:text-slate-100">
      <HeroShowcase />

      {/* Clients & Services Section */}
      <AnimatedBackground variant="emerald" className="py-12 sm:py-16 lg:py-20">
        <ClientShowcase />
      </AnimatedBackground>

      {/* LinkedIn Profile Section */}
      <section className="border-y border-blue-200/40 dark:border-blue-800/30 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg">
                DS
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Debojyoti Saha
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                  Senior Biomedical Engineer
                </p>
              </div>
            </div>
            <Link
              href="https://www.linkedin.com/in/debojyotisahatech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0A66C2] hover:bg-[#004182] px-6 py-3 text-sm sm:text-base font-semibold text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedBackground variant="blue" className="py-12 sm:py-16 lg:py-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <article className="rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border border-emerald-200/50 dark:border-emerald-800/30 p-6 sm:p-8 shadow-sm hover:shadow-md transition">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">⚕️</div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Biomedical Services</h3>
            <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Precision repair, calibration, preventive maintenance, and AMC support for multi-brand healthcare equipment.
            </p>
            <Link href="/services" className="mt-5 inline-flex items-center font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition">
              Learn More <span className="ml-2">→</span>
            </Link>
          </article>

          <article className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200/50 dark:border-blue-800/30 p-6 sm:p-8 shadow-sm hover:shadow-md transition">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">💻</div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">IT Services</h3>
            <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Website development, domain registration, hosting setup, and technical support for clinics and businesses.
            </p>
            <Link href="/services" className="mt-5 inline-flex items-center font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition">
              Learn More <span className="ml-2">→</span>
            </Link>
          </article>
        </div>
      </section>
      </AnimatedBackground>

      {/* Testimonials Section */}
      <AnimatedBackground variant="emerald" className="py-12 sm:py-16 lg:py-20">
        <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">Testimonials</h2>
            <Link href="/testimonials" className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition whitespace-nowrap">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-xl bg-white dark:bg-slate-800 p-6 sm:p-7 shadow-sm hover:shadow-md transition border border-slate-200/50 dark:border-slate-700/50"
              >
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic">"{item.quote}"</p>
                <p className="mt-4 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">— {item.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      </AnimatedBackground>

      {/* Blog Section */}
      <AnimatedBackground variant="purple" className="py-12 sm:py-16 lg:py-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">Latest Blog</h2>
          <Link href="/blog" className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition whitespace-nowrap">
            Read More →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-xl bg-white dark:bg-slate-800 p-6 sm:p-7 shadow-sm hover:shadow-md transition border border-slate-200/50 dark:border-slate-700/50 group">
              <span className="inline-block rounded-full bg-emerald-100 dark:bg-emerald-950/40 px-3 py-1 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                {post.tag}
              </span>
              <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">{post.title}</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
      </AnimatedBackground>

      {/* Gallery Section */}
      <AnimatedBackground variant="gradient" className="py-12 sm:py-16 lg:py-20">
        <section className="text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Project Gallery</h2>
              <p className="text-sm sm:text-base text-emerald-50">Browse service and support highlights from healthcare and business clients.</p>
            </div>
            <Link href="/gallery" className="md:flex-shrink-0 rounded-2xl bg-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-emerald-600 hover:bg-emerald-50 transition text-center sm:text-left">
              Open Gallery →
            </Link>
          </div>
        </div>
      </section>
      </AnimatedBackground>
    </main>
  );
}
