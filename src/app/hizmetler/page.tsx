import { Metadata } from "next";
import Link from "next/link";
import {
  DoorOpen,
  Archive,
  Car,
  Lock,
  Copy,
  Smartphone,
  Zap,
  KeyRound,
  ArrowRight,
} from "lucide-react";
import { hizmetler } from "@/data/hizmetler";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Çilingir Hizmetleri | Titiz Çilingir İstanbul",
  description:
    "Kapı açma, kasa açma, oto çilingir, kilit değişimi, anahtar kopyalama ve daha fazlası. İstanbul'da 7/24 profesyonel çilingir hizmetleri.",
  keywords: [
    "kapı açma",
    "kasa açma",
    "oto çilingir",
    "kilit değişimi",
    "anahtar kopyalama",
    "elektronik kilit",
    "acil çilingir",
  ],
  openGraph: {
    title: "Çilingir Hizmetleri | Titiz Çilingir",
    description: "Tüm çilingir hizmetlerimizi keşfedin.",
    url: "https://titizcilingir.com/hizmetler",
    siteName: "Titiz Çilingir",
  },
  alternates: { canonical: "https://titizcilingir.com/hizmetler" },
};

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

export default function HizmetlerPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/" className="text-gray-400 hover:text-[#C9A84C] transition-colors">
              Ana Sayfa
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-[#C9A84C]">Hizmetler</span>
          </nav>

          <div className="max-w-3xl">
            <p className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-4">
              Hizmetlerimiz
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6">
              Profesyonel Çilingir{" "}
              <span className="text-[#C9A84C]">Hizmetlerimiz</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Kapı açma, kasa açma, oto çilingir, kilit değişimi ve daha
              fazlası. İstanbul&apos;un Esenyurt, Beylikdüzü, Avcılar,
              Büyükçekmece ve Bahçeşehir ilçelerinde 7/24 hizmetinizdeyiz.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hizmetler.map((h) => {
              const Icon = iconMap[h.icon] || Lock;
              return (
                <Link
                  key={h.slug}
                  href={`/hizmetler/${h.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 hover:border-[#C9A84C]/40 hover:shadow-xl hover:shadow-[#C9A84C]/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="bg-[#0B1F3A] p-6">
                    <div className="w-14 h-14 bg-[#C9A84C]/15 group-hover:bg-[#C9A84C]/25 rounded-xl flex items-center justify-center mb-4 transition-colors">
                      <Icon className="w-7 h-7 text-[#C9A84C]" />
                    </div>
                    <h2 className="font-playfair font-bold text-xl text-white group-hover:text-[#C9A84C] transition-colors">
                      {h.title}
                    </h2>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {h.description}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {h.detay}
                    </p>
                    <div className="flex items-center gap-2 text-[#C9A84C] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      <span>Detayları Görüntüle</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
