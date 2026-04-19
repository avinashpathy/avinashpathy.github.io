import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden noise">
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg" />
      {/* Glow blobs */}
      <div className="absolute top-1/4 -left-32 w-[480px] h-[480px] rounded-full bg-primary/30 animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-[520px] h-[520px] rounded-full bg-secondary/30 animate-pulse-glow [animation-delay:2s]" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/20 animate-pulse-glow [animation-delay:1s]" />

      <div className="container relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              Open to new opportunities
            </span>
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-6">
            Hey, I'm
            <br />
            <span className="text-gradient">Avinash.</span>
          </h1>

          <p className="font-mono text-sm md:text-base text-muted-foreground mb-6 tracking-wide">
            <span className="text-primary">{">"}</span> Backend · Agentic AI · IAM · Full-Stack · Cloud
          </p>

          <p className="text-lg md:text-2xl text-foreground/80 max-w-2xl mb-12 leading-relaxed">
            Crafting the quiet machinery behind modern software — from{" "}
            <span className="text-foreground font-semibold">enterprise identity</span> to{" "}
            <span className="text-foreground font-semibold">cloud-native backends</span>, with a
            growing curiosity for{" "}
            <span className="text-primary font-semibold">MCP</span>,{" "}
            <span className="text-secondary font-semibold">RAG</span>, and{" "}
            <span className="text-accent font-semibold">agentic AI</span>. 3.5+ years of turning
            messy problems into systems that just work.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                See my work <ArrowDown className="ml-1" />
              </a>
            </Button>
            <Button variant="outlineGlow" size="xl" asChild>
              <a href="/Avinash_Pathy_Resume.pdf" download>
                <Download className="mr-1" /> Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/avinashpathy"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/avinashpathy"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:avinashpathy06@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <span className="font-mono text-xs text-muted-foreground ml-2">
              Bengaluru, IN
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
