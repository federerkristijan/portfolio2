import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/global/Navbar";
import { LayoutProps } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kristijan Federer",
  description: "Fullstack Software Developer",
};

export default function RootLayout({
  children,
  menuItems
}: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto flex min-h-screen max-w-9xl flex-col pb-12 text-white bg-black">
          <div>
            <Navbar
              menuItems={menuItems}
            />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
