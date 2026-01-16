import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientErrorLogger from "./components/ClientErrorLogger";
import Header from "./components/common/Header";
import Preloader from "./components/common/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ============================
   ✅ Global SEO Metadata
   ============================ */
export const metadata = {
  metadataBase: new URL("https://sinnextech.com"),

  title: {
    default: "Sinnex Tech | Healthcare Technology & Digital Solutions",
    template: "%s | Sinnex Tech",
  },

  description:
    "Sinnex Tech delivers innovative healthcare technology, digital transformation, and IT solutions designed to improve efficiency, care, and business growth.",

  keywords: [
    "Sinnex Tech",
    "healthcare technology company",
    "healthcare IT solutions",
    "medical software solutions",
    "digital healthcare services",
    "health tech company",
    "healthcare web development",
    "custom healthcare software",
    "IT solutions for healthcare",
    "technology meets healthcare",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://sinnextech.com",
  },

  /* ✅ Open Graph (Facebook, LinkedIn, WhatsApp) */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sinnextech.com",
    siteName: "Sinnex Tech",
    title: "Sinnex Tech | Healthcare Technology & Digital Solutions",
    description:
      "Empowering healthcare through innovative technology, software solutions, and digital transformation services.",
    images: [
      {
        url: "/og/home.png", // place this image in /public/og/home.png
        width: 1200,
        height: 630,
        alt: "Sinnex Tech - Healthcare Technology Solutions",
      },
    ],
  },

  /* ✅ Twitter Card */
  twitter: {
    card: "summary_large_image",
    title: "Sinnex Tech | Healthcare Technology Solutions",
    description:
      "Innovative healthcare technology, digital solutions, and IT services by Sinnex Tech.",
    images: ["/og/home.png"],
  },

  /* ✅ Favicons */
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Preloader />
        {/* Client-side logger to capture runtime errors and send them to the dev server */}
        <Header />
        <ClientErrorLogger />
        {children}


         {/* ✅ Google Analytics (replace ID later) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script
          id="ga-setup"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  );
}
