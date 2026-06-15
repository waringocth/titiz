"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import animationData from "../../../public/Unlocked.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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

      {/* Lottie Animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="w-full h-full max-w-[200px] max-h-[200px]"
        />
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
