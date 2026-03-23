import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

// Display font — bold, geometric, unforgettable headings
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

// Body font — clean, readable, modern
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata = {
  title: "Clear View Opticals — Firozabad's Most Trusted Optical Shop",
  description:
    "Affordable, Stylish & Same-Day Glasses in Firozabad, Uttar Pradesh. Free eye checkup with every visit.",
  keywords: "optical shop, glasses, eye checkup, Firozabad, Uttar Pradesh, frames, sunglasses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-dm antialiased bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}