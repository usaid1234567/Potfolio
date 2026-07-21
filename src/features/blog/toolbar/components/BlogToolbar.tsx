"use client";

import { X } from "lucide-react";
import { SearchInput, Select } from "@/components/inputs";
import { Text } from "@/components/typography";
import { BUTTON_BASE, BUTTON_VARIANTS, BUTTON_SIZES } from "@/components/buttons/Button/Button.styles";
import { cn } from "@/lib/cn";
import { ALL_BLOG_CATEGORIES, ALL_BLOG_TAGS } from "@/hooks/useBlogFilters";
import type { useBlogFilters, BlogSortOption } from "@/hooks/useBlogFilters";

const SORT_OPTIONS: { label: string; value: BlogSortOption }[] = [
  { label: "Newest first", value: "newest" },
  { label: "Oldest first", value: "oldest" },
  { label: "Quickest read", value: "quickest-read" },
];

export interface BlogToolbarProps {
  filters: ReturnType<typeof useBlogFilters>;
  categories: string[];
  tags: string[];
  resultCount: number;
}

export function BlogToolbar({ filters, categories, tags, resultCount }: BlogToolbarProps) {
  const categoryOptions = [ALL_BLOG_CATEGORIES, ...categories].map((value) => ({ label: value, value }));
  const tagOptions = [ALL_BLOG_TAGS, ...tags].map((value) => ({ label: value, value }));

  return (
    <div className="glass-panel p-4 md:p-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <SearchInput placeholder="Search articles…" value={filters.search} onChange={(e) => filters.setSearch(e.target.value)} aria-label="Search articles" />
        <Select options={categoryOptions} value={filters.category} onChange={(e) => filters.setCategory(e.target.value)} aria-label="Filter by category" />
        <Select options={tagOptions} value={filters.tag} onChange={(e) => filters.setTag(e.target.value)} aria-label="Filter by tag" />
        <Select options={SORT_OPTIONS} value={filters.sort} onChange={(e) => filters.setSort(e.target.value as BlogSortOption)} aria-label="Sort articles" />
      </div>

      <div className="flex items-center justify-between mt-4">
        <Text size="sm" tone="faint">
          {resultCount} {resultCount === 1 ? "article" : "articles"} found
        </Text>
        {filters.hasActiveFilters && (
          <button onClick={filters.resetFilters} className={cn(BUTTON_BASE, BUTTON_VARIANTS.ghost, BUTTON_SIZES.sm)}>
            <X className="h-3.5 w-3.5" aria-hidden="true" /> Clear filters
          </button>
        )}
      </div>
    </div>
  );
}
