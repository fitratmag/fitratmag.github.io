import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://fitratmag.github.io";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const paired = new Set(["", ...persianPaths.filter((p) => p !== "")]);
  const faEntries = persianPaths.map((path) => {
    const url = path ? `${siteUrl}${path}/` : `${siteUrl}/`;
    const englishUrl = path ? `${siteUrl}/en${path}/` : `${siteUrl}/en/`;
    return {
      url,
      changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
      priority: path === "" ? 1 : path === "/articles" || path === "/psychology" ? 0.9 : 0.7,
      alternates: paired.has(path) ? { languages: { fa: url, en: englishUrl } } : undefined,
    };
  });
  const enEntries = englishPaths.map((path) => {
    const url = path ? `${siteUrl}/en${path}/` : `${siteUrl}/en/`;
    const persianUrl = path ? `${siteUrl}${path}/` : `${siteUrl}/`;
    return {
      url,
      changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
      priority: path === "" ? 0.9 : path === "/articles" || path === "/psychology" ? 0.8 : 0.6,
      alternates: { languages: { fa: persianUrl, en: url } },
    };
  });
  return [...faEntries, ...enEntries];
}
