import { ArrowRight } from "lucide-react";

const GetStarted = () => {
  return (
    <section className="bg-cyan-100 p-5 lg:p-10">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-semibold text-black/90 sm:text-4xl">
          Get started today with Pawket
        </h2>

        <div className="mt-3 flex items-center justify-center gap-5 sm:mt-5">
          <button
            className="cursor-pointer rounded-full border border-black bg-black px-4 py-2 text-sm font-medium text-white"
            type="button"
          >
            Start Trading
          </button>

          <button
            type="button"
            className="flex cursor-pointer items-center gap-1 text-sm font-medium text-black underline underline-offset-2"
          >
            Sign Up <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export { GetStarted };
