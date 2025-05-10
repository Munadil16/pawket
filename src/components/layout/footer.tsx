import Link from "next/link";
import Image from "next/image";
import {
  socialMediaLinks,
  product,
  resources,
  company,
} from "@/lib/constants/footer.constants";

const Footer = () => {
  return (
    <footer className="px-5 pt-10 lg:px-10">
      <div className="container mx-auto flex flex-col justify-between gap-10 border-b border-b-white/50 pb-5 lg:flex-row">
        <section className="flex flex-col gap-5 lg:w-2/3">
          <div className="flex items-center gap-1">
            <Image
              src={"/assets/pawket-logo.png"}
              alt="Pawket logo"
              width={25}
              height={25}
            />

            <h3 className="font-medium">Pawket</h3>
          </div>

          <p className="max-w-60 text-sm font-medium text-white/80">
            Reliable and trusted partner for maximizing crypto investments.
          </p>

          <ul className="flex items-center gap-5">
            {socialMediaLinks.map((medium) => {
              return (
                <li key={medium.id}>
                  <Image
                    className="cursor-pointer invert"
                    src={medium.imageSrc}
                    alt={medium.alt}
                    width={20}
                    height={20}
                  />
                </li>
              );
            })}
          </ul>
        </section>

        <section className="flex justify-between gap-5 sm:gap-10 lg:w-1/3">
          <ul className="flex flex-col gap-2">
            <h3 className="font-medium sm:mb-2 sm:text-lg">Product</h3>

            {product.map((item) => {
              return (
                <li key={item.id} className="text-xs text-white/80 sm:text-sm">
                  <Link href={item.linkTo}>{item.title}</Link>
                </li>
              );
            })}
          </ul>

          <ul className="flex flex-col gap-2">
            <h3 className="font-medium sm:mb-2 sm:text-lg">Resources</h3>

            {resources.map((item) => {
              return (
                <li key={item.id} className="text-xs text-white/80 sm:text-sm">
                  <Link href={item.linkTo}>{item.title}</Link>
                </li>
              );
            })}
          </ul>

          <ul className="flex flex-col gap-2">
            <h3 className="font-medium sm:mb-2 sm:text-lg">Company</h3>

            {company.map((item) => {
              return (
                <li key={item.id} className="text-xs text-white/80 sm:text-sm">
                  <Link href={item.linkTo}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      <p className="container mx-auto py-5 text-xs font-medium text-white/70 sm:text-sm">
        &copy; {`${new Date().getFullYear()} Pawket. All rights reserved.`}
      </p>

      <p className="container mx-auto overflow-x-hidden bg-gradient-to-b from-white/70 from-0% to-black/80 to-100% bg-clip-text text-center text-[5rem] leading-tight tracking-tighter text-transparent md:text-[13rem] lg:text-[17rem] xl:text-[20rem]">
        Pawket
      </p>
    </footer>
  );
};

export { Footer };
