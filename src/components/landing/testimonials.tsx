import Image from "next/image";
import { testimonials } from "@/lib/constants/testimonials.constants";

const Testimonials = () => {
  return (
    <section className="p-5 lg:p-10">
      <div className="container mx-auto flex max-w-5xl flex-col items-center">
        <span className="rounded-full border border-cyan-200/70 px-3 py-1 text-xs text-cyan-300">
          Testimonials
        </span>

        <h2 className="pt-3 pb-10 text-center text-3xl font-semibold sm:text-4xl">
          People just like you are using Pawket
        </h2>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-rows-3">
          {testimonials.map((testimonial, index) => {
            const isBigCard = index === 0 || index === 3 || index === 4;

            return (
              <article
                key={testimonial.id}
                className={`flex flex-col justify-between gap-10 rounded-2xl border border-gray-300 bg-cyan-100 p-5 text-black ${isBigCard ? "lg:row-span-2" : ""}`}
              >
                <p className="text-xs text-black/90 lg:text-sm">
                  "{testimonial.description}"
                </p>

                <div className="flex items-center gap-2">
                  <Image
                    className="aspect-square rounded-md object-cover"
                    src={testimonial.imageSrc}
                    alt={`${testimonial.name}'s testimonial`}
                    width={35}
                    height={35}
                  />

                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-black/60">{testimonial.name}</p>
                    <p className="text-xs">{testimonial.designation}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export { Testimonials };
