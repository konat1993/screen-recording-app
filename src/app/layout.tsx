import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Screen Recording App",
  description: "App for screen recording",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
