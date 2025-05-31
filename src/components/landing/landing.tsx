import { Hero } from "./hero";
import { CoinsMarquee } from "./coins-marquee";
import { JoinRevolution } from "./join-revolution";
import { Metrics } from "./metrics";
import { FAQs } from "./faqs";
import { GetStarted } from "./get-started";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <CoinsMarquee />
      <JoinRevolution />
      <Metrics />
      <FAQs />
      <GetStarted />
    </main>
  );
};

export { LandingPage };
