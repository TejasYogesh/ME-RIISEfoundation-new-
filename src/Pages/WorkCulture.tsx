import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Building2, Users, Sparkles } from "lucide-react";

export default function WorkCulture() {
  return (
    <AnimateOnScroll>
      <section className="w-full bg-gradient-to-b from-white to-slate-100 py-20 md:py-28 font-poppins relative">

        {/* Soft Background Glow */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-10 left-20 w-72 h-72 bg-blue-500 blur-[130px] rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-500 blur-[130px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative">

          {/* Heading Section */}
          <div className="max-w-5xl mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Infrastructure in{" "}
              <span className="text-blue-600">
                ME-RIISE FOUNDATION.
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Our infrastructure is built to empower innovation, boost efficiency, 
              and support long-term growth. With cutting-edge technology and a strong 
              focus on sustainability, we create an environment where creativity, 
              productivity, and progress thrive every day.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column – Video Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black relative">
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
                  title="Work Culture Video"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Right Column – Text + Icon Highlights */}
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Work Culture.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                ME-RIISE fosters a collaborative, inclusive and innovation-driven 
                work environment. Our culture encourages freedom of thought, 
                mutual respect, and personal as well as professional growth.
              </p>

              {/* Feature Highlights */}
              <div className="space-y-5 mt-4">

                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-blue-600" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Inclusive Teams:</span> 
                    A workplace where every voice matters and ideas are valued.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <Building2 className="w-8 h-8 text-purple-600" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Supportive Environment:</span> 
                    We encourage learning, mentorship, and innovation.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 text-yellow-500" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Growth & Balance:</span> 
                    Empowering members to excel both personally and professionally.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
}
