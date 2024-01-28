import type { Metadata } from "next";
import "./globals.css";
import { LayoutProps } from "@/types";

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
      <body className="bg-black">
        {children}
      </body>
    </html>
  );
}
