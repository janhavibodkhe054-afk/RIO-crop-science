import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  FlaskConical,
  Sprout,
  ShieldCheck,
  Users,
  HeartHandshake,
} from "lucide-react";

const points = [
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description:
      "Sustainable agricultural practices designed to protect the environment while maximizing harvest output.",
    color: "#176B43",
    soft: "#EEF7F1",
    image: "/images/why/eco-friendly.jpg",
  },
  {
    icon: FlaskConical,
    title: "Research-Driven Formulas",
    description:
      "Advanced scientific formulations developed through rigorous R&D for high field efficacy.",
    color: "#0284C7",
    soft: "#EEF8FD",
    image: "/images/why/research-driven.jpg",
  },
  {
    icon: Sprout,
    title: "Soil Health Improvement",
    description:
      "Restoring natural vitality, microbial activity, and long-term fertility of agricultural soil.",
    color: "#176B43",
    soft: "#EEF7F1",
    image: "/images/why/soil-health.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Natural Crop Protection",
    description:
      "Botanical and eco-safe protection solutions to help manage common crop pest challenges.",
    color: "#F58220",
    soft: "#FFF4EA",
    image: "/images/why/crop-protection.jpg",
  },
  {
    icon: Users,
    title: "Trusted by Farmers",
    description:
      "Thousands of farming families rely on Rio Crop Science season after season.",
    color: "#0284C7",
    soft: "#EEF8FD",
    image: "/images/why/trusted-farmers.jpg",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Farmer Support",
    description:
      "Continuous expert guidance, field advisory and close partnership at every stage of cultivation.",
    color: "#F58220",
    soft: "#FFF4EA",
    image: "/images/why/farmer-support.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const WhyFarmersChooseRio = () => {
  return (
    <section className="relative overflow-hidden bg-[#FBFCFA] py-14 sm:py-16 lg:py-20">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute -top-[120px] right-[4%] w-[300px] h-[300px] rounded-full bg-[#0284C7]/[0.05] blur-[100px] pointer-events-none" />

      <div className="absolute -bottom-[120px] left-[5%] w-[300px] h-[300px] rounded-full bg-[#F58220]/[0.05] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-[820px] mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-7 h-[2px] bg-[#176B43]" />
            <span className="w-4 h-[2px] bg-[#0284C7]" />
            <span className="w-4 h-[2px] bg-[#F58220]" />
          </div>

          <p className="text-[12px] sm:text-[13px] uppercase tracking-[2.2px] font-semibold text-[#176B43]">
            Why Farmers Choose Rio
          </p>

          <h2 className="mt-3 text-[36px] sm:text-[43px] lg:text-[48px] leading-[1.08] tracking-[-0.8px] font-bold text-[#173E2A]">
            More Than Products.
            <span className="block text-[#0284C7]">
              A Commitment to Better Agriculture.
            </span>
          </h2>

          <p className="mt-4 max-w-[760px] mx-auto text-[16px] sm:text-[17px] leading-7 text-[#4A5B52]">
            At Rio Crop Science, our focus goes beyond agricultural products.
            We work towards sustainable farming, improved soil health,
            responsible crop protection and continuous farmer support.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {points.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                  transition: {
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }}
                className="group relative h-[290px] sm:h-[310px] [perspective:1200px]"
              >
                {/* FLIP WRAPPER */}
                <div className="relative w-full h-full transition-transform duration-[750ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* FRONT */}
                  <div className="absolute inset-0 [backface-visibility:hidden] bg-white border border-[#173E2A]/[0.08] rounded-[22px] p-6 sm:p-7 shadow-[0_12px_34px_rgba(20,60,40,.05)]">
                    {/* TOP */}
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center"
                        style={{
                          backgroundColor: item.soft,
                          color: item.color,
                        }}
                      >
                        <Icon size={24} strokeWidth={1.8} />
                      </div>

                      <span
                        className="w-8 h-[3px] rounded-full mt-2"
                        style={{
                          backgroundColor: item.color,
                        }}
                      />
                    </div>

                    <h3 className="mt-6 text-[22px] sm:text-[23px] font-semibold leading-snug text-[#173E2A]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[15px] sm:text-[16px] leading-7 text-[#4D5F55]">
                      {item.description}
                    </p>

                    <div className="absolute left-6 sm:left-7 bottom-6 sm:bottom-7">
                      <span
                        className="text-[13px] sm:text-[14px] font-medium"
                        style={{
                          color: item.color,
                        }}
                      >
                        Hover to explore
                      </span>
                    </div>
                  </div>

                  {/* BACK IMAGE */}
                  <div className="absolute inset-0 overflow-hidden rounded-[22px] [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-[0_18px_45px_rgba(20,60,40,.14)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B1E]/85 via-[#0D2B1E]/12 to-transparent" />

                    <div className="absolute left-5 right-5 bottom-5">
                      <div
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                        style={{
                          color: item.color,
                        }}
                      >
                        <Icon size={18} strokeWidth={1.8} />
                      </div>

                      <h4 className="mt-3 text-[20px] sm:text-[22px] font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-[14px] sm:text-[15px] leading-6 text-white/78">
                        Rio Crop Science
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyFarmersChooseRio;