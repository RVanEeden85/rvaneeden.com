"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "EventBookr",
        location: "South Africa",
        description:
            "A modern event planning marketplace web app built with Next.js and Tailwind CSS.",
        image: "/images/eventbookr2.webp",
        github: "",
        demo: "https://www.eventbookr.com",
        tech: ["Next.js", "Tailwind CSS", "JavaScript", "NodeJS", "MongoDB"],
        username: "demo@eventbookr.com",
        password: "demo",
    },
    {
        title: "Rolleston Tinting",
        location: "New Zealand",
        description:
            "A Wordpress shared hosting website for a window tinting company in New Zealand. This project includes SEO and monthly digital marketing using Meta Business Suite and Facebook Ads.",
        image: "/images/rolleston-tinting.webp",
        github: "#",
        demo: "https://rollestontinting.co.nz/",
        tech: ["Wordpress", "CSS", "SEO"],
    },
    {
        title: "Elle Group Pty Ltd",
        location: "South Africa",
        description:
            "A Wordpress shared hosting website for a home building company in South Africa.",
        image: "/images/ellegroup2.webp",
        github: "#",
        demo: "http://ellegroup.co.za/",
        tech: ["Wordpress", "CSS", "SEO"],
    },
];

export default function ProjectsBlock() {
    return (
        <section
            id="projects"
            className="min-h-full py-16 text-white w-full overflow-x-visible"
        >
            <h2 className="text-5xl md:text-7xl font-bold mb-12">
                Current Projects
            </h2>

            <motion.div
                className="flex gap-5 md:gap-8 overflow-x-auto md:px-4 py-4 snap-x snap-mandatory scrollbar-none"
                drag="x"
                dragConstraints={{ left: -1000, right: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        className="max-w-[300px] md:max-w-[600px] md:min-w-[300px]  flex-shrink-0 snap-center cursor-pointer  transition-transform"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-[200px] md:h-[450px] object-contain"
                        />
                        <div className="p-4 relative">
                            <h3 className="text-2xl font-semibold mb-2">
                                {project.title}
                            </h3>

                            {project.username && project.password && (
                                <div className="">
                                    <p>
                                        <span className="font-bold">
                                            Demo Username:{" "}
                                        </span>{" "}
                                        {project.username} |{" "}
                                        <span className="font-bold">
                                            Password:
                                        </span>{" "}
                                        {project.password}
                                    </p>
                                </div>
                            )}

                            <div className="absolute top-5 right-5">
                                <p className="bg-gray-600 text-xs font-bold px-2 py-1 rounded-lg">
                                    {project.location}
                                </p>
                            </div>

                            <p className="mb-2 text-sm text-gray-200">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-gray-700 text-white px-2 py-1 rounded-lg text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-center gap-4 mt-2">
                                {/* <a
                  href={project.github}
                  target="_blank"
                  className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded"
                >
                  GitHub
                </a> */}
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    className="px-3 py-1 bg-green-800 font-semibold text-sm hover:bg-green-600 rounded-xl border border-white/20"
                                >
                                    Visit
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
