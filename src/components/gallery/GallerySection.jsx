import React, { useEffect, useRef, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const galleryItems = Array.from(
  { length: 30 },
  (_, index) => `/g${index + 1}.jpeg`
);

const GallerySection = () => {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      }

      if (e.key === "ArrowRight") {
        handleNext();
      }

      if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  return (
    <>
      <style>{`
        @keyframes gallerySectionIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes galleryItemIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes galleryModalIn {
          from {
            opacity: 0;
            transform: scale(.96);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .gallery-section-show {
          animation:
            gallerySectionIn .75s cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .gallery-item-show {
          animation:
            galleryItemIn .6s cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .gallery-modal-show {
          animation:
            galleryModalIn .3s ease
            forwards;
        }

        .rio-gallery-image img {
          transition:
            transform .6s cubic-bezier(.16,1,.3,1);
        }

        .rio-gallery-image:hover img {
          transform: scale(1.025);
        }

        .rio-gallery-image {
          transition:
            transform .35s ease,
            box-shadow .35s ease;
        }

        .rio-gallery-image:hover {
          transform: translateY(-3px);

          box-shadow:
            0 14px 30px rgba(23,62,42,.10);
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-section-show,
          .gallery-item-show,
          .gallery-modal-show {
            animation: none !important;
          }

          .rio-gallery-image img {
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
          sm:py-12
          lg:py-14
        "
      >
        {/* BACKGROUND EFFECT */}
        <div
          className="
            absolute
            -right-[100px]
            top-[20px]
            w-[240px]
            h-[240px]
            rounded-full
            bg-[#F58220]/[0.06]
            blur-3xl
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            -left-[100px]
            bottom-[-80px]
            w-[240px]
            h-[240px]
            rounded-full
            bg-[#0284C7]/[0.04]
            blur-3xl
            pointer-events-none
          "
        />

        <div
          className={`relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 ${
            visible ? "gallery-section-show" : "opacity-0"
          }`}
        >
          {/* HEADER */}
          <div className="text-center max-w-[700px] mx-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="w-7 h-[2px] bg-[#176B43]" />
              <span className="w-3 h-[2px] bg-[#0284C7]" />
              <span className="w-3 h-[2px] bg-[#F58220]" />
            </div>

            <h2
              className="
                mt-3
                text-[30px]
                sm:text-[34px]
                lg:text-[38px]
                font-bold
                text-[#173E2A]
              "
            >
              Moments From Our Journey
            </h2>

            <p
              className="
                mt-3
                text-[14px]
                sm:text-[15px]
                text-[#617067]
              "
            >
              Explore moments, activities and experiences from Rio Crop Science.
            </p>
          </div>

          {/* GALLERY */}
          <div
            className="
              mt-8

              columns-1
              min-[480px]:columns-2
              md:columns-3
              xl:columns-4

              gap-3
              sm:gap-4
            "
          >
            {galleryItems.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedIndex(index)}
                style={{
                  animationDelay: `${Math.min(index * 0.04, 0.7)}s`,
                }}
                className={`
                  rio-gallery-image
                  gallery-item-show

                  relative

                  w-full

                  mb-3
                  sm:mb-4

                  overflow-hidden

                  rounded-[14px]
                  sm:rounded-[16px]

                  bg-white

                  border
                  border-[#173E2A]/10

                  cursor-pointer

                  break-inside-avoid

                  ${
                    visible
                      ? ""
                      : "opacity-0"
                  }
                `}
              >
                <img
                  src={image}
                  alt={`Rio Crop Science Gallery ${index + 1}`}
                  loading="lazy"
                  className="
                    block
                    w-full
                    h-auto
                    object-contain
                  "
                />

                {/* HOVER OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-[#071A12]/0

                    hover:bg-[#071A12]/10

                    transition-colors
                    duration-300
                  "
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div
          className="
            fixed
            inset-0
            z-[9999]

            bg-[#071A12]/96

            backdrop-blur-md

            flex
            items-center
            justify-center

            p-3
            sm:p-5
            lg:p-7
          "
          onClick={() => setSelectedIndex(null)}
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close gallery"
            className="
              absolute
              top-3
              right-3

              sm:top-5
              sm:right-5

              z-20

              w-10
              h-10

              sm:w-12
              sm:h-12

              rounded-full

              bg-white

              text-[#173E2A]

              flex
              items-center
              justify-center

              hover:bg-[#F58220]
              hover:text-white

              transition-all
              duration-300
            "
          >
            <X size={20} />
          </button>

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
            className="
              absolute
              left-2
              sm:left-5

              z-20

              w-10
              h-10

              sm:w-12
              sm:h-12

              rounded-full

              bg-white/10

              border
              border-white/15

              text-white

              flex
              items-center
              justify-center

              hover:bg-white
              hover:text-[#173E2A]

              transition-all
              duration-300
            "
          >
            <ChevronLeft size={22} />
          </button>

          {/* NEXT */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
            className="
              absolute
              right-2
              sm:right-5

              z-20

              w-10
              h-10

              sm:w-12
              sm:h-12

              rounded-full

              bg-white/10

              border
              border-white/15

              text-white

              flex
              items-center
              justify-center

              hover:bg-white
              hover:text-[#173E2A]

              transition-all
              duration-300
            "
          >
            <ChevronRight size={22} />
          </button>

          {/* ORIGINAL IMAGE */}
          <div
            className="
              gallery-modal-show

              relative

              w-full
              h-full

              flex
              items-center
              justify-center
            "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[selectedIndex]}
              alt={`Rio Crop Science Gallery ${selectedIndex + 1}`}
              className="
                block

                max-w-[94vw]
                max-h-[90vh]

                w-auto
                h-auto

                object-contain
              "
            />

            {/* IMAGE COUNTER */}
            <div
              className="
                absolute
                bottom-2
                left-1/2
                -translate-x-1/2

                rounded-full

                bg-black/45

                px-4
                py-2

                text-[12px]
                sm:text-[13px]

                font-medium

                text-white/90
              "
            >
              {selectedIndex + 1} / {galleryItems.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;