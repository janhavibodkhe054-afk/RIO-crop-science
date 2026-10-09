import React, { useEffect, useRef, useState } from "react";
import { Eye, Target, Sparkles } from "lucide-react";

const VisionMission = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes vmFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes vmFadeLeft {
          from {
            opacity: 0;
            transform: translateX(-24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes vmFadeRight {
          from {
            opacity: 0;
            transform: translateX(24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes vmImageFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes vmGlowMove {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(18px, -12px);
          }
        }

        .vm-header-show {
          animation: vmFadeUp .75s ease forwards;
        }

        .vm-left-show {
          animation: vmFadeLeft .85s ease forwards;
        }

        .vm-right-show {
          animation: vmFadeRight .85s ease forwards;
        }

        .vm-image-float {
          animation: vmImageFloat 6s ease-in-out infinite;
        }

        .vm-glow-move {
          animation: vmGlowMove 8s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-[#071A12] py-14 sm:py-16 lg:py-20"
      >
        {/* BACKGROUND GLOWS */}
        <div className="vm-glow-move absolute -top-[140px] right-[5%] w-[420px] h-[420px] rounded-full bg-[#0284C7]/10 blur-[120px] pointer-events-none" />

        <div className="absolute -bottom-[140px] left-[5%] w-[420px] h-[420px] rounded-full bg-[#176B43]/15 blur-[120px] pointer-events-none" />

        <div className="absolute top-[20%] left-[45%] w-[260px] h-[260px] rounded-full bg-[#F58220]/[0.05] blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div
            className={`max-w-[860px] mx-auto text-center ${
              visible ? "vm-header-show" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#68BF73]" />
              <span className="w-3 h-[2px] bg-[#38BDF8]" />
              <span className="w-3 h-[2px] bg-[#FB923C]" />

              <Sparkles size={13} className="ml-1 text-[#68BF73]" />
            </div>

            <p className="text-[11px] sm:text-[12px] uppercase tracking-[2.2px] font-bold text-[#78CD82]">
              Vision & Mission
            </p>

            <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.1] tracking-[-1px] font-bold text-white">
              A Clear Purpose for
              <span className="text-[#38BDF8]">
                {" "}
                Better Agriculture
              </span>
            </h2>

            <p className="mt-3 text-[14px] sm:text-[15px] leading-7 text-white/65 max-w-[650px] mx-auto">
              Guided by innovation, responsibility and a long-term commitment
              to farmers and sustainable agriculture.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="mt-9 lg:mt-11 grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-8 items-center">

            {/* IMAGE */}
            <div
              className={`relative ${
                visible ? "vm-left-show" : "opacity-0"
              }`}
            >
              <div className="relative vm-image-float mx-auto lg:mx-0 w-full max-w-[500px] h-[360px] sm:h-[420px] lg:h-[470px] overflow-hidden rounded-[28px_70px_28px_70px] border border-white/10">
                <img
                  src="/vision-mission.jpg"
                  alt="Sustainable agriculture and crop innovation"
                  className="w-full h-full object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06150E]/90 via-[#06150E]/25 to-transparent" />

                {/* IMAGE LABEL */}
                <div className="absolute left-5 bottom-5 sm:left-6 sm:bottom-6">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[2px] font-bold text-white/55">
                    Rio Crop Science
                  </p>

                  <p className="mt-1 text-[18px] sm:text-[20px] font-bold text-white">
                    Innovation with Responsibility
                  </p>
                </div>
              </div>

              {/* ORANGE ACCENT */}
              <div className="absolute right-[-2px] sm:right-3 top-8 w-[50px] h-[50px] rounded-full bg-[#F58220] flex items-center justify-center shadow-[0_10px_25px_rgba(245,130,32,.30)]">
                <Target size={19} className="text-white" />
              </div>
            </div>

            {/* VISION + MISSION */}
            <div
              className={`grid gap-4 ${
                visible ? "vm-right-show" : "opacity-0"
              }`}
            >
              {/* VISION */}
              <div className="relative overflow-hidden rounded-[20px] bg-[#0D281C] border border-white/10 p-6 sm:p-7 lg:p-8">
                <div className="absolute -right-16 -top-16 w-[160px] h-[160px] rounded-full border border-white/[0.06]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#69C878]/10 border border-[#69C878]/15 text-[#7CD488] flex items-center justify-center">
                      <Eye size={20} strokeWidth={1.8} />
                    </div>

                    <span className="text-[11px] uppercase tracking-[2px] font-bold text-[#7CD488]">
                      Our Vision
                    </span>
                  </div>

                  <h3 className="mt-4 text-[22px] sm:text-[25px] lg:text-[27px] font-bold text-white leading-[1.25]">
                    Empowering Farmers Through Smarter Agriculture
                  </h3>

                  <p className="mt-3 text-[14px] sm:text-[15px] leading-7 text-white/78">
                    To empower farmers to achieve optimal crop yields through
                    innovative agricultural practices, precision technology and
                    data-driven insights, resulting in increased productivity,
                    reduced waste and improved livelihoods for farming
                    communities.
                  </p>
                </div>
              </div>

              {/* MISSION */}
              <div className="relative overflow-hidden rounded-[20px] bg-[#0B2218] border border-white/10 p-6 sm:p-7 lg:p-8">
                <div className="absolute -left-16 -bottom-16 w-[160px] h-[160px] rounded-full bg-[#F58220]/[0.05]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#F58220]/10 border border-[#F58220]/15 text-[#FB923C] flex items-center justify-center">
                      <Target size={20} strokeWidth={1.8} />
                    </div>

                    <span className="text-[11px] uppercase tracking-[2px] font-bold text-[#FB923C]">
                      Our Mission
                    </span>
                  </div>

                  <h3 className="mt-4 text-[22px] sm:text-[25px] lg:text-[27px] font-bold text-white leading-[1.25]">
                    Building a Sustainable Agricultural Future
                  </h3>

                  <p className="mt-3 text-[14px] sm:text-[15px] leading-7 text-white/78">
                    To revolutionize agriculture through sustainable farming
                    practices, fostering a harmonious balance between nature,
                    farmers and consumers, and ensuring a healthier and more
                    resilient food system for future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BRAND LINE */}
          <div className="mt-9 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[12px] sm:text-[13px] text-white/45 text-center sm:text-left">
              Innovation • Sustainability • Farmer Empowerment
            </p>

            <div className="flex items-center gap-2">
              <span className="w-7 h-[3px] rounded-full bg-[#176B43]" />
              <span className="w-4 h-[3px] rounded-full bg-[#0284C7]" />
              <span className="w-4 h-[3px] rounded-full bg-[#F58220]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;