import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://fitratmag.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "فِطرَت | مجلهٔ مستقل دانش، اندیشه و زندگی",
    template: "%s | فِطرَت",
  },
  description:
    "فِطرَت؛ مجله‌ای مستقل برای پیوند روان‌شناسی، علوم اسلامی، رشد کودک، فرهنگ و زندگی. دانش، اندیشه، زندگی.",
  applicationName: "فِطرَت",
  alternates: {
    canonical: "/",
    languages: { "fa": "/", "en": "/en/" },
  },
  keywords: [
    "فطرت", "مجله فطرت", "روان‌شناسی", "روانشناسی علمی",
    "روان‌شناسی فطری", "علوم اسلامی", "معارف اسلامی",
    "فلسفه برای کودکان", "رشد کودک", "مهارت‌های نرم",
    "معنا و زندگی", "دانش، اندیشه، زندگی",
  ],
  authors: [{ name: "تحریریه فِطرَت" }],
  creator: "فِطرَت",
  publisher: "فِطرَت",
  category: "education",
  verification: {
    google: "6nUB-lfQUP21BFVzEO-nKYFaMxZZrqAS8WV_c0pYMbI",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: "فِطرَت",
    title: "فِطرَت | دانش، اندیشه، زندگی",
    description:
      "مجله‌ای مستقل برای اندیشیدن، آموختن و زیستن بهتر؛ با محوریت روان‌شناسی، علوم اسلامی، کودک، فرهنگ و زندگی.",
  },
  twitter: {
    card: "summary",
    title: "فِطرَت | دانش، اندیشه، زندگی",
    description: "مجله‌ای مستقل برای پیوند دانش، اندیشه و زندگی.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "فِطرَت",
    alternateName: "FITRAT",
    url: siteUrl,
    description:
      "مجله‌ای مستقل برای پیوند روان‌شناسی، علوم اسلامی، رشد کودک، فرهنگ و زندگی.",
    inLanguage: ["fa-IR", "en"],
    publisher: {
      "@type": "Organization",
      name: "فِطرَت",
      url: siteUrl,
    },
  };

  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `if (location.pathname === "/en" || location.pathname.startsWith("/en/")) { document.documentElement.lang = "en"; document.documentElement.dir = "ltr"; }` }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
