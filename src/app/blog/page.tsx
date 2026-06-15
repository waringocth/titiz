import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Blog | Titiz Çilingir — Çilingir Rehberi",
  description:
    "Kapı kilitleri, güvenlik sistemleri, akıllı kilit kurulumu ve çilingir ipuçları hakkında faydalı makaleler.",
  keywords: [
    "çilingir blog",
    "kapı kilidi",
    "güvenlik sistemi",
    "akıllı kilit",
    "kapi acma ipuclari",
  ],
  openGraph: {
    title: "Blog | Titiz Çilingir",
    description: "Çilingir ve güvenlik hakkında faydalı yazılar.",
    url: "https://titizcilingir.com/blog",
    siteName: "Titiz Çilingir",
  },
  alternates: { canonical: "https://titizcilingir.com/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/" className="text-gray-400 hover:text-[#C9A84C] transition-colors">Ana Sayfa</Link>
            <span className="text-gray-600">/</span>
            <span className="text-[#C9A84C]">Blog</span>
          </nav>
          <p className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-4">Blog</p>
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
            Çilingir <span className="text-[#C9A84C]">Rehberi</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Kapı kilitleri, güvenlik sistemleri ve çilingir hizmetleri hakkında
            faydalı bilgiler.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block mb-10"
          >
            <div className="bg-white rounded-2xl border border-gray-100 hover:border-[#C9A84C]/40 hover:shadow-xl hover:shadow-[#C9A84C]/10 transition-all duration-300 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto min-h-[300px]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#C9A84C] text-[#0B1F3A] text-xs font-oswald uppercase tracking-wider px-3 py-1 rounded-full">
                      Öne Çıkan
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm text-gray-400">{featured.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="flex items-center gap-1 text-sm text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime} okuma
                    </span>
                  </div>
                  <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-[#0B1F3A] mb-3 group-hover:text-[#C9A84C] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[#C9A84C] font-semibold group-hover:gap-3 transition-all">
                    <span>Devamını Oku</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Other posts */}
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-[#C9A84C]/40 hover:shadow-lg hover:shadow-[#C9A84C]/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-playfair font-bold text-xl text-[#0B1F3A] mb-2 group-hover:text-[#C9A84C] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
