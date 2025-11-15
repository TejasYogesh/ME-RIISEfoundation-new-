// src/data/achievements-data.ts

export type Achievement = {
  id: number;
  title: string;
  description: string;
  imageName: string;
  imageUrl: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "MCE Recognized as PMP (RGE P)",
    description:
      "Malnad College of Engineering recognized as Program Monitoring Partner under the Rajiv Gandhi Entrepreneurship Programme. Secured a grant of ₹26.60 Lakhs to support and mentor innovators across multiple cohorts.",
    imageName: "mce-rgep",
    imageUrl: "/assets/achievements/mce-rgep.jpg",
  },
  {
    id: 2,
    title: "Startup Karnataka Collaboration",
    description:
      "Partnership with Startup Karnataka and K-Tech to accelerate campus innovation. Funding and mentorship channels established for student startups and prototypes.",
    imageName: "startup-karnataka",
    imageUrl: "/assets/achievements/startup-karnataka.jpg",
  },
  {
    id: 3,
    title: "Mentor-Led Accelerator Cohort",
    description:
      "Four innovators supported in March-April 2025 with mentorship, seed funding and incubation support. Continued follow-on support planned for later cohorts.",
    imageName: "mentor-accelerator",
    imageUrl: "/assets/achievements/mentor-accelerator.jpg",
  },
  {
    id: 4,
    title: "Social Impact & Outreach",
    description:
      "Initiatives designed to translate technological prototypes into community-facing solutions, strengthening MCE's commitment to social innovation.",
    imageName: "social-impact",
    imageUrl: "/assets/achievements/social-impact.jpg",
  },
];
