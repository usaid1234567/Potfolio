"use client";

import { X } from "lucide-react";
import { SearchInput, Select } from "@/components/inputs";
import { Text } from "@/components/typography";
import { BUTTON_BASE, BUTTON_VARIANTS, BUTTON_SIZES } from "@/components/buttons/Button/Button.styles";
import { cn } from "@/lib/cn";
import { ALL_CATEGORIES, ALL_TECHNOLOGIES } from "@/hooks/useProjectFilters";
import type { useProjectFilters, ProjectSortOption } from "@/hooks/useProjectFilters";

const SORT_OPTIONS: { label: string; value: ProjectSortOption }[] = [
  { label: "Newest first", value: "newest" },
  { label: "Oldest first", value: "oldest" },
  { label: "Title A–Z", value: "title" },
];

export interface ProjectsToolbarProps {
  filters: ReturnType<typeof useProjectFilters>;
  categories: string[];
  technologies: string[];
  resultCount: number;
}

export function ProjectsToolbar({ filters, categories, technologies, resultCount }: ProjectsToolbarProps) {
  const categoryOptions = [ALL_CATEGORIES, ...categories].map((value) => ({ label: value, value }));
  const techOptions = [ALL_TECHNOLOGIES, ...technologies].map((value) => ({ label: value, value }));

  return (
    <div className="glass-panel p-4 md:p-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <SearchInput
          placeholder="Search projects…"
          value={filters.search}
          onChange={(e) => filters.setSearch(e.target.value)}
          aria-label="Search projects"
        />
        <Select
          options={categoryOptions}
          value={filters.category}
          onChange={(e) => filters.setCategory(e.target.value)}
          aria-label="Filter by category"
        />
        <Select
          options={techOptions}
          value={filters.technology}
          onChange={(e) => filters.setTechnology(e.target.value)}
          aria-label="Filter by technology"
        />
        <Select
          options={SORT_OPTIONS}
          value={filters.sort}
          onChange={(e) => filters.setSort(e.target.value as ProjectSortOption)}
          aria-label="Sort projects"
        />
      </div>

      <div className="flex items-center justify-between mt-4">
        <Text size="sm" tone="faint">
          {resultCount} {resultCount === 1 ? "project" : "projects"} found
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
