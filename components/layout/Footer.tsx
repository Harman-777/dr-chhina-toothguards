"use client";

import Link from "next/link";
import { CLINIC, NAV_LINKS, SERVICES } from "@/lib/constants";
import { formatPhoneLink, formatWhatsAppLink, isClinicOpen } from "@/lib/utils";

export default function Footer() {
  const status = isClinicOpen();

  return (
    <footer className="bg-gradient-to-b from-[#073B36] to-[#03201D] text-white pt-16 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
        {/* Col 1: Brand & Tagline */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-accent-vibrant to-amber-400 text-white flex items-center justify-center font-extrabold text-xl shadow-lg shadow-accent/20">
              TG
            </div>
            <div>
              <p className="font-heading font-extrabold text-xl leading-tight text-white tracking-tight">
                Dr. Chhina&apos;s
              </p>
              <p className="text-xs font-bold tracking-widest text-amber-300 uppercase">
                Tooth Guards
              </p>
            </div>
          </div>
          
          <p className="text-white/80 text-sm leading-relaxed font-light pr-4">
            {CLINIC.tagline}. Multi-speciality dental clinic located on GT Road, Daburji, Amritsar. Gentle care and modern dentistry.
          </p>

          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
            <span
              className={`inline-block w-2.5 h-2.5 rounded-full ${
                status.isOpen ? "bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" : "bg-rose-400"
              }`}
            />
            <span className="text-xs font-semibold text-white/90">
              {status.message}
            </span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="font-heading font-extrabold text-white text-base mb-4 tracking-tight">
            Navigation
          </h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/75 hover:text-amber-300 text-sm font-medium transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Key Services */}
        <div className="lg:col-span-3">
          <h4 className="font-heading font-extrabold text-white text-base mb-4 tracking-tight">
            Speciality Services
          </h4>
          <ul className="space-y-2.5">
            {SERVICES.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link
                  href="/services"
                  className="text-white/75 hover:text-amber-300 text-sm font-medium transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact & Location */}
        <div className="lg:col-span-3 space-y-3.5">
          <h4 className="font-heading font-extrabold text-white text-base mb-4 tracking-tight">
            Contact & Clinic
          </h4>
          
          <p className="text-white/80 text-sm leading-relaxed font-light">
            📍 {CLINIC.address.full}
          </p>
          
          <p className="text-white/80 text-sm font-medium">
            📞{" "}
            <a
              href={formatPhoneLink(CLINIC.phone)}
              className="hover:text-amber-300 transition-colors"
            >
              {CLINIC.phoneFormatted}
            </a>
          </p>
          
          <p className="text-white/80 text-sm font-medium">
            💬{" "}
            <a
              href={formatWhatsAppLink(CLINIC.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              WhatsApp Support
            </a>
          </p>

          <div className="pt-2">
            <a
              href={CLINIC.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl bg-gradient-to-r from-accent-vibrant to-accent text-white hover:opacity-95 transition-all shadow-md hover:scale-105"
            >
              📷 Follow on Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
        <p>© {new Date().getFullYear()} Dr. Chhina&apos;s Tooth Guards. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <p className="font-medium text-white/70">Built for Daburji & Amritsar Families · 4.9★ Rated on Google</p>
          <Link
            href="/admin"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white/80 hover:text-white text-xs font-bold transition-all shadow-sm"
          >
            🔐 Doctor Portal
          </Link>
        </div>
      </div>
    </footer>
  );
}


