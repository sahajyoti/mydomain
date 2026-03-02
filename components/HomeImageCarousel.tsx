"use client";

import { useEffect, useMemo, useState } from "react";

const imageUrls = [
  "https://www.zuper.co/wp-content/uploads/2023/09/64be29c7157251d4d770313d_Medical-Equipment-Installation-Repair-and-Maintenance-copy.webp",
  "https://5.imimg.com/data5/SELLER/Default/2021/6/XW/LJ/DL/49496493/medical-equipment-repair-service.jpg",
  "https://content.jdmagicbox.com/comp/kolkata/z8/033pxx33.xx33.210428165619.u3z8/catalogue/sodexo-healthcare-technology-management-salt-lake-city-sector-5-kolkata-medical-equipment-repair-and-services-pkfkl2499r.jpg",
  "https://www.colmed.in/pub/media/wysiwyg/medical_service.png",
  "https://medium.com/@poawebs/what-is-website-development-fd56f839862d",
  "https://codeflies.com/wp-content/uploads/2019/09/blog-4.jpg",
  "https://www.sectorlink.com/article/why-finding-the-right-web-developer-matters-importance-of-web-development",
  "https://www.quickstart.com/blog/app-development/web-development-technologies-evolution/",
  "https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg",
];

export default function HomeImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = useMemo(() => imageUrls, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-end justify-between gap-4 mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Service & Development Highlights</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Auto slider (left to right)</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((url, index) => (
              <div key={`${url}-${index}`} className="w-full flex-shrink-0">
                <img
                  src={url}
                  alt={`Home showcase ${index + 1}`}
                  className="h-[230px] sm:h-[320px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === currentIndex ? "bg-cyan-600" : "bg-slate-300 dark:bg-slate-700"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeImageCarouselCompact() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-8">
      <div className="overflow-hidden rounded-2xl border border-white/30 bg-white/10">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imageUrls.map((url, index) => (
            <div key={`${url}-${index}`} className="w-full flex-shrink-0 bg-slate-950/70 p-2">
              <img
                src={url}
                alt={`Hero showcase ${index + 1}`}
                className="h-[220px] sm:h-[280px] w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-2">
        {imageUrls.map((_, index) => (
          <button
            key={`compact-dot-${index}`}
            type="button"
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === currentIndex ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to hero slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}