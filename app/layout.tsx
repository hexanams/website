import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/components/organisms/Footer";

export const metadata: Metadata = {
  title: "Hex Innovations",
  description: "We create Software& Digital Excellence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
