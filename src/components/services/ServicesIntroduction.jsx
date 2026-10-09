import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  FlaskConical,
  Droplets,
  Sprout,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const supportSteps = [
  {
    number: "01",
    icon: Search,
    title: "Understand the Need",
    text: "Identify crop stage, soil condition and the farmer’s immediate requirement.",
    color: "#176B43",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Recommend the Solution",
    text: "Connect the requirement with an appropriate Rio Crop Science solution.",
    color: "#0284C7",
  },
  {
    number: "03",
    icon: Droplets,
    title: "Guide the Application",
    text: "Support farmers with practical product and application guidance.",
    color: "#F58220",
  },
  {
    number: "04",
    icon: Sprout,
    title: "Support Better Outcomes",
    text: "Keep the focus on healthier crops, better soil and responsible farming.",
    color: "#176B43",
  },
];

const ServicesIntroduction = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
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
        @keyframes rioIntroLeft {
          from {
            opacity: 0;
            transform: translateX(-70px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes rioIntroRight {
          from {
            opacity: 0;
            transform: translateX(70px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes rioIntroUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rioImageFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes rioGlowMove {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(18px, -12px);
          }
        }

        @keyframes rioAccentPulse {
          0%, 100% {
            opacity: .55;
            transform: scale(1);
          }
          50% {
            opacity: .85;
            transform: scale(1.05);
          }
        }

        .rio-intro-left-show {
          animation: rioIntroLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .rio-intro-right-show {
          animation: rioIntroRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .rio-intro-step-show {
          animation: rioIntroUp .75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .rio-image-float {
          animation: rioImageFloat 7s ease-in-out infinite;
        }

        .rio-glow-move {
          animation: rioGlowMove 9s ease-in-out infinite;
        }

        .rio-accent-pulse {
          animation: rioAccentPulse 6s ease-in-out infinite;
        }

        .rio-support-step {
          transition:
            transform .35s ease,
            background-color .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .rio-support-step:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,.07);
          border-color: rgba(255,255,255,.18);
          box-shadow: 0 16px 32px rgba(0,0,0,.10);
        }

        .rio-support-icon {
          transition: transform .35s ease;
        }

        .rio-support-step:hover .rio-support-icon {
          transform: scale(1.08) rotate(-4deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .rio-intro-left-show,
          .rio-intro-right-show,
          .rio-intro-step-show,
          .rio-image-float,
          .rio-glow-move,
          .rio-accent-pulse {
            animation: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#102D21] py-12 sm:py-14 lg:py-16 xl:py-18"
      >
        {/* BLUE GLOW */}
        <div className="rio-glow-move absolute -top-[140px] right-[4%] w-[360px] h-[360px] rounded-full bg-[#0284C7]/10 blur-[110px] pointer-events-none" />

        {/* GREEN GLOW */}
        <div className="absolute -bottom-[140px] left-[4%] w-[360px] h-[360px] rounded-full bg-[#176B43]/20 blur-[110px] pointer-events-none" />

        {/* ORANGE GLOW */}
        <div className="absolute top-[25%] left-[42%] w-[230px] h-[230px] rounded-full bg-[#F58220]/[0.045] blur-[95px] pointer-events-none" />

        {/* WATERMARK */}
        <div className="absolute right-[-30px] bottom-[-50px] text-[150px] sm:text-[210px] lg:text-[260px] leading-none font-bold text-white/[0.022] select-none pointer-events-none">
          RCS
        </div>

        <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.94fr_1.06fr] gap-9 lg:gap-12 xl:gap-16 items-center">

            {/* ================= LEFT VISUAL ================= */}
            <div
              className={`relative ${
                visible ? "rio-intro-left-show" : "opacity-0"
              }`}
            >
              <div className="relative max-w-[560px] mx-auto lg:mx-0">

                {/* BACK FRAME */}
                <div className="absolute -left-3 -top-3 w-[92%] h-[92%] rounded-[10px_85px_10px_85px] border border-white/15" />

                {/* BLUE ACCENT */}
                <div className="rio-accent-pulse absolute -right-2 top-[20px] w-[70px] h-[70px] rounded-full bg-[#0284C7]/16" />

                {/* IMAGE */}
                <div className="rio-image-float relative overflow-hidden rounded-[8px_85px_8px_85px] h-[330px] sm:h-[400px] lg:h-[455px] border-[6px] border-white/[0.10]">
                  <img
                    src="/service2.jpg"
                    alt="Rio Crop Science farmer support and crop guidance"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#092218]/85 via-[#092218]/15 to-transparent" />

                  {/* TOP TAG */}
                  <div className="absolute left-4 sm:left-5 top-4 sm:top-5 bg-[#173E2A]/90 backdrop-blur-md border-l-[4px] border-[#0284C7] px-4 py-3">
                    <p className="text-[9px] uppercase tracking-[1.5px] font-semibold text-[#61C6F4]">
                      Our Approach
                    </p>

                    <p className="mt-1 text-[14px] sm:text-[16px] font-semibold text-white">
                      Practical Farmer Support
                    </p>
                  </div>

                  {/* BOTTOM IMAGE TEXT */}
                  <div className="absolute left-4 sm:left-5 right-4 sm:right-5 bottom-5">
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-[1.7px] font-semibold text-white/55">
                      Rio Crop Science
                    </p>

                    <p className="mt-1 max-w-[340px] text-[17px] sm:text-[20px] leading-snug font-semibold text-white">
                      Better decisions begin with better understanding.
                    </p>
                  </div>
                </div>

                {/* ORANGE FLOATING BLOCK */}
                <div className="absolute -right-1 sm:-right-5 bottom-[-18px] w-[190px] sm:w-[230px] bg-[#F58220] px-4 py-4 sm:px-5 sm:py-5 shadow-[0_14px_32px_rgba(0,0,0,.20)]">
                  <p className="text-[8px] sm:text-[9px] uppercase tracking-[1.5px] font-semibold text-white/70">
                    Support Focus
                  </p>

                  <p className="mt-1 text-[17px] sm:text-[20px] leading-tight font-bold text-white">
                    Crop Need
                    <br />
                    to Better Outcome
                  </p>
                </div>

                
              </div>
            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div
              className={`${
                visible ? "rio-intro-right-show" : "opacity-0"
              }`}
            >
              {/* LABEL */}
              <div className="inline-flex items-center gap-2 border border-[#F58220]/40 px-3 py-2">
                <span className="w-5 h-[2px] bg-[#F58220]" />

                <span className="text-[10px] sm:text-[11px] uppercase tracking-[1.8px] font-semibold text-[#F58220]">
                  More Than Agricultural Inputs
                </span>
              </div>

              {/* HEADING */}
              <h2 className="mt-4 max-w-[650px] text-[29px] sm:text-[36px] lg:text-[41px] leading-[1.1] tracking-[-0.5px] font-bold text-white">
                More Than Products.
                <span className="block mt-1 text-[#38A8E0]">
                  We Support Your Farming Journey.
                </span>
              </h2>

              {/* CONTENT */}
              <p className="mt-5 max-w-[680px] text-[14px] sm:text-[15px] leading-7 text-white/75">
                We help farmers connect crop requirements with practical
                solutions for nutrition, soil health, growth and crop
                protection.
              </p>

              <p className="mt-3 max-w-[680px] text-[13px] sm:text-[14px] leading-6 text-white/55">
                Understand the need, recommend the right solution and support
                responsible application.
              </p>

              {/* SUPPORT STEPS */}
              <div className="mt-7 grid sm:grid-cols-2 gap-3">
                {supportSteps.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      style={{
                        animationDelay: `${0.18 + index * 0.12}s`,
                      }}
                      className={`rio-support-step border border-white/10 bg-white/[0.035] p-4 sm:p-5 ${
                        visible ? "rio-intro-step-show" : "opacity-0"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="rio-support-icon w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: `${item.color}18`,
                            color: item.color,
                          }}
                        >
                          <Icon size={18} strokeWidth={1.8} />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span
                              className="text-[9px] font-semibold"
                              style={{
                                color: item.color,
                              }}
                            >
                              {item.number}
                            </span>

                            <h3 className="text-[14px] sm:text-[15px] font-semibold text-white">
                              {item.title}
                            </h3>
                          </div>

                          <p className="mt-1.5 text-[11px] sm:text-[12px] leading-5 text-white/55">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* BOTTOM ROW */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-[3px] bg-[#176B43]" />
                  <span className="w-4 h-[3px] bg-[#0284C7]" />
                  <span className="w-4 h-[3px] bg-[#F58220]" />
                </div>

                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-[#0284C7] px-5 py-3 text-[13px] font-semibold text-white hover:bg-[#F58220] transition-all duration-300"
                >
                  Talk to Our Team

                  <ArrowUpRight
                    size={15}
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

export default ServicesIntroduction;