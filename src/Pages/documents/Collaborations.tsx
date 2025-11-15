import React from "react";
import { motion } from "framer-motion";

const collaborations = [
  { name: "Intuicient Innovations", logo: "/logos/intuicient.png", desc: "Innovation-driven solutions provider." },
  { name: "Teragon Edtech Private Ltd", logo: "/logos/teragon.png", desc: "EdTech startup focusing on learning tools." },
  { name: "TEQUED Labs Pvt Ltd", logo: "/logos/tequed.png", desc: "Robotics & STEM innovation company." },
  { name: "Techie Nest", logo: "/logos/techienest.png", desc: "AI, IoT, and embedded systems training firm." },
  { name: "SuprMentor", logo: "/logos/suprmentor.png", desc: "Corporate mentorship & career development." },
  { name: "AVKC Hassan", logo: "/logos/avkc.png", desc: "Regional education & development board." },
  { name: "Bharati Associates", logo: "/logos/bharati.png", desc: "Business consulting & strategy partner." },
  { name: "SAP India Pvt Ltd", logo: "/logos/sap.png", desc: "Global ERP & enterprise software leader." },
  { name: "AI Edge Innovations Pvt Ltd", logo: "/logos/aiedge.png", desc: "AI automation & industrial AI solutions." },
  { name: "IKP-EDEN", logo: "/logos/eden.png", desc: "Premier incubation & research support." },
  { name: "STEP Electronics Pvt Ltd", logo: "/logos/step.png", desc: "Advanced electronics solutions provider." },
  { name: "AIC JITF (CIIRC)", logo: "/logos/aicjitf.png", desc: "Government-approved incubation center." },
  { name: "Hassan SSIA", logo: "/logos/hassan-industry.png", desc: "Small scale industry association." },
  { name: "Sahyadri Edu Dreamers", logo: "/logos/dreamers.png", desc: "Youth entrepreneurship & innovation." },
  { name: "Tech Machinery", logo: "/logos/techmachinery.png", desc: "Industrial machines & automation." },
  { name: "KASSIA", logo: "/logos/kassia.png", desc: "Karnataka small industries association." },
  { name: "ICT Academy", logo: "/logos/ictacademy.png", desc: "Skill development & EdTech partner." }
];

/* ---------- Variants ---------- */

// Container controls stagger and parent opacity
const containerVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // children will animate one after another
      staggerChildren: 0.06,
      when: "beforeChildren",
    },
  },
};

// Each card animation
// const itemVariants = {
//   hidden: { opacity: 0, y: 16, scale: 0.995 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.45, ease: "easeOut" },
//   },
// };

// Header animation
// const headerVariants = {
//   hidden: { opacity: 0, y: -16 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
// };

export default function Collaborations() {
  return (
    <div className="min-h-screen bg-slate-50 text-black px-6 md:px-20 py-16 font-poppins">

      {/* Animated Header */}
      <motion.div
        className="text-center mb-8"
        // variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Collaborations
          </span>
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Achievements & Milestones through Partnerships
        </p>
      </motion.div>

      {/* Section title */}
      <motion.div
        className="text-center mb-10"
        // variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold inline-block border-b-4 border-blue-600 pb-2">
          MoUs Signed
        </h2>
      </motion.div>

      {/* Grid container with staggered children */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {collaborations.map((item, index) => (
          <motion.div
            key={index}
            // variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="group bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-2xl duration-300"
          >
            <div className="flex justify-center items-center h-24">
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <h3 className="mt-4 font-semibold text-lg text-gray-800 text-center">
              {item.name}
            </h3>

            <p className="text-gray-500 text-sm mt-2 text-center">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
