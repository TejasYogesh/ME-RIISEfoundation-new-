import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card" // Ensure you have shadcn Card components
// import { AnimateOnScroll } from "./AnimateOnScroll";
// Define a type for each event item
interface PragyathaEvent {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}

// Data for your Pragyatha events - replace with your actual content and image paths
const pragyathaEventsData: PragyathaEvent[] = [
  {
    id: "Admania",
    imageUrl: "/pragyatha/Admania.jpg",
    title: "Admania",
    description: "Admania was a creative marketing event that encouraged participants to develop innovative advertising strategies and campaigns, enhancing their skills in branding and market analysis."
  },
  {
    id: "Block Cord",
    imageUrl: "/pragyatha/Blockcord.jpg",
    title: "Blockcord",
    description: "Blockcord introduced fundamental concepts related to blockchain and collaborative platforms, focusing on practical understanding and technical skill development."
  },
  {
    id: "CloudLab",
    imageUrl: "/pragyatha/Cloudlab.jpeg",
    title: "CloudLab",
    description: "It is a dynamic two-day event where participants gain hands-on experience with cloud computing technologies through practical labs, demonstrations, and guided sessions.."
  },
  {
    id: "Designing 101",
    imageUrl: "/pragyatha/Designing 101.jpg",
    title: "Designing 101",
    description: "A two-day hands-on workshop covering design fundamentals like typography and color theory to build practical creative skills through poster making."
  },
  {
    id: "Entrorphosis",
    imageUrl: "/pragyatha/Entrorphosis.jpg",
    title: "Entrorphosis",
    description: "Entrorphosis was an entrepreneurship-focused event that nurtured innovative thinking and problem-solving skills through idea generation, pitching, and business model development."
  },
  {
    id: "UI",
    imageUrl: "/pragyatha/UI UX.jpg",
    title: "UI UX hackathon",
    description: "A UI/UX Hackathon is a 24-hour design sprint where teams research and build innovative, user-centered digital prototypes through rapid collaboration."
  }
]

export function PragyathaEvents() {
  return (
    <section className="w-full bg-white py-12 md:py-16 font-poppins">
      <div className="container mx-auto">
        {/* Title */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Pragyatha <span className="text-gray-900">2025</span>
          </h2>
        </div>

        {/* Events Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {pragyathaEventsData.map((event) => (
            <Card
              key={event.id}
              className="w-full sm:w-[45%] lg:w-[22%] overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-48 object-cover"
              />

              <CardHeader className="px-5">
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {event.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="px-5 pb-5">
                <CardDescription className="text-sm text-gray-600">
                  {event.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}