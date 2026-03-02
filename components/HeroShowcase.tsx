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
    <section className="relative min-h-[80vh] overflow-hidden bg-black text-white">
      <img
        src={slides[active]}
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover opacity-45 brightness-110 saturate-110 transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 -bottom-16 h-44 w-72 rotate-12 bg-green-500/70" />
        <div className="absolute right-0 top-0 h-28 w-64 bg-gradient-to-l from-green-500/50 to-transparent" />

        <div className="absolute right-16 top-0 h-full w-px bg-white/40 rotate-0" />
        <div className="absolute right-44 top-[-8%] h-[116%] w-px bg-white/50 rotate-[42deg]" />
        <div className="absolute right-2 top-[-8%] h-[116%] w-px bg-white/40 rotate-[-42deg]" />

        <div className="absolute right-36 top-10 h-28 w-20 rotate-[32deg] rounded-[2.5rem] border-3 border-white/95" />
        <div className="absolute right-[40%] top-16 h-28 w-20 -rotate-[32deg] rounded-[2.5rem] border-2 border-white/95" />
        <div className="absolute right-24 bottom-8 h-28 w-20 rotate-[28deg] rounded-[2.5rem] border-3 border-white/95" />

        <DotGrid className="absolute left-14 top-10" />
        <DotGrid className="absolute right-4 bottom-8" />
      </div>

      <button
        type="button"
        className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-r-2xl bg-green-700 px-4 py-3 text-2xl font-bold text-white"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        type="button"
        className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-l-2xl bg-green-700 px-4 py-3 text-2xl font-bold text-white"
        aria-label="Next"
      >
        ›
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl">
            <p className="inline-block rounded-full bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-300">
              Senior Biomedical Engineer • IT Solutions
            </p>

            <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold leading-[0.95] tracking-tight text-white">
              Engineering Precision
              <br />
              in Healthcare
              <br />
              Technology
            </h1>

            <p className="mt-6 text-lg text-slate-200">
              Professional Biomedical Equipment Service & IT Solutions by Debojyoti Saha
            </p>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Delivering expert maintenance, repair, and calibration services for critical healthcare
              equipment with a commitment to reliability, accuracy, and zero downtime.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white hover:bg-green-500 text-center"
              >
                Get Support Today
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-white/35 bg-white/10 px-8 py-4 text-lg font-bold text-white hover:bg-white/20 text-center"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute right-[-28px] top-[-20px] h-[430px] w-[430px] rotate-[33deg] bg-gradient-to-b from-emerald-400/70 via-green-500/35 to-emerald-500/70" />
            <div className="absolute right-[10px] top-[40px] h-20 w-20 rounded-full bg-yellow-300/85 blur-[1px]" />

            <div className="relative mx-auto h-[320px] w-[320px] sm:h-[410px] sm:w-[410px]">
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
