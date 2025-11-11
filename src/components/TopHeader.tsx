import * as React from "react"

export function TopHeader() {
  return (
    <div className="w-full bg-white py-2 font-poppins">
      <div className="container mx-auto px-4">
        {/* Top Row: Main Logos and Text */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Logo (MERIISE) */}
          <div className="shrink-0">
            <img
              src="/MERIISEmain.png" // REPLACE WITH ACTUAL PATH
              alt="MERIISE Foundation"
              className="h-24 w-auto object-contain"
            />
          </div>

          {/* Center Text */}
          <div className="text-center flex flex-col items-center justify-center">
             {/* Using a specific blue color to match closely, adjust as needed */}
            <h1 className="text-[#002147] text-xs md:text-base lg:text-xl leading-tight text-balance">
              MALNAD ENCLAVE FOR RESEARCH, INNOVATION, INCUBATION, STARTUPS AND ENTREPRENEURSHIP
            </h1>
            <h2 className="text-[#002147] text-sm md:text-base mt-1">
              Malnad College of Engineering, Hassan
            </h2>
          </div>

          {/* Right Logo (College Shield) */}
          <div className="shrink-0">
            <img
              src="/malnad_college_of_engineering_logo (1).jpg" // REPLACE WITH ACTUAL PATH
              alt="Malnad College of Engineering"
              className="h-24 w-auto object-contain"
            />
          </div>
        </div>

        {/* Bottom Row: Partner Logos */}
        {/* We use flex-wrap for smaller screens so they don't squish */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 md:gap-12">
          <img
            src="/moe.png" // REPLACE
            alt="MoE Innovation Cell"
            className="h-10 md:h-12 w-auto object-contain"
          />
          <img
            src="/AICTE.png" // REPLACE
            alt="AICTE"
            className="h-16 md:h-18 w-auto object-contain"
          />
          <img
            src="IIC-logo-removebg-preview.png" // REPLACE
            alt="Institution's Innovation Council"
            className="h-10 md:h-28 w-auto object-contain"
          />
          <img
            src="/images (11).png" // REPLACE
            alt="NAIN"
            className="h-10 md:h-18 w-auto object-contain"
          />
          <img
            src="/UBA.png" // REPLACE
            alt="UBA.png"
            className="h-10 md:h-22 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}