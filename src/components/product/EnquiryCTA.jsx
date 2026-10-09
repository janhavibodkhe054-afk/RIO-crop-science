import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";

const EnquiryCTA = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes enquiryFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes enquiryGlow {
          0%, 100% {
            opacity: .4;
            transform: scale(1);
          }

          50% {
            opacity: .7;
            transform: scale(1.05);
          }
        }

        .enquiry-show {
          animation: enquiryFadeUp .7s ease forwards;
        }

        .enquiry-glow {
          animation: enquiryGlow 6s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-[#06150E] border-y-[3px] border-[#0284C7] py-10 sm:py-12 lg:py-14"
      >
        {/* ORANGE ACCENT BORDER */}
        <div className="absolute top-0 left-0 w-[36%] h-[3px] bg-[#F58220]" />
        <div className="absolute bottom-0 right-0 w-[36%] h-[3px] bg-[#F58220]" />

        {/* BLUE GLOW */}
        <div className="enquiry-glow absolute -right-[120px] top-[-100px] w-[320px] h-[320px] rounded-full bg-[#0284C7]/10 blur-[100px] pointer-events-none" />

        {/* ORANGE GLOW */}
        <div className="absolute -left-[100px] bottom-[-100px] w-[280px] h-[280px] rounded-full bg-[#F58220]/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7 ${
              visible ? "enquiry-show" : "opacity-0"
            }`}
          >
            {/* LEFT */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center shrink-0">
                <MessageCircle size={22} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[1.8px] font-bold text-[#7CD488]">
                  Product Enquiry
                </p>

                <h2 className="mt-1.5 text-[25px] sm:text-[30px] lg:text-[34px] leading-tight font-bold text-white">
                  Interested in Humic Gold?
                </h2>

                <p className="mt-2 text-[14px] sm:text-[15px] leading-6 text-white/72 max-w-[620px]">
                  Get product information and guidance from our team.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/917517411590?text=Hello%2C%20I%27m%20interested%20in%20Humic%20Gold.%20Please%20share%20product%20information%20and%20guidance."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-[#F58220] bg-[#F58220] px-6 py-3.5 text-[13px] sm:text-[14px] font-bold text-white hover:bg-transparent hover:text-[#FB923C] transition-all duration-300 shrink-0"
            >
              Enquire on WhatsApp

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnquiryCTA;