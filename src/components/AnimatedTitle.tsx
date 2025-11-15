import { motion } from "framer-motion";

interface AnimatedTitleProps {
  title: string;
  highlight?: string;
  className?: string;
}

export default function AnimatedTitle({
  title,
  highlight,
  className = "",
}: AnimatedTitleProps) {
  const letters = title.split("");

  // Clean & professional stagger animation
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.035, // smooth & subtle
      },
    },
  };

//   const child = {
//     hidden: {
//       opacity: 0,
//       y: 12,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.45,
//         ease: "easeOut",
//       },
//     },
//   };

  return (
    <div className={`mb-4 md:mb-6 ${className}`}>
      {/* Title */}
      <motion.h1
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-4xl md:text-6xl font-bold tracking-tight flex flex-wrap"
      >
        {letters.map((char, index) => (
          <motion.span key={index}>
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Highlight Text */}
      {highlight && (
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.45, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-semibold text-blue-600 mt-2"
        >
          {highlight}
        </motion.h2>
      )}
    </div>
  );
}
