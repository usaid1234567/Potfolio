import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES, SITE_CONFIG } from "@/constants";
import { SiteNavbar } from "@/features/navigation";
import { Footer } from "@/features/footer";
import { BlogDetailHero, ArticleBody, RelatedArticles, BlogPrevNext } from "@/features/blog/detail";
import { CTA } from "@/features/cta";
import { StructuredData } from "@/components/seo";
import { getAllPosts, getPostBySlug, getRelatedPosts, getAdjacentPosts } from "@/services/blog.service";

interface BlogDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return buildMetadata({ title: "Blog — M. USAID", path: ROUTES.blog });

  return buildMetadata({
    title: `${post.title} — M. USAID`,
    description: post.excerpt,
    path: ROUTES.blogDetails(post.slug),
  });
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);
  const { previous, next } = getAdjacentPosts(post.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Person", name: SITE_CONFIG.name },
    mainEntityOfPage: `${SITE_CONFIG.url}${ROUTES.blogDetails(post.slug)}`,
  };

  return (
    <>
      <StructuredData data={articleSchema} />
      <SiteNavbar />
      <main>
        <BlogDetailHero post={post} />
        <ArticleBody post={post} />
        <BlogPrevNext previous={previous} next={next} />
        <RelatedArticles posts={related} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
