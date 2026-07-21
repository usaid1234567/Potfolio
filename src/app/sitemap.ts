import type { MetadataRoute } from "next";
import { SITE_CONFIG, ROUTES } from "@/constants";
import { PROJECTS } from "@/data/projects";
import { BLOG_POSTS } from "@/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    ROUTES.home,
    ROUTES.about,
    ROUTES.services,
    ROUTES.projects,
    ROUTES.experience,
    ROUTES.certificates,
    ROUTES.blog,
    ROUTES.hireMe,
    ROUTES.contact,
  ].map((path) => ({
    url: `${SITE_CONFIG.url}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = PROJECTS.map((project) => ({
    url: `${SITE_CONFIG.url}${ROUTES.projectDetails(project.slug)}`,
    lastModified: new Date(),
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${SITE_CONFIG.url}${ROUTES.blogDetails(post.slug)}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
