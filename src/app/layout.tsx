import type { Metadata } from "next";
import { Playfair_Display, Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyWhatsApp from "@/components/ui/StickyWhatsApp";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Titiz Çilingir | İstanbul 7/24 Profesyonel Çilingir Hizmeti",
  description:
    "İstanbul Esenyurt, Beylikdüzü, Avcılar, Büyükçekmece ve Bahçeşehir'de 7/24 profesyonel çilingir hizmeti. Kapı açma, kilit değişimi, oto çilingir. Hemen arayın: 0531 314 57 60",
  keywords: [
    "çilingir",
    "çilingir istanbul",
    "esenyurt çilingir",
    "beylikdüzü çilingir",
    "avcılar çilingir",
    "kapı açma",
    "kilit değişimi",
    "acil çilingir",
    "7/24 çilingir",
    "oto çilingir",
  ],
  openGraph: {
    title: "Titiz Çilingir | İstanbul 7/24 Profesyonel Çilingir Hizmeti",
    description:
      "İstanbul'un güvenilir çilingiri. 15-20 dk içinde kapınızdayız!",
    url: "https://titizcilingir.com",
    siteName: "Titiz Çilingir",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://titizcilingir.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Titiz Çilingir",
  telephone: "+905313145760",
  url: "https://titizcilingir.com",
  image: "https://titizcilingir.com/og-image.jpg",
  description:
    "İstanbul'da 7/24 profesyonel çilingir hizmeti. Kapı açma, kilit değişimi, oto çilingir.",
  areaServed: [
    "Esenyurt",
    "Beylikdüzü",
    "Büyükçekmece",
    "Avcılar",
    "Bahçeşehir",
  ],
  openingHours: "Mo-Su 00:00-24:00",
  priceRange: "₺₺",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+905313145760",
    contactType: "customer service",
    availableLanguage: "Turkish",
    hoursAvailable: "Mo-Su 00:00-24:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${inter.variable} ${oswald.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
