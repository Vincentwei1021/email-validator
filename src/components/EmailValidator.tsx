"use client";

import { useState } from "react";

interface ValidationResult {
  email: string;
  valid_syntax: boolean;
  mx_found: boolean;
  mx_records: Array<{ exchange: string; priority: number }>;
  smtp_reachable: boolean;
  smtp_response: string;
  is_disposable: boolean;
  score: number;
  verdict: "deliverable" | "risky" | "undeliverable" | "invalid";
}

const verdictConfig = {
  deliverable: { label: "Deliverable", color: "bg-emerald-100 text-emerald-800", icon: "✅" },
  risky: { label: "Risky", color: "bg-yellow-100 text-yellow-800", icon: "⚠️" },
  undeliverable: { label: "Undeliverable", color: "bg-red-100 text-red-800", icon: "❌" },
  invalid: { label: "Invalid", color: "bg-gray-100 text-gray-800", icon: "🚫" },
};

function ScoreBar({ score }: { score: number }) {
  const pct = Math.round(score * 100);
  const barColor = pct >= 80 ? "bg-emerald-500" : pct >= 50 ? "bg-yellow-500" : "bg-red-500";
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-700">Deliverability Score</span>
        <span className="font-semibold">{pct}%</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
        <div className={`h-full rounded-full transition-all duration-500 ${barColor}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function CheckRow({ label, pass, detail }: { label: string; pass: boolean; detail?: string }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${pass ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"}`}>
        {pass ? "✓" : "✗"}
      </span>
      <div>
        <span className="text-sm font-medium text-gray-800">{label}</span>
        {detail && <p className="text-xs text-gray-500">{detail}</p>}
      </div>
    </div>
  );
}

export default function EmailValidatorTool() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Batch mode
  const [batchMode, setBatchMode] = useState(false);
  const [batchEmails, setBatchEmails] = useState("");
  const [batchResults, setBatchResults] = useState<ValidationResult[]>([]);
  const [batchLoading, setBatchLoading] = useState(false);

  const validate = async () => {
    const trimmed = email.trim();
    if (!trimmed) { setError("Please enter an email address"); return; }
    setError("");
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/validate-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = await res.json();
      if (data.success) {
        setResult(data.data);
      } else {
        setError(data.error || "Validation failed");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const validateBatch = async () => {
    const emails = batchEmails.split("\n").map(e => e.trim()).filter(Boolean);
    if (!emails.length) return;
    setBatchLoading(true);
    setBatchResults([]);
    const results: ValidationResult[] = [];
    for (const em of emails.slice(0, 10)) {
      try {
        const res = await fetch("/api/validate-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: em }),
        });
        const data = await res.json();
        if (data.success) results.push(data.data);
      } catch { /* skip */ }
    }
    setBatchResults(results);
    setBatchLoading(false);
  };

  const v = result ? verdictConfig[result.verdict] : null;

  return (
    <section id="validator" className="px-4 py-12 sm:px-6 sm:py-16">
      <h2 className="sr-only">Email Validation Tool</h2>
      <div className="mx-auto max-w-3xl">
        {/* Mode toggle */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex rounded-lg border border-gray-300 p-0.5">
            <button onClick={() => setBatchMode(false)} className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${!batchMode ? "bg-emerald-600 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"}`}>
              Single
            </button>
            <button onClick={() => setBatchMode(true)} className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${batchMode ? "bg-emerald-600 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"}`}>
              Batch
            </button>
          </div>
        </div>

        {!batchMode ? (
          <>
            {/* Single validation */}
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && validate()}
                placeholder="name@example.com"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
              <button
                onClick={validate}
                disabled={loading}
                className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                    Checking…
                  </span>
                ) : "Validate"}
              </button>
            </div>

            {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

            {result && v && (
              <div className="mt-8 space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                {/* Verdict badge */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Result for</p>
                    <p className="text-lg font-semibold text-gray-900">{result.email}</p>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold ${v.color}`}>
                    {v.icon} {v.label}
                  </span>
                </div>

                <ScoreBar score={result.score} />

                {/* Checks */}
                <div className="divide-y divide-gray-100">
                  <CheckRow label="Valid Syntax" pass={result.valid_syntax} detail={result.valid_syntax ? "Email format is correct" : "Email format is invalid"} />
                  <CheckRow label="MX Records Found" pass={result.mx_found} detail={result.mx_found ? `${result.mx_records.length} MX record(s) found` : "No MX records — domain cannot receive email"} />
                  <CheckRow label="SMTP Reachable" pass={result.smtp_reachable} detail={result.smtp_reachable ? "Mail server accepted the address" : result.smtp_response || "Could not verify with mail server"} />
                  <CheckRow label="Not Disposable" pass={!result.is_disposable} detail={result.is_disposable ? "This is a disposable/temporary email address" : "This is a permanent email provider"} />
                </div>

                {/* MX Records table */}
                {result.mx_records.length > 0 && (
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-gray-700">MX Records</h3>
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                          <tr><th className="px-4 py-2">Priority</th><th className="px-4 py-2">Mail Server</th></tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {result.mx_records.map((mx, i) => (
                            <tr key={i}><td className="px-4 py-2 font-mono">{mx.priority}</td><td className="px-4 py-2 font-mono text-gray-700">{mx.exchange}</td></tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            {/* Batch validation */}
            <div className="space-y-3">
              <textarea
                value={batchEmails}
                onChange={(e) => setBatchEmails(e.target.value)}
                placeholder={"user1@example.com\nuser2@company.org\nuser3@test.net"}
                rows={5}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 font-mono text-sm text-gray-900 shadow-sm transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
              <p className="text-xs text-gray-500">One email per line. Max 10 emails per batch.</p>
              <button
                onClick={validateBatch}
                disabled={batchLoading}
                className="w-full rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 disabled:opacity-50"
              >
                {batchLoading ? "Validating…" : "Validate All"}
              </button>
            </div>

            {batchResults.length > 0 && (
              <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                    <tr><th className="px-4 py-2">Email</th><th className="px-4 py-2">Verdict</th><th className="px-4 py-2">Score</th><th className="px-4 py-2">MX</th><th className="px-4 py-2">Disposable</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {batchResults.map((r, i) => {
                      const vc = verdictConfig[r.verdict];
                      return (
                        <tr key={i}>
                          <td className="px-4 py-2 font-mono text-gray-700">{r.email}</td>
                          <td className="px-4 py-2"><span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${vc.color}`}>{vc.icon} {vc.label}</span></td>
                          <td className="px-4 py-2">{Math.round(r.score * 100)}%</td>
                          <td className="px-4 py-2">{r.mx_found ? "✓" : "✗"}</td>
                          <td className="px-4 py-2">{r.is_disposable ? "Yes" : "No"}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
