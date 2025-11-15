import * as React from "react"

export function TopHeader() {
  return (
    <div className="w-full bg-white py-6 font-poppins">
      <div className="container mx-auto px-4">
        {/* Top Row: Main Text */}
        {/* Changed to justify-center as logos are removed */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Center Text */}
          <div className="text-center flex flex-col items-center justify-center">
            <h1 className="text-[#002147] font-semibold text-xs md:text-base lg:text-lg leading-tight text-balance">
              MALNAD ENCLAVE FOR RESEARCH, INNOVATION, INCUBATION, STARTUPS AND ENTREPRENEURSHIP
            </h1>
            <h2 className="text-[#002147] text-sm md:text-base mt-1">
              Malnad College of Engineering, Hassan
            </h2>
          </div>
        </div>

        {/* Bottom Row: Partner Logos */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 md:gap-12">
          <img
            src="moe.png" // REPLACE
            alt="MoE Innovation Cell"
            className="h-10 md:h-12 w-auto object-contain"
          />
          <img
            src="AICTE.png" // REPLACE
            alt="AICTE"
            className="h-12 md:h-14 w-auto object-contain"
          />
          <img
            src="IIC-logo-removebg-preview.png" // REPLACE
            alt="Institution's Innovation Council"
            className="h-10 md:h-12 w-auto object-contain"
          />
          <img
            src="images (11).png" // REPLACE
            alt="NAIN"
            className="h-10 md:h-12 w-auto object-contain"
          />
          <img
            src="UBA.png"
            alt="Unnat Bharat Abhiyan"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}