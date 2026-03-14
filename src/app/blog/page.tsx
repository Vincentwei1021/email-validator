import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | MailCheck",
  description: "Guides on email validation, list hygiene, and deliverability best practices for marketers and developers.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "why-email-validation-matters",
    title: "Why Email Validation Is Essential Before Your Next Campaign",
    excerpt: "Sending to invalid addresses damages your sender reputation and costs money. Learn why email validation matters and how to protect your deliverability.",
    date: "2026-03-10",
  },
  {
    slug: "email-list-cleaning-guide",
    title: "How to Clean Your Email List in 2026: A Step-by-Step Guide",
    excerpt: "A practical guide to cleaning your email list — validating addresses, removing bounces, re-engaging inactive subscribers, and maintaining ongoing list hygiene.",
    date: "2026-03-08",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog</h1>
          <p className="mt-2 text-gray-600">Guides on email validation, deliverability, and list hygiene.</p>
          <div className="mt-10 space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <time className="text-xs font-medium text-gray-400">{post.date}</time>
                <h2 className="mt-2 text-xl font-bold text-gray-900">
                  <Link href={`/blog/${post.slug}`} className="hover:text-emerald-600">{post.title}</Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-semibold text-emerald-600 hover:text-emerald-700">Read more →</Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
