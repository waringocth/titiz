import type { Metadata } from "next";
import { Playfair_Display, Inter, Oswald } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL('https://titizcilingir.com'),
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
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    title: "Titiz Çilingir | İstanbul 7/24 Profesyonel Çilingir Hizmeti",
    description:
      "İstanbul'un güvenilir çilingiri. 15-20 dk içinde kapınızdayız!",
    url: "https://titizcilingir.com",
    siteName: "Titiz Çilingir",
    locale: "tr_TR",
    type: "website",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Titiz Çilingir' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Titiz Çilingir | İstanbul 7/24 Çilingir Hizmeti',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: "https://titizcilingir.com",
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
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KGQVKDZM');
          `}
        </Script>
      </head>
      <body className="font-inter antialiased">
        {/* Google Tag Manager (noscript) — must be first element inside body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGQVKDZM"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
