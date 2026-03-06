import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmailValidatorTool from "@/components/EmailValidator";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EmailValidatorTool />
        <FAQ />
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">About EmailValidator</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              EmailValidator is a free, privacy-first email verification tool. We check syntax,
              DNS records, mail server reachability, and disposable email databases in real-time.
              No sign-ups, no data storage, no tracking. Built for developers, marketers, and
              anyone who needs clean email lists.
            </p>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "EmailValidator",
            url: "https://emailvalidator.dev",
            description: "Free online email validator. Check syntax, MX records, deliverability, and disposable email detection instantly.",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            browserRequirements: "Requires a modern web browser",
          }),
        }}
      />
    </>
  );
}
