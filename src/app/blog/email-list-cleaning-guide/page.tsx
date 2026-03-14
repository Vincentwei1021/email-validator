import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Clean Your Email List in 2026: A Step-by-Step Guide | MailCheck",
  description: "A practical guide to cleaning your email list — identifying invalid addresses, removing disengaged subscribers, and maintaining list hygiene for better deliverability.",
  keywords: ["email list cleaning", "clean email list", "email list hygiene", "remove invalid emails", "email deliverability 2026"],
  alternates: { canonical: "/blog/email-list-cleaning-guide" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Clean Your Email List in 2026: A Step-by-Step Guide",
  description: "A practical guide to cleaning your email list — identifying invalid addresses, removing disengaged subscribers, and maintaining list hygiene for better deliverability.",
  datePublished: "2026-03-08",
  dateModified: "2026-03-08",
  author: { "@type": "Organization", name: "MailCheck" },
  publisher: { "@type": "Organization", name: "MailCheck" },
};

export default function EmailListCleaningGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <article className="mx-auto max-w-3xl">
          <Link href="/blog" className="text-sm text-emerald-600 hover:underline">← Back to Blog</Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to Clean Your Email List in 2026: A Step-by-Step Guide
          </h1>
          <time className="text-sm text-gray-400">March 8, 2026</time>

          <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
            <p>
              A clean email list is the foundation of good email marketing. It doesn&apos;t matter how good your content is — if your list is full of invalid addresses, role accounts, and disengaged subscribers, your campaigns will underperform and your sender reputation will suffer.
            </p>
            <p>
              Email list cleaning isn&apos;t a one-time event; it&apos;s ongoing maintenance. Here&apos;s a step-by-step process for getting your list in shape and keeping it that way.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">Step 1: Validate All Addresses</h2>
            <p>
              Start by checking every address in your list for validity. This means more than a syntax check — you want to verify that the domain exists, has MX records (meaning it&apos;s configured to receive email), and that the address isn&apos;t from a known disposable email service.
            </p>
            <p>
              Use <Link href="/" className="text-emerald-600 hover:underline">MailCheck</Link> to verify individual addresses instantly. For bulk validation of large lists, look for services that can process CSV exports from your ESP.
            </p>
            <p>
              Remove any address that comes back as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Invalid</strong> — the address doesn&apos;t exist or the domain doesn&apos;t accept email</li>
              <li><strong>Disposable</strong> — from a throwaway email service (Mailinator, Guerrilla Mail, etc.)</li>
              <li><strong>Likely typo</strong> — addresses where the domain is suspiciously close to a major provider (e.g., &quot;gmial.com&quot;)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">Step 2: Segment Hard Bounces</h2>
            <p>
              Hard bounces happen when an email is permanently undeliverable — the address doesn&apos;t exist, the domain doesn&apos;t exist, or the server explicitly rejects the message. These addresses should be <strong>removed immediately and permanently</strong>.
            </p>
            <p>
              Most ESPs automatically suppress hard bounce addresses, but it&apos;s worth auditing your suppression list periodically to ensure nothing has slipped through. Never attempt to re-send to a hard bounce address.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">Step 3: Handle Soft Bounces</h2>
            <p>
              Soft bounces are temporary delivery failures — a full inbox, a temporarily unavailable server. Unlike hard bounces, soft bounces don&apos;t require immediate removal. However, if an address soft bounces <strong>three or more consecutive times</strong>, treat it like a hard bounce and remove it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">Step 4: Re-engage or Remove Inactive Subscribers</h2>
            <p>
              Subscribers who haven&apos;t opened or clicked any of your emails in 6-12 months are dragging down your engagement metrics — and hurting your deliverability. ISPs use engagement signals (opens, clicks) to determine whether to inbox or spam your emails.
            </p>
            <p>
              Before removing inactive subscribers, run a <strong>re-engagement campaign</strong>: send 2-3 emails specifically to your inactive segment with a clear message (&quot;We miss you — here&apos;s an offer to come back&quot;). Those who engage stay; those who don&apos;t get removed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">Step 5: Clean Role Addresses</h2>
            <p>
              Role addresses — info@, support@, admin@, sales@, postmaster@ — go to group inboxes rather than individual people. They have poor engagement rates, often high spam complaint rates, and sometimes feed into honeypot spam traps. Remove them or move them to a separate, lower-frequency list.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">Step 6: Implement Ongoing Hygiene</h2>
            <p>
              List cleaning is most effective when it&apos;s built into your routine, not a panic response to deliverability problems. Best practices:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Validate new addresses at signup (real-time validation)</li>
              <li>Run a full list audit every 6 months</li>
              <li>Set automatic suppression for addresses that hard bounce</li>
              <li>Review your inactive segment quarterly</li>
              <li>Use double opt-in for new subscribers — it reduces fake and typo signups dramatically</li>
            </ul>

            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
              <p className="font-semibold text-emerald-800">Start validating addresses now</p>
              <p className="mt-1 text-emerald-700">
                <Link href="/" className="underline">MailCheck</Link> validates any email address instantly — check syntax, domain, MX records, and disposable email detection for free.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
