"use client";

import { useState } from "react";
import { SERVICES, TIME_SLOTS, CLINIC } from "@/lib/constants";
import { formatWhatsAppLink } from "@/lib/utils";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
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

  if (!isOpen) return null;

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

  const whatsappMessage = `Hello Dr. Chhina's Tooth Guards! I have requested an appointment via your website:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Service: ${formData.service}
- Preferred Date: ${formData.date}
- Preferred Time: ${formData.timeSlot}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-background border border-border-light rounded-3xl w-full max-w-lg shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-foreground-muted hover:text-foreground hover:bg-gray-100"
          aria-label="Close modal"
        >
          ✕
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                Appointment Booking
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-foreground">
                Book Your Dental Visit
              </h3>
              <p className="text-xs text-foreground-muted">
                Select your preferred date & time. Our team will confirm shortly.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
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
                  className="w-full px-4 py-2.5 rounded-xl border border-border-light bg-white text-sm text-foreground focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-border-light bg-white text-sm text-foreground focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-border-light bg-white text-sm text-foreground focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Select Treatment / Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-border-light bg-white text-sm text-foreground focus:ring-2 focus:ring-primary outline-none"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.priceRange})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
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
                    className="w-full px-4 py-2.5 rounded-xl border border-border-light bg-white text-sm text-foreground focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) =>
                      setFormData({ ...formData, timeSlot: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-border-light bg-white text-sm text-foreground focus:ring-2 focus:ring-primary outline-none"
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
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Dental Concern / Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your issue or preferred time notes..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-border-light bg-white text-sm text-foreground focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl bg-accent text-white font-bold text-base shadow-lg shadow-accent/25 hover:bg-accent-dark transition-all disabled:opacity-50 mt-4"
            >
              {loading ? "Submitting..." : "Confirm & Send Booking Request"}
            </button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-success-light text-success flex items-center justify-center text-3xl mx-auto">
              ✓
            </div>
            <h3 className="font-heading font-bold text-2xl text-foreground">
              Booking Request Received!
            </h3>
            <p className="text-sm text-foreground-muted max-w-sm mx-auto">
              Thank you, {formData.name}. Our clinic will call you at {formData.phone} to confirm your slot for {formData.date} at {formData.timeSlot}.
            </p>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={formatWhatsAppLink(CLINIC.whatsapp, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                💬 Confirm Instant Booking on WhatsApp
              </a>
              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
