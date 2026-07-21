import Link from "next/link";
import { ImageIcon, Clock, ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { GlassCard } from "@/components/cards";
import { ProjectTags } from "@/components/portfolio";
import { formatDate } from "@/utils/formatDate";
import { ROUTES } from "@/constants";
import type { BlogPost } from "@/types";

export interface FeaturedArticleProps {
  post: BlogPost;
}

export function FeaturedArticle({ post }: FeaturedArticleProps) {
  return (
    <Section id="featured-article" className="border-t border-line" glow>
      <Container>
        <Caption eyebrow>Featured Article</Caption>
        <GlassCard className="p-0 overflow-hidden mt-6">
          <Link href={ROUTES.blogDetails(post.slug)} className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-[16/10] md:aspect-auto bg-base-surface flex items-center justify-center overflow-hidden">
              {post.coverImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={post.coverImage} alt={`${post.title} cover`} className="w-full h-full object-cover" />
              ) : (
                <>
                  <ImageIcon className="h-10 w-10 text-mist-faint" aria-hidden="true" />
                  <span className="visually-hidden">{post.title} cover image placeholder</span>
                </>
              )}
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs text-mist-faint font-mono">
                <span>{post.category}</span>
                <span aria-hidden="true">·</span>
                <span>{formatDate(post.publishedAt)}</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" aria-hidden="true" /> {post.readingTime} min read
                </span>
              </div>
              <Heading level={2} size="md" className="mt-3">
                {post.title}
              </Heading>
              <Text size="lg" className="mt-3">
                {post.excerpt}
              </Text>
              <ProjectTags tags={post.tags} className="mt-4" />
              <span className="inline-flex items-center gap-2 text-sm text-violet-soft mt-5">
                Read the article <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </GlassCard>
      </Container>
    </Section>
  );
}
