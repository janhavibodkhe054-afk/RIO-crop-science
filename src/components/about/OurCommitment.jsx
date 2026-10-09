import React, { useEffect, useRef, useState } from "react";
import {
  Sprout,
  ShieldCheck,
  Leaf,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const commitments = [
  {
    icon: Sprout,
    title: "Soil Health",
    text: "Supporting healthier soil and long-term agricultural productivity.",
    color: "#176B43",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Protection",
    text: "Encouraging thoughtful crop protection with environmental responsibility.",
    color: "#0284C7",
  },
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    text: "Building agricultural practices with a greener future in mind.",
    color: "#F58220",
  },
];

const OurCommitment = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes commitmentLeft {
          from {
            opacity: 0;
            transform: translateX(-22px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes commitmentRight {
          from {
            opacity: 0;
            transform: translateX(22px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes commitmentUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes commitmentFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .commitment-left-show {
          animation: commitmentLeft .75s ease forwards;
        }

        .commitment-right-show {
          animation: commitmentRight .8s ease forwards;
        }

        .commitment-item-show {
          animation: commitmentUp .65s ease forwards;
        }

        .commitment-image-float {
          animation: commitmentFloat 7s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#EEF4EE] py-12 sm:py-14 lg:py-16"
      >
        {/* ORANGE PATCH */}
        <div className="absolute -right-[120px] top-[60px] w-[270px] h-[300px] rounded-[47%_53%_42%_58%/53%_42%_58%_47%] bg-[#F58220]/10 pointer-events-none" />

        {/* BLUE GLOW */}
        <div className="absolute -left-[100px] bottom-[-100px] w-[280px] h-[280px] rounded-full bg-[#0284C7]/[0.05] blur-3xl pointer-events-none" />

        {/* DOTS */}
        <div
          className="absolute right-8 top-8 w-[110px] h-[110px] opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(245,130,32,.42) 1.2px, transparent 1.2px)",
            backgroundSize: "15px 15px",
          }}
        />

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-[1.08fr_.92fr] gap-8 lg:gap-12 xl:gap-14 items-center">

            {/* LEFT CONTENT */}
            <div
              className={
                visible ? "commitment-left-show" : "opacity-0"
              }
            >
              {/* LABEL */}
              <div className="flex items-center gap-3">
                <span className="w-7 h-[2px] bg-[#176B43]" />
                <span className="w-3 h-[2px] bg-[#F58220]" />

                <span className="text-[11px] sm:text-[12px] uppercase tracking-[2.1px] font-bold text-[#176B43]">
                  Our Commitment
                </span>
              </div>

              {/* HEADING */}
              <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.1] tracking-[-1px] font-bold text-[#173E2A]">
                Our Commitment to
                <span className="block text-[#0284C7]">
                  Sustainable Agriculture
                </span>
              </h2>

              {/* TEXT */}
              <div className="mt-5 max-w-[680px] space-y-3">
                <p className="text-[15px] sm:text-[16px] leading-7 text-[#536158]">
                  Sustainability is at the heart of our operations. Our
                  approach focuses on developing agricultural solutions that
                  support soil health, responsible crop protection and
                  environmental stewardship.
                </p>

                <p className="text-[15px] sm:text-[16px] leading-7 font-semibold text-[#173E2A]">
                  Our objective is to help cultivate a greener future —
                  <span className="text-[#F58220]">
                    {" "}
                    one harvest at a time.
                  </span>
                </p>
              </div>

              {/* COMMITMENT POINTS */}
              <div className="mt-7 border-t border-[#173E2A]/10">
                {commitments.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                      className={`grid grid-cols-[42px_1fr] gap-4 items-start py-4 border-b border-[#173E2A]/10 ${
                        visible
                          ? "commitment-item-show"
                          : "opacity-0"
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center"
                        style={{
                          color: item.color,
                        }}
                      >
                        <Icon size={18} strokeWidth={1.8} />
                      </div>

                      <div>
                        <h3 className="text-[17px] sm:text-[18px] font-bold text-[#173E2A]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-[13px] sm:text-[14px] leading-6 text-[#667269]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-6">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2.5 rounded-lg bg-[#176B43] px-5 py-3 text-[13px] sm:text-[15px] font-semibold text-white hover:bg-[#0284C7] transition-all duration-300"
                >
                  Explore Services

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </Link>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div
              className={`relative ${
                visible ? "commitment-right-show" : "opacity-0"
              }`}
            >
              <div className="relative max-w-[470px] mx-auto lg:ml-auto">

                {/* BACK SHAPE */}
                <div className="absolute -right-3 -top-3 w-[78%] h-[78%] bg-[#F58220]/12 rounded-[42px_90px_42px_90px]" />

                {/* IMAGE */}
                <div className="commitment-image-float relative overflow-hidden rounded-[70px_24px_70px_24px] h-[350px] sm:h-[410px] lg:h-[450px] shadow-[0_18px_45px_rgba(20,60,40,.13)]">
                  <img
                    src="/about2.png"
                    alt="Rio Crop Science commitment to sustainable agriculture"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D1D]/65 via-transparent to-transparent" />

                  {/* IMAGE TEXT */}
                  <div className="absolute left-5 right-5 bottom-5">
                    <p className="text-[10px] uppercase tracking-[1.8px] font-bold text-white/65">
                      Greener Agriculture
                    </p>

                    <p className="mt-1 text-[19px] sm:text-[21px] font-bold text-white">
                      One Harvest at a Time
                    </p>
                  </div>
                </div>

                {/* FLOATING STAT */}
                <div className="absolute -left-2 sm:-left-5 bottom-8 bg-[#173E2A] px-5 py-4 shadow-[0_12px_30px_rgba(15,50,32,.20)]">
                  <p className="text-[10px] uppercase tracking-[1.5px] font-bold text-[#8FD16C]">
                    Our Focus
                  </p>

                  <p className="mt-1 text-[15px] font-bold text-white">
                    Soil • Crops • Nature
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

export default OurCommitment;