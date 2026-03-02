import { testimonials } from "@/data/site";

export default function TestimonialsPage() {
  return (
    <main className="bg-white dark:bg-slate-950">
      <section className="bg-gradient-to-r from-sky-600 to-indigo-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold">Testimonials</h1>
          <p className="mt-3 text-sky-100">Trusted support for hospitals, clinics, and rehab centers</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-slate-700 dark:text-slate-300">“{item.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-sky-700 dark:text-sky-400">— {item.name}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}