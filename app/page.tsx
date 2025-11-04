import Image from "next/image";
import HomeBlock from "./components/Home"
import AboutMeBlock from "./components/AboutMe";
import SkillsBlock from "./components/Skills";
import ProjectsBlock from "./components/Projects";
import ContactMeBlock from "./components/ContactMe";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-5 md:px-16 bg-white dark:bg-black sm:items-start">

        <HomeBlock />
        <AboutMeBlock />
        <SkillsBlock />
        <ProjectsBlock />
        <ContactMeBlock />

        
        
        


      </main>
    </div>
  );
}
