import { ArrowRight } from "lucide-react";
import { whyPawket } from "@/lib/constants/why-pawket";

const WhyPawket = () => {
  return (
    <section className="scroll-mt-14 p-5 lg:p-10" id="why-pawket">
      <div className="container mx-auto xl:max-w-5xl">
        <span className="text-sm text-white/70">Why Pawket?</span>

        <section className="flex flex-col items-start justify-center gap-5 sm:flex-row sm:gap-20">
          <div className="sm:w-1/2">
            <h2 className="text-3xl font-semibold sm:text-4xl sm:font-medium">
              Redefining Wealth: Merging Tradition with Technology
            </h2>
          </div>

          <div className="flex flex-col gap-5 sm:w-1/2">
            <p className="text-sm text-white/80 sm:text-base">
              Pawket bridges classic asset management with blockchain
              innovation, unlocking new opportunities for growth and long-term
              value
            </p>

            <button
              className="flex w-fit cursor-pointer items-center gap-2 rounded-md border bg-cyan-300 px-3 py-2 text-sm font-medium text-black sm:hover:bg-neutral-800/30 sm:hover:text-cyan-300"
              type="button"
            >
              Join Pawket
              <ArrowRight size={15} />
            </button>
          </div>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyPawket.map((item) => {
            return (
              <article
                key={item.id}
                className={`relative flex rounded-lg border border-white/20 p-5 ${item.id === 2 ? "row-span-2 hidden flex-col items-center justify-center gap-6 lg:flex" : "flex-row items-start gap-3"}`}
              >
                <item.icon
                  className="box-content rounded-lg bg-black px-2 py-1 invert"
                  size={30}
                />

                <div className={`${item.id === 2 && "text-center"}`}>
                  <h3 className="mb-2 text-lg leading-6 font-semibold text-cyan-200">
                    {item.title}
                  </h3>

                  <p className="text- text-sm text-white">{item.desc}</p>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export { WhyPawket };
