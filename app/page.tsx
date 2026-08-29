"use client";

import { useState } from "react";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import AboutSnippet from "@/components/home/AboutSnippet";
import ReviewsCarousel from "@/components/home/ReviewsCarousel";
import LocationMap from "@/components/home/LocationMap";
import BookingModal from "@/components/booking/BookingModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Hero onBookClick={() => setBookingOpen(true)} />
      <TrustBar />
      <ServicesGrid />
      <AboutSnippet />
      <ReviewsCarousel />
      <LocationMap />
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
}
