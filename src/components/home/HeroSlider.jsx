import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/hero1.png",
    label: "Rio Crop Science",
    title: "Cultivating a",
    highlight: "Greener Tomorrow",
    description:
      "Sustainable crop solutions designed to support healthier plants, stronger soil and better farm productivity.",
    button: "Explore Our Products",
    link: "/products",
  },

  {
    id: 2,
    image:
      "https://i.pinimg.com/1200x/4d/c5/9f/4dc59fa12d715487d1792f2a17ba5ddf.jpg",
    label: "Science Meets Agriculture",
    title: "Innovation for",
    highlight: "Better Crop Performance",
    description:
      "Research-focused agricultural solutions developed to support crop growth, nutrition and sustainable farming.",
    button: "Explore Our Products",
    link: "/products",
  },

  {
    id: 3,
    image:
      "https://i.pinimg.com/736x/0c/cd/11/0ccd11d39957c39001a85fda8bc110e2.jpg",
    label: "Growing Together",
    title: "Supporting Farmers.",
    highlight: "Strengthening Agriculture.",
    description:
      "From crop solutions to farmer guidance, Rio Crop Science is committed to building stronger agricultural partnerships.",
    button: "Explore Our Products",
    link: "/products",
  },
];

const HeroSlider = () => {
  const sectionRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);

  /* =========================================
     SECTION REVEAL
  ========================================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* =========================================
     AUTO SLIDER
  ========================================== */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  /* =========================================
     CONTROLS
  ========================================== */
  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  /* =========================================
     MOBILE SWIPE
  ========================================== */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return;
    }

    const difference =
      touchStartX.current - touchEndX.current;

    if (Math.abs(difference) > 45) {
      if (difference > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      <style>{`

        /* =========================================
           SECTION
        ========================================== */

        @keyframes heroSectionReveal {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .rio-hero-section-show {
          animation:
            heroSectionReveal 1s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }


        /* =========================================
           IMAGE
        ========================================== */

        @keyframes heroImageZoom {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.06);
          }
        }

        .rio-slide-active .rio-hero-image {
          animation:
            heroImageZoom 6s
            ease forwards;
        }


        /* =========================================
           LABEL
        ========================================== */

        @keyframes heroLabelIn {
          0% {
            opacity: 0;
            transform: translateX(-28px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .rio-hero-label {
          opacity: 0;

          animation:
            heroLabelIn .75s
            cubic-bezier(.16,1,.3,1)
            .05s
            forwards;
        }


        /* =========================================
           TITLE
        ========================================== */

        @keyframes heroTitleIn {
          0% {
            opacity: 0;
            transform: translateY(32px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .rio-hero-title {
          opacity: 0;

          animation:
            heroTitleIn .9s
            cubic-bezier(.16,1,.3,1)
            .13s
            forwards;
        }


        /* =========================================
           DESCRIPTION
        ========================================== */

        @keyframes heroDescIn {
          0% {
            opacity: 0;
            transform: translateY(22px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .rio-hero-desc {
          opacity: 0;

          animation:
            heroDescIn .85s
            cubic-bezier(.16,1,.3,1)
            .27s
            forwards;
        }


        /* =========================================
           BUTTONS
        ========================================== */

        @keyframes heroButtonsIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .rio-hero-buttons {
          opacity: 0;

          animation:
            heroButtonsIn .85s
            cubic-bezier(.16,1,.3,1)
            .40s
            forwards;
        }

        .rio-hero-btn {
          transition:
            transform .35s cubic-bezier(.16,1,.3,1),
            background-color .35s ease,
            color .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .rio-hero-btn:hover {
          transform: translateY(-3px);
        }


        /* =========================================
           NAVIGATION
        ========================================== */

        @keyframes heroNavIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .rio-hero-nav-show {
          animation:
            heroNavIn .8s
            cubic-bezier(.16,1,.3,1)
            .50s
            forwards;
        }


        /* =========================================
           SLIDE NUMBER
        ========================================== */

        @keyframes heroNumberIn {
          from {
            opacity: 0;
            transform: translateX(16px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .rio-hero-number-show {
          animation:
            heroNumberIn .75s
            cubic-bezier(.16,1,.3,1)
            .60s
            forwards;
        }


        /* =========================================
           ARROWS
        ========================================== */

        .rio-slider-arrow {
          transition:
            transform .35s cubic-bezier(.16,1,.3,1),
            background-color .35s ease,
            color .35s ease,
            border-color .35s ease;
        }

        .rio-slider-arrow:hover {
          transform: scale(1.08);
        }


        /* =========================================
           MOBILE IMAGE POSITION
        ========================================== */

        @media (max-width: 639px) {

          .rio-hero-image {
            object-position: 62% center;
          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================== */

        @media (max-width: 390px) {

          .rio-hero-mobile-title {
            font-size: 32px !important;
          }

          .rio-hero-mobile-description {
            font-size: 14px !important;
            line-height: 1.6 !important;
          }

        }


        /* =========================================
           REDUCED MOTION
        ========================================== */

        @media (prefers-reduced-motion: reduce) {

          .rio-hero-section-show,
          .rio-slide-active .rio-hero-image,
          .rio-hero-label,
          .rio-hero-title,
          .rio-hero-desc,
          .rio-hero-buttons,
          .rio-hero-nav-show,
          .rio-hero-number-show {

            animation: none !important;

            opacity: 1 !important;

            transform: none !important;
          }
        }

      `}</style>

      <section
        ref={sectionRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`
          relative
          w-full

          h-[600px]
          sm:h-[650px]
          md:h-[680px]
          lg:h-[720px]

          overflow-hidden
          bg-[#173E2A]

          ${
            sectionVisible
              ? "rio-hero-section-show"
              : "opacity-0"
          }
        `}
      >

        {/* =========================================
            SLIDES
        ========================================== */}

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              absolute inset-0

              transition-opacity
              duration-[1000ms]
              ease-out

              ${
                index === activeSlide
                  ? "opacity-100 z-10 rio-slide-active"
                  : "opacity-0 z-0"
              }
            `}
          >

            {/* IMAGE */}
            <img
              src={slide.image}
              alt={slide.highlight}
              draggable="false"
              className="
                rio-hero-image

                absolute
                inset-0

                w-full
                h-full

                object-cover
              "
            />


            {/* =========================================
                DESKTOP / TABLET OVERLAY
            ========================================== */}

            <div
              className="
                hidden
                sm:block

                absolute
                inset-0

                bg-gradient-to-r
                from-[#071F15]/95
                via-[#0C3020]/65
                to-[#0C3020]/10
              "
            />


            {/* =========================================
                MOBILE OVERLAY - STRONG
            ========================================== */}

            <div
              className="
                sm:hidden

                absolute
                inset-0

                bg-gradient-to-b
                from-[#061810]/55
                via-[#061810]/66
                to-[#061810]/56
              "
            />


            {/* MOBILE LEFT DEPTH */}
            <div
              className="
                sm:hidden

                absolute
                inset-0

                bg-gradient-to-r
                from-[#061810]/62
                via-[#061810]/48
                to-[#061810]/15
              "
            />


            {/* BOTTOM DEPTH */}
            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/30
                via-transparent
                to-black/10
              "
            />


            {/* =========================================
                CONTENT
            ========================================== */}

            <div
              className="
                relative
                z-20

                max-w-[1400px]
                mx-auto

                h-full

                px-5
                sm:px-6
                lg:px-8
              "
            >

              <div className="h-full flex items-center">

                <div
                  key={`${activeSlide}-${slide.id}`}
                  className="
                    w-full
                    max-w-[780px]

                    pb-[76px]
                    sm:pb-[45px]
                    lg:pb-0
                  "
                >

                  {/* =========================================
                      LABEL
                  ========================================== */}

                  <div
                    className="
                      rio-hero-label

                      inline-flex
                      items-center
                      gap-2

                      mb-4
                      sm:mb-5
                    "
                  >
                    <span
                      className="
                        w-7
                        sm:w-8

                        h-[2px]

                        bg-[#8DBD56]
                      "
                    />

                    <span
                      className="
                        text-[11px]
                        sm:text-[13px]

                        uppercase

                        tracking-[1.7px]
                        sm:tracking-[2px]

                        text-[#C6E4AA]

                        font-semibold
                      "
                    >
                      {slide.label}
                    </span>
                  </div>


                  {/* =========================================
                      TITLE
                  ========================================== */}

                  <h1
                    className="
                      rio-hero-title
                      rio-hero-mobile-title

                      max-w-[96%]
                      sm:max-w-[760px]

                      text-[36px]
                      sm:text-[52px]
                      lg:text-[70px]

                      leading-[1.06]
                      sm:leading-[1.05]

                      tracking-[-1px]
                      sm:tracking-[-1.5px]

                      font-bold

                      text-white
                    "
                  >
                    {slide.title}

                    <span
                      className="
                        block
                        mt-1

                        text-[#A7D46F]
                      "
                    >
                      {slide.highlight}
                    </span>
                  </h1>


                  {/* =========================================
                      DESCRIPTION
                  ========================================== */}

                  <p
                    className="
                      rio-hero-desc
                      rio-hero-mobile-description

                      mt-4
                      sm:mt-6

                      max-w-[94%]
                      sm:max-w-[650px]

                      text-[15px]
                      sm:text-[18px]

                      leading-6
                      sm:leading-8

                      text-white/85
                    "
                  >
                    {slide.description}
                  </p>


                  {/* =========================================
                      BUTTONS
                  ========================================== */}

                  <div
                    className="
                      rio-hero-buttons

                      mt-6
                      sm:mt-8

                      flex
                      flex-col
                      min-[440px]:flex-row

                      items-stretch
                      min-[440px]:items-center

                      gap-3

                      max-w-[330px]
                      min-[440px]:max-w-none
                    "
                  >

                    {/* PRODUCT BUTTON */}
                    <Link
                      to={slide.link}
                      className="
                        rio-hero-btn

                        group

                        inline-flex
                        items-center
                        justify-center

                        gap-2.5

                        rounded-lg

                        bg-[#79A94B]

                        px-5
                        sm:px-7

                        py-3.5

                        text-[14px]
                        sm:text-[15px]

                        font-semibold

                        text-white

                        hover:bg-[#67943E]

                        hover:shadow-[0_12px_28px_rgba(0,0,0,.18)]
                      "
                    >
                      {slide.button}

                      <ArrowUpRight
                        size={17}
                        className="
                          transition-transform
                          duration-300

                          group-hover:rotate-45
                        "
                      />
                    </Link>


                    {/* CONTACT BUTTON */}
                    <Link
                      to="/contact"
                      className="
                        rio-hero-btn

                        inline-flex
                        items-center
                        justify-center

                        rounded-lg

                        border
                        border-white/35

                        bg-white/[0.08]

                        px-5
                        sm:px-7

                        py-3.5

                        text-[14px]
                        sm:text-[15px]

                        font-semibold

                        text-white

                        hover:bg-white
                        hover:text-[#17452F]
                        hover:border-white
                      "
                    >
                      Contact Us
                    </Link>

                  </div>

                </div>
              </div>
            </div>

          </div>
        ))}


        {/* =========================================
            BOTTOM NAVIGATION
        ========================================== */}

        <div
          className={`
            absolute
            z-30

            left-0
            right-0

            bottom-5
            sm:bottom-8

            ${
              sectionVisible
                ? "rio-hero-nav-show"
                : "opacity-0"
            }
          `}
        >

          <div
            className="
              max-w-[1400px]
              mx-auto

              px-5
              sm:px-6
              lg:px-8

              flex
              items-center
              justify-between
            "
          >

            {/* DOTS */}
            <div className="flex items-center gap-2">

              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`
                    h-[4px]
                    rounded-full

                    transition-all
                    duration-500

                    ${
                      index === activeSlide
                        ? "w-9 sm:w-10 bg-[#9BC965]"
                        : "w-4 bg-white/40 hover:bg-white/70"
                    }
                  `}
                />
              ))}

            </div>


            {/* ARROWS */}
            <div className="flex items-center gap-2">

              {/* PREVIOUS */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="
                  rio-slider-arrow

                  w-10
                  h-10

                  sm:w-12
                  sm:h-12

                  rounded-full

                  border
                  border-white/30

                  bg-black/20

                  backdrop-blur-sm

                  text-white

                  flex
                  items-center
                  justify-center

                  hover:bg-white
                  hover:text-[#17452F]
                  hover:border-white
                "
              >
                <ArrowLeft
                  size={18}
                  className="sm:w-[19px] sm:h-[19px]"
                />
              </button>


              {/* NEXT */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Slide"
                className="
                  rio-slider-arrow

                  w-10
                  h-10

                  sm:w-12
                  sm:h-12

                  rounded-full

                  bg-[#79A94B]

                  text-white

                  flex
                  items-center
                  justify-center

                  hover:bg-[#67943E]
                "
              >
                <ArrowRight
                  size={18}
                  className="sm:w-[19px] sm:h-[19px]"
                />
              </button>

            </div>

          </div>
        </div>


        {/* =========================================
            SLIDE NUMBER
        ========================================== */}

        <div
          className={`
            hidden
            md:flex

            absolute
            z-30

            right-8
            lg:right-12

            top-1/2
            -translate-y-1/2

            items-end
            gap-1

            text-white

            ${
              sectionVisible
                ? "rio-hero-number-show"
                : "opacity-0"
            }
          `}
        >
          <span className="text-[30px] font-semibold">
            0{activeSlide + 1}
          </span>

          <span className="text-[13px] text-white/50 mb-1">
            / 0{slides.length}
          </span>
        </div>

      </section>
    </>
  );
};

export default HeroSlider;