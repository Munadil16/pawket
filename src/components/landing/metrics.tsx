import { metrics } from "@/lib/constants/metrics.constants";

const Metrics = () => {
  return (
    <section className="px-5 py-5 lg:px-10 lg:py-10">
      <div className="container mx-auto">
        <h2 className="pb-5 text-center text-3xl font-semibold sm:text-5xl lg:pb-10">
          Trading Metrics
        </h2>

        <ul className="flex flex-wrap items-center justify-between gap-7 sm:gap-10 lg:flex-nowrap">
          {metrics.map((metric) => {
            return (
              <li key={metric.id} className="basis-1/3 sm:basis-auto">
                <span className="text-3xl font-semibold text-cyan-500 sm:text-4xl lg:text-6xl">
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
