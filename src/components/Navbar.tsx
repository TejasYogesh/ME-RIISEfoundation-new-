import * as React from "react";
import { Link } from "react-router-dom";
import { Menu, Home, Users, Briefcase, FileText, Calendar } from "lucide-react"; // Add hamburger icon and navigation icons

import { cn } from "@/lib/utils";
import { useIsMobile } from "../hooks/use-mobile";

import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const aboutUs = [
  {
    title: "ME-RIISE Foundation",
    href: "/aboutus",
    description:
      "ME-RIISE FOUNDATION promoted by Malnad College of Engineering in September, 2022.",
  },
  {
    title: "Infrastructure",
    href: "/infrastructure",
    description:
      "Our state-of-the-art infrastructure is designed to support innovation.",
  },
  {
    title: "Achievements",
    href: "/achievements",
    description: "A showcase of ME-RIISE achievements and recognitions.",
  },
  {
    title: "Documents",
    href: "/documents",
    description: "A repository of certificates and official documents.",
  },
  {
    title: "Members of ME-RIISE",
    href: "/faculty",
    description: "Meet the members contributing to ME-RIISE.",
  },
  {
    title: "Team ME-RIISE",
    href: "/team",
    description: "Know the team working behind ME-RIISE initiatives.",
  },
];

const Wingsofmeriise = [
  { title: "Startups", href: "/startups", description: "Incubated startups." },
  { title: "MoE-IIC", href: "/moe-iic", description: "Institutional innovation cell." },
  { title: "NAIN", href: "/nain", description: "New Age Incubation Network." },
  { title: "UBA", href: "/uba", description: "Unnat Bharat Abhiyan initiatives." },
  { title: "RGEP" , href: "/rgep", description: "Rajiv Gandhi Entrepreneurship Program"}
];

// Data array for the Pragyatha dropdown
const pragyathaEvents = [
  {
    title: "Pragyatha '25",
    href: "/pragyatha/2025",
    description: "See what's planned for the upcoming Pragyatha event."
  },
  {
    title: "Pragyatha '24",
    href: "/pragyatha/2024",
    description: "View the highlights and gallery from Pragyatha 2024."
  },
  {
    title: "Pragyatha '23",
    href: "/pragyatha/2023",
    description: "Explore the archives from Pragyatha 2023."
  },
];

// 1. ADDED: Data array for the new Documents dropdown
const documents = [
  {
    title: "MCE NISP Policy",
    href: "/documents/nisp-policy",
    description: "View the MCE NISP Policy document.",
  },
  {
    title: "Collaborations",
    href: "/documents/collaborations",
    description: "See our MOUs and collaborations.",
  },
  {
    title: "Certifications",
    href: "/documents/certifications",
    description: "Explore our official certifications.",
  },
];


export function MobileDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Explore ME-RIISE Foundation</SheetTitle>
          <SheetDescription>Explore ME-RIISE sections</SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">
          <nav className="space-y-4">
            <Link to="/" className="flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors">
              <Home className="h-5 w-5" />
              Home
            </Link>
            <div className="space-y-2">
              <div className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-muted-foreground">
                <Users className="h-5 w-5" />
                About Us
              </div>
              {aboutUs.map((item) => (
                <Link key={item.title} to={item.href} className="flex items-center gap-3 px-8 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-muted-foreground">
                <Briefcase className="h-5 w-5" />
                Wings of ME-RIISE
              </div>
              {Wingsofmeriise.map((item) => (
                <Link key={item.title} to={item.href} className="flex items-center gap-3 px-8 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-muted-foreground">
                <Calendar className="h-5 w-5" />
                Pragyatha
              </div>
              <Link to="/pragyatha" className="flex items-center gap-3 px-8 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                Pragyatha
              </Link>
              {pragyathaEvents.map((event) => (
                <Link key={event.title} to={event.href} className="flex items-center gap-3 px-8 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                  {event.title}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-muted-foreground">
                <FileText className="h-5 w-5" />
                Documents
              </div>
              {documents.map((item) => (
                <Link key={item.title} to={item.href} className="flex items-center gap-3 px-8 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
        <div className="my-4 py-4 border-t px-4">
          <SheetClose asChild>
            <Button variant="outline" className="w-full">Close Menu</Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}


export function NavigationMenuDemo() {
  const isMobile = useIsMobile();

  return (
    <div className="w-full flex items-center justify-between px-4 md:px-10 py-4 bg-white sticky top-0 z-50">

      {/* LEFT: COLLEGE LOGO */}
      <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
        <img
          src="logos/MERIISEmain.png"
          alt="MCE Logo"
          className="h-10 md:h-12 w-auto object-contain"
        />
      </Link>

      {/* CENTER: NAVIGATION MENU */}
      <NavigationMenu viewport={isMobile} className="hidden md:flex">
        <NavigationMenuList>

          {/* HOME */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* ABOUT US */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[550px] gap-3 p-4 grid-cols-2">
                {aboutUs.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.href}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* WINGS */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Wings of ME-RIISE</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[550px] gap-3 p-4 grid-cols-2">
                {Wingsofmeriise.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.href}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* PRAGYATHA */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Pragyatha</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-4 no-underline outline-none transition-all duration-200 md:p-6"
                      to="/pragyatha"
                    >
                      <div className="mb-2 text-lg font-medium">Pragyatha</div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Explore event archives & highlights.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                {pragyathaEvents.map((event) => (
                  <ListItem key={event.title} title={event.title} href={event.href}>
                    {event.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* DOCUMENTS */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Documents</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-3 p-4 md:w-[400px]">
                {documents.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.href}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      {/* MOBILE DRAWER (RIGHT) */}
      <div className="md:hidden ml-auto">
        <MobileDrawer />
      </div>

      {/* RIGHT: ME-RIISE LOGO (HIDDEN ON MOBILE) */}
      <Link to="/" className="hidden md:flex items-center gap-2 transition-transform hover:scale-105">
        <img
          src="logos/malnad_college_of_engineering_logo (1).jpg"
          alt="ME-RIISE Logo"
          className="h-10 md:h-12 w-auto object-contain"
        />
      </Link>

        </div>
      );
    }

/* ----------------------------------------------------------
   FIXED LIST ITEM – works with React Router <Link> internally
------------------------------------------------------------*/
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => {
  const isInternal = href.startsWith("/");

  return (
    <li>
      <NavigationMenuLink asChild>
        {isInternal ? (
          <Link
            to={href}
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        ) : (
          <a
            href={href}
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        )}
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default NavigationMenuDemo;