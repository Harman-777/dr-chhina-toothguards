"use client";

import { motion } from "framer-motion";
import { CLINIC } from "@/lib/constants";
import { formatPhoneLink } from "@/lib/utils";

interface HeroProps {
  onBookClick?: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden gradient-mesh text-white">
      {/* Dynamic Glowing Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.45, 0.25],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[550px] h-[550px] rounded-full bg-accent/30 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-400/20 blur-[130px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-7 text-center lg:text-left"
        >
          {/* Rating & Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white/95 shadow-lg shimmer-badge"
          >
            <span className="flex items-center text-amber-300 text-sm">★★★★★</span>
            <span>4.9★ (65+ Google Reviews) · Daburji, Amritsar</span>
          </motion.div>

          {/* Heading with Accent Gradient */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.12]">
            Dr. Chhina&apos;s <br />
            <span className="bg-gradient-to-r from-accent via-amber-300 to-accent-vibrant bg-clip-text text-transparent drop-shadow-sm">
              Tooth Guards
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/90 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {CLINIC.tagline}. Multi-speciality dental care delivered with gentle hands, cutting-edge technology, and a warm, hospitality-inspired environment.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.04, boxShadow: "0 20px 35px rgba(255, 107, 53, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              href={formatPhoneLink(CLINIC.phone)}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-vibrant to-accent text-white font-bold text-base shadow-xl flex items-center justify-center gap-3 transition-all"
            >
              <svg className="w-5 h-5 animate-bounce-subtle" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call {CLINIC.phoneFormatted}
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 20px 35px rgba(255, 255, 255, 0.25)" }}
              whileTap={{ scale: 0.98 }}
              onClick={onBookClick}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/95 text-primary-dark font-bold text-base shadow-xl hover:bg-white flex items-center justify-center gap-3 transition-all backdrop-blur-md"
            >
              <svg className="w-5 h-5 text-accent-vibrant" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </motion.button>
          </div>

          {/* Quick Highlights Stats */}
          <div className="pt-6 grid grid-cols-3 gap-4 text-center border-t border-white/15">
            <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-2xl sm:text-3xl font-extrabold font-heading text-amber-300">4.9★</p>
              <p className="text-xs text-white/80 font-medium mt-0.5">Google Rating</p>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-2xl sm:text-3xl font-extrabold font-heading text-emerald-300">100%</p>
              <p className="text-xs text-white/80 font-medium mt-0.5">Painless RCT</p>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-2xl sm:text-3xl font-extrabold font-heading text-teal-200">Certified</p>
              <p className="text-xs text-white/80 font-medium mt-0.5">Invisalign Provider</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual Card (Static, High-Contrast White Glass) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl relative overflow-hidden group border border-white/80">
            {/* Soft Ambient Light inside Card */}
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-accent-light rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500" />
            
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-accent-vibrant to-amber-500 text-white flex items-center justify-center text-3xl shadow-lg mb-6 shadow-accent/25">
              🦷
            </div>
            
            <h3 className="font-heading font-extrabold text-2xl text-primary-dark mb-2 tracking-tight">
              Beyond Sterility
            </h3>
            
            <p className="text-foreground-muted text-sm leading-relaxed mb-6 font-normal">
              Designed as a comforting sanctuary featuring soothing terracotta accents, organic curves, and natural daylight. We treat every patient like family.
            </p>

            <div className="space-y-3 text-xs text-primary-dark font-bold">
              <div className="flex items-center gap-3 bg-surface-mint/80 p-3.5 rounded-2xl border border-primary/10 transition-colors">
                <span className="text-xl">✨</span>
                <span>In-house Dental Laboratory & 2 Treatment Rooms</span>
              </div>
              <div className="flex items-center gap-3 bg-surface-mint/80 p-3.5 rounded-2xl border border-primary/10 transition-colors">
                <span className="text-xl">👶</span>
                <span>Child-Friendly & Non-Intimidating Environment</span>
              </div>
              <div className="flex items-center gap-3 bg-surface-mint/80 p-3.5 rounded-2xl border border-primary/10 transition-colors">
                <span className="text-xl">📍</span>
                <span>Opp. Alpha City Colony, GT Road, Daburji, Amritsar</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



