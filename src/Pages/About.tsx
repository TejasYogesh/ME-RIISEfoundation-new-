import React from "react";
import { FaLightbulb, FaUsers, FaSeedling, FaTools } from "react-icons/fa";
// import Countup from "react-countup";
import Stats from "../components/Stats"
const AboutUs: React.FC = () => {
    return (
        <section className="bg-gray-50 py-12 px-6 md:px-20">
            {/* Hero Image */}
            <div className="flex justify-center mb-10">
                <img
                    src="/aboutus/meriisehome.png"
                    alt="ME-RIISE Foundation"
                    className="rounded-lg shadow-lg w-full md:w-3/4"
                />
            </div>

            {/* About Section */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">
                    About ME-RIISE FOUNDATION
                </h2>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Malnad College of Engineering (MCE) was established in the year 1960,
                    during the second five year plan, as a joint venture of Government of
                    India, Government of Karnataka and the Malnad Technical Education
                    Society, Hassan. Furthering its objectives beyond education MCE
                    undertook to create social and economic impact in the Hassan region by
                    supporting innovations and start-ups in the field of agriculture,
                    education and technology in the year 2018. Thus, Malnad Enclave for
                    Research, Innovation, Incubation, Start-ups and Entrepreneurship
                    (ME-RIISE) was formed by MCE in the year 2018 to initiate its above
                    mentioned objectives supported by Management, Teaching staff and
                    Students.
                </p>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4">
                    As a step towards further expanding its reach and enhancing its
                    impact, ME-RIISE has set up a distinct entity, A Section 8 company,
                    ME-RIISE FOUNDATION promoted by Malnad College of Engineering in
                    September, 2022. This Section 8 company is composed of 5 Directors and
                    2 Advisors. ME-RIISE FOUNDATION is committed to promote innovation,
                    incubation, start-ups, and entrepreneurship in the region and expand
                    its reach, enabling students/ youth and aspiring entrepreneurs to
                    realize their potential and contribute towards the growth of the
                    economy.
                </p>
            </div>

            {/* Vision Section */}
            <div className="bg-blue-100 rounded-lg p-8 shadow-md mb-12">
                <h3 className="text-2xl font-semibold text-blue-800 flex items-center justify-center gap-2">
                    <FaLightbulb /> Vision
                </h3>
                <p className="text-gray-700 mt-4 text-center max-w-2xl mx-auto">
                    To engender industry ready graduates possessing magnificent skills in
                    the arena of innovation and technological development of products/
                    services.
                </p>
            </div>

            {/* Activities / Impact */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                    <FaSeedling className="text-green-500 text-4xl mx-auto mb-4" />
                    <h4 className="font-semibold text-lg">Innovation</h4>
                    <p className="text-gray-600">
                        Application of technology to promote arts, commerce, science,
                        sports, education, research, social welfare, and environment.
                    </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                    <FaUsers className="text-purple-500 text-4xl mx-auto mb-4" />
                    <h4 className="font-semibold text-lg">Training</h4>
                    <p className="text-gray-600">
                        Providing graduates with management and technical skills to be
                        creative and innovative.
                    </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                    <FaTools className="text-blue-500 text-4xl mx-auto mb-4" />
                    <h4 className="font-semibold text-lg">Employment</h4>
                    <p className="text-gray-600">
                        Creating job and employment opportunities for the region.
                    </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                    <FaLightbulb className="text-yellow-500 text-4xl mx-auto mb-4" />
                    <h4 className="font-semibold text-lg">Perseverance</h4>
                    <p className="text-gray-600">
                        Incubating the spirit of perseverance in the youths.
                    </p>
                </div>
            </div>

            {/* Stats */}
            {/* <div className="mt-12 text-center">
                <p className="text-gray-700 font-medium">
                    Over the years, ME-RIISE FOUNDATION has orchestrated more than{" "}
                    <span className="text-blue-700 font-bold">170 events</span> and
                    initiatives, resulting in significant benefits for over{" "}
                    <span className="text-blue-700 font-bold"><Countup end={4000} duration={5} /> students</span>.
                </p>
                <p className="text-gray-700 font-medium mt-2">
                    Supported in bringing out{" "}
                    <span className="text-blue-700 font-bold">25+ innovative prototypes</span>{" "}
                    and created <span className="text-blue-700 font-bold">10+ new applications</span>.
                </p>
            </div> */}

            <Stats/>
        </section>
    );
};

export default AboutUs;
