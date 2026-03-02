import { galleryItems } from "@/data/site";

export default function GalleryPage() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950">
      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold">Gallery</h1>
          <p className="mt-3 text-cyan-100">Highlights from service workflows and support projects</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-4 h-36 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30" />
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h2>
              <p className="mt-2 text-sm text-cyan-700 dark:text-cyan-400">{item.category}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}