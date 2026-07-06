import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ASL SPORTS | منصة أضواء الرياضة الرقمية",
  description:
    "منصة أضواء الرياضة الرقمية - تسيير النوادي الرياضية والإجازات الرياضية",
  manifest: "/manifest.json",
  icons: {
    icon: "/images/asl-sports-logo.png",
    apple: "/images/asl-sports-logo.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ASL SPORTS",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a2540",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
