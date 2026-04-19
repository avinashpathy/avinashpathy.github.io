import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Distributed Feature Flag & Configuration Service",
    blurb:
      "A scalable serverless backend for gradual rollouts, rule-based targeting, and instant feature toggling across applications.",
    stack: ["Node.js", "AWS Lambda", "API Gateway", "DynamoDB", "Redis"],
    tag: "Infra · Serverless",
  },
  {
    title: "Identity Lifecycle Automation Platform",
    blurb:
      "SCIM-based connectors automating Joiner–Mover–Leaver workflows across HRIS, IdP, and AD — managing 10,000+ identities securely.",
    stack: ["SCIM 2.0", "Node.js", "AWS", "Active Directory", "ADP Workforce Now"],
    tag: "Identity · Enterprise",
  },
  {
    title: "Enterprise Contact Management Dashboard",
    blurb:
      "Modular UI and event-driven backend handling 100K+ contacts with autocomplete search, RBAC, and 99.9% uptime.",
    stack: ["AWS Lambda", "DynamoDB", "OpenSearch", "Cognito", "TypeScript"],
    tag: "Backend · Search",
  },
  {
    title: "Fertilizer Logistics Platform",
    blurb:
      "End-to-end logistics platform for 10K+ agricultural users — personalized dashboards, real-time shipment tracking, and push alerts.",
    stack: ["AWS SNS", "OpenSearch", "Serverless", "TypeScript"],
    tag: "Full-stack · Mobile",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-32">
      <div className="container">
        <div className="font-mono text-xs tracking-widest text-primary uppercase mb-4">
          [05] Selected Work
        </div>
        <h2 className="font-display font-bold text-4xl md:text-6xl mb-16">
          Things I've <span className="text-gradient">built.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative p-8 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary px-2 py-1 rounded border border-primary/30 bg-primary/5">
                    {p.tag}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  {p.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-6">{p.blurb}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-border/60 bg-background/60 text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
