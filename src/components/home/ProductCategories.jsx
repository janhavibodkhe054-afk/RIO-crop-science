import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Package,
  Droplets,
} from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    number: "01",
    name: "Humic Gold",
    type: "Root Enhancer",
    image: "/product1.png",
    description:
      "Root enhancer with shiny crystals that supports stronger roots, biomass, fruit yield and healthier soil structure.",
    benefits: [
      "Enhances root growth & biomass",
      "Improves soil porosity & water retention",
      "May reduce fertilizer need by 20–25%",
    ],
    packing: "100gm, 250gm, 500gm, 1kg",
    dose: "Foliar: 1.25–2.5 gm/ltr | Drip: 500gm–1kg/acre",
    color: "#176B43",
  },
  {
    number: "02",
    name: "Riovita",
    type: "Yield Enhancer",
    image: "/product2.png",
    description:
      "A formulation with humic, seaweed, amino acid, fulvic acid and trace elements to support crop growth and soil fertility.",
    benefits: [
      "Humic, Seaweed, Amino & Fulvic Acid",
      "Supports root & plant biomass",
      "Boosts microbial population in soil",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "2.5–5 ml/ltr",
    color: "#0284C7",
  },
  {
    number: "03",
    name: "Rio Bahaar",
    type: "Flowering Stimulant",
    image: "/product3.png",
    description:
      "Organic plant energizer and flowering stimulant designed to support flower development, fruit setting and yield.",
    benefits: [
      "Supports flowering & fruit setting",
      "Works as a plant energizer",
      "Supports overall crop yield",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "2.5–5 ml/ltr",
    color: "#F58220",
  },
  {
    number: "04",
    name: "Rio Neem Kadu",
    type: "Insecticide",
    image: "/product4.png",
    description:
      "Neem-based crop protection solution developed to help manage common pests including aphids, whiteflies and spider mites.",
    benefits: [
      "Natural neem extract",
      "Targets common crop pests",
      "Crop & soil-microbe friendly approach",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "2–5 ml/ltr",
    color: "#176B43",
  },
  {
    number: "05",
    name: "Rio Potash",
    type: "Organic Potash",
    image: "/product5.png",
    description:
      "Essential plant nutrient supporting photosynthesis, water balance, enzyme activation and overall fruit quality.",
    benefits: [
      "Supports sugar content & fruit size",
      "Supports cell wall development",
      "Supports enzyme activation",
    ],
    packing: "500ml, 1 liter",
    dose: "2.5–5 ml/ltr | Drip: 500ml–1 liter/acre",
    color: "#0284C7",
  },
];

const FeaturedProducts = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const currentIndexRef = useRef(0);
  const resetTimerRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const loopProducts = [...products, ...products];

  /* =========================================
     SCROLL REVEAL
  ========================================== */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* =========================================
     GET CARD WIDTH
  ========================================== */

  const getStepWidth = () => {
    if (!sliderRef.current) return 390;

    const card =
      sliderRef.current.querySelector("[data-product-card]");

    if (!card) return 390;

    const style = window.getComputedStyle(sliderRef.current);

    const gap =
      parseFloat(style.columnGap || style.gap || "0") || 0;

    return card.getBoundingClientRect().width + gap;
  };

  /* =========================================
     MOVE
  ========================================== */

  const moveTo = (index, behavior = "smooth") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollTo({
      left: getStepWidth() * index,
      behavior,
    });
  };

  /* =========================================
     NEXT
  ========================================== */

  const nextSlide = () => {
    const nextIndex = currentIndexRef.current + 1;

    moveTo(nextIndex);

    if (nextIndex === products.length) {
      setActiveIndex(0);

      clearTimeout(resetTimerRef.current);

      resetTimerRef.current = setTimeout(() => {
        moveTo(0, "auto");
        currentIndexRef.current = 0;
      }, 850);

      return;
    }

    currentIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
  };

  /* =========================================
     PREVIOUS
  ========================================== */

  const prevSlide = () => {
    if (currentIndexRef.current === 0) {
      const last = products.length - 1;

      currentIndexRef.current = last;
      setActiveIndex(last);
      moveTo(last);

      return;
    }

    const previous = currentIndexRef.current - 1;

    currentIndexRef.current = previous;
    setActiveIndex(previous);
    moveTo(previous);
  };

  /* =========================================
     AUTO PLAY
  ========================================== */

  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      const nextIndex = currentIndexRef.current + 1;

      moveTo(nextIndex);

      if (nextIndex === products.length) {
        setActiveIndex(0);

        clearTimeout(resetTimerRef.current);

        resetTimerRef.current = setTimeout(() => {
          moveTo(0, "auto");
          currentIndexRef.current = 0;
        }, 850);
      } else {
        currentIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(resetTimerRef.current);
    };
  }, [visible]);

  const goToSlide = (index) => {
    currentIndexRef.current = index;
    setActiveIndex(index);
    moveTo(index);
  };

  return (
    <>
      <style>{`
        @keyframes productHeaderIn {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes productCardIn {
          from {
            opacity: 0;
            transform: translateY(38px) scale(.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes productControlsIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .product-header-show {
          animation:
            productHeaderIn 1s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .product-card-show {
          animation:
            productCardIn 1s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .product-controls-show {
          animation:
            productControlsIn .8s
            cubic-bezier(.16,1,.3,1)
            .4s
            forwards;
        }

        .featured-product-card {
          transition:
            transform .5s cubic-bezier(.16,1,.3,1),
            box-shadow .5s ease,
            border-color .5s ease;
        }

        .featured-product-card:hover {
          transform: translateY(-7px);

          box-shadow:
            0 24px 55px
            rgba(20,60,40,.11);

          border-color:
            rgba(23,107,67,.18);
        }

        .featured-product-image {
          transition:
            transform .9s
            cubic-bezier(.16,1,.3,1);
        }

        .featured-product-card:hover
        .featured-product-image {
          transform: scale(1.055);
        }

        .featured-product-arrow {
          transition:
            transform .35s ease;
        }

        .featured-product-card:hover
        .featured-product-arrow {
          transform: rotate(45deg);
        }

        .product-slider::-webkit-scrollbar {
          display: none;
        }

        .product-slider {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .product-header-show,
          .product-card-show,
          .product-controls-show {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#F6F8F5] py-16 sm:py-20 lg:py-20"
      >
        {/* BACKGROUND DETAIL */}
        <div className="absolute left-0 top-[22%] w-[5px] h-[120px] bg-[#176B43]" />

        <div className="absolute right-0 bottom-[18%] w-[5px] h-[90px] bg-[#F58220]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div
            className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-9 sm:mb-11 ${
              visible
                ? "product-header-show"
                : "opacity-0"
            }`}
          >
            <div className="max-w-[820px]">
              <div className="flex items-center gap-2">
                <span className="w-7 h-[3px] bg-[#176B43]" />
                <span className="w-4 h-[3px] bg-[#0284C7]" />
                <span className="w-4 h-[3px] bg-[#F58220]" />
              </div>

              <p className="mt-3 text-[12px] sm:text-[13px] uppercase tracking-[2px] font-semibold text-[#176B43]">
                Featured Products
              </p>

              <h2 className="mt-2 text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.1] font-bold text-[#173E2A]">
                Solutions Built for
                <span className="text-[#0284C7]">
                  {" "}Better Crop Performance
                </span>
              </h2>

              <p className="mt-4 max-w-[700px] text-[16px] sm:text-[17px] leading-7 text-[#4D5E54]">
                Explore selected Rio Crop Science solutions for root growth,
                crop nutrition, flowering, protection and plant productivity.
              </p>
            </div>

            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#173E2A] text-white px-6 py-3.5 text-[15px] sm:text-[16px] font-semibold hover:bg-[#F58220] transition-all duration-300 w-fit"
            >
              Explore All Products

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </Link>
          </div>

          {/* PRODUCT SLIDER */}
          <div
            ref={sliderRef}
            className="product-slider flex gap-5 lg:gap-6 overflow-x-auto pb-8 pt-2 px-1"
          >
            {loopProducts.map((product, index) => {
              const whatsapp = `https://wa.me/917517411590?text=${encodeURIComponent(
                `Hello, I'm interested in your product: ${product.name}. Please provide more details.`
              )}`;

              return (
                <article
                  key={`${product.name}-${index}`}
                  data-product-card
                  style={{
                    animationDelay: `${
                      (index % products.length) * 0.1
                    }s`,
                  }}
                  className={`featured-product-card group flex-shrink-0 w-[88vw] max-w-[370px] sm:w-[370px] bg-white border border-[#173E2A]/10 overflow-hidden flex flex-col ${
                    visible && index < products.length
                      ? "product-card-show"
                      : ""
                  }`}
                >
                  {/* IMAGE AREA */}
                  <div className="relative h-[255px] sm:h-[275px] overflow-hidden bg-[#EEF2ED]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="featured-product-image w-full h-full object-cover p-4"
                    />

                    {/* NUMBER */}
                    <span className="absolute top-4 right-4 bg-[#173E2A] text-white px-3 py-1.5 text-[12px] font-semibold tracking-[1px]">
                      {product.number}
                    </span>

                    
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">

                    {/* TITLE */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-[24px] sm:text-[26px] leading-tight font-bold text-[#173E2A]">
                        {product.name}
                      </h3>

                      <span
                        className="mt-2 w-9 h-[3px] shrink-0"
                        style={{
                          backgroundColor:
                            product.color,
                        }}
                      />
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-3 text-[15px] leading-6 text-[#526258]">
                      {product.description}
                    </p>

                    {/* BENEFITS */}
                    <div className="mt-5 space-y-2.5">
                      {product.benefits.map(
                        (benefit) => (
                          <div
                            key={benefit}
                            className="flex items-start gap-2.5"
                          >
                            <span
                              className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                              style={{
                                backgroundColor:
                                  `${product.color}12`,
                                color:
                                  product.color,
                              }}
                            >
                              <Check
                                size={12}
                                strokeWidth={2.2}
                              />
                            </span>

                            <span className="text-[14px] sm:text-[15px] leading-6 text-[#405248]">
                              {benefit}
                            </span>
                          </div>
                        )
                      )}
                    </div>

                    {/* PACKING & DOSE */}
                    <div className="mt-5 pt-5 border-t border-[#173E2A]/10 space-y-3">
                      <div className="flex items-start gap-3">
                        <Package
                          size={18}
                          className="mt-0.5 text-[#176B43] shrink-0"
                        />

                        <div>
                          <p className="text-[11px] uppercase tracking-[1px] font-semibold text-[#77837B]">
                            Packing
                          </p>

                          <p className="mt-1 text-[14px] font-medium text-[#273A2F]">
                            {product.packing}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Droplets
                          size={18}
                          className="mt-0.5 text-[#0284C7] shrink-0"
                        />

                        <div>
                          <p className="text-[11px] uppercase tracking-[1px] font-semibold text-[#77837B]">
                            Recommended Dose
                          </p>

                          <p className="mt-1 text-[14px] leading-6 font-medium text-[#273A2F]">
                            {product.dose}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* WHATSAPP */}
                    <div className="mt-auto pt-6">
                      <a
                        href={whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn flex items-center justify-between gap-4 bg-[#176B43] text-white px-5 py-3.5 text-[15px] font-semibold hover:bg-[#0284C7] transition-all duration-300"
                      >
                        <span className="flex items-center gap-2">
                          <MessageCircle size={18} />
                          Enquire Now
                        </span>

                        <ArrowUpRight
                          size={17}
                          className="featured-product-arrow"
                        />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* SLIDER BOTTOM */}
          <div
            className={`mt-2 flex flex-col sm:flex-row items-center justify-between gap-5 ${
              visible
                ? "product-controls-show"
                : "opacity-0"
            }`}
          >
            {/* DOTS */}
            <div className="flex items-center gap-2">
              {products.map((product, index) => (
                <button
                  key={product.number}
                  type="button"
                  onClick={() =>
                    goToSlide(index)
                  }
                  aria-label={`View ${product.name}`}
                  className={`h-[6px] transition-all duration-500 ${
                    activeIndex === index
                      ? "w-9 bg-[#176B43]"
                      : "w-[7px] bg-[#173E2A]/20"
                  }`}
                />
              ))}
            </div>

            {/* NAV */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous product"
                className="w-12 h-12 border border-[#173E2A]/12 bg-white text-[#173E2A] flex items-center justify-center hover:bg-[#F58220] hover:border-[#F58220] hover:text-white transition-all duration-300"
              >
                <ChevronLeft size={21} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next product"
                className="w-12 h-12 bg-[#173E2A] text-white flex items-center justify-center hover:bg-[#0284C7] transition-all duration-300"
              >
                <ChevronRight size={21} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;