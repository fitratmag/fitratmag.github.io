import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مقالات و جستارهای علمی و تحلیلی",
  description: "مقاله‌های علمی، پژوهشی، فلسفی و تحلیلی درباره روان‌شناسی، علوم انسانی و زندگی در مجله فِطرَت.",
  alternates: { canonical: "/articles/" },
};

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
