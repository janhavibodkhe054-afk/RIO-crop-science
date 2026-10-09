import React, { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "2021",
    label: "Established",
    accent: "#7FBF5A",
  },
  {
    value: "20+",
    label: "States Reached",
    accent: "#3FA7E0",
  },
  {
    value: "100+",
    label: "Distributors",
    accent: "#F58A2A",
  },
  {
    value: "10,000+",
    label: "Happy Farmers",
    accent: "#43B5E8",
  },
  {
    value: "50+",
    label: "R&D Products",
    accent: "#7FBF5A",
  },
];

const BrandSnapshot = () => {
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
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
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
        @keyframes statFadeUp {
          from {
            opacity: 0;
            transform: translateY(26px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes statLineGrow {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        .rio-stat-show {
          animation:
            statFadeUp .8s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .rio-stat-line {
          transform-origin: center;

          animation:
            statLineGrow .7s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .rio-snapshot-bg {
          background-image:
            linear-gradient(
              rgba(5,29,20,.84),
              rgba(5,29,20,.90)
            ),
            url("https://i.pinimg.com/736x/b5/ef/cc/b5efcc0935c2bdfbf3affe42d7dfcd48.jpg");

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        .rio-stat-card {
          transition:
            transform .35s cubic-bezier(.16,1,.3,1),
            background-color .35s ease,
            box-shadow .35s ease;
        }

        .rio-stat-card:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,.05);
        }

        @media (max-width: 1024px) {
          .rio-snapshot-bg {
            background-attachment: scroll;
          }
        }

        @media (max-width: 640px) {
          .rio-snapshot-bg {
            background-position: center center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rio-stat-show,
          .rio-stat-line {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="
          rio-snapshot-bg
          relative
          overflow-hidden
          py-10
          sm:py-12
          md:py-14
          lg:py-16
        "
      >
        {/* MOBILE STRONGER OVERLAY */}
        <div className="absolute inset-0 bg-[#071D14]/15 sm:bg-transparent pointer-events-none" />

        {/* BLUE GLOW */}
        <div
          className="
            absolute
            -top-16
            left-[4%]
            w-[180px]
            h-[180px]
            sm:w-[240px]
            sm:h-[240px]
            lg:w-[280px]
            lg:h-[280px]
            rounded-full
            bg-[#0284C7]/12
            blur-[80px]
            lg:blur-[100px]
            pointer-events-none
          "
        />

        {/* GREEN GLOW */}
        <div
          className="
            absolute
            -bottom-20
            right-[4%]
            w-[190px]
            h-[190px]
            sm:w-[250px]
            sm:h-[250px]
            lg:w-[300px]
            lg:h-[300px]
            rounded-full
            bg-[#7FBF5A]/12
            blur-[80px]
            lg:blur-[100px]
            pointer-events-none
          "
        />

        {/* ORANGE PATCH */}
        <div
          className="
            hidden
            sm:block
            absolute
            right-[28%]
            top-[8%]
            w-[150px]
            h-[150px]
            rounded-full
            bg-[#F58A2A]/[0.05]
            blur-[75px]
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
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-5
              gap-3
              sm:gap-4
              md:gap-5
              lg:gap-0
            "
          >
            {stats.map((stat, index) => {
              const isLast = index === stats.length - 1;

              return (
                <div
                  key={stat.label}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                  className={`
                    rio-stat-card
                    relative
                    text-center
                    rounded-xl
                    sm:rounded-2xl

                    px-2
                    py-5

                    sm:px-4
                    sm:py-6

                    lg:px-5
                    lg:py-7

                    ${
                      isLast
                        ? "col-span-2 md:col-span-1"
                        : ""
                    }

                    ${
                      visible
                        ? "rio-stat-show"
                        : "opacity-0"
                    }
                  `}
                >
                  {/* DESKTOP DIVIDER */}
                  {index !== stats.length - 1 && (
                    <div
                      className="
                        hidden
                        lg:block
                        absolute
                        right-0
                        top-1/2
                        -translate-y-1/2
                        h-[72px]
                        w-px
                        bg-white/15
                      "
                    />
                  )}

                  {/* NUMBER */}
                  <p
                    className="
                      text-[32px]
                      min-[390px]:text-[35px]
                      sm:text-[40px]
                      md:text-[44px]
                      lg:text-[48px]
                      xl:text-[54px]

                      leading-none

                      font-bold

                      tracking-[-1px]
                      sm:tracking-[-1.4px]

                      transition-transform
                      duration-300

                      group-hover:scale-105
                    "
                    style={{
                      color: stat.accent,
                    }}
                  >
                    {stat.value}
                  </p>

                  {/* LABEL */}
                  <p
                    className="
                      mt-2.5
                      sm:mt-3

                      text-[13px]
                      sm:text-[14px]
                      md:text-[15px]
                      lg:text-[16px]

                      leading-5
                      sm:leading-6

                      font-medium

                      text-white

                      tracking-[0.1px]
                    "
                  >
                    {stat.label}
                  </p>

                  {/* ACCENT LINE */}
                  <div className="mt-3.5 sm:mt-4 flex justify-center">
                    <span
                      className={`
                        block
                        h-[3px]
                        w-[28px]
                        sm:w-[34px]
                        rounded-full

                        ${
                          visible
                            ? "rio-stat-line"
                            : "scale-x-0"
                        }
                      `}
                      style={{
                        backgroundColor: stat.accent,
                        animationDelay: `${
                          index * 0.1 + 0.25
                        }s`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandSnapshot;