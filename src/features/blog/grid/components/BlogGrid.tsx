"use client";

import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { Grid } from "@/components/layout";
import { BlogCard } from "@/components/cards";
import { EmptyState } from "@/components/feedback";
import { BUTTON_BASE, BUTTON_VARIANTS, BUTTON_SIZES } from "@/components/buttons/Button/Button.styles";
import { cn } from "@/lib/cn";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { useLoadMore } from "@/hooks/useLoadMore";
import { cardGrid, cardItem } from "@/animations/cards";
import type { BlogPost } from "@/types";

export interface BlogGridProps {
  posts: BlogPost[];
  onResetFilters: () => void;
}

export function BlogGrid({ posts, onResetFilters }: BlogGridProps) {
  const variants = useAnimationVariants({ cardGrid, cardItem });
  const { visibleItems, hasMore, loadMore } = useLoadMore(posts, 6);

  if (posts.length === 0) {
    return (
      <EmptyState
        title="No articles match those filters"
        description="Try a different search term or clear the filters to see everything."
        action={
          <button onClick={onResetFilters} className={cn(BUTTON_BASE, BUTTON_VARIANTS.outline, BUTTON_SIZES.md)}>
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Clear filters
          </button>
        }
      />
    );
  }

  return (
    <div>
      <motion.div initial="hidden" animate="visible" variants={variants.cardGrid}>
        <Grid cols={3} gap="md">
          {visibleItems.map((post) => (
            <motion.div key={post.slug} variants={variants.cardItem} className="h-full">
              <BlogCard post={post} />
            </motion.div>
          ))}
        </Grid>
      </motion.div>

      {hasMore && (
        <div className="flex justify-center mt-10">
          <button onClick={loadMore} className={cn(BUTTON_BASE, BUTTON_VARIANTS.outline, BUTTON_SIZES.md)}>
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
}
