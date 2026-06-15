"use client";

import { motion, Variants } from "framer-motion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import Link from "next/link";
import { Phone} from "lucide-react";
import PadlockAnimation from "@/components/ui/PadlockAnimation";
import { Typewriter } from "react-simple-typewriter";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HeroSection() {
  const words = ["Güvenilir", "Hızlı", "Profesyonel"];

  return (
    <section className="relative min-h-screen flex items-center bg-[#0B1F3A] overflow-hidden">
      {/* Grain texture */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      {/* Background gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#112952]/80 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      {/* Scattered gold particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${5 + (i * 8) % 90}%`,
              bottom: "-20px",
              width: `${3 + (i % 3)}px`,
              height: `${3 + (i % 3)}px`,
              animationDuration: `${8 + (i * 3) % 12}s`,
              animationDelay: `${(i * 1.5) % 8}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-oswald uppercase tracking-widest px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                7/24 Aktif Hizmet
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2"
            >
              İstanbul&apos;da
            </motion.h1>
            <motion.div variants={itemVariants} className="mb-2">
              <span className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#C9A84C]">
                <Typewriter
                  words={["Güvenilir", "Hızlı", "Profesyonel"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Çilingir Hizmeti
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Esenyurt, Beylikdüzü, Avcılar, Büyükçekmece ve
              Bahçeşehir&apos;de{" "}
              <span className="text-[#C9A84C]">7/24 kapınızdayız.</span> Ortalama{" "}
              <span className="text-white font-medium">15-20 dakikada</span>{" "}
              adresinize ulaşıyoruz.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:+905313145760"
                className="group flex items-center justify-center gap-3 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F3A] font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A84C]/30 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                <span>Hemen Ara: 0531 314 57 60</span>
              </a>
              <a
                href="https://wa.me/905313145760"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-transparent hover:bg-green-600/10 text-white border-2 border-green-500 hover:border-green-400 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-5 h-5 text-green-400" />
                <span>WhatsApp ile Yaz</span>
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10"
            >
              {[
                { value: "500+", label: "Mutlu Müşteri" },
                { value: "15 dk", label: "Ortalama Varış" },
                { value: "5 İlçe", label: "Kapsama Alanı" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-playfair font-bold text-xl text-[#C9A84C]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Padlock Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <PadlockAnimation />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[#C9A84C]/40 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#C9A84C]/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
