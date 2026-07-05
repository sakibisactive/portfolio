"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Database, Wrench, Sparkles, Network, Terminal } from "lucide-react";

const skillCategories = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["Python", "SQL", "C / C++", "JavaScript / TypeScript", "PHP", "HTML/CSS"],
    badgeColor: "emerald",
  },
  {
    category: "ML & Data Science",
    icon: Brain,
    skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Data Preprocessing", "Statistical Modeling"],
    badgeColor: "emerald",
  },
  {
    category: "Deep Learning Architectures",
    icon: Network,
    skills: [
      "TensorFlow / Keras",
      "CNN",
      "RNN",
      "LSTM",
      "GRU",
      "Transformers (ViT)",
      "DenseNet121",
      "MobileNetV3",
      "ResNet50",
    ],
    badgeColor: "amber",
  },
  {
    category: "Databases & Storage",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Relational Schema Design", "NoSQL Data Modeling"],
    badgeColor: "emerald",
  },
  {
    category: "Tools & Frameworks",
    icon: Wrench,
    skills: ["Git / GitHub", "Jupyter Notebook", "VS Code", "Overleaf / LaTeX", "Arduino IDE", "ESP8266"],
    badgeColor: "emerald",
  },
  {
    category: "Core Technical Interests",
    icon: Sparkles,
    skills: ["Machine Learning", "Natural Language Processing", "Computer Vision", "IoT Systems", "Swarm AI / Bio-Inspired Optimization"],
    badgeColor: "amber",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative bg-[#090b10] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Proven technologies & domain specializations.
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl font-sans">
            No superficial percentage bars — just concrete frameworks, architectures, and tools used across production code and research experiments.
          </p>
        </motion.div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((item, idx) => {
            const IconComponent = item.icon;
            const isAmber = item.badgeColor === "amber";

            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card p-6 rounded-xl relative group hover:border-emerald-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${isAmber ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-display font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {item.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs font-mono px-2.5 py-1 rounded-md border transition-all ${
                          isAmber
                            ? "bg-amber-500/5 text-amber-200/90 border-amber-500/20 hover:bg-amber-500/15"
                            : "bg-white/[0.03] text-slate-300 border-white/10 hover:border-emerald-500/30 hover:text-emerald-300"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
