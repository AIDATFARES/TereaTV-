import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import ArticleFAQAccordion from "@/components/blog/ArticleFAQAccordion";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<import('next').Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: 'Post Not Found | TereaTV' };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.tereatv.top/blog/${post.slug}`,
      type: "article",
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              width: 1200,
              height: 630,
              alt: `TereaTV Guide - ${post.title}`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

function parseArticleContent(content: string) {
  const faqMatch = content.match(/## Frequently Asked Questions([\s\S]*?)(?=\n## |$)/);
  if (!faqMatch) {
    return { beforeFaq: content, faqs: [], afterFaq: "" };
  }

  const faqBlock = faqMatch[0];
  const faqStartIndex = content.indexOf("## Frequently Asked Questions");
  const beforeFaq = content.substring(0, faqStartIndex);
  const afterFaq = content.substring(faqStartIndex + faqBlock.length);

  const faqItems: { question: string; answer: string }[] = [];
  const qBlocks = faqMatch[1].split(/\n### /).slice(1);

  for (const block of qBlocks) {
    const lines = block.trim().split("\n");
    const question = lines[0].trim();
    const answer = lines.slice(1).join("\n").trim().replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
    if (question && answer) {
      faqItems.push({ question, answer });
    }
  }

  return { beforeFaq, faqs: faqItems, afterFaq };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const { beforeFaq, faqs, afterFaq } = parseArticleContent(post.content);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.coverImage ? `https://www.tereatv.top${post.coverImage}` : undefined,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "TereaTV",
      logo: {
        "@type": "ImageObject",
        url: "https://www.tereatv.top/icon-192.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.tereatv.top/blog/${post.slug}`,
    },
  };

  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  const markdownComponents = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: (props: any) => <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 text-white uppercase tracking-tight" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: (props: any) => <h3 className="text-xl font-bold mt-8 mb-4 text-white" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    p: (props: any) => <p className="mb-6 leading-relaxed text-slate-300 text-sm sm:text-base" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ul: (props: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-300 text-sm sm:text-base" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ol: (props: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-slate-300 text-sm sm:text-base" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    a: (props: any) => <a className="text-[#00F0FF] hover:underline font-bold transition-colors" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blockquote: (props: any) => <blockquote className="border-l-4 border-[#0EA5E9] pl-4 py-2 mb-6 italic bg-cyan-950/20 text-slate-200 rounded-r" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    table: (props: any) => <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse border border-white/10" {...props} /></div>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    th: (props: any) => <th className="border-b border-white/10 py-3 px-4 font-bold text-white bg-[#040714]" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    td: (props: any) => <td className="border-b border-white/5 py-3 px-4 text-slate-300 text-sm" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: ({ alt, src, ...props }: any) => (
      <span className="my-8 flex flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="rounded-2xl max-w-full border border-white/10 shadow-2xl" {...props} />
        {alt && <span className="text-xs text-center block mt-2 text-slate-400">{alt}</span>}
      </span>
    ),
  };

  return (
    <main className="min-h-screen bg-[#040714] text-white pt-6 sm:pt-10 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full relative z-10 bg-grid-pattern overflow-hidden">
      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(2,132,199,0.15)_0%,transparent_70%)]" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Link href="/blog" className="inline-flex items-center text-[#00F0FF] hover:text-white mb-8 transition-colors group font-bold text-xs uppercase tracking-wider">
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      <article className="rounded-3xl border border-cyan-500/20 bg-[#0A0F24]/80 p-6 md:p-12 shadow-2xl backdrop-blur-xl">
        <header className="mb-10 text-center">
          <span className="inline-block px-3.5 py-1 bg-cyan-500/10 text-[#00F0FF] rounded-full text-xs font-black uppercase tracking-wider mb-4 border border-cyan-500/30">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
        </header>

        {post.coverImage && (
          <div className="mb-12 rounded-2xl overflow-hidden relative w-full h-[280px] md:h-[460px] border border-cyan-500/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={`TereaTV Editorial Guide: ${post.title}`}
              title={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="text-slate-300 leading-relaxed text-base">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {beforeFaq}
          </ReactMarkdown>

          {faqs.length > 0 && (
            <div className="mt-12 mb-8">
              <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Frequently Asked Questions</h2>
              <ArticleFAQAccordion faqs={faqs} />
            </div>
          )}

          {afterFaq && (
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {afterFaq}
            </ReactMarkdown>
          )}
        </div>
      </article>

      {/* Related Articles Section */}
      {(() => {
        const relatedPosts = blogPosts
          .filter((p) => p.slug !== post.slug)
          .slice(0, 3);
        if (relatedPosts.length === 0) return null;
        return (
          <section className="mt-16 pt-12 border-t border-white/10">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <Link href={`/blog/${relPost.slug}`} key={relPost.id}>
                  <article className="glass-card-hover rounded-2xl overflow-hidden flex flex-col group cursor-pointer h-full border border-cyan-500/15 bg-[#0A0F24]/60">
                    <div className="h-40 relative overflow-hidden shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={`TereaTV Guide: ${relPost.title}`}
                        title={relPost.title}
                        src={relPost.coverImage || "/blog/choose-iptv-service-hero.jpg"}
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <span className="text-[10px] text-[#00F0FF] font-extrabold uppercase tracking-wider mb-2">{relPost.category}</span>
                      <h3 className="text-sm font-bold text-white mb-2 line-clamp-2 group-hover:text-[#00F0FF] transition-colors leading-snug">
                        {relPost.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-auto">
                        {relPost.date}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}
    </main>
  );
}
