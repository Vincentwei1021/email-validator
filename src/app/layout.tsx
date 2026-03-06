import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://emailvalidator.dev";

export const metadata: Metadata = {
  title: "Free Email Validator Online — Verify Any Email Address | EmailValidator",
  description:
    "Validate any email address instantly. Check syntax, MX records, deliverability, and disposable email detection — free, no sign-up required.",
  keywords: [
    "email validator",
    "email verification",
    "verify email address",
    "email checker",
    "check email deliverability",
    "MX record check",
    "disposable email detector",
    "free email validator",
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Free Email Validator Online | EmailValidator",
    description:
      "Validate any email address instantly. Check syntax, MX records, and deliverability — free, no sign-up.",
    url: siteUrl,
    siteName: "EmailValidator",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Email Validator Online | EmailValidator",
    description:
      "Validate any email address instantly. Check syntax, MX records, and deliverability — free.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
