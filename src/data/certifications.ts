// src/data/certifications.ts
import type { ComponentType, SVGProps } from "react";
import { Award, FileBadge, FileText } from "lucide-react";

export interface CertificationItem {
  title: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>; // accepts <svg> props like className
  description: string;
  link: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "IIC | 2023-24",
    Icon: Award,
    description:
      "The Institution Innovation Council of Malnad College of Engineering has consistently performed well...",
    link: "#",
  },
  {
    title: "IIC | 2022-23",
    Icon: FileBadge,
    description:
      "The Institution Innovation Council of Malnad College of Engineering has earned consistent recognition...",
    link: "#",
  },
  {
    title: "MCE NISP POLICY",
    Icon: FileText,
    description:
      "The National Innovation and Startup Policy (NISP) guidelines encourage academic institutions...",
    link: "#",
  },
];
