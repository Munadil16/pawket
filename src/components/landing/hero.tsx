import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center gap-2 px-5 py-10 sm:gap-4">
      <h1 className="text-center text-3xl font-semibold sm:max-w-xl sm:text-5xl">
        Step into the Future of Crypto Trading
      </h1>

      <p className="max-w-72 text-center text-xs sm:max-w-96 sm:text-sm">
        Maximize your potential with a powerful platform built to shape the
        future of digital trading.
      </p>

      <button
        type="button"
        className="group mt-4 flex cursor-pointer items-center gap-1 rounded-lg border-2 border-white/80 bg-cyan-300 px-3 py-2 text-sm font-semibold text-black/90 sm:px-4 sm:py-3"
      >
        Sign up for Free
        <ArrowRight
          className="transition-transform duration-400 sm:group-hover:translate-x-1"
          size={15}
        />
      </button>
    </section>
  );
};

export { Hero };
