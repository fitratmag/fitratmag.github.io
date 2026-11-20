import type { Metadata } from "next";
export const metadata: Metadata = { title: "کتابخانه؛ معرفی و نقد کتاب", description: "معرفی، مرور و نقد کتاب‌های روان‌شناسی، علوم اسلامی، فلسفه و اندیشه در مجله فِطرَت.", alternates: { canonical: "/library/" }, openGraph: { title: "کتابخانه فِطرَت", description: "معرفی و نقد کتاب در حوزه روان‌شناسی و اندیشه.", url: "/library/", type: "website" } };
export default function LibraryLayout({children}:{children:React.ReactNode}){return children;}
