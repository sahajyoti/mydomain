import { galleryItems, testimonials } from "@/data/site";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function GalleryPage() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950">
      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold">Service Gallery</h1>
          <p className="mt-3 text-cyan-100">Expert biomedical services and IT solutions delivered with precision</p>
        </div>
      </section>

      <AnimatedBackground variant="blue" className="py-12 sm:py-16 lg:py-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-4 h-48 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-500/10 flex items-center justify-center">
                  <span className="text-7xl transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 mb-3">
                  {item.category}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedBackground>

      {/* Testimonials Section */}
      <AnimatedBackground variant="emerald" className="py-12 sm:py-16 lg:py-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Client Testimonials
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Trusted by healthcare professionals across the region
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <article
                key={index}
                className="rounded-xl bg-white dark:bg-slate-800 p-6 sm:p-7 shadow-sm hover:shadow-md transition border border-slate-200/50 dark:border-slate-700/50"
              >
                <div className="text-4xl text-emerald-600 dark:text-emerald-400 mb-4">💬</div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{item.quote}"
                </p>
                <p className="mt-4 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  — {item.name}
                </p>
              </article>
            ))}
          </div>
        </section>
      </AnimatedBackground>
    </main>
  );
}