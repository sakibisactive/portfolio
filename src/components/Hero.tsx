"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, ChevronRight, Cpu, Sparkles, Terminal } from "lucide-react";
import SwarmBackground from "./SwarmBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern bg-radial-glow">
      {/* Dynamic Canvas Background */}
      <SwarmBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full">
        {/* Status Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-300">Final-Year CSE Student @ BRAC University</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 font-medium">Open to Software Engineering Roles</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.08] mb-6"
        >
          Shahriar Sakib
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-emerald-400 text-3xl sm:text-5xl lg:text-6xl font-normal mt-2">
            Building reliable, high-performance software systems across Full-Stack Web, Machine Learning, & IoT.
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed mb-10 font-sans"
        >
          Computer Science & Engineering student focused on writing maintainable, production-ready software. Versatile across full-stack web applications, relational & NoSQL databases, deep learning architectures, and decentralized IoT systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-emerald-500 text-slate-950 font-display font-semibold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
          >
            <span>View Projects</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-white/[0.05] border border-white/15 text-slate-200 font-display font-medium text-sm hover:bg-white/[0.1] hover:border-emerald-500/40 hover:text-emerald-300 transition-all backdrop-blur-sm"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>View Résumé</span>
          </a>
        </motion.div>

        {/* Monospace Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10"
        >
          <div className="flex items-center gap-3 p-3 rounded-md bg-white/[0.02] border border-white/5 font-mono text-xs text-slate-400">
            <Cpu className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <span className="block text-slate-500 text-[10px] uppercase">Focus</span>
              <span className="text-slate-200">Full-Stack, Software Systems & ML</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-md bg-white/[0.02] border border-white/5 font-mono text-xs text-slate-400">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <span className="block text-slate-500 text-[10px] uppercase">Education</span>
              <span className="text-slate-200">BRAC University (CGPA 3.45)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-md bg-white/[0.02] border border-white/5 font-mono text-xs text-slate-400">
            <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <span className="block text-slate-500 text-[10px] uppercase">Flagship Work</span>
              <span className="text-slate-200">E³-Hybrid Swarm Routing</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 text-xs font-mono opacity-60">
        <span>SCROLL DOWN</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}
