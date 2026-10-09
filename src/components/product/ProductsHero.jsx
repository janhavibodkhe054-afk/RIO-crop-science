import React, { useEffect, useState } from "react";
import { ArrowDownRight, Leaf, Sprout } from "lucide-react";

const ProductsHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes productHeroLeft {
          from {
            opacity: 0;
            transform: translateX(-24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes productHeroRight {
          from {
            opacity: 0;
            transform: translateX(24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes productHeroFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes glowMove {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(18px, -10px);
          }
        }

        .products-hero-left {
          animation: productHeroLeft .75s ease forwards;
        }

        .products-hero-right {
          animation: productHeroRight .8s ease forwards;
        }

        .products-hero-float {
          animation: productHeroFloat 6s ease-in-out infinite;
        }

        .products-glow {
          animation: glowMove 8s ease-in-out infinite;
        }
      `}</style>

      <section className="relative w-full overflow-hidden bg-[#071A12] py-11 sm:py-13 lg:py-15 text-white">
        
        {/* BLUE GLOW */}
        <div className="products-glow absolute -top-[120px] right-[5%] w-[360px] h-[360px] rounded-full bg-[#0284C7]/10 blur-[110px] pointer-events-none" />

        {/* GREEN GLOW */}
        <div className="absolute -bottom-[120px] left-[3%] w-[380px] h-[380px] rounded-full bg-[#176B43]/18 blur-[120px] pointer-events-none" />

        {/* ORANGE PATCH */}
        <div className="absolute right-[-80px] bottom-[30px] w-[220px] h-[260px] rounded-[48%_52%_40%_60%/55%_43%_57%_45%] bg-[#F58220]/08 pointer-events-none" />

        {/* DOTS */}
        <div
          className="absolute right-8 top-8 w-[110px] h-[110px] opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(245,130,32,.50) 1.2px, transparent 1.2px)",
            backgroundSize: "15px 15px",
          }}
        />

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_.9fr] gap-8 lg:gap-12 items-center">

            {/* LEFT CONTENT */}
            <div
              className={
                loaded ? "products-hero-left" : "opacity-0"
              }
            >
              {/* LABEL */}
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[2px] bg-[#69C878]" />
                <span className="w-3 h-[2px] bg-[#38BDF8]" />
                <span className="w-3 h-[2px] bg-[#FB923C]" />

                <span className="text-[11px] sm:text-[12px] uppercase tracking-[2.1px] font-bold text-[#7CD488]">
                  Our Products
                </span>
              </div>

              {/* HEADING */}
              <h1 className="max-w-[720px] text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.1] tracking-[-1px] font-bold text-white">
                Solutions for Every Stage
                <span className="block mt-1 text-[#38BDF8]">
                  of Crop Growth
                </span>
              </h1>

              {/* CONTENT */}
              <p className="mt-5 max-w-[650px] text-[15px] sm:text-[16px] lg:text-[17px] leading-7 sm:leading-8 text-white/75">
                Explore Rio Crop Science&apos;s range of scientifically
                formulated agricultural solutions designed to support plant
                growth, soil health, crop protection and productivity.
              </p>

              {/* QUICK FOCUS */}
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2">
                  <Sprout size={17} className="text-[#7CD488]" />

                  <span className="text-[13px] font-semibold text-white/75">
                    Crop Growth
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Leaf size={17} className="text-[#38BDF8]" />

                  <span className="text-[13px] font-semibold text-white/75">
                    Soil Health
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-[7px] h-[7px] rounded-full bg-[#FB923C]" />

                  <span className="text-[13px] font-semibold text-white/75">
                    Crop Protection
                  </span>
                </div>
              </div>

              {/* SCROLL INDICATOR */}
              <div className="mt-7 inline-flex items-center gap-2 text-[12px] font-semibold text-[#7CD488]">
                Explore Solutions
                <ArrowDownRight size={15} />
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div
              className={`relative ${
                loaded ? "products-hero-right" : "opacity-0"
              }`}
            >
              <div className="relative max-w-[470px] mx-auto lg:ml-auto">

                {/* ORANGE BACK SHAPE */}
                <div className="absolute -right-3 top-7 w-[130px] h-[130px] rounded-[46%_54%_40%_60%/55%_43%_57%_45%] bg-[#F58220]/16" />

                {/* IMAGE */}
                <div className="products-hero-float relative overflow-hidden rounded-[75px_28px_75px_28px] h-[310px] sm:h-[370px] lg:h-[410px] border border-white/10 shadow-[0_22px_55px_rgba(0,0,0,.30)]">
                  <img
                    src="/product-hero.jpg"
                    alt="Rio Crop Science agricultural solutions"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06150E]/85 via-[#06150E]/15 to-transparent" />

                  <div className="absolute left-5 bottom-5">
                    <p className="text-[10px] uppercase tracking-[1.7px] font-bold text-white/55">
                      Rio Crop Science
                    </p>

                    <p className="mt-1 text-[18px] sm:text-[20px] font-bold text-white">
                      Science for Better Crops
                    </p>
                  </div>
                </div>

                {/* FLOATING INFO */}
                <div className="absolute -left-3 sm:-left-6 bottom-7 bg-[#0D281C] border border-white/10 px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,.24)]">
                  <p className="text-[9px] uppercase tracking-[1.4px] font-bold text-[#7CD488]">
                    Product Focus
                  </p>

                  <p className="mt-1 text-[13px] font-bold text-white">
                    Growth • Nutrition • Protection
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

export default ProductsHero;