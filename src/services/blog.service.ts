import { BLOG_POSTS } from "@/data/blogPosts";
import type { BlogPost } from "@/types";

export async function getAllPosts(): Promise<BlogPost[]> {
  return BLOG_POSTS;
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  return BLOG_POSTS.filter((post) => post.featured);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getBlogCategories(): string[] {
  return Array.from(new Set(BLOG_POSTS.map((post) => post.category))).sort();
}

export function getBlogTags(): string[] {
  return Array.from(new Set(BLOG_POSTS.flatMap((post) => post.tags))).sort();
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = BLOG_POSTS.find((post) => post.slug === slug);
  if (!current) return [];

  return BLOG_POSTS.filter((post) => post.slug !== slug)
    .map((post) => ({
      post,
      score:
        (post.category === current.category ? 2 : 0) +
        post.tags.filter((tag) => current.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.post);
}

export function getAdjacentPosts(
  slug: string
): { previous: BlogPost | null; next: BlogPost | null } {
  const index = BLOG_POSTS.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return {
      previous: null,
      next: null,
    };
  }

  return {
    previous: BLOG_POSTS[index - 1] ?? null,
    next: BLOG_POSTS[index + 1] ?? null,
  };
}