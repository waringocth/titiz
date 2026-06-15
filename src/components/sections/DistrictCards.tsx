"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ArrowRight, ChevronRight } from "lucide-react";
import { bolgeler } from "@/data/bolgeler";

export default function DistrictCards() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="font-oswald uppercase tracking-widest text-[#C9A84C] text-sm mb-3"
          >
            Hizmet Bölgelerimiz
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4"
          >
            İstanbul&apos;da{" "}
            <span className="text-[#C9A84C]">5 İlçede</span> Hizmet
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] mx-auto rounded-full"
          />
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bolgeler.map((b, i) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 60, rotate: i % 2 === 0 ? -2 : 2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            >
              <Link
                href={`/hizmet-bolgeleri/${b.slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 hover:border-[#C9A84C]/40 hover:shadow-xl hover:shadow-[#C9A84C]/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Card header */}
                <div className="bg-[#0B1F3A] p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#C9A84C]" />
                      <h3 className="font-playfair font-bold text-xl text-white">
                        {b.title}
                      </h3>
                    </div>
                    <span className="bg-[#C9A84C]/20 text-[#C9A84C] text-xs font-oswald uppercase px-3 py-1 rounded-full">
                      {b.mahalleler.length} Mahalle
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{b.description}</p>
                </div>

                {/* Neighborhoods list */}
                <div className="p-6">
                  <p className="text-xs font-oswald uppercase text-gray-400 tracking-wider mb-3">
                    Başlıca Mahalleler
                  </p>
                  <ul className="space-y-1 mb-4">
                    {b.mahalleler.slice(0, 4).map((m) => (
                      <li
                        key={m.slug}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <ChevronRight className="w-3 h-3 text-[#C9A84C]" />
                        {m.title}
                      </li>
                    ))}
                    {b.mahalleler.length > 4 && (
                      <li className="text-xs text-gray-400 ml-5">
                        +{b.mahalleler.length - 4} mahalle daha
                      </li>
                    )}
                  </ul>

                  <div className="flex items-center gap-1 text-[#C9A84C] text-sm font-semibold group-hover:gap-2 transition-all duration-300">
                    <span>Tüm Mahalleler</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
