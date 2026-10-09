import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const BrandIntroduction = () => {
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
        threshold: 0.14,
        rootMargin: "0px 0px -55px 0px",
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
        @keyframes brandVisualIn {
          0% {
            opacity: 0;
            transform: translateX(-70px) scale(.96);
          }

          65% {
            opacity: 1;
            transform: translateX(6px) scale(1.01);
          }

          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes brandContentIn {
          0% {
            opacity: 0;
            transform: translateX(65px);
          }

          65% {
            opacity: 1;
            transform: translateX(-5px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes brandUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes brandBadgeIn {
          0% {
            opacity: 0;
            transform: translateY(22px) scale(.92);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes brandLineGrow {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        @keyframes brandBadgeFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        .brand-visual-show {
          animation:
            brandVisualIn 1.2s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .brand-content-show {
          animation:
            brandContentIn 1.15s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .brand-label-show {
          opacity: 0;

          animation:
            brandUp .72s
            cubic-bezier(.16,1,.3,1)
            .12s
            forwards;
        }

        .brand-heading-show {
          opacity: 0;

          animation:
            brandUp .86s
            cubic-bezier(.16,1,.3,1)
            .23s
            forwards;
        }

        .brand-text-show {
          opacity: 0;

          animation:
            brandUp .84s
            cubic-bezier(.16,1,.3,1)
            .38s
            forwards;
        }

        .brand-highlights-show {
          opacity: 0;

          animation:
            brandUp .82s
            cubic-bezier(.16,1,.3,1)
            .54s
            forwards;
        }

        .brand-button-show {
          opacity: 0;

          animation:
            brandUp .78s
            cubic-bezier(.16,1,.3,1)
            .68s
            forwards;
        }

        .brand-badge-show {
          opacity: 0;

          animation:
            brandBadgeIn .8s
            cubic-bezier(.16,1,.3,1)
            .72s
            forwards;
        }

        .brand-accent-line {
          transform-origin: left;

          animation:
            brandLineGrow .9s
            cubic-bezier(.16,1,.3,1)
            .5s
            forwards;
        }

        .brand-badge-float {
          animation:
            brandBadgeFloat 5.5s
            ease-in-out
            infinite;
        }

        .brand-main-image {
          transition:
            transform .9s
            cubic-bezier(.16,1,.3,1);
        }

        .brand-main-wrap:hover .brand-main-image {
          transform: scale(1.04);
        }

        .brand-main-wrap {
          transition:
            transform .5s cubic-bezier(.16,1,.3,1),
            box-shadow .5s ease;
        }

        .brand-main-wrap:hover {
          transform: translateY(-5px);
          box-shadow:
            0 30px 70px
            rgba(20,60,40,.18);
        }

        .brand-highlight-card {
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .brand-highlight-card:hover {
          transform: translateY(-4px);

          box-shadow:
            0 12px 28px
            rgba(20,60,40,.08);
        }

        .brand-button {
          transition:
            transform .35s
            cubic-bezier(.16,1,.3,1),
            background-color .35s ease,
            box-shadow .35s ease;
        }

        .brand-button:hover {
          transform: translateY(-3px);
        }

        @media (max-width: 1023px) {
          @keyframes brandVisualIn {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(.97);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes brandContentIn {
            0% {
              opacity: 0;
              transform: translateY(36px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-visual-show,
          .brand-content-show,
          .brand-label-show,
          .brand-heading-show,
          .brand-text-show,
          .brand-highlights-show,
          .brand-button-show,
          .brand-badge-show,
          .brand-accent-line,
          .brand-badge-float {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAFCFB] to-white py-16 sm:py-20 lg:py-24"
      >
        {/* BACKGROUND ACCENTS */}
        <div className="absolute top-10 right-0 w-[320px] h-[320px] rounded-full bg-[#20A7E0]/[0.04] pointer-events-none" />

        <div className="absolute bottom-10 left-0 w-[300px] h-[300px] rounded-full bg-[#176B43]/[0.04] pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[.96fr_1.04fr] gap-12 lg:gap-16 xl:gap-20 items-center">

            {/* LEFT — SIMPLE PREMIUM IMAGE */}
            <div
              className={`relative ${
                visible ? "brand-visual-show" : "opacity-0"
              }`}
            >
              <div className="relative max-w-[590px] mx-auto lg:mx-0 px-3 sm:px-5 py-5 sm:py-7">

                {/* BACK GREEN BORDER */}
                <div className="absolute left-0 sm:left-2 top-0 sm:top-2 w-[88%] h-[88%] border-2 border-[#176B43]/20 rounded-[26px]" />

                {/* BLUE OFFSET BORDER */}
                <div className="absolute right-0 bottom-0 w-[82%] h-[82%] border border-[#0284C7]/20 rounded-[26px]" />

                {/* ORANGE TOP ACCENT */}
                <div
                  className={`absolute top-0 left-[14%] w-[88px] sm:w-[100px] h-[5px] bg-[#F58220] rounded-full ${
                    visible ? "brand-accent-line" : "scale-x-0"
                  }`}
                />

                {/* SMALL GREEN SIDE STRIP */}
                <div className="absolute z-20 left-0 sm:left-2 bottom-[20%] w-[5px] h-[80px] bg-[#176B43] rounded-full" />

                {/* SMALL BLUE DETAIL */}
                <div className="absolute z-20 right-[5%] top-[18%] w-[38px] h-[4px] bg-[#0284C7] rounded-full" />

                {/* MAIN IMAGE */}
                <div className="brand-main-wrap relative z-10 ml-3 sm:ml-5 mt-4 sm:mt-5 w-[88%] overflow-hidden rounded-[24px] border-[6px] border-white shadow-[0_24px_60px_rgba(20,60,40,.15)]">
                  <img
                    src="/home-about.png"
                    alt="Rio Crop Science sustainable agriculture"
                    className="brand-main-image w-full h-[360px] sm:h-[460px] lg:h-[520px] object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102F20]/55 via-transparent to-transparent" />

                  {/* IMAGE CAPTION */}
                  <div className="absolute left-5 sm:left-6 right-5 sm:right-6 bottom-5 sm:bottom-6">
                    <p className="text-[12px] sm:text-[13px] uppercase tracking-[1.5px] font-medium text-white/70">
                      Sustainable Agriculture
                    </p>

                    <p className="mt-1 text-[18px] sm:text-[20px] font-semibold text-white">
                      Growing with science and responsibility.
                    </p>
                  </div>
                </div>

                {/* ESTABLISHED BADGE */}
                <div
                  className={`brand-badge-float absolute z-30 right-2 sm:right-5 bottom-2 sm:bottom-4 bg-white rounded-[16px] px-4 sm:px-5 py-3.5 shadow-[0_15px_35px_rgba(20,60,40,.15)] border border-[#176B43]/10 ${
                    visible ? "brand-badge-show" : "opacity-0"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7]" />

                    <span className="text-[12px] sm:text-[13px] uppercase tracking-[1.4px] font-semibold text-[#176B43]">
                      Established
                    </span>
                  </div>

                  <p className="mt-1 text-[30px] sm:text-[34px] leading-none font-bold text-[#173E2A]">
                    2021
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div
              className={`${
                visible ? "brand-content-show" : "opacity-0"
              }`}
            >
              {/* LABEL */}
              <div
                className={`flex items-center gap-3 mb-4 ${
                  visible ? "brand-label-show" : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-1">
                  <span className="w-6 h-[2.5px] bg-[#176B43] rounded-full" />
                  <span className="w-3.5 h-[2.5px] bg-[#F58220] rounded-full" />
                  <span className="w-3.5 h-[2.5px] bg-[#20A7E0] rounded-full" />
                </div>

                <span className="text-[12px] sm:text-[13px] uppercase tracking-[2.3px] text-[#176B43] font-semibold">
                  About Rio Crop Science
                </span>
              </div>

              {/* HEADING */}
              <h2
                className={`text-[36px] sm:text-[44px] lg:text-[50px] leading-[1.08] tracking-[-1px] font-bold text-[#17452F] ${
                  visible ? "brand-heading-show" : "opacity-0"
                }`}
              >
                Growing Better.

                <span className="block text-[#1A73B8] mt-1">
                  Growing Responsibly.
                </span>
              </h2>

              {/* PARAGRAPHS */}
              <div
                className={`mt-6 space-y-4 text-[16px] sm:text-[17px] leading-[1.75] text-[#4D5F55] ${
                  visible ? "brand-text-show" : "opacity-0"
                }`}
              >
                <p>
                  Founded in{" "}
                  <strong className="text-[#17452F] font-semibold">
                    2021
                  </strong>
                  , Rio Crop Science Pvt. Ltd. is dedicated to transforming
                  agriculture through{" "}
                  <strong className="text-[#1A73B8] font-semibold">
                    sustainable innovation
                  </strong>{" "}
                  and comprehensive farmer-centric solutions.
                </p>

                <p>
                  Our advanced product portfolio features premium bio-products,
                  crop tonics, micronutrients and plant protection formulations
                  engineered to enhance crop yields, restore soil vitality and
                  promote eco-friendly farming practices.
                </p>
              </div>

              {/* HIGHLIGHTS */}
              <div
                className={`mt-7 sm:mt-8 ${
                  visible ? "brand-highlights-show" : "opacity-0"
                }`}
              >
                <div className="grid sm:grid-cols-3 gap-3.5">
                  <div className="brand-highlight-card flex items-center gap-3 rounded-xl bg-[#F2F8FC] border border-[#1A73B8]/15 px-4 py-4">
                    <CheckCircle2
                      size={20}
                      className="text-[#1A73B8] shrink-0"
                    />

                    <span className="text-[14px] sm:text-[15px] font-semibold text-[#2A3B32]">
                      Innovation
                    </span>
                  </div>

                  <div className="brand-highlight-card flex items-center gap-3 rounded-xl bg-[#F3F8F4] border border-[#176B43]/15 px-4 py-4">
                    <CheckCircle2
                      size={20}
                      className="text-[#176B43] shrink-0"
                    />

                    <span className="text-[14px] sm:text-[15px] font-semibold text-[#2A3B32]">
                      Sustainability
                    </span>
                  </div>

                  <div className="brand-highlight-card flex items-center gap-3 rounded-xl bg-[#FFF7EF] border border-[#F58220]/15 px-4 py-4">
                    <CheckCircle2
                      size={20}
                      className="text-[#F58220] shrink-0"
                    />

                    <span className="text-[14px] sm:text-[15px] font-semibold text-[#2A3B32]">
                      Empowerment
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div
                className={`mt-8 ${
                  visible ? "brand-button-show" : "opacity-0"
                }`}
              >
                <Link
                  to="/about"
                  className="brand-button group inline-flex items-center gap-3 rounded-xl bg-[#176B43] text-white px-7 py-4 text-[15px] sm:text-[16px] font-semibold shadow-[0_10px_25px_rgba(23,107,67,.22)] hover:bg-[#1A73B8] hover:shadow-[0_12px_28px_rgba(26,115,184,.22)]"
                >
                  Discover Our Story

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

export default BrandIntroduction;