import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bayview Dental Studio — Calm, Modern Dentistry in San Francisco",
  description:
    "From sudden tooth pain relief to routine cleanings and natural smile makeovers—experience gentle, unhurried dental care in a warm studio space in Pacific Heights, San Francisco.",
  keywords: [
    "san francisco dentist",
    "pacific heights dental",
    "bayview dental studio",
    "gentle dentistry sf",
    "emergency dentist san francisco",
    "cosmetic dentist sf",
    "dr julian vance",
  ],
  openGraph: {
    title: "Bayview Dental Studio — Calm, Modern Dentistry in San Francisco",
    description:
      "From sudden tooth pain relief to routine cleanings and natural smile makeovers—experience gentle, unhurried dental care in a warm studio space.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${jakarta.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface antialiased selection:bg-primary-fixed-dim selection:text-primary">
        {children}
      </body>
    </html>
  );
}
