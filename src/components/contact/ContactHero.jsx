import React, { useEffect, useState } from "react";
import {
  ArrowDownRight,
  MessageCircle,
  Phone,
} from "lucide-react";

const ContactHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes contactHeroUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contactGlowMove {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(16px, -10px);
          }
        }

        .contact-hero-show {
          animation:
            contactHeroUp .8s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .contact-glow-move {
          animation:
            contactGlowMove 8s
            ease-in-out
            infinite;
        }

        .contact-btn {
          transition:
            transform .3s ease,
            background-color .3s ease,
            color .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .contact-btn:hover {
          transform: translateY(-2px);
        }
      `}</style>

      <section
        className="
          relative
          overflow-hidden
          py-14
          sm:py-16
          lg:py-20
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(6, 24, 18, 0.80),
              rgba(8, 31, 22, 0.78)
            ),
            url("/contacthero.jpg")
          `,
        }}
      >
        {/* EXTRA OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#0A281C]/20
            via-transparent
            to-[#0A281C]/15
            pointer-events-none
          "
        />

        {/* BLUE GLOW */}
        <div
          className="
            contact-glow-move
            absolute
            -top-[130px]
            right-[7%]
            w-[360px]
            h-[360px]
            rounded-full
            bg-[#38BDF8]/12
            blur-[110px]
            pointer-events-none
          "
        />

        {/* GREEN GLOW */}
        <div
          className="
            absolute
            -bottom-[130px]
            left-[5%]
            w-[360px]
            h-[360px]
            rounded-full
            bg-[#7FBF5A]/16
            blur-[110px]
            pointer-events-none
          "
        />

        {/* ORANGE PATCH */}
        <div
          className="
            absolute
            -right-[80px]
            bottom-[25px]
            w-[220px]
            h-[250px]
            rounded-[48%_52%_40%_60%/55%_43%_57%_45%]
            bg-[#F58220]/10
            pointer-events-none
          "
        />

        {/* DOT PATTERN */}
        <div
          className="
            absolute
            top-8
            left-8
            w-[100px]
            h-[100px]
            opacity-20
            pointer-events-none
          "
          style={{
            backgroundImage:
              "radial-gradient(rgba(245,130,32,.55) 1.2px, transparent 1.2px)",
            backgroundSize: "15px 15px",
          }}
        />

        <div
          className="
            relative
            z-10
            max-w-[1200px]
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div
            className={`
              max-w-[850px]
              mx-auto
              text-center

              ${
                loaded
                  ? "contact-hero-show"
                  : "opacity-0"
              }
            `}
          >
            {/* LABEL LINES */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-6 h-[2px] bg-[#8FD16C]" />
              <span className="w-3 h-[2px] bg-[#38BDF8]" />
              <span className="w-3 h-[2px] bg-[#F58220]" />
            </div>

            {/* LABEL */}
            <p
              className="
                text-[11px]
                sm:text-[12px]
                uppercase
                tracking-[2.3px]
                font-semibold
                text-[#A7D46F]
              "
            >
              Contact Rio Crop Science
            </p>

            {/* HEADING */}
            <h1
              className="
                mt-2

                text-[34px]
                sm:text-[42px]
                lg:text-[48px]

                leading-[1.1]

                tracking-[-1px]

                font-bold

                text-white
              "
            >
              Let&apos;s Grow Better,

              <span className="text-[#67C7F0]">
                {" "}Together.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                max-w-[760px]
                mx-auto

                text-[15px]
                sm:text-[17px]

                leading-7
                sm:leading-8

                text-white/82
              "
            >
              Have a question about our products, farming solutions or
              partnership opportunities? Our team is ready to connect with you.
            </p>

            {/* QUICK ACTIONS */}
            <div
              className="
                mt-8

                flex
                flex-col
                sm:flex-row

                items-center
                justify-center

                gap-3
              "
            >
              {/* CALL BUTTON */}
              <a
                href="tel:+917517411590"
                className="
                  contact-btn
                  group

                  inline-flex
                  items-center
                  justify-center

                  gap-2.5

                  rounded-lg

                  bg-[#7FBF5A]

                  px-5
                  sm:px-6

                  py-3.5

                  text-[13px]
                  sm:text-[14px]

                  font-semibold

                  text-[#173E2A]

                  shadow-[0_10px_24px_rgba(127,191,90,.20)]

                  hover:bg-[#A3D977]
                  hover:shadow-[0_12px_28px_rgba(127,191,90,.28)]
                "
              >
                <Phone size={17} />

                Call Our Team
              </a>

              {/* WHATSAPP BUTTON */}
              <a
                href="https://wa.me/917517411590"
                target="_blank"
                rel="noreferrer"
                className="
                  contact-btn
                  group

                  inline-flex
                  items-center
                  justify-center

                  gap-2.5

                  rounded-lg

                  border
                  border-[#67C7F0]/40

                  bg-[#0284C7]/18

                  px-5
                  sm:px-6

                  py-3.5

                  text-[13px]
                  sm:text-[14px]

                  font-semibold

                  text-white

                  hover:bg-[#0284C7]
                  hover:border-[#0284C7]

                  hover:shadow-[0_12px_26px_rgba(2,132,199,.22)]
                "
              >
                <MessageCircle size={17} />

                WhatsApp Us
              </a>
            </div>

            {/* SCROLL INDICATOR */}
            <div
              className="
                mt-8

                inline-flex
                items-center

                gap-2

                text-[11px]
                sm:text-[12px]

                font-medium

                text-white/55
              "
            >
              Contact Details & Enquiry

              <ArrowDownRight size={15} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHero;