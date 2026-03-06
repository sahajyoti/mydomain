import { galleryItems, testimonials } from "@/data/site";
import AnimatedBackground from "@/components/AnimatedBackground";
import Image from "next/image";

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
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 dark:border-slate-800 dark:bg-slate-900 overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 dark:bg-slate-900/90 rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                    <span className="text-2xl">
                      {item.icon}
                    </span>
                  </div>
                </div>
                <div className="p-6">
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
            {testimonials.slice(0, 3).map((item, index) => (
              <article
                key={index}
                className="rounded-xl bg-white dark:bg-slate-800 p-6 sm:p-7 shadow-sm hover:shadow-md transition border border-slate-200/50 dark:border-slate-700/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-200 dark:border-emerald-800">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-amber-400" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed line-clamp-3 mb-3">
                  "{item.quote}"
                </p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400">
                  {item.role}
                </p>
              </article>
            ))}
          </div>
        </section>
      </AnimatedBackground>
    </main>
  );
}