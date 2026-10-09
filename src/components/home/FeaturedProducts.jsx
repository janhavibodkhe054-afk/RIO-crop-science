import React, { useEffect, useRef, useState } from "react";
import {
  Leaf,
  FlaskConical,
  Sprout,
  ShieldCheck,
  Users,
  HeartHandshake,
} from "lucide-react";

const points = [
  {
    number: "01",
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description:
      "Sustainable agricultural solutions that support crop performance while keeping environmental responsibility in focus.",
    color: "#176B43",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Research-Driven Formulas",
    description:
      "Scientific formulations developed with a focus on practical field performance and responsible agricultural use.",
    color: "#0284C7",
  },
  {
    number: "03",
    icon: Sprout,
    title: "Soil Health Improvement",
    description:
      "Solutions that support soil fertility, microbial activity, stronger roots and long-term agricultural productivity.",
    color: "#176B43",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Crop Protection Support",
    description:
      "Crop protection solutions designed to help farmers manage common pest challenges across different crop stages.",
    color: "#F58220",
  },
  {
    number: "05",
    icon: Users,
    title: "Trusted by Farmers",
    description:
      "Thousands of farmers choose Rio Crop Science for practical products, guidance and continued agricultural support.",
    color: "#0284C7",
  },
  {
    number: "06",
    icon: HeartHandshake,
    title: "Dedicated Farmer Support",
    description:
      "Product information, application guidance and responsive support to help farmers make more informed crop decisions.",
    color: "#F58220",
  },
];

