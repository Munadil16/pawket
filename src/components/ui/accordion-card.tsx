"use client";

import { useEffect, useRef, useState } from "react";

interface IAccordionCard {
  question: string;
  answer: string;
  open: boolean;
  handler: () => void;
}

const AccordionCard = ({ question, answer, open, handler }: IAccordionCard) => {
  const [height, setHeight] = useState<string>("0px");
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [open]);

  return (
    <article
      className="flex w-full max-w-lg cursor-pointer flex-col justify-between rounded-xl border border-cyan-600/50 p-3 select-none lg:hover:bg-cyan-700/50"
      role="button"
      tabIndex={0}
      aria-label={`Toggle answer for: ${question}`}
      onClick={handler}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium text-cyan-100 sm:text-lg">{question}</h3>

        <span
          className={`-mt-[1px] text-lg font-medium text-cyan-100 transition-transform duration-300 sm:text-xl ${open ? "rotate-180" : "rotate-90"}`}
        >
          {open ? "-" : "+"}
        </span>
      </div>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-300"
      >
        <p className="text-xs sm:mt-2 sm:text-sm">{answer}</p>
      </div>
    </article>
  );
};

export { AccordionCard };
