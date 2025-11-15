
// Import your AnimateOnScroll component
import { AnimateOnScroll } from "../components/AnimateOnScroll";
import WorkCulture from "./WorkCulture";

// 1. Define a type for the infrastructure items
interface InfrastructureItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imagePosition: 'left' | 'right'; // To control the alternating layout
}

// 2. Create the data for your page
const infrastructureData: InfrastructureItem[] = [
    {
        id: "digital-den",
        title: "Digital Den",
        description: "Digital Den Lab | Innovating the Future. A cutting-edge hub for digital exploration, creativity, and technological advancements.",
        imageUrl: "https://placehold.co/600x400/333333/FFFFFF?text=Digital+Den", // Replace with your image
        imagePosition: 'left',
    },
    {
        id: "colloquium-hall",
        title: "Colloquium Hall",
        description: "A state-of-the-art hall designed for seminars, workshops, and large-scale presentations. Equipped with modern audio-visual technology.",
        imageUrl: "https://placehold.co/600x400/444444/FFFFFF?text=Colloquium+Hall", // Replace with your image
        imagePosition: 'right',
    },
    {
        id: "information-desk",
        title: "Information Desk",
        description: "The central hub for all inquiries, support, and guidance. Our team is here to assist you with resources and information.",
        imageUrl: "https://placehold.co/600x400/555555/FFFFFF?text=Info+Desk", // Replace with your image
        imagePosition: 'left',
    },
    {
        id: "board-room",
        title: "Board Room",
        description: "A professional and private space for executive meetings, strategic planning, and collaborative decision-making.",
        imageUrl: "https://placehold.co/600x400/666666/FFFFFF?text=Board+Room", // Replace with your image
        imagePosition: 'right',
    },
];


export default function InfrastructurePage() {
    return (
        <>
        <WorkCulture/>
            <section className="w-full bg-black text-slate-200 py-16 md:py-24 font-poppins">
                <div className="container mx-auto px-4 space-y-20 md:space-y-28">

                    {/* Page Title */}
                    <AnimateOnScroll>
                        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
                            Our Infrastructure
                        </h1>
                    </AnimateOnScroll>

                    {/* 3. Map over the data and render each section */}
                    {infrastructureData.map((item, index) => (
                        <AnimateOnScroll key={item.id} delay={index * 0.1}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

                                {/* Image Column */}
                                <div
                                    className={`w-full ${item.imagePosition === 'right' ? 'md:order-2' : 'md:order-1'
                                        }`}
                                >
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="rounded-xl w-full h-full max-h-[400px] object-cover shadow-lg shadow-blue-900/20"
                                    />
                                </div>

                                {/* Text Column */}
                                <div
                                    className={`flex flex-col justify-center ${item.imagePosition === 'right' ? 'md:order-1' : 'md:order-2'
                                        }`}
                                >
                                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                                        {item.title}
                                    </h2>
                                    <p className="mt-4 text-lg text-slate-300">
                                        {item.description}
                                    </p>
                                    {/* Optional Button */}
                                    {/* <Button className="mt-6 self-start">Learn More</Button> */}
                                </div>

                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </section>
        </>
    );
}