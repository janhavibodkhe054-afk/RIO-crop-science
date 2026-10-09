import React, { useEffect, useRef, useState } from "react";
import {
  SearchCheck,
  BadgeCheck,
  PackageOpen,
  Droplets,
  Gauge,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const leftItems = [
  {
    icon: SearchCheck,
    title: "Product Selection",
    text:
      "We help farmers understand which Rio Crop Science solutions may be suitable based on crop needs, growth stage and field requirements.",
    color: "#176B43",
  },
  {
    icon: BadgeCheck,
    title: "Product Benefits",
    text:
      "Get clear information about the role, key benefits and intended purpose of each product before making a selection.",
    color: "#0284C7",
  },
  {
    icon: PackageOpen,
    title: "Packing Options",
    text:
      "Understand the available pack sizes so you can choose a quantity that suits your field requirement and application plan.",
    color: "#F58220",
  },
];

const rightItems = [
  {
    icon: Droplets,
    title: "Application Information",
    text:
      "Receive practical guidance on how products can be applied through foliar spray, drip or other recommended application methods.",
    color: "#0284C7",
  },
  {
    icon: Gauge,
    title: "Recommended Dosage",
    text:
      "Access product-specific dosage information to support proper, responsible and effective use in the field.",
    color: "#176B43",
  },
  {
    icon: ClipboardCheck,
    title: "Product-Specific Guidance",
    text:
      "Our team helps you understand individual product usage, application details and other information relevant to the selected solution.",
    color: "#F58220",
  },
];

const ProductGuidance = () => {
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
        rootMargin: "0px 0px -40px 0px",
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
        @keyframes pgHeaderIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pgLeftIn {
          from {
            opacity: 0;
            transform: translateX(-45px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pgRightIn {
          from {
            opacity: 0;
            transform: translateX(45px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pgImageIn {
          from {
            opacity: 0;
            transform: translateY(28px) scale(.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pgItemIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pg-header-show {
          animation: pgHeaderIn .8s cubic-bezier(.16,1,.3,1) forwards;
        }

        .pg-left-show {
          animation: pgLeftIn .9s cubic-bezier(.16,1,.3,1) forwards;
        }

        .pg-right-show {
          animation: pgRightIn .9s cubic-bezier(.16,1,.3,1) forwards;
        }

        .pg-image-show {
          animation: pgImageIn .9s cubic-bezier(.16,1,.3,1) forwards;
        }

        .pg-item-show {
          animation: pgItemIn .65s ease forwards;
        }

        .pg-point {
          transition:
            transform .3s ease,
            background-color .3s ease;
        }

        .pg-point:hover {
          transform: translateY(-3px);
        }

        @media (prefers-reduced-motion: reduce) {
          .pg-header-show,
          .pg-left-show,
          .pg-right-show,
          .pg-image-show,
          .pg-item-show {
            animation: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#F7F9F6] py-10 sm:py-12 lg:py-14"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute -right-[120px] top-[-70px] w-[260px] h-[260px] rounded-full bg-[#F58220]/08 blur-3xl pointer-events-none" />

        <div className="absolute -left-[110px] bottom-[-100px] w-[250px] h-[250px] rounded-full bg-[#0284C7]/[0.05] blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div
            className={`max-w-[800px] mx-auto text-center ${
              visible ? "pg-header-show" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-7 h-[2px] bg-[#176B43]" />
              <span className="w-3 h-[2px] bg-[#0284C7]" />
              <span className="w-3 h-[2px] bg-[#F58220]" />
            </div>

            <p className="text-[12px] sm:text-[13px] uppercase tracking-[1.8px] font-medium text-[#176B43]">
              Product Guidance
            </p>

            <h2 className="mt-2 text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.12] tracking-[-0.4px] font-semibold text-[#173E2A]">
              The Right Solution
              <span className="text-[#0284C7]"> for Your Crop</span>
            </h2>

            <p className="mt-3 max-w-[700px] mx-auto text-[16px] sm:text-[17px] leading-7 text-[#405148]">
              Choosing the right agricultural solution is an important part of
              effective crop management. Rio Crop Science provides practical
              product information to help farmers understand suitable options
              from our portfolio.
            </p>
          </div>

          {/* MAIN */}
          <div className="mt-8 grid lg:grid-cols-[1fr_.8fr_1fr] gap-7 lg:gap-10 items-center">

            {/* LEFT POINTS */}
            <div
              className={`space-y-6 ${
                visible ? "pg-left-show" : "opacity-0"
              }`}
            >
              {leftItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    style={{
                      animationDelay: `${index * 0.08}s`,
                    }}
                    className={`pg-point lg:text-right ${
                      visible ? "pg-item-show" : "opacity-0"
                    }`}
                  >
                    <div className="flex items-start gap-4 lg:flex-row-reverse">
                      <div
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: `${item.color}12`,
                          color: item.color,
                        }}
                      >
                        <Icon size={20} strokeWidth={1.7} />
                      </div>

                      <div>
                        <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-semibold text-[#24372D]">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 text-[14px] sm:text-[15px] leading-6 text-[#4B5E53]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CENTER IMAGE ONLY */}
            <div
              className={`flex justify-center ${
                visible ? "pg-image-show" : "opacity-0"
              }`}
            >
              <img
                src="/images/product-guidance.png"
                alt="Rio Crop Science product guidance"
                className="w-full max-w-[330px] sm:max-w-[380px] lg:max-w-[400px] h-auto object-contain"
              />
            </div>

            {/* RIGHT POINTS */}
            <div
              className={`space-y-6 ${
                visible ? "pg-right-show" : "opacity-0"
              }`}
            >
              {rightItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    style={{
                      animationDelay: `${index * 0.08}s`,
                    }}
                    className={`pg-point ${
                      visible ? "pg-item-show" : "opacity-0"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: `${item.color}12`,
                          color: item.color,
                        }}
                      >
                        <Icon size={20} strokeWidth={1.7} />
                      </div>

                      <div>
                        <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-semibold text-[#24372D]">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 text-[14px] sm:text-[15px] leading-6 text-[#4B5E53]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2.5 bg-[#176B43] px-6 py-3.5 text-[14px] sm:text-[15px] font-semibold text-white hover:bg-[#0284C7] transition-all duration-300"
            >
              Explore Products

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductGuidance;