import type { Metadata } from "next";
export const metadata: Metadata = { title: "جرقه‌های معنا؛ یادداشت‌هایی برای زندگی", description: "یادداشت‌ها و تأمل‌های کوتاه درباره رشد، امید، یادگیری، انتخاب و معنای زندگی.", alternates: { canonical: "/meaning-sparks/" }, openGraph: { title: "جرقه‌های معنا | فِطرَت", description: "مکث‌هایی کوتاه برای دیدن دوباره زندگی.", url: "/meaning-sparks/", type: "website" } };
export default function MeaningLayout({children}:{children:React.ReactNode}){return children;}
