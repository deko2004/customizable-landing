import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing - Build the Future Your Way",
  description:
    "Create stunning, customizable experiences with our modern platform. Designed for developers who demand excellence.",
  keywords: ["landing page", "customizable", "themes", "developer tools"],
  authors: [{ name: "Landing Team" }],
  viewport: "width=device-width, initial-scale=1",
  generator: "v0.dev",
  icons: {
    icon: "/avatar.webp",
    apple: "/avatar.webp",
  },
  openGraph: {
    title: "Landing - Build the Future Your Way",
    description:
      "Create stunning, customizable experiences with our modern platform.",
    url: "https://yotalanding.netlify.app", // ✅ غيّر هذا إلى رابط موقعك الفعلي
    siteName: "Landing",
    images: [
      {
        url: "https://yotalanding.netlify.app/avatar.webp", // ✅ صورة Open Graph (يفضل 1200x630)
        width: 1200,
        height: 630,
        alt: "Landing preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing - Build the Future Your Way",
    description:
      "Create stunning, customizable experiences with our modern platform.",
    images: ["https://yotalanding.netlify.app/avatar.webp"], // نفس الصورة
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
