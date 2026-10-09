import React, { useEffect, useRef, useState } from "react";
import { PackageCheck } from "lucide-react";

const packingOptions = ["100gm", "250gm", "500gm", "1kg"];

const AvailablePacking = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes packingFadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .packing-show {
          animation: packingFadeUp .65s ease forwards;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#FFF9F3] py-10 sm:py-12"
      >
        {/* subtle orange effect */}
        <div className="absolute -right-16 top-[-30px] w-[180px] h-[180px] rounded-full bg-[#F58220]/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-y border-[#173E2A]/10 py-6 ${
              visible ? "packing-show" : "opacity-0"
            }`}
          >
            {/* TITLE */}
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#EEF7F1] text-[#176B43] flex items-center justify-center shrink-0">
                <PackageCheck size={20} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[1.8px] font-bold text-[#F58220]">
                  Packaging Options
                </p>

                <h3 className="mt-1 text-[22px] sm:text-[25px] font-extrabold text-[#173E2A]">
                  Available Packing
                </h3>
              </div>
            </div>

            {/* PACK SIZES */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {packingOptions.map((pack, index) => (
                <div
                  key={pack}
                  className="min-w-[100px] sm:min-w-[112px] bg-white border border-[#173E2A]/10 px-4 py-3 text-center transition-all duration-300 hover:border-[#176B43]/30 hover:-translate-y-0.5"
                >
                  <span className="text-[10px] font-bold text-[#176B43]/40">
                    0{index + 1}
                  </span>

                  <p className="mt-1 text-[17px] sm:text-[18px] font-extrabold text-[#173E2A]">
                    {pack}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AvailablePacking;