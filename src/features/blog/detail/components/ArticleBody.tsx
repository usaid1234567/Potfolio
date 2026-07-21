import { Section, Container } from "@/components/layout";
import { TableOfContents } from "./TableOfContents";
import { ArticleContent } from "./ArticleContent";
import { ShareButtons } from "./ShareButtons";
import { SITE_CONFIG } from "@/constants";
import type { BlogPost } from "@/types";

export interface ArticleBodyProps {
  post: BlogPost;
}

export function ArticleBody({ post }: ArticleBodyProps) {
  const url = `${SITE_CONFIG.url}/blog/${post.slug}`;

  return (
    <Section id="article-body" className="border-t border-line">
      <Container className="max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={post.tableOfContents} />
            </div>
          </aside>
          <div className="lg:col-span-3 space-y-8">
            <ArticleContent blocks={post.content} />
            <div className="pt-6 border-t border-line">
              <ShareButtons title={post.title} url={url} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
