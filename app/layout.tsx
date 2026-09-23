import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fujipipes | Piping & Water Storage Solutions",
  description: "High-quality piping and water storage solutions for the Philippines.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
