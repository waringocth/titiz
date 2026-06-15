"use client";

import { useRef } from "react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { motion, useInView } from "framer-motion";
import { Phone} from "lucide-react";

export default function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="py-20 bg-[#C9A84C] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(11, 31, 58, 0.3) 20px,
              rgba(11, 31, 58, 0.3) 21px
            )`,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="font-oswald uppercase tracking-widest text-[#0B1F3A]/70 text-sm mb-4"
        >
          Acil Çilingir?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4"
        >
          Kapınız mı Kilitli Kaldı?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-[#0B1F3A]/70 text-lg mb-10"
        >
          Paniklemeyiniz! 7/24 hizmetinizdeyiz.{" "}
          <strong className="text-[#0B1F3A]">
            15-20 dakikada kapınızdayız.
          </strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:+905313145760"
            className="flex items-center justify-center gap-3 bg-[#0B1F3A] hover:bg-[#112952] text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Hemen Ara
          </a>
          <a
            href="https://wa.me/905313145760"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#0B1F3A] font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-5 h-5 text-green-600" />
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
