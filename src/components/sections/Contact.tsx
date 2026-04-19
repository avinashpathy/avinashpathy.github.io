import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="font-mono text-xs tracking-widest text-primary uppercase mb-4">
            [06] Contact
          </div>
          <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.95]">
            Let's build
            <br />
            <span className="text-gradient">something real.</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-12 max-w-xl mx-auto">
            Whether it's a scalable backend, an identity platform, or an agentic AI
            experiment — I'd love to hear about it.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:avinashpathy06@gmail.com">
                <Mail className="mr-1" /> Get in touch
              </a>
            </Button>
            <Button variant="outlineGlow" size="xl" asChild>
              <a href="/Avinash_Pathy_Resume.pdf" download>
                Download resume
              </a>
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-12 border-t border-border/50">
            <a
              href="mailto:avinashpathy06@gmail.com"
              className="flex flex-col items-center gap-2 group"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Email
              </span>
              <span className="text-sm group-hover:text-primary transition-colors">
                avinashpathy06@gmail.com
              </span>
            </a>
            <a href="tel:+918480464174" className="flex flex-col items-center gap-2 group">
              <Phone className="w-5 h-5 text-secondary" />
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Phone
              </span>
              <span className="text-sm group-hover:text-secondary transition-colors">
                +91 84804 64174
              </span>
            </a>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Location
              </span>
              <span className="text-sm">Bengaluru, India</span>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-12">
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
          </div>
        </motion.div>

        <footer className="mt-24 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
          <span>© {new Date().getFullYear()} Avinash Pathy</span>
          <span>Designed & built with care.</span>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
