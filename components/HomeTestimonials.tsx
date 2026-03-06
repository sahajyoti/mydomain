'use client';

import { testimonials } from "@/data/site";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function HomeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayTestimonials = testimonials.slice(0, 3); // Show first 3 on home page

  const currentTestimonial = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
          Client Testimonials
        </h2>
        <Link
          href="/testimonials"
          className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition whitespace-nowrap"
        >
          View All →
        </Link>
      </div>

      {/* Featured Testimonial Carousel */}
      <div className="mb-12">
        <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 sm:p-12 min-h-[350px] flex flex-col justify-center border border-slate-200 dark:border-slate-800">
          {/* Decorative avatars with real human faces */}
          {testimonials.slice(0, 4).map((testimonial, idx) => {
            const positions = [
              "absolute -top-4 left-20 w-12 h-12 hidden sm:block",
              "absolute top-10 right-16 w-14 h-14 hidden md:block",
              "absolute bottom-20 left-10 w-10 h-10 hidden lg:block",
              "absolute -bottom-2 right-32 w-12 h-12 hidden sm:block"
            ];
            return (
              <div
                key={idx}
                className={`${positions[idx]} rounded-full border-4 border-white dark:border-slate-900 overflow-hidden shadow-md`}
              >
                <Image
                  src={testimonial.avatar}
                  alt=""
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}

          <div className="text-center relative z-10">
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 italic leading-relaxed mb-8 max-w-3xl mx-auto">
              "{currentTestimonial.quote}"
            </p>

            {/* Star Rating */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-amber-400" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            <p className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">
              {currentTestimonial.name}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {currentTestimonial.role}
            </p>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-emerald-600 dark:bg-emerald-500"
                    : "w-2 bg-slate-300 dark:bg-slate-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-slate-600 dark:text-slate-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-slate-600 dark:text-slate-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Grid of Recent Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {displayTestimonials.map((item) => (
          <article
            key={item.name}
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
              <div className="flex-1">
                <p className="font-semibold text-slate-900 dark:text-white text-sm">
                  {item.name}
                </p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 italic line-clamp-3">
              "{item.quote}"
            </p>
            <p className="mt-3 text-xs text-emerald-600 dark:text-emerald-400">
              {item.role}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
