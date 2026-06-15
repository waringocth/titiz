"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterCardProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function CounterCard({
  value,
  suffix,
  label,
  icon,
  delay = 0,
}: CounterCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg shadow-black/5 border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-[#C9A84C]/10 transition-all duration-300"
    >
      <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-4 text-[#C9A84C]">
        {icon}
      </div>
      <div className="flex items-end gap-0.5">
        <span className="font-playfair font-bold text-4xl text-[#0B1F3A]">
          {count}
        </span>
        <span className="font-playfair font-bold text-2xl text-[#C9A84C] mb-1">
          {suffix}
        </span>
      </div>
      <p className="text-gray-600 text-sm font-medium mt-2 text-center">
        {label}
      </p>
    </motion.div>
  );
}
