import type { Metadata } from "next";
export const metadata: Metadata = { title: "فروشگاه فِطرَت؛ کتاب، پلنر و محصولات آموزشی", description: "معرفی کتاب‌ها، پلنرها، نوشت‌افزار، فایل‌های دیجیتال و محصولات آموزشی و فرهنگی فِطرَت.", alternates: { canonical: "/shop/" }, openGraph: { title: "فروشگاه فِطرَت", description: "کتاب، پلنر و ابزارهای یادگیری.", url: "/shop/", type: "website" } };
export default function ShopLayout({children}:{children:React.ReactNode}){return children;}
