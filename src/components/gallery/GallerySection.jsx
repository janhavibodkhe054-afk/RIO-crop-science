import React, { useEffect, useRef, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const galleryItems = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.jpg",
  "/images/gallery/gallery-7.jpg",
  "/images/gallery/gallery-8.jpg",
  "/images/gallery/gallery-9.jpg",
  "/images/gallery/gallery-10.jpg",
  "/images/gallery/gallery-11.jpg",
  "/images/gallery/gallery-12.jpg",
];

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
          animation: galleryModalIn .3s ease forwards;
        }

        .rio-gallery-image img {
          transition: transform .6s cubic-bezier(.16,1,.3,1);
        }

        .rio-gallery-image:hover img {
          transform: scale(1.06);
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
        className="relative overflow-hidden bg-[#F7F9F6] py-10 sm:py-12 lg:py-14"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute -right-[100px] top-[20px] w-[240px] h-[240px] rounded-full bg-[#F58220]/[0.06] blur-3xl pointer-events-none" />

        <div className="absolute -left-[100px] bottom-[-80px] w-[240px] h-[240px] rounded-full bg-[#0284C7]/[0.04] blur-3xl pointer-events-none" />

        <div
          className={`relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 ${
            visible ? "gallery-section-show" : "opacity-0"
          }`}
        >
          {/* SMALL HEADER */}
          <div className="text-center max-w-[700px] mx-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="w-7 h-[2px] bg-[#176B43]" />
              <span className="w-3 h-[2px] bg-[#0284C7]" />
              <span className="w-3 h-[2px] bg-[#F58220]" />
            </div>

            <h2 className="mt-3 text-[30px] sm:text-[34px] lg:text-[38px] font-semibold text-[#173E2A]">
              Moments From Our Journey
            </h2>
          </div>

          {/* GALLERY GRID */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryItems.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedIndex(index)}
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
                className={`rio-gallery-image gallery-item-show relative overflow-hidden bg-[#E9EEE9] aspect-[4/3] ${
                  visible ? "" : "opacity-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Rio Crop Science Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-[#071A12]/94 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedIndex(null)}
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close gallery"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-11 h-11 rounded-full bg-white text-[#173E2A] flex items-center justify-center hover:bg-[#F58220] hover:text-white transition-all duration-300"
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
            className="absolute left-3 sm:left-6 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-white hover:text-[#173E2A] transition-all duration-300"
          >
            <ChevronLeft size={21} />
          </button>

          {/* NEXT */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-white hover:text-[#173E2A] transition-all duration-300"
          >
            <ChevronRight size={21} />
          </button>

          {/* IMAGE */}
          <div
            className="gallery-modal-show max-w-[1100px] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[selectedIndex]}
              alt={`Rio Crop Science Gallery ${selectedIndex + 1}`}
              className="max-w-full max-h-[82vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;