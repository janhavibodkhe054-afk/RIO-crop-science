import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Leaf,
  Sprout,
  ShieldCheck,
  Globe,
} from "lucide-react";

const Sustainability = () => {
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
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
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
        @keyframes sustLeftIn {
          0% {
            opacity: 0;
            transform: translateX(-70px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes sustRightIn {
          0% {
            opacity: 0;
            transform: translateX(70px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes sustCardUp {
          0% {
            opacity: 0;
            transform: translateY(35px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sustBadgeIn {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sustIconFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        .sust-left-show {
          animation:
            sustLeftIn 1.15s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .sust-right-show {
          animation:
            sustRightIn 1.15s
            cubic-bezier(.16,1,.3,1)
            .15s
            forwards;
        }

        .sust-card-show {
          animation:
            sustCardUp .9s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .sust-badge-show {
          animation:
            sustBadgeIn .75s
            cubic-bezier(.16,1,.3,1)
            .2s
            forwards;
        }

        .sust-icon-float {
          animation:
            sustIconFloat 5s
            ease-in-out
            infinite;
        }

        .sust-main-card,
        .sust-small-card {
          transition:
            transform .45s cubic-bezier(.16,1,.3,1),
            box-shadow .45s ease,
            border-color .45s ease;
        }

        .sust-main-card:hover {
          transform: translateY(-5px);
          box-shadow:
            0 26px 60px rgba(0,0,0,.24);
        }

        .sust-small-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 18px 40px rgba(0,0,0,.20);
          border-color:
            rgba(255,255,255,.18);
        }

        .sust-icon-box {
          transition:
            transform .4s cubic-bezier(.16,1,.3,1);
        }

        .sust-small-card:hover .sust-icon-box {
          transform:
            scale(1.08)
            rotate(-3deg);
        }

        .sust-btn {
          transition:
            transform .35s cubic-bezier(.16,1,.3,1),
            background-color .35s ease,
            color .35s ease,
            box-shadow .35s ease;
        }

        .sust-btn:hover {
          transform: translateY(-3px);
        }

        /*
          IMPORTANT:
          section किंवा parent ला transform देऊ नका.
          नाहीतर background-attachment: fixed break होऊ शकतो.
        */

        .rio-fixed-sustainability-bg {
          background-image:
            linear-gradient(
              rgba(5, 29, 20, .84),
              rgba(7, 34, 24, .90)
            ),
            url("https://i.pinimg.com/736x/6d/3e/eb/6d3eeb3e14e7cf899cb2dfae2b94cfe5.jpg");

          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        @media (max-width: 1023px) {
          @keyframes sustLeftIn {
            from {
              opacity: 0;
              transform: translateY(38px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes sustRightIn {
            from {
              opacity: 0;
              transform: translateY(38px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }

        /*
          Mobile Safari/บาง mobile browsers मध्ये
          background-attachment fixed support weak असते.
        */
        @media (max-width: 767px) {
          .rio-fixed-sustainability-bg {
            background-attachment: scroll;
            background-position: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sust-left-show,
          .sust-right-show,
          .sust-card-show,
          .sust-badge-show,
          .sust-icon-float {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* 
        IMPORTANT:
        या SECTION ला animation / transform class दिलेली नाही.
        म्हणून fixed background properly work होईल.
      */}
      <section
        ref={sectionRef}
        className="rio-fixed-sustainability-bg relative overflow-hidden py-18 sm:py-20 lg:py-22 text-white"
      >
        {/* EXTRA STATIC OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#09261A]/25 via-transparent to-[#09261A]/20 pointer-events-none" />

        {/* TOP BRAND LINE */}
        <div className="absolute top-0 left-0 w-full h-[4px] flex">
          <span className="w-[38%] bg-[#7FBF5A]" />
          <span className="w-[22%] bg-[#3FA7E0]" />
          <span className="flex-1 bg-[#F58A2A]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">

            {/* LEFT */}
            <div
              className={`sust-main-card lg:col-span-7 relative overflow-hidden bg-[#103A29]/88 border border-white/10 rounded-[28px] p-7 sm:p-10 lg:p-12 ${
                visible
                  ? "sust-left-show"
                  : "opacity-0"
              }`}
            >
              {/* ACCENT */}
              <div className="absolute top-0 right-0 w-[180px] h-[4px] bg-gradient-to-r from-transparent via-[#7FBF5A] to-[#3FA7E0]" />

              {/* BADGE */}
              <div
                className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/10 mb-5 ${
                  visible
                    ? "sust-badge-show"
                    : "opacity-0"
                }`}
              >
                <Leaf
                  size={15}
                  className="text-[#A3E635]"
                />

                <span className="text-[12px] sm:text-[13px] uppercase tracking-[2px] font-semibold text-[#A3E635]">
                  Environmental Responsibility
                </span>
              </div>

              {/* HEADING */}
              <h2 className="text-[34px] sm:text-[43px] lg:text-[50px] leading-[1.08] tracking-[-0.8px] font-bold text-white">
                Sustainability at the Heart of

                <span className="block mt-1 text-[#9EDB6D]">
                  Agriculture
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-5 max-w-[760px] text-[16px] sm:text-[17px] leading-7 sm:leading-8 text-white/75">
                Our approach focuses on reducing unnecessary chemical use,
                improving soil health and supporting biodiversity while
                keeping productivity and long-term environmental
                responsibility in balance.
              </p>

              {/* BUTTON */}
              <div className="mt-7">
                <Link
                  to="/services"
                  className="sust-btn group/btn inline-flex items-center gap-3 rounded-xl bg-[#7FBF5A] text-[#0A261B] px-7 py-3.5 text-[15px] sm:text-[16px] font-semibold shadow-[0_10px_26px_rgba(127,191,90,.20)] hover:bg-white hover:text-[#173E2A]"
                >
                  Explore Our Services

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover/btn:rotate-45"
                  />
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className={`lg:col-span-5 flex flex-col gap-5 ${
                visible
                  ? "sust-right-show"
                  : "opacity-0"
              }`}
            >
              {/* SOIL */}
              <div
                style={{
                  animationDelay: ".18s",
                }}
                className={`sust-small-card bg-[#12442F]/88 border border-white/10 rounded-[24px] p-6 sm:p-7 ${
                  visible
                    ? "sust-card-show"
                    : "opacity-0"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="sust-icon-box sust-icon-float w-12 h-12 rounded-xl bg-[#7FBF5A]/15 text-[#A3E635] flex items-center justify-center shrink-0">
                    <Sprout size={23} />
                  </div>

                  <div>
                    <h3 className="text-[20px] sm:text-[21px] font-semibold text-white">
                      Soil Health Restoration
                    </h3>

                    <p className="mt-1 text-[14px] text-white/55">
                      Long-term fertility & vitality
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-[15px] leading-7 text-white/72">
                  Supporting microbial activity and organic matter
                  retention for healthier, more productive soil.
                </p>
              </div>

              {/* TWO CARDS */}
              <div className="grid sm:grid-cols-2 gap-5">

                {/* SAFE PROTECTION */}
                <div
                  style={{
                    animationDelay: ".32s",
                  }}
                  className={`sust-small-card bg-[#12442F]/88 border border-white/10 rounded-[22px] p-6 ${
                    visible
                      ? "sust-card-show"
                      : "opacity-0"
                  }`}
                >
                  <div className="sust-icon-box w-11 h-11 rounded-xl bg-[#3FA7E0]/15 text-[#67C2EC] flex items-center justify-center">
                    <ShieldCheck size={21} />
                  </div>

                  <h4 className="mt-4 text-[18px] font-semibold text-white">
                    Safe Protection
                  </h4>

                  <p className="mt-2 text-[14px] leading-6 text-white/65">
                    Reducing chemical footprints through responsible crop
                    protection solutions.
                  </p>
                </div>

                {/* BIODIVERSITY */}
                <div
                  style={{
                    animationDelay: ".46s",
                  }}
                  className={`sust-small-card bg-[#12442F]/88 border border-white/10 rounded-[22px] p-6 ${
                    visible
                      ? "sust-card-show"
                      : "opacity-0"
                  }`}
                >
                  <div className="sust-icon-box w-11 h-11 rounded-xl bg-[#F58A2A]/15 text-[#F58A2A] flex items-center justify-center">
                    <Globe size={21} />
                  </div>

                  <h4 className="mt-4 text-[18px] font-semibold text-white">
                    Biodiversity
                  </h4>

                  <p className="mt-2 text-[14px] leading-6 text-white/65">
                    Supporting natural balance and healthier agricultural
                    ecosystems.
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

export default Sustainability;