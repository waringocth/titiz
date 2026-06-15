import Link from "next/link";
import { KeyRound, Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import { hizmetler } from "@/data/hizmetler";
import { bolgeler } from "@/data/bolgeler";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] border-t border-[#C9A84C]/30">
      {/* Gold divider line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#C9A84C] rounded-lg flex items-center justify-center">
                <KeyRound className="w-5 h-5 text-[#0B1F3A]" />
              </div>
              <div>
                <span className="font-playfair text-xl font-bold text-white">
                  Titiz
                </span>
                <span className="font-playfair text-xl font-bold text-[#C9A84C]">
                  {" "}
                  Çilingir
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              İstanbul&apos;un güvenilir çilingiri — 7/24 hizmetinizdeyiz.
              Esenyurt, Beylikdüzü, Avcılar, Büyükçekmece ve Bahçeşehir&apos;de
              profesyonel çilingir hizmeti.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+905313145760"
                className="w-10 h-10 bg-[#C9A84C]/20 hover:bg-[#C9A84C]/40 border border-[#C9A84C]/30 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Telefon"
              >
                <Phone className="w-4 h-4 text-[#C9A84C]" />
              </a>
              <a
                href="https://wa.me/905313145760"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600/20 hover:bg-green-600/40 border border-green-600/30 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-4">
              Hızlı Linkler
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/hizmetler", label: "Hizmetlerimiz" },
                { href: "/hizmet-bolgeleri", label: "Hizmet Bölgeleri" },
                { href: "/blog", label: "Blog" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/iletisim", label: "İletişim" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-1"
                  >
                    <span className="text-[#C9A84C]/40">›</span> {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <p className="text-xs font-oswald uppercase text-[#C9A84C]/60 mb-2">
                  Hizmetler
                </p>
              </li>
              {hizmetler.slice(0, 4).map((h) => (
                <li key={h.slug}>
                  <Link
                    href={`/hizmetler/${h.slug}`}
                    className="text-sm text-gray-400 hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-1"
                  >
                    <span className="text-[#C9A84C]/40">›</span> {h.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Districts */}
          <div>
            <h3 className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-4">
              Hizmet Bölgeleri
            </h3>
            <ul className="space-y-3">
              {bolgeler.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/hizmet-bolgeleri/${b.slug}`}
                    className="group"
                  >
                    <p className="text-sm text-gray-300 group-hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C9A84C]" />
                      {b.title} Çilingir
                    </p>
                    <p className="text-xs text-gray-500 ml-4">
                      {b.mahalleler.length} mahalle
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-4">
              İletişim
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Telefon</p>
                  <a
                    href="tel:+905313145760"
                    className="text-white hover:text-[#C9A84C] transition-colors font-semibold"
                  >
                    0531 314 57 60
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/905313145760"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition-colors font-semibold"
                  >
                    WhatsApp ile Yaz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Çalışma Saatleri</p>
                  <p className="text-white font-semibold">7/24 Açık</p>
                  <p className="text-xs text-gray-400">
                    Hafta sonu ve tatil dahil
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-xl mt-4">
                <p className="text-xs text-gray-400 mb-2">
                  Acil durumda hemen arayın:
                </p>
                <a
                  href="tel:+905313145760"
                  className="text-[#C9A84C] font-bold text-lg hover:text-[#E8C96A] transition-colors block"
                >
                  0531 314 57 60
                </a>
                <p className="text-xs text-gray-500 mt-1">
                  15-20 dakikada kapınızdayız
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Titiz Çilingir. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-600 text-sm">
            <a
              href="https://titizcilingir.com"
              className="hover:text-[#C9A84C] transition-colors"
            >
              titizcilingir.com
            </a>{" "}
            — İstanbul&apos;un Güvenilir Çilingiri
          </p>
        </div>
      </div>
    </footer>
  );
}
