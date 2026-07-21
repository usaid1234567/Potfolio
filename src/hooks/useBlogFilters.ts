"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/types";

export type BlogSortOption = "newest" | "oldest" | "quickest-read";

export const ALL_BLOG_CATEGORIES = "All Categories";
export const ALL_BLOG_TAGS = "All Tags";

export function useBlogFilters(posts: BlogPost[]) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(ALL_BLOG_CATEGORIES);
  const [tag, setTag] = useState(ALL_BLOG_TAGS);
  const [sort, setSort] = useState<BlogSortOption>("newest");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = posts.filter((post) => {
      const matchesSearch =
        query.length === 0 ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query);
      const matchesCategory = category === ALL_BLOG_CATEGORIES || post.category === category;
      const matchesTag = tag === ALL_BLOG_TAGS || post.tags.includes(tag);
      return matchesSearch && matchesCategory && matchesTag;
    });

    return [...result].sort((a, b) => {
      if (sort === "newest") return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      if (sort === "oldest") return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
      return a.readingTime - b.readingTime;
    });
  }, [posts, search, category, tag, sort]);

  const hasActiveFilters = search.length > 0 || category !== ALL_BLOG_CATEGORIES || tag !== ALL_BLOG_TAGS;

  function resetFilters() {
    setSearch("");
    setCategory(ALL_BLOG_CATEGORIES);
    setTag(ALL_BLOG_TAGS);
  }

  return { filtered, search, setSearch, category, setCategory, tag, setTag, sort, setSort, hasActiveFilters, resetFilters };
}
