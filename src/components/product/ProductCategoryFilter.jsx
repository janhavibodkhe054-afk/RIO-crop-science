import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Package,
  Droplets,
  MessageCircle,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Humic Gold",
    type: "Root Enhancer",
    image: "/product1.png",
    description:
      "HUMIC GOLD is a root enhancer containing shiny crystals. It increases root mass, fruit yield, and biomass of the plant. Reduces fertilizer doses by 20–25% and improves soil porosity, aeration, and water retention.",
    benefits: [
      "Enhances root growth and biomass",
      "Improves soil porosity and water retention",
      "Reduces fertilizer need by 20–25%",
    ],
    packing: "100gm, 250gm, 500gm, 1kg",
    dose: "Foliar Spray: 1.25–2.5 gm/ltr | Drip: 500gm–1kg/acre",
    color: "#176B43",
  },
  {
    id: 2,
    name: "Riovita",
    type: "Yield Enhancer",
    image: "/product2.png",
    description:
      "Yield enhancer with humic, seaweed, amino acid, fulvic acid, and trace elements. Increases biomass, yield, root mass, and improves soil fertility.",
    benefits: [
      "Contains Humic, Seaweed, Amino & Fulvic Acid",
      "Improves root & plant biomass",
      "Boosts microbial population in soil",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "2.5–5 ml/ltr",
    color: "#0284C7",
  },
  {
    id: 3,
    name: "Rio Bahaar",
    type: "Flowering Stimulant",
    image: "/product3.png",
    description:
      "Organic compound used as a plant energizer, flowering stimulant, and yield enhancer. Helps convert flowers to fruits.",
    benefits: [
      "Boosts flowering and fruit set",
      "Plant energizer with nutrients",
      "Improves overall yield",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "2.5–5 ml/ltr",
    color: "#F58220",
  },
  {
    id: 4,
    name: "Rio Neem Kadu",
    type: "Insecticide",
    image: "/product4.png",
    description:
      "Makes plants bitter to pests. Controls a wide range of pests including aphids, whiteflies, spidermites, and scale insects.",
    benefits: [
      "Natural neem extract",
      "Effective against common pests",
      "Safe for crops & soil microbes",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "2–5 ml/ltr",
    color: "#176B43",
  },
  {
    id: 5,
    name: "Rio Potash",
    type: "Organic Potash",
    image: "/product5.png",
    description:
      "Essential macro nutrient for photosynthesis, water balance, enzyme activation, and fruit quality.",
    benefits: [
      "Improves sugar content and fruit size",
      "Enhances cell wall development",
      "Supports enzyme activation",
    ],
    packing: "500ml, 1 liter",
    dose: "2.5–5 ml/ltr | Drip: 500ml–1 liter/acre",
    color: "#0284C7",
  },
  {
    id: 6,
    name: "Prabal-60",
    type: "Amino Acid",
    image: "/product6.png",
    description:
      "Stimulates plant growth and supports stress tolerance, disease resistance, and protein synthesis.",
    benefits: [
      "Promotes nutrient uptake",
      "Improves fruit quality",
      "Conditions soil and boosts resistance",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "2.5–5 ml/ltr",
    color: "#F58220",
  },
  {
    id: 7,
    name: "Rollex",
    type: "Organic Extract",
    image: "/product7.png",
    description:
      "Yield enhancer that improves soil aeration and water retention while increasing microflora.",
    benefits: [
      "Boosts biomass and root development",
      "Reduces fertilizer requirement",
      "Improves soil structure",
    ],
    packing: "1000ml, 2.5 liter",
    dose: "2.5–5 ml/ltr | Drip: 2–2.5 liter/acre",
    color: "#176B43",
  },
  {
    id: 8,
    name: "Shine",
    type: "Organic Extract",
    image: "/product8.png",
    description:
      "Same as Rollex with emphasis on yield and root mass. Enhances soil porosity and microbial life.",
    benefits: [
      "Increases fruit yield",
      "Supports healthy soil ecology",
      "Improves nutrient retention",
    ],
    packing: "1000ml, 2.5 liter",
    dose: "2.5–5 ml/ltr | Drip: 2–2.5 liter/acre",
    color: "#0284C7",
  },
  {
    id: 9,
    name: "Tandav",
    type: "Plant Protector",
    image: "/product9.png",
    description:
      "Protects against mites and thrips in crops like cotton, paddy, and chillies.",
    benefits: [
      "Effective on ornamental and horticulture crops",
      "Controls mites and thrips",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "2 ml/ltr",
    color: "#F58220",
  },
  {
    id: 10,
    name: "Pralay",
    type: "Plant Protector",
    image: "/product10.png",
    description:
      "Used for effective control of mites and thrips. Ideal for a wide range of crops.",
    benefits: [
      "Powerful protection",
      "Suitable for major crops",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "2 ml/ltr",
    color: "#176B43",
  },
  {
    id: 11,
    name: "Spector",
    type: "Plant Protector",
    image: "/product11.png",
    description:
      "Effective against all stages of larva in cotton, paddy, and vegetable crops.",
    benefits: [
      "Long-lasting larva control",
      "Protects against chewing pests",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "2 ml/ltr",
    color: "#0284C7",
  },
  {
    id: 12,
    name: "Hunter",
    type: "Plant Protector",
    image: "/product12.png",
    description:
      "Protects all stages of larva, suitable for cotton, paddy, chillies, and other vegetables.",
    benefits: [
      "Targets larva lifecycle",
      "Broad crop application",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "2 ml/ltr",
    color: "#F58220",
  },
  {
    id: 13,
    name: "Hydra-1",
    type: "Plant Protector",
    image: "/product13.png",
    description:
      "Powerful plant protector against larva, effective in low doses.",
    benefits: [
      "Strong impact at 1 ml/ltr",
      "Suitable for many crops",
    ],
    packing: "20ml, 50ml, 100ml, 250ml",
    dose: "1 ml/ltr",
    color: "#176B43",
  },
  {
    id: 14,
    name: "Lexica",
    type: "Plant Protector",
    image: "/product14.png",
    description:
      "Effective control of aphids (mava) in major field and vegetable crops.",
    benefits: [
      "Controls sap-sucking pests",
      "Enhances plant recovery",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "2 ml/ltr",
    color: "#0284C7",
  },
  {
    id: 15,
    name: "Bridge",
    type: "Micronutrient Mixture",
    image: "/product15.png",
    description:
      "Essential micronutrients supporting photosynthesis and plant development.",
    benefits: [
      "Improves yield and growth",
      "Optimizes photosynthesis",
    ],
    packing: "5kg",
    dose: "2.5–5kg/acre",
    color: "#F58220",
  },
  {
    id: 16,
    name: "Silwet",
    type: "Silicon-Based Spreader",
    image: "/product16.png",
    description:
      "Non-toxic spray adjuvant used with various agrochemicals.",
    benefits: [
      "Improves chemical absorption",
      "Silicon-based, safe and effective",
    ],
    packing: "50ml, 100ml, 250ml",
    dose: "2.5–5 ml/12 liter of water",
    color: "#176B43",
  },
  {
    id: 17,
    name: "Annapurna-DF",
    type: "Micronutrient Mixture",
    image: "/product17.png",
    description:
      "Micronutrient supplement to improve plant growth and productivity.",
    benefits: [
      "Boosts photosynthesis",
      "Ensures optimal crop development",
    ],
    packing: "5 liter",
    dose: "2.5–5 ml/ltr | Drip: 2.5–5 liter/acre",
    color: "#0284C7",
  },
  {
    id: 18,
    name: "Riofert-DF",
    type: "Micronutrient Mixture",
    image: "/product18.png",
    description:
      "Essential nutrients to optimize growth and physiological activity.",
    benefits: [
      "Improves yields",
      "Promotes plant health",
    ],
    packing: "5 liter",
    dose: "2.5–5 ml/ltr | Drip: 2.5–5 liter/acre",
    color: "#F58220",
  },
];

const ProductCategories = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
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
        @keyframes productCardReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes productHeaderReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .rio-products-header-show {
          animation:
            productHeaderReveal .9s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .rio-product-card-show {
          animation:
            productCardReveal .8s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .rio-product-card {
          transition:
            transform .45s cubic-bezier(.16,1,.3,1),
            box-shadow .45s ease,
            border-color .45s ease;
        }

        .rio-product-card:hover {
          transform: translateY(-7px);

          box-shadow:
            0 22px 50px
            rgba(20,60,40,.11);

          border-color:
            rgba(23,107,67,.18);
        }

        .rio-product-image {
          transition:
            transform .8s
            cubic-bezier(.16,1,.3,1);
        }

        .rio-product-card:hover
        .rio-product-image {
          transform: scale(1.05);
        }

        .rio-check-icon {
          transition:
            transform .3s ease;
        }

        .rio-product-card:hover
        .rio-check-icon {
          transform: scale(1.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .rio-products-header-show,
          .rio-product-card-show {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#F7F9F6] py-14 sm:py-16 lg:py-20"
      >
        {/* BACKGROUND ACCENTS */}
        <div className="absolute -right-[120px] top-[120px] w-[280px] h-[280px] rounded-full bg-[#F58220]/[0.05] pointer-events-none" />

        <div className="absolute -left-[120px] bottom-[100px] w-[280px] h-[280px] rounded-full bg-[#0284C7]/[0.04] pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div
            className={`max-w-[850px] mx-auto text-center ${
              visible
                ? "rio-products-header-show"
                : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="w-7 h-[3px] bg-[#176B43]" />
              <span className="w-4 h-[3px] bg-[#0284C7]" />
              <span className="w-4 h-[3px] bg-[#F58220]" />
            </div>

            <p className="mt-3 text-[12px] sm:text-[13px] uppercase tracking-[2px] font-semibold text-[#176B43]">
              Rio Crop Science Products
            </p>

            <h2 className="mt-2 text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.1] font-bold text-[#173E2A]">
              Explore Our Complete
              <span className="text-[#0284C7]">
                {" "}Product Range
              </span>
            </h2>

            <p className="mt-4 max-w-[720px] mx-auto text-[15px] sm:text-[16px] leading-7 text-[#536158]">
              Explore agricultural solutions for root development, plant
              nutrition, crop growth, flowering, crop protection and
              application support.
            </p>
          </div>

          {/* PRODUCTS GRID */}
          <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {products.map((product, index) => {
              const whatsappUrl = `https://wa.me/917517411590?text=${encodeURIComponent(
                `Hello, I'm interested in your product: ${product.name}. Please provide more details.`
              )}`;

              return (
                <article
                  key={product.name}
                  style={{
                    animationDelay: `${Math.min(index * 0.06, 0.6)}s`,
                  }}
                  className={`rio-product-card group bg-white border border-[#173E2A]/10 overflow-hidden flex flex-col ${
                    visible
                      ? "rio-product-card-show"
                      : "opacity-0"
                  }`}
                >
                  {/* PRODUCT IMAGE */}
                  <div className="relative h-[270px] sm:h-[290px] overflow-hidden bg-[#EDF2ED]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rio-product-image w-full h-full object-contain p-5"
                    />

                    {/* PRODUCT NUMBER */}
                    <div className="absolute top-4 right-4 min-w-[42px] h-[34px] px-3 bg-[#173E2A] text-white flex items-center justify-center text-[12px] font-semibold">
                      {String(product.id).padStart(2, "0")}
                    </div>

                    {/* TYPE */}
                    <div
                      className="absolute left-4 bottom-4 bg-white px-3.5 py-2 shadow-md text-[12px] sm:text-[13px] font-semibold"
                      style={{
                        color: product.color,
                      }}
                    >
                      {product.type}
                    </div>
                  </div>

                  {/* PRODUCT CONTENT */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">

                    {/* TITLE */}
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-[23px] sm:text-[25px] leading-tight font-bold text-[#173E2A]">
                        {product.name}
                      </h3>

                      <span
                        className="block w-9 h-[3px] shrink-0"
                        style={{
                          backgroundColor:
                            product.color,
                        }}
                      />
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-3 text-[14px] sm:text-[15px] leading-7 text-[#536158]">
                      {product.description}
                    </p>

                    {/* BENEFITS */}
                    <div className="mt-5 space-y-2.5">
                      {product.benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="flex items-start gap-2.5"
                        >
                          <span
                            className="rio-check-icon mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                            style={{
                              backgroundColor:
                                `${product.color}13`,
                              color:
                                product.color,
                            }}
                          >
                            <Check
                              size={12}
                              strokeWidth={2.3}
                            />
                          </span>

                          <span className="text-[14px] sm:text-[15px] leading-6 text-[#405248]">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* PACKING / DOSE */}
                    <div className="mt-5 pt-5 border-t border-[#173E2A]/10 space-y-4">
                      <div className="flex items-start gap-3">
                        <Package
                          size={19}
                          className="mt-[2px] shrink-0 text-[#176B43]"
                        />

                        <div>
                          <p className="text-[11px] uppercase tracking-[1.2px] font-semibold text-[#7A877F]">
                            Packing
                          </p>

                          <p className="mt-1 text-[14px] sm:text-[15px] font-medium text-[#293B31]">
                            {product.packing}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Droplets
                          size={19}
                          className="mt-[2px] shrink-0 text-[#0284C7]"
                        />

                        <div>
                          <p className="text-[11px] uppercase tracking-[1.2px] font-semibold text-[#7A877F]">
                            Dose
                          </p>

                          <p className="mt-1 text-[14px] sm:text-[15px] leading-6 font-medium text-[#293B31]">
                            {product.dose}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* WHATSAPP CTA */}
                    <div className="mt-auto pt-6">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/button flex items-center justify-between gap-3 bg-[#176B43] text-white px-5 py-3.5 text-[15px] font-semibold hover:bg-[#0284C7] transition-all duration-300"
                      >
                        <span className="flex items-center gap-2">
                          <MessageCircle size={18} />
                          Enquire Now
                        </span>

                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover/button:rotate-45"
                        />
                      </a>
                    </div>
                  </div>

                  {/* COLOR ACCENT */}
                  <div
                    className="w-full h-[4px]"
                    style={{
                      backgroundColor:
                        product.color,
                    }}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategories;