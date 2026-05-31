import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ethos: Book recommendations built on your literary fingerprint",
  description:
    "Ethos maps your taste at the level of voice, theme, and sensibility, then finds books that actually fit. Join the waitlist.",
  metadataBase: new URL("https://readethos.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ethos: Book recommendations built on your literary fingerprint",
    description:
      "Ethos maps your taste at the level of voice, theme, and sensibility, then finds books that actually fit.",
    url: "https://readethos.app",
    siteName: "Ethos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethos: Book recommendations built on your literary fingerprint",
    description:
      "Ethos maps your taste at the level of voice, theme, and sensibility, then finds books that actually fit.",
  },
  keywords: [
    "book recommendations",
    "literary fingerprint",
    "personalized reading",
    "book discovery app",
    "reading taste",
    "character archetype",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  );
}
