"use client";

import { HOURS } from "@/lib/constants";
import { isClinicOpen, getCurrentDayName } from "@/lib/utils";

export default function HoursWidget() {
  const currentStatus = isClinicOpen();
  const todayName = getCurrentDayName();

  return (
    <div className="bg-card border border-border-light rounded-2xl p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between pb-4 border-b border-border-light">
        <h3 className="font-heading font-bold text-foreground text-lg flex items-center gap-2">
          🕒 Clinic Hours
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            currentStatus.isOpen
              ? "bg-success-light text-success"
              : "bg-red-50 text-red-600"
          }`}
        >
          {currentStatus.message}
        </span>
      </div>

      <div className="space-y-2 text-sm">
        {HOURS.map((h) => {
          const isToday = h.day === todayName;
          return (
            <div
              key={h.day}
              className={`flex items-center justify-between py-1.5 px-3 rounded-lg ${
                isToday ? "bg-primary-light font-semibold text-primary" : "text-foreground-muted"
              }`}
            >
              <span>{h.day}</span>
              <span>
                {h.isOpen
                  ? `${h.open}–${h.close1}, ${h.open2}–${h.close2}`
                  : "Closed"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
