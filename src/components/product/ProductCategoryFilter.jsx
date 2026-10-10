import React, { useEffect, useRef, useState } from "react";

import {
  ArrowUpRight,
  Check,
  Package,
  Droplets,
  MessageCircle,
} from "lucide-react";

const products = [
  /* =========================================================
     01 — HUMIC GOLD
  ========================================================= */
  {
    id: 1,
    name: "Humic Gold",
    type: "Humic 98% · Root Enhancer",
    image: "/product1.png",
    description:
      "HUMIC GOLD is a root enhancer containing shiny crystals. It increases root mass, fruit yield and biomass of the plant while supporting better soil conditions.",
    benefits: [
      "Enhances root growth and biomass",
      "Improves soil porosity, aeration and water retention",
      "Helps reduce fertilizer doses by 20–25%",
    ],
    packing: "100gm, 250gm, 500gm, 1kg",
    dose: "Foliar Spray: 1.25–2.5 gm/ltr | Drip: 500gm–1kg/acre",
    color: "#176B43",
  },

  /* =========================================================
     02 — RIOVITA
  ========================================================= */
  {
    id: 2,
    name: "Riovita",
    type: "Yield Enhancer",
    image: "/product2.png",
    description:
      "Riovita is a yield enhancer containing humic, seaweed, amino acid, fulvic acid and trace elements. It supports root mass, fruit yield, biomass and soil fertility.",
    benefits: [
      "Contains Humic, Seaweed, Amino & Fulvic Acid",
      "Improves root and plant biomass",
      "Supports microbial population in soil",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "Foliar Spray: 2.5–5 ml/ltr",
    color: "#0284C7",
  },

  /* =========================================================
     03 — RIO BAHAAR
  ========================================================= */
  {
    id: 3,
    name: "Rio Bahaar",
    type: "Flowering Stimulant · Organic Extract",
    image: "/product3.png",
    description:
      "Rio Bahaar is an organic compound used as a plant energizer, flowering stimulant and yield enhancer. It contains nutrients that support conversion of flowers into fruits.",
    benefits: [
      "Supports flowering and fruit setting",
      "Works as a plant energizer",
      "Supports overall crop yield",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "Foliar Spray: 2.5–5 ml/ltr",
    color: "#F58220",
  },

  /* =========================================================
     04 — RIO NEEM KADU
  ========================================================= */
  {
    id: 4,
    name: "Rio Neem Kadu",
    type: "Pure Neem Seed Extract",
    image: "/product4.png",
    description:
      "Rio Neem Kadu is a natural neem-based insecticide that makes plants bitter to pests and helps manage a wide range of common crop pests.",
    benefits: [
      "Pure neem seed extract",
      "Supports control of aphids and whiteflies",
      "Useful against spidermites and scale insects",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "Foliar Spray: 2–5 ml/ltr",
    color: "#176B43",
  },

  /* =========================================================
     05 — RIO POTASH
  ========================================================= */
  {
    id: 5,
    name: "Rio Potash",
    type: "Organic Potash",
    image: "/product5.png",
    description:
      "Rio Potash is an essential macro nutrient for plant growth and development. It supports photosynthesis, water balance, enzyme activation, fruit quality and sugar content.",
    benefits: [
      "Supports fruit size and sugar content",
      "Supports cell wall development",
      "Supports enzyme activation and plant processes",
    ],
    packing: "500ml, 1 liter",
    dose: "Foliar Spray: 2.5–5 ml/ltr | Drip: 500ml–1 liter/acre",
    color: "#0284C7",
  },

  /* =========================================================
     06 — PRABAL-60
  ========================================================= */
  {
    id: 6,
    name: "Prabal-60",
    type: "Amino Acid",
    image: "/product6.png",
    description:
      "Prabal-60 supports plant growth and development by providing essential nutrients for protein synthesis and helps plants during stress conditions.",
    benefits: [
      "Supports nutrient uptake",
      "Supports fruit quality improvement",
      "Helps with stress tolerance and soil conditioning",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "Foliar Spray: 2.5–5 ml/ltr",
    color: "#F58220",
  },

  /* =========================================================
     07 — ROLLEX
  ========================================================= */
  {
    id: 7,
    name: "Rollex",
    type: "Organic Extract · Yield Enhancer",
    image: "/product7.png",
    description:
      "Rollex is a yield enhancer supporting root mass, fruit yield and plant biomass. It also supports soil porosity, aeration, water retention and microflora.",
    benefits: [
      "Supports root development and biomass",
      "Supports improved soil structure",
      "Supports soil microbial population",
    ],
    packing: "1000ml, 2.5 liter",
    dose: "Foliar Spray: 2.5–5 ml/ltr | Drip: 2–2.5 liter/acre",
    color: "#176B43",
  },

  /* =========================================================
     08 — SHINE
  ========================================================= */
  {
    id: 8,
    name: "Shine",
    type: "Organic Extract · Yield Enhancer",
    image: "/product8.png",
    description:
      "Shine is a yield enhancer designed to support root mass, fruit yield and plant biomass while supporting aeration, water retention and soil microflora.",
    benefits: [
      "Supports fruit yield",
      "Supports root and plant biomass",
      "Supports healthier soil ecology",
    ],
    packing: "1000ml, 2.5 liter",
    dose: "Foliar Spray: 2.5–5 ml/ltr | Drip: 2–2.5 liter/acre",
    color: "#0284C7",
  },

  /* =========================================================
     09 — TANDAV
  ========================================================= */
  {
    id: 9,
    name: "Tandav",
    type: "Plant Protector",
    image: "/product9.png",
    description:
      "Tandav is a plant protector designed for effective control of mites and thrips across crops including cotton, paddy, chilli and horticultural crops.",
    benefits: [
      "Supports control of mites",
      "Supports control of thrips",
      "Suitable for ornamental and horticulture crops",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "Foliar Spray: 2 ml/ltr",
    color: "#F58220",
  },

  /* =========================================================
     10 — PRALAY
  ========================================================= */
  {
    id: 10,
    name: "Pralay",
    type: "Plant Protector",
    image: "/product10.png",
    description:
      "Pralay is a plant protector developed for effective control of mites and thrips in cotton, paddy, chilli and ornamental and horticulture crops.",
    benefits: [
      "Effective crop protection support",
      "Targets mites and thrips",
      "Suitable across multiple crop categories",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "Foliar Spray: 2 ml/ltr",
    color: "#176B43",
  },

  /* =========================================================
     11 — SPECTOR
  ========================================================= */
  {
    id: 11,
    name: "Spector",
    type: "Plant Protector",
    image: "/product11.png",
    description:
      "Spector is a plant protector developed for effective control of all stages of larva in cotton, paddy, chilli and ornamental and horticultural crops.",
    benefits: [
      "Supports larval-stage control",
      "Useful across major field crops",
      "Suitable for horticulture applications",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "Foliar Spray: 2 ml/ltr",
    color: "#0284C7",
  },

  /* =========================================================
     12 — HUNTER
  ========================================================= */
  {
    id: 12,
    name: "Hunter",
    type: "Plant Protector",
    image: "/product12.png",
    description:
      "Hunter is a plant protector developed for effective control of all stages of larva in crops including cotton, paddy, chilli and horticulture crops.",
    benefits: [
      "Targets different larval stages",
      "Broad crop application",
      "Suitable for field and horticulture crops",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "Foliar Spray: 2 ml/ltr",
    color: "#F58220",
  },

  /* =========================================================
     13 — HAEMULON
  ========================================================= */
  {
    id: 13,
    name: "Haemulon",
    type: "Flowering Stimulant",
    image: "/product13.png",
    description:
      "Haemulon is a flowering stimulant formulated with agricultural nutrients, amino acids and plant growth regulators designed to support flower production, fruit set and crop yield.",
    benefits: [
      "Supports flower production and fruit setting",
      "Supports hormonal balance and plant vitality",
      "Helps provide essential nutrients during flowering",
    ],
    packing: "100ml, 250ml, 500ml, 1 liter",
    dose: "Foliar Spray: 4–5 ml/ltr",
    color: "#176B43",
  },

  /* =========================================================
     14 — LEXICA
  ========================================================= */
  {
    id: 14,
    name: "Lexica",
    type: "Plant Protector",
    image: "/product14.png",
    description:
      "Lexica is a plant protector developed for effective control of aphids (mava) in cotton, paddy, chilli, ornamental and horticulture crops.",
    benefits: [
      "Targets aphids and sap-sucking pests",
      "Suitable across multiple crops",
      "Supports crop recovery and protection",
    ],
    packing: "100ml, 250ml, 500ml, 1000ml",
    dose: "Foliar Spray: 2 ml/ltr",
    color: "#0284C7",
  },

  /* =========================================================
     15 — BRIDGE
  ========================================================= */
  {
    id: 15,
    name: "Bridge",
    type: "Micronutrient Mixture",
    image: "/product15.png",
    description:
      "Bridge provides essential micronutrients required by plants in small amounts for optimal growth and development and supports important physiological processes.",
    benefits: [
      "Supports plant growth and development",
      "Supports crop yield",
      "Supports photosynthesis",
    ],
    packing: "5kg",
    dose: "2.5–5 kg/acre",
    color: "#F58220",
  },

  /* =========================================================
     16 — SILWET
  ========================================================= */
  {
    id: 16,
    name: "Silwet",
    type: "Silicon Base Spreader",
    image: "/product16.png",
    description:
      "Silwet is a silicon-based, non-toxic spray adjuvant designed for use with herbicides, insecticides, fungicides, fertilizers and micronutrients.",
    benefits: [
      "Supports better spray spreading",
      "Supports agrochemical absorption",
      "Can be used with multiple agricultural inputs",
    ],
    packing: "50ml, 100ml, 250ml",
    dose: "Foliar Spray: 2.5–5 ml / 12 liter of water",
    color: "#176B43",
  },

  /* =========================================================
     17 — ANNAPURNA-DF
  ========================================================= */
  {
    id: 17,
    name: "Annapurna-DF",
    type: "Micronutrient Mixture",
    image: "/product17.png",
    description:
      "Annapurna-DF provides essential nutrients required in small amounts for optimal plant growth and development and supports important physiological processes.",
    benefits: [
      "Supports plant growth and yield",
      "Supports photosynthesis",
      "Suitable for foliar and drip applications",
    ],
    packing: "5 liter",
    dose: "Foliar Spray: 2.5–5 ml/ltr | Drip: 2.5–5 liter/acre",
    color: "#0284C7",
  },

  /* =========================================================
     18 — RIOFERT-DF
  ========================================================= */
  {
    id: 18,
    name: "Riofert-DF",
    type: "Complete Plant Nutrition",
    image: "/product18.png",
    description:
      "Riofert-DF provides essential nutrients required in small amounts for optimal growth and development while supporting physiological processes and photosynthesis.",
    benefits: [
      "Supports crop growth",
      "Supports yield development",
      "Supports photosynthetic activity",
    ],
    packing: "5 liter",
    dose: "Foliar Spray: 2.5–5 ml/ltr | Drip: 2.5–5 liter/acre",
    color: "#F58220",
  },

  /* =========================================================
     19 — MARISOL
  ========================================================= */
  {
    id: 19,
    name: "Marisol",
    type: "Spirulina 10%",
    image: "/product19.png",
    description:
      "Marisol is used in agriculture as an organic biofertilizer, plant growth biostimulant and nutrient-rich livestock feed supplement. It contains nitrogen, amino acids and minerals.",
    benefits: [
      "Biofertilizer and growth promoter",
      "Nutritional support for crops",
      "Supports soil health and environmental resilience",
    ],
    packing: "100ml, 250ml, 500ml, 1 liter",
    dose: "2.5–5 ml/ltr of water",
    color: "#176B43",
  },

  /* =========================================================
     20 — HIGH GLOSS
  ========================================================= */
  {
    id: 20,
    name: "High Gloss",
    type: "Biofungicide",
    image: "/product20.png",
    description:
      "High Gloss is a biofungicide intended to support management of plant diseases such as root rot, wilt, powdery mildew and damping-off through biological disease-management approaches.",
    benefits: [
      "Supports disease management",
      "Suitable for foliar and soil applications",
      "Can be used for seed and root-zone treatment",
    ],
    packing: "100ml, 250ml, 500ml, 1 liter",
    dose: "1.5–2 ml/ltr of water",
    color: "#0284C7",
  },

  /* =========================================================
     21 — KINGMAKER
  ========================================================= */
  {
    id: 21,
    name: "Kingmaker",
    type: "Growth Special",
    image: "/product21.png",
    description:
      "Kingmaker is a growth-focused nutritional solution designed for important crop stages including vegetative growth, flowering and fruiting while supporting soil health and crop performance.",
    benefits: [
      "Supports crop growth phases",
      "Supports root and stem development",
      "Supports yield, quality and nutrient availability",
    ],
    packing: "5kg",
    dose: "Drip: 5–10 kg/acre",
    color: "#F58220",
  },

  /* =========================================================
     22 — ANNAPURNA COMBI KIT
  ========================================================= */
  {
    id: 22,
    name: "Annapurna Combi Kit",
    type: "100% Water Soluble Micronutrient Mixture",
    image: "/product22.png",
    description:
      "Annapurna Combi Kit is a balanced nutrient application designed to provide a precise blend of major and micronutrients according to crop and soil requirements.",
    benefits: [
      "Supports balanced nutrient application",
      "Supports better crop growth and yield",
      "Provides multiple nutrients in a single application",
    ],
    packing: "25kg, 50kg",
    dose: "50–100 kg/acre",
    color: "#176B43",
  },

  /* =========================================================
     23 — ZAHRA
  ========================================================= */
  {
    id: 23,
    name: "Zahra",
    type: "Flowering Special Fertilizer",
    image: "/product23y.png",
    description:
      "Zahra is a flowering-special fertilizer designed to support robust flowering, fruit setting and balanced nutrient availability during critical reproductive stages.",
    benefits: [
      "Supports flowering and fruit setting",
      "Supports reduced premature flower and fruit drop",
      "Provides nutrients for reproductive growth",
    ],
    packing: "2kg",
    dose: "Drip: 2–5 kg/acre",
    color: "#0284C7",
  },

  /* =========================================================
     24 — ADHIRA
  ========================================================= */
  {
    id: 24,
    name: "Adhira",
    type: "Growth Special Fertilizer",
    image: "/product24.png",
    description:
      "Adhira is a growth-special fertilizer designed for crop stages such as vegetative growth, flowering and fruiting while supporting plant structure and nutrient availability.",
    benefits: [
      "Supports crop growth stages",
      "Supports root and stem development",
      "Supports yield and crop quality",
    ],
    packing: "2kg",
    dose: "Drip: 2–5 kg/acre",
    color: "#F58220",
  },

  /* =========================================================
     25 — STRONG BUD
  ========================================================= */
  {
    id: 25,
    name: "Strong Bud",
    type: "For Maximum Bud",
    image: "/product25.png",
    description:
      "Strong Bud is a ginger-special fertilizer formulated to support high nutrient demand, accelerated crop growth, stronger root systems and improved rhizome development.",
    benefits: [
      "Specially designed for ginger crops",
      "Supports stronger root systems",
      "Supports rhizome development and yield",
    ],
    packing: "1 liter",
    dose: "Drip: 1–3 liter/acre | Foliar Spray: 4–5 ml/ltr",
    color: "#176B43",
  },

  /* =========================================================
     26 — BIGNESS-G
  ========================================================= */
  {
    id: 26,
    name: "Bigness-G",
    type: "Increases Fruit Size & Weight",
    image: "/product26.png",
    description:
      "Bigness-G is designed to support fruit size, weight, quality, lustre and crop productivity by supporting plant physiological and metabolic processes.",
    benefits: [
      "Supports fruit size and weight",
      "Supports fruit quality, colour and lustre",
      "Supports crop yield and nutrient metabolism",
    ],
    packing: "1 liter, 5 liter",
    dose: "Drip: 2–5 liter/acre | Foliar Spray: 4–5 ml/ltr",
    color: "#0284C7",
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
        threshold: 0.04,
        rootMargin: "0px 0px -30px 0px",
      },
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
            transform: translateY(32px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes productHeaderReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .rio-products-header-show {
          animation:
            productHeaderReveal .85s
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
            transform .42s cubic-bezier(.16,1,.3,1),
            box-shadow .42s ease,
            border-color .42s ease;
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
            transform .75s
            cubic-bezier(.16,1,.3,1);
        }

        .rio-product-card:hover
        .rio-product-image {
          transform: scale(1.055);
        }

        .rio-check-icon {
          transition:
            transform .3s ease;
        }

        .rio-product-card:hover
        .rio-check-icon {
          transform: scale(1.08);
        }

        .rio-product-button {
          transition:
            background-color .3s ease,
            transform .3s ease,
            box-shadow .3s ease;
        }

        .rio-product-button:hover {
          transform: translateY(-2px);
          box-shadow:
            0 10px 24px
            rgba(23,107,67,.14);
        }

        @media (max-width: 639px) {
          .rio-product-card:hover {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rio-products-header-show,
          .rio-product-card-show {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .rio-product-image {
            transition: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="
          relative
          overflow-hidden

          bg-[#F7F9F6]

          py-10
          sm:py-14
          lg:py-18
        "
      >
        {/* BACKGROUND ACCENTS */}
        <div
          className="
            absolute
            -right-[110px]
            top-[120px]

            w-[240px]
            h-[240px]

            sm:w-[280px]
            sm:h-[280px]

            rounded-full

            bg-[#F58220]/[0.045]

            pointer-events-none
          "
        />

        <div
          className="
            absolute
            -left-[120px]
            bottom-[100px]

            w-[260px]
            h-[260px]

            rounded-full

            bg-[#0284C7]/[0.035]

            pointer-events-none
          "
        />

        <div
          className="
            relative
            z-10

            max-w-[1400px]
            mx-auto

            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className={`
              max-w-[880px]
              mx-auto

              text-center

              ${visible ? "rio-products-header-show" : "opacity-0"}
            `}
          >
            <div
              className="
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <span className="w-7 h-[3px] bg-[#176B43]" />

              <span className="w-4 h-[3px] bg-[#0284C7]" />

              <span className="w-4 h-[3px] bg-[#F58220]" />
            </div>

            <p
              className="
                mt-3

                text-[12px]
                sm:text-[13px]

                uppercase
                tracking-[2px]

                font-semibold

                text-[#176B43]
              "
            >
              Rio Crop Science Products
            </p>

            <h2
              className="
                mt-2

                text-[32px]
                sm:text-[42px]
                lg:text-[50px]

                leading-[1.08]

                tracking-[-.8px]

                font-bold

                text-[#173E2A]
              "
            >
              Explore Our Complete
              <span className="text-[#0284C7]"> Product Range</span>
            </h2>

            <p
              className="
                mt-4

                max-w-[760px]
                mx-auto

                text-[15px]
                sm:text-[17px]

                leading-7
                sm:leading-8

                text-[#536158]
              "
            >
              Explore 26 agricultural solutions covering soil health, plant
              nutrition, flowering, crop growth, crop protection, micronutrients
              and specialised farming requirements.
            </p>

            <div
              className="
                mt-5

                inline-flex
                items-center

                rounded-full

                bg-[#EEF7F1]

                border
                border-[#176B43]/10

                px-4
                py-2
              "
            >
              <span
                className="
                  text-[13px]
                  sm:text-[14px]

                  font-semibold

                  text-[#176B43]
                "
              >
                26 Products
              </span>
            </div>
          </div>

          {/* =================================================
              PRODUCT GRID
          ================================================= */}

          <div
            className="
              mt-9
              sm:mt-12

              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-3

              gap-5
              lg:gap-6
            "
          >
            {products.map((product, index) => {
              const whatsappUrl = `https://wa.me/917517411590?text=${encodeURIComponent(
                `Hello Rio Crop Science, I'm interested in your product: ${product.name}. Please provide more details.`,
              )}`;

              return (
                <article
                  key={product.id}
                  style={{
                    animationDelay: `${Math.min(index * 0.045, 0.65)}s`,
                  }}
                  className={`
                    rio-product-card
                    group

                    min-w-0

                    bg-white

                    border
                    border-[#173E2A]/10

                    rounded-[18px]
                    sm:rounded-[20px]

                    overflow-hidden

                    flex
                    flex-col

                    ${visible ? "rio-product-card-show" : "opacity-0"}
                  `}
                >
                  {/* =============================================
                      IMAGE
                  ============================================== */}

                  <div
                    className="
                      relative

                      h-[245px]
                      min-[400px]:h-[265px]
                      sm:h-[285px]
                      lg:h-[300px]

                      overflow-hidden

                      bg-gradient-to-b
                      from-[#F4F7F3]
                      to-[#E9F0EA]
                    "
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="
                        rio-product-image

                        w-full
                        h-full

                        object-contain

                        p-4
                        sm:p-5
                        lg:p-6
                      "
                    />

                    {/* NUMBER */}
                    <div
                      className="
                        absolute

                        top-3
                        right-3

                        sm:top-4
                        sm:right-4

                        min-w-[40px]
                        h-[32px]

                        sm:min-w-[44px]
                        sm:h-[34px]

                        px-3

                        

                        bg-[#173E2A]

                        text-white

                        flex
                        items-center
                        justify-center

                        text-[11px]
                        sm:text-[12px]

                        font-semibold
                      "
                    >
                      {String(product.id).padStart(2, "0")}
                    </div>
                  </div>

                  {/* =============================================
                      CONTENT
                  ============================================== */}

                  <div
                    className="
                      p-5
                      sm:p-6

                      flex
                      flex-col
                      flex-grow
                    "
                  >
                    {/* TITLE */}
                    <div
                      className="
                        flex
                        items-center
                        justify-between

                        gap-4
                      "
                    >
                      <h3
                        className="
                          text-[22px]
                          sm:text-[24px]
                          lg:text-[25px]

                          leading-tight

                          font-bold

                          text-[#173E2A]
                        "
                      >
                        {product.name}
                      </h3>

                      <span
                        className="
                          block

                          w-9
                          h-[3px]

                          shrink-0

                          rounded-full
                        "
                        style={{
                          backgroundColor: product.color,
                        }}
                      />
                    </div>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-3

                        text-[14px]
                        sm:text-[15px]

                        leading-6
                        sm:leading-7

                        text-[#536158]
                      "
                    >
                      {product.description}
                    </p>

                    {/* BENEFITS */}
                    <div
                      className="
                        mt-5

                        space-y-2.5
                      "
                    >
                      {product.benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="
                              flex
                              items-start

                              gap-2.5
                            "
                        >
                          <span
                            className="
                                rio-check-icon

                                mt-[2px]

                                w-5
                                h-5

                                rounded-full

                                flex
                                items-center
                                justify-center

                                shrink-0
                              "
                            style={{
                              backgroundColor: `${product.color}13`,
                              color: product.color,
                            }}
                          >
                            <Check size={12} strokeWidth={2.4} />
                          </span>

                          <span
                            className="
                                text-[14px]
                                sm:text-[15px]

                                leading-6

                                text-[#405248]
                              "
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* PACKING + DOSE */}
                    <div
                      className="
                        mt-5

                        pt-5

                        border-t
                        border-[#173E2A]/10

                        space-y-4
                      "
                    >
                      {/* PACKING */}
                      <div
                        className="
                          flex
                          items-start

                          gap-3
                        "
                      >
                        <Package
                          size={19}
                          className="
                            mt-[2px]

                            shrink-0

                            text-[#176B43]
                          "
                        />

                        <div className="min-w-0">
                          <p
                            className="
                              text-[11px]

                              uppercase
                              tracking-[1.2px]

                              font-semibold

                              text-[#7A877F]
                            "
                          >
                            Packing
                          </p>

                          <p
                            className="
                              mt-1

                              text-[14px]
                              sm:text-[15px]

                              leading-6

                              font-medium

                              text-[#293B31]
                            "
                          >
                            {product.packing}
                          </p>
                        </div>
                      </div>

                      {/* DOSE */}
                      <div
                        className="
                          flex
                          items-start

                          gap-3
                        "
                      >
                        <Droplets
                          size={19}
                          className="
                            mt-[2px]

                            shrink-0

                            text-[#0284C7]
                          "
                        />

                        <div className="min-w-0">
                          <p
                            className="
                              text-[11px]

                              uppercase
                              tracking-[1.2px]

                              font-semibold

                              text-[#7A877F]
                            "
                          >
                            Dose
                          </p>

                          <p
                            className="
                              mt-1

                              text-[14px]
                              sm:text-[15px]

                              leading-6

                              font-medium

                              text-[#293B31]
                            "
                          >
                            {product.dose}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* =============================================
                        WHATSAPP CTA
                    ============================================== */}

                    <div className="mt-auto pt-6">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          rio-product-button
                          group/button

                          flex
                          items-center
                          justify-between

                          gap-3

                          w-full

                          rounded-xl

                          bg-[#176B43]

                          text-white

                          px-5
                          py-3.5

                          text-[14px]
                          sm:text-[15px]

                          font-semibold

                          hover:bg-[#0284C7]
                        "
                      >
                        <span
                          className="
                            flex
                            items-center

                            gap-2
                          "
                        >
                          <MessageCircle size={18} />
                          Enquire Now
                        </span>

                        <ArrowUpRight
                          size={17}
                          className="
                            transition-transform
                            duration-300

                            group-hover/button:rotate-45
                          "
                        />
                      </a>
                    </div>
                  </div>

                  {/* COLOR ACCENT */}
                  <div
                    className="
                      w-full
                      h-[4px]
                    "
                    style={{
                      backgroundColor: product.color,
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
