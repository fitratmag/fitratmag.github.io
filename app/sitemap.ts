import type { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-static";
const siteUrl = "https://fitratmag.github.io";
const categories = ["مقالات علمی","مقالات فلسفی","مقالات مروری","مقالات پژوهشی","مقاله","مقالات"];

const persianPaths = [
  "", "/about", "/articles", "/children", "/contact", "/islamic-sciences",
  "/life", "/library", "/listen-and-read", "/maaref", "/media",
  "/meaning-sparks", "/nava-va-nayesh", "/notes", "/psychology", "/psychology-news",
  "/shop", "/podcasts", "/quran-notes", "/notices", "/psychology-in-life",
  "/scientific-psychology", "/fitri-psychology", "/psychology-tests",
  "/clinical-stories", "/psychological-disorders", "/chehre-negar"
];
const englishPaths = [
  "", "/about", "/articles", "/children", "/contact", "/islamic-sciences",
  "/life", "/library", "/listen-and-read", "/maaref", "/media",
  "/meaning-sparks", "/nava-va-nayesh", "/notes", "/psychology", "/psychology-news",
  "/shop", "/podcasts", "/quran-notes", "/notices", "/psychology-in-life",
  "/scientific-psychology", "/fitri-psychology", "/psychology-tests",
  "/clinical-stories", "/psychological-disorders", "/chehre-negar"
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paired = new Set(persianPaths);
  const faEntries: MetadataRoute.Sitemap = persianPaths.map((path) => {
    const url = path ? `${siteUrl}${path}/` : `${siteUrl}/`;
    const englishUrl = path ? `${siteUrl}/en${path}/` : `${siteUrl}/en/`;
    return {
      url,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "/articles" || path === "/psychology" ? 0.9 : 0.7,
      alternates: paired.has(path) ? { languages: { fa: url, en: englishUrl } } : undefined,
    };
  });
  const enEntries: MetadataRoute.Sitemap = englishPaths.map((path) => {
    const url = path ? `${siteUrl}/en${path}/` : `${siteUrl}/en/`;
    const persianUrl = path ? `${siteUrl}${path}/` : `${siteUrl}/`;
    return {
      url,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 0.9 : path === "/articles" || path === "/psychology" ? 0.8 : 0.6,
      alternates: { languages: { fa: persianUrl, en: url } },
    };
  });

  // GitHub Pages is a static export: published article URLs are collected at build time.
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (supabaseUrl && anonKey) {
    const client = createClient(supabaseUrl, anonKey);
    const { data } = await client.from("posts")
      .select("slug, updated_at, created_at")
      .eq("status", "published")
      .in("category", categories);
    const articleEntries: MetadataRoute.Sitemap = (data || [])
      .filter((post) => Boolean(post.slug))
      .map((post) => ({
        url: `${siteUrl}/articles/${encodeURIComponent(post.slug)}/`,
        lastModified: post.updated_at || post.created_at || undefined,
        changeFrequency: "monthly",
        priority: 0.8,
      }));
    return [...faEntries, ...enEntries, ...articleEntries];
  }
  return [...faEntries, ...enEntries];
}
