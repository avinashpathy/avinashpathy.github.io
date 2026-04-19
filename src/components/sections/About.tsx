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
              A bit
              <br />
              <span className="text-gradient-accent">about</span>
              <br />
              me.
            </h2>
          </div>

          <div className="md:col-span-8 space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              I'm a software engineer with close to{" "}
              <span className="text-primary font-semibold">3.5 years</span> of experience building
              scalable, serverless applications with{" "}
              <span className="text-foreground font-semibold">AWS, Node.js, TypeScript, and React</span>.
              I enjoy designing cloud-native systems, securing them with solid auth, and squeezing
              performance out of search and data layers using OpenSearch — alongside the usual
              suspects like Lambda, DynamoDB, API Gateway, SQS, SNS, EventBridge, and Step Functions.
            </p>
            <p>
              At <span className="text-foreground font-semibold">Aquera Labs</span>, I build{" "}
              <span className="text-foreground font-semibold">SCIM-based connectors</span> and
              automated <span className="text-foreground font-semibold">JML (Joiner–Mover–Leaver)</span>{" "}
              workflows that provision, update, and deprovision identities across enterprise
              systems — making sync more reliable and saving teams from a ton of manual work.
              Before that at <span className="text-foreground font-semibold">Koch</span>, I shipped
              dashboards handling 100K+ contacts and a logistics platform serving 10K+ users in
              agriculture.
            </p>
            <p>
              I care a lot about <span className="text-foreground">OOP, data structures, and
              clean architecture</span> — both high-level and low-level design. Day to day, I'm
              usually deep in <span className="text-foreground font-semibold">React, React Native,
              Node, Express, FastAPI, TypeScript, Docker</span>, and the Serverless Framework,
              chasing resilient and cost-efficient solutions.
            </p>
            <p>
              Outside of work, I've been{" "}
              <span className="text-primary">tinkering with AI</span> — playing with the{" "}
              <span className="text-secondary">Model Context Protocol</span>, building small RAG
              prototypes, and pushing agentic workflows to see what breaks. Early days, but
              it's the corner of tech I'm most curious about right now.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              {[
                { v: "3.5+", l: "Years" },
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
