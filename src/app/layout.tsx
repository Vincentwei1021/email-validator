import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://emailvalidator.dev";

export const metadata: Metadata = {
  title: "Free Email Validator Online | Email Verification Tool",
  description:
    "Check any email address with our free email verification tool. Validate syntax, MX records, SMTP deliverability & detect disposable emails. No sign-up — 100% private.",
  keywords: [
    "email validator",
    "email verification tool",
    "check email address",
    "verify email address",
    "email checker",
    "email verifier",
    "check email deliverability",
    "MX record check",
    "disposable email detector",
    "free email validator online",
    "email address checker",
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Free Email Validator Online | Email Verification Tool",
    description:
      "Check any email address instantly — validate syntax, MX records, SMTP & disposable emails. Free, no sign-up.",
    url: siteUrl,
    siteName: "EmailValidator",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "EmailValidator — Free Email Verification Tool Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Email Validator Online | Email Verification Tool",
    description:
      "Check any email address instantly — validate syntax, MX records, SMTP & disposable emails. Free, no sign-up.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: { index: true, follow: true },
  other: {
    "theme-color": "#059669",
  },
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
