import { Footer } from '../components/Footer';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import privacyMarkdown from '../../../docs/privacy.md';

export function PrivacyPage() {
  return (
    <>
      <section className="content-section content-section--prose">
        <MarkdownRenderer content={privacyMarkdown} />
      </section>
      <Footer year={2026} />
    </>
  );
}
