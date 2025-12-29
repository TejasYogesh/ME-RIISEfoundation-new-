// achievements.tsx
import React from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

// Import the data array
import { ACHIEVEMENTS } from "@/data/achievements";

export default function Achievements() {
  const [loading, setLoading] = React.useState(true);

  // Fake loading delay for skeleton animation
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  /* ----------------------------------------------------
      FULL PAGE SKELETON SCREEN
  ---------------------------------------------------- */
  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 space-y-10 animate-in fade-in duration-500">
        {/* Title Skeleton */}
        <div className="text-center space-y-4">
          <Skeleton className="h-10 w-64 mx-auto rounded-lg" />
          <Skeleton className="h-4 w-80 mx-auto rounded-lg" />
        </div>

        {/* Achievement Card Skeletons */}
        <div className="space-y-10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-8">
              <Skeleton className="w-full md:w-1/2 h-[250px] rounded-xl" />

              <div className="flex-1 space-y-3">
                <Skeleton className="h-6 w-3/4 rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-5/6 rounded-md" />
                <Skeleton className="h-4 w-2/3 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ----------------------------------------------------
      ACTUAL PAGE CONTENT
  ---------------------------------------------------- */
  return (
    <div className="achievements-root px-6 md:px-10 py-16 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-gray-900">
          OUR ACHIEVEMENTS
        </h1>
        <p className="text-gray-500 mt-2 text-base">
          Proud moments and recent milestones
        </p>
      </div>

      {/* Achievement Cards */}
      <div className="space-y-20">
        {[...ACHIEVEMENTS].reverse().map((ach, idx) => {
          const isAlt = idx % 2 === 1;
          const placeholder = `https://picsum.photos/seed/${encodeURIComponent(
            ach.imageName
          )}/800/500`;

          return (
            <motion.div
              key={ach.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                isAlt ? "md:flex-row-reverse" : ""
              } bg-white shadow-md rounded-2xl p-6 md:p-10`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              {/* Image */}
              <motion.img
                src={ach.imageUrl || placeholder}
                alt={ach.imageName}
                className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = placeholder;
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35 }}
              />

              {/* Text */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {ach.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {ach.description}
                </p>

                <span className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-semibold">
                  {ach.imageName}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
