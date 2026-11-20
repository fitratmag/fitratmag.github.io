import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://fitratmag.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/articles",
    "/children",
    "/contact",
    "/islamic-sciences",
    "/life",
    "/library",
    "/listen-and-read",
    "/maaref",
    "/media",
    "/meaning-sparks",
    "/nava-va-nayesh",
    "/notes",
    "/psychology",
    "/psychology-news",
    "/shop",
    "/podcasts",
    "/quran-notes",
    "/notices",
    "/psychology-in-life",
    "/scientific-psychology",
    "/fitri-psychology",
    "/psychology-tests",
    "/clinical-stories",
    "/psychological-disorders",
    "/chehre-negar",
  ];

  return paths.map((path) => ({
    url: path ? `${siteUrl}${path}/` : `${siteUrl}/`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/articles" || path === "/psychology" ? 0.9 : 0.7,
  }));
}
