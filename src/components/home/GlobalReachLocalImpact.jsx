import React, { useEffect, useRef, useState } from "react";
import { MapPin, Users, Network, Sparkles, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    icon: MapPin,
    value: "20+",
    label: "States Reached",
    description: "Expanding agricultural footprints pan-India.",
    color: "#3FA7E0",
    bg: "rgba(63, 167, 224, 0.1)",
  },
  {
    icon: Network,
    value: "100+",
    label: "Distributors",
    description: "Strong and reliable distribution networks.",
    color: "#F58A2A",
    bg: "rgba(245, 138, 42, 0.1)",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Happy Farmers",
    description: "Empowering communities for better harvests.",
    color: "#7FBF5A",
    bg: "rgba(127, 191, 90, 0.1)",
  },
];

const GlobalReachLocalImpact = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes reachFadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .rio-reach-show {
          animation: reachFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32 text-[#173E2A]"
      >
        {/* SUBTLE BACKGROUND DECORATIONS */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#176B43]/[0.03] blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#3FA7E0]/[0.03] blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* HEADER & CONTENT ROW */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            
            {/* LEFT: HEADING */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#176B43]/10 border border-[#176B43]/15 mb-4">
                <Sparkles size={14} className="text-[#176B43]" />
                <span className="text-[12px] uppercase tracking-[3px] font-bold text-[#176B43]">
                  Global Reach, Local Impact
                </span>
              </div>

              <h2 className="text-[34px] sm:text-[42px] lg:text-[50px] leading-[1.12] tracking-[-1px] font-extrabold text-[#173E2A]">
                Growing Across{" "}
                <span className="text-[#3FA7E0]">India</span>
              </h2>
            </div>

            {/* RIGHT: DESCRIPTION & CTA */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <p className="text-[16px] sm:text-[17px] leading-relaxed text-[#5A665F]">
                With a growing network of distributors and farmers, Rio Crop Science is expanding its reach while staying focused on the needs of the agricultural community.
              </p>

              <div className="mt-6">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-2.5 text-[14px] font-extrabold text-[#176B43] hover:text-[#3FA7E0] transition-colors"
                >
                  <span>Become a Partner / Distributor</span>
                  <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:rotate-45" />
                </Link>
              </div>
            </div>

          </div>

          {/* STATS CARDS ROW */}
          <div
            className={`grid md:grid-cols-3 gap-6 lg:gap-8 ${
              visible ? "rio-reach-show" : "opacity-0"
            }`}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  className="group relative rounded-[28px] bg-[#FAFDFB] border border-gray-100 p-8 sm:p-9 shadow-[0_10px_40px_rgba(20,60,40,0.04)] hover:shadow-[0_20px_60px_rgba(20,60,40,0.1)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
                >
                  <div>
                    {/* ICON */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 shadow-sm"
                      style={{
                        backgroundColor: stat.bg,
                        color: stat.color,
                      }}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    {/* VALUE */}
                    <p
                      className="text-[42px] sm:text-[48px] font-extrabold tracking-tight leading-none"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </p>

                    {/* LABEL */}
                    <h3 className="mt-2 text-[20px] font-bold text-[#173E2A]">
                      {stat.label}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-2 text-[14px] leading-relaxed text-[#5A665F]">
                      {stat.description}
                    </p>
                  </div>

                  {/* BOTTOM ACCENT BAR */}
                  <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                      Pan-India Footprint
                    </span>
                    <div
                      className="w-3 h-3 rounded-full transition-transform duration-300 group-hover:scale-125"
                      style={{ backgroundColor: stat.color }}
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

export default GlobalReachLocalImpact;