import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import type { LoadingBarRef } from "react-top-loading-bar";

import Home from "./Pages/Home";
import InfrastructurePage from "./Pages/Infrastructure";
import Achievements from "./Pages/Achievements";
import NavigationMenuDemo from "./components/Navbar";
import { Footer } from "./components/Footer";
import { StartupsPage } from "./Pages/startups/Startups";
import CertificationsPage from "./Pages/documents/Certificates";
import Documents from "./Pages/documents/Documents";
import Collaborations from "./Pages/documents/Collaborations";
import Nisp from "./Pages/documents/Nisp";
import Faculty from "./Pages/Faculty";
import TeamPage from "./Pages/Teams";
import MoEIICPage from "./Pages/moe-iic";
import NAINPage from "./Pages/Nain";
import ContactUsPage from "./Pages/Contact";
import EventsPage from "./Pages/Uba";
import AboutUs from "./Pages/About";

function App() {
  const loadingRef = useRef<LoadingBarRef | null>(null);
  const location = useLocation();

  // ▶ Start loading bar on route change
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    if (loadingRef.current) {
      loadingRef.current.continuousStart();
    }

    const timer = setTimeout(() => {
      loadingRef.current?.complete();
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* 🔵 Top Loading Bar */}
      <LoadingBar
        color="#3b82f6"
        height={4}
        shadow={false}
        ref={loadingRef}
      />

      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-background border-b w-full">
        <div className="flex w-full justify-center py-4">
          <NavigationMenuDemo />
        </div>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infrastructure" element={<InfrastructurePage />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/startups" element={<StartupsPage />} />
        <Route path="/documents" element={<Documents />} />

        {/* FULL SEPARATE PAGES */}
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/nisp" element={<Nisp />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/moe-iic" element={<MoEIICPage />} />
        <Route path="/nain" element={<NAINPage />} />

        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/uba" element={<EventsPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
