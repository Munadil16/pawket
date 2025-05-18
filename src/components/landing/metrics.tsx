import { metrics } from "@/lib/constants/metrics.constants";

const Metrics = () => {
  return (
    <section className="p-5 lg:p-10">
      <div className="container mx-auto">
        <h2 className="pb-5 text-center text-3xl font-semibold sm:text-4xl lg:pb-10">
          Trading Metrics
        </h2>

        <ul className="flex flex-wrap items-center justify-between gap-7 sm:gap-10 lg:flex-nowrap xl:justify-center xl:gap-28">
          {metrics.map((metric) => {
            return (
              <li key={metric.id} className="basis-2/5 sm:basis-auto">
                <span className="text-3xl font-semibold text-cyan-400 sm:text-4xl lg:text-6xl">
                  {metric.value}
                </span>

                <h3 className="pt-1 text-lg font-medium whitespace-nowrap text-white/80 lg:text-xl">
                  {metric.name}
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export { Metrics };
