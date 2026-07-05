"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, GitBranch, Zap, Cpu, Activity, UserCheck, AlertTriangle, ArrowRight } from "lucide-react";

export default function FeaturedThesis() {
  const [activeTab, setActiveTab] = useState<"ACO" | "PSO" | "BCO" | "HYBRID">("HYBRID");

  return (
    <section id="thesis" className="py-24 relative bg-[#07080c] border-t border-white/5 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>03 // FLAGSHIP UNDERGRADUATE THESIS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Decentralized Bio-Inspired Swarm Routing for EVs
          </h2>
        </motion.div>

        {/* Main Case-Study Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 sm:p-10 border border-emerald-500/20 relative overflow-hidden shadow-2xl shadow-emerald-950/20"
        >
          {/* Header Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono text-xs font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                STATUS: IN PROGRESS
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-slate-500" />
                Supervisor: <strong className="text-slate-200">Dr. Khalilur Rahman</strong>
              </span>
            </div>

            <span className="stat-badge">
              E³-Hybrid ACO / PSO / BCO Framework
            </span>
          </div>

          {/* Grid Layout: Text Summary vs Interactive Swarm Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
            {/* Thesis Details (Left Column) */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
                Decentralized Bio-Inspired Multi-Agent / Swarm Coordination & Emergency Protocols for Electric Vehicles
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                Proposes <strong className="text-emerald-300 font-semibold">E³-Hybrid Swarm Routing</strong>, a novel multi-agent routing architecture combining <strong className="text-slate-100">Ant Colony Optimization (ACO)</strong>, <strong className="text-slate-100">Particle Swarm Optimization (PSO)</strong>, and <strong className="text-slate-100">Bee Colony Optimization (BCO)</strong>.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                Designed specifically for adaptive EV emergency rerouting in dense urban environments under severe communication degradation, sensor failure, or dynamic road blockages.
              </p>

              {/* Algorithm Tabs */}
              <div className="pt-2">
                <span className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                  Select Bio-Inspired Component:
                </span>
                <div className="flex flex-wrap gap-2">
                  {(["HYBRID", "ACO", "PSO", "BCO"] as const).map((algo) => (
                    <button
                      key={algo}
                      onClick={() => setActiveTab(algo)}
                      className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all border ${
                        activeTab === algo
                          ? "bg-emerald-500 text-slate-950 font-semibold border-emerald-400 shadow-md shadow-emerald-500/20"
                          : "bg-white/[0.03] text-slate-400 border-white/10 hover:border-emerald-500/30 hover:text-emerald-300"
                      }`}
                    >
                      {algo === "HYBRID" ? "E³-Hybrid System" : algo}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Algorithm Highlight Box */}
              <div className="p-4 rounded-lg bg-black/40 border border-white/10 font-mono text-xs text-slate-300 space-y-2">
                {activeTab === "HYBRID" && (
                  <p>
                    <span className="text-emerald-400 font-semibold">[HYBRID]:</span> Combines ACO global pheromone memory, PSO fast velocity convergence, and BCO scout exploration for total resilience.
                  </p>
                )}
                {activeTab === "ACO" && (
                  <p>
                    <span className="text-emerald-400 font-semibold">[ACO - Ant Colony]:</span> Deposit virtual pheromone trails on congested road edges to naturally disperse EV traffic away from bottlenecks.
                  </p>
                )}
                {activeTab === "PSO" && (
                  <p>
                    <span className="text-amber-400 font-semibold">[PSO - Particle Swarm]:</span> Each EV updates velocity towards personal best and local neighborhood swarm leader for rapid rerouting.
                  </p>
                )}
                {activeTab === "BCO" && (
                  <p>
                    <span className="text-cyan-400 font-semibold">[BCO - Bee Colony]:</span> Employ scout agents to continuously survey degraded comm-link nodes and waggle-dance alternate paths.
                  </p>
                )}
              </div>
            </div>

            {/* Abstract Swarm Routing Visual Diagram (Right Column) */}
            <div className="lg:col-span-6">
              <div className="bg-black/60 rounded-xl p-5 border border-white/10 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10 font-mono text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    SIMULATION VIEWPORT
                  </span>
                  <span>NODE DEGRADATION: FAULT-TOLERANT</span>
                </div>

                {/* SVG Swarm Node Graph */}
                <div className="relative w-full h-[260px] flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 240">
                    <defs>
                      <linearGradient id="primaryPath" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                      </linearGradient>
                      <linearGradient id="acoPath" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                    </defs>

                    {/* Background grid lines */}
                    <line x1="0" y1="60" x2="400" y2="60" stroke="#ffffff" strokeOpacity="0.04" />
                    <line x1="0" y1="120" x2="400" y2="120" stroke="#ffffff" strokeOpacity="0.04" />
                    <line x1="0" y1="180" x2="400" y2="180" stroke="#ffffff" strokeOpacity="0.04" />
                    <line x1="100" y1="0" x2="100" y2="240" stroke="#ffffff" strokeOpacity="0.04" />
                    <line x1="200" y1="0" x2="200" y2="240" stroke="#ffffff" strokeOpacity="0.04" />
                    <line x1="300" y1="0" x2="300" y2="240" stroke="#ffffff" strokeOpacity="0.04" />

                    {/* Blocked Path (Direct line - Red dashed) */}
                    <line x1="50" y1="120" x2="200" y2="120" stroke="#ef4444" strokeDasharray="4 4" strokeWidth="1.5" strokeOpacity="0.5" />
                    <line x1="200" y1="120" x2="350" y2="120" stroke="#ef4444" strokeDasharray="4 4" strokeWidth="1.5" strokeOpacity="0.5" />

                    {/* Dynamic Alternate Reroute Paths */}
                    {/* Upper Route (ACO / BCO Path) */}
                    <path
                      d="M 50,120 Q 120,40 200,40 T 350,120"
                      fill="none"
                      stroke={activeTab === "ACO" || activeTab === "HYBRID" ? "#10b981" : "rgba(255,255,255,0.1)"}
                      strokeWidth={activeTab === "ACO" || activeTab === "HYBRID" ? "2.5" : "1"}
                      strokeDasharray={activeTab === "ACO" ? "6 3" : "none"}
                    />

                    {/* Lower Route (PSO Velocity Vector Path) */}
                    <path
                      d="M 50,120 Q 120,200 200,200 T 350,120"
                      fill="none"
                      stroke={activeTab === "PSO" || activeTab === "HYBRID" ? "#f59e0b" : "rgba(255,255,255,0.1)"}
                      strokeWidth={activeTab === "PSO" || activeTab === "HYBRID" ? "2.5" : "1"}
                    />

                    {/* Animated Swarm Agent Pulses */}
                    <circle cx="50" cy="120" r="4" fill="#10b981">
                      <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                    </circle>

                    {/* Moving Agent along upper ACO path */}
                    <circle r="4" fill="#10b981">
                      <animateMotion path="M 50,120 Q 120,40 200,40 T 350,120" dur="3s" repeatCount="indefinite" />
                    </circle>

                    {/* Moving Agent along lower PSO path */}
                    <circle r="4" fill="#f59e0b">
                      <animateMotion path="M 50,120 Q 120,200 200,200 T 350,120" dur="2.4s" repeatCount="indefinite" />
                    </circle>

                    {/* Origin Node (EV Swarm Entry) */}
                    <circle cx="50" cy="120" r="12" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                    <text x="50" y="124" textAnchor="middle" fill="#10b981" fontSize="9" fontFamily="monospace">EV0</text>

                    {/* Blocked Node in Middle */}
                    <circle cx="200" cy="120" r="14" fill="#1f1315" stroke="#ef4444" strokeWidth="2" />
                    <text x="200" y="124" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">✕</text>
                    <text x="200" y="148" textAnchor="middle" fill="#ef4444" fontSize="8" fontFamily="monospace">BLOCKED</text>

                    {/* ACO Upper Intermediate Waypoint */}
                    <circle cx="200" cy="40" r="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
                    <text x="200" y="43" textAnchor="middle" fill="#10b981" fontSize="8" fontFamily="monospace">PHEROMONE</text>

                    {/* PSO Lower Intermediate Waypoint */}
                    <circle cx="200" cy="200" r="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
                    <text x="200" y="203" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">SWARM-BEST</text>

                    {/* Destination Node (Emergency Facility) */}
                    <circle cx="350" cy="120" r="12" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" />
                    <text x="350" y="124" textAnchor="middle" fill="#06b6d4" fontSize="9" fontFamily="monospace">HUB</text>
                  </svg>
                </div>

                {/* Diagram Caption */}
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> ACO Trail
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-400" /> PSO Swarm Vector
                  </span>
                  <span className="flex items-center gap-1 text-red-400">
                    <AlertTriangle className="w-3 h-3" /> Degraded Node Rerouted
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
