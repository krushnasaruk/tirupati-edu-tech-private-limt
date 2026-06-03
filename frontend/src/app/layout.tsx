import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MBBS Admission Consultancy",
  description: "Educational/medical admission consultancy",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import LeadGenerationModal from "@/components/LeadGenerationModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingActionButtons />
        <LeadGenerationModal />
      </body>
    </html>
  );
}
