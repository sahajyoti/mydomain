import Link from "next/link";
import { blogPosts, testimonials } from "@/data/site";
import HeroShowcase from "@/components/HeroShowcase";

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <HeroShowcase />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-2xl font-bold">Biomedical Services</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Precision repair, calibration, preventive maintenance, and AMC support for multi-brand
              equipment.
            </p>
            <Link href="/services" className="mt-4 inline-block font-semibold text-cyan-700 dark:text-cyan-400">
              Learn More →
            </Link>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-2xl font-bold">IT Services</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Website development, domain registration assistance, hosting setup, and technical support
              for clinics and businesses.
            </p>
            <Link href="/services" className="mt-4 inline-block font-semibold text-cyan-700 dark:text-cyan-400">
              Learn More →
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold">Testimonials</h2>
            <Link href="/testimonials" className="font-semibold text-cyan-700 dark:text-cyan-400">
              View All
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950"
              >
                <p className="text-slate-700 dark:text-slate-300">“{item.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-cyan-700 dark:text-cyan-400">— {item.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold">Latest Blog</h2>
          <Link href="/blog" className="font-semibold text-cyan-700 dark:text-cyan-400">
            Read More
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300">
                {post.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{post.title}</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-3xl font-bold">Project Gallery</h2>
              <p className="mt-3 text-cyan-100">Browse service and support highlights from healthcare and business clients.</p>
            </div>
            <div className="md:text-right">
              <Link href="/gallery" className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-sky-800 hover:bg-cyan-50 transition">
                Open Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
