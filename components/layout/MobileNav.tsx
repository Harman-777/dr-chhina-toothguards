"use client";

import Link from "next/link";
import { NAV_LINKS, CLINIC } from "@/lib/constants";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Menu Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background shadow-2xl p-6 flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300">
        <div>
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-border-light">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
                TG
              </div>
              <span className="font-heading font-bold text-foreground">
                Dr. Chhina&apos;s
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-foreground-muted hover:text-foreground rounded-lg"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="px-4 py-3 rounded-xl text-base font-medium text-foreground hover:bg-primary-light hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-border-light flex flex-col gap-3">
          <a
            href={formatPhoneLink(CLINIC.phone)}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-white font-semibold text-sm shadow-md"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call {CLINIC.phoneFormatted}
          </a>
          <a
            href={formatWhatsAppLink(CLINIC.whatsapp, "Hello! I would like to book an appointment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-sm shadow-md"
          >
            WhatsApp Booking
          </a>
          <Link
            href="/admin"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-mint text-primary border border-primary/20 font-semibold text-xs text-center hover:bg-primary-light transition-colors"
          >
            🔐 Doctor Console
          </Link>
        </div>
      </div>
    </div>
  );
}
