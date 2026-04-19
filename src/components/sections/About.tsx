import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-12 gap-12 items-start"
        >
          <div className="md:col-span-4">
            <div className="font-mono text-xs tracking-widest text-primary uppercase mb-4">
              [01] About
            </div>
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1]">
              Engineer.
              <br />
              <span className="text-gradient-accent">Builder.</span>
              <br />
              Tinkerer.
            </h2>
          </div>

          <div className="md:col-span-8 space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              I'm a software engineer with{" "}
              <span className="text-primary font-semibold">3+ years</span> of experience
              architecting serverless backends, identity platforms, and large-scale enterprise
              integrations on AWS.
            </p>
            <p>
              At <span className="text-foreground font-semibold">Aquera Labs</span>, I design
              SCIM-based connectors and JML lifecycle workflows powering 10,000+ identities
              across enterprise systems. Previously at{" "}
              <span className="text-foreground font-semibold">Koch</span>, I built dashboards
              handling 100K+ contacts and logistics platforms serving 10K+ agricultural users.
            </p>
            <p>
              Outside of shipping production systems, I'm deeply interested in{" "}
              <span className="text-primary">agentic AI</span>, the{" "}
              <span className="text-secondary">Model Context Protocol</span>, and building
              retrieval-augmented systems that let LLMs reason over real, grounded data.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              {[
                { v: "3+", l: "Years" },
                { v: "10K+", l: "Identities Managed" },
                { v: "99.9%", l: "Uptime" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
                    {s.v}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
