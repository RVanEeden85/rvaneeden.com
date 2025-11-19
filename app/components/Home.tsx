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
            className="relative min-h-[90vh] w-full mx-auto overflow-hidden"
        >
            <motion.div style={{ y }}>
                <h2 className="absolute text-6xl font-oswald font-bold xl:text-[250px] 2xl:text-[350px] uppercase text-white/20 text-center">
                    Full Stack Developer
                </h2>
            </motion.div>

            <div className="flex justify-center">
                <motion.div
                    style={{ x, opacity }}
                    className="fixed mx-auto flex justify-center items-center pointer-events-none z-0"
                >
                    <img
                        src="/images/ryno.webp"
                        alt="Full stack developer in Next.js React and Node.JS - Ryno van Eeden"
                        className="w-full xl:max-w-[700px] 2xl:max-w-[1000px] "
                    />
                </motion.div>

                <div className="absolute bottom-20 xl:left-10 xl:bottom-10">


                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="font-oswald font-bold text-2xl xl:text-7xl 2xl:text-7xl">Hi – I'm Ryno van Eeden</span>
                    </h1>
                    <p className="text-lg xl:text-2xl 2xl:text-4xl text-gray-200 max-w-5xl xl:max-w-3xl 2xl:max-w-5xl">
                        A self-taught web developer passionate about building
                        clean, modern, and user-focused web applications
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HomeBlock;
