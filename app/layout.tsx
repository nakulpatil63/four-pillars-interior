import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import ClientCursorGlow from "@/components/ClientCursorGlow";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Four Pillars Interior | Luxury Modular Kitchens & Premium Wardrobes Belagavi",
  description:
    "Transform your home with Four Pillars Interior in Tilakwadi, Belagavi. Expertly crafted luxury modular kitchens, wardrobes, and custom space-saving furniture. 170+ 5-Star Reviews. Book your free consultation today.",
  keywords:
    "Modular Kitchen Belagavi, Wardrobes Tilakwadi, Interior Designer Belagavi, Luxury Furniture Belagavi, Four Pillars Interior, Custom Furniture Belagavi, Home Decor Karnataka",
  metadataBase: new URL("https://fourpillarsinterior.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Four Pillars Interior | Luxury Modular Kitchens & Premium Wardrobes",
    description:
      "Transform your home with Belagavi's top-rated luxury interior designers. Custom modular kitchens, wardrobes, and living spaces designed for elegance.",
    url: "https://fourpillarsinterior.com",
    siteName: "Four Pillars Interior",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 800,
        alt: "Luxury Modular Kitchen",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Four Pillars Interior | Luxury Modular Kitchens & Premium Wardrobes",
    description:
      "Transform your home with Belagavi's top-rated luxury interior designers. Custom modular kitchens, wardrobes, and living spaces designed for elegance.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Four Pillars Interior - Modular Kitchen and Wardrobes",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "@id": "https://fourpillarsinterior.com/#localbusiness",
    "url": "https://fourpillarsinterior.com/",
    "telephone": "+918050615011",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3rd Floor of Sunray Square, Khanapur Main Road, Near RPD Circle, Opposite Heda Ply, Ranade Colony, Tilakwadi",
      "addressLocality": "Belagavi",
      "addressRegion": "Karnataka",
      "postalCode": "590011",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 15.8398,
      "longitude": 74.5039
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.instagram.com/four_pillars_interior/",
      "https://www.facebook.com/fourpillarsinterior"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "170"
    }
  };

  const interiorDesignerSchema = {
    "@context": "https://schema.org",
    "@type": "InteriorDesign",
    "name": "Four Pillars Interior - Modular Kitchen and Wardrobes",
    "description": "Premium interior solutions including luxury modular kitchens, sliding wardrobes, walk-in closets, TV units, and spatial home design in Tilakwadi, Belagavi.",
    "areaServed": "Belagavi, Karnataka"
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${poppins.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(interiorDesignerSchema) }}
        />
      </head>
      <body className="bg-offwhite text-charcoal font-poppins antialiased overflow-x-hidden">
        <ClientCursorGlow />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}
