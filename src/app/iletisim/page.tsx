import { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import { bolgeler } from "@/data/bolgeler";

export const metadata: Metadata = {
  title: "İletişim | Titiz Çilingir — 0531 314 57 60",
  description:
    "Titiz Çilingir ile iletişime geçin. 7/24 çilingir hizmeti için hemen arayın: 0531 314 57 60. Esenyurt, Beylikdüzü, Avcılar, Büyükçekmece ve Bahçeşehir.",
  keywords: [
    "çilingir iletişim",
    "çilingir telefon",
    "istanbul çilingir numarası",
    "7/24 çilingir",
  ],
  openGraph: {
    title: "İletişim | Titiz Çilingir",
    description: "7/24 çilingir hizmeti için hemen arayın.",
    url: "https://titizcilingir.com/iletisim",
    siteName: "Titiz Çilingir",
  },
  alternates: { canonical: "https://titizcilingir.com/iletisim" },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Titiz Çilingir İletişim",
  url: "https://titizcilingir.com/iletisim",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Titiz Çilingir",
    telephone: "+905313145760",
    openingHours: "Mo-Su 00:00-24:00",
    areaServed: [
      "Esenyurt",
      "Beylikdüzü",
      "Büyükçekmece",
      "Avcılar",
      "Bahçeşehir",
    ],
  },
};

export default function IletisimPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/" className="text-gray-400 hover:text-[#C9A84C] transition-colors">Ana Sayfa</Link>
            <span className="text-gray-600">/</span>
            <span className="text-[#C9A84C]">İletişim</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-4">
              İletişim
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
              Bize <span className="text-[#C9A84C]">Ulaşın</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Çilingir hizmeti için bize ulaşın. 7/24 aktif hattımız ve
              WhatsApp ile anında yanıt veriyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm">
                <h2 className="font-playfair font-bold text-2xl text-[#0B1F3A] mb-2">
                  Mesaj Gönderin
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Formumu doldurun, en kısa sürede sizi arayalım.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Primary contact card */}
              <div className="bg-[#0B1F3A] rounded-2xl p-8 border border-[#C9A84C]/20">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-oswald uppercase tracking-wider">
                    7/24 Aktif
                  </span>
                </div>
                <h2 className="font-playfair font-bold text-2xl text-white mb-6">
                  İletişim Bilgileri
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#C9A84C]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#C9A84C]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Telefon</p>
                      <a
                        href="tel:+905313145760"
                        className="text-white font-bold text-lg hover:text-[#C9A84C] transition-colors"
                      >
                        +90 531 314 57 60
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-600/15 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">WhatsApp</p>
                      <a
                        href="https://wa.me/905313145760"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-bold hover:text-green-400 transition-colors"
                      >
                        WhatsApp ile Yaz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#C9A84C]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#C9A84C]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">
                        Çalışma Saatleri
                      </p>
                      <p className="text-white font-bold">7/24 — Her Gün Açık</p>
                      <p className="text-gray-400 text-xs">
                        Hafta sonu ve bayram dahil
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#C9A84C]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#C9A84C]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">
                        Hizmet Bölgeleri
                      </p>
                      <p className="text-white text-sm">
                        Esenyurt, Beylikdüzü, Avcılar,{" "}
                        Büyükçekmece, Bahçeşehir
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 flex gap-3">
                  <a
                    href="tel:+905313145760"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F3A] font-bold py-3 rounded-xl transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Ara
                  </a>
                  <a
                    href="https://wa.me/905313145760"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Service areas */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-semibold text-[#0B1F3A] mb-4">
                  Hizmet Bölgeleri
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {bolgeler.map((b) => (
                    <Link
                      key={b.slug}
                      href={`/hizmet-bolgeleri/${b.slug}`}
                      className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 group"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
                        <span className="text-sm text-gray-700 group-hover:text-[#C9A84C] transition-colors">
                          {b.title}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">
                        {b.mahalleler.length} mahalle
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps embed placeholder */}
      <section className="bg-[#F5F3EE] pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.46843861093!2d28.671860799999998!3d41.0053215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4230ef45f7d%3A0x5a8a5c53d12b46d1!2sEsenyurt%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Titiz Çilingir Hizmet Bölgesi — İstanbul"
            />
          </div>
        </div>
      </section>
    </>
  );
}
