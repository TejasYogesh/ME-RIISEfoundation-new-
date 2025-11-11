import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

// Define a type for each image
interface GalleryImage {
  id: string;
  imageUrl: string;
  alt: string;
}

// Data for your gallery - replace with your actual content
const tradeShowImages: GalleryImage[] = [
  {
    id: "img1",
    // Replace with actual image path
    imageUrl: "https://placehold.co/300x400/D1D5DB/4B5563?text=Hippo+Campus", 
    alt: "Hippo Campus Stall",
  },
  {
    id: "img2",
    imageUrl: "https://placehold.co/300x400/E5E7EB/4B5563?text=Buildforce+Stall",
    alt: "Buildforce Stall",
  },
  {
    id: "img3",
    imageUrl: "https://placehold.co/300x400/C0C0C0/4B5563?text=Tentuff+Stall",
    alt: "Tentuff Stall",
  },
  {
    id: "img4",
    imageUrl: "https://placehold.co/300x400/A0A0A0/4B5563?text=RNE+Infra+Stall",
    alt: "RNE Infra Stall",
  },
  {
    id: "img5",
    imageUrl: "https://placehold.co/300x400/808080/4B5563?text=Mechawin+Stall",
    alt: "Mechawin Technologies Stall",
  },
  {
    id: "img6",
    imageUrl: "https://placehold.co/300x400/D1D5DB/4B5563?text=Trade+Show+6",
    alt: "Trade Show 6",
  },
];

export function TradeShow() {
  return (
    <section className="w-full bg-white py-12 md:py-16 font-poppins">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <div className="mb-10 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Trade Show 2.0
          </h2>
          <p className="mt-4 text-gray-600">
            The Trade Show held on 14th December 2024 at Anantya Palace Grounds, Bangalore, organized by ME-RIISE Foundation, successfully provided a platform for businesses to increase brand visibility, generate leads, and network with industry professionals. The event highlighted a diverse range of innovative products and services from various sectors, including construction, education, technology, real estate, and more.
          </p>
        </div>

        {/* Image Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {tradeShowImages.map((image) => (
              <CarouselItem 
                key={image.id} 
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <div className="p-1">
                  <Card className="overflow-hidden rounded-lg shadow-md">
                    <CardContent className="p-0">
                      <img
                        src={image.imageUrl}
                        alt={image.alt}
                        className="w-full h-full object-cover aspect-[3/4]" // 3:4 aspect ratio
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  )
}