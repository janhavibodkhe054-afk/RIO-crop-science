import React, { useEffect, useState } from "react";
import {
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";

import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const whatsappUrl =
  "https://wa.me/917517411590?text=Hello%20Rio%20Crop%20Science%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products%20and%20services.";

const Navbar = () => {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const location = useLocation();

  /* ========================================
     SCROLL STATE
  ======================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* ========================================
     CLOSE MENU ON ROUTE CHANGE
  ======================================== */

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /* ========================================
     BODY LOCK + ESC
  ======================================== */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`

        /* ========================================
           LOGO FLOAT
        ======================================== */

        @keyframes rioLogoFloat {

          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-3px);
          }
        }

        .rio-logo-float {
          animation:
            rioLogoFloat
            4s
            ease-in-out
            infinite;
        }


        /* ========================================
           BUTTON SHINE
        ======================================== */

        @keyframes rioShine {

          0% {
            transform:
              translateX(-170%)
              skewX(-18deg);
          }

          100% {
            transform:
              translateX(350%)
              skewX(-18deg);
          }
        }

        .rio-shine {
          position: relative;
          overflow: hidden;
        }

        .rio-shine::after {

          content: "";

          position: absolute;

          top: 0;
          left: 0;

          width: 38%;
          height: 100%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.24),
              transparent
            );

          animation:
            rioShine
            3.8s
            ease-in-out
            infinite;

          pointer-events: none;
        }


        /* ========================================
           MOBILE MENU ITEMS
        ======================================== */

        @keyframes rioMenuItem {

          from {
            opacity: 0;
            transform: translateX(24px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .rio-menu-item {
          animation:
            rioMenuItem
            .45s
            cubic-bezier(.16,1,.3,1)
            both;
        }


        /* ========================================
           MOVING BRAND LINE
        ======================================== */

        @keyframes rioLineMove {

          0% {
            left: -180px;
          }

          100% {
            left: 100%;
          }
        }

        .rio-moving-line {
          animation:
            rioLineMove
            5s
            linear
            infinite;
        }


        /* ========================================
           MOBILE TOP TICKER
        ======================================== */

        @keyframes rioTicker {

          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .rio-mobile-ticker {
          width: max-content;

          animation:
            rioTicker
            30s
            linear
            infinite;
        }


        /* ========================================
           QUOTE
        ======================================== */

        @keyframes rioQuotePulse {

          0%, 100% {
            opacity: .78;
          }

          50% {
            opacity: 1;
          }
        }

        .rio-quote-pulse {
          animation:
            rioQuotePulse
            4s
            ease-in-out
            infinite;
        }


        /* ========================================
           DRAWER SCROLLBAR
        ======================================== */

        .rio-drawer-scroll::-webkit-scrollbar {
          width: 5px;
        }

        .rio-drawer-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .rio-drawer-scroll::-webkit-scrollbar-thumb {
          background:
            rgba(23,62,42,.15);

          border-radius: 999px;
        }


        /* ========================================
           SAFE AREA
        ======================================== */

        .rio-mobile-safe {
          padding-bottom:
            max(
              20px,
              env(safe-area-inset-bottom)
            );
        }


        /* ========================================
           VERY SMALL MOBILE
        ======================================== */

        @media (max-width: 360px) {

          .rio-brand-title {
            font-size: 15px !important;
          }

          .rio-brand-tagline {
            display: none !important;
          }

          .rio-mobile-logo {
            width: 50px !important;
            height: 46px !important;
          }
        }


        /* ========================================
           REDUCED MOTION
        ======================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .rio-logo-float,
          .rio-shine::after,
          .rio-menu-item,
          .rio-moving-line,
          .rio-mobile-ticker,
          .rio-quote-pulse {

            animation:
              none !important;
          }
        }

      `}</style>

      {/* =========================================
          TOP BAR — DESKTOP / TABLET
      ========================================== */}

      <div
        className="
          hidden
          md:block

          bg-[#0D2B1E]

          text-white
        "
      >
        <div
          className="
            max-w-[1480px]
            mx-auto

            min-h-[46px]

            px-5
            lg:px-8
            xl:px-10

            flex
            items-center
            justify-between

            gap-5
          "
        >
          {/* LEFT CONTACT INFO */}

          <div
            className="
              flex
              items-center

              gap-4
              lg:gap-5
              xl:gap-7

              min-w-0
            "
          >
            {/* PHONE */}

            <a
              href="tel:+917517411590"
              className="
                flex
                items-center
                gap-2

                text-[13px]
                xl:text-[14px]

                font-semibold

                text-white/88

                hover:text-white

                transition-colors

                whitespace-nowrap
              "
            >
              <Phone
                size={15}
                className="
                  text-[#7CC95B]
                  shrink-0
                "
              />

              +91 75174 11590
            </a>

            {/* EMAIL */}

            <a
              href="mailto:riocropscience@gmail.com"
              className="
                hidden
                lg:flex

                items-center
                gap-2

                text-[13px]
                xl:text-[14px]

                font-medium

                text-white/75

                hover:text-white

                transition-colors

                min-w-0
              "
            >
              <Mail
                size={15}
                className="
                  text-[#39A8E0]
                  shrink-0
                "
              />

              <span className="truncate">
                riocropscience@gmail.com
              </span>
            </a>

            {/* ADDRESS */}

            <div
              className="
                hidden
                2xl:flex

                items-center

                gap-2

                text-[13px]

                font-medium

                text-white/65

                whitespace-nowrap
              "
            >
              <MapPin
                size={15}
                className="
                  text-[#F58220]
                  shrink-0
                "
              />

              Chhatrapati Sambhajinagar,
              Maharashtra
            </div>
          </div>

          {/* QUOTE */}

          <div
            className="
              rio-quote-pulse

              hidden
              lg:flex

              items-center

              gap-3

              shrink-0
            "
          >
            <span
              className="
                w-7
                h-px

                bg-[#F58220]
              "
            />

            <p
              className="
                text-[12px]
                xl:text-[13px]

                italic

                font-medium

                tracking-[0.15px]

                text-white/80

                whitespace-nowrap
              "
            >
              “Rooted in Science.
              <span className="text-[#91D46E]">
                {" "}Growing with Farmers.
              </span>
              ”
            </p>
          </div>
        </div>
      </div>

      {/* =========================================
          TOP BAR — MOBILE
      ========================================== */}

      <div
        className="
          md:hidden

          relative

          overflow-hidden

          bg-[#0D2B1E]

          text-white

          h-[40px]
        "
      >
        {/* LEFT FADE */}

        <div
          className="
            absolute
            inset-y-0
            left-0

            z-10

            w-8

            bg-gradient-to-r
            from-[#0D2B1E]
            to-transparent

            pointer-events-none
          "
        />

        {/* RIGHT FADE */}

        <div
          className="
            absolute
            inset-y-0
            right-0

            z-10

            w-8

            bg-gradient-to-l
            from-[#0D2B1E]
            to-transparent

            pointer-events-none
          "
        />

        <div
          className="
            rio-mobile-ticker

            flex
            items-center

            h-full
          "
        >
          {[0, 1].map((set) => (
            <div
              key={set}
              aria-hidden={
                set === 1
                  ? "true"
                  : undefined
              }
              className="
                flex
                items-center
                shrink-0
              "
            >
              {/* PHONE */}

              <div
                className="
                  flex
                  items-center
                  gap-2

                  px-4

                  text-[12px]

                  font-semibold

                  text-white/88
                "
              >
                <Phone
                  size={13}
                  className="
                    text-[#7CC95B]
                  "
                />

                +91 75174 11590
              </div>

              <span
                className="
                  w-1
                  h-1

                  rounded-full

                  bg-white/25
                "
              />

              {/* EMAIL */}

              <div
                className="
                  flex
                  items-center
                  gap-2

                  px-4

                  text-[12px]

                  font-medium

                  text-white/78
                "
              >
                <Mail
                  size={13}
                  className="
                    text-[#39A8E0]
                  "
                />

                riocropscience@gmail.com
              </div>

              <span
                className="
                  w-1
                  h-1

                  rounded-full

                  bg-white/25
                "
              />

              {/* LOCATION */}

              <div
                className="
                  flex
                  items-center
                  gap-2

                  px-4

                  text-[12px]

                  font-medium

                  text-white/78
                "
              >
                <MapPin
                  size={13}
                  className="
                    text-[#F58220]
                  "
                />

                Chhatrapati Sambhajinagar
              </div>

              <span
                className="
                  w-1
                  h-1

                  rounded-full

                  bg-white/25
                "
              />

              {/* QUOTE */}

              <div
                className="
                  px-4

                  text-[12px]

                  italic

                  font-medium

                  text-[#91D46E]
                "
              >
                Rooted in Science.
                Growing with Farmers.
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          MAIN NAVBAR
      ========================================== */}

      <header
        className={`
          sticky
          top-0

          z-[999]

          border-b
          border-[#173E2A]/[0.07]

          transition-all
          duration-500

          ${
            scrolled
              ? `
                bg-white/96
                backdrop-blur-2xl

                shadow-[0_14px_40px_rgba(20,60,40,.10)]
              `
              : `
                bg-white/96
                backdrop-blur-xl

                shadow-[0_4px_20px_rgba(20,60,40,.04)]
              `
          }
        `}
      >
        <div
          className="
            max-w-[1480px]
            mx-auto

            px-3
            min-[380px]:px-4
            sm:px-6
            lg:px-7
            xl:px-10
          "
        >
          <div
            className={`
              flex
              items-center
              justify-between

              gap-2
              sm:gap-4

              transition-all
              duration-500

              ${
                scrolled
                  ? `
                    h-[68px]
                    sm:h-[72px]
                    lg:h-[76px]
                    xl:h-[80px]
                  `
                  : `
                    h-[74px]
                    sm:h-[80px]
                    lg:h-[84px]
                    xl:h-[90px]
                  `
              }
            `}
          >
            {/* ==============================
                LOGO / BRAND
            ============================== */}

            <Link
              to="/"
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                flex
                items-center

                gap-2
                min-[380px]:gap-2.5
                sm:gap-3

                shrink-0

                min-w-0

                group
              "
            >
              {/* LOGO */}

              <div
                className={`
                  rio-logo-float
                  rio-mobile-logo

                  shrink-0

                  transition-all
                  duration-500

                  ${
                    scrolled
                      ? `
                        w-[50px]
                        h-[45px]

                        sm:w-[60px]
                        sm:h-[52px]

                        xl:w-[64px]
                        xl:h-[56px]
                      `
                      : `
                        w-[54px]
                        h-[49px]

                        sm:w-[66px]
                        sm:h-[58px]

                        xl:w-[70px]
                        xl:h-[62px]
                      `
                  }
                `}
              >
                <img
                  src="/logo.jpg"
                  alt="Rio Crop Science"
                  className="
                    w-full
                    h-full

                    object-contain
                  "
                />
              </div>

              {/* BRAND TEXT */}

              <div
                className="
                  block
                  min-w-0
                "
              >
                <h2
                  className={`
                    rio-brand-title

                    font-extrabold

                    tracking-[-0.5px]

                    leading-none

                    text-[#173E2A]

                    whitespace-nowrap

                    transition-all
                    duration-500

                    ${
                      scrolled
                        ? `
                          text-[16px]
                          min-[380px]:text-[17px]
                          sm:text-[20px]
                          xl:text-[23px]
                        `
                        : `
                          text-[17px]
                          min-[380px]:text-[18px]
                          sm:text-[21px]
                          xl:text-[25px]
                        `
                    }
                  `}
                >
                  Rio Crop Science
                </h2>

                <p
                  className="
                    rio-brand-tagline

                    mt-1
                    sm:mt-1.5

                    text-[6.5px]
                    min-[380px]:text-[7px]
                    sm:text-[8px]
                    xl:text-[9px]

                    uppercase

                    tracking-[.7px]
                    min-[380px]:tracking-[1px]
                    sm:tracking-[1.8px]
                    xl:tracking-[2px]

                    font-bold

                    text-[#6FAA4A]

                    whitespace-nowrap
                  "
                >
                 Excellence is our Standard
                </p>
              </div>
            </Link>

            {/* ==============================
                DESKTOP NAV
            ============================== */}

            <nav
              className="
                hidden
                lg:flex

                items-center

                gap-0.5
                xl:gap-1
                2xl:gap-1.5
              "
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({
                    isActive,
                  }) =>
                    `
                      relative

                      px-2.5
                      xl:px-3.5
                      2xl:px-[18px]

                      py-2.5
                      xl:py-3

                      rounded-full

                      text-[14px]
                      xl:text-[15px]
                      2xl:text-[16px]

                      font-semibold

                      whitespace-nowrap

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? `
                            bg-[#173E2A]
                            text-white

                            shadow-[0_7px_18px_rgba(23,62,42,.16)]
                          `
                          : `
                            text-[#36473E]

                            hover:text-[#173E2A]
                            hover:bg-[#F1F6F2]
                          `
                      }
                    `
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* ==============================
                DESKTOP WHATSAPP
            ============================== */}

            <div
              className="
                hidden
                lg:flex

                shrink-0
              "
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  rio-shine
                  group

                  flex
                  items-center

                  gap-2
                  xl:gap-2.5

                  rounded-full

                  bg-[#176B43]

                  text-white

                  pl-3.5
                  xl:pl-5

                  pr-1.5
                  xl:pr-2

                  py-1.5
                  xl:py-2

                  shadow-[0_10px_28px_rgba(23,107,67,.22)]

                  hover:bg-[#0D2B1E]
                  hover:-translate-y-[2px]

                  transition-all
                  duration-300
                "
              >
                <MessageCircle
                  size={17}
                  className="
                    relative
                    z-10
                  "
                />

                <span
                  className="
                    relative
                    z-10

                    text-[13px]
                    xl:text-[14px]

                    font-bold

                    whitespace-nowrap
                  "
                >
                  WhatsApp Us
                </span>

                <span
                  className="
                    relative
                    z-10

                    w-[34px]
                    h-[34px]

                    xl:w-[36px]
                    xl:h-[36px]

                    rounded-full

                    bg-[#F58220]

                    flex
                    items-center
                    justify-center

                    transition-transform
                    duration-500

                    group-hover:rotate-45
                  "
                >
                  <ArrowUpRight
                    size={16}
                  />
                </span>
              </a>
            </div>

            {/* ==============================
                MOBILE / TABLET ACTIONS
            ============================== */}

            <div
              className="
                lg:hidden

                flex
                items-center

                gap-1.5
                sm:gap-2

                shrink-0
              "
            >
              {/* WHATSAPP */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Rio Crop Science"
                className="
                  hidden
                  min-[390px]:flex

                  w-10
                  h-10

                  sm:w-11
                  sm:h-11

                  rounded-full

                  bg-[#176B43]

                  text-white

                  items-center
                  justify-center

                  shadow-[0_7px_18px_rgba(23,107,67,.18)]

                  hover:bg-[#0D2B1E]

                  transition-all
                  duration-300
                "
              >
                <MessageCircle
                  size={18}
                />
              </a>

              {/* MENU */}

              <button
                type="button"
                onClick={() =>
                  setMenuOpen(true)
                }
                aria-label="Open menu"
                aria-expanded={menuOpen}
                className="
                  w-10
                  h-10

                  sm:w-11
                  sm:h-11

                  rounded-full

                  bg-[#F1F6F2]

                  border
                  border-[#173E2A]/10

                  text-[#173E2A]

                  flex
                  items-center
                  justify-center

                  hover:bg-[#173E2A]
                  hover:text-white

                  hover:scale-105

                  transition-all
                  duration-300
                "
              >
                <Menu size={21} />
              </button>
            </div>
          </div>
        </div>

        {/* MOVING LINE */}

        <div
          className="
            relative

            h-[2px]

            overflow-hidden

            bg-[#173E2A]/5
          "
        >
          <div
            className="
              rio-moving-line

              absolute
              inset-y-0

              w-[180px]

              bg-gradient-to-r
              from-transparent
              via-[#F58220]
              to-transparent
            "
          />
        </div>
      </header>

      {/* =========================================
          OVERLAY
      ========================================== */}

      <div
        onClick={() =>
          setMenuOpen(false)
        }
        className={`
          fixed
          inset-0

          z-[1000]

          bg-[#071A12]/65

          backdrop-blur-[5px]

          transition-all
          duration-500

          ${
            menuOpen
              ? `
                opacity-100
                visible
              `
              : `
                opacity-0
                invisible
                pointer-events-none
              `
          }
        `}
      />

      {/* =========================================
          MOBILE / TABLET DRAWER
      ========================================== */}

      <aside
        aria-hidden={!menuOpen}
        className={`
          fixed

          top-0
          right-0

          z-[1001]

          h-[100dvh]

          w-full

          min-[500px]:max-w-[460px]

          bg-[#FBFCFA]

          shadow-[-25px_0_70px_rgba(15,49,31,.22)]

          transition-transform
          duration-500

          ease-[cubic-bezier(.16,1,.3,1)]

          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* DRAWER HEADER */}

        <div
          className="
            flex
            items-center
            justify-between

            gap-2
            sm:gap-3

            px-4
            sm:px-5

            py-4
            sm:py-5

            border-b
            border-[#173E2A]/10

            bg-white
          "
        >
          <Link
            to="/"
            onClick={() =>
              setMenuOpen(false)
            }
            className="
              flex
              items-center

              gap-2.5
              sm:gap-3

              min-w-0
            "
          >
            <img
              src="/logo.jpg"
              alt="Rio Crop Science"
              className="
                w-[52px]
                h-[48px]

                sm:w-[64px]
                sm:h-[56px]

                object-contain

                shrink-0
              "
            />

            <div className="min-w-0">
              <p
                className="
                  text-[17px]
                  sm:text-[20px]

                  font-extrabold

                  tracking-[-0.4px]

                  text-[#173E2A]

                  whitespace-nowrap
                "
              >
                Rio Crop Science
              </p>

              <p
                className="
                  mt-1

                  text-[7px]
                  sm:text-[8px]

                  uppercase

                  tracking-[1px]
                  sm:tracking-[1.5px]

                  font-bold

                  text-[#6FAA4A]
                "
              >
                Cultivating a Greener
                Tomorrow
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() =>
              setMenuOpen(false)
            }
            aria-label="Close menu"
            className="
              w-10
              h-10

              sm:w-11
              sm:h-11

              rounded-full

              bg-[#F1F6F2]

              text-[#173E2A]

              flex
              items-center
              justify-center

              shrink-0

              hover:bg-[#173E2A]
              hover:text-white
              hover:rotate-90

              transition-all
              duration-300
            "
          >
            <X size={21} />
          </button>
        </div>

        {/* DRAWER BODY */}

        <div
          className="
            rio-drawer-scroll
            rio-mobile-safe

            h-[calc(100dvh-80px)]

            overflow-y-auto

            overscroll-contain
          "
        >
          {/* QUICK CONTACT */}

          <div
            className="
              px-4
              sm:px-5

              pt-5
            "
          >
            <div
              className="
                grid
                grid-cols-1
                min-[360px]:grid-cols-2

                gap-2
              "
            >
              {/* CALL */}

              <a
                href="tel:+917517411590"
                className="
                  flex
                  items-center

                  gap-2.5

                  rounded-xl

                  bg-[#EEF7F1]

                  px-3
                  py-3.5

                  text-[13px]
                  sm:text-[14px]

                  font-semibold

                  text-[#173E2A]

                  min-w-0
                "
              >
                <Phone
                  size={17}
                  className="
                    text-[#176B43]
                    shrink-0
                  "
                />

                <span className="truncate">
                  +91 75174 11590
                </span>
              </a>

              {/* EMAIL */}

              <a
                href="mailto:riocropscience@gmail.com"
                className="
                  flex
                  items-center

                  gap-2.5

                  rounded-xl

                  bg-[#EEF8FD]

                  px-3
                  py-3.5

                  text-[13px]
                  sm:text-[14px]

                  font-semibold

                  text-[#173E2A]

                  min-w-0
                "
              >
                <Mail
                  size={17}
                  className="
                    text-[#0284C7]
                    shrink-0
                  "
                />

                <span className="truncate">
                  Email Us
                </span>
              </a>
            </div>

            {/* QUOTE */}

            <div
              className="
                mt-3

                border-l-[3px]
                border-[#F58220]

                bg-[#FFF6EE]

                px-4
                py-3
              "
            >
              <p
                className="
                  text-[13px]
                  sm:text-[14px]

                  italic

                  leading-5
                  sm:leading-6

                  font-medium

                  text-[#526158]
                "
              >
                “Rooted in Science.
                <span
                  className="
                    font-bold
                    text-[#176B43]
                  "
                >
                  {" "}Growing with
                  Farmers.
                </span>
                ”
              </p>
            </div>
          </div>

          {/* NAVIGATION */}

          <nav
            className="
              px-4
              sm:px-5

              pt-5

              flex
              flex-col

              gap-2
              sm:gap-2.5
            "
          >
            {navItems.map(
              (item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  style={{
                    animationDelay: `${
                      index * 0.06
                    }s`,
                  }}
                  className={({
                    isActive,
                  }) =>
                    `
                      rio-menu-item
                      group

                      flex
                      items-center
                      justify-between

                      rounded-[15px]
                      sm:rounded-[16px]

                      px-4
                      sm:px-5

                      py-3.5
                      sm:py-[17px]

                      text-[16px]
                      sm:text-[17px]

                      font-bold

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? `
                            bg-[#173E2A]

                            text-white

                            shadow-[0_10px_26px_rgba(22,61,42,.17)]
                          `
                          : `
                            bg-white

                            border
                            border-[#173E2A]/[0.07]

                            text-[#34453C]

                            hover:bg-[#EEF5F0]
                            hover:text-[#173E2A]
                          `
                      }
                    `
                  }
                >
                  <div
                    className="
                      flex
                      items-center

                      gap-3
                      sm:gap-3.5
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        sm:text-[11px]

                        opacity-45

                        font-bold

                        tracking-[1px]
                      "
                    >
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </span>

                    <span>
                      {item.name}
                    </span>
                  </div>

                  <span
                    className="
                      w-8
                      h-8

                      rounded-full

                      bg-black/[0.035]

                      flex
                      items-center
                      justify-center

                      transition-all
                      duration-300

                      group-hover:rotate-45
                      group-hover:bg-[#F58220]
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight
                      size={15}
                    />
                  </span>
                </NavLink>
              )
            )}
          </nav>

          {/* WHATSAPP CTA */}

          <div
            className="
              px-4
              sm:px-5

              pt-5

              pb-7
            "
          >
            <div
              className="
                relative

                overflow-hidden

                rounded-[20px]
                sm:rounded-[22px]

                bg-[#173E2A]

                p-5
                sm:p-6

                text-white
              "
            >
              <div
                className="
                  absolute

                  -right-14
                  -bottom-14

                  w-[150px]
                  h-[150px]

                  rounded-full

                  bg-[#F58220]/15
                "
              />

              <div
                className="
                  absolute

                  right-5
                  top-4

                  w-[45px]
                  h-[45px]

                  rounded-full

                  border
                  border-white/10
                "
              />

              <p
                className="
                  relative
                  z-10

                  text-[11px]
                  sm:text-[12px]

                  uppercase

                  tracking-[1.8px]

                  font-bold

                  text-[#91D46E]
                "
              >
                Need Assistance?
              </p>

              <h3
                className="
                  relative
                  z-10

                  mt-2

                  text-[22px]
                  sm:text-[24px]

                  leading-tight

                  font-extrabold
                "
              >
                Let&apos;s Grow Better,
                <br />
                Together.
              </h3>

              <p
                className="
                  relative
                  z-10

                  mt-2

                  text-[14px]
                  sm:text-[15px]

                  leading-6

                  text-white/68

                  max-w-[320px]
                "
              >
                Connect with our team
                for product information,
                farming support or
                partnership enquiries.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  rio-shine

                  relative
                  z-10

                  mt-5

                  w-full

                  flex
                  items-center
                  justify-between

                  gap-3

                  rounded-xl

                  bg-[#F58220]

                  px-4
                  py-3.5

                  text-[15px]
                  sm:text-[16px]

                  font-bold

                  text-white
                "
              >
                <span
                  className="
                    relative
                    z-10

                    flex
                    items-center

                    gap-2
                  "
                >
                  <MessageCircle
                    size={18}
                  />

                  WhatsApp Us
                </span>

                <span
                  className="
                    relative
                    z-10

                    w-8
                    h-8

                    rounded-full

                    bg-white/15

                    flex
                    items-center
                    justify-center
                  "
                >
                  <ArrowUpRight
                    size={15}
                  />
                </span>
              </a>

              <div
                className="
                  relative
                  z-10

                  mt-4

                  flex
                  items-center
                  justify-between

                  gap-3
                "
              >
                <a
                  href="tel:+917517411590"
                  className="
                    flex
                    items-center

                    gap-2

                    text-[13px]
                    sm:text-[14px]

                    font-semibold

                    text-white/72

                    hover:text-white

                    transition-colors
                  "
                >
                  <Phone size={15} />

                  Call Us
                </a>

                <div
                  className="
                    flex
                    items-center

                    gap-1.5
                  "
                >
                  <span
                    className="
                      w-5
                      h-[2px]

                      bg-[#7CC95B]
                    "
                  />

                  <span
                    className="
                      w-3
                      h-[2px]

                      bg-[#39A8E0]
                    "
                  />

                  <span
                    className="
                      w-3
                      h-[2px]

                      bg-[#F58220]
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;