import { Cpu, Building2, MessageSquare, UserSquare2, Wrench } from "lucide-react";

export interface NainInfraItem {
  id: string;
  title: string;
  image: string;
  Icon: React.ElementType;
}

export const NAIN_INFRASTRUCTURE: NainInfraItem[] = [
  {
    id: "board-room",
    title: "Board Room",
    image: "/images/nain/boardroom.jpg",
    Icon: Building2,
  },
  {
    id: "digital-den",
    title: "Digital Den with Computing Facilities",
    image: "/images/nain/digital-den.jpg",
    Icon: Cpu,
  },
  {
    id: "discussion-area",
    title: "Discussion Area",
    image: "/images/nain/discussion-area.jpg",
    Icon: MessageSquare,
  },
  {
    id: "dia-cubicle",
    title: "DIA Cubicle",
    image: "/images/nain/dia-cubicle.jpg",
    Icon: UserSquare2,
  },
  {
    id: "tinkering-lab",
    title: "Tinkering Lab",
    image: "/images/nain/tinker-lab.jpg",
    Icon: Wrench,
  },
];