const WhyFarmersChooseRio = () => {
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
        rootMargin: "0px 0px -70px 0px",
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
        /* =========================================
           HEADER — SLOW CINEMATIC REVEAL
        ========================================== */

        @keyframes rioHeaderReveal {
          0% {
            opacity: 0;
            transform: translateY(42px);
            filter: blur(10px);
          }

          60% {
            opacity: 1;
            filter: blur(1px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }


        /* =========================================
           LEFT CARDS
        ========================================== */

        @keyframes rioCardLeft {
          0% {
            opacity: 0;
            transform:
              translateX(-95px)
              translateY(14px)
              scale(.94);
            filter: blur(9px);
          }

          55% {
            opacity: 1;
            transform:
              translateX(8px)
              translateY(0)
              scale(1.01);
            filter: blur(1px);
          }

          100% {
            opacity: 1;
            transform:
              translateX(0)
              translateY(0)
              scale(1);
            filter: blur(0);
          }
        }


        /* =========================================
           RIGHT CARDS
        ========================================== */

        @keyframes rioCardRight {
          0% {
            opacity: 0;
            transform:
              translateX(95px)
              translateY(14px)
              scale(.94);
            filter: blur(9px);
          }

          55% {
            opacity: 1;
            transform:
              translateX(-8px)
              translateY(0)
              scale(1.01);
            filter: blur(1px);
          }

          100% {
            opacity: 1;
            transform:
              translateX(0)
              translateY(0)
              scale(1);
            filter: blur(0);
          }
        }


        /* =========================================
           CENTER IMAGE — 3D FLIP
        ========================================== */

        @keyframes rioImageFlip {
          0% {
            opacity: 0;
            transform:
              perspective(1600px)
              rotateY(-105deg)
              rotateX(5deg)
              translateY(35px)
              scale(.87);
            filter: blur(12px);
          }

          35% {
            opacity: .65;
            filter: blur(6px);
          }

          68% {
            opacity: 1;
            transform:
              perspective(1600px)
              rotateY(10deg)
              rotateX(-1deg)
              translateY(-4px)
              scale(1.025);
            filter: blur(1px);
          }

          84% {
            transform:
              perspective(1600px)
              rotateY(-3deg)
              rotateX(0deg)
              translateY(1px)
              scale(.995);
          }

          100% {
            opacity: 1;
            transform:
              perspective(1600px)
              rotateY(0deg)
              rotateX(0deg)
              translateY(0)
              scale(1);
            filter: blur(0);
          }
        }


        /* =========================================
           IMAGE TEXT / TAG
        ========================================== */

        @keyframes rioImageText {
          0% {
            opacity: 0;
            transform: translateY(22px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rioTagReveal {
          0% {
            opacity: 0;
            transform:
              translateX(25px)
              translateY(12px)
              scale(.94);
          }

          100% {
            opacity: 1;
            transform:
              translateX(0)
              translateY(0)
              scale(1);
          }
        }


        /* =========================================
           BACKGROUND MOTION
        ========================================== */

        @keyframes rioGlowOne {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(18px, -16px, 0) scale(1.08);
          }
        }

        @keyframes rioGlowTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-18px, 15px, 0) scale(1.07);
          }
        }


        /* =========================================
           CLASSES
        ========================================== */

        .rio-header-show {
          animation:
            rioHeaderReveal 1.35s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .rio-left-card-show {
          animation:
            rioCardLeft 1.35s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .rio-right-card-show {
          animation:
            rioCardRight 1.35s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .rio-center-image-show {
          transform-origin: center center;

          animation:
            rioImageFlip 1.7s
            cubic-bezier(.16,1,.3,1)
            forwards;

          will-change:
            transform,
            opacity,
            filter;
        }

        .rio-image-text-show {
          opacity: 0;

          animation:
            rioImageText .9s
            cubic-bezier(.16,1,.3,1)
            1.05s
            forwards;
        }

        .rio-tag-show {
          opacity: 0;

          animation:
            rioTagReveal .9s
            cubic-bezier(.16,1,.3,1)
            1.25s
            forwards;
        }

        .rio-glow-one {
          animation: rioGlowOne 10s ease-in-out infinite;
        }

        .rio-glow-two {
          animation: rioGlowTwo 12s ease-in-out infinite;
        }


        /* =========================================
           CARD HOVER
        ========================================== */

        .rio-advantage-card {
          position: relative;
          overflow: hidden;

          transition:
            transform .55s cubic-bezier(.16,1,.3,1),
            box-shadow .55s cubic-bezier(.16,1,.3,1),
            background-color .45s ease,
            border-color .45s ease;
        }

        .rio-advantage-card::after {
          content: "";

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              120deg,
              transparent 30%,
              rgba(255,255,255,.7) 50%,
              transparent 70%
            );

          transform: translateX(-120%);

          transition:
            transform .85s
            cubic-bezier(.16,1,.3,1);

          pointer-events: none;
        }

        .rio-advantage-card:hover {
          transform:
            translateY(-7px)
            scale(1.012);

          background: rgba(255,255,255,.97);

          border-color:
            rgba(23,107,67,.18);

          box-shadow:
            0 22px 55px
            rgba(20,60,40,.11);
        }

        .rio-advantage-card:hover::after {
          transform: translateX(120%);
        }


        /* =========================================
           ICON HOVER
        ========================================== */

        .rio-advantage-icon {
          transition:
            transform .5s cubic-bezier(.16,1,.3,1),
            box-shadow .5s ease;
        }

        .rio-advantage-card:hover
        .rio-advantage-icon {
          transform:
            scale(1.12)
            rotate(-6deg);

          box-shadow:
            0 12px 28px
            rgba(20,60,40,.10);
        }


        /* =========================================
           CENTER IMAGE HOVER
        ========================================== */

        .rio-center-photo {
          transition:
            transform 1s
            cubic-bezier(.16,1,.3,1);
        }

        .rio-center-wrapper:hover
        .rio-center-photo {
          transform: scale(1.055);
        }

        .rio-center-wrapper {
          transition:
            transform .7s
            cubic-bezier(.16,1,.3,1),
            box-shadow .7s ease;
        }

        .rio-center-wrapper:hover {
          transform:
            perspective(1200px)
            rotateY(-2deg)
            rotateX(1deg)
            translateY(-6px);

          box-shadow:
            0 30px 70px
            rgba(20,60,40,.20);
        }


        /* =========================================
           MOBILE
        ========================================== */

        @media (max-width: 1023px) {

          @keyframes rioCardLeft {
            0% {
              opacity: 0;
              transform:
                translateY(50px)
                scale(.96);
              filter: blur(8px);
            }

            100% {
              opacity: 1;
              transform:
                translateY(0)
                scale(1);
              filter: blur(0);
            }
          }

          @keyframes rioCardRight {
            0% {
              opacity: 0;
              transform:
                translateY(50px)
                scale(.96);
              filter: blur(8px);
            }

            100% {
              opacity: 1;
              transform:
                translateY(0)
                scale(1);
              filter: blur(0);
            }
          }

          @keyframes rioImageFlip {
            0% {
              opacity: 0;
              transform:
                perspective(1200px)
                rotateY(-90deg)
                scale(.9);
              filter: blur(10px);
            }

            70% {
              opacity: 1;
              transform:
                perspective(1200px)
                rotateY(6deg)
                scale(1.02);
              filter: blur(1px);
            }

            100% {
              opacity: 1;
              transform:
                perspective(1200px)
                rotateY(0deg)
                scale(1);
              filter: blur(0);
            }
          }
        }


        /* =========================================
           REDUCED MOTION
        ========================================== */

        @media (prefers-reduced-motion: reduce) {
          .rio-header-show,
          .rio-left-card-show,
          .rio-right-card-show,
          .rio-center-image-show,
          .rio-image-text-show,
          .rio-tag-show,
          .rio-glow-one,
          .rio-glow-two {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#F3F5F1] py-12 sm:py-14 lg:py-16"
      >
        {/* BLUE GLOW */}
        <div className="rio-glow-one absolute -left-[120px] top-[14%] w-[300px] h-[300px] rounded-full bg-[#0284C7]/[0.06] blur-[90px] pointer-events-none" />

        {/* ORANGE GLOW */}
        <div className="rio-glow-two absolute -right-[130px] bottom-[3%] w-[330px] h-[330px] rounded-full bg-[#F58220]/[0.07] blur-[95px] pointer-events-none" />

        {/* DOT PATTERN */}
        <div
          className="absolute right-[4%] top-[8%] w-[95px] h-[95px] opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(23,107,67,.42) 1.3px, transparent 1.3px)",
            backgroundSize: "14px 14px",
          }}
        />

        <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div
            className={`max-w-[900px] mx-auto text-center ${
              visible
                ? "rio-header-show"
                : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="w-7 h-[2px] bg-[#176B43]" />
              <span className="w-3 h-[2px] bg-[#0284C7]" />
              <span className="w-3 h-[2px] bg-[#F58220]" />
            </div>

            <p className="mt-3 text-[12px] sm:text-[13px] uppercase tracking-[1.9px] font-semibold text-[#176B43]">
              Why Farmers Choose Rio
            </p>

            <h2 className="mt-3 text-[35px] sm:text-[43px] lg:text-[48px] leading-[1.08] tracking-[-0.7px] font-bold text-[#173E2A]">
              Built Around Better Agriculture

              <span className="block text-[#0284C7]">
                and Stronger Farmer Support
              </span>
            </h2>

            <p className="mt-4 max-w-[780px] mx-auto text-[16px] sm:text-[17px] leading-7 text-[#46594E]">
              Rio Crop Science combines practical solutions, science,
              sustainability and farmer-focused support across the crop
              journey.
            </p>
          </div>

          {/* MAIN */}
          <div className="mt-10 lg:mt-12 grid lg:grid-cols-[1fr_.78fr_1fr] gap-6 lg:gap-8 xl:gap-10 items-center">

            {/* ================= LEFT ================= */}
            <div className="space-y-4">
              {points.slice(0, 3).map((point, index) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    style={{
                      animationDelay:
                        `${0.25 + index * 0.22}s`,
                    }}
                    className={`rio-advantage-card border border-[#173E2A]/10 bg-white/70 px-5 py-5 ${
                      visible
                        ? "rio-left-card-show"
                        : "opacity-0"
                    }`}
                  >
                    <div className="relative z-10 flex items-start gap-4">
                      <div
                        className="rio-advantage-icon w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor:
                            `${point.color}12`,
                          color: point.color,
                        }}
                      >
                        <Icon
                          size={21}
                          strokeWidth={1.7}
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <span
                            className="text-[12px] font-semibold"
                            style={{
                              color: point.color,
                            }}
                          >
                            {point.number}
                          </span>

                          <h3 className="text-[18px] sm:text-[19px] font-semibold text-[#21362A]">
                            {point.title}
                          </h3>
                        </div>

                        <p className="mt-2 text-[15px] sm:text-[16px] leading-7 text-[#4B5D52]">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ================= CENTER IMAGE ================= */}
            <div
              className={`relative ${
                visible
                  ? "rio-center-image-show"
                  : "opacity-0"
              }`}
              style={{
                animationDelay: ".55s",
              }}
            >
              <div className="relative max-w-[360px] mx-auto">

                {/* BLUE PATCH */}
                <div className="absolute -right-3 top-5 w-[90px] h-[90px] bg-[#0284C7]/10" />

                {/* ORANGE PATCH */}
                <div className="absolute -left-3 bottom-5 w-[80px] h-[80px] bg-[#F58220]/12" />

                {/* IMAGE */}
                <div className="rio-center-wrapper relative overflow-hidden h-[380px] sm:h-[440px] lg:h-[490px] shadow-[0_22px_55px_rgba(20,60,40,.15)]">
                  <img
                    src="https://i.pinimg.com/736x/bf/a9/7d/bfa97d1557ccc265b9d5fe02e36db217.jpg"
                    alt="Rio Crop Science agriculture"
                    className="rio-center-photo w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102D21]/75 via-transparent to-transparent" />

                  <div
                    className={
                      visible
                        ? "rio-image-text-show absolute left-5 right-5 bottom-5"
                        : "opacity-0 absolute left-5 right-5 bottom-5"
                    }
                  >
                    <p className="text-[12px] uppercase tracking-[1.6px] font-medium text-white/65">
                      Rio Crop Science
                    </p>

                    <p className="mt-1 text-[20px] sm:text-[22px] leading-snug font-semibold text-white">
                      Better Solutions for Better Agriculture
                    </p>
                  </div>
                </div>

                {/* FLOATING TAG */}
                <div
                  className={`absolute -right-2 sm:-right-4 bottom-[70px] bg-[#173E2A] px-4 py-3 shadow-[0_12px_30px_rgba(20,60,40,.18)] ${
                    visible
                      ? "rio-tag-show"
                      : "opacity-0"
                  }`}
                >
                  <p className="text-[12px] font-medium text-[#8FD16C]">
                    Science • Support
                  </p>

                  <p className="mt-1 text-[15px] font-semibold text-white">
                    Farmer Focus
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="space-y-4">
              {points.slice(3).map((point, index) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    style={{
                      animationDelay:
                        `${0.25 + index * 0.22}s`,
                    }}
                    className={`rio-advantage-card border border-[#173E2A]/10 bg-white/70 px-5 py-5 ${
                      visible
                        ? "rio-right-card-show"
                        : "opacity-0"
                    }`}
                  >
                    <div className="relative z-10 flex items-start gap-4">
                      <div
                        className="rio-advantage-icon w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor:
                            `${point.color}12`,
                          color: point.color,
                        }}
                      >
                        <Icon
                          size={21}
                          strokeWidth={1.7}
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <span
                            className="text-[12px] font-semibold"
                            style={{
                              color: point.color,
                            }}
                          >
                            {point.number}
                          </span>

                          <h3 className="text-[18px] sm:text-[19px] font-semibold text-[#21362A]">
                            {point.title}
                          </h3>
                        </div>

                        <p className="mt-2 text-[15px] sm:text-[16px] leading-7 text-[#4B5D52]">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-[#173E2A]/10 pt-5">
            <p className="text-[15px] sm:text-[16px] font-medium text-[#405248]">
              Better solutions. Better support. Better agriculture.
            </p>

            <div className="flex items-center gap-2">
              <span className="w-8 h-[3px] bg-[#176B43]" />
              <span className="w-5 h-[3px] bg-[#0284C7]" />
              <span className="w-5 h-[3px] bg-[#F58220]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyFarmersChooseRio;