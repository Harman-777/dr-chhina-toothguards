import { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dental Health Blog | Dr. Chhina's Tooth Guards",
  description:
    "Read practical dental health tips, guides on painless root canals, clear aligner advice, and pediatric dental care from Dr. Chhina's Tooth Guards.",
};

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20 bg-background">
      {/* Header */}
      <section className="gradient-mesh text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl space-y-5 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md text-amber-300 border border-white/20 shadow-sm">
            Dental Knowledge Base
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight">
            Oral Health & Wellness Blog
          </h1>
          <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed">
            Expert advice, patient guides, and practical tips to keep your smile healthy and radiant.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-border-mint rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold px-3.5 py-1.5 rounded-full bg-primary-light text-primary border border-primary/20">
                    {post.category}
                  </span>
                  <span className="text-foreground-muted font-medium">{post.readTime}</span>
                </div>

                <h2 className="font-heading font-extrabold text-2xl text-foreground group-hover:text-primary transition-colors tracking-tight leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-foreground-muted text-sm leading-relaxed font-normal">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border-light flex items-center justify-between">
                <span className="text-xs text-foreground-muted font-medium">
                  {formatDate(post.date)}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-bold text-primary hover:text-accent-vibrant flex items-center gap-1.5 transition-colors group-hover:translate-x-1 duration-200"
                >
                  Read Article <span className="text-base">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

