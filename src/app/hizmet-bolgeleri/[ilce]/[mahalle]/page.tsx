import { Metadata } from "next";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  ChevronRight,
  DoorOpen,
  Archive,
  Car,
  Lock,
  Copy,
  Smartphone,
  Zap,
  KeyRound,
} from "lucide-react";
import { bolgeler } from "@/data/bolgeler";
import { hizmetler } from "@/data/hizmetler";

interface Props {
  params: Promise<{ ilce: string; mahalle: string }>;
}

export async function generateStaticParams() {
  const params: { ilce: string; mahalle: string }[] = [];
  for (const bolge of bolgeler) {
    for (const m of bolge.mahalleler) {
      params.push({ ilce: bolge.slug, mahalle: m.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ilce, mahalle } = await params;
  const bolge = bolgeler.find((b) => b.slug === ilce);
  if (!bolge) return {};
  const mah = bolge.mahalleler.find((m) => m.slug === mahalle);
  if (!mah) return {};

  return {
    title: `${mah.title} Çilingir | 7/24 Titiz Çilingir`,
    description: `${mah.title}, ${bolge.title}'da 7/24 profesyonel çilingir hizmeti. Kapı açma, kilit değişimi, acil çilingir. 15-20 dakikada adresinizde. 0531 314 57 60`,
    keywords: [
      `${mah.title.toLowerCase()} çilingir`,
      `${bolge.title.toLowerCase()} çilingir`,
      "istanbul çilingir",
      "7/24 çilingir",
      "kapı açma",
    ],
    openGraph: {
      title: `${mah.title} Çilingir | Titiz Çilingir`,
      description: `${mah.title}'nde 7/24 çilingir hizmeti.`,
      url: `https://titizcilingir.com/hizmet-bolgeleri/${ilce}/${mahalle}`,
      siteName: "Titiz Çilingir",
    },
    alternates: {
      canonical: `https://titizcilingir.com/hizmet-bolgeleri/${ilce}/${mahalle}`,
    },
  };
}

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  DoorOpen,
  Archive,
  Car,
  Lock,
  Copy,
  Smartphone,
  Zap,
  KeyRound,
};

export default async function MahallePage({ params }: Props) {
  const { ilce, mahalle } = await params;
  const bolge = bolgeler.find((b) => b.slug === ilce);
  if (!bolge) notFound();
  const mah = bolge.mahalleler.find((m) => m.slug === mahalle);
  if (!mah) notFound();

  const nearbyNeighborhoods = bolge.mahalleler.filter((m) => m.slug !== mahalle);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Titiz Çilingir - ${mah.title}`,
    telephone: "+905313145760",
    url: `https://titizcilingir.com/hizmet-bolgeleri/${ilce}/${mahalle}`,
    description: `${mah.title}, ${bolge.title}'da 7/24 profesyonel çilingir hizmeti.`,
    areaServed: mah.title,
    openingHours: "Mo-Su 00:00-24:00",
    address: {
      "@type": "PostalAddress",
      addressLocality: bolge.title,
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://titizcilingir.com" },
      { "@type": "ListItem", "position": 2, "name": "Hizmet Bölgeleri", "item": "https://titizcilingir.com/hizmet-bolgeleri" },
      { "@type": "ListItem", "position": 3, "name": `${bolge.title} Çilingir`, "item": `https://titizcilingir.com/hizmet-bolgeleri/${bolge.slug}` },
      { "@type": "ListItem", "position": 4, "name": `${mah.title} Çilingir`, "item": `https://titizcilingir.com/hizmet-bolgeleri/${ilce}/${mahalle}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            <Link href={`/hizmet-bolgeleri/${bolge.slug}`} className="text-gray-400 hover:text-[#C9A84C] transition-colors">{bolge.title}</Link>
            <span className="text-gray-600">/</span>
            <span className="text-[#C9A84C]">{mah.title}</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-[#C9A84C]" />
            <span className="font-oswald uppercase tracking-wider text-[#C9A84C] text-sm">
              {bolge.title} / {mah.title}
            </span>
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
            {mah.title} Çilingir{" "}
            <span className="text-[#C9A84C]">— Titiz Çilingir</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
            {mah.title}&apos;nde kapı açma, kilit değişimi, oto çilingir ve
            acil çilingir hizmetleri için 7/24 hizmetinizdeyiz.{" "}
            <strong className="text-white">15-20 dakikada</strong>{" "}
            {mah.title}&apos;ne ulaşıyoruz.
          </p>

          {/* Mobile Contact Card in Hero */}
          <div className="block lg:hidden">
            <div className="bg-[#112952] rounded-2xl p-6 border border-[#C9A84C]/20 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-oswald uppercase tracking-wider">
                  7/24 Aktif
                </span>
              </div>
              <h3 className="font-playfair font-bold text-lg text-white mb-1">
                {mah.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Acil çilingir hizmetinde buradayız!
              </p>
              <p className="text-[#C9A84C] font-bold text-xl mb-4">
                0531 314 57 60
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
              <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-center">
                <div>
                  <p className="font-bold text-[#C9A84C]">15-20 dk</p>
                  <p className="text-xs text-gray-500">Varış Süresi</p>
                </div>
                <div>
                  <p className="font-bold text-[#C9A84C]">7/24</p>
                  <p className="text-xs text-gray-500">Hizmet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
              {/* Service description */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h2 className="font-playfair font-bold text-2xl text-[#0B1F3A] mb-4">
                  {mah.title}&apos;ndeki Çilingir Hizmetimiz
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Titiz Çilingir olarak {mah.title}, {bolge.title}&apos;da
                    yaşayan ve çalışan herkes için 7 gün 24 saat profesyonel
                    çilingir hizmeti sunuyoruz. Kapınız kilitli kaldığında, anahtarınızı
                    kaybettiğinizde veya kilidinizi değiştirmek istediğinizde,
                    ortalama 15-20 dakika içinde {mah.title}&apos;nde kapınızdayız.
                  </p>
                  <p>
                    {mah.title} ve çevresindeki tüm konutlar, işyerleri, siteler
                    ve apartmanlar için hizmet veriyoruz. Çelik kapı, ahşap kapı,
                    bina giriş kapısı ve araç kapısı dahil her türlü kapı için
                    profesyonel açma ve kilit hizmetleri sunmaktayız.
                  </p>
                  <p>
                    {bolge.title} ilçesinde çoğunlukla{" "}
                    {bolge.mahalleler.slice(0, 3).map((m) => m.title).join(", ")}{" "}
                    ve diğer mahallelerde hizmet veriyoruz. {mah.title}&apos;nden
                    bizi aramanız yeterli — en yakın çilingir ekibimizi anında
                    yönlendiriyoruz.
                  </p>
                </div>
              </div>

              {/* Services in this area */}
              <div>
                <h2 className="font-playfair font-bold text-2xl text-[#0B1F3A] mb-6">
                  {mah.title}&apos;nde Sunduğumuz Hizmetler
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {hizmetler.map((h) => {
                    const Icon = serviceIcons[h.icon] || Lock;
                    return (
                      <Link
                        key={h.slug}
                        href={`/hizmetler/${h.slug}`}
                        className="group bg-white rounded-xl p-4 border border-gray-100 hover:border-[#C9A84C]/40 hover:shadow-md transition-all duration-300 text-center"
                      >
                        <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:bg-[#C9A84C]/20 transition-colors">
                          <Icon className="w-5 h-5 text-[#C9A84C]" />
                        </div>
                        <p className="text-xs font-medium text-[#0B1F3A] group-hover:text-[#C9A84C] transition-colors leading-tight">
                          {h.title}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Nearby neighborhoods */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="font-playfair font-bold text-xl text-[#0B1F3A] mb-4">
                  {bolge.title}&apos;daki Diğer Mahalleler
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {nearbyNeighborhoods.map((m) => (
                    <Link
                      key={m.slug}
                      href={`/hizmet-bolgeleri/${bolge.slug}/${m.slug}`}
                      className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#C9A84C] transition-colors py-1"
                    >
                      <ChevronRight className="w-3 h-3 text-[#C9A84C] flex-shrink-0" />
                      <span className="truncate">{m.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* SEO Extended Text */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h2 className="font-playfair font-bold text-2xl text-[#0B1F3A] mb-4">
                  {mah.title} Acil Çilingir & Anahtarcı Hizmeti
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                  <p>
                    <strong>{mah.title} çilingir</strong> ihtiyaçlarınızda zamanın ne kadar önemli olduğunu biliyoruz. Kapıda kalmak veya kilit sistemlerinizde arıza yaşamak stresli bir durumdur. Bu yüzden Titiz Çilingir olarak, {mah.title} bölgesine günün 24 saati kesintisiz hizmet sunarak, mağduriyetinizi en kısa sürede çözüme kavuşturuyoruz. Gelişmiş ekipmanlarımızla kapınıza zarar vermeden, tamamen güvenli bir şekilde kilit açma işlemlerini gerçekleştiriyoruz.
                  </p>
                  <p>
                    Sadece ev kapıları değil, <strong>{mah.title} oto çilingir</strong>, çelik kasa açma, hidrolik kapı yayı montajı ve göbek (baza) değişimi gibi kapsamlı hizmetlerimiz mevcuttur. Aracınızın anahtarı içinde kaldığında ya da kilitli kasanızın şifresini unuttuğunuzda, uzman ekibimiz en yeni teknikleri kullanarak size yardımcı olur. {bolge.title} ve çevresindeki tüm noktalara maksimum 15-20 dakika içinde ulaşıyoruz.
                  </p>
                  <h3 className="font-bold text-[#0B1F3A] text-lg mt-4 mb-2">Neden Titiz Çilingir&apos;i Tercih Etmelisiniz?</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>7/24 Kesintisiz Hizmet:</strong> Gece yarısı veya resmi tatil fark etmeksizin bize ulaşabilirsiniz.</li>
                    <li><strong>Hasarsız İşlem Garantisi:</strong> Kapınıza, kilidinize veya aracınıza kesinlikle zarar vermeden profesyonelce çalışıyoruz.</li>
                    <li><strong>Hızlı Ulaşım:</strong> {mah.title} lokasyonunda mobil ekiplerimiz sayesinde dakikalar içinde yanınızdayız.</li>
                    <li><strong>Uygun Fiyatlar:</strong> Sektördeki en kaliteli hizmeti en uygun fiyat politikasıyla sizlere sunuyoruz.</li>
                  </ul>
                  <p>
                    {mah.title} bölgesinde güvenilir bir çilingir arıyorsanız, iletişim numaramızdan veya WhatsApp hattımızdan bize 7/24 ulaşabilirsiniz. Kilit değişiminden akıllı kilit sistemleri kurulumuna kadar tüm güvenlik ihtiyaçlarınız için profesyonel çözümler üretiyoruz.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="sticky top-24 space-y-4">
                {/* Desktop Contact Card */}
                <div className="hidden lg:block bg-[#0B1F3A] rounded-2xl p-6 border border-[#C9A84C]/20">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-oswald uppercase tracking-wider">
                      7/24 Aktif
                    </span>
                  </div>
                  <h3 className="font-playfair font-bold text-lg text-white mb-1">
                    {mah.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Acil çilingir hizmetinde buradayız!
                  </p>
                  <p className="text-[#C9A84C] font-bold text-xl mb-4">
                    0531 314 57 60
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
                  <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-center">
                    <div>
                      <p className="font-bold text-[#C9A84C]">15-20 dk</p>
                      <p className="text-xs text-gray-500">Varış Süresi</p>
                    </div>
                    <div>
                      <p className="font-bold text-[#C9A84C]">7/24</p>
                      <p className="text-xs text-gray-500">Hizmet</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-sm text-[#0B1F3A] uppercase tracking-wider mb-4">
                    Diğer Bölgeler
                  </h3>
                  {bolgeler.filter((b) => b.slug !== bolge.slug).map((b) => (
                    <Link
                      key={b.slug}
                      href={`/hizmet-bolgeleri/${b.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#C9A84C] transition-colors py-2 border-b border-gray-50 last:border-0"
                    >
                      <ChevronRight className="w-3 h-3 text-[#C9A84C]" />
                      {b.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
