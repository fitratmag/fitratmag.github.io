import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "دنیای کودکان؛ رشد، بازی و یادگیری",
  description: "مطالبی درباره رشد کودک، فلسفه برای کودکان، بازی‌های هدفمند، مهارت‌های نرم و همراهی آگاهانه با والدین.",
  alternates: { canonical: "/children/" },
};

import Link from "next/link";
import {PageFrame} from "../components/site-shell";
import {ArrowLeft,Brain,Lightbulb,Gamepad2,HeartHandshake} from "lucide-react";

const topics=[
 {href:"/children/philosophy-for-children",number:"01",title:"فلسفه برای کودکان",en:"PHILOSOPHY FOR CHILDREN",desc:"تقویت پرسشگری، گفت‌وگو و اندیشیدن؛ کمک به کودکان برای کشف پرسش‌های بزرگ با زبان خودشان.",icon:Lightbulb},
 {href:"/children/play-based-growth",number:"02",title:"بازی و مهارت‌های زندگی",en:"PLAY-BASED LEARNING",desc:"طرح درس‌ها و بازی‌های هدفمند برای پرورش توجه، تمرکز، حافظه، ارتباط مؤثر و دیگر مهارت‌های نرم؛ با نگاهی به رشد و رسش کودک.",icon:Gamepad2},
 {href:"/children/adhd-support",number:"03",title:"شناخت و همراهی با کودکان بیش‌فعال",en:"UNDERSTANDING ADHD",desc:"آشنایی علمی با نیازهای کودکان دارای اختلال نقص توجه/بیش‌فعالی و راه‌هایی برای حمایت بهتر در خانه و مدرسه.",icon:Brain},
 {href:"/children/meaning-for-parents",number:"04",title:"والدگری آگاهانه و معنابخش",en:"MEANINGFUL PARENTING",desc:"نگاهی معنا‌محور به رابطه والد و کودک؛ برای ساختن پیوندی امن، گفت‌وگویی عمیق‌تر و فضایی برای رشد.",icon:HeartHandshake}
];
export default function ChildrenPage(){
 return <PageFrame eyebrow="CHILDREN · GROWTH · LEARNING" title="دنیای کودکان" lead="کودکی، جهانِ پرسش‌ها و امکان‌های بی‌شمار است؛ اینجا از رشد، یادگیری، بازی و رابطه‌هایی می‌نویسیم که به شکوفایی کودک کمک می‌کنند.">
 <section className="collection-hero"><div><span className="collection-kicker">A WORLD OF CURIOSITY</span><h2>برای فهمیدن دنیای کودک،<br/><em>از دریچه‌ای تازه نگاه کنیم.</em></h2><p>چهار مسیر برای شناخت بهتر کودک و همراهی آگاهانه‌تر با او.</p></div><div className="collection-art"><img src="/zahra-rastegar-magazine/sections/children.svg" alt="دنیای کودکان"/><span><HeartHandshake size={28}/></span></div></section>
 <section className="section-block"><div className="section-heading"><div><span className="section-kicker">EXPLORE CHILDHOOD <i/></span><h2>مسیرهای <em>دنیای کودکان</em></h2></div><p>هر مسیر، پنجره‌ای برای آموختن و همراهی است.</p></div>
 <div className="department-grid">{topics.map(item=>{const Icon=item.icon;return <Link href={item.href} className="department-card sage" key={item.href}><div className="department-photo"><div className="department-placeholder"><Icon size={34}/></div><span className="department-number">{item.number}</span></div><div className="department-copy"><span className="department-en">{item.en}</span><h3>{item.title}</h3><p>{item.desc}</p><span className="department-enter">ورود به این بخش <ArrowLeft size={16}/></span></div></Link>})}</div></section>
 </PageFrame>;
}