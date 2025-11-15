import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { CalendarDays, FileText, GraduationCap, BadgeCheck } from "lucide-react";
// import AnimatedTitle from "@/components/AnimatedTitle";
// Import MOE card data
import { MOE_YEARS } from "@/data/moe-iic";

export default function MoEIICPage() {
    return (
        <AnimateOnScroll>
            <section className="w-full bg-white text-gray-800 py-16 md:py-24 px-6 font-poppins">
                <div className="max-w-6xl mx-auto">

                    {/* ========================================== */}
                    {/*               HEADER SECTION               */}
                    {/* ========================================== */}
                    <div className="mb-14">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                            Ministry of Education –{" "}
                            <span className="block text-blue-600 mt-2">[MoE]</span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-semibold mt-6 text-gray-900 flex items-center gap-3">
                            <BadgeCheck className="w-8 h-8 text-blue-600" />
                            Institution’s Innovation Council (IIC)
                        </h2>
                    </div>

                    {/* ========================================== */}
                    {/*             DESCRIPTION SECTION             */}
                    {/* ========================================== */}
                    <p className="text-lg leading-relaxed text-gray-700 max-w-5xl">
                        Ministry of Education (MoE), Govt. of India has established{" "}
                        <a
                            href="https://iic.mic.gov.in"
                            className="text-blue-600 font-semibold underline hover:text-blue-800"
                            target="_blank"
                            rel="noreferrer"
                        >
                            MoE’s Innovation Cell (MIC)
                        </a>{" "}
                        to systematically foster innovation among Higher Education Institutions. MIC encourages
                        students by supporting them to work with new ideas and convert them to prototypes.
                        <br /><br />
                        IICs are established across HEIs to create an innovation ecosystem. In collaboration with
                        ME-RIISE Foundation, MCE fosters innovation and entrepreneurship through the Institution
                        Innovation Cell.
                    </p>

                    {/* ========================================== */}
                    {/*         MINI BUTTON CARD SECTION           */}
                    {/* ========================================== */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
                        <MiniCard
                            title="Calendar of IIC"
                            desc="View scheduled events & innovation activities."
                            icon={<CalendarDays className="w-10 h-10 text-blue-400" />}
                            link="#"
                        />

                        <MiniCard
                            title="NISP Policy"
                            desc="Read the official National Startup Policy."
                            icon={<FileText className="w-10 h-10 text-green-400" />}
                            link="/nisp"
                        />

                        <MiniCard
                            title="About MoE–IIC"
                            desc="Know more about national-level initiatives."
                            icon={<GraduationCap className="w-10 h-10 text-purple-400" />}
                            link="https://iic.mic.gov.in/about"
                        />
                    </div>

                    {/* ========================================== */}
                    {/*          MOE YEARLY CARD SECTION           */}
                    {/* ========================================== */}
                    <h3 className="text-3xl font-bold text-gray-900 mt-20 mb-8 text-center">
                        MoE – IIC Achievements by Year
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {MOE_YEARS.map((item, idx) => (
                            <AnimateOnScroll key={idx}>
                                <div className="bg-blue-600 text-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all">

                                    <h2 className="text-3xl font-semibold text-center">MOE</h2>
                                    <p className="text-lg text-center mt-2 opacity-90">{item.year}</p>

                                    <p className="mt-6 text-base leading-relaxed opacity-90">
                                        {item.description}
                                    </p>

                                    <div className="flex justify-between gap-4 mt-10">
                                        <a
                                            href={item.eventLink}
                                            className="w-1/2 bg-white text-black text-center py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
                                        >
                                            View Event Details
                                        </a>

                                        <a
                                            href={item.certificateLink}
                                            className="w-1/2 bg-white text-black text-center py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
                                        >
                                            Certificate
                                        </a>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>
        </AnimateOnScroll>
    );
}



/* =============================
    MINI CARD COMPONENT
==============================*/
function MiniCard({
    title,
    desc,
    icon,
    link,
}: {
    title: string;
    desc: string;
    icon: React.ReactElement;
    link: string;
}) {
    return (
        <a
            href={link}
            className="p-6 rounded-2xl bg-black text-white flex items-start gap-4 shadow-lg hover:scale-[1.02] transition-all duration-300"
        >
            {icon}
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-300 mt-1">{desc}</p>
            </div>
        </a>
    );
}
