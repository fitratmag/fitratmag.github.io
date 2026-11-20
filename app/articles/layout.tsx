import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مقالات و جستارهای علمی و فلسفی",
  description: "خواندن مقاله‌های علمی، پژوهشی، فلسفی و تحلیلی درباره روان‌شناسی، انسان، معنا و زندگی در مجله فِطرَت.",
  alternates: { canonical: "/articles/" },
  openGraph: { type: "website", title: "مقالات و جستارها | فِطرَت", description: "مقاله‌های علمی، پژوهشی، فلسفی و تحلیلی در مجله فِطرَت.", url: "/articles/", locale: "fa_IR" },
};
export default function ArticlesLayout({ children }: { children: React.ReactNode }) { return children; }
