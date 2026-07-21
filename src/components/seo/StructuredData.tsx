export interface StructuredDataProps {
  data: Record<string, unknown>;
}

/** Renders a JSON-LD script tag. Shared by the root layout (Person schema) and blog posts (Article schema). */
export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
