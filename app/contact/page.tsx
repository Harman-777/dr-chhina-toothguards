"use client";

import { useState } from "react";
import { CLINIC, HOURS, TIME_SLOTS, SERVICES } from "@/lib/constants";
import { formatPhoneLink, formatWhatsAppLink, isClinicOpen } from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: SERVICES[0].title as string,
    date: "",
    timeSlot: TIME_SLOTS.morning[0] as string,
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = `Hello Dr. Chhina's Tooth Guards! I'd like to book an appointment.
- Name: ${formData.name}
- Phone: ${formData.phone}
- Service: ${formData.service}
- Preferred Date: ${formData.date}
- Preferred Time: ${formData.timeSlot}`;

  const openStatus = isClinicOpen();

  return (
    <main className="pt-24 pb-20 bg-background">
      {/* Page Header */}
      <section className="gradient-mesh text-white py-20 -mt-24 pt-36 mb-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl space-y-4 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md text-amber-300 border border-white/20 shadow-sm">
            Get In Touch
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Contact & Book Appointment
          </h1>
          <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed">
            Reserve your consultation, visit our Daburji clinic, or reach out directly via phone or WhatsApp.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Contact Info + Map */}
        <div className="space-y-8">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <a
              href={formatPhoneLink(CLINIC.phone)}
              className="group flex items-start gap-4 p-6 rounded-3xl bg-white border border-border-mint hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-primary-light to-teal-50 text-primary border border-primary/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                📞
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-foreground-muted">Call Us Directly</p>
                <p className="font-heading font-extrabold text-lg text-foreground group-hover:text-primary transition-colors mt-0.5">
                  {CLINIC.phoneFormatted}
                </p>
              </div>
            </a>

            <a
              href={CLINIC.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-6 rounded-3xl bg-white border border-border-mint hover:border-[#25D366] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-13 h-13 rounded-2xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                💬
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-foreground-muted">Instant WhatsApp</p>
                <p className="font-heading font-extrabold text-lg text-foreground group-hover:text-[#25D366] transition-colors mt-0.5">
                  Send Message
                </p>
              </div>
            </a>

            <a
              href={CLINIC.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-6 rounded-3xl bg-white border border-border-mint hover:border-primary hover:shadow-xl transition-all duration-300 sm:col-span-2"
            >
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 text-amber-600 border border-amber-200/60 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                📍
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-foreground-muted">Clinic Address</p>
                <p className="font-heading font-extrabold text-lg text-foreground group-hover:text-primary transition-colors mt-0.5">
                  {CLINIC.address.line1}
                </p>
                <p className="text-sm text-foreground-muted font-medium mt-0.5">{CLINIC.address.line2}</p>
              </div>
            </a>
          </div>

          {/* Hours Table */}
          <div className="bg-white rounded-3xl border border-border-mint p-7 shadow-md space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border-light">
              <h3 className="font-heading font-extrabold text-xl text-foreground tracking-tight">Clinic Schedule & Hours</h3>
              <span
                className={`text-xs font-bold px-3.5 py-1.5 rounded-full ${
                  openStatus.isOpen
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-rose-50 text-rose-600 border border-rose-200"
                }`}
              >
                {openStatus.isOpen ? "● Open Now" : "● Closed Now"}
              </span>
            </div>
            
            <div className="space-y-2">
              {HOURS.map((h) => (
                <div
                  key={h.day}
                  className={`flex justify-between py-2 px-3.5 rounded-2xl text-xs font-medium transition-colors ${
                    !h.isOpen ? "bg-rose-50/50 text-rose-500 font-semibold" : "hover:bg-surface-mint/60 text-foreground"
                  }`}
                >
                  <span className="font-bold">{h.day}</span>
                  <span className="font-semibold text-foreground-muted">
                    {h.isOpen
                      ? `${h.open} – ${h.close1} & ${h.open2} – ${h.close2}`
                      : "Closed"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-3xl overflow-hidden border border-border-mint shadow-md min-h-[300px]">
            <iframe
              src={CLINIC.googleMapsEmbed}
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Chhina's Tooth Guards on Google Maps"
            />
          </div>
        </div>

        {/* Right: Booking Form */}
        <div>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-border-mint p-7 sm:p-9 shadow-xl space-y-6 sticky top-28"
            >
              <div className="space-y-1.5 pb-2 border-b border-border-light">
                <span className="text-xs font-bold text-accent-vibrant uppercase tracking-widest">
                  Online Reservation
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
                  Book Your Dental Visit
                </h2>
                <p className="text-xs text-foreground-muted font-medium">
                  Select your preferred date & time slot. Our team will contact you to confirm.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gurpreet Singh"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl border border-border-light bg-surface-mint/30 text-sm text-foreground focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl border border-border-light bg-surface-mint/30 text-sm text-foreground focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl border border-border-light bg-surface-mint/30 text-sm text-foreground focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">
                    Select Treatment / Specialty Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl border border-border-light bg-surface-mint/30 text-sm text-foreground focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.priceRange})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl border border-border-light bg-surface-mint/30 text-sm text-foreground focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) =>
                        setFormData({ ...formData, timeSlot: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl border border-border-light bg-surface-mint/30 text-sm text-foreground focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all"
                    >
                      <optgroup label="Morning (10 AM - 2 PM)">
                        {TIME_SLOTS.morning.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Evening (4 PM - 7 PM)">
                        {TIME_SLOTS.evening.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">
                    Dental Concern / Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe any symptoms or preferred timing notes..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl border border-border-light bg-surface-mint/30 text-sm text-foreground focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-accent-vibrant to-accent text-white font-bold text-base shadow-xl shadow-accent/25 hover:scale-102 transition-all disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Confirm & Send Booking Request"}
              </button>

              <p className="text-center text-xs text-foreground-muted font-medium">
                Or call us directly at{" "}
                <a href={formatPhoneLink(CLINIC.phone)} className="text-primary font-bold hover:underline">
                  {CLINIC.phoneFormatted}
                </a>
              </p>
            </form>
          ) : (
            <div className="bg-white rounded-3xl border border-border-mint p-9 shadow-xl text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center text-4xl mx-auto shadow-sm">
                ✓
              </div>
              
              <h2 className="font-heading font-extrabold text-2xl text-foreground tracking-tight">
                Booking Request Received!
              </h2>
              
              <p className="text-sm text-foreground-muted leading-relaxed max-w-sm mx-auto font-medium">
                Thank you, <strong className="text-foreground">{formData.name}</strong>. Our clinic staff will call you at{" "}
                <strong className="text-foreground">{formData.phone}</strong> to confirm your slot for <strong className="text-foreground">{formData.date}</strong> at{" "}
                <strong className="text-foreground">{formData.timeSlot}</strong>.
              </p>
              
              <div className="pt-2 flex flex-col gap-3 max-w-xs mx-auto">
                <a
                  href={formatWhatsAppLink(CLINIC.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-2xl bg-[#25D366] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 hover:bg-[#20ba5a] transition-all hover:scale-105"
                >
                  💬 Confirm Instantly on WhatsApp
                </a>
                <a
                  href="/"
                  className="w-full py-3 px-5 rounded-2xl bg-surface-mint text-primary-dark font-bold text-sm hover:bg-primary-light text-center transition-colors"
                >
                  Back to Homepage
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

