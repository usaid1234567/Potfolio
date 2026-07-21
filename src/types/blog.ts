export interface TocItem {
  id: string;
  label: string;
}

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; id: string; text: string; level: 2 | 3 }
  | { type: "code"; code: string; language?: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  tags: string[];
  category: string;
  readingTime: number;
  featured: boolean;
  author: string;
  content: BlogContentBlock[];
  tableOfContents: TocItem[];
}
