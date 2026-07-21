import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/constants";
import { SiteNavbar } from "@/features/navigation";
import { Footer } from "@/features/footer";
import { Section, Container } from "@/components/layout";
import { EmptyState } from "@/components/feedback";
import { BlogHero } from "@/features/blog/hero";
import { FeaturedArticle } from "@/features/blog/featured";
import { BlogBrowser } from "@/features/blog/browser";
import { NewsletterCTA } from "@/features/blog/newsletter";
import { CTA } from "@/features/cta";
import { getAllPosts, getFeaturedPosts, getBlogCategories, getBlogTags } from "@/services/blog.service";

export const metadata: Metadata = buildMetadata({
  title: "Blog — M. USAID",
  description: "Notes on frontend development, learning, and building with modern web tools.",
  path: ROUTES.blog,
});

export default async function BlogPage() {
  const [allPosts, featuredPosts] = await Promise.all([getAllPosts(), getFeaturedPosts()]);
  const categories = getBlogCategories();
  const tags = getBlogTags();
  const featured = featuredPosts[0];

  if (allPosts.length === 0) {
    return (
      <>
        <SiteNavbar />
        <main>
          <BlogHero />
          <Section id="blog-empty" className="border-t border-line">
            <Container className="max-w-xl">
              <EmptyState title="No articles yet" description="Writing is in progress — check back soon for the first post." />
            </Container>
          </Section>
          <CTA />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SiteNavbar />
      <main>
        <BlogHero />
        {featured && <FeaturedArticle post={featured} />}
        <BlogBrowser posts={allPosts} categories={categories} tags={tags} />
        <NewsletterCTA />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
