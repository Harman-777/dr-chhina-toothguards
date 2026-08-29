import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Chhina's Tooth Guards | Best Dental Clinic in Amritsar",
    template: "%s | Dr. Chhina's Tooth Guards",
  },
  description:
    "Dr. Chhina's Tooth Guards — Multi-speciality Dental Clinic in Daburji, Amritsar. Painless treatments, family-like care, modern equipment. 4.9★ rated. Book your appointment today!",
  keywords: [
    "dentist amritsar",
    "dental clinic amritsar",
    "best dentist in amritsar",
    "root canal amritsar",
    "tooth guards",
    "dr chhina",
    "dental clinic daburji",
    "painless dental treatment",
    "clear aligners amritsar",
    "invisalign amritsar",
  ],
  openGraph: {
    title: "Dr. Chhina's Tooth Guards | Best Dental Clinic in Amritsar",
    description:
      "Multi-speciality Dental Clinic in Daburji, Amritsar. Painless treatments, family-like care, 4.9★ rated.",
    url: "https://drchinnastoothguards.com",
    siteName: "Dr. Chhina's Tooth Guards",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0F6E68" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
