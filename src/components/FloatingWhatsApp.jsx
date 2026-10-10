import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
  const phoneNumber = "917517411590";

  const message =
    "Hello Rio Crop Science, I would like to know more about your agricultural products and solutions.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.7, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.8,
        type: "spring",
        stiffness: 160,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      className="
        fixed bottom-5 right-5 z-[999]
        flex h-12 w-12 items-center justify-center
        rounded-full bg-[#25D366] text-white
        shadow-[0_8px_25px_rgba(37,211,102,0.35)]
        transition-shadow duration-300
        hover:shadow-[0_10px_35px_rgba(37,211,102,0.5)]
        sm:bottom-6 sm:right-6
        sm:h-14 sm:w-14
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" />

      <span
        className="
          pointer-events-none absolute inset-0
          rounded-full border-2 border-[#25D366]
          animate-ping opacity-30
        "
      />
    </motion.a>
  );
};

export default FloatingWhatsApp;