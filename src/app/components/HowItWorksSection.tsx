const steps = [
  {
    title: 'Paste a store URL or extension ID',
    text: 'Chrome Web Store, Firefox Add-ons, Edge Add-ons, Opera \u2014 or just drop in the raw extension ID. We figure out the rest.',
  },
  {
    title: 'Read the risk summary',
    text: 'Permissions, host access scope, and review signals translated into plain language. No manifest spelunking, no guesswork.',
  },
  {
    title: 'Make an informed decision',
    text: 'Use the results to install with confidence, flag for your team, or walk away. The choice is yours \u2014 we just give you the facts.',
  },
] as const;

export function HowItWorksSection(): JSX.Element {
  return (
    <section className="how-section">
      <div className="how-section__inner">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">How it works</p>
          <h2>Three steps. Zero friction.</h2>
          <p className="section-lede">
            No account. No tracking. No credit card. Just paste a link and get answers.
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <article key={step.title} className="card step-card">
              <span className="step-card__index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <div className="device-showcase">
          <img
            src="/images/mockups/tablet.png"
            alt="ExtensionChecker on a tablet"
            className="device-showcase__tablet"
            loading="lazy"
            width="1920"
            height="1440"
          />
          <img
            src="/images/mockups/desktop.png"
            alt="ExtensionChecker desktop app interface"
            className="device-showcase__desktop"
            loading="lazy"
            width="1920"
            height="1440"
          />
          <img
            src="/images/mockups/iphone.png"
            alt="ExtensionChecker on an iPhone"
            className="device-showcase__phone"
            loading="lazy"
            width="1920"
            height="1440"
          />
        </div>
      </div>
    </section>
  );
}
