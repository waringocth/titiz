import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, ChevronRight } from "lucide-react";
import { bolgeler } from "@/data/bolgeler";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Hizmet Bölgeleri | Titiz Çilingir İstanbul",
  description:
    "İstanbul'da Esenyurt, Beylikdüzü, Avcılar, Büyükçekmece ve Bahçeşehir ilçelerinde 7/24 çilingir hizmeti. Tüm mahallelerimizi keşfedin.",
  keywords: [
    "istanbul çilingir bölgeleri",
    "esenyurt çilingir",
    "beylikdüzü çilingir",
    "avcılar çilingir",
    "büyükçekmece çilingir",
    "bahçeşehir çilingir",
  ],
  openGraph: {
    title: "Hizmet Bölgeleri | Titiz Çilingir",
    description: "İstanbul'da hizmet verdiğimiz 5 ilçe ve tüm mahalleleri.",
    url: "https://titizcilingir.com/hizmet-bolgeleri",
    siteName: "Titiz Çilingir",
  },
  alternates: { canonical: "https://titizcilingir.com/hizmet-bolgeleri" },
};

export default function HizmetBolgeleriPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/" className="text-gray-400 hover:text-[#C9A84C] transition-colors">Ana Sayfa</Link>
            <span className="text-gray-600">/</span>
            <span className="text-[#C9A84C]">Hizmet Bölgeleri</span>
          </nav>
          <div className="max-w-3xl">
            <p className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-4">
              Hizmet Bölgelerimiz
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6">
              İstanbul&apos;da Hizmet Verdiğimiz{" "}
              <span className="text-[#C9A84C]">Bölgeler</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              İstanbul&apos;un batı yakasındaki 5 ilçede{" "}
              {bolgeler.reduce((sum, b) => sum + b.mahalleler.length, 0)} mahallede
              7/24 profesyonel çilingir hizmeti sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Districts */}
      <section className="py-20 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {bolgeler.map((b, i) => (
              <div
                key={b.slug}
                className="bg-white rounded-2xl border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#0B1F3A] rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-[#C9A84C]" />
                      </div>
                      <div>
                        <h2 className="font-playfair font-bold text-2xl text-[#0B1F3A]">
                          {b.title} Çilingir
                        </h2>
                        <p className="text-gray-500 text-sm">
                          {b.mahalleler.length} mahalle
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/hizmet-bolgeleri/${b.slug}`}
                      className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F3A] font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm flex-shrink-0"
                    >
                      Tüm Mahalleler
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <p className="text-gray-600 mb-6">{b.description}</p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    {b.mahalleler.map((m) => (
                      <Link
                        key={m.slug}
                        href={`/hizmet-bolgeleri/${b.slug}/${m.slug}`}
                        className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#C9A84C] transition-colors py-1"
                      >
                        <ChevronRight className="w-3 h-3 text-[#C9A84C] flex-shrink-0" />
                        <span className="truncate">{m.title.replace(" Mahallesi", "")}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
