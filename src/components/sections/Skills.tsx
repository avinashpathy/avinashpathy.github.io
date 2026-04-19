import { motion } from "framer-motion";

const groups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "C++", "Python"],
  },
  {
    title: "Cloud & AWS",
    items: [
      "Lambda", "DynamoDB", "API Gateway", "EventBridge", "SQS", "OpenSearch",
      "Cognito", "S3", "CloudFront", "CDK", "CloudFormation", "VPC",
    ],
  },
  {
    title: "Identity & Integrations",
    items: ["SCIM 2.0", "IAM", "Active Directory", "Microsoft Entra ID", "Microsoft 365", "JML Lifecycle", "ADP HRIS"],
  },
  {
    title: "AI / Agentic",
    items: ["MCP", "RAG", "LLM Gateways", "Vector Search", "Agent Frameworks", "Embeddings"],
  },
  {
    title: "Tools & Frameworks",
    items: ["Node.js", "Express", "FastAPI", "Serverless", "Docker", "Redis", "Datadog", "Jest", "Git", "Cursor"],
  },
  {
    title: "Databases",
    items: ["DynamoDB", "MySQL", "Redis", "OpenSearch"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-32">
      <div className="container">
        <div className="font-mono text-xs tracking-widest text-primary uppercase mb-4">
          [04] Skills
        </div>
        <h2 className="font-display font-bold text-4xl md:text-6xl mb-16">
          The <span className="text-gradient-accent">stack</span>.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/30 transition-colors"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
                {g.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="px-3 py-1.5 rounded-lg bg-background/60 border border-border/60 text-sm text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
