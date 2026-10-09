import React, { useEffect, useRef, useState } from "react";
import { Leaf } from "lucide-react";

const OurStory = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes storyFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes storyFadeLeft {
          from {
            opacity: 0;
            transform: translateX(-24px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .story-left-show {
          animation: storyFadeLeft .75s ease forwards;
        }

        .story-content-show {
          animation: storyFadeUp .8s ease forwards;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.55fr_1.45fr] gap-8 lg:gap-14 xl:gap-16 items-start">

            {/* LEFT */}
            <div
              className={`relative ${
                visible ? "story-left-show" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#176B43]" />

                <span className="text-[11px] sm:text-[12px] uppercase tracking-[2.2px] font-bold text-[#176B43]">
                  Our Journey
                </span>
              </div>

              <div className="mt-7">
                <p className="text-[64px] sm:text-[76px] lg:text-[88px] leading-none font-extrabold tracking-[-4px] text-[#173E2A]">
                  2021
                </p>

                <p className="mt-3 text-[13px] uppercase tracking-[2px] font-semibold text-[#0284C7]">
                  Where the journey began
                </p>
              </div>

              <div className="mt-7 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EEF7F1] text-[#176B43] flex items-center justify-center">
                  <Leaf size={18} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[13px] font-bold text-[#173E2A]">
                    Purpose Driven
                  </p>

                  <p className="text-[12px] text-[#748079]">
                    Agriculture first
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className={`lg:border-l lg:border-[#173E2A]/10 lg:pl-12 xl:pl-16 ${
                visible ? "story-content-show" : "opacity-0"
              }`}
            >
              <p className="text-[11px] sm:text-[12px] uppercase tracking-[2.1px] font-bold text-[#F58220]">
                Our Story
              </p>

              <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.1] tracking-[-1px] font-bold text-[#173E2A]">
                Built Around Better Agriculture
              </h2>

              <div className="mt-6 space-y-5 max-w-[820px]">
                <p className="text-[16px] sm:text-[17px] leading-8 text-[#4F5D55]">
                  Founded in{" "}
                  <strong className="text-[#173E2A]">2021</strong>, Rio Crop
                  Science Pvt. Ltd. began with a simple yet meaningful idea —
                  to support agriculture through innovative, sustainable and
                  responsible crop solutions.
                </p>

                <p className="text-[15px] sm:text-[16px] leading-8 text-[#637068]">
                  The company has grown with a focus on bio-products, tonics,
                  micronutrients and crop protection solutions while keeping
                  environmental responsibility and farmer needs at the center
                  of its approach.
                </p>
              </div>

              {/* BOTTOM HIGHLIGHTS */}
              <div className="mt-8 pt-6 border-t border-[#173E2A]/10 grid sm:grid-cols-3 gap-5">
                <div>
                  <p className="text-[11px] uppercase tracking-[1.5px] font-semibold text-[#7B8680]">
                    Built On
                  </p>

                  <p className="mt-2 text-[15px] font-bold text-[#176B43]">
                    Innovation
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[1.5px] font-semibold text-[#7B8680]">
                    Guided By
                  </p>

                  <p className="mt-2 text-[15px] font-bold text-[#0284C7]">
                    Responsibility
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[1.5px] font-semibold text-[#7B8680]">
                    Focused On
                  </p>

                  <p className="mt-2 text-[15px] font-bold text-[#F58220]">
                    Farmers
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default OurStory;