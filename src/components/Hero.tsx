export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 px-4 pb-10 pt-20 text-center sm:px-6 sm:pb-16 sm:pt-28">
      {/* Decorative floating elements */}
      <div className="pointer-events-none absolute left-[10%] top-20 text-4xl opacity-20 animate-float" style={{animationDelay: '0s'}}>✉️</div>
      <div className="pointer-events-none absolute right-[15%] top-32 text-3xl opacity-15 animate-float" style={{animationDelay: '1s'}}>✅</div>
      <div className="pointer-events-none absolute left-[70%] top-16 text-2xl opacity-10 animate-float" style={{animationDelay: '2s'}}>🛡️</div>

      <div className="mx-auto max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Free &middot; No Sign-up &middot; Instant Results
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          Validate Any{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
            Email Address
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 sm:text-xl leading-relaxed">
          Check syntax, MX records, SMTP deliverability, and disposable email
          detection — all in one click. The fastest free email verification tool on the web.
        </p>
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1.5"><span className="text-emerald-500">✓</span> MX Lookup</span>
          <span className="flex items-center gap-1.5"><span className="text-emerald-500">✓</span> SMTP Check</span>
          <span className="flex items-center gap-1.5"><span className="text-emerald-500">✓</span> Disposable Detection</span>
          <span className="flex items-center gap-1.5"><span className="text-emerald-500">✓</span> Batch Mode</span>
        </div>
      </div>
    </section>
  );
}
