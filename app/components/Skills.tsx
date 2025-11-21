import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaWordpress,
    FaDrupal,
    FaJoomla,
    FaFacebookF,
    FaGoogle,
    FaInstagram,
    FaTiktok,
} from "react-icons/fa";
import {
    SiTypescript,
    SiNextdotjs,
    SiExpress,
    SiTailwindcss,
    SiMongodb,
    SiVercel,
    SiHeroku,
    SiGoogleanalytics,
} from "react-icons/si";

const SkillCard = ({ icon: Icon, label }: { icon?: any; label: string }) => (
    <div className="p-2 lg:p-3 xl:p-4 xxl:p-4 border border-white/20 hover:bg-blue-900 hover:text-white transition duration-500 transform hover:-translate-y-1">
        <p className="font-semibold text-left text-sm xl:text-md 2xl:text-lg">
            {label} {Icon && <Icon className="text-md inline" />}{" "}
        </p>
    </div>
);

const SkillsBlock = () => {
    return (
        <section
            id="skills"
            className="w-full min-h-screen space-y-8 md:space-y-16 bg-white/20 p-5 lg:p-20 rounded-lg"
        >
            <h2 className="font-oswald font-bold text-3xl xl:text-6xl 2xl:text-8xl">My Skills</h2>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-24">
                {/* Technical Skills */}
                <div className="w-full">
                    <h2 className="text-lg lg:text-4xl font-bold lg:mb-3 xl:mb-5 xxl:mb-8">
                        Technical
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 gap-1 text-center">
                        <SkillCard icon={FaHtml5} label="HTML" />
                        <SkillCard icon={FaCss3Alt} label="CSS" />
                        <SkillCard icon={FaJs} label="JavaScript" />
                        <SkillCard icon={SiTypescript} label="TypeScript" />
                        <SkillCard icon={FaReact} label="React" />
                        <SkillCard icon={SiNextdotjs} label="Next.js" />
                        <SkillCard icon={FaNodeJs} label="Node.js" />
                        <SkillCard icon={SiExpress} label="Express.js" />
                        <SkillCard icon={SiTailwindcss} label="Tailwind CSS" />
                        <SkillCard label="REST APIs" />
                        <SkillCard icon={SiMongodb} label="MongoDB" />
                        <SkillCard icon={SiVercel} label="Vercel" />
                        <SkillCard icon={SiHeroku} label="Heroku" />
                        <SkillCard icon={FaGitAlt} label="Git & GitHub" />
                    </div>
                </div>

                {/* CMS */}
                <div className="w-full">
                    <h2 className="text-lg lg:text-4xl font-bold lg:mb-3 xl:mb-5 xxl:mb-8">
                        Content Management Systems
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 gap-1 text-center">
                        <SkillCard icon={FaWordpress} label="WordPress" />
                        <SkillCard icon={FaDrupal} label="Drupal" />
                        <SkillCard icon={FaJoomla} label="Joomla" />
                        <SkillCard label="Wix" />
                    </div>
                </div>

                {/* Marketing & SEO Skills */}
                <div className="w-full">
                    <h2 className="text-lg lg:text-4xl font-bold lg:mb-3 xl:mb-5 xxl:mb-8">
                        SEO & Digital Marketing
                    </h2>

                    {/* SEO */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 gap-1 text-center">
                        <SkillCard label="On-Page SEO" />
                        <SkillCard label="Technical SEO" />
                        <SkillCard
                            icon={SiGoogleanalytics}
                            label="Google Analytics"
                        />
                        <SkillCard label="Google Search Console" />
                        <SkillCard label="AhRefs" />
                        <SkillCard icon={FaFacebookF} label="Facebook Ads" />
                        <SkillCard icon={FaGoogle} label="Google Ads" />
                        <SkillCard icon={FaInstagram} label="Instagram Ads" />
                        <SkillCard icon={FaTiktok} label="TikTok Ads" />
                        <SkillCard label="Google AdSense" />
                        <SkillCard label="Meta Business Suite" />
                    </div>
                </div>
                {/* Design */}
                <div className="w-full">
                    <h2 className="text-lg lg:text-4xl font-bold lg:mb-3 xl:mb-5 xxl:mb-8">
                        Design
                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 gap-1 text-center">
                        <SkillCard label="UI/UX" />
                        <SkillCard label="Affinity Suite" />
                        <SkillCard label="Canva" />
                        <SkillCard label="Wireframing" />
                        <SkillCard label="Responsive Layout" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsBlock;
