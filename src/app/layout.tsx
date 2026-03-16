import FeedbackWidget from "@/components/FeedbackWidget";
import Script from "next/script";
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading", weight: ["400","500","600","700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://email.toolboxlite.com";

export const metadata: Metadata = {
  title: "Free Email Validator Online — Verify Any Email Address | MailCheck",
  description: "Instantly validate email addresses — check syntax, MX records, SMTP deliverability, and disposable detection. Free, fast, no sign-up.",
  keywords: ["email validator", "email verification", "check email", "verify email address", "MX check", "disposable email check", "free email validator"],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Free Email Validator Online | MailCheck",
    description: "Instantly validate any email address — syntax, MX, SMTP, disposable check. Free and fast.",
    url: siteUrl, siteName: "MailCheck", type: "website", locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: "Free Email Validator | MailCheck", description: "Validate any email address instantly — free, no sign-up." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5881105388002876" crossOrigin="anonymous" strategy="afterInteractive" />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased bg-gray-50 text-gray-900`}>
        {children}
        <FeedbackWidget />
      </body>
    </html>
  );
}
