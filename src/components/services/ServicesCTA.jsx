import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesCTA = () => {
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
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const whatsappUrl =
    "https://wa.me/917517411590?text=Hello%20Rio%20Crop%20Science%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

  return (
    <>
      <style>{`
        @keyframes servicesCtaLeft {
          from {
            opacity: 0;
            transform: translateX(-36px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes servicesCtaRight {
          from {
            opacity: 0;
            transform: translateX(36px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes servicesCtaGlow {
          0%, 100% {
            opacity: .35;
            transform: scale(1);
          }

          50% {
            opacity: .65;
            transform: scale(1.06);
          }
        }

        .services-cta-left-show {
          animation:
            servicesCtaLeft .85s cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .services-cta-right-show {
          animation:
            servicesCtaRight .85s cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .services-cta-glow {
          animation:
            servicesCtaGlow 8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .services-cta-left-show,
          .services-cta-right-show,
          .services-cta-glow {
            animation: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#F7F9F6] py-10 sm:py-12 lg:py-14 border-y border-[#173E2A]/10"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="services-cta-glow absolute -right-[120px] -top-[100px] w-[280px] h-[280px] rounded-full bg-[#0284C7]/08 blur-[90px] pointer-events-none" />

        <div className="absolute -left-[100px] -bottom-[100px] w-[260px] h-[260px] rounded-full bg-[#F58220]/08 blur-[90px] pointer-events-none" />

        {/* ACCENT LINES */}
        <div className="absolute top-0 left-0 w-[32%] h-[3px] bg-[#176B43]" />
        <div className="absolute bottom-0 right-0 w-[32%] h-[3px] bg-[#F58220]" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-8 lg:gap-10 items-center">

            {/* LEFT CONTENT */}
            <div
              className={
                visible ? "services-cta-left-show" : "opacity-0"
              }
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-[2px] bg-[#176B43]" />
                <span className="w-3 h-[2px] bg-[#0284C7]" />
                <span className="w-3 h-[2px] bg-[#F58220]" />

                <span className="text-[12px] sm:text-[13px] uppercase tracking-[1.8px] font-medium text-[#176B43]">
                  Grow With Rio
                </span>
              </div>

              <h2 className="mt-3 max-w-[760px] text-[32px] sm:text-[39px] lg:text-[44px] leading-[1.12] tracking-[-0.4px] font-semibold text-[#173E2A]">
                Need the Right Support
                <span className="block text-[#0284C7]">
                  for Your Crop or Business?
                </span>
              </h2>

              <p className="mt-4 max-w-[730px] text-[16px] sm:text-[17px] leading-7 text-[#46584E]">
                Connect with Rio Crop Science for product information,
                crop guidance, application support or partnership enquiries.
              </p>
            </div>

            {/* RIGHT BUTTONS ONLY */}
            <div
              className={`flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:justify-end ${
                visible ? "services-cta-right-show" : "opacity-0"
              }`}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#176B43] px-6 py-3.5 text-[15px] sm:text-[16px] font-semibold text-white hover:bg-[#0D2B1E] transition-all duration-300"
              >
                <MessageCircle size={18} />
                Talk on WhatsApp

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </a>

              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-2.5 border border-[#173E2A]/15 bg-white px-6 py-3.5 text-[15px] sm:text-[16px] font-semibold text-[#173E2A] hover:border-[#0284C7] hover:text-[#0284C7] transition-all duration-300"
              >
                Explore Products

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesCTA;