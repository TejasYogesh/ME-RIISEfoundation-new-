import { useEffect, useState } from "react";
import { UserCircle2 } from "lucide-react";
import { teamMembers } from "@/data/faculty";

// ShadCN Skeleton
import { Skeleton } from "@/components/ui/skeleton";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  // Simulate loading — replace with real API logic if needed
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fafafa] to-[#e9e9e9] text-black px-6 md:px-20 py-20">

      {/* Title */}
      {loading ? (
        <div className="flex justify-center">
          <Skeleton className="h-10 w-60 rounded-md" />
        </div>
      ) : (
        <h1 className="text-center text-4xl md:text-5xl font-light tracking-wide">
          <span className="border-b-3 pb-2">PORTFOLIO</span>
        </h1>
      )}

      {/* Page Intro */}
      {loading ? (
        <div className="mx-auto mt-6 flex flex-col gap-3 items-center">
          <Skeleton className="h-4 w-2/3 md:w-1/2" />
          <Skeleton className="h-4 w-1/2 md:w-1/3" />
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          Meet the core members of ME-RIISE Foundation who drive innovation, entrepreneurship,
          and institutional excellence across departments.
        </p>
      )}

      {/* Team List */}
      <div className="mt-20 space-y-28">

        {(loading ? Array(3).fill(null) : teamMembers).map((member, index) => (
          <div
            key={index}
            className="relative bg-white/60 backdrop-blur-xl shadow-xl rounded-3xl border border-gray-200 
              p-8 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16 items-center hover:shadow-2xl 
              hover:-translate-y-1 transition-all duration-300"
          >
            {/* Floating Department Logo */}
            <div className="absolute top-4 right-4">
              {loading ? (
                <Skeleton className="w-14 h-14 rounded-full" />
              ) : member.logo ? (
                <img
                  src={member.logo}
                  className="w-14 h-14 object-contain opacity-70"
                  alt="department logo"
                />
              ) : (
                <UserCircle2 className="w-14 h-14 text-gray-300" />
              )}
            </div>

            {/* Profile Image */}
            <div className="flex justify-center">
              {loading ? (
                <Skeleton className="w-52 h-52 rounded-2xl" />
              ) : (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-52 h-52 object-cover rounded-2xl shadow-lg border border-gray-300
                    hover:scale-105 transition-transform duration-300"
                />
              )}
            </div>

            {/* Text Section */}
            <div className="text-center md:text-left max-w-2xl">

              {loading ? (
                <div className="space-y-3">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-20 w-full mt-4" />
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-semibold">{member.name}</h2>
                  <p className="text-gray-500 text-lg">{member.qualification}</p>
                  <p className="text-gray-600 text-lg">{member.position}</p>

                  <p className="mt-4 text-gray-700 leading-relaxed">{member.description}</p>

                  <div className="border-b border-gray-300 my-6 opacity-50"></div>

                  <span className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-md text-sm">
                    ME-RIISE FOUNDATION
                  </span>
                </>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
