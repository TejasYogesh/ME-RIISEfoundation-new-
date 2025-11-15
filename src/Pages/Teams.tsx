// TeamPage.tsx
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Team data
const teamMembers = [
  {
    name: "Mohammed Fahad Khan",
    role: "Executive Lead",
    branch: "Mechanical Engg.",
    year: "Final Year",
    image: "/images/fahad.jpg",
  },
  {
    name: "Anagha B S",
    role: "Executive & HR Lead",
    branch: "Computer Science Engg.",
    year: "Final Year",
    image: "/images/anagha.jpg",
  },
  {
    name: "P Pratheeka Ganapathi",
    role: "Executive & Digital Lead",
    branch: "Information Science Engg.",
    year: "Final Year",
    image: "/images/pratheeka.jpg",
  },
  {
    name: "Chaithanya S L",
    role: "Executive & Finance Lead",
    branch: "Electronics & Electrical Engg.",
    year: "Final Year",
    image: "/images/chaithanya.jpg",
  },
  {
    name: "Darshan Shetty",
    role: "Planning Lead, Marketing & UBA Lead",
    branch: "Electronics and Instrumentation Engg.",
    year: "Final Year",
    image: "/images/darshan.jpg",
  },
  {
    name: "Hemanth S",
    role: "Planning, Digital & Design Lead",
    branch: "Electronics and Instrumentation Engg.",
    year: "Final Year",
    image: "/images/hemanth.jpg",
  },
  {
    name: "Arjun H",
    role: "Budget and Creative Lead",
    branch: "Civil Engg.",
    year: "Final Year",
    image: "/images/arjun.jpg",
  },
  {
    name: "Tejaswini A S",
    role: "Budget and Creative Lead",
    branch: "Information Science Engg.",
    year: "Final Year",
    image: "/images/tejaswini.jpg",
  },
  {
    name: "Harshini N D",
    role: "Editorial Lead",
    branch: "Computer Science Engg.",
    year: "Final Year",
    image: "/images/harshini.jpg",
  },
  {
    name: "Rumaan Sharief N",
    role: "Editorial Lead, Startup & Research Lead",
    branch: "Civil Engg.",
    year: "Final Year",
    image: "/images/rumaan.jpg",
  },
  {
    name: "Sinchana M G",
    role: "Editorial Lead, Social Media & Broadcast Lead",
    branch: "Electronics & Communication Engg.",
    year: "Final Year",
    image: "/images/sinchana.jpg",
  },
  {
    name: "H G Pratheek Gowda",
    role: "Technical Lead",
    branch: "Computer Science Engg.",
    year: "Final Year",
    image: "/images/pratheek.jpg",
  },
  {
    name: "Thejaswini M D",
    role: "Technical Lead",
    branch: "Computer Science Engg.",
    year: "Final Year",
    image: "/images/thejaswini.jpg",
  },
  {
    name: "Prajwal Kumbar H M",
    role: "Digital Lead",
    branch: "Electronics & Communication Engg.",
    year: "Final Year",
    image: "/images/prajwal.jpg",
  },
  {
    name: "Ayesha Zameer",
    role: "Database Lead",
    branch: "Electrical & Electronics Engg.",
    year: "Final Year",
    image: "/images/ayesha.jpg",
  },
];

const TeamPage: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  // Simulated loading delay (1 sec)
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  /* -----------------------------------------------
     FULL PAGE SKELETON LOADING
  -------------------------------------------------*/
  if (loading) {
    return (
      <div className="p-8">
        {/* Page Title Skeleton */}
        <Skeleton className="h-10 w-56 mx-auto mb-8 rounded-lg" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card
              key={i}
              className="border border-gray-200 rounded-xl p-4 shadow-sm"
            >
              {/* Image Skeleton */}
              <Skeleton className="w-full h-64 rounded-xl mb-4" />

              {/* Name Skeleton */}
              <Skeleton className="h-5 w-3/4 mb-2 rounded-md" />

              {/* Branch Skeleton */}
              <Skeleton className="h-4 w-1/2 mb-4 rounded-md" />

              {/* Role Box Skeleton */}
              <Skeleton className="h-10 w-full rounded-xl" />
            </Card>
          ))}
        </div>
      </div>
    );
  }

  /* -----------------------------------------------
     ACTUAL TEAM PAGE CONTENT
  -------------------------------------------------*/
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="transition-transform transform hover:scale-105 hover:shadow-lg border border-gray-200 rounded-xl overflow-hidden"
          >
            {/* Image Section */}
            <div className="w-full h-64 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Text Section */}
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{member.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{member.branch}</p>
            </CardHeader>

            <CardContent className="p-4">
              <p className="text-sm font-medium text-white bg-blue-600 rounded-2xl p-4">
                {member.role}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
