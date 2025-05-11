import { coins } from "@/lib/constants/coins.constants";

const CoinsMarquee = () => {
  return (
    <>
      <section className="flex items-center gap-3 overflow-hidden pt-5 pb-2 lg:pt-10 2xl:container 2xl:mx-auto">
        <div className="animate-marquee flex gap-3">
          {[...coins, ...coins].map((coin, index) => (
            <img
              key={index}
              src={coin.imageSrc}
              alt={coin.alt}
              width={20}
              height={20}
              className="box-content inline max-w-none rounded-lg bg-white p-2"
            />
          ))}
        </div>

        <div className="animate-marquee flex gap-3" aria-hidden="true">
          {[...coins, ...coins].map((coin, index) => (
            <img
              key={index}
              src={coin.imageSrc}
              alt={coin.alt}
              width={20}
              height={20}
              className="box-content inline max-w-none rounded-lg bg-white p-2"
            />
          ))}
        </div>

        <div className="animate-marquee flex gap-3" aria-hidden="true">
          {[...coins, ...coins].map((coin, index) => (
            <img
              key={index}
              src={coin.imageSrc}
              alt={coin.alt}
              width={20}
              height={20}
              className="box-content inline max-w-none rounded-lg bg-white p-2"
            />
          ))}
        </div>
      </section>

      <section className="flex gap-3 overflow-hidden pt-1 pb-5 lg:pb-10 2xl:container 2xl:mx-auto">
        <div className="animate-marquee-reverse flex gap-3" aria-hidden="true">
          {[...coins, ...coins].map((coin, index) => (
            <img
              key={index}
              src={coin.imageSrc}
              alt={coin.alt}
              width={20}
              height={20}
              className="box-content inline max-w-none rounded-lg bg-white p-2"
            />
          ))}
        </div>

        <div className="animate-marquee-reverse flex gap-3" aria-hidden="true">
          {[...coins, ...coins].map((coin, index) => (
            <img
              key={index}
              src={coin.imageSrc}
              alt={coin.alt}
              width={20}
              height={20}
              className="box-content inline max-w-none rounded-lg bg-white p-2"
            />
          ))}
        </div>

        <div className="animate-marquee-reverse flex gap-3" aria-hidden="true">
          {[...coins, ...coins].map((coin, index) => (
            <img
              key={index}
              src={coin.imageSrc}
              alt={coin.alt}
              width={20}
              height={20}
              className="box-content inline max-w-none rounded-lg bg-white p-2"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export { CoinsMarquee };
