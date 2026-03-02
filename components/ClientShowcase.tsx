'use client';

import Link from 'next/link';

const clients = [
  {
    id: 1,
    name: 'Dipankar Electric',
    logo: '⚡',
    service: 'Electrical Engineering Solutions',
    description: 'A premium digital ecosystem for high-end electrical services with automated scheduling and modern service presentation.',
    url: 'https://dipankarelectric.site/',
  },
  {
    id: 2,
    name: 'Rumpa Furniture',
    logo: '🪑',
    service: 'Luxury Furniture E-commerce',
    description: 'Sophisticated e-commerce catalog for premium furniture with optimized visualization and high-speed user experience.',
    url: 'https://rumpafurniture.netlify.app/',
  },
  {
    id: 3,
    name: 'A.M. Enterprise',
    logo: '🏗️',
    service: 'Interior & Construction',
    description: 'Luxury interior design and construction services with professional expertise in civil execution and labour contracting.',
    url: 'https://amenterprisepvtltd.netlify.app/',
  },
];

export default function ClientShowcase() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-emerald-50/30 dark:from-slate-900 dark:to-emerald-950/20 border-y border-emerald-200/40 dark:border-emerald-800/30 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 lg:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
            Services & Clients
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Premium digital solutions delivered to leading businesses across multiple industries
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {clients.map((client) => (
            <article
              key={client.id}
              className="group relative rounded-2xl bg-white dark:bg-slate-800/50 border border-emerald-200/40 dark:border-emerald-800/30 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Logo/Icon */}
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-5 transform group-hover:scale-110 transition-transform duration-300">
                {client.logo}
              </div>

              {/* Client Name */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                {client.name}
              </h3>

              {/* Service Type */}
              <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3 sm:mb-4">
                {client.service}
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-7">
                {client.description}
              </p>

              {/* Visit Button */}
              <Link
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Visit Site <span className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4">
            Ready to transform your business with digital excellence?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white hover:from-emerald-700 hover:to-green-700 transition shadow-md hover:shadow-lg"
          >
            Start Your Project <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
