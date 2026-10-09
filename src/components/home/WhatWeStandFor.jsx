import React, { useEffect, useRef, useState } from "react";
import { Leaf, FlaskConical, Sprout } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Promoting eco-friendly farming practices while supporting soil health and environmental responsibility for generations to come.",
    color: "#176B43",
    bg: "#F1F7F3",
  },
  {
    icon: FlaskConical,
    title: "Scientific Innovation",
    description:
      "Developing advanced, research-driven agricultural solutions and bio-products designed to support optimal crop performance.",
    color: "#1A73B8",
    bg: "#F1F7FC",
  },
  {
    icon: Sprout,
    title: "Farmer-Centric Approach",
    description:
      "Empowering farming communities with trusted products, expert knowledge, and continuous guidance focused on their real needs.",
    color: "#F58220",
    bg: "#FFF6EE",
  },
];

const WhatWeStandFor = () => {
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
        rootMargin: "0px 0px -60px 0px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes rioStandHeader {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rioStandLeft {
          0% {
            opacity: 0;
            transform: translateX(-70px) scale(.96);
          }

          70% {
            opacity: 1;
            transform: translateX(6px) scale(1.01);
          }

          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes rioStandCenter {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(.96);
          }

          70% {
            opacity: 1;
            transform: translateY(-5px) scale(1.01);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes rioStandRight {
          0% {
            opacity: 0;
            transform: translateX(70px) scale(.96);
          }

          70% {
            opacity: 1;
            transform: translateX(-6px) scale(1.01);
          }

          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes rioStandLine {
          0% {
            transform: scaleX(0);
          }

          100% {
            transform: scaleX(1);
          }
        }

        

        .rio-stand-header-show {
          animation:
            rioStandHeader 1s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .rio-stand-left-show {
          animation:
            rioStandLeft 1.2s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .rio-stand-center-show {
          animation:
            rioStandCenter 1.2s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .rio-stand-right-show {
          animation:
            rioStandRight 1.2s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .rio-stand-line {
          transform-origin: left;
          animation:
            rioStandLine .9s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .rio-orb-one {
          animation:
            rioStandOrbOne 9s
            ease-in-out
            infinite;
        }

        .rio-orb-two {
          animation:
            rioStandOrbTwo 11s
            ease-in-out
            infinite;
        }

        .rio-pillar-card {
          position: relative;
          overflow: hidden;

          transition:
            transform .5s cubic-bezier(.16,1,.3,1),
            box-shadow .5s ease,
            border-color .5s ease,
            background-color .5s ease;
        }

        .rio-pillar-card::before {
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
          transform: translateX(-130%);
          transition:
            transform .9s
            cubic-bezier(.16,1,.3,1);
          pointer-events: none;
        }

        .rio-pillar-card:hover {
          transform: translateY(-8px);
          background: #ffffff;
          box-shadow:
            0 24px 55px
            rgba(20,60,40,.10);
        }

        .rio-pillar-card:hover::before {
          transform: translateX(130%);
        }

        .rio-pillar-icon {
          transition:
            transform .5s
            cubic-bezier(.16,1,.3,1),
            box-shadow .5s ease;
        }

        .rio-pillar-card:hover
        .rio-pillar-icon {
          transform:
            scale(1.12)
            rotate(5deg);

          box-shadow:
            0 12px 26px
            rgba(20,60,40,.09);
        }

        .rio-pillar-bar {
          transition:
            width .5s
            cubic-bezier(.16,1,.3,1);
        }

        .rio-pillar-card:hover
        .rio-pillar-bar {
          width: 72px;
        }

        @media (max-width: 767px) {
          @keyframes rioStandLeft {
            0% {
              opacity: 0;
              transform: translateY(42px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes rioStandCenter {
            0% {
              opacity: 0;
              transform: translateY(42px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes rioStandRight {
            0% {
              opacity: 0;
              transform: translateY(42px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rio-stand-header-show,
          .rio-stand-left-show,
          .rio-stand-center-show,
          .rio-stand-right-show,
          .rio-stand-line,
          .rio-orb-one,
          .rio-orb-two {
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
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADING */}
          <div
            className={`max-w-[800px] mx-auto text-center ${
              visible ? "rio-stand-header-show" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-1.5 mb-4">
              <span
                className={`w-7 h-[3px] bg-[#176B43] rounded-full ${
                  visible ? "rio-stand-line" : "scale-x-0"
                }`}
              />

              <span
                className={`w-4 h-[3px] bg-[#1A73B8] rounded-full ${
                  visible ? "rio-stand-line" : "scale-x-0"
                }`}
                style={{ animationDelay: ".12s" }}
              />

              <span
                className={`w-4 h-[3px] bg-[#F58220] rounded-full ${
                  visible ? "rio-stand-line" : "scale-x-0"
                }`}
                style={{ animationDelay: ".22s" }}
              />
            </div>

            <p className="text-[12px] sm:text-[13px] uppercase tracking-[2.4px] font-semibold text-[#176B43]">
              What We Stand For
            </p>

            <h2 className="mt-3 text-[36px] sm:text-[43px] lg:text-[48px] leading-[1.1] tracking-[-0.8px] font-bold text-[#17452F]">
              Agriculture With Purpose
            </h2>

            <p className="mt-4 max-w-[720px] mx-auto text-[16px] sm:text-[17px] leading-7 text-[#4D5E54]">
              Every initiative, formulation and partnership we build is anchored
              in values that support farmers and protect the agricultural
              ecosystem.
            </p>
          </div>

          {/* PILLARS */}
          <div className="mt-10 sm:mt-12 grid md:grid-cols-3 gap-5 lg:gap-7">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              let animationClass = "";

              if (index === 0) {
                animationClass = "rio-stand-left-show";
              } else if (index === 1) {
                animationClass = "rio-stand-center-show";
              } else {
                animationClass = "rio-stand-right-show";
              }

              return (
                <div
                  key={pillar.title}
                  style={{
                    animationDelay: `${0.22 + index * 0.18}s`,
                  }}
                  className={`rio-pillar-card group border border-[#17452F]/10 bg-white p-7 sm:p-8 lg:p-9 ${
                    visible ? animationClass : "opacity-0"
                  }`}
                >
                  {/* TOP NUMBER */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="rio-pillar-icon w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundColor: pillar.bg,
                        color: pillar.color,
                      }}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <span
                      className="text-[13px] font-semibold"
                      style={{
                        color: pillar.color,
                      }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3
                    className="mt-6 text-[22px] sm:text-[24px] font-bold tracking-[-0.2px]"
                    style={{
                      color: pillar.color,
                    }}
                  >
                    {pillar.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 text-[15px] sm:text-[16px] leading-7 text-[#4D5E54]">
                    {pillar.description}
                  </p>

                  {/* BOTTOM */}
                  <div className="mt-7 pt-5 border-t border-[#17452F]/10 flex items-center justify-between">
                    <span className="text-[13px] sm:text-[14px] font-medium text-[#405248]">
                      Core Pillar
                    </span>

                    <span
                      className="rio-pillar-bar block w-9 h-[3px] rounded-full"
                      style={{
                        backgroundColor: pillar.color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeStandFor;
