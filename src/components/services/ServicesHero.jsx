import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Sprout,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";

const ServicesHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes serviceHeroLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes serviceHeroRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes serviceFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes serviceDotMove {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(8px, -6px);
          }
        }

        .service-left-show {
          animation: serviceHeroLeft .75s ease forwards;
        }

        .service-right-show {
          animation: serviceHeroRight .85s ease forwards;
        }

        .service-float {
          animation: serviceFloat 6s ease-in-out infinite;
        }

        .service-dot-move {
          animation: serviceDotMove 7s ease-in-out infinite;
        }
      `}</style>

      <section className="relative overflow-hidden bg-[#F6F3EC] py-10 sm:py-12 lg:py-14">
        {/* ORANGE SIDE PATCH */}
        <div className="absolute -right-[90px] top-[40px] w-[230px] h-[270px] rounded-[44%_56%_38%_62%/53%_42%_58%_47%] bg-[#F58220]/10 pointer-events-none" />

        {/* BLUE GLOW */}
        <div className="absolute -left-[100px] bottom-[-90px] w-[250px] h-[250px] rounded-full bg-[#0284C7]/[0.05] blur-3xl pointer-events-none" />

        {/* DOTS */}
        <div
          className="service-dot-move absolute right-[6%] bottom-[8%] w-[90px] h-[90px] opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(23,107,67,.35) 1.2px, transparent 1.2px)",
            backgroundSize: "14px 14px",
          }}
        />

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-8 lg:gap-12 items-center">

            {/* LEFT */}
            <div
              className={
                loaded ? "service-left-show" : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-[2px] bg-[#176B43]" />
                <span className="w-3 h-[2px] bg-[#F58220]" />

                <span className="text-[11px] sm:text-[12px] uppercase tracking-[2px] font-semibold text-[#176B43]">
                  Farmer Support
                </span>
              </div>

              <h1 className="max-w-[680px] text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.08] tracking-[-0.8px] font-bold text-[#173E2A]">
                Growing Better Crops
                <span className="block text-[#0284C7]">
                  Through Better Support
                </span>
              </h1>

              <p className="mt-4 max-w-[610px] text-[15px] sm:text-[16px] leading-7 text-[#56635B]">
                Practical, sustainable and science-driven support for better
                crop decisions.
              </p>

              {/* SERVICE STRIP */}
              <div className="mt-6 grid grid-cols-3 max-w-[620px] border-y border-[#173E2A]/10">
                {[
                  {
                    icon: Sprout,
                    label: "Crop Guidance",
                    color: "#176B43",
                  },
                  {
                    icon: FlaskConical,
                    label: "Plant Nutrition",
                    color: "#0284C7",
                  },
                  {
                    icon: ShieldCheck,
                    label: "Crop Protection",
                    color: "#F58220",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className={`flex flex-col sm:flex-row items-center sm:items-center justify-center gap-2 py-4 px-2 text-center sm:text-left ${
                        index !== 0
                          ? "border-l border-[#173E2A]/10"
                          : ""
                      }`}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.7}
                        style={{
                          color: item.color,
                        }}
                      />

                      <span className="text-[11px] sm:text-[12px] font-semibold text-[#46554C]">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2 rounded-lg bg-[#176B43] px-5 py-3 text-[13px] sm:text-[14px] font-semibold text-white hover:bg-[#0D2B1E] transition-all duration-300"
                >
                  Explore Our Products

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#173E2A]/15 bg-white/70 px-5 py-3 text-[13px] sm:text-[14px] font-semibold text-[#173E2A] hover:border-[#F58220] hover:text-[#F58220] transition-all duration-300"
                >
                  Talk to Our Team

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </Link>
              </div>
            </div>

            {/* RIGHT UNIQUE VISUAL */}
            <div
              className={`relative flex justify-center lg:justify-end ${
                loaded ? "service-right-show" : "opacity-0"
              }`}
            >
              <div className="relative w-[290px] h-[290px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px]">
                
                {/* OUTER RING */}
                <div className="absolute inset-0 rounded-full border border-[#176B43]/15" />

                <div className="absolute inset-[18px] rounded-full border border-[#0284C7]/10" />

                {/* MAIN IMAGE */}
                <div className="service-float absolute inset-[34px] rounded-[46%_54%_44%_56%/52%_42%_58%_48%] overflow-hidden shadow-[0_20px_50px_rgba(20,60,40,.14)]">
                  <img
                    src="/services-hero.jpg"
                    alt="Rio Crop Science crop support"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C1D]/60 via-transparent to-transparent" />
                </div>

                {/* GREEN TAG */}
                <div className="absolute left-0 top-[20%] bg-[#173E2A] text-white px-4 py-3 shadow-[0_10px_25px_rgba(20,60,40,.18)]">
                  <p className="text-[9px] uppercase tracking-[1.3px] text-[#8FD16C] font-semibold">
                    Support
                  </p>

                  <p className="mt-1 text-[13px] font-semibold">
                    Crop Guidance
                  </p>
                </div>

                {/* ORANGE TAG */}
                <div className="absolute right-0 bottom-[17%] bg-[#F58220] text-white px-4 py-3 shadow-[0_10px_25px_rgba(245,130,32,.20)]">
                  <p className="text-[9px] uppercase tracking-[1.3px] text-white/70 font-semibold">
                    Focus
                  </p>

                  <p className="mt-1 text-[13px] font-semibold">
                    Better Outcomes
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

export default ServicesHero;