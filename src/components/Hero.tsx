export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-4 pb-8 pt-16 text-center sm:px-6 sm:pb-12 sm:pt-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Free <span className="text-emerald-600">Email Validator</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 sm:text-xl">
          Verify any email address instantly. Check syntax, MX records, deliverability,
          and disposable email detection — no sign-up required.
        </p>
      </div>
    </section>
  );
}
