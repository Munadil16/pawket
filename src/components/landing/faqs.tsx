"use client";

import { useState } from "react";
import { AccordionCard } from "../ui/accordion-card";
import { faqs } from "@/lib/constants/faqs.constants";

const FAQs = () => {
  const [selectedId, setSeletedId] = useState<number>(0);

  return (
    <section className="scroll-mt-14 p-5 lg:p-10" id="faqs">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <p className="mt-2 text-center text-sm text-white/80 sm:text-base">
          Find quick answers to common questions about our Pawket crypto trading
          Platform
        </p>

        <section className="mt-8 flex flex-col items-center gap-4">
          {faqs.map((faq) => {
            return (
              <AccordionCard
                key={faq.id}
                {...faq}
                open={selectedId === faq.id}
                handler={() =>
                  setSeletedId((prev) => (prev === faq.id ? 0 : faq.id))
                }
              />
            );
          })}
        </section>
      </div>
    </section>
  );
};

export { FAQs };
