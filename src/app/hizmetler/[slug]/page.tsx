import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  DoorOpen,
  Archive,
  Car,
  Lock,
  Copy,
  Smartphone,
  Zap,
  KeyRound,
  Phone,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { hizmetler } from "@/data/hizmetler";
import AccordionItem from "@/components/ui/AccordionItem";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return hizmetler.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hizmet = hizmetler.find((h) => h.slug === slug);
  if (!hizmet) return {};
  return {
    title: `${hizmet.title} | Titiz Çilingir İstanbul`,
    description: `${hizmet.description} İstanbul'da 7/24 profesyonel çilingir hizmeti. Hemen arayın: 0531 314 57 60`,
    keywords: [
      hizmet.title.toLowerCase(),
      "istanbul çilingir",
      "7/24 çilingir",
      "esenyurt çilingir",
    ],
    openGraph: {
      title: `${hizmet.title} | Titiz Çilingir`,
      description: hizmet.description,
      url: `https://titizcilingir.com/hizmetler/${hizmet.slug}`,
      siteName: "Titiz Çilingir",
    },
    alternates: {
      canonical: `https://titizcilingir.com/hizmetler/${hizmet.slug}`,
    },
  };
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DoorOpen,
  Archive,
  Car,
  Lock,
  Copy,
  Smartphone,
  Zap,
  KeyRound,
};

export default async function HizmetDetayPage({ params }: Props) {
  const { slug } = await params;
  const hizmet = hizmetler.find((h) => h.slug === slug);
  if (!hizmet) notFound();

  const Icon = iconMap[hizmet.icon] || Lock;
  const otherServices = hizmetler.filter((h) => h.slug !== slug).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-10 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="text-gray-400 hover:text-[#C9A84C] transition-colors">Ana Sayfa</Link>
            <span className="text-gray-600">/</span>
            <Link href="/hizmetler" className="text-gray-400 hover:text-[#C9A84C] transition-colors">Hizmetler</Link>
            <span className="text-gray-600">/</span>
            <span className="text-[#C9A84C]">{hizmet.title}</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Main content (70%) */}
            <div className="lg:col-span-2">
              {/* Hero image */}
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-8">
                <Image
                  src={hizmet.image}
                  alt={hizmet.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#C9A84C] rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#0B1F3A]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#C9A84C] font-oswald uppercase tracking-wider">
                      Hizmet
                    </p>
                    <h1 className="font-playfair font-bold text-2xl text-white">
                      {hizmet.title}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl p-8 mb-6 border border-gray-100">
                <h2 className="font-playfair font-bold text-2xl text-[#0B1F3A] mb-6 pb-4 border-b border-gray-100">
                  Hizmet Detayları
                </h2>
                {hizmet.longDescription.split("\n\n").map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>

              {/* Accordion: What's included */}
              <div className="bg-white rounded-2xl p-8 mb-6 border border-gray-100">
                <h2 className="font-playfair font-bold text-2xl text-[#0B1F3A] mb-6">
                  Bu Hizmet Neler Kapsar?
                </h2>
                <div className="space-y-3">
                  {hizmet.nelerKapsar.map((item, i) => (
                    <AccordionItem
                      key={i}
                      question={item.soru}
                      answer={item.cevap}
                    />
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h2 className="font-playfair font-bold text-2xl text-[#0B1F3A] mb-6">
                  Sık Sorulan Sorular
                </h2>
                <div className="space-y-6">
                  {hizmet.faq.map((item, i) => (
                    <div
                      key={i}
                      className="pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <h3 className="font-semibold text-[#0B1F3A] mb-2 flex items-start gap-2">
                        <ChevronDown className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                        {item.soru}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed pl-7">
                        {item.cevap}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sticky Contact (30%) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {/* Contact card */}
                <div className="bg-[#0B1F3A] rounded-2xl p-6 border border-[#C9A84C]/20">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-oswald uppercase tracking-wider">
                      7/24 Aktif
                    </span>
                  </div>
                  <h3 className="font-playfair font-bold text-xl text-white mb-2">
                    Hemen İletişime Geçin
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {hizmet.title} hizmeti için 15-20 dakikada adresinizde
                    oluyoruz.
                  </p>

                  <div className="space-y-3">
                    <a
                      href="tel:+905313145760"
                      className="flex items-center justify-center gap-3 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F3A] font-bold py-3.5 px-6 rounded-xl transition-colors w-full"
                    >
                      <Phone className="w-5 h-5" />
                      0531 314 57 60
                    </a>
                    <a
                      href="https://wa.me/905313145760"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 px-6 rounded-xl transition-colors w-full"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp ile Yaz
                    </a>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="font-playfair font-bold text-xl text-[#C9A84C]">
                          15-20
                        </p>
                        <p className="text-xs text-gray-500">Dk. Varış</p>
                      </div>
                      <div>
                        <p className="font-playfair font-bold text-xl text-[#C9A84C]">
                          7/24
                        </p>
                        <p className="text-xs text-gray-500">Hizmet</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other services */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-[#0B1F3A] mb-4 text-sm uppercase tracking-wider">
                    Diğer Hizmetler
                  </h3>
                  <div className="space-y-2">
                    {otherServices.slice(0, 4).map((h) => {
                      const OtherIcon = iconMap[h.icon] || Lock;
                      return (
                        <Link
                          key={h.slug}
                          href={`/hizmetler/${h.slug}`}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-8 h-8 bg-[#C9A84C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <OtherIcon className="w-4 h-4 text-[#C9A84C]" />
                          </div>
                          <span className="text-sm text-gray-600 group-hover:text-[#C9A84C] transition-colors">
                            {h.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services bottom grid */}
      <section className="py-16 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair font-bold text-2xl text-white mb-8">
            Diğer <span className="text-[#C9A84C]">Hizmetlerimiz</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {otherServices.map((h) => {
              const OtherIcon = iconMap[h.icon] || Lock;
              return (
                <Link
                  key={h.slug}
                  href={`/hizmetler/${h.slug}`}
                  className="group glass-card p-4 rounded-xl hover:border-[#C9A84C]/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <OtherIcon className="w-6 h-6 text-[#C9A84C] mb-2" />
                  <p className="text-sm text-white font-medium group-hover:text-[#C9A84C] transition-colors">
                    {h.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
