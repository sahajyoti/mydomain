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

export default function HeroShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen sm:min-h-[80vh] bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950 text-slate-900 dark:text-white overflow-hidden">
      {/* Background Image with Auto-scroll */}
      <img
        src={slides[active]}
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover opacity-30 dark:opacity-20 transition-opacity duration-700"
      />
      {/* Background decorative elements - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden lg:block absolute -left-32 -top-32 h-64 w-64 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="hidden lg:block absolute -right-32 -bottom-32 h-80 w-80 bg-green-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-block mb-4 sm:mb-6">
              <p className="rounded-full bg-emerald-600/15 dark:bg-emerald-500/20 px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-300 w-fit">
                ✓ Professional Services
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight sm:leading-snug lg:leading-tight mb-4 sm:mb-6">
              Engineering Precision
              <br className="hidden sm:block" />
              <span className="text-emerald-600 dark:text-emerald-400">in Healthcare</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-700 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
              Professional Biomedical Equipment Service & IT Solutions by Debojyoti Saha
            </p>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 leading-relaxed">
              Expert maintenance, repair, and calibration services for critical healthcare equipment with commitment to reliability, accuracy, and zero downtime.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white hover:from-emerald-700 hover:to-green-700 text-center transition shadow-lg hover:shadow-xl"
              >
                Get Support Today →
              </Link>
              <Link
                href="/services"
                className="rounded-2xl border-2 border-emerald-600 dark:border-emerald-400 bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 text-center transition"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right - Photo Frame */}
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none lg:justify-self-end">
            {/* Decorative background shapes - hidden on mobile */}
            <div className="hidden sm:block absolute -right-12 -top-8 h-48 w-48 bg-gradient-to-br from-emerald-400/20 to-green-400/10 rounded-full blur-2xl" />
            <div className="hidden sm:block absolute -right-20 -bottom-20  h-56 w-56 bg-gradient-to-tl from-green-300/15 to-transparent rounded-full blur-3xl" />

            {/* Top decorative dots */}
            <div className="hidden md:flex absolute -top-6 right-8 gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400/60" />
              <div className="h-2 w-2 rounded-full bg-emerald-400/40" />
              <div className="h-2 w-2 rounded-full bg-emerald-400/20" />
            </div>

            {/* Main photo frame */}
            <div className="relative mx-auto h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px] group">
              {/* Decorative outer shapes */}
              <div className="hidden sm:block absolute -inset-6 rounded-[3rem] border-2 border-emerald-300/30 dark:border-emerald-500/20 rotate-3 opacity-50" />
              <div className="hidden sm:block absolute -inset-3 rounded-[2.5rem] border-2 border-emerald-200/40 dark:border-emerald-600/20 -rotate-2" />

              {/* Frame layers */}
              <div
                className="absolute inset-0 rotate-3 rounded-[2.2rem] bg-gradient-to-br from-emerald-500 to-green-600/70 shadow-xl"
                style={{ clipPath: frameClip }}
              />
              <div
                className="absolute inset-1 -rotate-2 rounded-[2rem] bg-gradient-to-tr from-green-400/60 to-emerald-300/40"
                style={{ clipPath: frameClip }}
              />
              <div
                className="absolute inset-2 rounded-[1.8rem] border-4 border-white shadow-md"
                style={{ clipPath: frameClip }}
              />

              {/* Photo container */}
              <div
                className="absolute inset-4 overflow-hidden rounded-[1.6rem] shadow-inner"
                style={{ clipPath: frameClip }}
              >
                <img
                  src="/home-hero-student.jpeg"
                  alt="Professional portrait"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Decorative accent */}
              <div className="hidden md:block absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-gradient-to-tl from-yellow-300 to-yellow-200/40 shadow-lg blur-xl opacity-70" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line - mobile only */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/40 to-emerald-400/0" />
    </section>
  );
}
