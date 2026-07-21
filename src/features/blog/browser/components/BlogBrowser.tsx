"use client";

import { Section, Container } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { useBlogFilters } from "@/hooks/useBlogFilters";
import { BlogToolbar } from "@/features/blog/toolbar";
import { BlogGrid } from "@/features/blog/grid";
import type { BlogPost } from "@/types";

export interface BlogBrowserProps {
  posts: BlogPost[];
  categories: string[];
  tags: string[];
}

export function BlogBrowser({ posts, categories, tags }: BlogBrowserProps) {
  const filters = useBlogFilters(posts);

  return (
    <Section id="latest-articles" className="border-t border-line">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <Caption eyebrow>Latest Articles</Caption>
          <Heading level={2} size="lg" className="mt-3">
            Browse everything.
          </Heading>
          <Text size="lg" className="mt-3">
            Search, filter by category or tag, and sort however's useful.
          </Text>
        </div>

        <div className="mt-10">
          <BlogToolbar filters={filters} categories={categories} tags={tags} resultCount={filters.filtered.length} />
          <div className="mt-8">
            <BlogGrid posts={filters.filtered} onResetFilters={filters.resetFilters} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
