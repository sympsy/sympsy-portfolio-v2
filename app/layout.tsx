import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SYMPSY",
  description:
    "Editorial photography and cinematic filmmaking portfolio of Jaheim Simpson.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <div className="grain" />
      </body>
    </html>
  );
}