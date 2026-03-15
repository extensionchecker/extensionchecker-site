import { AudienceSection } from '../components/AudienceSection';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { OpenSourceSection } from '../components/OpenSourceSection';
import { ProblemSection } from '../components/ProblemSection';
import { TrustStrip } from '../components/TrustStrip';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <HowItWorksSection />
      <AudienceSection />
      <OpenSourceSection />
      <CtaBanner />
      <Footer year={2026} />
    </>
  );
}
