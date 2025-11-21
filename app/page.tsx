import HomeBlock from "./components/Home"
import AboutMeBlock from "./components/AboutMe";
import SkillsBlock from "./components/Skills";
import ProjectsBlock from "./components/Projects";
import ContactMeBlock from "./components/ContactMe";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-5 md:px-16 sm:items-start">

        <HomeBlock />
        <AboutMeBlock />
        <SkillsBlock />
        <ProjectsBlock />
        <ContactMeBlock />

        
        
        


      </main>
    </div>
  );
}
