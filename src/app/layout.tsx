import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";
import { GitHubStars } from "@/components/ui/GitHubStars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shazam Clone in Next.js and TS",
  description: "Unofficial - Built by 14 year old Etai Gabbai in Irvine, CA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
          <Link
            href="/how-it-works"
            className="text-white hover:text-gray-300 transition-colors font-medium text-sm shine-large shadow-strong bg-[#333f43] px-4 py-2 rounded-full"
          >
            How it works
          </Link>
          <GitHubStars />
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}