import React from "react";
import CountUp from "react-countup";
import { FaCalendarAlt, FaUserGraduate, FaLightbulb, FaCode } from "react-icons/fa";

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50"> {/* removed blue gradient */}
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
        Our Impact Over the Years
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-20">
        {/* Events */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
          <FaCalendarAlt className="text-blue-600 text-5xl mb-4" />
          <h3 className="text-2xl font-bold text-blue-700">
            <CountUp end={170} duration={2} enableScrollSpy scrollSpyDelay={200} />+
          </h3>
          <p className="text-gray-600 mt-2">Events & Initiatives</p>
        </div>

        {/* Students */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
          <FaUserGraduate className="text-green-600 text-5xl mb-4" />
          <h3 className="text-2xl font-bold text-green-700">
            <CountUp end={4000} duration={3} enableScrollSpy scrollSpyDelay={200} />+
          </h3>
          <p className="text-gray-600 mt-2">Students Benefited</p>
        </div>

        {/* Prototypes */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
          <FaLightbulb className="text-yellow-500 text-5xl mb-4" />
          <h3 className="text-2xl font-bold text-yellow-600">
            <CountUp end={25} duration={5} enableScrollSpy scrollSpyDelay={200} />+
          </h3>
          <p className="text-gray-600 mt-2">Innovative Prototypes</p>
        </div>

        {/* Applications */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
          <FaCode className="text-purple-600 text-5xl mb-4" />
          <h3 className="text-2xl font-bold text-purple-700">
            <CountUp end={10} duration={7} enableScrollSpy scrollSpyDelay={200} />+
          </h3>
          <p className="text-gray-600 mt-2">New Applications</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
