"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { ArrowUpRightIcon } from "lucide-react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const JoinRevolution = () => {
  const lineChartRef = useRef<null | HTMLCanvasElement>(null);

  useEffect(() => {
    if (!lineChartRef.current) {
      return;
    }

    const lineChart = new Chart(lineChartRef.current, {
      type: "line",
      data: {
        labels: ["January", "April", "May", "August", "November"],
        datasets: [
          {
            data: [30000, 70000, 50000, 120000, 70000],
            borderColor: "rgba(75, 192, 192, 1)",
            tension: 0.4,
          },
        ],
      },
      options: {
        scales: {
          x: {
            ticks: {
              display: false,
            },
            grid: {
              drawTicks: false,
              display: false,
            },
          },
          y: {
            ticks: {
              stepSize: 50000,
            },
            grid: {
              drawTicks: false,
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => lineChart.destroy();
  }, []);

  return (
    <section className="px-5 py-5 lg:px-10 lg:py-10">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="bg-gradient-to-b from-cyan-300 from-30% to-cyan-700 to-100% bg-clip-text text-center text-sm font-medium text-transparent">
          JOIN THE REVOLUTION
        </p>

        <h2 className="max-w-md py-3 text-center text-3xl font-semibold sm:text-4xl lg:max-w-1/3">
          Setting a New Standard in Digital Trading
        </h2>

        <section className="mt-5 flex w-full flex-col items-stretch justify-center gap-10 sm:mt-10 sm:w-fit sm:flex-row sm:gap-20 lg:gap-40">
          <article className="flex w-full flex-col gap-5 sm:w-1/2">
            <h3 className="mb-auto text-xl font-medium sm:text-2xl">
              Stock Prices
            </h3>

            <div className="flex items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <Image
                  src={"/assets/images/coins/bitcoin.webp"}
                  alt="Bitcoin Logo"
                  width={20}
                  height={20}
                  className="box-content rounded-md bg-white p-2 invert"
                />

                <div>
                  <p className="font-medium">Bitcoin</p>
                  <span className="text-xs text-white/60">$104,080</span>
                </div>
              </div>

              <div>
                <p className="font-medium">0.28976</p>
                <span className="inline-flex w-full items-center justify-end text-xs text-cyan-200">
                  25.69% <ArrowUpRightIcon size={15} />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <Image
                  src={"/assets/images/coins/ethereum.webp"}
                  alt="Ethereum Logo"
                  width={20}
                  height={20}
                  className="box-content rounded-md bg-white p-2 invert"
                />

                <div>
                  <p className="font-medium">Ethereum</p>
                  <span className="text-xs text-white/60">$2,496</span>
                </div>
              </div>

              <div>
                <p className="font-medium">0.00976</p>
                <span className="inline-flex w-full items-center justify-end text-xs text-cyan-200">
                  14.69% <ArrowUpRightIcon size={15} />
                </span>
              </div>
            </div>
          </article>

          <article className="flex w-full flex-col sm:w-1/2">
            <h3 className="text-xl font-medium">Bitcoin Price</h3>

            <span className="mt-1 inline-flex items-center text-xs text-cyan-200">
              <ArrowUpRightIcon size={17} /> $23,069 (25.69%)
            </span>

            <canvas
              className="mt-2 !h-[150px] sm:!h-[120px] sm:!w-[250px]"
              ref={lineChartRef}
            />
          </article>
        </section>
      </div>
    </section>
  );
};

export { JoinRevolution };
