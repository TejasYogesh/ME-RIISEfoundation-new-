import * as React from "react"
import { Button } from "@/components/ui/button"
import { Dot } from "lucide-react" // Using a simple dot icon for the list

// Define a type for the objective items
interface ObjectiveItem {
  id: string;
  text: string;
}

// Data for the objectives
const objectivesData: ObjectiveItem[] = [
  {
    id: "obj1",
    text: "Application of technology to promote arts, commerce, science, sports, education, research, social welfare, religion, charity, protection of environment.",
  },
  {
    id: "obj2",
    text: "Providing the young graduates adequate management and technical training that will enable them to be creative and innovative in promoting business opportunities.",
  },
  {
    id: "obj3",
    text: "To create job and employment opportunities for the region of our nation.",
  },
  {
    id: "obj4",
    text: "To incubate the spirit of perseverance in the youths.",
  },
];

export function ObjectivesSection() {
  return (
    <section className="w-full bg-black text-slate-200 py-16 md:py-24 font-poppins">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Objects
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Column 1: Image */}
          <div className="w-full">
            <img
              // Replace with your actual image path
              src="https://placehold.co/600x400/333333/FFFFFF?text=ME-RIISE+Building" 
              alt="ME-RIISE Foundation Building"
              className="rounded-xl w-full h-full object-cover shadow-lg"
            />
          </div>

          {/* Column 2: Text Content */}
          <div className="flex flex-col justify-center">
            {/* Objectives List */}
            <ul className="space-y-5">
              {objectivesData.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <Dot className="h-6 w-6 shrink-0 text-blue-500 mt-1" />
                  <span className="text-base md:text-lg">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <Button 
              className="mt-10 self-start bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 px-8 rounded-lg text-base"
              asChild
            >
              <a href="/about">Know more about ME-RIISE Foundation</a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}