# FITRAT SEO Keyword Research — v1

Date: 2026-11-20
Market: Persian-speaking and English-speaking readers worldwide.
Status: Seed research / hypotheses. Search volume, difficulty, and actual query demand are **not yet validated** with Search Console or a keyword-data provider. Do not treat this list as measured rankings or volume.

## Strategic language architecture

- Keep the current Persian experience as the primary root (/) while it remains the established version.
- Publish English pages under a dedicated /en/ path. Do not place Persian and English copy side-by-side as a substitute for localized pages.
- Only create an English counterpart when there is a genuinely useful, edited English article/page. Do not machine-translate and mass-publish thin duplicates.
- For every true language pair, use reciprocal hreflang annotations (fa and en) and self-referencing canonical URLs. Add x-default only when a real language selector/fallback page exists.
- Never redirect automatically by IP or browser language; provide a visible language switcher.
- Use language-specific page titles, descriptions, headings, navigation, author information, and social metadata. The actual visible main content must be in the declared language.
- Current site is a Next.js static export hosted at https://fitratmag.github.io; no custom domain or bilingual route system was confirmed in this audit. Plan and test routes carefully before changing established URLs.

## Keyword map — Persian (seed topics)

| Cluster | Primary query hypothesis | Supporting topics / long-tail questions | Intent | Recommended destination |
|---|---|---|---|---|
| Core psychology | روان‌شناسی چیست | شاخه‌های روان‌شناسی، ذهن و رفتار، روان‌شناسی علمی | Informational | /psychology/ |
| Clinical psychology | روان‌شناسی بالینی چیست | ارزیابی روان‌شناختی، مصاحبه بالینی، رویکردهای درمانی | Informational | Future clinical psychology pillar |
| Child development | روان‌شناسی رشد کودک | مراحل رشد کودک، رشد شناختی کودک، هیجان‌های کودک | Informational | /children/ + dedicated articles |
| Play-based learning | بازی هدفمند برای کودکان | بازی برای تقویت توجه، بازی حافظه، مهارت‌های نرم کودکان | Practical informational | /children/play-based-growth/ (verify route) |
| Attention / learning | افزایش توجه و تمرکز کودکان | فعالیت تمرکز در کلاس، تقویت حافظه کودک، بازی توجه | Practical informational | Dedicated article / lesson collection |
| ADHD | بیش‌فعالی در کودکان چیست | نشانه‌های نقص توجه، حمایت در خانه و مدرسه، ارزیابی تخصصی | Health informational | /children/adhd-support/ (verify route); expert review required |
| Meaning | معنای زندگی چیست | معنا در زندگی، هدف زندگی، معنا و سلامت روان | Informational / reflective | /meaning-sparks/ and pillar article |
| Psychology + faith | روان‌شناسی و قرآن | نگاه قرآن به انسان، انسان‌شناسی اسلامی، روان‌شناسی فطری | Informational / comparative | /fitri-psychology/ |
| Islamic sciences | انسان‌شناسی اسلامی | فطرت در قرآن، خودشناسی در قرآن، مبانی انسان‌شناسی | Informational | /islamic-sciences/ and /maaref/ |
| Book/media | معرفی کتاب روان‌شناسی | نقد کتاب روان‌شناسی، معرفی کتاب رشد فردی | Commercial investigation / informational | /library/ |
| Disorders | اختلالات روان‌شناختی | معرفی اختلالات، نشانه‌ها، درمان مبتنی بر شواهد | Health informational | /psychological-disorders/; qualified review required |

## Keyword map — English (seed topics)

| Cluster | Primary query hypothesis | Supporting topics / long-tail questions | Intent | Recommended destination |
|---|---|---|---|---|
| Core psychology | what is psychology | branches of psychology, mind and behavior, psychology basics | Informational | /en/psychology/ (planned) |
| Child development | child development psychology | stages of child development, cognitive development in children | Informational | /en/children/ (planned) |
| Play-based learning | play based learning activities for children | games for attention, memory games for kids, social emotional learning activities | Practical informational | English article / children hub |
| Meaning | meaning in life psychology | purpose in life, meaning and wellbeing, psychology of meaning | Informational | English pillar article |
| Psychology and spirituality | psychology and spirituality | human nature, faith and mental wellbeing, Islamic perspectives on psychology | Informational / comparative | English editorial collection |
| Islamic psychology | Islamic psychology | Islamic perspectives on human nature, fitrah in Islam, psychology and Quran | Informational | English pillar page |
| Evidence-based psychology | evidence based psychology | psychological research methods, understanding psychological studies | Informational | English psychology hub |
| Mental health literacy | understanding mental health disorders | mental health education, when to seek professional support | Health informational | Expert-reviewed educational pages |

## Prioritization

1. Build the English route architecture and language-switching policy before publishing English SEO landing pages.
2. Create individual crawlable article URLs for both languages; render article content in the initial HTML.
3. Start with 3-5 high-quality bilingual topic pairs: psychology basics, child development/play-based learning, meaning in life, and psychology/Islamic perspectives.
4. Map one primary intent to each URL. Avoid creating multiple thin pages targeting near-identical phrases.
5. Use Search Console query data to replace these hypotheses with actual impressions, clicks, CTR, and average position after data accumulates.
6. Review health-related content with qualified professionals; cite reliable primary and institutional sources and clearly distinguish education from diagnosis or treatment.

## Measurement plan

- Baseline: Search Console Performance by query/page/country/device and Page Indexing.
- Track separately for Persian root pages and English /en/ pages.
- For each priority URL: impressions, clicks, CTR, average position, indexed status, and conversions (meaningful reading/contact/submission).
- Review after 28 days and 90 days; avoid claiming rankings or search volumes before data exists.

## Technical references

- Google multilingual site guidance: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- Localized versions and hreflang: https://developers.google.com/search/docs/specialty/international/localized-versions
- SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
