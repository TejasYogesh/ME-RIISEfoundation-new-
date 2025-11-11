import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

// Define a type for the slide data for better TypeScript support
interface SlideData {
  id: string;
  type: 'image' | 'placeholder'; // To handle different kinds of slides
  imageUrl?: string; // Only for 'image' type
  title: string;
  description?: string;
  themeClasses?: { // For placeholder slides
    bg: string;
    text: string;
  };
}

// Store just the DATA in the array
const slidesData: SlideData[] = [
  {
    id: "slide1",
    type: "image",
    imageUrl: "https://placehold.co/1200x500/334155/white?text=News+Image+1", 
    title: "Startup Incubated at ME-RIISE wins ₹21 Lakh Grant",
    description: "Chathur Pravarthan Pvt Ltd secures funding under Elevate 2024 scheme.",
  },
   {
    id: "slide2",
    type: "image",
    imageUrl: "https://placehold.co/1200x500/334155/white?text=News+Image+2", 
    title: "Startup Incubated at ME-RIISE wins ₹21 Lakh Grant",
    description: "Chathur Pravarthan Pvt Ltd secures funding under Elevate 2024 scheme.",
  },
   {
    id: "slide3",
    type: "image",
    imageUrl: "https://placehold.co/1200x500/334155/white?text=News+Image+3", 
    title: "Startup Incubated at ME-RIISE wins ₹21 Lakh Grant",
    description: "Chathur Pravarthan Pvt Ltd secures funding under Elevate 2024 scheme.",
  },
];


export function HeroCarousel() {
  // Autoplay plugin configuration
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  )

  return (
    <section className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {/* Now we map over the DATA array and render the JSX here */}
          {slidesData.map((slide) => (
            <CarouselItem key={slide.id}>
              <div>
                <Card className="border-0 shadow-none">
                  <CardContent className="flex items-center justify-center p-0">
                    
                    {/* Conditional rendering based on slide type */}
                    {slide.type === 'image' && slide.imageUrl && (
                      <div className="relative h-[500px] w-full overflow-hidden rounded-lg md:h-[500px]">
                        <img
                          src={slide.imageUrl}
                          alt={slide.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                          <h3 className="text-xl font-bold md:text-3xl">{slide.title}</h3>
                          {slide.description && (
                            <p className="hidden text-sm md:block text-slate-200">
                              {slide.description}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {slide.type === 'placeholder' && slide.themeClasses && (
                      <div className={`flex h-[400px] w-full items-center justify-center rounded-lg md:h-[500px] ${slide.themeClasses.bg}`}>
                        <span className={`text-2xl font-semibold ${slide.themeClasses.text}`}>
                          {slide.title}
                        </span>
                      </div>
                    )}

                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 hidden md:flex" />
        <CarouselNext className="right-4 hidden md:flex" />
      </Carousel>
    </section>
  )
}