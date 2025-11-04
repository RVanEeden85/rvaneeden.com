"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const HomeBlock = () => {
    const { scrollY } = useScroll();
    const x = useTransform(scrollY, [0, 600], [0, 500]);
    const y = useTransform(scrollY, [0, 750], [0, 550]);
    const opacity = useTransform(scrollY, [0, 600], [1, 0]);
    return (
        <section
            id="home"
            className="relative min-h-[80vh] w-full mx-auto overflow-hidden"
        >
            <motion.div style={{ y }}>
                <h2 className="text-5xl md:text-9xl font-extrabold uppercase text-white/10">
                    Full Stack Developer
                </h2>
            </motion.div>

            <div className="max-w-6xl mx-auto">
                <motion.div
                    style={{ x, opacity }}
                    className="fixed w-full md:w-[1000px] flex justify-center pointer-events-none z-0"
                >
                    <img
                        src="/images/ryno.webp"
                        alt="Ryno software developer and website designer"
                    />
                </motion.div>

                <div className="absolute bottom-10 md:bottom-80">
                    <div className="">
                        <p className="text-4xl md:text-9xl font-bold mb-4 text-blue-900">
                            Hi
                        </p>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        I'm <span className="text-primary">Ryno van Eeden</span>
                    </h1>
                    <p className="text-xl font-bold md:text-xl text-gray-300 max-w-2xl">
                        A self-taught web developer passionate about building
                        clean, modern, and user-focused web applications
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HomeBlock;
