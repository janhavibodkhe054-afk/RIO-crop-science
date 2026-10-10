import React, { useEffect, useRef, useState } from "react";
import {
  SearchCheck,
  FlaskConical,
  Sprout,
  Flower2,
  ShieldCheck,
  Leaf,
  HandHelping,
  Handshake,
  Droplets,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: SearchCheck,
    title: "Crop & Product Guidance",
    heading: "The Right Solution for Your Crop",
    description:
      "Practical guidance to help farmers understand suitable products, usage and application.",
    points: [
      "Product Selection",
      "Product Benefits",
      "Application Information",
      "Packing Options",
      "Recommended Dosage",
      "Product Guidance",
    ],
    footer: "Better product decisions with clear guidance.",
    color: "#176B43",
    soft: "#EEF6F0",
    image: "/service1.jpg",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Plant Nutrition Support",
    heading: "Supporting Healthy Plant Growth",
    description:
      "Solutions supporting plant nutrition, root growth, photosynthesis and overall crop development.",
    points: [
      "Plant Growth",
      "Photosynthesis",
      "Root Development",
      "Biomass",
      "Nutrient Availability",
      "Crop Development",
    ],
    footer: "Rio Potash • Bridge • Annapurna-DF • Riofert-DF • Prabal-60",
    color: "#0284C7",
    soft: "#EEF8FD",
    image: "/service2.png",
  },
  {
    number: "03",
    icon: Sprout,
    title: "Soil Health Support",
    heading: "Healthy Soil. Stronger Crops.",
    description:
      "Support for better soil structure, aeration, water retention and microbial activity.",
    points: [
      "Soil Porosity",
      "Water Retention",
      "Microbial Activity",
      "Root Development",
    ],
    footer: "Humic Gold • Riovita • Rollex • Shine",
    color: "#176B43",
    soft: "#EEF6F0",
    image: "/service3.jpg",
  },
  {
    number: "04",
    icon: Flower2,
    title: "Crop Growth & Flowering",
    heading: "Supporting Every Stage of Crop Development",
    description:
      "Support for plant energy, flowering, fruit setting, biomass and yield development.",
    points: [
      "Plant Energy",
      "Flowering",
      "Fruit Setting",
      "Root Mass",
      "Biomass",
      "Yield Enhancement",
    ],
    footer: "Rio Bahaar • Riovita • Prabal-60",
    color: "#F58220",
    soft: "#FFF3E9",
    image: "/service4.jpg",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Crop Protection Support",
    heading: "Protecting Crops From Pest Challenges",
    description:
      "Crop protection solutions designed to address common pest and larval challenges.",
    points: [
      "Mites",
      "Thrips",
      "Aphids",
      "Larval Stages",
      "Sap-Sucking Pests",
      "Crop Pest Challenges",
    ],
    footer: "Tandav • Pralay • Spector • Hunter • Hydra-1 • Lexica",
    color: "#0284C7",
    soft: "#EEF8FD",
    image: "/service5.jpg",
  },
  {
    number: "06",
    icon: Leaf,
    title: "Sustainable Farming Support",
    heading: "Better Farming With Sustainability in Mind",
    description:
      "Farming solutions that balance productivity with environmental responsibility.",
    points: [
      "Soil Health",
      "Responsible Protection",
      "Reduced Dependency",
      "Environmental Stewardship",
      "Biodiversity",
      "Sustainable Practices",
    ],
    footer: "Growing efficiently with sustainability in mind.",
    color: "#176B43",
    soft: "#EEF6F0",
    image: "/service6.jpg",
  },
  {
    number: "07",
    icon: HandHelping,
    title: "Farmer Support",
    heading: "Support Beyond the Product",
    description:
      "Continued product information and practical guidance for farmers.",
    points: [
      "Product Information",
      "Usage Guidance",
      "Crop Understanding",
      "Product Enquiries",
    ],
    footer: "Support before and after product selection.",
    color: "#F58220",
    soft: "#FFF3E9",
    image: "/service7.jpg",
  },
  {
    number: "08",
    icon: Handshake,
    title: "Distributor & Retailer Support",
    heading: "Growing Together With Our Partners",
    description:
      "Dedicated support for distributors, retailers and agricultural partners.",
    points: [
      "Portfolio Access",
      "Product Information",
      "Solution Information",
      "Business Support",
      "Ongoing Communication",
    ],
    footer: "Supporting a growing partner network across India.",
    color: "#0284C7",
    soft: "#EEF8FD",
    image: "/service8.jpg",
  },
  {
    number: "09",
    icon: Droplets,
    title: "Product Application Support",
    heading: "Understand. Apply. Grow.",
    description:
      "Clear product-specific guidance for application methods and recommended dosage.",
    points: [
      "Foliar Spray",
      "Drip Application",
      "Crop Protection Use",
      "Product Dosage",
    ],
    footer: "Clear application guidance for responsible use.",
    color: "#176B43",
    soft: "#EEF6F0",
    image: "/service9.jpg",
  },
];

