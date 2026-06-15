"use client";

import { motion } from "framer-motion";

export default function PadlockAnimation() {
  return (
    <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-[#C9A84C]/10 blur-3xl animate-pulse" />

      {/* Outer ring */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-4 rounded-full border-2 border-[#C9A84C]/30"
      />
      <motion.div
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-8 rounded-full border border-[#C9A84C]/20"
      />

      {/* Padlock SVG */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
        className="relative z-10"
      >
        <svg
          width="140"
          height="160"
          viewBox="0 0 140 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shackle (the arch part) */}
          <motion.path
            d="M42 70 L42 40 Q42 15 70 15 Q98 15 98 40 L98 70"
            stroke="#C9A84C"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
            variants={{
              locked: { d: "M42 70 L42 40 Q42 15 70 15 Q98 15 98 40 L98 70" },
              unlocked: {
                d: "M42 70 L42 22 Q42 -10 70 -10 Q98 -10 98 22 L98 50",
              },
            }}
            initial="locked"
            animate="unlocked"
            transition={{ delay: 0.8, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          />

          {/* Lock body */}
          <motion.rect
            x="20"
            y="68"
            width="100"
            height="80"
            rx="12"
            fill="#112952"
            stroke="#C9A84C"
            strokeWidth="3"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 68, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          {/* Body highlight */}
          <motion.rect
            x="20"
            y="68"
            width="100"
            height="30"
            rx="12"
            fill="#C9A84C"
            fillOpacity="0.1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />

          {/* Keyhole outer circle */}
          <motion.circle
            cx="70"
            cy="108"
            r="16"
            fill="#0B1F3A"
            stroke="#C9A84C"
            strokeWidth="2.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4, type: "spring" }}
          />

          {/* Keyhole shape */}
          <motion.path
            d="M70 96 L70 120 M62 114 L78 114"
            stroke="#C9A84C"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 90 }}
            transition={{ delay: 0.8, duration: 0.5, ease: "backOut" }}
            style={{ transformOrigin: "70px 108px" }}
          />

          {/* Decorative dots */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx={35 + i * 35}
              cy="138"
              r="3"
              fill="#C9A84C"
              fillOpacity="0.4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9 + i * 0.1 }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Orbiting particles */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#C9A84C]"
          style={{
            top: "50%",
            left: "50%",
          }}
          animate={{
            x: Math.cos((i / 5) * Math.PI * 2) * 120,
            y: Math.sin((i / 5) * Math.PI * 2) * 120,
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
