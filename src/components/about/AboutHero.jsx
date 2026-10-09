import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const AboutHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes aboutFadeLeft {
          from {
            opacity: 0;
            transform: translateX(-24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes aboutFadeRight {
          from {
            opacity: 0;
            transform: translateX(24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes blobFloat {
          0%, 100% {
            border-radius: 58% 42% 38% 62% / 48% 34% 66% 52%;
            transform: translateY(0);
          }

          50% {
            border-radius: 43% 57% 55% 45% / 38% 57% 43% 62%;
            transform: translateY(-5px);
          }
        }

        @keyframes orangeMove {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-8px) translateX(5px);
          }
        }

        .about-left-show {
          animation: aboutFadeLeft .75s ease forwards;
        }

        .about-right-show {
          animation: aboutFadeRight .8s ease forwards;
        }

        .rio-amoeba-shape {
          overflow: hidden;
          animation: blobFloat 8s ease-in-out infinite;
        }

        .rio-dot-pattern {
          background-image: radial-gradient(
            rgba(245, 130, 32, 0.18) 1.2px,
            transparent 1.2px
          );
          background-size: 18px 18px;
        }

        .rio-orange-float {
          animation: orangeMove 5s ease-in-out infinite;
        }
      `}</style>

      <section className="relative overflow-hidden bg-[#F8FAF8] py-10 sm:py-12 lg:py-14">

        {/* ORANGE DOT EFFECT - ONLY RIGHT TOP */}
        <div className="absolute top-0 right-0 w-[280px] h-[220px] rio-dot-pattern opacity-45 pointer-events-none" />

        {/* ORANGE SOFT GLOW */}
        <div className="absolute top-[-70px] right-[10%] w-[240px] h-[240px] rounded-full bg-[#F58220]/[0.10] blur-3xl pointer-events-none" />

        {/* GREEN SOFT GLOW */}
        <div className="absolute bottom-[-90px] left-[5%] w-[260px] h-[260px] rounded-full bg-[#176B43]/[0.06] blur-3xl pointer-events-none" />

        {/* BLUE SOFT GLOW */}
        <div className="absolute bottom-[5%] right-[30%] w-[200px] h-[200px] rounded-full bg-[#0284C7]/[0.05] blur-3xl pointer-events-none" />

        {/* ORANGE FLOATING SHAPE */}
        <div className="rio-orange-float absolute right-[5%] top-[22%] w-10 h-10 rounded-full border-[6px] border-[#F58220]/20 pointer-events-none" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_.82fr] gap-8 lg:gap-12 xl:gap-14 items-center">

            {/* LEFT CONTENT */}
            <div className={loaded ? "about-left-show" : "opacity-0"}>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-5 h-[2px] bg-[#176B43]" />
                <span className="w-3 h-[2px] bg-[#0284C7]" />
                <span className="w-3 h-[2px] bg-[#F58220]" />

                <span className="text-[11px] sm:text-[12px] uppercase tracking-[2px] font-bold text-[#176B43]">
                  About Rio Crop Science
                </span>
              </div>

              <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] tracking-[-1px] font-bold text-[#173E2A]">
                Transforming Agriculture

                <span className="block mt-1 text-[#0284C7]">
                  Through Sustainable Innovation
                </span>
              </h1>

              <div className="mt-4 space-y-3 max-w-[620px]">
                <p className="text-[15px] sm:text-[16px] leading-7 text-[#5B675F]">
                  At Rio Crop Science, we are committed to transforming Indian
                  agriculture through innovation, sustainability and farmer
                  empowerment.
                </p>

                <p className="text-[14px] sm:text-[15px] leading-7 text-[#6A756E]">
                  Founded in 2021, the company began with a vision to make
                  agriculture more efficient, eco-conscious and rewarding for
                  farmers.
                </p>
              </div>

              {/* BUTTONS */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2.5 rounded-lg bg-[#176B43] text-white px-5 py-3 text-[13px] sm:text-[14px] font-semibold hover:bg-[#0284C7] transition-all duration-300"
                >
                  Explore Products

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-lg border border-[#173E2A]/15 bg-white px-5 py-3 text-[13px] sm:text-[14px] font-semibold text-[#173E2A] hover:border-[#F58220] hover:text-[#F58220] transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className={`relative flex justify-center lg:justify-end ${
                loaded ? "about-right-show" : "opacity-0"
              }`}
            >
              {/* OUTER BLOB */}
              <div className="absolute w-[240px] h-[260px] sm:w-[310px] sm:h-[340px] lg:w-[350px] lg:h-[390px] bg-[#176B43]/10 blur-2xl rio-amoeba-shape" />

              {/* ORANGE BACK ACCENT */}
              <div className="absolute right-[-8px] top-[35px] w-[110px] h-[110px] rounded-full bg-[#F58220]/10 pointer-events-none" />

              {/* IMAGE */}
              <div className="relative rio-amoeba-shape w-[250px] h-[290px] sm:w-[330px] sm:h-[380px] lg:w-[370px] lg:h-[420px] border-[8px] border-white shadow-[0_16px_45px_rgba(20,60,40,0.14)]">
                <img
                  src="/about-hero.jpg"
                  alt="Rio Crop Science sustainable agriculture"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102F20]/28 via-transparent to-transparent" />
              </div>

              {/* FOUNDED BADGE */}
              <div className="absolute left-0 sm:left-4 bottom-3 sm:bottom-5 bg-white rounded-xl px-4 py-3 shadow-[0_10px_25px_rgba(20,60,40,0.12)] border-l-[3px] border-[#F58220]">
                <p className="text-[9px] uppercase tracking-[1.4px] font-bold text-[#176B43]">
                  Founded
                </p>

                <p className="mt-1 text-[22px] sm:text-[25px] font-extrabold text-[#173E2A] leading-none">
                  2021
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;