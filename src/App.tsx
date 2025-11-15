import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import InfrastructurePage from "./Pages/Infrastructure";
import Achievements from "./Pages/Achievements";
import NavigationMenuDemo from "./components/Navbar";
import { Footer } from "./components/Footer";
import { StartupsPage } from "./Pages/startups/Startups";
import CertificationsPage from "./Pages/documents/Certificates";
import Documents from "./Pages/documents/Documents";
import Collaborations from "./Pages/documents/Collaborations"

function App() {
  return (

    <>
      <div className="sticky top-0 z-50 bg-background border-b w-full">
        <div className="flex w-full justify-center py-4">
          <NavigationMenuDemo />
        </div>
      </div>
      {/* <BrowserRouter> */}
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/infrastructure" element={<InfrastructurePage />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/startups" element={<StartupsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/collaborations" element={<Collaborations/>}/>
        <Route path="/documents" element={<Documents/>}/>

        {/* Add more pages later */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/nain" element={<Nain />} /> */}
        {/* <Route path="/uba" element={<Uba />} /> */}
        {/* etc. */}
      </Routes>
      {/* </BrowserRouter> */}
      <Footer />
    </>
  );
}

export default App;
