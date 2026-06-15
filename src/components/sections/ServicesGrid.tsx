"use client";

import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
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

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#0B1F3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-3"
          >
            Ne Yapabiliriz?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Profesyonel{" "}
            <span className="text-[#C9A84C]">Hizmetlerimiz</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] mx-auto rounded-full"
          />
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {hizmetler.map((h) => {
            const Icon = iconMap[h.icon] || Lock;
            return (
              <motion.div key={h.slug} variants={cardVariants}>
                <Link href={`/hizmetler/${h.slug}`} className="group block h-full">
                  <div className="h-full glass-card p-6 rounded-xl hover:border-[#C9A84C]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#C9A84C]/10">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-[#C9A84C]/15 group-hover:bg-[#C9A84C]/25 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#C9A84C]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-playfair font-bold text-lg text-white mb-2 group-hover:text-[#C9A84C] transition-colors duration-300">
                      {h.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {h.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-1 text-[#C9A84C] text-sm font-medium group-hover:gap-2 transition-all duration-300">
                      <span>Detay</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 border border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0B1F3A] font-semibold px-8 py-3 rounded-xl transition-all duration-300"
          >
            Tüm Hizmetleri Gör
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
