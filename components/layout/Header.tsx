"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, CLINIC } from "@/lib/constants";
import { formatPhoneLink } from "@/lib/utils";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-border-light transition-all duration-300 ${
          scrolled ? "py-3 shadow-md" : "py-4 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-primary to-accent-vibrant p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-primary-dark rounded-[14px] flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C9.5 2 7.5 3 6.5 5C5.5 7 5 9.5 5.5 12C6 14.5 7 17 8.5 19C9.5 20.5 10.5 21.5 12 22C13.5 21.5 14.5 20.5 15.5 19C17 17 18 14.5 18.5 12C19 9.5 18.5 7 17.5 5C16.5 3 14.5 2 12 2Z"
                    fill="white"
                  />
                  <path
                    d="M12 6C11 6 10 6.5 9.5 7.5C9 8.5 9 9.5 9.5 10.5C10 11.5 11 12 12 12C13 12 14 11.5 14.5 10.5C15 9.5 15 8.5 14.5 7.5C14 6.5 13 6 12 6Z"
                    fill="#0D5C54"
                  />
                </svg>
              </div>
            </div>
            
            <div className="hidden sm:block">
              <p className="font-heading font-extrabold text-lg leading-tight text-foreground">
                Dr. Chhina&apos;s
              </p>
              <p className="text-[11px] font-bold tracking-widest uppercase text-primary">
                Tooth Guards
              </p>
            </div>
          </Link>

          {/* Desktop Nav - Always Clean White Capsule */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-gray-100/80 p-1.5 rounded-full border border-gray-200/80">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4.5 py-2 rounded-full text-xs font-extrabold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white shadow-md scale-102"
                      : "text-foreground-muted hover:text-primary hover:bg-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={formatPhoneLink(CLINIC.phone)}
              className="hidden md:flex items-center gap-2 px-4.5 py-2.5 rounded-2xl text-xs font-bold bg-primary-light text-primary border border-primary/20 hover:bg-primary-light/80 transition-all hover:scale-105 shadow-sm"
            >
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call Now
            </a>

            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-accent-vibrant to-accent text-white text-xs font-bold transition-all hover:scale-105 shadow-lg shadow-accent/25"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2.5 rounded-2xl text-foreground bg-gray-100 hover:bg-gray-200 transition-all"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

