import { EVENTS_DATA } from "@/data/uba";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

import { FaCalendarAlt, FaFilePdf } from "react-icons/fa";

export default function EventsPage() {
    return (
        <section className="min-h-screen bg-gray-50 py-16 px-4 md:px-10">

            {/* ======================================================
                🔶 UBA HEADER SECTION
            ======================================================= */}
            <AnimateOnScroll>
                <div className="max-w-7xl mx-auto mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Unnat Bharat <span className="text-blue-600">Abhiyan</span>
                    </h1>

                    <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto mb-10">
                        UBA aims to support the ME-RIISE Foundation in promoting financial inclusion 
                        through funding and mentorship programs. It focuses on entrepreneurship and 
                        skill development by providing training, grants, and business incubation support. 
                        The partnership drives social change by investing in education, healthcare, and 
                        youth empowerment initiatives. UBA’s commitment ensures economic stability, job 
                        creation, and sustainable business growth. Through strategic collaboration, the 
                        foundation can make a lasting impact on marginalized communities.
                    </p>

                    {/* Banner Image */}
                    <br />
                    <div className="rounded-3xl overflow-hidden shadow-lg">
                        <img
                            src="uba/ubatitle.jpg" // 🔄 Replace with your actual banner image path
                            alt="Unnat Bharat Abhiyan"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </AnimateOnScroll>
        

            {/* ======================================================
                 EVENTS LIST
            ======================================================= */}
            <div className="space-y-20 max-w-7xl mx-auto">

                {EVENTS_DATA.map(event => (
                    <AnimateOnScroll key={event.id} delay={0.1}>
                        <div className="bg-white shadow-lg rounded-3xl p-8 md:p-10 border border-gray-200">

                            {/* Event Title */}
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                {event.title}
                            </h2>

                            {/* Date */}
                            <p className="flex items-center gap-2 text-blue-600 font-medium text-xl mb-6">
                                <FaCalendarAlt className="text-blue-700" />
                                {event.date}
                            </p>

                            {/* Images Grid — Auto-responsive */}
                            <div
                                className={`
                                    grid gap-4 mt-4 mb-6
                                    ${event.images.length === 1 ? "grid-cols-1" : ""}
                                    ${event.images.length === 2 ? "grid-cols-1 sm:grid-cols-2" : ""}
                                    ${event.images.length === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : ""}
                                    ${event.images.length >= 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : ""}
                                `}
                            >
                                {event.images.map((img, i) => (
                                    <div
                                        key={i}
                                        className="overflow-hidden rounded-xl shadow-md"
                                    >
                                        <img
                                            src={img}
                                            alt={event.title}
                                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {event.description}
                            </p>

                            {/* PDF Button */}
                            <a
                                href={event.pdfLink}
                                target="_blank"
                                className="inline-flex items-center gap-3 bg-blue-600 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition-all"
                            >
                                <FaFilePdf className="text-white text-lg" />
                                View Full Report (PDF)
                            </a>

                        </div>
                    </AnimateOnScroll>
                ))}

            </div>

        </section>
    );
}