const whatsappNumber = "917517411590";

const CoreServices = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.06,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCardWidth = () => {
    if (!sliderRef.current) return 0;

    const firstCard =
      sliderRef.current.querySelector("[data-service-card]");

    if (!firstCard) return 0;

    const styles = window.getComputedStyle(sliderRef.current);

    const gap = parseFloat(
      styles.columnGap || styles.gap || "0"
    );

    return firstCard.getBoundingClientRect().width + gap;
  };

  const scrollNext = () => {
    if (!sliderRef.current) return;

    const cardWidth = getCardWidth();

    const {
      scrollLeft,
      scrollWidth,
      clientWidth,
    } = sliderRef.current;

    const maxScroll = scrollWidth - clientWidth;

    if (scrollLeft >= maxScroll - 10) {
      sliderRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });

      setActiveIndex(0);
    } else {
      sliderRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (!sliderRef.current) return;

    const cardWidth = getCardWidth();

    if (sliderRef.current.scrollLeft <= 10) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollWidth,
        behavior: "smooth",
      });
    } else {
      sliderRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      scrollNext();
    }, 3200);

    return () => clearInterval(interval);
  }, [paused]);

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const cardWidth = getCardWidth();

    if (!cardWidth) return;

    const index = Math.round(
      sliderRef.current.scrollLeft / cardWidth
    );

    setActiveIndex(
      Math.min(index, services.length - 1)
    );
  };

  const goToSlide = (index) => {
    if (!sliderRef.current) return;

    const cardWidth = getCardWidth();

    sliderRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const getWhatsappUrl = (service) => {
    const message = encodeURIComponent(
      `Hello Rio Crop Science, I am interested in ${service.title}. Please share more information.`
    );

    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <>
      <style>{`
        @keyframes servicesSectionIn {
          from {
            opacity: 0;
            transform: translateY(32px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes serviceCardIn {
          from {
            opacity: 0;
            transform: translateY(26px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes arrowPulse {
          0%, 100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(3px);
          }
        }

        .services-section-show {
          animation:
            servicesSectionIn .8s cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .service-card-show {
          animation:
            serviceCardIn .7s cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .services-slider::-webkit-scrollbar {
          display: none;
        }

        .services-slider {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .service-card {
          transition:
            transform .4s ease,
            box-shadow .4s ease,
            border-color .4s ease;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 50px rgba(20,60,40,.11);
          border-color: rgba(23,107,67,.18);
        }

        .service-card img {
          transition:
            transform .7s cubic-bezier(.16,1,.3,1);
        }

        .service-card:hover img {
          transform: scale(1.055);
        }

        .service-whatsapp-arrow {
          animation: arrowPulse 2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .services-section-show,
          .service-card-show,
          .service-whatsapp-arrow {
            animation: none !important;
          }

          .service-card,
          .service-card img {
            transition: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#F7F8F4] py-12 sm:py-14 lg:py-16"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute -right-[130px] top-[40px] w-[300px] h-[300px] rounded-full bg-[#F58220]/[0.07] blur-3xl pointer-events-none" />

        <div className="absolute -left-[120px] bottom-[-100px] w-[300px] h-[300px] rounded-full bg-[#0284C7]/[0.05] blur-3xl pointer-events-none" />

        <div
          className={`relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 ${
            visible ? "services-section-show" : "opacity-0"
          }`}
        >
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-[820px]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-[2px] bg-[#176B43]" />
                <span className="w-3 h-[2px] bg-[#0284C7]" />
                <span className="w-3 h-[2px] bg-[#F58220]" />
              </div>

              <p className="text-[12px] sm:text-[13px] uppercase tracking-[2px] font-medium text-[#176B43]">
                Our Core Services
              </p>

              <h2 className="mt-2 text-[34px] sm:text-[40px] lg:text-[44px] leading-[1.12] tracking-[-0.4px] font-bold text-[#173E2A]">
                Support Designed Around
                <span className="text-[#0284C7]">
                  {" "}Better Farming
                </span>
              </h2>

              <p className="mt-4 max-w-[760px] text-[16px] sm:text-[17px] leading-7 text-[#46584E]">
                Explore crop guidance, nutrition, soil health, protection,
                farmer assistance and partner support from Rio Crop Science.
              </p>
            </div>

            {/* ARROWS */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Previous service"
                className="w-12 h-12 rounded-full border border-[#173E2A]/12 bg-white text-[#173E2A] flex items-center justify-center hover:bg-[#176B43] hover:text-white hover:border-[#176B43] transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={scrollNext}
                aria-label="Next service"
                className="w-12 h-12 rounded-full bg-[#173E2A] text-white flex items-center justify-center hover:bg-[#F58220] transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            className="services-slider mt-10 flex gap-5 lg:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-5"
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  data-service-card
                  style={{
                    animationDelay: `${index * 0.06}s`,
                  }}
                  className={`
                    service-card
                    ${visible ? "service-card-show" : "opacity-0"}
                    group
                    snap-start
                    shrink-0
                    w-[88%]
                    sm:w-[calc(50%-10px)]
                    xl:w-[calc(33.333%-16px)]
                    bg-white
                    border
                    border-[#173E2A]/[0.08]
                    overflow-hidden
                    flex
                    flex-col
                  `}
                >
                  {/* IMAGE */}
                  <div className="relative h-[215px] sm:h-[225px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#102D21]/85 via-[#102D21]/10 to-transparent" />

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5">
                      <span
                        className="text-[13px] font-semibold"
                        style={{
                          color: service.color,
                        }}
                      >
                        {service.number}
                      </span>
                    </div>

                    <div
                      className="absolute left-5 bottom-5 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,.13)]"
                      style={{
                        color: service.color,
                      }}
                    >
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <p className="absolute left-[78px] bottom-[30px] right-4 text-[14px] sm:text-[15px] font-medium text-white">
                      {service.title}
                    </p>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="text-[22px] sm:text-[24px] leading-[1.25] font-semibold text-[#173E2A]">
                      {service.heading}
                    </h3>

                    <p className="mt-3 text-[15px] sm:text-[16px] leading-7 text-[#485B50]">
                      {service.description}
                    </p>

                    {/* POINTS */}
                    <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2.5">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-2"
                        >
                          <span
                            className="mt-[4px] w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                            style={{
                              backgroundColor: `${service.color}14`,
                              color: service.color,
                            }}
                          >
                            <Check size={10} strokeWidth={2} />
                          </span>

                          <span className="text-[13px] sm:text-[14px] leading-5 font-medium text-[#405248]">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    

                    {/* WHATSAPP CTA */}
                    <div className="mt-auto pt-5">
                      <a
                        href={getWhatsappUrl(service)}
                        target="_blank"
                        rel="noreferrer"
                        className="group/wa w-full flex items-center justify-between gap-3 rounded-lg bg-[#176B43] px-4 py-3.5 text-white hover:bg-[#0D2B1E] transition-all duration-300"
                      >
                        <span className="flex items-center gap-2.5 text-[14px] sm:text-[15px] font-semibold">
                          <MessageCircle size={17} />
                          Enquire on WhatsApp
                        </span>

                        <ArrowUpRight
                          size={16}
                          className="service-whatsapp-arrow transition-transform duration-300 group-hover/wa:rotate-45"
                        />
                      </a>
                    </div>
                  </div>

                  {/* BOTTOM ACCENT */}
                  <div
                    className="h-[4px]"
                    style={{
                      backgroundColor: service.color,
                    }}
                  />
                </article>
              );
            })}
          </div>

          {/* BOTTOM CONTROLS */}
          <div className="mt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {services.map((service, index) => (
                <button
                  key={service.number}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to service ${index + 1}`}
                  className={`h-[7px] rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-[#176B43]"
                      : "w-[7px] bg-[#173E2A]/20 hover:bg-[#F58220]"
                  }`}
                />
              ))}
            </div>

            <p className="text-[13px] sm:text-[14px] font-medium text-[#647269]">
              {String(activeIndex + 1).padStart(2, "0")}
              <span className="mx-2 text-[#173E2A]/25">/</span>
              {String(services.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreServices;