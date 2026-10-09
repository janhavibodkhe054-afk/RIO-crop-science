import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  Lightbulb,
  HandHelping,
  Leaf,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    text: "Understanding crop and agricultural requirements.",
    color: "#176B43",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Recommend",
    text: "Identifying suitable solutions from our product portfolio.",
    color: "#0284C7",
  },
  {
    number: "03",
    icon: HandHelping,
    title: "Support",
    text: "Providing product information and application guidance.",
    color: "#F58220",
  },
  {
    number: "04",
    icon: Leaf,
    title: "Grow Sustainably",
    text: "Supporting better crop performance while keeping sustainability in focus.",
    color: "#176B43",
  },
];

const OurApproach = () => {
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
        @keyframes approachHeaderIn {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes approachStepIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes approachLineGrow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes approachPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.06);
          }
        }

        .approach-header-show {
          animation: approachHeaderIn .75s ease forwards;
        }

        .approach-step-show {
          animation: approachStepIn .65s cubic-bezier(.16,1,.3,1) forwards;
        }

        .approach-line-show {
          transform-origin: left;
          animation: approachLineGrow 1s ease forwards;
        }

        .approach-icon {
          animation: approachPulse 5s ease-in-out infinite;
        }

        .approach-step {
          transition:
            transform .3s ease,
            background-color .3s ease,
            border-color .3s ease;
        }

        .approach-step:hover {
          transform: translateY(-4px);
          background: #ffffff;
          border-color: rgba(23,107,67,.16);
        }

        @media (prefers-reduced-motion: reduce) {
          .approach-header-show,
          .approach-step-show,
          .approach-line-show,
          .approach-icon {
            animation: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#F6F8F4] py-10 sm:py-12 lg:py-14"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute -right-[120px] top-[-60px] w-[260px] h-[260px] rounded-full bg-[#F58220]/08 blur-3xl pointer-events-none" />

        <div className="absolute -left-[120px] bottom-[-110px] w-[280px] h-[280px] rounded-full bg-[#0284C7]/[0.05] blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div
            className={`max-w-[820px] mx-auto text-center ${
              visible ? "approach-header-show" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-7 h-[2px] bg-[#176B43]" />
              <span className="w-3 h-[2px] bg-[#0284C7]" />
              <span className="w-3 h-[2px] bg-[#F58220]" />
            </div>

            <p className="text-[12px] sm:text-[13px] uppercase tracking-[1.9px] font-medium text-[#176B43]">
              Our Approach
            </p>

            <h2 className="mt-2 text-[34px] sm:text-[40px] lg:text-[44px] leading-[1.12] tracking-[-0.4px] font-semibold text-[#173E2A]">
              Our Approach to
              <span className="text-[#0284C7]"> Better Agriculture</span>
            </h2>

            <p className="mt-3 max-w-[690px] mx-auto text-[16px] sm:text-[17px] leading-7 text-[#46584E]">
              A clear process that connects crop understanding, suitable
              solutions, practical support and sustainable growth.
            </p>
          </div>

          {/* DESKTOP TIMELINE */}
          <div className="hidden lg:block relative mt-11">
            {/* CONNECTING LINE */}
            <div className="absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-[#173E2A]/10" />

            <div
              className={`absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#176B43] via-[#0284C7] to-[#F58220] ${
                visible ? "approach-line-show" : "opacity-0"
              }`}
            />

            <div className="grid grid-cols-4 gap-5">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    style={{
                      animationDelay: `${index * 0.12}s`,
                    }}
                    className={`approach-step relative border border-[#173E2A]/10 bg-white/55 px-5 pt-7 pb-6 text-center ${
                      visible ? "approach-step-show" : "opacity-0"
                    }`}
                  >
                    {/* NUMBER */}
                    <span
                      className="text-[12px] font-medium"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>

                    {/* ICON */}
                    <div
                      className="approach-icon relative z-10 mx-auto mt-3 w-14 h-14 rounded-full bg-white border flex items-center justify-center shadow-[0_8px_24px_rgba(20,60,40,.08)]"
                      style={{
                        color: step.color,
                        borderColor: `${step.color}35`,
                      }}
                    >
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-5 text-[21px] sm:text-[22px] font-semibold text-[#24372D]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[14px] sm:text-[15px] leading-6 text-[#4B5D52]">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE / TABLET TIMELINE */}
          <div className="lg:hidden relative mt-9">
            <div className="absolute left-[23px] sm:left-[25px] top-4 bottom-4 w-px bg-[#173E2A]/12" />

            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                    className={`relative grid grid-cols-[48px_1fr] sm:grid-cols-[52px_1fr] gap-4 ${
                      visible ? "approach-step-show" : "opacity-0"
                    }`}
                  >
                    {/* ICON */}
                    <div className="relative z-10">
                      <div
                        className="w-12 h-12 rounded-full bg-[#F6F8F4] border flex items-center justify-center"
                        style={{
                          color: step.color,
                          borderColor: `${step.color}45`,
                        }}
                      >
                        <Icon size={20} strokeWidth={1.7} />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="border-b border-[#173E2A]/10 pb-4">
                      <span
                        className="text-[11px] font-medium"
                        style={{ color: step.color }}
                      >
                        {step.number}
                      </span>

                      <h3 className="mt-1 text-[20px] sm:text-[22px] font-semibold text-[#24372D]">
                        {step.title}
                      </h3>

                      <p className="mt-1.5 text-[15px] sm:text-[16px] leading-6 text-[#4B5D52]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurApproach;