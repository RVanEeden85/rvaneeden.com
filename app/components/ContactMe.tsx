"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { p } from "framer-motion/client";

export default function ContactMeBlock() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        taxNumber: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json();

        if (data.success) {
            setStatus("Message sent successfully!");
            setForm({ name: "", email: "", message: "", taxNumber: "" });
        } else {
            setStatus(data.message || "Failed to send message.");
        }

        setTimeout(() => setStatus(""), 5000);
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col justify-center py-16 w-full"
        >
            <h2 className="text-5xl  md:text-7xl font-bold mb-6">
                Start A Project With Me
            </h2>
            <p className="text-gray-300 mb-12 max-w-xl">
                I'm always open to new opportunities or collaborations. Feel
                free to reach out using the form below or via my social links.
            </p>

            <div className="grid md:grid-cols-2 gap-20 md:gap-5 items-center justify-items-center">
                {/* Social Links */}

                <div className="flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="grid grid-cols-2 gap-6 text-7xl w-[200px] h-[200px]"
                    >
                        <a
                            href="https://www.linkedin.com/in/ryno-van-eeden-850165135"
                            target="_blank"
                        >
                            <FaLinkedin className="hover:text-blue-500 transition" />
                        </a>
                        <a
                            href="https://github.com/RVanEeden85"
                            target="_blank"
                        >
                            <FaGithub className="hover:text-gray-400 transition" />
                        </a>
                        <a
                            href="https://www.facebook.com/rvaneedensa/"
                            target="_blank"
                        >
                            <FaFacebook className="hover:text-blue-400 transition" />
                        </a>
                        <a href="mailto:rvaneeden@me.com">
                            <FaEnvelope className="hover:text-red-500 transition" />
                        </a>
                    </motion.div>

                    {/* Whats App Link */}
                    <a
                        href="https://wa.me/13132135404"
                        target="_blank"
                        className="flex gap-2 items-center justify-center border border-white/20 text-green-200 py-3 px-5 rounded-full bg-gradient-to-r from-green-900 to-green-700 hover:scale-105 transition duration-500"
                    >
                        <p className="font-bold">Reach Me On Whatsapp</p>{" "}
                        <span className="text-4xl text-white">
                            <FaWhatsapp />
                        </span>
                    </a>
                </div>

                {/* Contact Form */}

                <div className="w-full max-w-lg flex flex-col gap-4">
                    <h3 className="font-bold text-2xl">Send me a mail</h3>

                    {status && (
                        <p className="text-center text-sm mt-2">{status}</p>
                    )}

                    <motion.form
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-lg flex flex-col gap-4"
                        onSubmit={handleSubmit}
                    >
                        {/* Honeypot field */}
                        <div className="hidden">
                            <input
                                type="text"
                                name="taxNumber"
                                onChange={handleChange}
                                value={form.taxNumber}
                            />
                        </div>

                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={form.name}
                            required
                            placeholder="Your Name"
                            className="border-b-1 border-white/30 px-3 py-5 focus:outline-none focus:ring-none"
                        />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="Your Email"
                            className="border-b-1 border-white/30 px-3 py-5 focus:outline-none focus:ring-none"
                        />
                        <textarea
                            placeholder="Your Message"
                            name="message"
                            onChange={handleChange}
                            value={form.message}
                            required
                            rows={5}
                            className="border-b-1 border-white/30 px-3 py-5 focus:outline-none focus:ring-none"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-900 hover:bg-blue-600 rounded-lg font-semibold transition"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
