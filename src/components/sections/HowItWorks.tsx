"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, Unlock } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Bizi Arayın",
    description:
      "Telefon veya WhatsApp ile bize ulaşın. 7/24 aktif olan hattımız anında cevap verir.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Yerinize Gelelim",
    description:
      "Adresinize 15-20 dakika içinde ulaşıyoruz. Trafik durumu ne olursa olsun en hızlı rotayı kullanırız.",
  },
  {
    number: "03",
    icon: Unlock,
    title: "Sorununuzu Çözelim",
    description:
      "Uzman ekibimiz, profesyonel ekipmanlarla sorununuzu hızlı ve hasarsız biçimde çözer.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#0B1F3A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C9A84C]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-3"
          >
            Nasıl Çalışır?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            3 Adımda{" "}
            <span className="text-[#C9A84C]">Hızlı Çözüm</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] mx-auto rounded-full"
          />
        </div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[17%] right-[17%] h-0.5 bg-[#C9A84C]/20">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="h-full bg-gradient-to-r from-[#C9A84C] to-[#E8C96A]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.2,
                    ease: "easeOut",
                  }}
                  className="text-center relative"
                >
                  {/* Step circle */}
                  <div className="relative inline-flex flex-col items-center mb-6">
                    <div className="relative w-32 h-32">
                      {/* Outer ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-[#C9A84C]/20" />
                      {/* Inner circle */}
                      <div className="absolute inset-3 rounded-full bg-[#112952] border border-[#C9A84C]/40 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-[#C9A84C]" />
                      </div>
                      {/* Step number */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#C9A84C] rounded-full flex items-center justify-center">
                        <span className="font-oswald font-bold text-xs text-[#0B1F3A]">
                          {step.number.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-playfair font-bold text-xl text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
