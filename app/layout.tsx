import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Kaz Properties & Developers",
  description: "Welcome to Your Abode of Peace — Premium real estate by Kaz Properties.",
  icons: { icon: "/logo1.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full overflow-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
