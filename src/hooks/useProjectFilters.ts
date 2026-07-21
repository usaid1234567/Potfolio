"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types";

export type ProjectSortOption = "newest" | "oldest" | "title";

export const ALL_CATEGORIES = "All Categories";
export const ALL_TECHNOLOGIES = "All Technologies";

export function useProjectFilters(projects: Project[]) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(ALL_CATEGORIES);
  const [technology, setTechnology] = useState(ALL_TECHNOLOGIES);
  const [sort, setSort] = useState<ProjectSortOption>("newest");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = projects.filter((project) => {
      const matchesSearch =
        query.length === 0 ||
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query);
      const matchesCategory = category === ALL_CATEGORIES || project.category === category;
      const matchesTech = technology === ALL_TECHNOLOGIES || project.tags.includes(technology);
      return matchesSearch && matchesCategory && matchesTech;
    });

    return [...result].sort((a, b) => {
      if (sort === "newest") return b.year - a.year;
      if (sort === "oldest") return a.year - b.year;
      return a.title.localeCompare(b.title);
    });
  }, [projects, search, category, technology, sort]);

  const hasActiveFilters = search.length > 0 || category !== ALL_CATEGORIES || technology !== ALL_TECHNOLOGIES;

  function resetFilters() {
    setSearch("");
    setCategory(ALL_CATEGORIES);
    setTechnology(ALL_TECHNOLOGIES);
  }

  return {
    filtered,
    search,
    setSearch,
    category,
    setCategory,
    technology,
    setTechnology,
    sort,
    setSort,
    hasActiveFilters,
    resetFilters,
  };
}
