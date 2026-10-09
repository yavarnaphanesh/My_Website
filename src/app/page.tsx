import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About, Education, Experience, Projects, Skills } from "@/components/Sections";
import { Contact } from "@/components/Contact";
import { resume } from "@/data/resume";

export default function Home() {
  return (
    <>
      <Nav name={resume.name} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}
