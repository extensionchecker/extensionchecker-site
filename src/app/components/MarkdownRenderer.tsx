import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import type { ComponentPropsWithoutRef } from 'react';

/**
 * Maps GitHub-flavored admonition blockquotes (e.g. > [!IMPORTANT]) into
 * styled callout boxes. Handles NOTE, TIP, IMPORTANT, WARNING, CAUTION.
 */
function transformAdmonitions(markdown: string): string {
  return markdown.replace(
    /> \[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\n((?:> .*\n?)*)/gi,
    (_match, type: string, body: string) => {
      const cleanBody = body.replace(/^> ?/gm, '').trim();
      const tag = type.toUpperCase();
      return `<div class="admonition admonition--${tag.toLowerCase()}" data-admonition="${tag}">\n<p class="admonition__title">${tag}</p>\n<p>${cleanBody}</p>\n</div>\n`;
    },
  );
}

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const processed = transformAdmonitions(content);

  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a: (props: ComponentPropsWithoutRef<'a'>) => {
            const { href, children, ...rest } = props;
            const isExternal = href?.startsWith('http') ?? false;
            return (
              <a
                href={href}
                {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                {...rest}
              >
                {children}
              </a>
            );
          },
          blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => {
            const { children, ...rest } = props;
            return <blockquote {...rest}>{children}</blockquote>;
          },
        }}
      >
        {processed}
      </ReactMarkdown>
    </div>
  );
}
