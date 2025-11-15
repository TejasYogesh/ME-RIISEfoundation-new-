import { CERTIFICATIONS } from "@/data/certifications";

export default function CertificationsPage() {
  // Reverse array so newest entries appear first
  const reversed = [...CERTIFICATIONS].reverse();

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 pb-12 pt-16">
      <h1 className="text-center text-3xl md:text-5xl font-light mb-10">
        Certificate | <span className="font-semibold">ME-RIISE Foundation</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-6xl">
        {reversed.map((item, index) => {
          // numbering (01, 02, 03...)
          const correctId = String(index + 1).padStart(2, "0");

          // FIX: extract the Icon component
          const Icon = item.Icon;

          return (
            <div
              key={correctId}
              className="bg-blue-600 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Header Row */}
              <div className="flex items-start justify-between">
                <h2 className="text-4xl md:text-5xl font-light">{correctId}</h2>

                {/* Correct way to render the icon */}
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-3">{item.title}</h3>

              {/* Description */}
              <p className="text-sm md:text-base mt-3 opacity-90 leading-relaxed">
                {item.description}
              </p>

              {/* Button */}
              <a
                href={item.link}
                className="mt-6 block bg-white text-black text-center py-2.5 rounded-xl font-medium hover:bg-gray-200 transition"
              >
                View Certificate
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
