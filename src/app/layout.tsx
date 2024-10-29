import type { Metadata } from "next";
import localFont from "next/font/local";
import "normalize.css";
import "./globals.css";
import Menu from "@/components/Menu";

const interTightRegular = localFont({
  src: "./fonts/InterTight-Regular.ttf",
  variable: "--inter-tight-regular",
  weight: "100 900",
});

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
      <body className={`${interTightRegular.variable} mx-5 sm:mx-10 lg:mx-32`}>
        {children}
      </body>
    </html>
  );
}
