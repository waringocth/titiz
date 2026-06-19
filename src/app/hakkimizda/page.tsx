import { Metadata } from "next";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import Link from "next/link";
import Image from "next/image";
import { Shield, Zap, Star, Users, Clock, Map, Phone} from "lucide-react";
import CounterCard from "@/components/ui/CounterCard";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Hakkımızda | Titiz Çilingir — İstanbul'un Güvenilir Çilingiri",
  description:
    "2015'ten bu yana İstanbul'da güvenilir çilingir hizmeti sunuyoruz. Esenyurt, Beylikdüzü, Avcılar, Büyükçekmece ve Bahçeşehir'de 7/24 hizmetinizdeyiz.",
  keywords: [
    "titiz çilingir hakkında",
    "istanbul çilingir şirketi",
    "güvenilir çilingir",
    "profesyonel çilingir",
  ],
  openGraph: {
    title: "Hakkımızda | Titiz Çilingir",
    description: "İstanbul'un güvenilir çilingiri hakkında bilgi edinin.",
    url: "https://titizcilingir.com/hakkimizda",
    siteName: "Titiz Çilingir",
  },
  alternates: { canonical: "https://titizcilingir.com/hakkimizda" },
};

const values = [
  {
    icon: Shield,
    title: "Güven",
    description:
      "Her müşterimize en yüksek güven standartlarıyla hizmet veriyoruz. Ekibimiz kimlik doğrulamalı ve sigortalıdır.",
  },
  {
    icon: Zap,
    title: "Hız",
    description:
      "Acil durumlarınızda 15-20 dakika içinde adresinizde oluyoruz. Hız bizim önceliğimizdir.",
  },
  {
    icon: Star,
    title: "Kalite",
    description:
      "Yalnızca en kaliteli ekipman ve kilit markalarını kullanıyoruz. İşimizi en iyi şekilde yaparız.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#112952]/80 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/" className="text-gray-400 hover:text-[#C9A84C] transition-colors">Ana Sayfa</Link>
            <span className="text-gray-600">/</span>
            <span className="text-[#C9A84C]">Hakkımızda</span>
          </nav>
          <div className="max-w-3xl">
            <p className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-4">
              Biz Kimiz?
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6">
              Titiz Çilingir{" "}
              <span className="text-[#C9A84C]">Hakkında</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              2015&apos;ten bu yana İstanbul&apos;da güvenilir çilingir hizmeti
              sunuyoruz. Esenyurt, Beylikdüzü, Avcılar, Büyükçekmece ve
              Bahçeşehir&apos;de 7/24 hizmetinizdeyiz.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-4">
                Hikayemiz
              </p>
              <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-[#0B1F3A] mb-6">
                2015&apos;ten Bu Yana{" "}
                <span className="text-[#C9A84C]">
                  İstanbul&apos;un Yanındayız
                </span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Titiz Çilingir, 2015 yılında İstanbul&apos;da profesyonel
                  çilingir hizmeti sunmak amacıyla kurulmuştur. Kuruluşumuzdan
                  bu yana müşteri memnuniyetini ve güvenliği ön planda tutarak
                  büyüdük.
                </p>
                <p>
                  Bugün Esenyurt, Beylikdüzü, Avcılar, Büyükçekmece ve
                  Bahçeşehir ilçelerinde 40&apos;tan fazla mahallede hizmet
                  veriyoruz. Her geçen gün büyüyen ekibimiz ve genişleyen hizmet
                  ağımızla İstanbul&apos;da çilingir sektörünün güvenilir ismi
                  olmayı sürdürüyoruz.
                </p>
                <p>
                  Acil çilingir ihtiyaçlarında 7/24 hizmet anlayışımızla, gece
                  ya da gündüz, tatil ya da hafta içi fark etmeksizin
                  müşterilerimizin yanındayız. 15-20 dakikalık ortalama varış
                  süremiz ile İstanbul&apos;un en hızlı çilingir hizmetini
                  sunmaya devam ediyoruz.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/hakkimizda.jpg"
                  alt="Titiz Çilingir ekibi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/50 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#C9A84C] rounded-2xl p-6 shadow-xl">
                <p className="font-playfair font-bold text-3xl text-[#0B1F3A]">
                  10+
                </p>
                <p className="text-[#0B1F3A]/80 text-sm font-medium">
                  Yıl Deneyim
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-3">
              Değerlerimiz
            </p>
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-white">
              Bizi <span className="text-[#C9A84C]">Farklı Kılan Nedir?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="glass-card p-8 rounded-2xl hover:border-[#C9A84C]/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#C9A84C]/15 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#C9A84C]" />
                  </div>
                  <h3 className="font-playfair font-bold text-xl text-white mb-3">
                    {v.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl text-[#0B1F3A]">
              Rakamlarla <span className="text-[#C9A84C]">Başarımız</span>
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
              value={10}
              suffix="+ Yıl"
              label="Deneyim"
              icon={<Star className="w-6 h-6" />}
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

      {/* Coverage */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-4">
                Hizmet Alanımız
              </p>
              <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-[#0B1F3A] mb-6">
                İstanbul&apos;un{" "}
                <span className="text-[#C9A84C]">5 İlçesinde</span> Hizmet
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                İstanbul&apos;un batısında yer alan 5 büyük ilçede ve bu
                ilçelere bağlı 40&apos;tan fazla mahallede profesyonel çilingir
                hizmeti sunuyoruz.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Esenyurt", "Beylikdüzü", "Avcılar", "Büyükçekmece", "Bahçeşehir"].map(
                  (d) => (
                    <div
                      key={d}
                      className="flex items-center gap-2 bg-[#F5F3EE] rounded-xl p-3"
                    >
                      <Map className="w-4 h-4 text-[#C9A84C]" />
                      <span className="text-sm font-medium text-[#0B1F3A]">
                        {d}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="bg-[#0B1F3A] rounded-2xl p-8 border border-[#C9A84C]/20">
              <h3 className="font-playfair font-bold text-2xl text-white mb-6">
                Bize Ulaşın
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+905313145760"
                  className="flex items-center gap-4 p-4 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-xl hover:bg-[#C9A84C]/20 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#C9A84C] rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#0B1F3A]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Telefon</p>
                    <p className="font-bold text-[#C9A84C]">0531 314 57 60</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/905313145760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-600/10 border border-green-600/20 rounded-xl hover:bg-green-600/20 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">WhatsApp</p>
                    <p className="font-bold text-green-400">
                      WhatsApp ile Yaz
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Çalışma Saatleri</p>
                    <p className="font-bold text-white">7/24 — Her Gün Açık</p>
                  </div>
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
