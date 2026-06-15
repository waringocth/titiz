"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mehmet Yılmaz",
    district: "Esenyurt",
    rating: 5,
    text: "Gece 02:00'de kapım kilitli kaldı, aradım 20 dakikada geldiler. İnanılmaz hızlı ve profesyonel hizmet. Kesinlikle tavsiye ediyorum!",
    initials: "MY",
  },
  {
    name: "Fatma Kaya",
    district: "Beylikdüzü",
    rating: 5,
    text: "Arabamın anahtarını içerde unuttum. Titiz Çilingir ekibi boyaya hiç dokunmadan aracı açtı. Çok teşekkürler!",
    initials: "FK",
  },
  {
    name: "Ali Demir",
    district: "Avcılar",
    rating: 5,
    text: "Evime taşındıktan sonra kilit değişimi için aradım. Aynı gün geldiler, Mul-T-Lock taktılar. Fiyat da çok makuldü.",
    initials: "AD",
  },
  {
    name: "Ayşe Çelik",
    district: "Büyükçekmece",
    rating: 5,
    text: "Çelik kapımın kilidi bozuldu, sabah 07:00'de aradım, 15 dakikada geldiler. Hem kilit değiştirdiler hem çok nazik davrandılar.",
    initials: "AÇ",
  },
  {
    name: "Mustafa Arslan",
    district: "Bahçeşehir",
    rating: 5,
    text: "Akıllı kilit kurulumu için çağırdım. Çok bilgili ve hızlı bir ekip. Samsung akıllı kilidi mükemmel monte ettiler.",
    initials: "MA",
  },
  {
    name: "Zeynep Güler",
    district: "Esenyurt",
    rating: 5,
    text: "Kasa şifremi unuttum, ciddi bir panik yaşadım. Titiz Çilingir 30 dakikada kasayı açtı. Gerçek profesyoneller!",
    initials: "ZG",
  },
];

// Duplicate for seamless loop
const allTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#F5F3EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-3"
          >
            Müşteri Yorumları
          </motion.p>
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4"
          >
            Müşterilerimiz{" "}
            <span className="text-[#C9A84C]">Ne Diyor?</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] mx-auto rounded-full"
          />
        </div>
      </div>

      {/* Auto-scrolling testimonials */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F5F3EE] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F5F3EE] to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="testimonial-track flex gap-6 min-w-max">
            {allTestimonials.map((t, i) => (
              <div
                key={i}
                className="w-80 flex-shrink-0 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0B1F3A] rounded-full flex items-center justify-center">
                    <span className="font-bold text-[#C9A84C] text-sm">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B1F3A] text-sm">
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs">{t.district}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-3.5 h-3.5 text-[#C9A84C] fill-[#C9A84C]"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
