import { motion } from "framer-motion";
import { Brain, Network, Database, Sparkles } from "lucide-react";

const cards = [
  {
    icon: Network,
    tag: "MCP",
    title: "Model Context Protocol",
    desc: "Building MCP servers as composable tool layers — exposing typed actions, resources, and prompts to LLM clients with secure auth and schema validation.",
    accent: "primary",
    items: ["Tool servers", "Resource hosts", "Streamable HTTP", "Schema-first design"],
  },
  {
    icon: Database,
    tag: "RAG",
    title: "Retrieval-Augmented Generation",
    desc: "Designing pipelines that ground LLM responses in real data — vector search, hybrid retrieval, chunking strategies, and re-ranking for accuracy.",
    accent: "secondary",
    items: ["Vector DBs", "Hybrid search", "Re-ranking", "Eval pipelines"],
  },
  {
    icon: Brain,
    tag: "Agentic",
    title: "Agentic AI Systems",
    desc: "Architecting autonomous agents with planning, memory, and tool-use — orchestrating multi-step workflows that act on real systems with guardrails.",
    accent: "accent",
    items: ["Tool-use loops", "Planning", "Memory", "Multi-agent"],
  },
  {
    icon: Sparkles,
    tag: "Infra",
    title: "AI-Native Backends",
    desc: "Serverless backends that pair traditional APIs with LLM gateways, streaming responses, structured outputs, and observability for production AI.",
    accent: "primary",
    items: ["LLM gateways", "Streaming", "Structured outputs", "Tracing"],
  },
];

const accentMap: Record<string, string> = {
  primary: "from-primary/20 to-transparent border-primary/30 text-primary shadow-glow-primary",
  secondary: "from-secondary/20 to-transparent border-secondary/30 text-secondary shadow-glow-secondary",
  accent: "from-accent/20 to-transparent border-accent/30 text-accent shadow-glow-accent",
};

const AIFocus = () => {
  return (
    <section id="ai" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="container relative">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs tracking-widest text-primary uppercase mb-4">
            [03] AI Focus
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">
            The <span className="text-gradient">frontier</span> I'm building toward.
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Beyond traditional backend work, I'm investing deeply in the new AI stack — the
            protocols, retrieval systems, and agent architectures that will define the next
            decade of software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/60 hover:border-primary/40 transition-all duration-500 overflow-hidden">
                  <div
                    className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${accentMap[c.accent].split(" ").slice(0, 2).join(" ")} blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700`}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-xl border bg-gradient-to-br ${accentMap[c.accent]}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                        {c.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                      {c.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed mb-6">{c.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {c.items.map((it) => (
                        <span
                          key={it}
                          className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-border/60 bg-background/60 text-muted-foreground"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIFocus;
