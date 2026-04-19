import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import AIFocus from "@/components/sections/AIFocus";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <AIFocus />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;
