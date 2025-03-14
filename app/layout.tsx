import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { PlusIcon } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CUNY One Fraud Agent",
  description: "Agent will call you if it detects a suspicious transaction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#F3F4F6",
              color: "#1F2937",
              padding: "16px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            },
          }}
        />
        <div className="fixed right-6 bottom-6 z-50">
          <Link href="/add">
            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-800">
              <PlusIcon size={24} />
              <span className="sr-only">Add Transaction</span>
            </button>
          </Link>
        </div>
      </body>
    </html>
  );
}
