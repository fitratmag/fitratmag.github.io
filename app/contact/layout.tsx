import type { Metadata } from "next";
export const metadata: Metadata = { title: "ارتباط با تحریریه فِطرَت", description: "راه‌های ارتباط با مجله فِطرَت برای پیشنهاد موضوع، همکاری علمی، ارسال یادداشت و پرسش‌های مخاطبان.", alternates: { canonical: "/contact/" }, openGraph: { title: "ارتباط با فِطرَت", description: "راه‌های ارتباط با تحریریه مجله فِطرَت.", url: "/contact/", type: "website" } };
export default function ContactLayout({children}:{children:React.ReactNode}){return children;}
