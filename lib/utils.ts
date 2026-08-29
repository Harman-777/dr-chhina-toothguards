import { HOURS } from "./constants";

/**
 * Check if the clinic is currently open based on the current day and time.
 */
export function isClinicOpen(): { isOpen: boolean; message: string } {
  const now = new Date();
  const dayIndex = now.getDay(); // 0 = Sunday, 1 = Monday, ...
  
  // Map JS day (0=Sun) to our HOURS array (0=Mon)
  const hoursIndex = dayIndex === 0 ? 6 : dayIndex - 1;
  const todayHours = HOURS[hoursIndex];

  if (!todayHours.isOpen) {
    return { isOpen: false, message: "Closed today" };
  }

  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute;

  // Morning session: 10:00 AM - 2:00 PM (600 - 840)
  const morningStart = 10 * 60;
  const morningEnd = 14 * 60;

  // Evening session: 4:00 PM - 7:00 PM (960 - 1140)
  const eveningStart = 16 * 60;
  const eveningEnd = 19 * 60;

  if (currentTime >= morningStart && currentTime < morningEnd) {
    return { isOpen: true, message: "Open · Closes at 2:00 PM" };
  }

  if (currentTime >= morningEnd && currentTime < eveningStart) {
    return { isOpen: false, message: "Closed · Reopens at 4:00 PM" };
  }

  if (currentTime >= eveningStart && currentTime < eveningEnd) {
    return { isOpen: true, message: "Open · Closes at 7:00 PM" };
  }

  if (currentTime < morningStart) {
    return { isOpen: false, message: "Closed · Opens at 10:00 AM" };
  }

  return { isOpen: false, message: "Closed · Opens tomorrow at 10:00 AM" };
}

/**
 * Format a phone number for tel: links
 */
export function formatPhoneLink(phone: string): string {
  return `tel:+91${phone}`;
}

/**
 * Format a WhatsApp link with optional message
 */
export function formatWhatsAppLink(
  phone: string,
  message?: string
): string {
  const base = `https://wa.me/${phone}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

/**
 * Get the current day name
 */
export function getCurrentDayName(): string {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[new Date().getDay()];
}

/**
 * Check if a given date is a Sunday (clinic closed)
 */
export function isSunday(date: Date): boolean {
  return date.getDay() === 0;
}

/**
 * Generate star rating display
 */
export function getStarDisplay(rating: number): string {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  let stars = "★".repeat(fullStars);
  if (hasHalf) stars += "½";
  return stars;
}

/**
 * Truncate text to a max length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trimEnd() + "...";
}

/**
 * Format a blog post date
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Smooth scroll to an element by ID
 */
export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
