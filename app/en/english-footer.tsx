import Link from "next/link";

export function EnglishFooter(){
  return <footer dir="ltr">
    <div className="footer-top"><Link className="brand footer-brand" href="/en/"><span className="brand-mark">F</span><span className="brand-name">FITRAT<small>INDEPENDENT DIGITAL MAGAZINE</small></span></Link><p>Knowledge · Thought · Life</p></div>
    <div className="footer-links">
      <Link href="/en/articles">Articles</Link><Link href="/en/notes">Notes</Link><Link href="/en/psychology">Psychology</Link><Link href="/en/children">Child Development</Link><Link href="/en/islamic-sciences">Islamic Sciences</Link><Link href="/en/life">Life & Meaning</Link><Link href="/en/library">Library</Link><Link href="/en/media">Culture & Media</Link><Link href="/en/podcasts">Podcasts</Link><Link href="/en/about">About</Link><Link href="/en/contact">Contact</Link>
    </div>
    <div className="footer-bottom"><span>An independent bilingual magazine</span><span>Knowledge · Thought · Life</span><span className="footer-founder">Zahra Rastegar</span></div>
  </footer>;
}
