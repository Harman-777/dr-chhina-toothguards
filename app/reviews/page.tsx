import { Metadata } from "next";
import { REVIEWS, CLINIC } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Patient Reviews (4.9★) | Dr. Chhina's Tooth Guards",
  description:
    "Read real Google Maps patient reviews for Dr. Chhina's Tooth Guards in Daburji, Amritsar. 4.9★ rated based on 65+ reviews.",
};

export default function ReviewsPage() {
  return (
    <div className="pt-24 pb-20 bg-background">
      {/* Header */}
      <section className="gradient-mesh text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md text-amber-300 border border-white/20 shadow-sm">
            <span className="text-amber-300 text-sm">★★★★★</span>
            <span>{CLINIC.rating} / 5.0 Rating ({CLINIC.reviewCount}+ Reviews)</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight">
            What Our Patients Say
          </h1>
          
          <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed">
            Authentic, unedited feedback from real patients in Daburji and Amritsar who experienced our gentle dental care.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-border-mint rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-amber-500 font-bold text-lg tracking-wider">
                    {"★".repeat(review.rating)}
                  </span>
                  <span className="text-xs text-foreground-muted font-medium">
                    {review.date}
                  </span>
                </div>

                <p className="text-foreground text-sm italic leading-relaxed font-normal">
                  &quot;{review.text}&quot;
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-border-light flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary-light text-primary font-bold flex items-center justify-center text-xs">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-heading font-extrabold text-foreground text-sm">
                    {review.name}
                  </span>
                </div>
                <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                  <span className="text-xs">✓</span> Google Review
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Link CTA */}
        <div className="mt-16 text-center">
          <a
            href={CLINIC.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-base hover:scale-105 shadow-xl shadow-primary/20 transition-all"
          >
            ⭐ Read All 65+ Live Reviews on Google Maps
            <span className="text-xl">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}

