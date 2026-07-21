import { Section, Container, Grid } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { BlogCard } from "@/components/cards";
import type { BlogPost } from "@/types";

export interface RelatedArticlesProps {
  posts: BlogPost[];
}

export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (posts.length === 0) return null;

  return (
    <Section id="related-articles" className="border-t border-line">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <Caption eyebrow>Related Reading</Caption>
          <Heading level={2} size="lg" className="mt-3">
            More on this topic.
          </Heading>
          <Text size="lg" className="mt-3">
            Similar category or overlapping tags.
          </Text>
        </div>

        <Grid cols={3} gap="md" className="mt-12">
          {posts.map((post) => (
            <div key={post.slug} className="h-full">
              <BlogCard post={post} />
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
