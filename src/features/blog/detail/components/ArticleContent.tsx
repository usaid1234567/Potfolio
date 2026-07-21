import { ImageIcon } from "lucide-react";
import { Heading, Text, Code } from "@/components/typography";
import type { BlogContentBlock } from "@/types";

export interface ArticleContentProps {
  blocks: BlogContentBlock[];
}

export function ArticleContent({ blocks }: ArticleContentProps) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <Text key={index} size="lg">
              {block.text}
            </Text>
          );
        }
        if (block.type === "heading") {
          return (
            <Heading key={index} id={block.id} level={block.level} size="sm" className="pt-4 scroll-mt-24">
              {block.text}
            </Heading>
          );
        }
        if (block.type === "code") {
          return (
            <Code key={index} block>
              {block.code}
            </Code>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote key={index} className="border-l-2 border-violet pl-5 py-1">
              <Text size="lg" tone="default" className="italic">
                &ldquo;{block.text}&rdquo;
              </Text>
              {block.attribution && <Text size="sm" tone="faint" className="mt-2">— {block.attribution}</Text>}
            </blockquote>
          );
        }
        if (block.type === "image") {
          return (
            <figure key={index}>
              <div className="glass-panel aspect-[16/9] flex items-center justify-center">
                <ImageIcon className="h-8 w-8 text-mist-faint" aria-hidden="true" />
                <span className="visually-hidden">{block.alt}</span>
              </div>
              {block.caption && <figcaption className="text-xs text-mist-faint mt-2 text-center">{block.caption}</figcaption>}
            </figure>
          );
        }
        return null;
      })}
    </div>
  );
}
