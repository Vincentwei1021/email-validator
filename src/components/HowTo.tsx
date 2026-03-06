export default function HowTo() {
  const steps = [
    {
      num: "1",
      title: "Enter the Email Address",
      desc: "Type or paste any email address into the input field — or switch to Batch mode to check up to 10 addresses at once.",
    },
    {
      num: "2",
      title: "Click Validate",
      desc: "Our email verification tool checks syntax, queries MX records, connects to the SMTP server, and scans disposable email databases — all in seconds.",
    },
    {
      num: "3",
      title: "Review Your Results",
      desc: "Get a detailed deliverability breakdown: verdict, score, MX records, SMTP status, and disposable detection. Decide instantly whether the email is safe to use.",
    },
  ];

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight text-gray-900">
          How to Check an Email Address — Free &amp; Instant
        </h2>
        <p className="mb-10 text-center text-gray-500">
          Verify any email address in three simple steps with our free email validator.
        </p>
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-700">
                {s.num}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
