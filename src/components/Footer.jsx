import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const productLinks = [
    "Soil & Bio Solutions",
    "Plant Nutrition",
    "Crop Protection",
    "Crop Growth & Flowering",
    "Application Support",
    "Neem-Based Protection",
  ];

  return (
    <>
      <style>{`
        .rio-footer-link {
          transition:
            color .3s ease,
            transform .3s ease;
        }

        .rio-footer-link:hover {
          transform: translateX(4px);
        }

        .rio-footer-social {
          transition:
            transform .3s cubic-bezier(.16,1,.3,1),
            background-color .3s ease,
            border-color .3s ease,
            color .3s ease;
        }

        .rio-footer-social:hover {
          transform: translateY(-3px);
        }

        .rio-footer-contact {
          transition:
            transform .3s ease,
            background-color .3s ease,
            border-color .3s ease;
        }

        .rio-footer-contact:hover {
          transform: translateX(3px);
          background: rgba(255,255,255,.06);
          border-color: rgba(255,255,255,.14);
        }
      `}</style>

      <footer className="relative overflow-hidden bg-[#071A12] text-white border-t border-white/10">
        {/* TOP BRAND LINE */}
        <div className="flex w-full h-[4px]">
          <span className="w-[42%] bg-[#7FBF5A]" />
          <span className="w-[30%] bg-[#38BDF8]" />
          <span className="flex-1 bg-[#F58220]" />
        </div>

        {/* BACKGROUND DETAILS */}
        <div className="absolute -top-[160px] left-[12%] w-[360px] h-[360px] rounded-full bg-[#176B43]/10 blur-[120px] pointer-events-none" />

        <div className="absolute -bottom-[180px] right-[10%] w-[380px] h-[380px] rounded-full bg-[#0284C7]/10 blur-[130px] pointer-events-none" />

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
          {/* =====================================
              MAIN FOOTER
          ====================================== */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-12

              gap-9
              sm:gap-10
              lg:gap-8
              xl:gap-10

              pt-12
              sm:pt-14
              lg:pt-16

              pb-10
              sm:pb-12
              lg:pb-14

              border-b
              border-white/10
            "
          >
            {/* =====================================
                BRAND
            ====================================== */}

            <div className="sm:col-span-2 lg:col-span-4">
              <Link to="/" className="inline-flex items-center gap-3">
                <img
                  src="/logo.jpg"
                  alt="Rio Crop Science"
                  className="
                    w-[62px]
                    h-[56px]
                    sm:w-[70px]
                    sm:h-[62px]
                    object-contain
                    bg-white
                    rounded-lg
                    p-1
                  "
                />

                <div>
                  <h2
                    className="
                      text-[21px]
                      sm:text-[23px]
                      lg:text-[25px]
                      font-bold
                      tracking-[-0.5px]
                      leading-none
                      text-white
                    "
                  >
                    Rio Crop Science
                  </h2>

                  <p
                    className="
                      mt-2
                      text-[9px]
                      sm:text-[10px]
                      uppercase
                      tracking-[1.7px]
                      font-semibold
                      text-[#8FD16C]
                    "
                  >
                    Excellence is our Standard
                  </p>
                </div>
              </Link>

              <p
                className="
                  mt-5
                  max-w-[390px]
                  text-[15px]
                  sm:text-[16px]
                  leading-7
                  text-white/65
                "
              >
                Supporting better agriculture through crop nutrition, soil
                health, plant growth, crop protection and farmer-focused
                agricultural solutions.
              </p>

              {/* SOCIAL ICONS */}
              <div className="mt-6 flex items-center gap-2.5">
                {/* FACEBOOK */}
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="
                    rio-footer-social
                    w-11
                    h-11
                    rounded-xl
                    bg-white/[0.05]
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-white/65
                    hover:bg-[#176B43]
                    hover:border-[#176B43]
                    hover:text-white
                  "
                >
                  <svg
                    className="w-[17px] h-[17px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* INSTAGRAM */}
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  className="
                    rio-footer-social
                    w-11
                    h-11
                    rounded-xl
                    bg-white/[0.05]
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-white/65
                    hover:bg-[#F58220]
                    hover:border-[#F58220]
                    hover:text-white
                  "
                >
                  <svg
                    className="w-[17px] h-[17px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.675A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 0 1.439 1.44 1.44 1.44 0 0 0-1.439-1.44z" />
                  </svg>
                </a>

                {/* LINKEDIN */}
                <a
                  href="#linkedin"
                  aria-label="LinkedIn"
                  className="
                    rio-footer-social
                    w-11
                    h-11
                    rounded-xl
                    bg-white/[0.05]
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-white/65
                    hover:bg-[#0284C7]
                    hover:border-[#0284C7]
                    hover:text-white
                  "
                >
                  <svg
                    className="w-[17px] h-[17px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3zm-1.5-12.268A1.764 1.764 0 1 1 8.25 4.968 1.757 1.757 0 0 1 6.5 6.732zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* =====================================
                QUICK LINKS
            ====================================== */}

            <div className="lg:col-span-2">
              <h3
                className="
                  text-[15px]
                  sm:text-[16px]
                  uppercase
                  tracking-[1.5px]
                  font-semibold
                  text-white
                "
              >
                Quick Links
              </h3>

              <div className="mt-5 w-10 h-[2px] bg-[#7FBF5A]" />

              <ul className="mt-5 space-y-3.5">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="
                        rio-footer-link
                        inline-flex
                        items-center
                        gap-2.5
                        text-[14px]
                        sm:text-[15px]
                        font-medium
                        text-white/65
                        hover:text-[#8FD16C]
                      "
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7FBF5A]" />

                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* =====================================
                PRODUCT RANGE
            ====================================== */}

            <div className="lg:col-span-3">
              <h3
                className="
                  text-[15px]
                  sm:text-[16px]
                  uppercase
                  tracking-[1.5px]
                  font-semibold
                  text-white
                "
              >
                Product Range
              </h3>

              <div className="mt-5 w-10 h-[2px] bg-[#38BDF8]" />

              <ul className="mt-5 space-y-3.5">
                {productLinks.map((item) => (
                  <li key={item}>
                    <Link
                      to="/products"
                      className="
                        rio-footer-link
                        inline-flex
                        items-start
                        gap-2.5
                        text-[14px]
                        sm:text-[15px]
                        leading-6
                        font-medium
                        text-white/65
                        hover:text-[#67C7F0]
                      "
                    >
                      <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0" />

                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* =====================================
                CONTACT
            ====================================== */}

            <div className="sm:col-span-2 lg:col-span-3">
              <h3
                className="
                  text-[15px]
                  sm:text-[16px]
                  uppercase
                  tracking-[1.5px]
                  font-semibold
                  text-white
                "
              >
                Get in Touch
              </h3>

              <div className="mt-5 w-10 h-[2px] bg-[#F58220]" />

              <div className="mt-5 space-y-3">
                {/* ADDRESS */}
                <div
                  className="
    rio-footer-contact
    flex
    items-start
    gap-3.5
    rounded-xl
    border
    border-white/[0.06]
    bg-white/[0.025]
    p-3.5
  "
                >
                  <div
                    className="
      w-10
      h-10
      rounded-lg
      bg-[#F58220]/15
      text-[#F58220]
      flex
      items-center
      justify-center
      shrink-0
    "
                  >
                    <MapPin size={18} />
                  </div>

                  <p
                    className="
      text-[14px]
      sm:text-[15px]
      leading-6
      text-white/65
    "
                  >
                    <span className="font-semibold text-white/85">
                      Rio Crop Science Pvt Ltd
                    </span>
                    <br />
                    Plot No. A-106/9, A Sector,
                    <br />
                    Five Star Shendra MIDC,
                    <br />
                    Chhatrapati Sambhajinagar (Aurangabad),
                    <br />
                    Maharashtra – 431154
                  </p>
                </div>

                {/* PHONE */}
                <a
                  href="tel:+917517411590"
                  className="
                    rio-footer-contact
                    flex
                    items-center
                    gap-3.5
                    rounded-xl
                    border
                    border-white/[0.06]
                    bg-white/[0.025]
                    p-3.5
                  "
                >
                  <div
                    className="
                      w-10
                      h-10
                      rounded-lg
                      bg-[#7FBF5A]/15
                      text-[#8FD16C]
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Phone size={18} />
                  </div>

                  <span
                    className="
                      text-[14px]
                      sm:text-[15px]
                      font-semibold
                      text-white/75
                    "
                  >
                    +91 75174 11590
                  </span>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:riocropscience@gmail.com"
                  className="
                    rio-footer-contact
                    flex
                    items-center
                    gap-3.5
                    rounded-xl
                    border
                    border-white/[0.06]
                    bg-white/[0.025]
                    p-3.5
                    min-w-0
                  "
                >
                  <div
                    className="
                      w-10
                      h-10
                      rounded-lg
                      bg-[#38BDF8]/15
                      text-[#38BDF8]
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Mail size={18} />
                  </div>

                  <span
                    className="
                      min-w-0
                      break-all
                      text-[14px]
                      sm:text-[15px]
                      font-semibold
                      text-white/75
                    "
                  >
                    riocropscience@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* =====================================
              BOTTOM BAR
          ====================================== */}

          <div
            className="
              py-5
              sm:py-6

              flex
              flex-col
              md:flex-row

              items-center
              justify-between

              gap-3
              md:gap-6

              text-center
              md:text-left
            "
          >
            {/* COPYRIGHT */}
            <p
              className="
                text-[13px]
                sm:text-[14px]
                text-white/50
                leading-6
              "
            >
              © {new Date().getFullYear()} Rio Crop Science Pvt. Ltd. All Rights
              Reserved.
            </p>

            {/* DESIGNED DEVELOPED */}
            <p
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-1.5

                text-[13px]
                sm:text-[14px]

                text-white/50
              "
            >
              Designed &amp; Developed by
              <a
                href="https://www.hashgridtech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-1.5
                  font-semibold
                  text-[#8FD16C]
                  hover:text-[#38BDF8]
                  transition-colors
                  duration-300
                "
              >
                HashGrid Technologies Pvt. Ltd.
                <ArrowUpRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                />
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
