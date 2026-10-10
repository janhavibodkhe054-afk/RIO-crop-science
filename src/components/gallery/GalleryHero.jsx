import React, { useEffect, useState } from "react";
import { Images, ArrowDownRight } from "lucide-react";

const GalleryHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes galleryLeftIn {
          from {
            opacity: 0;
            transform: translateX(-36px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes galleryRightIn {
          from {
            opacity: 0;
            transform: translateX(36px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes galleryFloatOne {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes galleryFloatTwo {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(6px);
          }
        }

        @keyframes galleryGlow {
          0%, 100% {
            opacity: .35;
            transform: scale(1);
          }

          50% {
            opacity: .65;
            transform: scale(1.06);
          }
        }

        .gallery-left-show {
          animation: galleryLeftIn .85s cubic-bezier(.16,1,.3,1) forwards;
        }

        .gallery-right-show {
          animation: galleryRightIn .9s cubic-bezier(.16,1,.3,1) forwards;
        }

        .gallery-float-one {
          animation: galleryFloatOne 6s ease-in-out infinite;
        }

        .gallery-float-two {
          animation: galleryFloatTwo 7s ease-in-out infinite;
        }

        .gallery-glow {
          animation: galleryGlow 8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-left-show,
          .gallery-right-show,
          .gallery-float-one,
          .gallery-float-two,
          .gallery-glow {
            animation: none !important;
          }
        }
      `}</style>

      <section className="relative overflow-hidden bg-[#F7F9F6] py-10 sm:py-12 lg:py-14">
        {/* BACKGROUND EFFECTS */}
        <div className="gallery-glow absolute -right-[120px] top-[-90px] w-[280px] h-[280px] rounded-full bg-[#0284C7]/08 blur-[90px] pointer-events-none" />

        <div className="absolute -left-[110px] bottom-[-100px] w-[250px] h-[250px] rounded-full bg-[#F58220]/08 blur-[90px] pointer-events-none" />

        {/* DOT PATTERN */}
        <div
          className="absolute left-[5%] top-[20%] w-[90px] h-[90px] opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(23,107,67,.45) 1.2px, transparent 1.2px)",
            backgroundSize: "14px 14px",
          }}
        />

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center">

            {/* LEFT CONTENT */}
            <div
              className={
                loaded ? "gallery-left-show" : "opacity-0"
              }
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-[2px] bg-[#176B43]" />
                <span className="w-3 h-[2px] bg-[#0284C7]" />
                <span className="w-3 h-[2px] bg-[#F58220]" />

                <span className="text-[12px] sm:text-[13px] uppercase tracking-[1.9px] font-medium text-[#176B43]">
                  Rio Crop Science Gallery
                </span>
              </div>

              <h1 className="mt-3 max-w-[650px] text-[36px] sm:text-[44px] lg:text-[50px] leading-[1.08] tracking-[-0.5px] font-bold text-[#173E2A]">
                Our Work.
                <span className="block text-[#0284C7]">
                  Our Fields. Our Journey.
                </span>
              </h1>

              <p className="mt-5 max-w-[620px] text-[16px] sm:text-[17px] leading-7 text-[#46584E]">
                Explore moments from our fields, farmer interactions, product
                activities, crop support initiatives and the growing Rio Crop
                Science journey.
              </p>

              {/* MINI TAGS */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {[
                  "Field Visits",
                  "Farmer Connect",
                  "Crop Activities",
                  "Rio Moments",
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-[#173E2A]/10 bg-white px-3.5 py-2 text-[13px] sm:text-[14px] font-medium text-[#405248]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-medium text-[#176B43]">
                <Images size={18} />
                Explore Gallery
                <ArrowDownRight size={16} />
              </div>
            </div>

            {/* RIGHT COLLAGE */}
            <div
              className={`relative min-h-[390px] sm:min-h-[470px] lg:min-h-[500px] ${
                loaded ? "gallery-right-show" : "opacity-0"
              }`}
            >
              {/* IMAGE 1 */}
              <div className="gallery-float-one absolute left-0 top-[10px] w-[58%] h-[240px] sm:h-[300px] lg:h-[320px] overflow-hidden shadow-[0_18px_45px_rgba(20,60,40,.13)]">
                <img
                  src="/gallery-hero1.png"
                  alt="Rio Crop Science field activity"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102D21]/45 via-transparent to-transparent" />
              </div>

              {/* IMAGE 2 */}
              <div className="gallery-float-two absolute right-0 top-[55px] w-[37%] h-[190px] sm:h-[240px] lg:h-[255px] overflow-hidden shadow-[0_16px_40px_rgba(20,60,40,.12)]">
                <img
                  src="/gallery-hero2.jpg"
                  alt="Rio Crop Science farmer interaction"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* IMAGE 3 */}
              <div className="absolute left-[24%] bottom-[5px] w-[55%] h-[170px] sm:h-[210px] lg:h-[225px] overflow-hidden shadow-[0_16px_40px_rgba(20,60,40,.12)]">
                <img
                  src="/gallery-hero3.jpg"
                  alt="Rio Crop Science crop support"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102D21]/35 via-transparent to-transparent" />
              </div>

              {/* ORANGE ACCENT */}
              <div className="absolute right-[6%] bottom-[14px] w-[70px] h-[70px] bg-[#F58220]/12" />

              {/* SMALL LABEL */}
              <div className="absolute left-[4%] bottom-[35px] bg-[#173E2A] px-4 py-3 shadow-[0_10px_25px_rgba(20,60,40,.18)]">
                <p className="text-[11px] uppercase tracking-[1.5px] font-medium text-[#8FD16C]">
                  Captured in the Field
                </p>

                <p className="mt-1 text-[15px] sm:text-[16px] font-medium text-white">
                  Real Work. Real Agriculture.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryHero;