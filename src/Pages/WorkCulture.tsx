import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function WorkCulture() {
  return (
    // Wrap the entire section in the animation component
    <AnimateOnScroll>
      <section className="w-full bg-white py-16 md:py-24 font-poppins">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Infrastructure in <span className="text-blue-600">ME-RIISE FOUNDATION.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-4xl">
              Our state-of-the-art infrastructure is designed to support innovation and efficiency at every level. With cutting-edge technology and modern facilities, we ensure that our teams have the tools they need to succeed. Our infrastructure supports scalability, allowing us to grow and adapt to changing market demands. We prioritize sustainability, integrating eco-friendly practices into our operations. At the core of our business, our infrastructure fosters productivity, creativity, and long-term success.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            
            {/* Column 1: YouTube Video */}
            <div className="w-full">
              <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl shadow-lg border">
                {/* HOW TO USE:
                  1. Go to your YouTube video.
                  2. Click "Share".
                  3. Click "Embed".
                  4. Copy the 'src' URL (e.g., "https"//www.youtube.com/embed/dQw4w9WgXcQ")
                  5. Paste it into the src attribute below.
                */}
                <iframe 
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE" // <-- REPLACE THIS
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Column 2: Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Work Culture.
              </h2>
              <p className="mt-6 text-base text-gray-600 leading-relaxed">
                Our work culture is built on collaboration, creativity, and mutual respect. We value diversity and believe in fostering an inclusive environment where every voice is heard and every idea is valued. Our team thrives in a dynamic, supportive atmosphere that encourages innovation and personal growth. We believe in work-life balance and empower our employees to excel both professionally and personally. Together, we create a culture that inspires passion, fosters teamwork, and drives success.
              </p>
            </div>

          </div>
        </div>
      </section>
    </AnimateOnScroll>
  )
}