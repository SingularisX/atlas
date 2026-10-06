import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

// Three fonts, three jobs:
//   Instrument Serif → display headings (the "atlas book" / art side)
//   Geist Sans       → body text (clean, modern)
//   Geist Mono       → data, labels, numbers (the technical side)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

// What Google, LinkedIn and WhatsApp show when someone finds or shares the site.
export const metadata: Metadata = {
  title: {
    default: "Sutirtha Halder · Atlas",
    template: "%s · Atlas",
  },
  description:
    "Electronics engineer building the hardware that lets machines see. A live, verified record of skills, projects and progress.",
  authors: [{ name: "Sutirtha Halder" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
