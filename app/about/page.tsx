import { Metadata } from "next";
import Link from "next/link";
import { CLINIC } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Dr. Chhina's Tooth Guards",
  description:
    "Learn about Dr. Chhina's Tooth Guards in Daburji, Amritsar. Discover our 'Beyond Sterility' concept, warm interior, and family-like care philosophy.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-background">
      {/* Hero Header */}
      <section className="gradient-mesh text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl space-y-5 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md text-amber-300 border border-white/20 shadow-sm">
            About Our Practice
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight">
            A Warm Dental Sanctuary in Amritsar
          </h1>
          
          <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed">
            Redefining the dental experience with gentle care, modern technology, and a soothing, hospitality-inspired atmosphere.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="section-padding max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Concept Story */}
        <div className="space-y-6 text-center sm:text-left">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-terracotta-light text-accent-vibrant border border-accent/20">
            Architectural Vision
          </span>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground tracking-tight">
            The &quot;Beyond Sterility&quot; Design Concept
          </h2>
          
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed">
            Traditional dental clinics often feel cold, sterile, and anxiety-inducing. Designed by the renowned <strong>Sifti Design Studio</strong> (Principal Architects: Jagbir Singh & Harmanpreet Singh), Dr. Chhina&apos;s Tooth Guards was conceived around a single core vision: <em>Beyond Sterility</em>.
          </p>
          
          <p className="text-foreground-muted text-base leading-relaxed">
            The clinic features organic curved walls hand-finished in earthy terracotta tones, wide diagonal corridors, and natural skylights that illuminate treatment rooms with soft daylight.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white border border-border-mint p-8 rounded-3xl space-y-3.5 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
              🏛️
            </div>
            <h3 className="font-heading font-extrabold text-foreground text-xl tracking-tight">
              2 State-of-the-Art Rooms
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed font-normal">
              Equipped with modern ergonomic chairs, digital intra-oral scanners, and ultra-quiet rotary RCT systems.
            </p>
          </div>

          <div className="bg-white border border-border-mint p-8 rounded-3xl space-y-3.5 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/60 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
              🔬
            </div>
            <h3 className="font-heading font-extrabold text-foreground text-xl tracking-tight">
              In-House Dental Laboratory
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed font-normal">
              Ensures fast turnaround for custom retainers, protective tooth guards, porcelain crowns, and aligners.
            </p>
          </div>

          <div className="bg-white border border-border-mint p-8 rounded-3xl space-y-3.5 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 border border-teal-200/60 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
              👶
            </div>
            <h3 className="font-heading font-extrabold text-foreground text-xl tracking-tight">
              Child-Friendly Environment
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed font-normal">
              Gentle pediatric dental care designed to keep children relaxed, confident, and smiling throughout their visit.
            </p>
          </div>

          <div className="bg-white border border-border-mint p-8 rounded-3xl space-y-3.5 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
              🌿
            </div>
            <h3 className="font-heading font-extrabold text-foreground text-xl tracking-tight">
              Hospital-Grade Hygiene
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed font-normal">
              Multi-stage autoclave sterilization for every instrument, protecting your family&apos;s health and safety.
            </p>
          </div>
        </div>

        {/* Philosophy & Doctor Intro */}
        <div className="bg-gradient-to-br from-surface-mint to-white border border-primary/20 rounded-3xl p-8 sm:p-10 space-y-4 shadow-md">
          <div className="flex items-center gap-3">
            <span className="text-3xl">👨‍⚕️</span>
            <h3 className="font-heading font-extrabold text-2xl text-primary-dark tracking-tight">
              Our Care Philosophy
            </h3>
          </div>
          <p className="text-base text-foreground/85 leading-relaxed font-medium">
            Led by Dr. Jaskaran Chhina, our team believes in patient-first dentistry. We take the time to explain every procedure, discuss treatment options, and deliver painless care. Our 4.9★ rating across 65+ verified reviews reflects our dedication to your comfort.
          </p>
        </div>

        {/* Call to action */}
        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-2xl bg-gradient-to-r from-accent-vibrant to-accent text-white font-bold text-base shadow-xl shadow-accent/25 hover:scale-105 transition-all"
          >
            Book an Appointment with Us
            <span className="text-xl">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

