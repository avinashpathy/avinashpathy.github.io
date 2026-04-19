import { motion } from "framer-motion";

const experience = [
  {
    company: "Aquera Labs",
    role: "Member of Technical Staff 2",
    period: "Dec 2025 — Present",
    location: "Bengaluru, IN",
    points: [
      "Designed enterprise integrations between HR, CRM, ITSM, IdP, and AD systems — automating identity provisioning across 10+ platforms and 10,000+ user identities.",
      "Built SCIM-based connectors and JML (Joiner–Mover–Leaver) lifecycle workflows, reducing manual identity management effort by 70%.",
      "Developed integration workflows handling auth, transformation, retries, and logging — improving sync reliability by 40%.",
    ],
    stack: ["Node.js", "AWS", "SCIM 2.0", "IAM", "Active Directory", "REST APIs"],
  },
  {
    company: "Koch Business Solutions",
    role: "Software Developer",
    period: "Oct 2024 — Dec 2025",
    location: "Bengaluru, IN",
    points: [
      "Built a centralized contact management dashboard handling 100,000+ contacts with real-time sync.",
      "Designed advanced search with autocomplete and custom filters — 40% reduction in query response time.",
      "Architected an event-driven, secure, RBAC-based backend with 99.9% uptime.",
    ],
    stack: ["AWS Lambda", "DynamoDB", "API Gateway", "OpenSearch", "TypeScript", "Serverless"],
  },
  {
    company: "Koch Business Solutions",
    role: "Associate Software Developer",
    period: "Sep 2022 — Sep 2024",
    location: "Bengaluru, IN",
    points: [
      "Spearheaded a fertilizer logistics platform serving 10,000+ agricultural customers across web and mobile.",
      "Implemented multi-criteria filtering — 100% improvement in retrieval speeds for complex logistics queries.",
      "Integrated push notifications driving a 40% increase in user engagement.",
    ],
    stack: ["AWS SNS", "OpenSearch", "Node.js", "TypeScript", "Serverless"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-32">
      <div className="container">
        <div className="font-mono text-xs tracking-widest text-primary uppercase mb-4">
          [02] Experience
        </div>
        <h2 className="font-display font-bold text-4xl md:text-6xl mb-16">
          Where I've <span className="text-gradient">shipped.</span>
        </h2>

        <div className="relative">
          {/* timeline rail */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent" />

          <div className="space-y-16">
            {experience.map((exp, i) => (
              <motion.article
                key={exp.role + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative md:grid md:grid-cols-2 md:gap-16"
              >
                {/* node */}
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-glow-primary" />

                <div className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}>
                  <div className="pl-12 md:pl-0">
                    <div className="font-mono text-xs text-primary mb-2">{exp.period}</div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold">{exp.role}</h3>
                    <div className="text-foreground/70 mb-1">{exp.company}</div>
                    <div className="text-xs font-mono text-muted-foreground">{exp.location}</div>
                  </div>
                </div>

                <div className={i % 2 === 0 ? "md:col-start-2 md:pl-12 mt-6 md:mt-0" : "md:row-start-1 md:pr-12 md:text-right mt-6 md:mt-0"}>
                  <div className="pl-12 md:pl-0">
                    <ul className="space-y-3 text-foreground/75 leading-relaxed">
                      {exp.points.map((p) => (
                        <li key={p} className="text-sm md:text-base">
                          <span className="text-primary mr-2">▸</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className={`flex flex-wrap gap-2 mt-4 ${i % 2 === 0 ? "" : "md:justify-end"}`}>
                      {exp.stack.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-border/60 bg-card/40 text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
