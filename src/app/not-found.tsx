import Link from "next/link";
import { Phone, Home, Lock } from "lucide-react";

export const metadata = {
  title: "Sayfa Bulunamadı | Titiz Çilingir",
  description: "Aradığınız sayfa mevcut değil. Ana sayfaya dönün veya bizi arayın.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0B1F3A] flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">
        {/* Padlock Icon */}
        <div className="relative inline-flex items-center justify-center w-32 h-32 mb-8">
          <div className="absolute inset-0 bg-[#C9A84C]/10 rounded-full blur-2xl" />
          <div className="relative w-24 h-24 bg-[#C9A84C]/15 rounded-full border border-[#C9A84C]/30 flex items-center justify-center">
            <Lock className="w-12 h-12 text-[#C9A84C]" />
          </div>
        </div>

        {/* 404 Badge */}
        <p className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-4">
          Hata 404
        </p>

        {/* Heading */}
        <h1 className="font-playfair font-bold text-4xl sm:text-5xl text-white mb-4">
          Sayfa Bulunamadı
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Aradığınız sayfa kaldırılmış, taşınmış veya hiç var olmamış olabilir.
          Ama çilingir hizmeti için her zaman buradayız!
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F3A] font-bold px-8 py-4 rounded-xl transition-colors"
          >
            <Home className="w-5 h-5" />
            Ana Sayfaya Dön
          </Link>
          <a
            href="tel:+905313145760"
            className="flex items-center justify-center gap-2 border border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0B1F3A] font-bold px-8 py-4 rounded-xl transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            0531 314 57 60
          </a>
        </div>

        {/* CTA strip */}
        <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-2xl p-6">
          <div className="flex items-center gap-2 justify-center mb-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-oswald uppercase tracking-wider">
              7/24 Aktif
            </span>
          </div>
          <p className="text-white font-semibold mb-1">Acil çilingir ihtiyacınız mı var?</p>
          <p className="text-gray-400 text-sm">
            İstanbul Esenyurt, Beylikdüzü, Avcılar, Büyükçekmece ve Bahçeşehir&apos;de{" "}
            <strong className="text-[#C9A84C]">15-20 dakikada</strong> adresinizde oluyoruz.
          </p>
        </div>
      </div>
    </main>
  );
}
