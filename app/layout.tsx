import type { Metadata } from "next";
import { Noto_Sans, League_Spartan } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Variable } from "lucide-react";
import { GoogleTagManager } from "@next/third-parties/google";
import Analytics from "@/components/Analytics";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
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
        className={`${notoSans.variable} flex flex-col min-h-screen bg-mist-100`}
      >
        <MainNav />
        <main className="flex mx-auto w-full flex:1">{children}</main>
        <Footer />
        <GoogleTagManager gtmId="GTM-NMLBWBTQ" />
        <Analytics />
      </body>
    </html>
  );
}
