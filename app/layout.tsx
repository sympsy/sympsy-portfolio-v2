import type { Metadata } from "next";
import "./globals.css";

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
  {children}

  <div className="grain" />
</body>
    </html>
  );
}