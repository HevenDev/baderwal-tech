"use client";

import { useEffect, useState } from "react";

type Props = {
  videoDesktopSrc: string;
  videoMobileSrc: string;
};

export const HeroSectionVIdeo = ({
  videoMobileSrc,
  videoDesktopSrc,
}: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <section className="relative h-screen w-full overflow-hiddenpt-[4rem] pb-[5rem]">
        <video
          key={isMobile ? "mobile" : "desktop"}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source
            src={isMobile ? videoMobileSrc : videoDesktopSrc}
            type="video/webm"
          />
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full b_container text-white">
          <h1 className="text-[3rem] sm:text-[5rem] leading-none font-light text-center">
            Plots That Build More Than Homes, They Build Futures.
          </h1>
          <p className="text-[18px] sm:text-[22px] text-center font-semibold mt-2">
            From Yamunanagar to Gurgaon, Baderwals is turning land into legacies
            with plotted developments, townships, and investment-ready assets
            across India’s growth corridors.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 text-white border border-white rounded-xl hover:bg-white hover:text-black transition font-semibold">
              Explore Properties
            </button>
            <button className="px-6 py-3 text-white border border-white rounded-xl hover:bg-white hover:text-black transition font-semibold">
              Enquire Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
