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
    id: 12,
    title: "UBA Journey – Media Recognition",
    description:
      "ME-RIISE Foundation’s Unnat Bharat Abhiyan journey was featured in Janamitra newspaper in February 2024, highlighting impactful community-driven initiatives.",
    imageName: "uba-journey-media-recognition",
    imageUrl: "/achievements/4.jpg",
  },

  {
    id: 11,
    title: "India’s Best Engineering Institutions 2024",
    description:
      "Malnad College of Engineering was rated ‘AAA’ in Careers360’s India’s Best Engineering Institutions 2024, recognizing excellence in academics, infrastructure, research, and student satisfaction.",
    imageName: "indias-best-engineering-institutions-2024",
    imageUrl: "/achievements/10.jpg",
  },

  {
    id: 10,
    title: "MoU with SUPRMENTR",
    description:
      "ME-RIISE Foundation signed an MoU with SUPRMENTR, a peer-to-peer career mentorship platform, enabling students to network with industry mentors and enhance employability.",
    imageName: "mou-with-suprmentr",
    imageUrl: "/achievements/12.jpg",
  },

  {
    id: 9,
    title: "Eminent Engineer Award 2024",
    description:
      "Dr. Geetha Kiran A., CEO of ME-RIISE Foundation, was honored with the Eminent Engineer Award by the Institution of Engineers, Karnataka State Chapter, Bengaluru.",
    imageName: "eminent-engineer-award-2024",
    imageUrl: "/achievements/6.jpg",
  },

  {
    id: 8,
    title: "4-Star IIC Rating & Mentor Institute",
    description:
      "Malnad College of Engineering earned a 4-star IIC rating for two consecutive years and ranked in the 101–150 band of NIRF Innovation 2023, leading to its selection as a Mentor Institute under the MoE Mentor-Mentee Scheme.",
    imageName: "iic-4-star-mentor-institute",
    imageUrl: "/achievements/16.jpg",
  },

  {
    id: 7,
    title: "Chathur Pravarthan Pvt. Ltd. – ₹21 Lakh Grant",
    description:
      "Chathur Pravarthan Private Limited, an MCE-incubated startup, won a ₹21 lakh grant under ELEVATE 2024 by the Government of Karnataka, reinforcing the strong startup ecosystem at MCE.",
    imageName: "cppl-elevate-2024-grant",
    imageUrl: "/achievements/CPPL.jpeg",
  },

  {
    id: 6,
    title: "ELEVATE 2024 Recognition",
    description:
      "Team Chathur Pravarthan Private Limited, incubated at MCE, was recognized under ELEVATE 2024 and awarded by Shri Priyank Kharge, Hon’ble Minister for IT, BT, and S&T, Government of Karnataka.",
    imageName: "elevate-2024-recognition",
    imageUrl: "/achievements/Elevate1.JPEG",
  },

  {
    id: 5,
    title: "Additional Funding under RGEP",
    description:
      "MCE received additional funding of ₹6.65 Lakhs under RGEP by the Government of Karnataka, raising the total grant to ₹19.95 Lakhs. This reflects sustained success in mentoring innovation and entrepreneurship.",
    imageName: "additional-rgep-funding",
    imageUrl: "/achievements/RGEP1.jpeg",
  },

  {
    id: 4,
    title: "MCE Recognized as PMP under RGEP",
    description:
      "Malnad College of Engineering was recognized as a Program Monitoring Partner (PMP) under the Rajiv Gandhi Entrepreneurship Programme (RGEP), securing a total grant of ₹26.6 Lakhs to support innovators across multiple cohorts in 2025.",
    imageName: "mce-pmp-rgep",
    imageUrl: "/achievements/RGEP2.jpeg",
  },

  {
    id: 3,
    title: "Best Innovation Ambassador Award",
    description:
      "Dr. Geetha Kiran A., Dean (Corporate Affairs), received the ‘Best Innovation Ambassador’ recognition at the IIC Regional Meet organized by MoE’s Innovation Cell and AICTE, Bengaluru, in December 2025.",
    imageName: "best-innovation-ambassador",
    imageUrl: "/achievements/bestinnovationcouncil.jpeg",
  },

  {
    id: 2,
    title: "IIC Regional Meet 2025 – Best IIC Poster Award",
    description:
      "The presentation made by Dr. Geetha Kiran A. and the IIC team at the Ministry of Education’s IIC Regional Meet 2025 was recognized with the BEST IIC POSTER AWARD, highlighting the strong innovation ecosystem at Malnad College of Engineering.",
    imageName: "iic-regional-meet-2025",
    imageUrl: "/achievements/iicregionalmeet.jpeg",
  },

  {
    id: 1,
    title: "Technology Business Incubator (TBI) 2.0",
    description:
      "On November 20, 2025, during the Bengaluru Tech Summit, Dr. Geetha Kiran A. of Malnad College of Engineering received a grant of ₹10 crore for establishing Technology Business Incubator (TBI) 2.0. This achievement was acknowledged by the Hon’ble Minister for IT & BT, Government of Karnataka, Shri Priyank Kharge. The initiative is a result of the innovation ecosystem fostered by ME-RIISE Foundation.",
    imageName: "tbi-2-0",
    imageUrl: "/achievements/tbi.jpeg",
  },
];

