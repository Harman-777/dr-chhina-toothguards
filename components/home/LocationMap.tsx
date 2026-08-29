"use client";

import { motion } from "framer-motion";
import { CLINIC } from "@/lib/constants";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";
import HoursWidget from "@/components/ui/HoursWidget";

export default function LocationMap() {
  return (
    <section className="section-padding bg-white border-t border-border-light relative overflow-hidden">
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
            Find Us Easily
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground tracking-tight">
            Visit Our Daburji Clinic
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed">
            Conveniently located on Grand Trunk Road, opposite Alpha City Colony, Daburji, Amritsar.
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 rounded-3xl overflow-hidden shadow-xl border border-border-mint min-h-[420px] bg-slate-50 relative group"
          >
            <iframe
              title="Dr. Chhina's Tooth Guards Location"
              src={CLINIC.googleMapsEmbed}
              width="100%"
              height="460"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Right: Hours & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            <HoursWidget />

            {/* Quick Contact Box */}
            <div className="bg-gradient-to-br from-surface-mint to-white rounded-3xl p-7 border border-primary/20 shadow-md space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center text-lg shadow-sm">
                  📍
                </div>
                <h4 className="font-heading font-extrabold text-primary-dark text-lg">
                  Clinic Address & Directions
                </h4>
              </div>

              <p className="text-sm text-foreground/85 leading-relaxed font-medium">
                {CLINIC.address.full}
              </p>

              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={CLINIC.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-dark transition-all shadow-sm flex items-center gap-2 hover:scale-105"
                >
                  🗺️ Open in Google Maps
                </a>
                
                <a
                  href={formatPhoneLink(CLINIC.phone)}
                  className="px-4 py-2.5 rounded-xl bg-white text-primary-dark border border-primary/20 text-xs font-bold hover:bg-primary-light transition-all flex items-center gap-2"
                >
                  📞 Call {CLINIC.phoneFormatted}
                </a>
                
                <a
                  href={formatWhatsAppLink(CLINIC.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a] transition-all shadow-sm flex items-center gap-2 hover:scale-105"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

