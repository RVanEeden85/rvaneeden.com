"use client";

import { motion } from "framer-motion";
import {
    FaMapMarkerAlt,
    FaLaptopCode,
    FaMusic,
    FaPaw,
    FaBook,
    FaStar,
} from "react-icons/fa";

const aboutItems = [
    {
        title: "Location",
        description: "Living in Michigan, USA. From South Africa",
        icon: FaMapMarkerAlt,
    },
    {
        title: "Line of Work",
        description: "Self-taught Full-Stack Developer",
        icon: FaLaptopCode,
    },
    {
        title: "Languages",
        description: "English, Afrikaans, Basic German",
        icon: FaLaptopCode,
    },
    {
        title: "Hobbies",
        description: "Coding, Music Production, Travel",
        icon: FaMusic,
    },
    {
        title: "Things I love",
        description: "All animals. Good food. Outdoor adventures.",
        icon: FaPaw,
    },
    {
        title: "Musician Side",
        description: "Vocals, Piano, Composition and Production",
        icon: FaMusic,
    },
    {
        title: "Self-Learning",
        description: "Always learning new tech & design skills",
        icon: FaBook,
    },
    {
        title: "Computer History",
        description:
            "Started playing on computers since I can remember – broke a few also",
        icon: FaLaptopCode,
    },
    {
        title: "Fun Fact",
        description:
            "I went to see the northern lights for my birthday. Bucket list item completed.",
        icon: FaStar,
    },
];

export default function AboutMeGrid() {
    return (
        <section
            id="about"
            className="max-w-[1400px] mx-auto min-h-screen  py-16 text-white flex flex-col justify-center items-center space-y-16"
        >
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8 md:space-y-16">
                    <h2 className="text-4xl md:text-7xl font-extrabold">
                        About Me
                    </h2>

                    <div className="border-l-4 border-blue-900 pl-10 text-lg">
                        <p className="leading-loose">
                            Hi, I’m Ryno van Eeden, a self-taught web developer
                            passionate about building clean, modern, and
                            user-focused web applications. I’ve learned through
                            platforms like Udemy, LinkedIn Learning, and
                            Lynda.com, and I specialize in JavaScript, React,
                            Next.js, and Node.js.
                        </p>

                        <p className="leading-loose">
                            I love turning ideas into functional, beautiful
                            websites and apps that solve real problems. As a
                            refugee from South Africa now based in the US, I
                            bring a unique perspective, resilience, and
                            determination to every project I work on.
                        </p>
                    </div>

                    {/* Travels */}
                    <p>
                        <span className="font-bold">
                            Places I've traveled to:{" "}
                        </span>{" "}
                        <span className="italic">
                            South Africa, Botswana, Mozambique, Italy, France,
                            Mallorca, Germany, Poland, Czechia, United Kingdom,
                            Norway, New Zealand, Thailand, USA
                        </span>
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-5">
                    {aboutItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="bg-gray-800 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center shadow-md hover:shadow-lg"
                            >
                                <Icon className="text-3xl mb-3 text-blue-700" />
                                <h3 className="text-lg font-semibold mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
