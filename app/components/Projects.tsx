"use client";


const projects = [
    {
        title: "EventBookr",
        location: "South Africa",
        description:
            "A modern event planning marketplace web app built with Next.js frontend and Node.js backend. Design and layout on Tailwind CSS and databse on MongoDB.",
        image: "/images/eventbookr2.webp",
        demo: "https://www.eventbookr.com",
        tech: ["Next.js", "Tailwind CSS", "JavaScript", "NodeJS", "MongoDB", "SEO", "Facebook Ads", "Google Search Console", "Postmark API"],
        functions: ["User Accounts", "Authentication", "Online Payments", "Contact Forms", "Quote Request Forms", "User Generated Content", "API", "Responsive Layout" ],
        username: "demo@eventbookr.com",
        password: "demo",
        type: "Web App"
    },
    {
        title: "Rolleston Tinting",
        location: "New Zealand",
        description:
            "A Wordpress shared hosting website for a window tinting company in New Zealand. This project includes SEO and monthly digital marketing using Meta Business Suite and Facebook Ads.",
        image: "/images/rolleston-tinting.webp",
        demo: "https://rollestontinting.co.nz/",
        tech: ["Wordpress", "CSS", "SEO", "Facebook Ads", "Google Search Console"],
        functions: ["Contact Form", "Quote Request Form", "Responsive Layout"],
        type: "Marketing Website"
    },
    {
        title: "Development Portfolio",
        location: "United States",
        description:
            "A full-stack developer portfolio project built on Next.JS, Motion.JS, Tailwind CSS and Postmark.",
        image: "/images/ryno-portfolio.webp",
        github: "https://github.com/RVanEeden85/rvaneeden.com",
        demo: "https://www.rvaneeden.com",
        tech: ["Next.js", "Tailwind CSS", "Javascript", "Postmark API", "SEO", "Motion.js"],
        functions: ["Contact Form", "Responsive Layout"],
        type: "Marketing Website"
    },
    {
        title: "Elle Group Pty Ltd",
        location: "South Africa",
        description:
            "A Wordpress shared hosting website for a home building company in South Africa.",
        image: "/images/elle-group.webp",
        demo: "http://ellegroup.co.za/",
        tech: ["Wordpress", "CSS", "SEO"],
        type: "Marketing Website"
    },
];

export default function ProjectsBlock() {
    return (
        <section
            id="projects"
            className="min-h-full py-16 text-white w-full overflow-x-visible"
        >
            <h2 className="font-oswald font-bold text-3xl xl:text-6xl 2xl:text-8xl">
                Current Projects
            </h2>

            <div
                className="flex gap-5 md:gap-8 overflow-x-auto md:px-4 py-4 snap-x snap-mandatory scrollbar-none">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="max-w-[300px] md:max-w-[600px] md:min-w-[300px] flex-shrink-0 snap-center cursor-pointer transition-transform relative"
                    >

                        <div className="">
                            <span className="font-bold py-2 shadow-md px-4 rounded-full text-lg bg-blue-700 absolute top-5 right-5 border border-white/20">{project.type}</span>
                        </div>

                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-[200px] md:h-[450px] object-contain"
                        />
                        <div className="relative px-5">
                            <h3 className="text-2xl font-semibold mb-2">
                                {project.title} | <span className="font-thin">{project.location}</span>
                            </h3>

                            

                            

                            <p className="text-sm text-gray-200">
                                {project.description}
                            </p>
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

                            {/* Project Functions */}
                            <div className="flex flex-wrap gap-2 my-2">
                                {project.functions?.map((functions, idx) => (
                                    <span
                                    key={idx}
                                    className="text-sm text-gray-200 bg-gray-700">
                                        {functions}
                                    </span>
                                ))}
                            </div>

                            {/* Project Tech */}
                            <div className="flex flex-wrap gap-2 my-2">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="text-sm text-blue-400"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            

                            <div className="gap-4 mt-2 text-gray-400 flex gap-4">

                                {project.github && (
                                    <a
                                    href={project.github}
                                    target="_blank"
                                    className="underline"
                                >
                                    GitHub
                                </a>
                                )}

                                
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    className="underline"
                                >
                                    Visit
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
