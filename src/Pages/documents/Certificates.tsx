import { FileBadge, FileText, Award } from "lucide-react";

export default function CertificationsPage() {
  const certificates = [
    {
      title: "IIC | 2023-24",
      icon: <Award className="w-10 h-10 text-white" />,
      description:
        "The Institution Innovation Council of Malnad College of Engineering has consistently performed well, earning a 4-star rating for the past two years and ranking in the 101–150 band in the NIRF Innovation Category 2023...",
      link: "#",
    },
    {
      title: "IIC | 2022-23",
      icon: <FileBadge className="w-10 h-10 text-white" />,
      description:
        "The Institution Innovation Council of Malnad College of Engineering has earned consistent recognition including 4-star ratings and selection for the Mentor–Mentee Scheme 2023 by the Ministry of Education...",
      link: "#",
    },
    {
      title: "MCE NISP POLICY",
      icon: <FileText className="w-10 h-10 text-white" />,
      description:
        "The National Innovation and Startup Policy (NISP) guidelines encourage academic institutions to create a strong framework to encourage innovation, incubation and startup ecosystem within the campus...",
      link: "#",
    },
  ];

  // Reverse the array for display
  const reversed = certificates.slice().reverse();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 md:px-20">
      <h1 className="text-center text-4xl md:text-6xl font-light mb-16">
        Certificate | <span className="font-semibold">ME-RIISE Foundation</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 mx-auto max-w-7xl">
        {reversed.map((item, index) => {
          // Correct ID = based on original order (not reversed)
          const correctId = String(index + 1).padStart(2, "0");

          return (
            <div
              key={correctId}
              className="bg-blue-600 rounded-3xl p-10 shadow-xl hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-6xl md:text-7xl font-light">{correctId}</h2>
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>

              <p className="text-sm md:text-base mt-4 opacity-90 leading-relaxed">
                {item.description}
              </p>

              <a
                href={item.link}
                className="mt-10 block bg-white text-black text-center py-3 rounded-2xl font-medium hover:bg-gray-200 transition"
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
