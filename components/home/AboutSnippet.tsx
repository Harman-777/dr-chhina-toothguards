"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSnippet() {
  return (
    <section className="section-padding bg-white border-y border-border-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Graphic representation of Beyond Sterility */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6"
        >
          <div className="relative rounded-3xl p-8 sm:p-10 gradient-warm border border-terracotta/25 shadow-xl space-y-6 overflow-hidden group">
            <div className="absolute top-0 right-0 w-36 h-36 bg-terracotta/10 rounded-full blur-2xl group-hover:bg-terracotta/20 transition-colors" />

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-accent-vibrant to-amber-500 text-white flex items-center justify-center text-3xl shadow-lg shadow-accent/20">
                🌿
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-foreground tracking-tight">
                  The &quot;Beyond Sterility&quot; Design
                </h4>
                <p className="text-xs text-foreground-muted font-medium mt-0.5">
                  Architectural Concept by Sifti Design Studio
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-foreground/85 leading-relaxed relative z-10 font-normal">
              We reimagined dental care by designing a clinic that eliminates the traditional cold, intimidating atmosphere. Featuring soothing terracotta curves, natural skylights, and soft ambient lighting, your visit feels peaceful and relaxing.
            </p>

            <div className="grid grid-cols-2 gap-3.5 text-xs font-bold text-foreground relative z-10">
              <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-terracotta/15 flex items-center gap-2.5 shadow-sm hover:border-accent transition-colors">
                <span className="text-base">🏛️</span> Curved Terracotta Walls
              </div>
              <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-terracotta/15 flex items-center gap-2.5 shadow-sm hover:border-accent transition-colors">
                <span className="text-base">☀️</span> Natural Skylight Corridor
              </div>
              <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-terracotta/15 flex items-center gap-2.5 shadow-sm hover:border-accent transition-colors">
                <span className="text-base">🔬</span> In-House Dental Lab
              </div>
              <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-terracotta/15 flex items-center gap-2.5 shadow-sm hover:border-accent transition-colors">
                <span className="text-base">👶</span> Child-Friendly Spaces
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Intro text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-terracotta-light text-accent-vibrant border border-accent/20 shadow-sm">
            About Our Practice
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground tracking-tight leading-tight">
            Welcome to Dr. Chhina&apos;s Tooth Guards
          </h2>
          
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed">
            At Dr. Chhina&apos;s Tooth Guards, we blend clinical precision with hospitality-inspired warmth. Led by Dr. Jaskaran Chhina, our practice focuses on painless treatments, transparent patient communication, and long-term oral health.
          </p>

          <p className="text-foreground-muted text-base leading-relaxed">
            Whether you require a painless root canal, clear aligners, or gentle pediatric dentistry for your children, we ensure every treatment is performed with gentle care.
          </p>

          <div className="pt-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-primary text-white font-bold text-base hover:bg-primary-dark transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
              Meet Dr. Chhina & Tour Clinic
              <span className="text-lg">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



