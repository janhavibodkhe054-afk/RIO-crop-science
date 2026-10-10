import React, { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock3, Send } from "lucide-react";

const ContactDetailsForm = () => {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    interest: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* =========================================
     HANDLE INPUT CHANGE
  ========================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  /* =========================================
     FORM VALIDATION
  ========================================== */

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Please enter your mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.interest) {
      newErrors.interest = "Please select an enquiry type.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your requirement.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =========================================
     WHATSAPP SUBMIT
  ========================================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    const phoneNumber = "917517411590";

    const whatsappMessage = `
Hello Rio Crop Science,

I would like to submit an enquiry.

Name: ${formData.name}
Mobile: ${formData.mobile}
Email: ${formData.email}
Interested In: ${formData.interest}

Message:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const isFormComplete =
    formData.name.trim() &&
    formData.mobile.trim() &&
    formData.email.trim() &&
    formData.interest &&
    formData.message.trim();

  return (
    <>
      <style>{`
        @keyframes contactLeftIn {
          from {
            opacity: 0;
            transform: translateX(-32px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes contactRightIn {
          from {
            opacity: 0;
            transform: translateX(32px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .contact-left-show {
          animation:
            contactLeftIn .85s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .contact-right-show {
          animation:
            contactRightIn .9s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .contact-info-row {
          transition:
            transform .3s ease,
            background-color .3s ease;
        }

        .contact-info-row:hover {
          transform: translateX(4px);
        }

        .contact-input {
          transition:
            border-color .3s ease,
            background-color .3s ease,
            box-shadow .3s ease;
        }

        .contact-input:focus {
          box-shadow:
            0 0 0 3px rgba(23,107,67,.08);
        }

        @media (max-width: 1023px) {
          @keyframes contactLeftIn {
            from {
              opacity: 0;
              transform: translateY(28px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes contactRightIn {
            from {
              opacity: 0;
              transform: translateY(28px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="
          relative
          overflow-hidden
          bg-[#F7F1E8]
          py-10
          sm:py-12
          lg:py-16
        "
      >
        {/* ORANGE SHAPE */}
        <div
          className="
            absolute
            -right-[110px]
            top-[70px]
            w-[220px]
            h-[250px]
            sm:w-[250px]
            sm:h-[280px]
            rounded-[48%_52%_40%_60%/55%_43%_57%_45%]
            bg-[#F58220]/10
            pointer-events-none
          "
        />

        {/* BLUE GLOW */}
        <div
          className="
            absolute
            -left-[100px]
            bottom-[-90px]
            w-[220px]
            h-[220px]
            sm:w-[260px]
            sm:h-[260px]
            rounded-full
            bg-[#0284C7]/[0.05]
            blur-3xl
            pointer-events-none
          "
        />

        <div
          className="
            relative
            z-10
            max-w-[1320px]
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div
            className="
              grid
              lg:grid-cols-[0.82fr_1.18fr]
              gap-6
              sm:gap-8
              lg:gap-10
              xl:gap-12
              items-start
            "
          >
            {/* =====================================
                LEFT SIDE
            ====================================== */}

            <div
              className={`space-y-5 sm:space-y-6 ${
                visible ? "contact-left-show" : "opacity-0"
              }`}
            >
              {/* CONTACT INFORMATION */}
              <div
                className="
                  bg-white
                  border
                  border-[#173E2A]/10
                  rounded-[20px]
                  sm:rounded-[22px]
                  p-5
                  sm:p-7
                "
              >
                <p
                  className="
                    text-[12px]
                    sm:text-[13px]
                    uppercase
                    tracking-[2px]
                    font-semibold
                    text-[#176B43]
                  "
                >
                  Contact Information
                </p>

                <h2
                  className="
                    mt-2
                    text-[28px]
                    sm:text-[34px]
                    lg:text-[36px]
                    leading-tight
                    font-bold
                    text-[#173E2A]
                  "
                >
                  Connect With Our Team
                </h2>

                <div className="mt-6 divide-y divide-[#173E2A]/10">
                  {/* PHONE */}
                  <a
                    href="tel:+917517411590"
                    className="
                      contact-info-row
                      flex
                      items-start
                      gap-4
                      py-5
                      first:pt-0
                      group
                    "
                  >
                    <div
                      className="
                        w-12
                        h-12
                        rounded-full
                        bg-[#EEF7F1]
                        text-[#176B43]
                        flex
                        items-center
                        justify-center
                        shrink-0
                        group-hover:bg-[#176B43]
                        group-hover:text-white
                        transition-all
                        duration-300
                      "
                    >
                      <Phone size={21} strokeWidth={1.8} />
                    </div>

                    <div>
                      <p
                        className="
                          text-[11px]
                          sm:text-[12px]
                          uppercase
                          tracking-[1.5px]
                          font-semibold
                          text-[#87918B]
                        "
                      >
                        Phone
                      </p>

                      <p
                        className="
                          mt-1
                          text-[17px]
                          sm:text-[19px]
                          font-semibold
                          text-[#173E2A]
                        "
                      >
                        +91 75174 11590
                      </p>
                    </div>
                  </a>

                  {/* EMAIL */}
                  <a
                    href="mailto:riocropscience@gmail.com"
                    className="
                      contact-info-row
                      flex
                      items-start
                      gap-4
                      py-5
                      group
                    "
                  >
                    <div
                      className="
                        w-12
                        h-12
                        rounded-full
                        bg-[#EEF8FD]
                        text-[#0284C7]
                        flex
                        items-center
                        justify-center
                        shrink-0
                        group-hover:bg-[#0284C7]
                        group-hover:text-white
                        transition-all
                        duration-300
                      "
                    >
                      <Mail size={21} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          text-[11px]
                          sm:text-[12px]
                          uppercase
                          tracking-[1.5px]
                          font-semibold
                          text-[#87918B]
                        "
                      >
                        Email
                      </p>

                      <p
                        className="
                          mt-1
                          text-[16px]
                          sm:text-[18px]
                          font-semibold
                          text-[#173E2A]
                          break-all
                        "
                      >
                        riocropscience@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* ADDRESS */}
                  <div
                    className="
                      contact-info-row
                      flex
                      items-start
                      gap-4
                      py-5
                      pb-0
                    "
                  >
                    <div
                      className="
                        w-12
                        h-12
                        rounded-full
                        bg-[#FFF4EA]
                        text-[#F58220]
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      <MapPin size={21} strokeWidth={1.8} />
                    </div>

                    <div>
                      <p
                        className="
                          text-[11px]
                          sm:text-[12px]
                          uppercase
                          tracking-[1.5px]
                          font-semibold
                          text-[#87918B]
                        "
                      >
                        Address
                      </p>

                      <p
                        className="
    mt-1
    text-[15px]
    sm:text-[17px]
    leading-6
    sm:leading-7
    font-medium
    text-[#173E2A]
  "
                      >
                        <span className="font-semibold text-[#173E2A]">
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
                  </div>
                </div>
              </div>

              {/* BUSINESS HOURS */}
              <div
                className="
                  relative
                  overflow-hidden
                  bg-[#173E2A]
                  rounded-[20px]
                  sm:rounded-[22px]
                  p-5
                  sm:p-7
                  text-white
                "
              >
                <div
                  className="
                    absolute
                    -right-14
                    -top-14
                    w-[160px]
                    h-[160px]
                    rounded-full
                    border
                    border-white/10
                  "
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        w-12
                        h-12
                        rounded-full
                        bg-white/10
                        text-[#8FD16C]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Clock3 size={21} strokeWidth={1.8} />
                    </div>

                    <div>
                      <p
                        className="
                          text-[11px]
                          sm:text-[12px]
                          uppercase
                          tracking-[1.7px]
                          font-semibold
                          text-[#8FD16C]
                        "
                      >
                        Business Hours
                      </p>

                      <h3
                        className="
                          mt-1
                          text-[23px]
                          sm:text-[26px]
                          font-bold
                        "
                      >
                        We&apos;re Here to Help
                      </h3>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div
                      className="
                        flex
                        flex-col
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        gap-2
                        sm:gap-4
                        py-4
                        border-y
                        border-white/10
                      "
                    >
                      <span
                        className="
                          text-[15px]
                          sm:text-[16px]
                          font-medium
                          text-white/75
                        "
                      >
                        Monday – Saturday
                      </span>

                      <span
                        className="
                          text-[15px]
                          sm:text-[16px]
                          font-semibold
                          text-white
                        "
                      >
                        9:00 AM – 6:00 PM
                      </span>
                    </div>

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        gap-4
                        py-4
                        border-b
                        border-white/10
                      "
                    >
                      <span
                        className="
                          text-[15px]
                          sm:text-[16px]
                          font-medium
                          text-white/75
                        "
                      >
                        Sunday
                      </span>

                      <span
                        className="
                          text-[15px]
                          sm:text-[16px]
                          font-semibold
                          text-[#FB923C]
                        "
                      >
                        Closed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================
                RIGHT FORM
            ====================================== */}

            <div
              className={`
                bg-white
                border
                border-[#173E2A]/10
                rounded-[22px]
                sm:rounded-[24px]
                p-5
                sm:p-8
                lg:p-9

                ${visible ? "contact-right-show" : "opacity-0"}
              `}
            >
              <div className="max-w-[650px]">
                <p
                  className="
                    text-[12px]
                    sm:text-[13px]
                    uppercase
                    tracking-[2px]
                    font-semibold
                    text-[#F58220]
                  "
                >
                  Enquiry Form
                </p>

                <h2
                  className="
                    mt-2
                    text-[30px]
                    sm:text-[36px]
                    lg:text-[40px]
                    leading-[1.12]
                    font-bold
                    text-[#173E2A]
                  "
                >
                  Send Us Your
                  <span className="text-[#0284C7]"> Requirement</span>
                </h2>

                <p
                  className="
                    mt-3
                    text-[15px]
                    sm:text-[17px]
                    leading-7
                    text-[#5B675F]
                  "
                >
                  Share your requirement with us and our team will connect with
                  you for the right product, support or partnership guidance.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="
                  mt-7
                  grid
                  sm:grid-cols-2
                  gap-4
                  sm:gap-5
                "
              >
                {/* FULL NAME */}
                <div>
                  <label
                    className="
                      block
                      mb-2
                      text-[13px]
                      sm:text-[14px]
                      font-semibold
                      text-[#173E2A]
                    "
                  >
                    Full Name
                    <span className="text-[#F58220]"> *</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`
                      contact-input
                      w-full
                      h-13
                      sm:h-14
                      rounded-lg
                      border
                      bg-[#FAFBFA]
                      px-4
                      text-[15px]
                      sm:text-[16px]
                      text-[#173E2A]
                      outline-none
                      placeholder:text-[#8C9690]
                      focus:bg-white

                      ${
                        errors.name
                          ? "border-red-400 focus:border-red-500"
                          : "border-[#173E2A]/12 focus:border-[#176B43]"
                      }
                    `}
                  />

                  {errors.name && (
                    <p className="mt-1.5 text-[12px] sm:text-[13px] text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* MOBILE */}
                <div>
                  <label
                    className="
                      block
                      mb-2
                      text-[13px]
                      sm:text-[14px]
                      font-semibold
                      text-[#173E2A]
                    "
                  >
                    Mobile Number
                    <span className="text-[#F58220]"> *</span>
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className={`
                      contact-input
                      w-full
                      h-13
                      sm:h-14
                      rounded-lg
                      border
                      bg-[#FAFBFA]
                      px-4
                      text-[15px]
                      sm:text-[16px]
                      text-[#173E2A]
                      outline-none
                      placeholder:text-[#8C9690]
                      focus:bg-white

                      ${
                        errors.mobile
                          ? "border-red-400 focus:border-red-500"
                          : "border-[#173E2A]/12 focus:border-[#176B43]"
                      }
                    `}
                  />

                  {errors.mobile && (
                    <p className="mt-1.5 text-[12px] sm:text-[13px] text-red-500">
                      {errors.mobile}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    className="
                      block
                      mb-2
                      text-[13px]
                      sm:text-[14px]
                      font-semibold
                      text-[#173E2A]
                    "
                  >
                    Email
                    <span className="text-[#F58220]"> *</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`
                      contact-input
                      w-full
                      h-13
                      sm:h-14
                      rounded-lg
                      border
                      bg-[#FAFBFA]
                      px-4
                      text-[15px]
                      sm:text-[16px]
                      text-[#173E2A]
                      outline-none
                      placeholder:text-[#8C9690]
                      focus:bg-white

                      ${
                        errors.email
                          ? "border-red-400 focus:border-red-500"
                          : "border-[#173E2A]/12 focus:border-[#0284C7]"
                      }
                    `}
                  />

                  {errors.email && (
                    <p className="mt-1.5 text-[12px] sm:text-[13px] text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* INTEREST */}
                <div>
                  <label
                    className="
                      block
                      mb-2
                      text-[13px]
                      sm:text-[14px]
                      font-semibold
                      text-[#173E2A]
                    "
                  >
                    I&apos;m Interested In
                    <span className="text-[#F58220]"> *</span>
                  </label>

                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className={`
                      contact-input
                      w-full
                      h-13
                      sm:h-14
                      rounded-lg
                      border
                      bg-[#FAFBFA]
                      px-4
                      text-[15px]
                      sm:text-[16px]
                      text-[#173E2A]
                      outline-none
                      focus:bg-white

                      ${
                        errors.interest
                          ? "border-red-400 focus:border-red-500"
                          : "border-[#173E2A]/12 focus:border-[#F58220]"
                      }
                    `}
                  >
                    <option value="">Select enquiry type</option>

                    <option value="Product Enquiry">Product Enquiry</option>

                    <option value="Farmer Support">Farmer Support</option>

                    <option value="Distributor Partnership">
                      Distributor Partnership
                    </option>

                    <option value="Retailer Partnership">
                      Retailer Partnership
                    </option>

                    <option value="General Enquiry">General Enquiry</option>
                  </select>

                  {errors.interest && (
                    <p className="mt-1.5 text-[12px] sm:text-[13px] text-red-500">
                      {errors.interest}
                    </p>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="sm:col-span-2">
                  <label
                    className="
                      block
                      mb-2
                      text-[13px]
                      sm:text-[14px]
                      font-semibold
                      text-[#173E2A]
                    "
                  >
                    Message
                    <span className="text-[#F58220]"> *</span>
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your requirement..."
                    className={`
                      contact-input
                      w-full
                      rounded-lg
                      border
                      bg-[#FAFBFA]
                      px-4
                      py-3.5
                      text-[15px]
                      sm:text-[16px]
                      text-[#173E2A]
                      outline-none
                      resize-none
                      placeholder:text-[#8C9690]
                      focus:bg-white

                      ${
                        errors.message
                          ? "border-red-400 focus:border-red-500"
                          : "border-[#173E2A]/12 focus:border-[#176B43]"
                      }
                    `}
                  />

                  {errors.message && (
                    <p className="mt-1.5 text-[12px] sm:text-[13px] text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* SUBMIT */}
                <div className="sm:col-span-2 pt-1">
                  <button
                    type="submit"
                    disabled={!isFormComplete}
                    className={`
                      group
                      w-full
                      sm:w-auto
                      inline-flex
                      items-center
                      justify-center
                      gap-2.5
                      rounded-lg
                      px-7
                      py-4
                      text-[15px]
                      sm:text-[16px]
                      font-semibold
                      text-white
                      transition-all
                      duration-300

                      ${
                        isFormComplete
                          ? "bg-[#176B43] hover:bg-[#0284C7] cursor-pointer"
                          : "bg-[#AAB5AE] cursor-not-allowed opacity-70"
                      }
                    `}
                  >
                    Send Enquiry
                    <Send
                      size={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-0.5
                      "
                    />
                  </button>

                  {!isFormComplete && (
                    <p className="mt-2 text-[12px] sm:text-[13px] text-[#7A877F]">
                      Please complete all required fields to submit your
                      enquiry.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactDetailsForm;
