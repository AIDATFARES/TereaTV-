import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ArrowRight } from "lucide-react";

export default function LatestArticlesSection() {
  // Select the 3 newest articles
  const displayPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-[#040714] text-white relative z-10 border-t border-white/10 overflow-hidden">
      {/* Glow background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-4 rounded-full bg-sky-500/10 border border-sky-500/30 text-[#38BDF8] text-xs font-bold tracking-widest uppercase mb-4">
            Guides & News
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Latest Articles
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Stay up to date with the latest IPTV guides, tips, and insights.
          </p>
        </div>

        <div className={`grid gap-8 mb-14 ${displayPosts.length === 1 ? 'grid-cols-1 max-w-lg mx-auto' : displayPosts.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {displayPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <article className="bg-[#0A0F24] rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-2 transition-all duration-300 h-full border border-white/10 hover:border-sky-500/50">
                <div className="h-48 relative overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={`TereaTV Blog Guide: ${post.title}`}
                    title={post.title}
                    src={post.coverImage || "/blog/choose-iptv-service-hero.jpg"}
                  />
                  <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#0A0F24] to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#040714] backdrop-blur-md text-white rounded-full text-xs font-bold border border-white/10">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold leading-snug text-white group-hover:text-[#38BDF8] transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {post.description}
                  </p>
                  <div className="mt-auto text-slate-400 text-xs font-medium flex items-center justify-between border-t border-white/10 pt-4">
                    <span>{post.date}</span>
                    <span className="flex items-center text-[#38BDF8] group-hover:translate-x-1 transition-transform font-bold text-sm">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <button className="bg-white/5 hover:bg-[#0284C7] text-white border border-white/15 hover:border-[#0284C7] px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center mx-auto gap-2">
              View All Articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
