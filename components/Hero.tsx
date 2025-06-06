"use client";

import { AnimatedShinyTextDemo } from "@/components/ui/animated-shiny-text-demo";
import { CoverDemo } from "@/components/ui/cover-demo";
import NumberTicker from "@/components/ui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] overflow-clip">
      {/* Hero Section */}
      <main className="py-14 md:pt-24">
        <section className="mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <AnimatedShinyTextDemo />
          <h1>
            <CoverDemo />
          </h1>
          <p className="text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500 text-center">
            Helping millions of people build foundational skills in Cloud Computing
          </p>

          {/* Call to Action Buttons */}
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/meeting"
              className="py-3 px-10 md:px-16 md:text-xl bg-[#121212] text-white border-2 border-black dark:border-white rounded-[6px] hover:bg-[#0059bf] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Learn Now
            </Link>
            <Link
              href="/showcase"
              className="py-3 px-10 md:px-16 md:text-xl bg-white border-4 border-black rounded-[6px] hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Donate
            </Link>
          </div>

          {/* Trusted Brands */}
          <div className="flex items-center justify-between gap-y-4 my-10">
            <div className="md:w-2/5">
              <h2 className="text-2xl font-medium text-gray-600 w-4/5">
                Tested and Trusted
              </h2>
              <div className="flex my-6 gap-x-5">
                <div>
                  <h3 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={10} /> +
                    <p className="text-gray-500 text-sm md:text-md">Sponsors</p>
                  </h3>
                </div>
                <div className="w-px bg-gray-300 self-stretch"></div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={75} /> +
                    <p className="text-gray-500 text-sm md:text-md">Students Taught</p>
                  </h3>
                </div>
              </div>
            </div>
            <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="left"
                items={[
                  { logo: "/svg.png", name: "Logo" },
                  { logo: "/svg.png", name: "Logo" },
                ]}
              />
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}