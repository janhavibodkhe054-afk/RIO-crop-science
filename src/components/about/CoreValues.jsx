import React, { useEffect, useRef, useState } from "react";
import {
  Lightbulb,
  Leaf,
  ShieldCheck,
  BadgeCheck,
  Users,
  Handshake,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Driven by research and development to offer modern and effective agricultural solutions.",
    color: "#176B43",
  },
  {
    number: "02",
    icon: Leaf,
    title: "Sustainability",
    description:
      "Supporting agricultural practices that protect and enrich the environment.",
    color: "#0284C7",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Maintaining transparency, honesty and ethical practices.",
    color: "#F58220",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Quality",
    description:
      "Following strict standards for product safety and consistency.",
    color: "#176B43",
  },
  {
    number: "05",
    icon: Users,
    title: "Farmer-Centric",
    description:
      "Listening, adapting and responding to farmer needs.",
    color: "#0284C7",
  },
  {
    number: "06",
    icon: Handshake,
    title: "Collaboration",
    description:
      "Growing together with farmers, partners and our team.",
    color: "#F58220",
  },
];

const CoreValues = () => {
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
        @keyframes valuesLeftIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes valuesItemIn {
          from {
            opacity: 0;
            transform: translateX(18px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .rio-values-left {
          animation: valuesLeftIn .7s ease forwards;
        }

        .rio-value-item {
          animation: valuesItemIn .6s ease forwards;
        }

        .rio-value-dot {
          transition:
            transform .3s ease,
            box-shadow .3s ease;
        }

        .rio-value-item:hover .rio-value-dot {
          transform: scale(1.08);
          box-shadow: 0 0 0 6px rgba(23,107,67,.07);
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#FBFCFA] py-10 sm:py-12 lg:py-14"
      >
        {/* ORANGE SIDE PATCH */}
        <div className="absolute -left-[110px] top-[70px] w-[240px] h-[300px] rounded-[42%_58%_60%_40%/45%_42%_58%_55%] bg-[#F58220]/10 pointer-events-none" />

        {/* DOT PATCH */}
        <div
          className="absolute left-5 bottom-5 w-[95px] h-[95px] opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(245,130,32,.38) 1.2px, transparent 1.2px)",
            backgroundSize: "14px 14px",
          }}
        />

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-7 lg:gap-10 xl:gap-12 items-start">

            {/* LEFT */}
            <div
              className={`${
                visible ? "rio-values-left" : "opacity-0"
              }`}
            >
              <p className="text-[11px] sm:text-[12px] uppercase tracking-[2.1px] font-bold text-[#F58220]">
                Our Core Values
              </p>

              <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.1] tracking-[-1px] font-bold text-[#173E2A]">
                The Principles
                <span className="block text-[#0284C7]">
                  Behind Our Growth
                </span>
              </h2>

              {/* IMAGE */}
              <div className="relative mt-5 max-w-[470px]">
                <div className="absolute -right-2 -bottom-2 w-full h-full border-r-[3px] border-b-[3px] border-[#F58220]/50" />

                <div className="relative overflow-hidden">
                  <img
                    src="/about1.png"
                    alt="Rio Crop Science core values"
                    className="w-full h-[250px] sm:h-[290px] lg:h-[320px] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#173E2A]/50 via-transparent to-transparent" />

                  <div className="absolute left-4 bottom-4">
                    <p className="text-[9px] uppercase tracking-[1.6px] font-bold text-white/70">
                      Guided By
                    </p>

                    <p className="mt-1 text-[18px] sm:text-[20px] font-bold text-white">
                      Purpose. Responsibility. Trust.
                    </p>
                  </div>
                </div>
              </div>

              {/* STATEMENT */}
              <div className="mt-4 max-w-[490px] bg-[#173E2A] px-5 py-4 border-l-[4px] border-[#F58220]">
                <p className="text-[9px] uppercase tracking-[1.6px] font-bold text-[#F7B46C]">
                  What We Believe
                </p>

                <p className="mt-1.5 text-[14px] sm:text-[15px] leading-6 font-semibold text-white">
                  Strong values create stronger relationships with farmers,
                  partners and communities.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="mb-4">
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[2px] font-bold text-[#176B43]">
                  Values in Action
                </p>

                <h3 className="mt-1.5 text-[25px] sm:text-[29px] lg:text-[32px] font-bold text-[#173E2A]">
                  How We Work,
                  <span className="text-[#0284C7]"> Every Day</span>
                </h3>
              </div>

              {/* JOURNEY */}
              <div className="relative">
                <div className="absolute left-[20px] sm:left-[22px] top-4 bottom-4 w-px bg-[#173E2A]/10" />

                <div className="space-y-0">
                  {values.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        style={{
                          animationDelay: `${index * 0.07}s`,
                        }}
                        className={`rio-value-item relative grid grid-cols-[42px_1fr] sm:grid-cols-[46px_1fr] gap-3.5 sm:gap-4 py-3.5 sm:py-4 ${
                          visible ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {/* ICON */}
                        <div className="relative z-10 flex justify-center">
                          <div
                            className="rio-value-dot w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border flex items-center justify-center"
                            style={{
                              borderColor: `${item.color}35`,
                              color: item.color,
                            }}
                          >
                            <Icon size={18} strokeWidth={1.8} />
                          </div>
                        </div>

                        {/* CONTENT */}
                        <div className="pb-3.5 border-b border-[#173E2A]/10">
                          <div className="flex items-center gap-2.5">
                            <span
                              className="text-[9px] font-bold tracking-[1.3px]"
                              style={{ color: item.color }}
                            >
                              {item.number}
                            </span>

                            <h4 className="text-[18px] sm:text-[19px] font-bold text-[#173E2A]">
                              {item.title}
                            </h4>
                          </div>

                          <p className="mt-1.5 text-[13px] sm:text-[14px] leading-6 text-[#5E6B63] max-w-[600px]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default CoreValues;