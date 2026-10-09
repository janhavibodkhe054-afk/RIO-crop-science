import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes ctaLeftIn {
          from {
            opacity: 0;
            transform: translateX(-42px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes ctaRightIn {
          from {
            opacity: 0;
            transform: translateX(42px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes ctaLineIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .rio-cta-left-show {
          animation:
            ctaLeftIn .9s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .rio-cta-right-show {
          animation:
            ctaRightIn .9s
            cubic-bezier(.16,1,.3,1)
            .14s
            forwards;
        }

        .rio-cta-line-show {
          transform-origin: left;
          animation:
            ctaLineIn .8s
            cubic-bezier(.16,1,.3,1)
            .35s
            forwards;
        }

        .rio-cta-btn {
          transition:
            transform .35s cubic-bezier(.16,1,.3,1),
            background-color .35s ease,
            color .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .rio-cta-btn:hover {
          transform: translateY(-3px);
        }

        @media (max-width: 1023px) {
          @keyframes ctaLeftIn {
            from {
              opacity: 0;
              transform: translateY(28px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes ctaRightIn {
            from {
              opacity: 0;
              transform: translateY(28px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rio-cta-left-show,
          .rio-cta-right-show,
          .rio-cta-line-show {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#F7F9F6] py-9 sm:py-11 lg:py-12"
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* MAIN CTA */}
          <div className="relative overflow-hidden bg-white border border-[#173E2A]/10 shadow-[0_18px_50px_rgba(20,60,40,.07)]">

            {/* TOP BRAND LINE */}
            <div className="flex w-full h-[5px]">
              <span className="w-[45%] bg-[#176B43]" />
              <span className="w-[30%] bg-[#0284C7]" />
              <span className="w-[25%] bg-[#F58220]" />
            </div>

            {/* SOFT BACKGROUND PATCHES */}
            <div className="absolute -right-[80px] top-[-100px] w-[260px] h-[260px] rounded-full bg-[#176B43]/[0.045] pointer-events-none" />
            <div className="absolute right-[14%] bottom-[-100px] w-[220px] h-[220px] rounded-full bg-[#0284C7]/[0.035] pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center px-6 sm:px-9 lg:px-12 py-8 sm:py-9 lg:py-10">

              {/* LEFT CONTENT */}
              <div
                className={`max-w-[760px] ${
                  visible ? "rio-cta-left-show" : "opacity-0"
                }`}
              >
                {/* LABEL */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#EEF7F1] border border-[#176B43]/10 flex items-center justify-center">
                    <Leaf
                      size={18}
                      className="text-[#176B43]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <span className="text-[12px] sm:text-[13px] uppercase tracking-[2px] font-semibold text-[#176B43]">
                    Grow With Rio Crop Science
                  </span>
                </div>

                {/* HEADING */}
                <h2 className="mt-4 text-[31px] sm:text-[39px] lg:text-[46px] leading-[1.08] tracking-[-0.8px] font-bold text-[#173E2A]">
                  Better Solutions.
                  <span className="text-[#0284C7]">
                    {" "}Stronger Agriculture.
                  </span>
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-4 max-w-[700px] text-[15px] sm:text-[17px] leading-7 text-[#55635B]">
                  Connect with Rio Crop Science for reliable agricultural
                  products, farmer-focused support and sustainable crop
                  solutions.
                </p>

                {/* ACCENT LINE */}
                <div
                  className={`mt-6 h-[3px] w-[90px] bg-[#F58220] ${
                    visible
                      ? "rio-cta-line-show"
                      : "scale-x-0"
                  }`}
                />
              </div>

              {/* RIGHT BUTTONS */}
              <div
                className={`flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0 ${
                  visible ? "rio-cta-right-show" : "opacity-0"
                }`}
              >
                <Link
                  to="/products"
                  className="rio-cta-btn group inline-flex items-center justify-center gap-2.5 bg-[#176B43] text-white px-6 sm:px-7 py-3.5 text-[15px] sm:text-[16px] font-semibold hover:bg-[#0284C7] shadow-[0_10px_24px_rgba(23,107,67,.16)]"
                >
                  Explore Products

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="rio-cta-btn group inline-flex items-center justify-center gap-2.5 border border-[#173E2A]/15 bg-[#F7F9F6] text-[#173E2A] px-6 sm:px-7 py-3.5 text-[15px] sm:text-[16px] font-semibold hover:bg-[#F58220] hover:border-[#F58220] hover:text-white"
                >
                  Talk to Our Team

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default FinalCTA;