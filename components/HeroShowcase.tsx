"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const frameClip = "polygon(14% 7%, 74% 2%, 97% 34%, 89% 84%, 38% 98%, 4% 64%)";
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
    <section className="relative min-h-screen sm:min-h-[80vh] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden">
      {/* Background Image with Auto-scroll */}
      <img
        src={slides[active]}
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover opacity-20 transition-opacity duration-700"
      />
      {/* Background decorative elements - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden lg:block absolute -left-32 -top-32 h-64 w-64 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="hidden lg:block absolute -right-32 -bottom-32 h-80 w-80 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-block mb-4 sm:mb-6">
              <p className="rounded-full bg-cyan-500/20 px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-300 w-fit">
                ✓ Professional Services
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight sm:leading-snug lg:leading-tight mb-4 sm:mb-6">
              Engineering Precision
              <br className="hidden sm:block" />
              <span className="text-cyan-400">in Healthcare</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 mb-4 sm:mb-6 leading-relaxed">
              Professional Biomedical Equipment Service & IT Solutions by Debojyoti Saha
            </p>

            <p className="text-xs sm:text-sm lg:text-base text-slate-300 mb-6 sm:mb-8 leading-relaxed">
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
                className="rounded-2xl border-2 border-emerald-400 bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-emerald-300 hover:bg-emerald-950/30 text-center transition"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right - Photo Frame */}
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none lg:justify-self-end">
            {/* Decorative background shapes - hidden on mobile */}
            <div className="hidden sm:block absolute -right-12 -top-8 h-48 w-48 bg-gradient-to-br from-blue-400/20 to-cyan-400/10 rounded-full blur-2xl" />
            <div className="hidden sm:block absolute -right-20 -bottom-20  h-56 w-56 bg-gradient-to-tl from-cyan-300/15 to-transparent rounded-full blur-3xl" />

            {/* Main photo frame */}
            <div className="relative mx-auto h-[270px] w-[270px] sm:h-[340px] sm:w-[340px] lg:h-[440px] lg:w-[440px]">
              {/* Green layered background shapes */}
              <div
                className="absolute -inset-4 bg-emerald-500/45 blur-[2px] rotate-6"
                style={{ clipPath: frameClip }}
              />
              <div
                className="absolute -inset-2 bg-lime-400/35 -rotate-6"
                style={{ clipPath: frameClip }}
              />

              {/* White frame */}
              <div
                className="absolute inset-0 bg-white shadow-2xl rotate-2"
                style={{ clipPath: frameClip }}
              />
              <div
                className="absolute inset-[10px] bg-slate-100 rotate-2"
                style={{ clipPath: frameClip }}
              />

              {/* Photo */}
              <div
                className="absolute inset-[16px] overflow-hidden rotate-2"
                style={{ clipPath: frameClip }}
              >
                <img
                  src="/home-hero-student.jpeg"
                  alt="Professional portrait"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line - mobile only */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-cyan-400/0" />
    </section>
  );
}
