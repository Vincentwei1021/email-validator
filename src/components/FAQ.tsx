"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What does the email validator check?",
    a: "Our validator performs four checks: syntax validation (is the format correct?), MX record lookup (does the domain have mail servers?), SMTP verification (does the mail server accept the address?), and disposable email detection (is it a temporary/throwaway address?).",
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
    a: "Disposable emails are temporary addresses from services like Mailinator or Guerrilla Mail. They're often used to bypass sign-up forms and are usually not reliable for long-term communication.",
  },
  {
    q: "What are MX records?",
    a: "MX (Mail Exchange) records are DNS entries that specify which mail servers are responsible for receiving email for a domain. If a domain has no MX records, it cannot receive email.",
  },
  {
    q: "How accurate is the SMTP check?",
    a: "SMTP verification connects to the recipient's mail server to check if the address exists. However, some servers don't reveal this information (catch-all domains, greylisting). In those cases, we mark the result as 'Risky' rather than making a false claim.",
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border border-gray-200 bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-medium text-gray-900 sm:text-base">{faq.q}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="border-t border-gray-100 px-5 pb-4 pt-3">
                  <p className="text-sm leading-relaxed text-gray-600">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
