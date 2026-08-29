"use client";

import { motion } from "framer-motion";

export default function TrustBar() {
  const stats = [
    { label: "Google Rating", value: "4.9★", subtitle: "65+ Verified Reviews", icon: "⭐", accent: "text-amber-500" },
    { label: "Patient Care", value: "Painless RCT", subtitle: "Root Canal Experts", icon: "💎", accent: "text-teal-600" },
    { label: "Aligner Partner", value: "Invisalign", subtitle: "& PhiAligner Certified", icon: "✨", accent: "text-accent-vibrant" },
    { label: "Speciality Clinic", value: "2 Operatories", subtitle: "In-house Dental Lab", icon: "🏥", accent: "text-emerald-600" },
  ];

  return (
    <section className="relative bg-gradient-to-r from-surface-mint via-white to-surface-mint py-10 border-y border-teal-900/10 overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-primary/10 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
            >
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-primary-light to-teal-100 border border-primary/15 text-primary flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div>
                <p className="font-heading font-extrabold text-xl sm:text-2xl text-primary-dark tracking-tight leading-none">
                  {stat.value}
                </p>
                <p className="text-xs font-bold text-foreground mt-1">
                  {stat.label}
                </p>
                <p className="text-[11px] text-foreground-muted font-medium">
                  {stat.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



