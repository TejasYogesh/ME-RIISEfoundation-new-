// src/data/carousel.ts

export interface SlideData {
  id: string;
  type: "image" | "placeholder";
  imageUrl?: string;
  title: string;
  description?: string;
  themeClasses?: {
    bg: string;
    text: string;
  };
}

export const slidesData: SlideData[] = [
  {
    id: "slide1",
    type: "image",
    imageUrl: "https://placehold.co/1200x500/334155/white?text=News+Image+1",
    title: "Startup Incubated at ME-RIISE wins ₹21 Lakh Grant",
    description:
      "Chathur Pravarthan Pvt Ltd secures funding under Elevate 2024 scheme.",
  },
  {
    id: "slide2",
    type: "image",
    imageUrl: "https://placehold.co/1200x500/334155/white?text=News+Image+2",
    title: "ME-RIISE conducts Entrepreneurship Awareness Camp",
    description: "Students participated in hands-on startup workshops.",
  },
  {
    id: "slide3",
    type: "image",
    imageUrl: "https://placehold.co/1200x500/334155/white?text=News+Image+3",
    title: "New Innovators Bootcamp Launched",
    description:
      "Industry mentors guided students on prototyping and validation.",
  },
];
