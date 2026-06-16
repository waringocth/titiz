import { Metadata } from "next";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Users, Clock, Map } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import DistrictCards from "@/components/sections/DistrictCards";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import CounterCard from "@/components/ui/CounterCard";
import { blogPosts } from "@/data/blog-posts";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Titiz Çilingir | İstanbul 7/24 Profesyonel Çilingir Hizmeti",
  description:
    "İstanbul Esenyurt, Beylikdüzü, Avcılar, Büyükçekmece ve Bahçeşehir'de 7/24 profesyonel çilingir hizmeti. 15-20 dakikada adresinizde. Hemen arayın: 0531 314 57 60",
  keywords: [
    "çilingir",
    "istanbul çilingir",
    "7/24 çilingir",
    "acil çilingir",
    "kapı açma",
    "kilit değişimi",
    "esenyurt çilingir",
    "beylikdüzü çilingir",
  ],
  openGraph: {
    title: "Titiz Çilingir | İstanbul 7/24 Profesyonel Çilingir Hizmeti",
    description:
      "İstanbul'da 7/24 profesyonel çilingir hizmeti. 15-20 dakikada kapınızdayız!",
    url: "https://titizcilingir.com",
    siteName: "Titiz Çilingir",
  },
  alternates: { canonical: "https://titizcilingir.com" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Quick Contact Bar */}
      <section className="bg-[#C9A84C] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="tel:+905313145760"
              className="flex items-center justify-center gap-3 py-3 hover:bg-[#0B1F3A]/10 rounded-lg transition-colors group"
            >
              <div className="w-10 h-10 bg-[#0B1F3A]/15 group-hover:bg-[#0B1F3A]/25 rounded-full flex items-center justify-center transition-colors">
                <Phone className="w-5 h-5 text-[#0B1F3A]" />
              </div>
              <div>
                <p className="text-[#0B1F3A]/70 text-xs font-oswald uppercase tracking-wider">
                  Hemen Ara
                </p>
                <p className="text-[#0B1F3A] font-bold text-sm">
                  0531 314 57 60
                </p>
              </div>
            </a>
            <a
              href="https://wa.me/905313145760"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-3 hover:bg-[#0B1F3A]/10 rounded-lg transition-colors group border-x border-[#0B1F3A]/10"
            >
              <div className="w-10 h-10 bg-[#0B1F3A]/15 group-hover:bg-[#0B1F3A]/25 rounded-full flex items-center justify-center transition-colors">
                <WhatsAppIcon className="w-5 h-5 text-[#0B1F3A]" />
              </div>
              <div>
                <p className="text-[#0B1F3A]/70 text-xs font-oswald uppercase tracking-wider">
                  WhatsApp
                </p>
                <p className="text-[#0B1F3A] font-bold text-sm">
                  Mesaj Gönder
                </p>
              </div>
            </a>
            <Link
              href="/hizmet-bolgeleri"
              className="flex items-center justify-center gap-3 py-3 hover:bg-[#0B1F3A]/10 rounded-lg transition-colors group"
            >
              <div className="w-10 h-10 bg-[#0B1F3A]/15 group-hover:bg-[#0B1F3A]/25 rounded-full flex items-center justify-center transition-colors">
                <MapPin className="w-5 h-5 text-[#0B1F3A]" />
              </div>
              <div>
                <p className="text-[#0B1F3A]/70 text-xs font-oswald uppercase tracking-wider">
                  Hizmet Bölgelerimiz
                </p>
                <p className="text-[#0B1F3A] font-bold text-sm">
                  5 İlçe Kapsama
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-3">
              Neden Biz?
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B1F3A]">
              Rakamlarla <span className="text-[#C9A84C]">Titiz Çilingir</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <CounterCard
              value={500}
              suffix="+"
              label="Mutlu Müşteri"
              icon={<Users className="w-6 h-6" />}
              delay={0}
            />
            <CounterCard
              value={15}
              suffix=" dk"
              label="Ortalama Varış"
              icon={<Clock className="w-6 h-6" />}
              delay={0.1}
            />
            <CounterCard
              value={24}
              suffix="/7"
              label="Kesintisiz Hizmet"
              icon={<Clock className="w-6 h-6" />}
              delay={0.2}
            />
            <CounterCard
              value={5}
              suffix=" İlçe"
              label="Kapsama Alanı"
              icon={<Map className="w-6 h-6" />}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      <ServicesGrid />
      <DistrictCards />
      <HowItWorks />
      <Testimonials />

      {/* Blog Preview */}
      <section className="py-24 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-3">
              Blog
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
              Son <span className="text-[#C9A84C]">Yazılarımız</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group glass-card rounded-xl overflow-hidden hover:border-[#C9A84C]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`${post.title} - İstanbul çilingir rehberi`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <span className="text-xs text-gray-500">
                      {post.readTime} okuma
                    </span>
                  </div>
                  <h3 className="font-playfair font-bold text-white text-lg mb-2 group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0B1F3A] font-semibold px-8 py-3 rounded-xl transition-all duration-300"
            >
              Tüm Yazıları Gör
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
