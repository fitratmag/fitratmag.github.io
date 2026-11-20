-- FITRAT: per-article SEO metadata
-- Run this once in Supabase Dashboard > SQL Editor before deploying code
-- that reads/writes these fields. Existing article data is preserved.

alter table public.posts
  add column if not exists seo_title text,
  add column if not exists meta_description text,
  add column if not exists focus_keyword text,
  add column if not exists related_keywords text[] not null default '{}';

comment on column public.posts.seo_title is 'Optional search-result title; falls back to article title.';
comment on column public.posts.meta_description is 'Optional search-result description; falls back to excerpt/content.';
comment on column public.posts.focus_keyword is 'Primary search intent phrase for this article.';
comment on column public.posts.related_keywords is 'Supporting related search phrases for editorial planning.';
