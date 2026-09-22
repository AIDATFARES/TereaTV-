"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Mail } from "lucide-react";

export default function Blog() {
  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-[#040714] text-white pt-6 sm:pt-10 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 bg-grid-pattern overflow-hidden">
      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-[radial-gradient(circle,rgba(2,132,199,0.16)_0%,transparent_70%)]" />

      {/* Header */}
      <header className="mb-16 text-center md:text-left relative z-10">
        <div className="badge-pill mb-4 inline-flex items-center gap-2">
          <span className="dot-blink" /> News &amp; Insights
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.08]">
          TereaTV IPTV Guides &amp; <br />
          <span className="bg-gradient-to-r from-[#00F0FF] via-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent">
            Streaming Blog
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          Stay updated with the latest in 4K streaming technology, new channel additions, and guides to optimize your TereaTV experience.
        </p>
      </header>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-20 relative z-10">
          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="rounded-3xl border border-cyan-500/20 bg-[#0A0F24]/80 overflow-hidden flex flex-col md:flex-row group cursor-pointer transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_12px_40px_rgba(2,132,199,0.2)] backdrop-blur-xl">
              <div className="md:w-3/5 h-64 md:h-96 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  alt={`TereaTV Featured Guide: ${featuredPost.title}`}
                  title={featuredPost.title}
                  src={featuredPost.coverImage || "/blog/choose-iptv-service-hero.jpg"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F24] to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0A0F24] opacity-80 md:opacity-100"></div>
              </div>
              <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center z-10 relative bg-[#0A0F24] md:bg-transparent">
                <span className="inline-block px-3 py-1 bg-cyan-500/10 text-[#00F0FF] rounded-full text-xs font-black uppercase tracking-wider mb-4 w-max border border-cyan-500/30">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-[#00F0FF] transition-colors tracking-tight leading-snug">
                  {featuredPost.title}
                </h2>
                <p className="text-sm text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                  {featuredPost.description}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <span className="text-white font-extrabold text-xs uppercase tracking-wider group-hover:text-[#00F0FF] transition-colors">Read Article</span>
                  <ArrowRight className="text-[#00F0FF] w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 relative z-10">
        {gridPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <article className="glass-card-hover rounded-3xl overflow-hidden flex flex-col group cursor-pointer h-full border border-cyan-500/15 bg-[#0A0F24]/60">
              <div className="h-52 relative overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={`TereaTV Guide: ${post.title}`}
                  title={post.title}
                  src={post.coverImage || "/blog/choose-iptv-service-hero.jpg"}
                />
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#0A0F24] to-transparent"></div>
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-[#040714]/80 backdrop-blur-md text-[#00F0FF] rounded-full text-[10px] font-black uppercase tracking-wider border border-cyan-500/30">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-white mb-3 group-hover:text-[#00F0FF] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-auto text-xs text-slate-400 flex items-center justify-between font-semibold pt-4 border-t border-white/5">
                  <span>{post.date}</span>
                  <span className="text-slate-400">• 5 min read</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {/* Newsletter Signup */}
      <section className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-[#0A0F24]/80 p-8 md:p-14 text-center shadow-2xl backdrop-blur-xl z-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.18)_0%,transparent_70%)]"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[#00F0FF] mb-4 mx-auto">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white mb-3 uppercase tracking-tight">Subscribe to TereaTV IPTV Updates</h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed">
            Subscribe to our newsletter for the latest streaming tips, platform updates, and exclusive reseller offers delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input
              className="bg-[#040714] border border-cyan-500/20 rounded-xl px-5 py-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] w-full sm:w-80 transition-all font-medium placeholder:text-slate-500"
              placeholder="Enter your email address"
              type="email"
            />
            <button
              className="btn-primary-voltra px-8 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
