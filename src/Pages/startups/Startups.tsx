import * as React from "react"
import { Link } from "react-router-dom"
// Switched to a relative path
import { AnimateOnScroll } from "../../components/AnimateOnScroll" 
import { Button } from "@/components/ui/button"
// 1. Import icons for illustration
import { ArrowRight, Code, Rocket, Users, Globe, BrainCircuit } from "lucide-react"

// 2. Define the data structure, adding an optional icon
interface Startup {
  id: string;
  title: string;
  description: string;
  link: string; // The route or external link for the "Know More" button
  icon: React.ElementType; // Icon component
}

// 3. Create the updated array of startup data
const startupsData: Startup[] = [
  {
    id: "tech10",
    title: "TECH @10",
    description: "Tech@10 is an idea to provide technical knowledge to the budding technical students at a reasonable price that is ten rupees per session. Hence the name Tech@10. In our startup we teach students the technical skills life programming, android development, web development. The main aim of our startup is to create awareness about the technical skills that they require to get into corporate sector and also make it easy for them to get the knowledge as we provide at a very reasonable cost.",
    link: "/startups/tech10",
    icon: Code,
  },
  {
    id: "techwithkgp",
    title: "TECH with KGP",
    description: "The goal and vision of Techwithkgp is pretty simple but much effective. Having the goal of teaching, effective learning and problem solving which made us inspire and aspired us to drive our passion. App development helped us to shape our career, TechWithKPG has done a tremendous work in providing various Courses and Internships for students of Malnad College of Engineering.",
    link: "/startups/techwithkgp",
    icon: BrainCircuit,
  },
  {
    id: "dev-community",
    title: "Developers Community",
    description: "Started by Adarsh D and Varenya Kumar K R in the year 2020. Our motto of this community is to spread knowledge and develop interests in the students to learn coding in the industry standard and contribute to the college and society. We developed a web-based application for monitoring people under home quarantine during the pandemic situation of covid-19.",
    link: "/startups/dev-community",
    icon: Users,
  },
  {
    id: "chathurpravthan",
    title: "Chathurpravarthan Private Limited",
    description: "Chathur Pravarthan Private Limited, established in 2022, is a remarkable success story. It originated as a start-up within the premises of Malnad College of Engineering, born out of the successful implementation of the 'Solar Panel Cleaning Robot' project.",
    link: "/startups/chathurpravthan",
    icon: Rocket,
  },
  {
    id: "edutechsphere",
    title: "Edutechsphere",
    description: "Welcome to Edutechsphere, where technology meets education to create transformative learning experiences. Our mission is to empower learners and educators with innovative tools and solutions that inspire growth and unlock potential. At Edutechsphere, we believe in shaping the future of education through cutting-edge technology and a passion for excellence. Join us in revolutionizing the way the world learns and grows.",
    link: "/startups/edutechsphere",
    icon: Globe,
  },
];

export function StartupsPage() {
  return (
    // Added a subtle gradient background
    <div className="w-full bg-gradient-to-b from-gray-950 to-black text-slate-300 font-poppins py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {/* Added gradient to title text */}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                StartUps.
              </span>
            </h1>
            <p className="text-lg text-slate-300/90 leading-relaxed">
              At ME-RIISE Foundation, we are committed to fostering innovation and delivering solutions that drive progress. Our startup represents the spirit of creativity and forward-thinking that defines our approach. With a focus on cutting-edge technology and continuous growth, we aim to transform industries and empower businesses. Join us on this exciting journey as we create lasting impact and revolutionize the future. Together, we can achieve remarkable success and pave the way for tomorrow's breakthroughs.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-8xl mx-auto">
          {startupsData.map((startup, index) => (
            <AnimateOnScroll 
              key={startup.id} 
              delay={index * 0.1} 
              className="h-full"
            >
              {/* Card Styling: Added glassmorphism, gradient border, and hover glow */}
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 shadow-lg flex flex-col h-full border border-slate-700/80 transition-all duration-300 hover:shadow-[0_0px_30px_rgba(59,130,246,0.25)] hover:border-slate-600">
                <div className="flex items-center gap-5 mb-5">
                  {/* Styled Icon */}
                  <div className="bg-blue-900/30 p-3 rounded-full border border-blue-700/50">
                    <startup.icon className="h-10 w-10 text-blue-300" />
                  </div>
                  <h2 className="text-3xl font-semibold text-white">
                    {startup.title}
                  </h2>
                </div>
                <p className="text-slate-300 flex-grow text-base leading-relaxed">
                  {startup.description}
                </p>
                {/* Styled Button */}
                <Button asChild variant="secondary" className="mt-8 w-full bg-white text-gray-800 font-semibold text-base py-6 hover:bg-slate-200 transition-transform duration-200 hover:scale-105">
                  <Link to={startup.link}>
                    Know More about {startup.title}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </div>
  )
}