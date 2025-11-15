import { useEffect, useState } from "react";
import { FaUsers, FaCogs, FaLightbulb, FaMobileAlt } from "react-icons/fa";


export default function DashboardStats() {
    // Stats data
    const stats = [
        {
            label: "Events & Initiatives",
            value: 170,
            icon: <FaCogs className="text-blue-600 text-4xl" />,
        },
        {
            label: "Students Benefited",
            value: 4000,
            icon: <FaUsers className="text-green-600 text-4xl" />,
        },
        {
            label: "Innovative Prototypes",
            value: 25,
            icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
        },
        {
            label: "Applications Created",
            value: 10,
            icon: <FaMobileAlt className="text-purple-600 text-4xl" />,
        },
    ];

    // Animated Count
    const [animated, setAnimated] = useState([0, 0, 0, 0]);
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimated((prev) =>
                prev.map((num, index) =>
                    num < stats[index].value ? num + Math.ceil(stats[index].value / 40) : stats[index].value
                )
            );
        }, 40);

        return () => clearInterval(interval);
    }, []);

    // Chart Data
    //   const chartData = [
    //     { name: "Events", value: 170 },
    //     { name: "Students", value: 4000 },
    //     { name: "Prototypes", value: 25 },
    //     { name: "Applications", value: 10 },
    //   ];

    //   const COLORS = ["#2563eb", "#16a34a", "#facc15", "#9333ea"];

    return (
        <div className="w-full py-16 bg-gray-50">
            <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
                Our Key <span className="text-blue-600"> Achievements</span>
            </h1>

            {/* ------------------- Stats Cards ------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white rounded-3xl shadow-md hover:shadow-lg transition border border-gray-200 flex flex-col items-center text-center"
                    >
                        {item.icon}
                        <h3 className="text-4xl font-bold text-gray-900 mt-4">{animated[index]}</h3>
                        <p className="text-gray-600 mt-2 font-medium">{item.label}</p>
                    </div>
                ))}
            </div>


        </div>
    );
}
