import { Footer } from '../components/Footer';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import termsMarkdown from '../../../docs/terms.md';

export function TermsPage() {
  return (
    <>
      <section className="content-section content-section--prose">
        <MarkdownRenderer content={termsMarkdown} />
      </section>
      <Footer year={2026} />
    </>
  );
}
