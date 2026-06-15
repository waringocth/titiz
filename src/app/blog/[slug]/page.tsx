import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Clock, Phone, MessageCircle, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import ReadingProgress from "@/components/ui/ReadingProgress";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Titiz Çilingir Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://titizcilingir.com/blog/${post.slug}`,
      siteName: "Titiz Çilingir",
      images: [{ url: post.image }],
    },
    alternates: {
      canonical: `https://titizcilingir.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogDetayPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug);

  // Simple markdown-like parser for the content
  const parseContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="font-playfair font-bold text-2xl text-[#0B1F3A] mt-8 mb-4"
          >
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h3
            key={i}
            className="font-semibold text-lg text-[#0B1F3A] mt-6 mb-3"
          >
            {line.replace("### ", "")}
          </h3>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li key={i} className="flex items-start gap-2 text-gray-600 mb-2">
            <ChevronRight className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
            <span>{line.replace("- ", "")}</span>
          </li>
        );
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <strong key={i} className="block font-semibold text-[#0B1F3A] mb-1">
            {line.replace(/\*\*/g, "")}
          </strong>
        );
      }
      if (line.trim() === "") return <br key={i} />;
      return (
        <p key={i} className="text-gray-600 leading-relaxed mb-4">
          {line}
        </p>
      );
    });
  };

  return (
    <>
      <ReadingProgress />

      {/* Hero */}
      <section className="pt-28 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0">
          <nav className="flex items-center gap-2 text-sm mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="text-gray-400 hover:text-[#C9A84C] transition-colors">Ana Sayfa</Link>
            <span className="text-gray-600">/</span>
            <Link href="/blog" className="text-gray-400 hover:text-[#C9A84C] transition-colors">Blog</Link>
            <span className="text-gray-600">/</span>
            <span className="text-[#C9A84C] truncate max-w-xs">{post.title}</span>
          </nav>
        </div>
        <div className="relative h-72 sm:h-96">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] to-[#0B1F3A]/20" />
          <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime} okuma
              </span>
            </div>
            <h1 className="font-playfair font-bold text-3xl sm:text-4xl text-white max-w-3xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Article */}
            <article className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100">
                <p className="text-lg text-gray-600 leading-relaxed mb-8 pb-8 border-b border-gray-100 font-medium">
                  {post.excerpt}
                </p>
                <div className="prose-custom">
                  {parseContent(post.content)}
                </div>

                {/* Article footer */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[#0B1F3A]">
                        Titiz Çilingir
                      </p>
                      <p className="text-xs text-gray-400">
                        İstanbul&apos;un güvenilir çilingiri
                      </p>
                    </div>
                    <a
                      href="tel:+905313145760"
                      className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F3A] font-bold px-6 py-2.5 rounded-xl transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      0531 314 57 60
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {/* Contact card */}
                <div className="bg-[#0B1F3A] rounded-2xl p-6 border border-[#C9A84C]/20">
                  <p className="font-oswald uppercase tracking-wider text-[#C9A84C] text-xs mb-4">
                    Acil mi?
                  </p>
                  <h3 className="font-playfair font-bold text-xl text-white mb-2">
                    Hemen Ara
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    7/24 çilingir hizmeti için bizi arayın.
                  </p>
                  <a
                    href="tel:+905313145760"
                    className="block text-center bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F3A] font-bold py-3 rounded-xl transition-colors mb-3"
                  >
                    0531 314 57 60
                  </a>
                  <a
                    href="https://wa.me/905313145760"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>

                {/* Other posts */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-[#0B1F3A] text-sm uppercase tracking-wider mb-4">
                    Diğer Yazılar
                  </h3>
                  <div className="space-y-4">
                    {otherPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="group flex gap-3"
                      >
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#0B1F3A] group-hover:text-[#C9A84C] transition-colors line-clamp-2 leading-tight">
                            {p.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {p.readTime}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
