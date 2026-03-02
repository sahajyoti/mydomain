import { blogPosts } from "@/data/site";

export default function BlogPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="bg-gradient-to-r from-cyan-700 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold">Blog</h1>
          <p className="mt-3 text-cyan-100">Insights on biomedical reliability and healthcare IT</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-cyan-950/20"
            >
              <span className="inline-block rounded-full bg-cyan-600/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                {post.tag}
              </span>
              <h2 className="mt-4 text-xl font-semibold leading-snug">{post.title}</h2>
              <p className="mt-3 text-slate-300">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}