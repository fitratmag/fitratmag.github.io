import type { Metadata } from "next";
import { CollectionPage } from "../components/collection-page";

const sectionSeo: Record<string, { title: string; description: string }> = {
  podcasts: { title: "پادکست‌ها", description: "گفت‌وگوها و روایت‌های شنیداری درباره ذهن، معنا، دانش و زندگی." },
  "quran-notes": { title: "آیه‌نگار؛ درنگی در آیات قرآن", description: "تأمل در آیات قرآن کریم همراه با ترجمه، معنا و پیوند با زندگی." },
  notices: { title: "اطلاعیه‌ها و رویدادهای فِطرَت", description: "خبرها، فراخوان‌ها و اطلاعیه‌های تحریریه مجله فِطرَت." },
  "psychology-in-life": { title: "روان‌شناسی در میدان زندگی", description: "کاربرد روان‌شناسی در تجربه‌های واقعی، آموزش، خانواده، هنر و زندگی روزمره." },
  "scientific-psychology": { title: "روان‌شناسی علمی", description: "نظریه‌ها، پژوهش‌ها و یافته‌های روان‌شناسی با ارجاع به شواهد و منابع معتبر." },
  "fitri-psychology": { title: "روان‌شناسی فطری", description: "گفت‌وگوی روان‌شناسی با شناخت فطرت انسان، معنا، اخلاق و معارف اسلامی." },
  "psychology-tests": { title: "آزمون‌های روان‌شناسی", description: "آشنایی با ابزارهای سنجش روان‌شناختی، کاربردها و محدودیت‌های آن‌ها." },
  children: { title: "دنیای کودکان", description: "مطالبی درباره رشد کودک، یادگیری، بازی، هیجان‌ها و مهارت‌های زندگی." },
  "clinical-stories": { title: "روایت بالین و مطالعه موردی", description: "مطالعه آموزشی موردهای بالینی و فرمول‌بندی روان‌شناختی با رعایت محرمانگی." },
  "psychological-disorders": { title: "اطلس روان؛ شناخت اختلالات روان‌شناختی", description: "آشنایی علمی با نشانه‌ها، معیارهای تشخیصی و رویکردهای درمانی اختلالات روان‌شناختی." },
  "chehre-negar": { title: "چهره‌نگار؛ زندگی‌نامه و گفت‌وگو", description: "روایت زندگی، مسیر حرفه‌ای و گفت‌وگو با افراد اثرگذار." },
  "islamic-sciences": { title: "علوم اسلامی", description: "مطالعه قرآن، اندیشه اسلامی و مبانی معرفتی برای فهم انسان و جهان." },
  maaref: { title: "معارف اسلامی", description: "مطالبی درباره معارف دینی، اخلاق، انسان‌شناسی و معنای زندگی." },
  life: { title: "زندگی، فرهنگ و مهارت‌های زندگی", description: "پیوند دانش با تجربه‌های روزمره، رشد، فرهنگ، هنر و مهارت‌های زندگی." },
  notes: { title: "یادداشت‌ها و تأملات", description: "نوشته‌های کوتاه، تأملات و یادداشت‌های تحریریه فِطرَت." },
  "psychology-news": { title: "آخرین خبرهای روان‌شناسی", description: "خبرها، پژوهش‌های تازه و رویدادهای علمی حوزه روان‌شناسی." },
};

export function generateStaticParams() {
  return Object.keys(sectionSeo).map((section) => ({ section }));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  const seo = sectionSeo[section];
  if (!seo) return {};
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: `/${section}/` },
    openGraph: { title: seo.title, description: seo.description, url: `/${section}/`, type: "website" },
  };
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  return <CollectionPage slug={section} />;
}
