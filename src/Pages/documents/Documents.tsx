import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FileBadge,
  Handshake,
  FileText,
  FileArchive,
  FolderOpen,
} from "lucide-react";

const Documents: React.FC = () => {
  const navigate = useNavigate();

  const navItems = [
    {
      label: "Certifications",
      path: "/certifications",
      icon: <FileBadge className="w-4 h-4" />,
    },
    {
      label: "Collaborations",
      path: "/collaborations",
      icon: <Handshake className="w-4 h-4" />,
    },
    {
      label: "NISP",
      path: "/nisp",
      icon: <FileText className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020202] via-[#0a0a0a] to-black text-white px-6 md:px-20 py-12">

      {/* PAGE HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight">
          Discover <span className="font-semibold text-blue-500">ME-RIISE Documents</span>
        </h1>

        <p className="mt-4 text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Access official documents of ME-RIISE Foundation including certifications,
          collaborations, MoUs, innovation guidelines, and startup policy documents.
          Click on any category below to explore further.
        </p>
      </div>

      {/* MAIN FEATURES ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">

        {/* CERTIFICATIONS CARD */}
        <div
          onClick={() => navigate("/certifications")}
          className="cursor-pointer flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg hover:scale-[1.03] transition-all duration-300"
        >
          <FileArchive className="w-16 h-16 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold">Certifications</h3>
          <p className="text-gray-400 text-sm mt-2 text-center">
            Annual recognitions, institutional certifications & IIC star ratings.
          </p>
        </div>

        {/* COLLABORATIONS CARD */}
        <div
          onClick={() => navigate("/collaborations")}
          className="cursor-pointer flex flex-col items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg hover:scale-[1.03] transition-all duration-300"
        >
          <Handshake className="w-16 h-16 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold">Collaborations</h3>
          <p className="text-gray-400 text-sm mt-2 text-center">
            MoUs, industry partnerships, and institutional collaborations.
          </p>
        </div>

        {/* NISP CARD */}
        <div
          onClick={() => navigate("/nisp")}
          className="cursor-pointer flex flex-col items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg hover:scale-[1.03] transition-all duration-300"
        >
          <FolderOpen className="w-16 h-16 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold">NISP Policy</h3>
          <p className="text-gray-400 text-sm mt-2 text-center">
            National Innovation and Startup Policy guidelines for 2023-24.
          </p>
        </div>
      </div>

      {/* TABS NAVIGATION */}
      <div className="flex justify-center mt-12">
        <nav className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-xl px-6 py-4">
          <ul className="flex gap-8 text-sm md:text-base">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 
                    ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg scale-105"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`
                  }
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Documents;
