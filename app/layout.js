import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientErrorLogger from "./components/ClientErrorLogger";
import Header from "./components/common/HeaderTwo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sinnex Tech",
  description: "Where technology meets healthcare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Client-side logger to capture runtime errors and send them to the dev server */}
        <Header />

        <ClientErrorLogger />
        {children}
      </body>
    </html>
  );
}
