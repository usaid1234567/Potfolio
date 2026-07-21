import Link from "next/link";
import { ImageIcon, Clock } from "lucide-react";
import { GlassCard } from "../GlassCard/GlassCard";
import { ProjectTags } from "@/components/portfolio/ProjectTags/ProjectTags";
import { formatDate } from "@/utils/formatDate";
import { ROUTES } from "@/constants";
import type { BlogPost } from "@/types";

export interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <GlassCard className="p-0 overflow-hidden group flex flex-col h-full">
      <Link href={ROUTES.blogDetails(post.slug)} className="flex flex-col h-full">
        <div className="relative aspect-[16/10] bg-base-surface flex items-center justify-center overflow-hidden">
          {post.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.coverImage}
              alt={`${post.title} cover`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-signature opacity-20 transition-transform duration-500 group-hover:scale-105" aria-hidden="true" />
              <ImageIcon className="h-8 w-8 text-mist-faint relative" aria-hidden="true" />
              <span className="visually-hidden">{post.title} cover image placeholder</span>
            </>
          )}
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 text-xs text-mist-faint font-mono">
            <span>{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden="true" /> {post.readingTime} min read
            </span>
          </div>
          <h3 className="text-display text-lg text-mist mt-3">{post.title}</h3>
          <p className="text-body text-sm mt-2 flex-1">{post.excerpt}</p>
          <div className="flex items-center justify-between mt-4">
            <ProjectTags tags={post.tags.slice(0, 2)} />
            <span className="text-xs text-mist-faint">{post.author}</span>
          </div>
        </div>
      </Link>
    </GlassCard>
  );
}
