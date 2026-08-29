"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { REVIEWS, CLINIC } from "@/lib/constants";

export default function ReviewsCarousel() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setActive((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section className="section-padding bg-gradient-to-b from-surface-mint/40 via-background to-surface-mint/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-50 text-amber-900 border border-amber-200 shadow-sm">
            <span className="text-amber-500 text-sm">★★★★★</span>
            <span>Real Patient Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground tracking-tight">
            Rated {CLINIC.rating}★ on Google Reviews
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed">
            Read authentic, unedited feedback from patients who experienced gentle, multi-speciality care in Amritsar.
          </p>
        </motion.div>

        {/* Carousel Card Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border-mint shadow-xl relative overflow-hidden">
            {/* Subtle Google G Logo Background */}
            <div className="absolute top-6 right-8 text-primary/10 text-8xl font-black select-none pointer-events-none font-serif">
              “
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                <p className="text-lg sm:text-xl md:text-2xl text-foreground font-medium italic leading-relaxed min-h-[110px] relative z-10">
                  &quot;{REVIEWS[active].text}&quot;
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-border-light gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-teal-400 text-white font-bold text-lg flex items-center justify-center shadow-md">
                      {REVIEWS[active].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading font-extrabold text-foreground text-base">
                        {REVIEWS[active].name}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-foreground-muted font-medium">
                        <span className="text-amber-500 font-bold">★★★★★</span>
                        <span>• {REVIEWS[active].date} on Google</span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prev}
                      className="w-11 h-11 rounded-2xl border border-primary/20 bg-primary-light/60 flex items-center justify-center text-primary font-bold hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95"
                      aria-label="Previous review"
                    >
                      ←
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex items-center gap-1.5 px-2">
                      {REVIEWS.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActive(idx)}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            idx === active ? "w-6 bg-accent-vibrant" : "w-2.5 bg-primary/20 hover:bg-primary/40"
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={next}
                      className="w-11 h-11 rounded-2xl border border-primary/20 bg-primary-light/60 flex items-center justify-center text-primary font-bold hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95"
                      aria-label="Next review"
                    >
                      →
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Link */}
        <div className="text-center mt-12">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-border-mint text-primary font-bold text-sm hover:border-accent hover:text-accent-vibrant shadow-sm transition-all hover:scale-105"
          >
            Read All {CLINIC.reviewCount}+ Google Reviews
            <span className="text-base">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

