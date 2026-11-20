import type { Metadata } from "next";
export const metadata: Metadata = { title: "بشنو و بخوان؛ تجربه شنیداری و مطالعه", description: "محتواهای شنیداری همراه با متن برای مکث، تمرکز و مطالعه عمیق‌تر در مجله فِطرَت.", alternates: { canonical: "/listen-and-read/" }, openGraph: { title: "بشنو و بخوان | فِطرَت", description: "شنیدن و خواندن در کنار هم.", url: "/listen-and-read/", type: "website" } };
export default function ListenLayout({children}:{children:React.ReactNode}){return children;}
