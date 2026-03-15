const faqs = [
  {
    question: 'What does ExtensionChecker do?',
    answer:
      'It gives you a quick, readable summary of extension permissions, host access, and review signals so you can decide whether an extension deserves a closer look.',
  },
  {
    question: 'Does a low score mean an extension is completely safe?',
    answer:
      'No. It means the static signals reviewed here did not indicate higher-risk manifest combinations. It is a triage tool, not a guarantee.',
  },
  {
    question: 'Which browsers are supported?',
    answer:
      'The scanner is designed for common Chromium and Firefox-family extension formats, including Chrome, Edge, Opera, and Firefox listings or identifiers.',
  },
  {
    question: 'Can I self-host or fork it?',
    answer:
      'Yes. The project uses a permissive MIT license because we want people to adapt it, improve it, and even build commercial offerings on top of it.',
  },
  {
    question: 'Why make the project open source?',
    answer:
      'A simple extension checker should be broadly available. Open source makes the baseline inspectable, reproducible, and easier for others to expand.',
  },
] as const;

export function FaqList(): JSX.Element {
  return (
    <div className="faq-list">
      {faqs.map((item) => (
        <details key={item.question} className="faq-item">
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
