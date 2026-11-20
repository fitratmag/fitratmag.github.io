import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/site-shell";

const siteUrl = "https://fitratmag.github.io";
export const metadata: Metadata = {
  title: "FITRAT | Knowledge, Thought & Life",
  description: "An independent magazine exploring psychology, human nature, child development, Islamic thought, culture and the meaning of life.",
  alternates: { canonical: "/en/", languages: { "fa": "/", "en": "/en/" } },
  openGraph: { title: "FITRAT | Knowledge, Thought & Life", description: "An independent magazine exploring psychology, human nature, child development, Islamic thought, culture and the meaning of life.", url: siteUrl + "/en/", locale: "en_US", type: "website" },
};

const sections = [
  ["Articles & Essays","Research, thoughtful essays and accessible explanations.","/en/articles"],
  ["Psychology","The mind, behaviour, emotion and human development.","/en/psychology"],
  ["Evidence-Based Psychology","Psychological research, theories and findings grounded in evidence.","/en/scientific-psychology"],
  ["Psychology & Human Nature","A dialogue between psychology, human nature, meaning and Islamic thought.","/en/fitri-psychology"],
  ["Psychology in Everyday Life","Psychology in education, family life, work, art and daily choices.","/en/psychology-in-life"],
  ["Child Development","Child development, learning, play, emotions and life skills.","/en/children"],
  ["Islamic Sciences","Qur'anic studies, Islamic thought and foundations for understanding the human being.","/en/islamic-sciences"],
  ["Meaning & Life","Questions of meaning, purpose, growth and a thoughtful life.","/en/life"],
  ["Psychological Disorders","Evidence-informed educational introductions to psychological disorders.","/en/psychological-disorders"],
  ["Psychology Tests","Psychological assessment tools, their uses and limitations.","/en/psychology-tests"],
  ["Clinical Stories","Educational case discussions with respect for privacy and ethics.","/en/clinical-stories"],
  ["Book Library","Introductions, reviews and reading notes on books and ideas.","/en/library"],
  ["Culture & Media","Film, animation, art and stories through the lens of human experience.","/en/media"],
  ["Podcasts","Conversations and audio stories about mind, meaning and life.","/en/podcasts"],
  ["Qur'anic Reflections","Reflections on Qur'anic verses and their relevance to life.","/en/quran-notes"],
  ["Notes & Reflections","Short reflections and editorial notes.","/en/notes"],
  ["About FITRAT","The magazine, its editorial vision and its founder.","/en/about"],
  ["Contact","Contact the editorial team and explore collaboration.","/en/contact"]
];

export default function EnglishHome() {
  return <main className="magazine-home" lang="en" dir="ltr">
    <div className="announcement"><span>KNOWLEDGE · THOUGHT · LIFE</span><span className="announcement-en">AN INDEPENDENT MAGAZINE</span></div>
    <header className="site-header" dir="ltr">
      <Link className="brand" href="/en/"><span className="brand-mark">F</span><span className="brand-name">FITRAT<small>INDEPENDENT DIGITAL MAGAZINE</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/en/articles">Articles</Link><Link href="/en/psychology">Psychology</Link><Link href="/en/children">Children</Link><Link href="/en/life">Life & Meaning</Link><Link href="/en/about">About</Link><Link href="/en/contact">Contact</Link>
      </nav>
      <Link className="language" href="/" hrefLang="fa" lang="fa">FA</Link>
    </header>
    <section className="inner-hero" dir="ltr">
      <span className="eyebrow">KNOWLEDGE · THOUGHT · LIFE</span>
      <h1>Explore the human experience.</h1>
      <p>FITRAT is an independent magazine for curious minds — bringing psychology, child development, human nature, Islamic thought and everyday life into thoughtful conversation.</p>
      <p><Link className="cover-button" href="/en/articles">Explore the magazine →</Link></p>
    </section>
    <section className="section-block" dir="ltr">
      <div className="section-heading"><div><span className="section-kicker">EXPLORE FITRAT</span><h2>Discover our <em>editorial worlds.</em></h2></div><p>Each section opens a different path for learning and reflection.</p></div>
      <div className="department-grid">{sections.map(([title,desc,href],i)=><Link className="department-card" href={href} key={href}><div className="department-info"><span className="department-en">{String(i+1).padStart(2,"0")} · FITRAT</span><h3>{title}</h3><p>{desc}</p><span className="department-arrow">↗</span></div></Link>)}</div>
    </section>
    <section className="editorial-feature" dir="ltr"><div><span className="section-kicker">OUR EDITORIAL APPROACH</span><h2>Knowledge matters when it finds its way into <em>life.</em></h2></div><p>We bring scientific curiosity into conversation with questions of meaning, culture and human flourishing. Our aim is to make careful thinking accessible without losing depth, context or respect for evidence.</p></section>
    <SiteFooter />
  </main>;
}
