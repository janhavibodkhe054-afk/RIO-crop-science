import React, { useEffect, useRef, useState } from "react";
import {
  FlaskConical,
  Leaf,
  Users,
  Boxes,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: FlaskConical,
    title: "Scientific Innovation",
    text: "Research-driven agricultural solutions designed to support crop performance.",
    color: "#0284C7",
  },
  {
    icon: Leaf,
    title: "Sustainable Thinking",
    text: "A strong focus on soil health, responsible farming and environmental care.",
    color: "#176B43",
  },
  {
    icon: Users,
    title: "Farmer Focus",
    text: "Solutions and support shaped around practical farmer needs.",
    color: "#F58220",
  },
  {
    icon: Boxes,
    title: "Product Expertise",
    text: "A diverse portfolio covering nutrition, growth, soil health and crop protection.",
    color: "#176B43",
  },
];

const WhyServicesMatter = () => {
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
        rootMargin: "0px 0px -45px 0px",
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
        @keyframes whyLeftIn {
          from {
            opacity: 0;
            transform: translateX(-48px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes whyRightIn {
          from {
            opacity: 0;
            transform: translateX(48px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes whyItemIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes whyGlow {
          0%, 100% {
            transform: translate(0, 0);
            opacity: .45;
          }

          50% {
            transform: translate(14px, -10px);
            opacity: .7;
          }
        }

        .why-left-show {
          animation: whyLeftIn .9s cubic-bezier(.16,1,.3,1) forwards;
        }

        .why-right-show {
          animation: whyRightIn .9s cubic-bezier(.16,1,.3,1) forwards;
        }

        .why-item-show {
          animation: whyItemIn .65s ease forwards;
        }

        .why-glow {
          animation: whyGlow 8s ease-in-out infinite;
        }

        .why-pillar {
          transition:
            transform .35s ease,
            background-color .35s ease,
            border-color .35s ease;
        }

        .why-pillar:hover {
          transform: translateX(5px);
          background: rgba(255,255,255,.07);
          border-color: rgba(255,255,255,.16);
        }

        @media (prefers-reduced-motion: reduce) {
          .why-left-show,
          .why-right-show,
          .why-item-show,
          .why-glow {
            animation: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#102D21] py-10 sm:py-12 lg:py-14"
      >
        {/* BACKGROUND GLOWS */}
        <div className="why-glow absolute -top-[120px] right-[5%] w-[320px] h-[320px] rounded-full bg-[#0284C7]/10 blur-[100px] pointer-events-none" />

        <div className="absolute -bottom-[120px] left-[4%] w-[320px] h-[320px] rounded-full bg-[#176B43]/20 blur-[100px] pointer-events-none" />

        <div className="absolute right-[-30px] bottom-[-35px] text-[150px] sm:text-[210px] font-semibold leading-none text-white/[0.025] pointer-events-none select-none">
          RCS
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-8 lg:gap-12 xl:gap-14 items-center">

            {/* LEFT */}
            <div
              className={
                visible ? "why-left-show" : "opacity-0"
              }
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-[2px] bg-[#79C46B]" />
                <span className="w-3 h-[2px] bg-[#0284C7]" />
                <span className="w-3 h-[2px] bg-[#F58220]" />

                <span className="text-[12px] sm:text-[13px] uppercase tracking-[1.8px] font-medium text-[#86D27A]">
                  Why Our Services Matter
                </span>
              </div>

              <h2 className="mt-3 max-w-[620px] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.12] tracking-[-0.4px] font-semibold text-white">
                Supporting Productivity
                <span className="block text-[#56BDF0]">
                  Without Losing Sight of Sustainability
                </span>
              </h2>

              <p className="mt-5 max-w-[590px] text-[16px] sm:text-[17px] leading-7 text-white/80">
                Agriculture is more than achieving a single harvest. It is
                about maintaining healthy soil, supporting crops and building
                farming practices that remain productive over time.
              </p>

              <p className="mt-3 max-w-[590px] text-[15px] sm:text-[16px] leading-7 text-white/62">
                Rio Crop Science brings together science, sustainability,
                farmer understanding and product expertise to support better
                agricultural decisions.
              </p>

              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-2.5 bg-[#F58220] px-5 py-3.5 text-[14px] sm:text-[15px] font-semibold text-white hover:bg-[#0284C7] transition-all duration-300"
              >
                Talk to Our Team

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </Link>
            </div>

            {/* RIGHT PILLARS */}
            <div
              className={
                visible ? "why-right-show" : "opacity-0"
              }
            >
              <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
                {pillars.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      style={{
                        animationDelay: `${index * 0.09}s`,
                      }}
                      className={`why-pillar border border-white/10 bg-white/[0.04] p-5 sm:p-6 ${
                        visible ? "why-item-show" : "opacity-0"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: `${item.color}18`,
                            color: item.color,
                          }}
                        >
                          <Icon size={21} strokeWidth={1.7} />
                        </div>

                        <span
                          className="text-[11px] sm:text-[12px] font-medium"
                          style={{
                            color: item.color,
                          }}
                        >
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-5 text-[20px] sm:text-[22px] font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 text-[14px] sm:text-[15px] leading-6 text-white/68">
                        {item.text}
                      </p>

                      <div
                        className="mt-5 w-8 h-[2px]"
                        style={{
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* BOTTOM STATEMENT */}
              <div className="mt-4 border-l-[3px] border-[#F58220] bg-white/[0.04] px-4 sm:px-5 py-3.5">
                <p className="text-[14px] sm:text-[15px] leading-6 font-medium text-white/78">
                  Better crops today. Healthier agricultural systems for
                  tomorrow.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WhyServicesMatter;