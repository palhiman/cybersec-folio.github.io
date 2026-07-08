import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsh | Cyber Security Engineer",
  description:
    "Portfolio of Harsh — Cyber Security Engineer specializing in web security, cloud security, penetration testing, and security automation.",
  keywords: [
    "cybersecurity",
    "security engineer",
    "penetration testing",
    "web security",
    "cloud security",
    "python automation",
  ],
  authors: [{ name: "Harsh" }],
  openGraph: {
    title: "Harsh | Cyber Security Engineer",
    description:
      "Building secure systems, discovering vulnerabilities, and automating security operations.",
    url: "https://harsh.security",
    siteName: "Harsh - Security Engineer Portfolio",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh | Cyber Security Engineer",
    description:
      "Building secure systems, discovering vulnerabilities, and automating security operations.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0B1220" />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
