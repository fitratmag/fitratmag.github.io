import type { Metadata } from "next";
export const metadata: Metadata = { title: "فرهنگ و رسانه؛ تحلیل فیلم و انیمیشن", description: "خواندن فیلم‌ها، انیمیشن‌ها و روایت‌های تصویری از دریچه روان‌شناسی، هیجان، رابطه و تجربه انسانی.", alternates: { canonical: "/media/" }, openGraph: { title: "فرهنگ و رسانه | فِطرَت", description: "فیلم، انیمیشن و روایت از دریچه تجربه انسانی.", url: "/media/", type: "website" } };
export default function MediaLayout({children}:{children:React.ReactNode}){return children;}
