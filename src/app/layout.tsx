import type { Metadata } from "next";
import "normalize.css";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Energy Consulting",
  description: "Energy consulting website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
