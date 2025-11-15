// Import your AnimateOnScroll component
import type React from "react";
import { AnimateOnScroll } from "../components/AnimateOnScroll";
import WorkCulture from "./WorkCulture";

// Icons
import {
  Cpu,
  Presentation,
  Info,
  Building2,
} from "lucide-react";

// 1. Define a type for the infrastructure items
interface InfrastructureItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imagePosition: "left" | "right";
  icon: React.ReactNode;
}

// 2. Create the data for your page
const infrastructureData: InfrastructureItem[] = [
  {
    id: "digital-den",
    title: "Digital Den",
    description:
      "A state-of-the-art digital creation space empowering innovation, rapid prototyping, and research. Equipped with high-performance systems for design, coding, and development.",
    imageUrl:
      "https://placehold.co/600x400/333333/FFFFFF?text=Digital+Den",
    imagePosition: "left",
    icon: <Cpu className="w-10 h-10 text-blue-400" />,
  },
  {
    id: "colloquium-hall",
    title: "Colloquium Hall",
    description:
      "A modern auditorium for seminars, talks, workshops, and panel discussions. Designed with premium acoustics and a high-definition AV setup.",
    imageUrl:
      "https://placehold.co/600x400/444444/FFFFFF?text=Colloquium+Hall",
    imagePosition: "right",
    icon: <Presentation className="w-10 h-10 text-purple-400" />,
  },
  {
    id: "information-desk",
    title: "Information Desk",
    description:
      "The central hub for support, queries, and campus services. Our dedicated team ensures smooth assistance and proper guidance to visitors.",
    imageUrl:
      "https://placehold.co/600x400/555555/FFFFFF?text=Information+Desk",
    imagePosition: "left",
    icon: <Info className="w-10 h-10 text-green-400" />,
  },
  {
    id: "board-room",
    title: "Board Room",
    description:
      "A professional meeting environment for leadership discussions, strategic planning, and executive decisions — furnished for comfort and focus.",
    imageUrl:
      "https://placehold.co/600x400/666666/FFFFFF?text=Board+Room",
    imagePosition: "right",
    icon: <Building2 className="w-10 h-10 text-yellow-400" />,
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <WorkCulture />

      <section className="w-full bg-black text-slate-200 py-20 md:py-28 font-poppins relative">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 h-full w-full opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 blur-[150px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 space-y-24 md:space-y-32 relative">

          {/* Page Title */}
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold text-center text-white drop-shadow-lg">
              Our Infrastructure
            </h1>
            <p className="text-center mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
              Explore the modern and well-equipped facilities designed to
              empower innovation and enhance productivity.
            </p>
          </AnimateOnScroll>

          {/* 3. Map over the data and render each section */}
          {infrastructureData.map((item, index) => (
            <AnimateOnScroll key={item.id} delay={index * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                {/* Image Column */}
                <div
                  className={`relative group ${
                    item.imagePosition === "right"
                      ? "md:order-2"
                      : "md:order-1"
                  }`}
                >
                  <div className="absolute -inset-3 bg-blue-600/10 blur-xl rounded-3xl group-hover:bg-blue-600/20 transition-all duration-300"></div>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="rounded-2xl border border-white/10 w-full h-full max-h-[420px] object-cover shadow-xl group-hover:scale-[1.02] transition-all duration-300"
                  />
                </div>

                {/* Text Column */}
                <div
                  className={`flex flex-col justify-center space-y-4 ${
                    item.imagePosition === "right"
                      ? "md:order-1"
                      : "md:order-2"
                  }`}
                >
                  {/* Icon */}
                  <div>{item.icon}</div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Optional CTA Button */}
                  <button className="mt-3 px-6 py-2 text-sm font-medium rounded-full bg-blue-600 hover:bg-blue-700 transition-all shadow-md self-start">
                    Learn More
                  </button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
