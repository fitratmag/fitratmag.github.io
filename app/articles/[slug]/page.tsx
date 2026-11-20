import type { Metadata } from "next";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = false;
const siteUrl = "https://fitratmag.github.io";
const categories = ["مقالات علمی","مقالات فلسفی","مقالات مروری","مقالات پژوهشی","مقاله","مقالات"];
type Post = {
  id: string; title: string; slug: string; category: string; excerpt: string;
  content: string; cover_image: string | null; pdf_url: string | null; author: string | null;
  source_url: string | null; created_at: string; updated_at: string | null;
};
function getClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return url && key ? createClient(url, key) : null;
}
async function getPost(slug: string): Promise<Post | null> {
  const client = getClient();
  if (!client) return null;
  const { data, error } = await client.from("posts")
    .select("id,title,slug,category,excerpt,content,cover_image,pdf_url,author,source_url,created_at,updated_at")
    .eq("slug", slug).eq("status", "published").in("category", categories).maybeSingle();
  if (error) throw new Error(`Unable to load published article: ${error.message}`);
  return data as Post | null;
}
export async function generateStaticParams() {
  const client = getClient();
  if (!client) throw new Error("Supabase public environment variables are required to export article pages.");
  const { data, error } = await client.from("posts").select("slug")
    .eq("status", "published").in("category", categories);
  if (error) throw new Error(`Unable to list published articles for static export: ${error.message}`);
  return (data || []).filter((post) => Boolean(post.slug)).map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "مقاله پیدا نشد" };
  const description = (post.excerpt || post.content || post.title).replace(/\s+/g, " ").slice(0, 155);
  const url = `${siteUrl}/articles/${encodeURIComponent(post.slug)}/`;
  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article", locale: "fa_IR", url, title: post.title, description,
      publishedTime: post.created_at,
      modifiedTime: post.updated_at || undefined,
      authors: post.author ? [post.author] : undefined,
      images: post.cover_image ? [{ url: post.cover_image, alt: post.title }] : undefined,
    },
    twitter: { card: post.cover_image ? "summary_large_image" : "summary", title: post.title, description, images: post.cover_image ? [post.cover_image] : undefined },
  };
}
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const articleUrl = `${siteUrl}/articles/${encodeURIComponent(post.slug)}/`;
  const structuredData = {
    "@context": "https://schema.org", "@type": "Article",
    headline: post.title, description: post.excerpt || post.title,
    datePublished: post.created_at, dateModified: post.updated_at || post.created_at,
    inLanguage: "fa-IR", mainEntityOfPage: articleUrl,
    author: { "@type": "Person", name: post.author || "تحریریه فِطرَت" },
    publisher: { "@type": "Organization", name: "فِطرَت", url: siteUrl },
    image: post.cover_image ? [post.cover_image] : undefined,
  };
  return <main className="article-detail-page" dir="rtl">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <header className="article-detail-top"><Link href="/articles/">فِطرَت · مقالات</Link><span>THE EDITORIAL JOURNAL</span></header>
    <article className="article-detail">
      <Link className="article-detail-back" href="/articles/">بازگشت به کتابخانه مقالات</Link>
      <span className="article-detail-category">{post.category}</span>
      <h1>{post.title}</h1>
      {post.excerpt && <p className="article-detail-excerpt">{post.excerpt}</p>}
      {post.cover_image && <img className="article-detail-cover" src={post.cover_image} alt={post.title} />}
      <div className="article-detail-meta">{post.author && <span>نویسنده: {post.author}</span>}<time dateTime={post.created_at}>{new Date(post.created_at).toLocaleDateString("fa-IR")}</time></div>
      <div className="article-detail-content">{(post.content || "").split(/\r?\n/).map((line, index) => line.trim() ? <p key={index}>{line}</p> : <div key={index} className="article-detail-spacer" />)}</div>
      {post.source_url && <p className="article-detail-source">منبع: <a href={post.source_url} target="_blank" rel="noreferrer">مشاهده منبع مقاله</a></p>}
      {post.pdf_url && <div className="article-pdf-actions"><a href={post.pdf_url} target="_blank" rel="noreferrer">مشاهده و باز کردن فایل PDF</a><a href={`${post.pdf_url}?download=${encodeURIComponent(post.title+".pdf")}`}>دانلود مقاله</a></div>}
      <footer className="article-detail-footer">فِطرَت | دانش، اندیشه، زندگی</footer>
    </article>
  </main>;
}
