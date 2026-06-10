"use client";

import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="leading-relaxed text-muted-foreground mb-5">{children}</p>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-10 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-8 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-medium mt-6 mb-2">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground my-6">{children}</blockquote>
    ),
  },
  types: {
    image: ({ value }: any) => (
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          src={value.asset?.url || ""}
          alt={value.alt || ""}
          width={800}
          height={450}
          className="w-full object-cover"
        />
        {value.caption && (
          <p className="text-sm text-muted-foreground text-center mt-2">{value.caption}</p>
        )}
      </div>
    ),
    code: ({ value }: any) => (
      <pre className="bg-muted rounded-xl p-4 overflow-x-auto my-6 text-sm">
        <code>{value.code}</code>
      </pre>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-primary">{children}</code>
    ),
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:no-underline">
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 space-y-2 my-4 text-muted-foreground">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 space-y-2 my-4 text-muted-foreground">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
};

export function SanityContent({ value }: { value: unknown[] }) {
  return <PortableText value={value} components={components} />;
}
