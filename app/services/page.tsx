import { Metadata } from "next";
import Link from "next/link";
import { SERVICES, CLINIC } from "@/lib/constants";
import { formatPhoneLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dental Services & Pricing | Dr. Chhina's Tooth Guards",
  description:
    "Explore our complete dental services in Amritsar: RCT, clear aligners, tooth guards, pediatric dentistry, implants, and cosmetic care with transparent price ranges.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20 bg-background">
      {/* Header */}
      <section className="gradient-mesh text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl space-y-5 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md text-amber-300 border border-white/20 shadow-sm">
            Multi-Speciality Treatments
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight">
            Our Dental Services & Indicative Pricing
          </h1>
          <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed">
            Transparent, affordable, and painless dental procedures tailored for every member of your family.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-border-mint rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 space-y-6 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-teal-400 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-light to-teal-50 text-primary border border-primary/10 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-accent-light text-accent-dark border border-accent/20">
                    {service.category}
                  </span>
                </div>

                <h2 className="font-heading font-extrabold text-2xl text-foreground group-hover:text-primary transition-colors tracking-tight">
                  {service.title}
                </h2>
                <p className="text-foreground-muted text-sm leading-relaxed font-normal">
                  {service.fullDesc}
                </p>
              </div>

              <div className="pt-6 border-t border-border-light flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase font-bold tracking-wider text-foreground-muted">
                    Indicative Price Range
                  </p>
                  <p className="font-heading font-extrabold text-xl text-primary-dark">
                    {service.priceRange}
                  </p>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <a
                    href={formatPhoneLink(CLINIC.phone)}
                    className="px-4 py-2.5 rounded-xl bg-surface-mint text-primary-dark border border-primary/20 text-xs font-bold hover:bg-primary hover:text-white transition-all shadow-sm"
                  >
                    📞 Inquiry
                  </a>
                  <Link
                    href="/contact"
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-vibrant to-accent text-white text-xs font-bold hover:scale-105 transition-all shadow-md"
                  >
                    Book Visit →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-border-mint text-center text-xs text-foreground-muted max-w-2xl mx-auto shadow-sm">
          * Prices listed are indicative ranges and may vary based on clinical complexity, materials selected, and individual treatment plans. Final costs are provided during your initial consultation.
        </div>
      </section>
    </div>
  );
}

