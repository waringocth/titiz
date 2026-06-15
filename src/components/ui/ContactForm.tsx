"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Phone, MessageCircle, Clock, MapPin, CheckCircle } from "lucide-react";
import { bolgeler } from "@/data/bolgeler";

interface FormData {
  adSoyad: string;
  telefon: string;
  ilce: string;
  mesaj: string;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-playfair font-bold text-2xl text-[#0B1F3A] mb-2">
          Mesajınız Alındı!
        </h3>
        <p className="text-gray-600 mb-6">
          En kısa sürede sizi arayacağız. Acil durumlar için hemen arayın!
        </p>
        <div className="flex gap-3">
          <a
            href="tel:+905313145760"
            className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F3A] font-bold px-6 py-2.5 rounded-xl transition-colors"
          >
            <Phone className="w-4 h-4" />
            Hemen Ara
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="border border-gray-200 text-gray-600 hover:bg-gray-50 px-6 py-2.5 rounded-xl transition-colors text-sm"
          >
            Yeni Mesaj
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Ad Soyad */}
      <div>
        <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">
          Ad Soyad <span className="text-red-500">*</span>
        </label>
        <input
          {...register("adSoyad", { required: "Ad Soyad gereklidir" })}
          type="text"
          placeholder="Adınız Soyadınız"
          className={`w-full px-4 py-3 border rounded-xl text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30 ${
            errors.adSoyad
              ? "border-red-400 bg-red-50"
              : "border-gray-200 bg-white focus:border-[#C9A84C]"
          }`}
        />
        {errors.adSoyad && (
          <p className="text-red-500 text-xs mt-1">{errors.adSoyad.message}</p>
        )}
      </div>

      {/* Telefon */}
      <div>
        <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">
          Telefon <span className="text-red-500">*</span>
        </label>
        <input
          {...register("telefon", {
            required: "Telefon numarası gereklidir",
            pattern: {
              value: /^[0-9\s\+\-\(\)]+$/,
              message: "Geçerli bir telefon numarası girin",
            },
          })}
          type="tel"
          placeholder="0xxx xxx xx xx"
          className={`w-full px-4 py-3 border rounded-xl text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30 ${
            errors.telefon
              ? "border-red-400 bg-red-50"
              : "border-gray-200 bg-white focus:border-[#C9A84C]"
          }`}
        />
        {errors.telefon && (
          <p className="text-red-500 text-xs mt-1">{errors.telefon.message}</p>
        )}
      </div>

      {/* İlçe */}
      <div>
        <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">
          Bulunduğunuz İlçe
        </label>
        <select
          {...register("ilce")}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C] transition-colors"
        >
          <option value="">İlçe Seçin</option>
          {bolgeler.map((b) => (
            <option key={b.slug} value={b.slug}>
              {b.title}
            </option>
          ))}
          <option value="diger">Diğer</option>
        </select>
      </div>

      {/* Mesaj */}
      <div>
        <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">
          Mesajınız <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("mesaj", { required: "Mesaj gereklidir" })}
          rows={4}
          placeholder="Sorununuzu veya talebinizi kısaca yazın..."
          className={`w-full px-4 py-3 border rounded-xl text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30 resize-none ${
            errors.mesaj
              ? "border-red-400 bg-red-50"
              : "border-gray-200 bg-white focus:border-[#C9A84C]"
          }`}
        />
        {errors.mesaj && (
          <p className="text-red-500 text-xs mt-1">{errors.mesaj.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#C9A84C] hover:bg-[#E8C96A] disabled:opacity-60 text-[#0B1F3A] font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A84C]/30"
      >
        {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Acil durumlar için lütfen doğrudan arayın:{" "}
        <a
          href="tel:+905313145760"
          className="text-[#C9A84C] font-medium"
        >
          0531 314 57 60
        </a>
      </p>
    </form>
  );
}
