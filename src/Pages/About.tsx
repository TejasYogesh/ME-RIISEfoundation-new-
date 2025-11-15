import React from "react";
import { FaLightbulb, FaUsers, FaSeedling, FaTools } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";
import Stats from "../components/Stats";

const AboutUs: React.FC = () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    /* --------------------------------------------------------
       🔵 SKELETON LOADING UI
    ---------------------------------------------------------*/
    if (loading) {
        return (
            <section className="bg-gray-50 py-12 px-6 md:px-20 space-y-12">

                {/* Hero Image Skeleton */}
                <div className="flex justify-center">
                    <Skeleton className="w-full md:w-2/3 h-64 rounded-xl" />
                </div>

                {/* About Text Skeleton */}
                <div className="space-y-4 max-w-3xl mx-auto">
                    <Skeleton className="h-8 w-2/3 mx-auto" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6 mx-auto" />
                    <Skeleton className="h-4 w-4/6 mx-auto" />
                </div>

                {/* Vision Skeleton */}
                <div className="bg-blue-100 rounded-lg p-8 shadow-md space-y-4">
                    <Skeleton className="h-8 w-40 mx-auto" />
                    <Skeleton className="h-4 w-4/5 mx-auto" />
                </div>

                {/* Four Feature Skeleton Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="p-6 bg-white rounded-lg shadow space-y-4">
                            <Skeleton className="h-16 w-16 mx-auto rounded-full" />
                            <Skeleton className="h-5 w-1/2 mx-auto" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6 mx-auto" />
                        </div>
                    ))}
                </div>

                {/* Stats Skeleton */}
                <div className="flex justify-center">
                    <Skeleton className="h-24 w-full md:w-2/3 rounded-xl" />
                </div>

            </section>
        );
    }

    /* --------------------------------------------------------
       🔵 MAIN PAGE CONTENT (after loading)
    ---------------------------------------------------------*/
    return (
        <section className="bg-gray-50 py-12 px-6 md:px-20">

            {/* Hero Image */}
            <div className="flex justify-center mb-10">
                <img
                    src="/aboutus/meriisehome.png"
                    alt="ME-RIISE Foundation"
                    className="rounded-lg shadow-lg w-full md:w-2/3 object-cover"
                />
            </div>

            {/* About Section */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">
                    About ME-RIISE FOUNDATION
                </h2>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Malnad College of Engineering (MCE) was established in the year 1960...
                </p>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4">
                    ME-RIISE FOUNDATION is committed to promote innovation...
                </p>
            </div>

            {/* Vision Section */}
            <div className="bg-blue-100 rounded-lg p-8 shadow-md mb-12">
                <h3 className="text-2xl font-semibold text-blue-800 flex items-center justify-center gap-2">
                    <FaLightbulb /> Vision
                </h3>
                <p className="text-gray-700 mt-4 text-center max-w-2xl mx-auto">
                    To engender industry-ready graduates possessing magnificent skills...
                </p>
            </div>

            {/* Activities */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                    <FaSeedling className="text-green-500 text-4xl mx-auto mb-4" />
                    <h4 className="font-semibold text-lg">Innovation</h4>
                    <p className="text-gray-600">Application of technology...</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                    <FaUsers className="text-purple-500 text-4xl mx-auto mb-4" />
                    <h4 className="font-semibold text-lg">Training</h4>
                    <p className="text-gray-600">Providing graduates with skills...</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                    <FaTools className="text-blue-500 text-4xl mx-auto mb-4" />
                    <h4 className="font-semibold text-lg">Employment</h4>
                    <p className="text-gray-600">Creating job opportunities...</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                    <FaLightbulb className="text-yellow-500 text-4xl mx-auto mb-4" />
                    <h4 className="font-semibold text-lg">Perseverance</h4>
                    <p className="text-gray-600">Incubating perseverance...</p>
                </div>
            </div>

            {/* STATS COMPONENT */}
            <Stats />
        </section>
    );
};

export default AboutUs;
