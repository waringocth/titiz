"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#0B1F3A] z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Animated padlock */}
        <div className="relative">
          {/* Outer pulse ring */}
          <div className="absolute inset-0 rounded-full bg-[#C9A84C]/20 animate-ping" />
          {/* Inner ring */}
          <div className="relative w-20 h-20 rounded-full border-2 border-[#C9A84C]/40 flex items-center justify-center">
            {/* Spinner arc */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C9A84C] animate-spin" />
            {/* Center icon */}
            <svg
              className="w-8 h-8 text-[#C9A84C]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
        </div>

        {/* Brand name */}
        <div className="text-center">
          <p className="font-oswald uppercase tracking-widest text-[#C9A84C] text-xs mb-1">
            Titiz Çilingir
          </p>
          {/* Loading dots */}
          <div className="flex items-center justify-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/60"
                style={{
                  animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.6; }
          40% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
