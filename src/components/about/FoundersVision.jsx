import React, { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const FoundersVision = () => {
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
        @keyframes founderLeftIn {
          from {
            opacity: 0;
            transform: translateX(-24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes founderRightIn {
          from {
            opacity: 0;
            transform: translateX(24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .founder-left-show {
          animation: founderLeftIn .8s ease forwards;
        }

        .founder-right-show {
          animation: founderRightIn .8s ease forwards;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#FBFCFA] py-12 sm:py-14 lg:py-16"
      >
        {/* ORANGE SIDE PATCH */}
        <div className="absolute -right-[120px] top-[45px] w-[260px] h-[300px] rounded-[48%_52%_38%_62%/50%_40%_60%_50%] bg-[#F58220]/10 pointer-events-none" />

        {/* BLUE SOFT GLOW */}
        <div className="absolute -left-[80px] bottom-[-80px] w-[230px] h-[230px] rounded-full bg-[#0284C7]/[0.05] blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12 items-center">

            {/* LEFT IMAGE */}
            <div
              className={`relative ${
                visible ? "founder-left-show" : "opacity-0"
              }`}
            >
              <div className="relative max-w-[430px] mx-auto lg:mx-0">
                <div className="absolute -left-3 -bottom-3 w-full h-full border-l-[3px] border-b-[3px] border-[#F58220]/55" />

                <div className="relative overflow-hidden rounded-[18px]">
                  <img
                    src="/images/founder.jpg"
                    alt="Founder - Rio Crop Science Pvt. Ltd."
                    className="w-full h-[340px] sm:h-[390px] lg:h-[420px] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#123C29]/60 via-transparent to-transparent" />

                  <div className="absolute left-5 bottom-5">
                    <p className="text-[10px] uppercase tracking-[1.7px] font-bold text-white/65">
                      Founder
                    </p>

                    <p className="mt-1 text-[18px] sm:text-[20px] font-bold text-white">
                      Rio Crop Science Pvt. Ltd.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div
              className={`${
                visible ? "founder-right-show" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[#176B43]" />
                <span className="w-3 h-[2px] bg-[#F58220]" />

                <span className="text-[11px] sm:text-[12px] uppercase tracking-[2.1px] font-bold text-[#176B43]">
                  Founder's Vision
                </span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.15] tracking-[-0.6px] font-extrabold text-[#173E2A]">
                A Vision for Greener
                <span className="text-[#0284C7]"> Indian Agriculture</span>
              </h2>

              {/* QUOTE */}
              <div className="relative mt-6 border-l-[4px] border-[#F58220] pl-5 sm:pl-6">
                <Quote
                  size={34}
                  strokeWidth={1.5}
                  className="text-[#F58220]/35 mb-3"
                />

                <blockquote className="text-[18px] sm:text-[21px] lg:text-[23px] leading-[1.65] font-medium text-[#2D3E34]">
                  “Every drop of effort we put into our fields is an investment
                  in the future. At Rio Crop Science, we are committed to making
                  every seed count—with smarter technology, sustainable
                  practices, and a vision for greener India.”
                </blockquote>
              </div>

              {/* SIGNATURE */}
              <div className="mt-6 pt-5 border-t border-[#173E2A]/10">
                <p className="text-[15px] sm:text-[16px] font-bold text-[#173E2A]">
                  Founder
                </p>

                <p className="mt-1 text-[13px] sm:text-[14px] text-[#68736C]">
                  Rio Crop Science Pvt. Ltd.
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <span className="w-7 h-[3px] rounded-full bg-[#176B43]" />
                  <span className="w-4 h-[3px] rounded-full bg-[#0284C7]" />
                  <span className="w-4 h-[3px] rounded-full bg-[#F58220]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default FoundersVision;