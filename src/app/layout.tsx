import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatAssistant from "@/components/AIChatAssistant";
import { AuthProvider } from "@/lib/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divine's Wrist Wear | Timeless Watches",
  description: "Explore youthful elegance and modern luxury. High-quality watches for teens, professionals, and luxury buyers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://app.dante-ai.com/bubble-embed.js?kb_id=e2ca56e3-43b9-4fe4-8913-ba07d37f16a9&token=6ad8945d-dbb4-4790-80b3-cd31a3b224bf&modeltype=gpt-4-omnimodel-mini&tabs=false"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <AuthProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <AIChatAssistant />
        </AuthProvider>
      </body>
    </html>
  );
}
