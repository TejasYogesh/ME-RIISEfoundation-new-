// If you want autoplay, uncomment the next line and add it to plugins array
// import Autoplay from "embla-carousel-autoplay" 

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button" // Assuming you have shadcn button

// Define a type for each initiative item
interface InitiativeItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

// Data for your initiatives - replace with your actual content
const initiativesData: InitiativeItem[] = [
  {
    id: "startup",
    imageUrl: "https://placehold.co/400x250/E5E7EB/4B5563?text=Start+Ups", // Replace with actual image path
    title: "Start Ups",
    description: "Empowering innovation with cutting-edge solutions for a brighter future.",
    link: "/initiatives/startups",
  },
  {
    id: "uba-visit",
    imageUrl: "https://placehold.co/400x250/D1D5DB/4B5563?text=UBA+Visit", // Replace with actual image path
    title: "UBA Visit",
    description: "Discover this impactful collaboration with UBA driving growth and innovation together.",
    link: "/initiatives/uba-visit",
  },
  {
    id: "pragyatha",
    imageUrl: "https://placehold.co/400x250/C0C0C0/4B5563?text=Pragyatha", // Replace with actual image path
    title: "Pragyatha",
    description: "Unlocking potential through Pragyatha's transformative strategies for success.",
    link: "/initiatives/pragyatha",
  },
   {
    id: "Upcoming Events",
    imageUrl: "https://placehold.co/400x250/A0A0A0/4B5563?text=Innovation+Hub", // Replace with actual image path
    title: "Innovation Hub",
    description: "Fostering a culture of creativity and technological advancement for students.",
    link: "/initiatives/innovation-hub",
  },
  {
    id: "research-projects",
    imageUrl: "https://placehold.co/400x250/808080/4B5563?text=Research", // Replace with actual image path
    title: "Research Projects",
    description: "Driving cutting-edge research in various domains with industry partnerships.",
    link: "/initiatives/research-projects",
  },
];

export function Initiatives() {
  // If you uncomment Autoplay, you'd use it here:
  // const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

  return (
    <section className="w-full bg-white py-12 md:py-16 font-poppins">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Initiatives taken by <span className="text-blue-600">ME-RIISE FOUNDATION</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto md:mx-0">
            ME-RIISE Foundation fosters innovation and entrepreneurship through skill development programs, startup incubation, and mentorship initiatives. It supports research and development projects, enabling students and professionals to bring their ideas to life. The foundation collaborates with industries and academic institutions to bridge the gap between education and real-world challenges. Through workshops, hackathons, and funding opportunities, ME-RIISE empowers individuals to excel in their entrepreneurial journey. Its mission is to create a sustainable ecosystem for innovation and growth.
          </p>
        </div>

        {/* Carousel for Initiatives */}
        <Carousel
          // plugins={[plugin.current]} // Uncomment this line if using Autoplay
          opts={{
            align: "start",
            loop: true, // <-- ADD THIS LINE to make the carousel repeat
          }}
          className="w-full"
          // onMouseEnter={plugin.current.stop} // Uncomment for autoplay
          // onMouseLeave={plugin.current.reset} // Uncomment for autoplay
        >
          <CarouselContent className="-ml-4">
            {initiativesData.map((item) => (
              <CarouselItem key={item.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="flex flex-col flex-grow p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm flex-grow mb-4">
                        {item.description}
                      </p>
                      <Button asChild className="mt-auto self-start bg-blue-600 hover:bg-blue-700 text-white">
                        <a href={item.link}>Know more</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Carousel Navigation */}
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  )
}