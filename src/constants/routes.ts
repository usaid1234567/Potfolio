export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  projects: "/projects",
  projectDetails: (slug: string) => `/projects/${slug}`,
  experience: "/experience",
  certificates: "/certificates",
  blog: "/blog",
  blogDetails: (slug: string) => `/blog/${slug}`,
  hireMe: "/hire-me",
  contact: "/contact",
} as const;
