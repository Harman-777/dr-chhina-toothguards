import { Metadata } from "next";
import { CLINIC } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Clinic Gallery | Dr. Chhina's Tooth Guards",
  description:
    "Take a tour of Dr. Chhina's Tooth Guards in Daburji, Amritsar. Explore our warm terracotta architecture, 2 consultation rooms, and in-house dental lab.",
};

export default function GalleryPage() {
  const facilityAreas = [
    {
      title: "Reception & Waiting Lounge",
      category: "Architecture",
      gradient: "from-[#C4856A] via-[#E5987A] to-[#D4B896]",
      icon: "🛋️",
      desc: "Warm terracotta curved walls, soothing ambient lighting, and comfortable family seating designed by Sifti Design Studio.",
    },
    {
      title: "Treatment Room 1",
      category: "Consultation",
      gradient: "from-[#0D5C54] via-[#147A73] to-[#00433D]",
      icon: "💺",
      desc: "Fully equipped with modern dental chair, digital intra-oral scanner, and quiet rotary RCT systems.",
    },
    {
      title: "Treatment Room 2",
      category: "Consultation",
      gradient: "from-[#1E6091] via-[#0D5C54] to-[#0A524D]",
      icon: "✨",
      desc: "Secondary treatment room dedicated to clear aligner therapy, braces adjustment, and smile makeovers.",
    },
    {
      title: "In-House Dental Laboratory",
      category: "Laboratory",
      gradient: "from-[#FF6B35] via-[#FF8A5C] to-[#E8A33D]",
      icon: "🔬",
      desc: "Custom tooth guard fabrication, night guard milling, retainer crafting, and digital model inspection.",
    },
    {
      title: "Natural Skylight Corridors",
      category: "Design",
      gradient: "from-[#D4B896] via-[#E8D0B5] to-[#FAF3EC]",
      icon: "☀️",
      desc: "Diagonal spatial layout with skylights bringing natural sunlight throughout the clinic all day.",
    },
    {
      title: "Sterilization & Hygiene Zone",
      category: "Hygiene",
      gradient: "from-[#10B981] via-[#0D5C54] to-[#042F2C]",
      icon: "🛡️",
      desc: "Multi-stage autoclave sterilization and strict infection control protocols for 100% patient safety.",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-background">
      {/* Header */}
      <section className="gradient-mesh text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl space-y-5 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md text-amber-300 border border-white/20 shadow-sm">
            Clinic Tour & Facility
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight">
            Explore Our Dental Sanctuary
          </h1>
          <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed">
            Designed to feel warm, calm, and human. Take a visual tour of our Daburji facility.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilityAreas.map((area, i) => (
            <div
              key={i}
              className="bg-white border border-border-mint rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col group"
            >
              {/* Graphic Banner */}
              <div
                className={`h-52 bg-gradient-to-br ${area.gradient} flex items-center justify-center text-5xl relative p-6 overflow-hidden`}
              >
                <div className="w-22 h-22 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <span className="absolute top-4 right-4 text-xs font-bold px-3.5 py-1 rounded-full bg-black/30 text-white backdrop-blur-md border border-white/20">
                  {area.category}
                </span>
              </div>

              {/* Text info */}
              <div className="p-7 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-foreground group-hover:text-primary transition-colors tracking-tight">
                    {area.title}
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed mt-2 font-normal">
                    {area.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Footer Notice */}
        <div className="mt-16 text-center bg-gradient-to-br from-surface-mint to-white p-8 sm:p-10 rounded-3xl border border-primary/20 space-y-4 max-w-2xl mx-auto shadow-md">
          <h3 className="font-heading font-extrabold text-2xl text-primary-dark tracking-tight">
            Want to see live clinic updates?
          </h3>
          <p className="text-sm sm:text-base text-foreground/80 font-medium">
            Follow our official Instagram handle for daily clinical updates, patient transformations, and photos.
          </p>
          <a
            href={CLINIC.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-vibrant to-accent text-white font-bold text-sm shadow-xl shadow-accent/25 hover:scale-105 transition-all"
          >
            📷 Visit @dr.chhinas_tg_dentalclinic on Instagram
          </a>
        </div>
      </section>
    </div>
  );
}

