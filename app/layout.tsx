import type { Metadata } from "next";
import { Noto_Sans, League_Spartan, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Variable } from "lucide-react";
import { GoogleTagManager } from "@next/third-parties/google";
import Analytics from "@/components/Analytics";
import { Suspense } from "react";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UX & Web Designer Elin Eurenius",
  description: "Portfolio showcasing UX & web design projects by Elin Eurenius",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} justify-between flex flex-col min-h-screen`}
      >
        <GoogleTagManager
          gtmId={gtmId}
          gtmScriptUrl="https://www.googletagmanager.com/gtm.js"
        />
        <MainNav />
        <main className="flex mx-auto w-full flex:1">{children}</main>
        <Footer />

        <Suspense>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
