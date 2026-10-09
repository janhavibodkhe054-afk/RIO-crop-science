import React, { useEffect, useRef, useState } from "react";
import {
  Sprout,
  Layers3,
  BadgePercent,
  Droplets,
  Leaf,
} from "lucide-react";

const benefits = [
  {
    icon: Sprout,
    title: "Stronger Root Development",
    description:
      "Supports increased root mass and plant biomass.",
    color: "#176B43",
  },
  {
    icon: Layers3,
    title: "Better Soil Structure",
    description:
      "Helps improve soil porosity, aeration and water retention.",
    color: "#0284C7",
  },
  {
    icon: BadgePercent,
    title: "Fertilizer Efficiency",
    description:
      "Can reduce fertilizer requirement by 20–25%.",
    color: "#F58220",
  },
];

const ProductBenefits = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes benefitLeft {
          from {
            opacity: 0;
            transform: translateX(-22px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes benefitRight {
          from {
            opacity: 0;
            transform: translateX(22px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes benefitUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .benefit-left-show {
          animation: benefitLeft .75s ease forwards;
        }

        .benefit-right-show {
          animation: benefitRight .8s ease forwards;
        }

        .benefit-item-show {
          animation: benefitUp .6s ease forwards;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#F7F1E8] py-12 sm:py-14 lg:py-16"
      >
        {/* ORANGE PATCH */}
        <div className="absolute -right-[110px] top-[40px] w-[250px] h-[290px] rounded-[45%_55%_40%_60%/55%_43%_57%_45%] bg-[#F58220]/10 pointer-events-none" />

        {/* GREEN GLOW */}
        <div className="absolute -left-[100px] bottom-[-90px] w-[260px] h-[260px] rounded-full bg-[#176B43]/[0.06] blur-3xl pointer-events-none" />

        {/* BLUE DOTS */}
        <div
          className="absolute right-8 top-8 w-[100px] h-[100px] opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(2,132,199,.40) 1.2px, transparent 1.2px)",
            backgroundSize: "15px 15px",
          }}
        />

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-8 lg:gap-12 items-stretch">

            {/* LEFT - BENEFITS */}
            <div
              className={
                visible ? "benefit-left-show" : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-[2px] bg-[#176B43]" />
                <span className="w-3 h-[2px] bg-[#0284C7]" />

                <span className="text-[11px] sm:text-[12px] uppercase tracking-[2.1px] font-bold text-[#176B43]">
                  Product Benefits
                </span>
              </div>

              <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.1] tracking-[-1px] font-bold text-[#173E2A]">
                Benefits Designed for
                <span className="text-[#0284C7]">
                  {" "}
                  Better Crop Performance
                </span>
              </h2>

              {/* BENEFIT ROWS */}
              <div className="mt-7 border-t border-[#173E2A]/10">
                {benefits.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                      className={`grid grid-cols-[48px_1fr] gap-4 py-5 sm:py-6 border-b border-[#173E2A]/10 ${
                        visible
                          ? "benefit-item-show"
                          : "opacity-0"
                      }`}
                    >
                      <div
                        className="w-11 h-11 rounded-full bg-white/65 flex items-center justify-center"
                        style={{
                          color: item.color,
                        }}
                      >
                        <Icon size={20} strokeWidth={1.8} />
                      </div>

                      <div>
                        <h3 className="text-[18px] sm:text-[20px] font-bold text-[#173E2A]">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 text-[14px] sm:text-[15px] leading-6 text-[#5B675F]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT - APPLICATION */}
            <div
              className={`relative overflow-hidden bg-[#173E2A] rounded-[24px] p-6 sm:p-8 lg:p-9 text-white ${
                visible ? "benefit-right-show" : "opacity-0"
              }`}
            >
              <div className="absolute -right-14 -top-14 w-[170px] h-[170px] rounded-full border border-white/10" />

              <div className="absolute right-8 bottom-8 w-[70px] h-[70px] rounded-full bg-[#F58220]/10" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-[#8FD16C] flex items-center justify-center">
                  <Droplets size={22} strokeWidth={1.8} />
                </div>

                <p className="mt-6 text-[11px] uppercase tracking-[2px] font-bold text-[#8FD16C]">
                  Application
                </p>

                <h3 className="mt-2 text-[25px] sm:text-[28px] font-extrabold text-white">
                  Recommended Usage
                </h3>

                {/* FOLIAR */}
                <div className="mt-7 pb-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <Leaf size={17} className="text-[#38BDF8]" />

                    <span className="text-[12px] uppercase tracking-[1.4px] font-bold text-white/55">
                      Foliar Spray
                    </span>
                  </div>

                  <p className="mt-2 text-[26px] sm:text-[30px] font-extrabold text-white">
                    1.25–2.5
                    <span className="ml-2 text-[14px] sm:text-[15px] font-semibold text-white/55">
                      gm/ltr
                    </span>
                  </p>
                </div>

                {/* DRIP */}
                <div className="pt-5">
                  <div className="flex items-center gap-3">
                    <Droplets size={17} className="text-[#F58220]" />

                    <span className="text-[12px] uppercase tracking-[1.4px] font-bold text-white/55">
                      Drip
                    </span>
                  </div>

                  <p className="mt-2 text-[26px] sm:text-[30px] font-extrabold text-white">
                    500gm–1kg
                    <span className="ml-2 text-[14px] sm:text-[15px] font-semibold text-white/55">
                      / acre
                    </span>
                  </p>
                </div>

                <div className="mt-7 pt-5 border-t border-white/10">
                  <p className="text-[12px] leading-6 text-white/55">
                    Apply as recommended based on crop requirements and field
                    conditions.
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

export default ProductBenefits;