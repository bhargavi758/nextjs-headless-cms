import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Department of Computer Science",
    template: "%s | CS Department",
  },
  description:
    "Department of Computer Science — Advancing the frontiers of computing for humanity through world-class research and education.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Department of Computer Science",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans">
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
