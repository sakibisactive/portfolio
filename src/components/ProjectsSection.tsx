"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ExternalLink, Sparkles, Layers, ArrowUpRight, X, CheckCircle2, Cpu } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

interface Project {
  id: string;
  title: string;
  year: string;
  category: "Deep Learning" | "NLP" | "IoT / Embedded" | "Full-Stack Web";
  tech: string[];
  description: string;
  statBadge: string;
  gridSpan: string; // Tailwind grid span class for Bento layout
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  architectureDetails: string;
}

const projects: Project[] = [
  {
    id: "connecthub",
    title: "ConnectHub — Real-Time Messaging Platform",
    year: "2026",
    category: "Full-Stack Web",
    tech: ["MERN Stack", "MongoDB Atlas", "Express.js", "React.js", "Node.js", "Socket.IO", "Redis (Upstash)", "JWT Auth", "Tailwind CSS"],
    description: "Production-grade real-time messaging application engineered with MERN stack, Socket.IO WebSocket protocol for bidirectional chat, and Upstash Redis in-memory caching.",
    statBadge: "LIVE DEPLOYED • SOCKET.IO + REDIS",
    gridSpan: "lg:col-span-12",
    githubUrl: "https://github.com/sakibisactive",
    liveUrl: "https://connecthubinbd.vercel.app/",
    highlights: [
      "Deployed live in production at connecthubinbd.vercel.app.",
      "Engineered low-latency bidirectional messaging pipeline powered by Socket.IO WebSockets.",
      "Integrated Upstash Redis in-memory cache for instant user online/offline presence tracking and dynamic message indexing.",
      "Protected with JWT authentication, encrypted WebSocket rooms, and MongoDB Atlas indexing.",
    ],
    architectureDetails: "Decoupled MERN architecture with Socket.IO room subscriptions, Upstash Redis Pub/Sub for cross-instance state sync, and optimized MongoDB aggregation pipelines.",
  },
  {
    id: "doctor-handwriting",
    title: "Doctor Handwriting Recognition",
    year: "2026",
    category: "Deep Learning",
    tech: ["Python", "TensorFlow/Keras", "DenseNet121", "MobileNetV3", "ResNet50", "ViT-B16", "CNN-Transformer"],
    description: "Benchmarked five deep learning & vision transformer architectures for physician prescription handwriting classification; built full pipeline from image preprocessing to cross-model evaluation.",
    statBadge: "BENCHMARKED 5 DL ARCHITECTURES",
    gridSpan: "lg:col-span-8",
    githubUrl: "https://github.com/sakibisactive",
    highlights: [
      "Built end-to-end data cleaning, segmentation, and augmentation pipeline for noisy handwritten prescription scans.",
      "Evaluated Vision Transformers (ViT-B16) vs classic CNN backbones (DenseNet121, ResNet50, MobileNetV3).",
      "Achieved robust cross-validation accuracy on highly complex illegible medical scripts.",
    ],
    architectureDetails: "Integrated CNN feature extractors with Transformer self-attention blocks to capture both local stroke contours and global character context across medical prescription documents.",
  },
  {
    id: "news-classification",
    title: "News Headline Text Classification",
    year: "2025",
    category: "NLP",
    tech: ["Python", "Scikit-learn", "TensorFlow", "SimpleRNN", "LSTM", "GRU", "Logistic Regression", "DNN"],
    description: "Evaluated 24 configurations across preprocessing, TF-IDF / embeddings representation, and sequence model choices to identify optimal news categorization performance.",
    statBadge: "F1 = 0.9276 (Bi-GRU)",
    gridSpan: "lg:col-span-4",
    githubUrl: "https://github.com/sakibisactive",
    highlights: [
      "Systematic grid search across 24 distinct NLP pipelines.",
      "Benchmarked classical baselines (Logistic Regression) against deep recurrent nets (SimpleRNN, LSTM, GRU).",
      "Highest macro F1 score achieved by Bidirectional GRU with pre-trained embeddings.",
    ],
    architectureDetails: "Bidirectional GRU model trained with sub-word tokenization and custom learning rate schedules to eliminate out-of-vocabulary representation gaps.",
  },
  {
    id: "aqua-iot",
    title: "A.Q.U.A.: Aquarium Automation System",
    year: "2025",
    category: "IoT / Embedded",
    tech: ["Arduino Uno R3", "ESP8266 WiFi", "IoT Sensors", "Embedded C", "Blynk App"],
    description: "IoT-enabled aquarium environment automation with scheduled feeding mechanisms, real-time water quality sensors, and remote WiFi monitoring control.",
    statBadge: "24/7 AUTOMATED IOT TELEMETRY",
    gridSpan: "lg:col-span-4",
    githubUrl: "https://github.com/sakibisactive",
    highlights: [
      "Automated servo-based food dispenser with customizable timer schedule.",
      "Real-time temperature, pH, and water level telemetry streamed over MQTT/WiFi.",
      "Failsafe emergency alerts triggered during sensor threshold anomalies.",
    ],
    architectureDetails: "Hardware interrupt-driven C program on Arduino Uno offloading web socket telemetry to ESP8266 module to conserve MCU RAM.",
  },
  {
    id: "partner-matching",
    title: "Partner Matching Web Platform",
    year: "2024",
    category: "Full-Stack Web",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Blade"],
    description: "Full-stack compatibility-based matching platform featuring comprehensive user profiling, relational query optimizations, and score algorithms.",
    statBadge: "FULL-STACK RELATIONAL DB",
    gridSpan: "lg:col-span-4",
    githubUrl: "https://github.com/sakibisactive",
    highlights: [
      "Designed normalized relational database schema with complex multi-table indexing.",
      "Implemented score-based compatibility algorithm matching interest vector similarity.",
      "Role-based authentication, user profile management, and admin moderation suite.",
    ],
    architectureDetails: "Built on Laravel MVC architecture using Eloquent ORM with custom SQL subqueries to ensure sub-100ms match computation speed.",
  },
  {
    id: "ecommerce-mern",
    title: "E-Commerce Platform",
    year: "2025",
    category: "Full-Stack Web",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
    description: "Full-featured MERN e-commerce application with dynamic product catalogs, JWT user authentication, cart management, and NoSQL order persistence.",
    statBadge: "MERN STACK + JWT AUTH",
    gridSpan: "lg:col-span-4",
    githubUrl: "https://github.com/sakibisactive",
    highlights: [
      "RESTful API endpoints with Express router and MongoDB aggregation pipelines.",
      "Secure JWT authentication flow with encrypted password hashing.",
      "Responsive React frontend state management with persistent cart storage.",
    ],
    architectureDetails: "Modular Node/Express API with middleware request validation and indexed MongoDB collections for fast product search filtering.",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-[#090b10] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>04 // FEATURED ENGINEERING PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Selected work & benchmarked systems.
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl font-sans">
            Asymmetric bento grid showcasing computer vision benchmarks, NLP sequence models, IoT embedded hardware, and full-stack web applications.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {projects.map((project, idx) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setSelectedProject(project)}
                className={`glass-card ${project.gridSpan} rounded-2xl p-6 sm:p-8 relative group cursor-pointer border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between overflow-hidden shadow-lg`}
              >
                {/* Subtle top ambient glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all pointer-events-none" />

                <div>
                  {/* Top Metadata Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-emerald-300">
                        {project.category}
                      </span>
                      <span>• {project.year}</span>
                    </div>

                    <span className="stat-badge">{project.statBadge}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-emerald-300 transition-colors mb-3 flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>

                  <p className="text-slate-300 text-sm font-sans leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Tech Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="text-emerald-400 group-hover:underline flex items-center gap-1">
                      View details & architecture →
                    </span>
                    {project.liveUrl ? (
                      <span className="text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded font-bold">
                        Live App ↗
                      </span>
                    ) : (
                      <span className="text-slate-500">[GitHub Repo]</span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0e1017] border border-emerald-500/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-8">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-emerald-400">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    {selectedProject.category}
                  </span>
                  <span>• {selectedProject.year}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <div className="inline-block stat-badge mb-4">
                  {selectedProject.statBadge}
                </div>
                <p className="text-slate-300 text-sm font-sans leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Key Technical Achievements
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture Detail */}
              <div className="p-4 rounded-lg bg-black/50 border border-white/10 mb-6 font-mono text-xs text-slate-300">
                <span className="text-emerald-400 font-semibold block mb-1">
                  [ARCHITECTURE SPEC]:
                </span>
                {selectedProject.architectureDetails}
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-6">
                <span className="block text-xs font-mono text-slate-400 mb-2">
                  TECHNOLOGIES & FRAMEWORKS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="tech-tag text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-display font-semibold text-xs hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20"
                    >
                      <span>Visit Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 font-mono text-xs hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:text-emerald-300 transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-emerald-400" />
                    <span>GitHub Code</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg text-xs font-mono text-slate-400 hover:text-white"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
