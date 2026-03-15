const audiences = [
  {
    emoji: '\u{1F6E1}\uFE0F',
    title: 'Security teams',
    text: 'Quick-triage extension requests before they hit your allow list. Export findings for compliance reviews.',
  },
  {
    emoji: '\u{1F50D}',
    title: 'Researchers',
    text: 'Inspect manifest permissions, host access patterns, and metadata signals without downloading the package yourself.',
  },
  {
    emoji: '\u{1F4BB}',
    title: 'Developers',
    text: 'Audit your own extension before publishing. Understand how your permission choices look to reviewers.',
  },
  {
    emoji: '\u{1F9D1}\u200D\u{1F4BC}',
    title: 'IT admins',
    text: 'Evaluate browser extensions employees want to install. Get a shareable report link instead of a verbal "it looks fine."',
  },
  {
    emoji: '\u{1F64B}',
    title: 'Everyday users',
    text: 'Wondering if that ad blocker or coupon finder is safe? Paste the store link and find out in seconds.',
  },
  {
    emoji: '\u{1F527}',
    title: 'Builders',
    text: 'Fork the codebase, rebrand it, add your own rules engine, and launch a commercial product. The MIT license means you can.',
  },
] as const;

export function AudienceSection(): JSX.Element {
  return (
    <section className="audience-section">
      <div className="audience-section__inner">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Who is this for</p>
          <h2>Built for people who actually care what their extensions can do.</h2>
        </div>
        <div className="audience-grid">
          {audiences.map((a) => (
            <article key={a.title} className="audience-card">
              <span className="audience-card__emoji">{a.emoji}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
