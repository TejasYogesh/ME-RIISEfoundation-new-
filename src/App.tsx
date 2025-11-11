import { HeroCarousel } from "./components/HeroCarousel"
import NavigationMenuDemo from "./components/Navbar"
import { EventPopup } from "./components/PopUp"
import { TopHeader } from "./components/TopHeader";
import { Footer } from "./components/Footer";
import { Initiatives } from "./components/Initiatives";
import { PragyathaEvents } from "./components/PragyathaGlimpse";
import { TradeShow } from "./components/OtherEvents";
import { ObjectivesSection } from "./components/Objects";
import { AnimateOnScroll } from "./components/AnimateOnScroll";
function App() {


  return (
    <div className="min-h-screen flex flex-col bg-background font-poppins">
      {/* The new header goes first */}
      <TopHeader />

      {/* Your existing Navbar goes right below it */}
      {/* I've added 'sticky top-0 z-50' if you want it to stick when scrolling past the header.
          Remove those classes if you want it to scroll away with the header. */}
      <div className="sticky top-0 z-50 bg-background border-b w-full">
        <div className="flex w-full justify-center py-4">
          <NavigationMenuDemo />
        </div>
      </div>

      {/* If any event popup is there then commit out and fill the details in EventPop component */}
      <EventPopup />

      {/* Responsible for the Carousel */}
      <div>
        <HeroCarousel />
      </div>



      {/* Remaining page  */}

      <main>
        <div className="px-6">
          <Initiatives />
        </div>
        <div className="px-6">
          <AnimateOnScroll>
            <PragyathaEvents />
          </AnimateOnScroll>
        </div>
        <div className="px-6">
          <TradeShow />
        </div>
        <div>
          <ObjectivesSection />
        </div>
      </main>

      <Footer />


    </div>
  )
}

export default App
