"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function StickyWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: 100 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          {/* Phone Button */}
          <motion.a
            href="tel:+905313145760"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F3A] rounded-full shadow-lg shadow-[#C9A84C]/30 transition-colors duration-200 pr-4 pl-3 h-12"
            aria-label="7/24 Ara"
          >
            <div className="w-7 h-7 bg-[#0B1F3A]/20 rounded-full flex items-center justify-center">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-bold whitespace-nowrap">
              7/24 Ara
            </span>
          </motion.a>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/905313145760"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-14 h-14 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-lg shadow-green-500/40 flex items-center justify-center transition-colors duration-200"
            aria-label="WhatsApp"
          >
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
            <span className="absolute inset-1 rounded-full bg-green-400 animate-ping opacity-20 animation-delay-150" />
            <MessageCircle className="w-7 h-7 relative z-10" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
