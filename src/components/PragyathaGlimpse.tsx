import { Card, CardHeader, CardDescription, CardTitle } from "@/components/ui/card" // Ensure you have shadcn Card components
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
    id: "cyber-security",
    imageUrl: "https://placehold.co/400x250/E5E7EB/4B5563?text=Cyber+Security", // Replace with actual image path
    title: "Cyber Security and Ethical Hacking",
    description: "This event offers a deep dive into cybersecurity, covering career opportunities, ethical hacking, threat detection, and prevention strategies...",
  },
  {
    id: "git-github",
    imageUrl: "https://placehold.co/400x250/D1D5DB/4B5563?text=Git+Workshop", // Replace with actual image path
    title: "Git and GitHub Workshop",
    description: "The Git and GitHub Workshop was successfully conducted on the 30th of November and the 1st of December 2024 as a part of Pragyatha-24...",
  },
  {
    id: "entrophosis",
    imageUrl: "https://placehold.co/400x250/C0C0C0/4B5563?text=Entrophosis", // Replace with actual image path
    title: "Entrophosis",
    description: "Entrophosis was a successful event that nurtured entrepreneurial thinking and problem-solving skills among participants. The combination of pitching...",
  },
  {
    id: "crackathon",
    imageUrl: "https://placehold.co/400x250/A0A0A0/4B5563?text=Crackathon", // Replace with actual image path
    title: "Crackathon",
    description: "Crackathon is a dynamic two-day event where teams of two collaborate to solve a given problem statement and showcase their projects to resource persons. Each team...",
  },
];

export function PragyathaEvents() {
  return (
    <section className="w-full bg-white py-12 md:py-16 font-poppins">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Pragyatha <span className="text-gray-900">2024</span>
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pragyathaEventsData.map((event) => (
            <Card key={event.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="pt-4 pb-2">
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 line-clamp-3">
                  {event.description}
                </CardDescription>
              </CardHeader>
              {/* Optional: Add a button or link in CardContent if you want a "Read More" button */}
              {/* <CardContent className="px-6 pb-6">
                <Button variant="link" className="p-0 h-auto text-blue-600">Read More</Button>
              </CardContent> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}