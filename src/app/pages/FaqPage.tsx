import { Footer } from '../components/Footer';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import faqMarkdown from '../../../docs/faq.md';

export function FaqPage() {
  return (
    <>
      <section className="content-section content-section--prose">
        <MarkdownRenderer content={faqMarkdown} />
      </section>
      <Footer year={2026} />
    </>
  );
}
