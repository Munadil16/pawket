"use client";

import Link from "next/link";
import Image from "next/image";
import { X, MenuIcon } from "lucide-react";
import { useState, useEffect } from "react";

const navigationLinks = [
  {
    id: 1,
    title: "About Us",
    linkTo: "#about-us",
  },
  {
    id: 2,
    title: "Testimonials",
    linkTo: "#testimonials",
  },
  {
    id: 3,
    title: "FAQs",
    linkTo: "#faqs",
  },
  {
    id: 4,
    title: "Contact Us",
    linkTo: "#contact-us",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleMenuClose = () => {
      if (mediaQuery.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleMenuClose);

    return () => {
      mediaQuery.removeEventListener("change", handleMenuClose);
    };
  }, []);

  return (
    <header className="sticky top-0 z-5 bg-neutral-900 py-5 lg:px-10">
      <nav className="relative container mx-auto flex items-center justify-between">
        <Link
          className="flex items-center gap-2 pl-5 text-lg font-medium lg:pl-0 lg:text-xl"
          href={"/"}
        >
          <Image
            loading="eager"
            src={"/assets/pawket-logo.png"}
            width={35}
            height={35}
            alt="Pawket Logo"
          />
          Pawket
        </Link>

        <ul
          className={`flex-col gap-5 font-medium lg:flex-row lg:items-center lg:gap-10 ${isMenuOpen ? "absolute top-12 flex h-dvh w-full bg-neutral-900 p-5" : "hidden lg:flex"}`}
        >
          {navigationLinks.map((navigation) => {
            return (
              <li key={navigation.id} className="whitespace-nowrap">
                <Link
                  href={navigation.linkTo}
                  className="decoration-cyan-300 lg:hover:underline"
                >
                  {navigation.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          className="hidden cursor-pointer rounded-lg border border-white bg-gradient-to-b from-white from-5% to-cyan-200 px-3 py-2 text-sm font-medium text-black lg:block"
          type="button"
        >
          Start Trading
        </button>

        <button
          className="pr-5 lg:hidden"
          type="button"
          onClick={() => setIsMenuOpen((p) => !p)}
        >
          {isMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </nav>
    </header>
  );
};

export { Navbar };
