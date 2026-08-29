import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, CLINIC } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Article Not Found | Dr. Chhina's Tooth Guards",
    };
  }

  return {
    title: `${post.title} | Dental Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      {/* Article Header */}
      <section className="bg-primary-light py-16 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-accent transition-colors"
          >
            ← Back to Blog
          </Link>

          <div className="flex items-center gap-3 text-xs font-semibold">
            <span className="px-3 py-1 rounded-full bg-white text-primary border border-primary/20">
              {post.category}
            </span>
            <span className="text-foreground-muted">• {post.readTime}</span>
            <span className="text-foreground-muted">• {formatDate(post.date)}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <section className="section-padding max-w-4xl mx-auto px-4">
        <div className="bg-card border border-border-light rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
          <div className="blog-content whitespace-pre-line text-foreground/90 leading-relaxed text-base">
            {post.content}
          </div>

          {/* Author footer */}
          <div className="pt-8 mt-8 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-4 bg-primary-light/40 p-6 rounded-2xl">
            <div className="space-y-1">
              <p className="font-heading font-bold text-foreground text-sm">
                Published by {CLINIC.name}
              </p>
              <p className="text-xs text-foreground-muted">
                Multi-Speciality Dental Clinic in Daburji, Amritsar
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-dark transition-colors shadow-sm"
            >
              Book Consultation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
