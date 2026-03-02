"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const frameClip = "polygon(24% 0%, 76% 0%, 100% 26%, 100% 74%, 76% 100%, 24% 100%, 0% 74%, 0% 26%)";
const slides = [
  "https://www.zuper.co/wp-content/uploads/2023/09/64be29c7157251d4d770313d_Medical-Equipment-Installation-Repair-and-Maintenance-copy.webp",
  "https://5.imimg.com/data5/SELLER/Default/2021/6/XW/LJ/DL/49496493/medical-equipment-repair-service.jpg",
  "https://content.jdmagicbox.com/comp/kolkata/z8/033pxx33.xx33.210428165619.u3z8/catalogue/sodexo-healthcare-technology-management-salt-lake-city-sector-5-kolkata-medical-equipment-repair-and-services-pkfkl2499r.jpg",
  "https://www.colmed.in/pub/media/wysiwyg/medical_service.png",
  "https://codeflies.com/wp-content/uploads/2019/09/blog-4.jpg",
  "https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg",
];

function DotGrid({ className }: { className: string }) {
  return (
    <div className={`grid grid-cols-3 gap-3 ${className}`}>
      {Array.from({ length: 9 }).map((_, index) => (
        <span key={index} className="h-4 w-4 rounded-full bg-white/95" />
      ))}
    </div>
  );
}

export default function HeroShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen sm:min-h-[80vh] overflow-hidden bg-black text-white">
      <img
        src={slides[active]}
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover opacity-45 brightness-110 saturate-110 transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden sm:block absolute -left-20 -bottom-16 h-44 w-72 rotate-12 bg-green-500/70" />
        <div className="hidden sm:block absolute right-0 top-0 h-28 w-64 bg-gradient-to-l from-green-500/50 to-transparent" />

        <div className="hidden sm:block absolute right-16 top-0 h-full w-px bg-white/40 rotate-0" />
        <div className="hidden sm:block absolute right-44 top-[-8%] h-[116%] w-px bg-white/50 rotate-[42deg]" />
        <div className="hidden sm:block absolute right-2 top-[-8%] h-[116%] w-px bg-white/40 rotate-[-42deg]" />

        <div className="hidden sm:block absolute right-36 top-10 h-28 w-20 rotate-[32deg] rounded-[2.5rem] border-3 border-white/95" />
        <div className="hidden sm:block absolute right-[40%] top-16 h-28 w-20 -rotate-[32deg] rounded-[2.5rem] border-2 border-white/95" />
        <div className="hidden sm:block absolute right-24 bottom-8 h-28 w-20 rotate-[28deg] rounded-[2.5rem] border-3 border-white/95" />

        <DotGrid className="hidden sm:grid absolute left-14 top-10" />
        <DotGrid className="hidden sm:grid absolute right-4 bottom-8" />
      </div>

      <button
        type="button"
        className="hidden sm:block absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-r-2xl bg-green-700 px-4 py-3 text-2xl font-bold text-white"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        type="button"
        className="hidden sm:block absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-l-2xl bg-green-700 px-4 py-3 text-2xl font-bold text-white"
        aria-label="Next"
      >
        ›
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="max-w-xl">
            <p className="inline-block rounded-full bg-emerald-500/20 px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-emerald-300">
              Senior Biomedical Engineer • IT Solutions
            </p>

            <h1 className="mt-3 sm:mt-5 text-2xl sm:text-4xl lg:text-6xl font-extrabold leading-tight sm:leading-[0.95] tracking-tight text-white">
              Engineering Precision
              <br />
              in Healthcare
              <br />
              Technology
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-200">
              Professional Biomedical Equipment Service & IT Solutions by Debojyoti Saha
            </p>

            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-300 leading-relaxed">
              Delivering expert maintenance, repair, and calibration services for critical healthcare
              equipment with a commitment to reliability, accuracy, and zero downtime.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-green-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white hover:bg-green-500 text-center transition"
              >
                Get Support Today
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-white/35 bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white hover:bg-white/20 text-center transition"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-[470px]">
            <div className="absolute right-[-28px] top-[-20px] h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] lg:h-[430px] lg:w-[430px] rotate-[33deg] bg-gradient-to-b from-emerald-400/70 via-green-500/35 to-emerald-500/70" />
            <div className="absolute right-[10px] top-[40px] h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full bg-yellow-300/85 blur-[1px]" />

            <div className="relative mx-auto h-[200px] w-[200px] sm:h-[280px] sm:w-[280px] lg:h-[410px] lg:w-[410px]">
              <div
                className="absolute inset-0 rotate-6 rounded-[2.6rem] bg-emerald-600/50"
                style={{ clipPath: frameClip }}
              />
              <div
                className="absolute inset-2 -rotate-3 rounded-[2.6rem] bg-green-400/55"
                style={{ clipPath: frameClip }}
              />
              <div
                className="absolute inset-3 rounded-[2.4rem] border-4 border-white"
                style={{ clipPath: frameClip }}
              />

              <div
                className="absolute inset-5 overflow-hidden rounded-[2.2rem]"
                style={{ clipPath: frameClip }}
              >
                <img
                  src="/home-hero-student.jpeg"
                  alt="Hero photo"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
