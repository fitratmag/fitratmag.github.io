import type { Metadata } from "next";
import {PageFrame} from "../../components/site-shell";
import {ManagedEntries} from "../../components/managed-entries";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

const data:Record<string,{title:string;en:string;lead:string;category:string;note?:string}>={
 "philosophy-for-children":{title:"فلسفه برای کودکان",en:"PHILOSOPHY FOR CHILDREN",lead:"فلسفه برای کودکان، تمرینی برای خوب پرسیدن، دقیق شنیدن و اندیشیدن در کنار یکدیگر است؛ نه حفظ کردن پاسخ‌های آماده.",category:"فلسفه برای کودکان"},
 "play-based-growth":{title:"بازی و مهارت‌های زندگی",en:"PLAY-BASED LEARNING",lead:"بازی، فرصتی زنده برای یادگیری است. در این بخش طرح درس‌ها و فعالیت‌های بازی‌محور برای تقویت توجه، تمرکز، حافظه، ارتباط و مهارت‌های نرم گردآوری می‌شوند.",category:"بازی و مهارت‌های زندگی"},
 "adhd-support":{title:"شناخت و همراهی با کودکان بیش‌فعال",en:"UNDERSTANDING ADHD",lead:"آگاهی علمی، پرهیز از برچسب‌زنی و شناخت تفاوت‌های فردی می‌تواند به خانواده و مدرسه کمک کند همراهی مؤثرتری با کودک داشته باشند.",category:"شناخت و همراهی با کودکان بیش‌فعال",note:"این مطالب آموزشی‌اند و جایگزین ارزیابی یا راهنمایی تخصصی برای کودک و خانواده نیستند."},
 "meaning-for-parents":{title:"والدگری آگاهانه و معنا‌محور",en:"MEANINGFUL PARENTING",lead:"نگاهی معنا‌محور به رابطه والد و کودک؛ از شنیدن دنیای درونی فرزند تا ساختن پیوندی امن، محترمانه و رشددهنده.",category:"والدگری آگاهانه و معنا‌محور"}
};
export function generateStaticParams(){return Object.keys(data).map(topic=>({topic}));}
export async function generateMetadata({params}:{params:Promise<{topic:string}>}):Promise<Metadata>{const {topic}=await params;const item=data[topic];if(!item)return {title:"موضوع پیدا نشد",robots:{index:false,follow:true}};const description=item.lead.slice(0,155);return {title:item.title,description,alternates:{canonical:`/children/${topic}/`},openGraph:{title:item.title,description,url:`/children/${topic}/`,type:"website",locale:"fa_IR"}};}
export default async function ChildrenTopicPage({params}:{params:Promise<{topic:string}>}){const {topic}=await params;const item=data[topic]||data["philosophy-for-children"];return <PageFrame eyebrow={item.en} title={item.title} lead={item.lead}><div className="home-independent-links"><Link href="/children"><ArrowRight size={15}/> بازگشت به دنیای کودکان</Link></div>{item.note&&<aside className="test-safety-note"><b>یادآوری مهم</b><p>{item.note}</p></aside>}<ManagedEntries categories={[item.category] } emptyTitle="مطالب این مسیر به‌زودی منتشر می‌شوند."/></PageFrame>}
