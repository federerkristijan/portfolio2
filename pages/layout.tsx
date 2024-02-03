import { LayoutProps } from "@/types";
import { Navbar } from "@/components/global/navbar/Navbar";
import Head from "next/head";

export default function RootLayout({children}: LayoutProps) {
  return (
    <>

    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
    </>
  );
}
