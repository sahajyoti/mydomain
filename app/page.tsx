import Link from "next/link";
import { blogPosts, testimonials } from "@/data/site";
import HeroShowcase from "@/components/HeroShowcase";
import ClientShowcase from "@/components/ClientShowcase";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      <HeroShowcase />

      {/* Clients & Services Section */}
      <ClientShowcase />

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
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

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-slate-800 dark:to-slate-900 py-12 sm:py-16 lg:py-20">
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

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
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

      {/* Gallery Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-700 dark:to-green-700 text-white py-12 sm:py-16 lg:py-20">
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
    </main>
  );
}
