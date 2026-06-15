"use client";

import { useState, useEffect } from "react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  KeyRound,
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { hizmetler } from "@/data/hizmetler";
import { bolgeler } from "@/data/bolgeler";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler", hasDropdown: true },
  {
    href: "/hizmet-bolgeleri",
    label: "Hizmet Bölgeleri",
    hasMegaDropdown: true,
  },
  { href: "/blog", label: "Blog" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B1F3A]/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-[#C9A84C] rounded-lg flex items-center justify-center group-hover:bg-[#E8C96A] transition-colors duration-200">
                <KeyRound className="w-5 h-5 text-[#0B1F3A]" />
              </div>
              <div>
                <span className="font-playfair text-xl font-bold text-white">
                  Titiz
                </span>
                <span className="font-playfair text-xl font-bold text-[#C9A84C]">
                  {" "}
                  Çilingir
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="relative"
                  onMouseEnter={() =>
                    (link.hasDropdown || link.hasMegaDropdown) &&
                    setActiveDropdown(link.href)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      pathname === link.href ||
                      (link.href !== "/" && pathname.startsWith(link.href))
                        ? "text-[#C9A84C] bg-[#C9A84C]/10"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    {(link.hasDropdown || link.hasMegaDropdown) && (
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === link.href ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Services Dropdown */}
                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-[#112952] border border-[#C9A84C]/20 rounded-xl shadow-2xl shadow-black/40 overflow-hidden"
                      >
                        {hizmetler.map((h) => (
                          <Link
                            key={h.slug}
                            href={`/hizmetler/${h.slug}`}
                            className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#C9A84C]/10 transition-colors duration-150"
                          >
                            {h.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Districts Mega Dropdown */}
                  <AnimatePresence>
                    {link.hasMegaDropdown && activeDropdown === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-[#112952] border border-[#C9A84C]/20 rounded-xl shadow-2xl shadow-black/40 p-4"
                      >
                        <p className="text-xs font-oswald uppercase tracking-widest text-[#C9A84C] mb-3">
                          Hizmet Bölgelerimiz
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {bolgeler.map((b) => (
                            <Link
                              key={b.slug}
                              href={`/hizmet-bolgeleri/${b.slug}`}
                              className="block p-3 rounded-lg hover:bg-[#C9A84C]/10 transition-colors duration-150 group"
                            >
                              <p className="text-sm font-medium text-white group-hover:text-[#C9A84C] transition-colors duration-150">
                                {b.title}
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5">
                                {b.mahalleler.length} mahalle
                              </p>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </nav>

            {/* Right Side CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/905313145760"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </a>
              <a
                href="tel:+905313145760"
                className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F3A] font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">0531 314 57 60</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-[#C9A84C] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menü"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-[#0B1F3A] border-l border-[#C9A84C]/20 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#C9A84C] rounded-lg flex items-center justify-center">
                      <KeyRound className="w-4 h-4 text-[#0B1F3A]" />
                    </div>
                    <span className="font-playfair font-bold text-white">
                      Titiz <span className="text-[#C9A84C]">Çilingir</span>
                    </span>
                  </Link>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.href}>
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          pathname === link.href
                            ? "bg-[#C9A84C]/20 text-[#C9A84C]"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                      {link.hasDropdown && (
                        <div className="ml-4 mt-1 space-y-1">
                          {hizmetler.slice(0, 4).map((h) => (
                            <Link
                              key={h.slug}
                              href={`/hizmetler/${h.slug}`}
                              className="block px-4 py-2 text-xs text-gray-400 hover:text-[#C9A84C] transition-colors"
                            >
                              → {h.title}
                            </Link>
                          ))}
                        </div>
                      )}
                      {link.hasMegaDropdown && (
                        <div className="ml-4 mt-1 space-y-1">
                          {bolgeler.map((b) => (
                            <Link
                              key={b.slug}
                              href={`/hizmet-bolgeleri/${b.slug}`}
                              className="block px-4 py-2 text-xs text-gray-400 hover:text-[#C9A84C] transition-colors"
                            >
                              → {b.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-8 space-y-3">
                  <a
                    href="tel:+905313145760"
                    className="flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F3A] font-semibold py-3 rounded-lg w-full transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    0531 314 57 60
                  </a>
                  <a
                    href="https://wa.me/905313145760"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-lg w-full transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
