import { AnimateOnScroll } from "@/components/AnimateOnScroll";

// React Icons
import { FaLightbulb, FaRocket } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

export default function AboutNAIN() {
  const cards = [
    {
      title: "NAIN 1.0 & 1.2",
      description:
        "New Age Innovation Network (NAIN) 1.0 by the ME-RIISE Foundation is a pioneering initiative designed to support budding innovators, entrepreneurs, and changemakers. At the core of NAIN 1.0 lies a commitment to fostering creativity, empowering young minds, and providing a robust platform for groundbreaking ideas to thrive.",
      icon: <FaLightbulb className='text-yellow-300 w-10 h-10' />,
      button: "NAIN 1.0 & 1.2 Events",
      link: "#"
    },
    {
      title: "NAIN 2.0",
      description:
        "New Age Innovation Network (NAIN) 2.0 by the ME-RIISE Foundation is an advanced platform designed to accelerate groundbreaking ideas with funding, mentorship, and market access. Building on the success of NAIN 1.0, this initiative fosters next-gen entrepreneurs, innovators, and changemakers.",
      icon: <FaRocket className='text-white w-10 h-10' />,
      button: "NAIN 2.0 Events",
      link: "#"
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <AnimateOnScroll>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            About <span className="text-blue-600">NAIN</span>
          </h1>
        </AnimateOnScroll>
      </div>

      {/* Card Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {cards.map((item, index) => (
          <AnimateOnScroll key={index} delay={index * 0.1}>
            <div className="relative bg-blue-600 p-10 rounded-3xl shadow-xl text-white 
                            hover:-translate-y-2 transition-all duration-300 group">

              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-blue-500 opacity-20 blur-2xl rounded-3xl -z-10"></div>

              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-white/20 rounded-full shadow-lg group-hover:scale-105 transition">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-semibold text-center mb-4">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-center leading-relaxed text-blue-100 mb-6">
                {item.description}
              </p>

              {/* Button */}
              <div className="mt-6 flex justify-center">
                <a
                  href={item.link}
                  className="flex items-center gap-2 bg-white text-blue-700 font-medium px-6 py-3 
                           rounded-xl shadow-md hover:bg-gray-100 transition-all w-full md:w-auto justify-center"
                >
                  <MdEvent className="text-xl" />
                  {item.button}
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
