"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-surface-mint/30 to-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary-light text-primary border border-primary/20 shadow-sm">
            Our Specialty Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground tracking-tight">
            Complete Dental Care Under One Roof
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed">
            From painless single-sitting root canals to certified invisible clear aligners, we offer world-class multi-speciality treatments for your entire family.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-7 border border-border-mint shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-teal-400 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-light to-teal-50 text-primary border border-primary/10 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                
                <h3 className="font-heading font-extrabold text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-foreground-muted text-sm leading-relaxed font-normal">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border-light flex items-center justify-between">
                <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-surface-mint text-primary-dark border border-primary/10">
                  {service.priceRange}
                </span>
                
                <Link
                  href="/services"
                  className="text-sm font-bold text-primary hover:text-accent-vibrant flex items-center gap-1.5 transition-colors group-hover:translate-x-1 duration-200"
                >
                  Details <span className="text-lg">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-base hover:from-primary-dark hover:to-teal-900 shadow-xl shadow-primary/20 transition-all hover:scale-105"
          >
            Explore All 8+ Treatments & Pricing
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}



