import { AnimateOnScroll } from "@/components/AnimateOnScroll";

import { FaEnvelope, FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { MdLocationOn, MdAccessTime } from "react-icons/md";

export default function ContactUsPage() {
    return (
        <section className="min-h-screen bg-gray-50 py-20 px-6">

            {/* ---------- PAGE TITLE ---------- */}
            <AnimateOnScroll>
                <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-10">
                    Contact <span className="text-blue-600">Us</span>
                </h1>
            </AnimateOnScroll>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                {/* ===================================================
                    LEFT SIDE — CONTACT DETAILS
                =================================================== */}
                <AnimateOnScroll delay={0.1}>
                    <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 
                                    h-full flex flex-col justify-between">

                        <div className="space-y-10">

                            {/* Contact Title */}
                            <div className="space-y-3">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    Contact Details
                                </h2>

                                <p className="text-lg text-gray-700">
                                    <strong>Dr. Geetha Kiran A</strong> — CEO, ME-RIISE Foundation
                                </p>

                                <p className="text-gray-700 flex items-center gap-2">
                                    ceomeriise@mcehassan.ac.in
                                </p>
                            </div>

                            {/* Follow Us */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    Follow Us
                                </h2>

                                <div className="flex items-center gap-6 text-3xl">
                                    <FaTwitter className="text-blue-400 hover:scale-110 transition" />
                                    <FaFacebook className="text-blue-600 hover:scale-110 transition" />
                                    <FaInstagram className="text-pink-500 hover:scale-110 transition" />
                                    <FaEnvelope className="text-red-500 hover:scale-110 transition" />
                                    <FaLinkedin className="text-blue-700 hover:scale-110 transition" />
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                    <MdAccessTime className="text-yellow-500" /> Working Hours
                                </h2>
                                <p className="text-gray-700 mt-2">
                                    Monday – Saturday: 9:00 AM – 5:00 PM
                                </p>
                            </div>

                        </div>

                    </div>
                </AnimateOnScroll>

                {/* ===================================================
                    RIGHT SIDE — LOCATION + MAP
                =================================================== */}
                <AnimateOnScroll delay={0.2}>
                    <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 
                                    h-full flex flex-col justify-between space-y-10">

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                <MdLocationOn className="text-red-600" /> Location
                            </h2>

                            <p className="text-lg text-gray-700">
                                ME-RIISE Foundation <br />
                                Malnad College of Engineering, Hassan, Karnataka 573201
                            </p>
                        </div>

                        {/* Google Map */}
                        <div className="rounded-xl overflow-hidden shadow-md border-2 border-blue-600 flex-1">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.0359571429174!2d76.0899373749163!3d13.0075043873039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb2b6aa8bbf8bd%3A0x57b2074fa1313dcd!2sMalnad%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1703070000000"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                    </div>
                </AnimateOnScroll>

            </div>
        </section>
    );
}
