import { Metadata } from "next";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, ChevronRight, ArrowRight } from "lucide-react";
import { bolgeler } from "@/data/bolgeler";
import CtaBanner from "@/components/sections/CtaBanner";

interface Props {
  params: Promise<{ ilce: string }>;
}

export async function generateStaticParams() {
  return bolgeler.map((b) => ({ ilce: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ilce } = await params;
  const bolge = bolgeler.find((b) => b.slug === ilce);
  if (!bolge) return {};
  return {
    title: `${bolge.title} Çilingir | 7/24 Titiz Çilingir`,
    description: `${bolge.title} ilçesinde 7/24 profesyonel çilingir hizmeti. Kapı açma, kilit değişimi ve daha fazlası. 15-20 dakikada adresinizde. 0531 314 57 60`,
    keywords: [
      `${bolge.title.toLowerCase()} çilingir`,
      `${bolge.title.toLowerCase()} kapı açma`,
      `${bolge.title.toLowerCase()} kilit değişimi`,
      "istanbul çilingir",
      "7/24 çilingir",
    ],
    openGraph: {
      title: `${bolge.title} Çilingir | Titiz Çilingir`,
      description: bolge.description,
      url: `https://titizcilingir.com/hizmet-bolgeleri/${bolge.slug}`,
      siteName: "Titiz Çilingir",
    },
    alternates: {
      canonical: `https://titizcilingir.com/hizmet-bolgeleri/${bolge.slug}`,
    },
  };
}

export default async function IlcePage({ params }: Props) {
  const { ilce } = await params;
  const bolge = bolgeler.find((b) => b.slug === ilce);
  if (!bolge) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://titizcilingir.com" },
      { "@type": "ListItem", "position": 2, "name": "Hizmet Bölgeleri", "item": "https://titizcilingir.com/hizmet-bolgeleri" },
      { "@type": "ListItem", "position": 3, "name": `${bolge.title} Çilingir`, "item": `https://titizcilingir.com/hizmet-bolgeleri/${bolge.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="text-gray-400 hover:text-[#C9A84C] transition-colors">Ana Sayfa</Link>
            <span className="text-gray-600">/</span>
            <Link href="/hizmet-bolgeleri" className="text-gray-400 hover:text-[#C9A84C] transition-colors">Hizmet Bölgeleri</Link>
            <span className="text-gray-600">/</span>
            <span className="text-[#C9A84C]">{bolge.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#C9A84C]" />
                <span className="font-oswald uppercase tracking-wider text-[#C9A84C] text-sm">
                  İstanbul / {bolge.title}
                </span>
              </div>
              <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
                {bolge.title} Çilingir Hizmeti{" "}
                <span className="text-[#C9A84C]">— 7/24</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {bolge.description} Kapı açma, kilit değişimi, oto çilingir ve
                daha fazlası için 7/24 hizmetinizdeyiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+905313145760"
                  className="flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F3A] font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  0531 314 57 60
                </a>
                <a
                  href="https://wa.me/905313145760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Neighborhoods */}
            <div className="lg:col-span-2">
              <h2 className="font-playfair font-bold text-2xl text-[#0B1F3A] mb-6">
                {bolge.title} Mahallelerinde Çilingir Hizmeti
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {bolge.mahalleler.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/hizmet-bolgeleri/${bolge.slug}/${m.slug}`}
                    className="group bg-white rounded-xl p-4 border border-gray-100 hover:border-[#C9A84C]/40 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#C9A84C]/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-[#C9A84C]" />
                      </div>
                      <span className="font-medium text-[#0B1F3A] group-hover:text-[#C9A84C] transition-colors text-sm">
                        {m.title}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#C9A84C] transition-colors" />
                  </Link>
                ))}
              </div>

              {/* SEO Extended Text */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 mt-8">
                <h2 className="font-playfair font-bold text-2xl text-[#0B1F3A] mb-4">
                  {bolge.title} Acil Çilingir ve Anahtarcı Hizmetleri
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                  <p>
                    <strong>{bolge.title} çilingir</strong> ihtiyacınız olduğunda, bölgenin her noktasına hakim, hızlı ve güvenilir bir ekibe ulaşmak istersiniz. Titiz Çilingir olarak, {bolge.title} sınırları içerisindeki tüm mahallelere ve semtlere 7 gün 24 saat kesintisiz acil çilingir desteği sunuyoruz. Kapıda kalmanız, kilidinizin bozulması veya anahtarınızı kaybetmeniz durumunda, profesyonel ekipmanlarımızla kapınıza zarar vermeden kilit açma işlemini gerçekleştiriyoruz.
                  </p>
                  <p>
                    Hizmetlerimiz sadece ev kapıları ile sınırlı değildir. <strong>{bolge.title} oto çilingir</strong>, çelik kasa açma, yüksek güvenlikli akıllı kilit montajı, kapı hidrolik yayı takılması ve bina giriş kapısı çözümleri gibi çok geniş bir yelpazede hizmet sunmaktayız. {bolge.title} ve çevresine sadece 15-20 dakika içinde ulaşıyor, sorununuzu kalıcı ve uygun maliyetli bir şekilde çözüyoruz.
                  </p>
                  <h3 className="font-bold text-[#0B1F3A] text-lg mt-4 mb-2">Neden Bizi Tercih Etmelisiniz?</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Hızlı Servis:</strong> {bolge.title} ilçesinde bölgeye hakim mobil araçlarımızla en kısa sürede yanınızdayız.</li>
                    <li><strong>7/24 Aktif Destek:</strong> Gecenin bir yarısı veya hafta sonu demeden, çilingir ihtiyacınızda bize ulaşabilirsiniz.</li>
                    <li><strong>Hasarsız Müdahale:</strong> Kapılarınıza ve kilit mekanizmalarınıza zarar vermeden sadece profesyonel tekniklerle açım yapıyoruz.</li>
                    <li><strong>Garantili ve Uygun Fiyat:</strong> {bolge.title} bölgesinde en rekabetçi ve uygun fiyat garantisini sunuyoruz.</li>
                  </ul>
                  <p>
                    {bolge.title} bölgesindeki tüm güvenlik sorunlarınız için iletişim numaramızdan veya WhatsApp üzerinden bize anında ulaşabilirsiniz. Profesyonel ekibimiz size en yakın çilingir servisini anında yönlendirecektir.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Contact */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-[#0B1F3A] rounded-2xl p-6 border border-[#C9A84C]/20 mb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-oswald uppercase tracking-wider">
                      7/24 Aktif
                    </span>
                  </div>
                  <h3 className="font-playfair font-bold text-xl text-white mb-2">
                    {bolge.title} Çilingir
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    15-20 dakikada {bolge.title}&apos;da adresinizde oluyoruz.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+905313145760"
                      className="flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F3A] font-bold py-3 rounded-xl transition-colors w-full"
                    >
                      <Phone className="w-4 h-4" />
                      Hemen Ara
                    </a>
                    <a
                      href="https://wa.me/905313145760"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-colors w-full"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Other districts */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-[#0B1F3A] text-sm mb-4 uppercase tracking-wider">
                    Diğer Bölgeler
                  </h3>
                  {bolgeler.filter((b) => b.slug !== bolge.slug).map((b) => (
                    <Link
                      key={b.slug}
                      href={`/hizmet-bolgeleri/${b.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#C9A84C] transition-colors py-2 border-b border-gray-50 last:border-0"
                    >
                      <ChevronRight className="w-3 h-3 text-[#C9A84C]" />
                      {b.title} Çilingir
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
