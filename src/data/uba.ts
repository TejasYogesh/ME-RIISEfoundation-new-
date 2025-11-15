// src/data/eventsData.ts

export interface EventItem {
  id: number;
  title: string;
  date: string;
  description: string;
  pdfLink: string;
  images: string[];
}

export const EVENTS_DATA: EventItem[] = [
  {
    id: 1,
    title: "Train the Trainers: Empowering Minds with IoT Innovation",
    date: "23/11/2024",
    description:
      "The Department of Electronics and Communication Engineering successfully organised the 'Train the Trainers' workshop under Unnat Bharat Abhiyan. The program aims at equipping students with hands-on knowledge of IoT, inspiring rural school children, fostering technological awareness, and bridging the digital divide.",
    pdfLink: "/assets/events/train-the-trainers.pdf",
    images: [
      "/assets/events/iot/iot1.jpg",
      "/assets/events/iot/iot2.jpg",
      "/assets/events/iot/iot3.jpg",
    //   "/assets/events/iot/iot4.jpg",
    ],
  },

  // Add more event objects here
];
