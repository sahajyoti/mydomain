'use client';

import { testimonials } from "@/data/site";
import { useState } from "react";
import Image from "next/image";

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <main className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <section className="bg-gradient-to-r from-sky-600 to-indigo-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold">Testimonials</h1>
          <p className="mt-3 text-sky-100">Trusted support for hospitals, clinics, and rehab centers</p>
        </div>
      </section>

      {/* Carousel Style Testimonials */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-red-500 dark:text-red-400 font-semibold text-sm uppercase tracking-wide mb-2">Testimonial</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Satisfied Patients Reviews</h2>
        </div>

        <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 sm:p-12 min-h-[400px] flex flex-col justify-center">
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
                <svg key={i} className="w-6 h-6 fill-red-500" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            
            <p className="text-blue-600 dark:text-blue-400 font-bold text-lg">{currentTestimonial.name}</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{currentTestimonial.role}</p>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-blue-600 dark:bg-blue-500' 
                    : 'w-2 bg-slate-300 dark:bg-slate-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 pb-20">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white text-center mb-10">All Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-200 dark:border-blue-800">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-red-500" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 line-clamp-4">"{item.quote}"</p>
              <p className="text-xs text-blue-600 dark:text-blue-400">{item.role}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
