import { ImageIcon, Clock } from "lucide-react";
import { Section, Container, Stack } from "@/components/layout";
import { Heading, Text } from "@/components/typography";
import { Breadcrumb } from "@/components/navigation";
import { ProjectTags } from "@/components/portfolio";
import { formatDate } from "@/utils/formatDate";
import { ROUTES } from "@/constants";
import type { BlogPost } from "@/types";

export interface BlogDetailHeroProps {
  post: BlogPost;
}

export function BlogDetailHero({ post }: BlogDetailHeroProps) {
  return (
    <Section id="article-hero" className="pt-8 md:pt-16">
      <Container className="max-w-3xl">
        <Stack gap="md">
          <Breadcrumb items={[{ label: "Blog", href: ROUTES.blog }, { label: post.title }]} />

          <div>
            <Heading level={1} size="xl">
              {post.title}
            </Heading>
            <Text size="lg" className="mt-4">
              {post.excerpt}
            </Text>
          </div>

          <div className="flex items-center gap-2 text-sm text-mist-faint font-mono">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {post.readingTime} min read
            </span>
          </div>

          <ProjectTags tags={post.tags} />

          <div className="glass-panel aspect-[21/9] flex items-center justify-center overflow-hidden">
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
        </Stack>
      </Container>
    </Section>
  );
}
