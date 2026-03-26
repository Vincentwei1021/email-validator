import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmailValidatorTool from "@/components/EmailValidator";
import HowTo from "@/components/HowTo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

/* ── FAQ data (shared between component + JSON-LD) ── */
const faqItems = [
  {
    q: "What does the email validator check?",
    a: "Our email verification tool performs four checks: syntax validation (is the format correct?), MX record lookup (does the domain have mail servers?), SMTP verification (does the mail server accept the address?), and disposable email detection (is it a temporary/throwaway address?).",
  },
  {
    q: "Is this email validator free?",
    a: "Yes, completely free. No sign-up, no limits on single validation. Batch validation supports up to 10 emails at a time.",
  },
  {
    q: "What do the verdicts mean?",
    a: "Deliverable: the email is valid and the server accepts it. Risky: the email might work but has concerns (disposable address, greylisting, etc.). Undeliverable: the domain has no mail servers. Invalid: the email format is wrong.",
  },
  {
    q: "What is a disposable email?",
    a: "Disposable emails are temporary addresses from services like Mailinator or Guerrilla Mail. They\u0027re often used to bypass sign-up forms and are usually not reliable for long-term communication.",
  },
  {
    q: "What are MX records?",
    a: "MX (Mail Exchange) records are DNS entries that specify which mail servers are responsible for receiving email for a domain. If a domain has no MX records, it cannot receive email.",
  },
  {
    q: "How accurate is the SMTP check?",
    a: "SMTP verification connects to the recipient\u0027s mail server to check if the address exists. However, some servers don\u0027t reveal this information (catch-all domains, greylisting). In those cases, we mark the result as \u0027Risky\u0027 rather than making a false claim.",
  },
  {
    q: "Is my data stored or tracked?",
    a: "No. Email addresses you validate are sent to our verification API for real-time checking and are not stored, logged, or shared with third parties.",
  },
  {
    q: "Can I validate emails in bulk?",
    a: "Yes! Switch to Batch mode and enter up to 10 emails (one per line). Each email is validated independently and results are shown in a summary table.",
  },
];

/* ── JSON-LD: WebApplication ── */
const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "MailCheck",
  url: "https://email.toolboxlite.com",
  description:
    "Free online email validator and verification tool. Check syntax, MX records, deliverability, and disposable email detection instantly.",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  browserRequirements: "Requires a modern web browser",
};

/* ── JSON-LD: FAQPage ── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

/* ── JSON-LD: HowTo ── */
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Check an Email Address Online for Free",
  description:
    "Follow these simple steps to verify any email address using MailCheck — a free online email verification tool.",
  step: [
    {
      "@type": "HowToStep",
      name: "Enter the email address",
      text: "Type or paste the email address you want to check into the input field. You can validate a single email or switch to Batch mode for up to 10 at once.",
    },
    {
      "@type": "HowToStep",
      name: "Click Validate",
      text: "Hit the Validate button. Our tool checks the syntax, looks up MX records, verifies SMTP reachability, and scans against disposable email databases — all in seconds.",
    },
    {
      "@type": "HowToStep",
      name: "Review the results",
      text: "See a detailed breakdown: deliverability verdict, score, MX records, SMTP status, and whether the address is disposable. Use the verdict to decide if the email is safe to use.",
    },
  ],
  tool: { "@type": "HowToTool", name: "MailCheck — Free Email Verification Tool" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EmailValidatorTool />
        <HowTo />

        {/* Features section — keyword rich */}
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Why Use Our Email Verification Tool?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "📧",
                  title: "Syntax Validation",
                  desc: "Instantly check if an email address follows the correct format — catch typos and malformed addresses before they cause bounces.",
                },
                {
                  icon: "🌐",
                  title: "MX Record Lookup",
                  desc: "Verify that the domain has valid mail exchange (MX) records configured and is capable of receiving email.",
                },
                {
                  icon: "🔌",
                  title: "SMTP Verification",
                  desc: "Connect directly to the recipient\u0027s mail server to confirm whether the specific email address exists and accepts messages.",
                },
                {
                  icon: "🛡️",
                  title: "Disposable Detection",
                  desc: "Identify temporary and throwaway email addresses from services like Mailinator and Guerrilla Mail to keep your list clean.",
                },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                  <div className="mb-3 text-3xl">{f.icon}</div>
                  <h3 className="mb-2 text-base font-semibold text-gray-900">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ items={faqItems} />

        {/* About — keyword-rich */}
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              About MailCheck
            </h2>
            <div className="mt-4 space-y-4 text-gray-600 leading-relaxed text-left sm:text-center">
              <p>
                <strong>MailCheck</strong> is a <strong>free email verification tool</strong>{" "}
                designed to help you <strong>check any email address</strong> in seconds. Whether
                you&apos;re a developer building a sign-up form, a marketer cleaning a mailing
                list, or just curious about an address&apos;s validity — we&apos;ve got you covered.
              </p>
              <p>
                Our <strong>email validator</strong> performs deep checks that go beyond simple
                syntax: we query DNS for MX records, connect to SMTP servers for real-time
                deliverability verification, and cross-reference addresses against a constantly
                updated database of disposable email providers.
              </p>
              <p>
                Everything happens in real-time with no data retention. We never store, log, or
                share the email addresses you check. No accounts, no tracking, no limits — just
                fast, accurate <strong>email verification</strong> when you need it.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}
