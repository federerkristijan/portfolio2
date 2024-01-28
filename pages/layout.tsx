import type { Metadata } from "next";
import "./globals.css";
import { LayoutProps } from "@/types";

export const metadata: Metadata = {
  title: "Kristijan Federer",
  description: "Fullstack Software Developer",
};

export default function RootLayout({children}: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
