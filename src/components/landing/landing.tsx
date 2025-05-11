import { Hero } from "./hero";
import { CoinsMarquee } from "./coins-marquee";
import { JoinRevolution } from "./join-revolution";
import { Metrics } from "./metrics";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <CoinsMarquee />
      <JoinRevolution />
      <Metrics />
    </main>
  );
};

export { LandingPage };
