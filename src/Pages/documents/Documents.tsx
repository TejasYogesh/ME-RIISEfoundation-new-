import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FileBadge, Handshake, FileText, FileArchive, FolderOpen } from "lucide-react";

const Documents: React.FC = () => {
    const navItems = [
        {
            label: "Certifications",
            path: "/certifications",
            icon: <FileBadge className="w-4 h-4" />,
            desc: "Official certificates issued by ME-RIISE, IIC, and institutional bodies."
        },
        {
            label: "Collaborations",
            path: "/collaborations",
            icon: <Handshake className="w-4 h-4" />,
            desc: "MoUs and institutional partnerships that strengthen innovation initiatives."
        },
        {
            label: "NISP",
            path: "nisp",
            icon: <FileText className="w-4 h-4" />,
            desc: "National Innovation & Startup Policy documents and guidelines."
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white px-6 md:px-16 py-16 relative">

            {/* Soft Background Illustration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://cdn-icons-png.flaticon.com/512/9068/9068844.png')] bg-center bg-contain bg-no-repeat"></div>

            {/* Page Heading */}
            <div className="relative text-center mb-14">
                <h1 className="text-4xl md:text-6xl font-light">
                    Documents | <span className="font-semibold text-blue-500">ME-RIISE Foundation</span>
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed">
                    Explore all official documents related to ME-RIISE including certifications, collaborations, 
                    and policies. These documents reflect our commitment to innovation, transparency, 
                    and excellence in nurturing an entrepreneurial ecosystem.
                </p>
            </div>

            {/* Illustration Row */}
            <div className="relative flex justify-center gap-10 mb-12 flex-wrap">
                <div className="flex flex-col items-center">
                    <FileArchive className="w-16 h-16 text-blue-500" />
                    <p className="text-gray-400 text-sm mt-2">Official Records</p>
                </div>
                <div className="flex flex-col items-center">
                    <Handshake className="w-16 h-16 text-blue-500" />
                    <p className="text-gray-400 text-sm mt-2">Partnerships</p>
                </div>
                <div className="flex flex-col items-center">
                    <FolderOpen className="w-16 h-16 text-blue-500" />
                    <p className="text-gray-400 text-sm mt-2">Policies</p>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="relative flex justify-center">
                <nav className="bg-gray-900 border border-gray-800 rounded-2xl shadow-xl px-4 py-3">
                    <ul className="flex gap-6 text-sm md:text-base">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 
                                         ${isActive
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

            {/* Section Description Under Tabs */}
            <div className="text-center mt-6 text-gray-400 text-sm">
                Select a category to view detailed documents and records.
            </div>

            {/* Content Section */}
            <div className="relative mt-12 mx-auto max-w-5xl border-t border-gray-700 pt-10">
                <Outlet />
            </div>
        </div>
    );
};

export default Documents;
