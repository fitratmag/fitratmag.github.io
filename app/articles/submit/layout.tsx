import type { Metadata } from "next";
export const metadata: Metadata = { title: "ارسال مقاله و همکاری با مجله", description: "اطلاعات و مسیر ارسال مقاله برای بررسی و همکاری محتوایی با مجله فِطرَت.", alternates: { canonical: "/articles/submit/" }, robots: { index: false, follow: true } };
export default function SubmitLayout({children}:{children:React.ReactNode}){return children;}
