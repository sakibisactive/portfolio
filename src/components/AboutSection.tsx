"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, BookOpen } from "lucide-react";

const educationTimeline = [
  {
    institution: "BRAC University",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "2022 – 2026",
    location: "Dhaka, Bangladesh",
    grade: "CGPA 3.45 / 4.00",
    highlights: [
      "Specialization in Machine Learning, Deep Learning, and Multi-Agent Swarm Robotics.",
      "Undergraduate Thesis research supervised by Dr. Khalilur Rahman.",
      "Active participant in algorithmic programming & engineering hackathons.",
    ],
  },
  {
    institution: "Dhaka City College",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2018 – 2020",
    location: "Dhaka, Bangladesh",
    grade: "GPA 5.00 / 5.00",
    highlights: ["Science Group with focus on Physics, Mathematics, and Chemistry."],
  },
  {
    institution: "Govt. Laboratory High School",
    degree: "Secondary School Certificate (SSC)",
    period: "2016 – 2018",
    location: "Dhaka, Bangladesh",
    grade: "GPA 5.00 / 5.00",
    highlights: ["Academic Excellence with perfect score in national standardized exams."],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-[#07080c] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>01 // PROFILE & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Engineering background built on solid foundations.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Profile Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-display font-semibold text-white mb-4 flex items-center gap-2">
                <span>About Shahriar</span>
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                Detail-oriented final-year Computer Science student at BRAC University preparing for a software engineering role, with a strong foundation in programming, databases, full-stack development, and applied machine learning.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                Experienced building web applications, data-driven systems, and IoT solutions, with a focus on writing reliable, maintainable software and deploying scalable intelligent systems.
              </p>

              <div className="pt-4 border-t border-white/10 space-y-3 font-mono text-xs text-slate-400">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Degree</span>
                  <span className="text-slate-200">B.Sc. CSE (Final Year)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Primary University</span>
                  <span className="text-slate-200">BRAC University</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Target Role</span>
                  <span className="text-emerald-400 font-semibold">Software / ML Engineer</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Compact Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-2 text-sm font-display font-semibold text-slate-300 mb-2">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <span>Education Timeline</span>
            </div>

            <div className="relative pl-6 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-emerald-500/50 before:via-white/10 before:to-transparent">
              {educationTimeline.map((item, idx) => (
                <div key={item.institution} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#07080c] border-2 border-emerald-500 group-hover:bg-emerald-500 transition-colors flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>

                  <div className="glass-card p-5 rounded-lg border border-white/5 group-hover:border-emerald-500/30 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-base font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {item.institution}
                        </h4>
                        <p className="text-xs font-sans text-slate-300 font-medium">
                          {item.degree}
                        </p>
                      </div>

                      {/* Stat Badge */}
                      <span className="stat-badge">{item.grade}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {item.location}
                      </span>
                    </div>

                    <ul className="space-y-1.5">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-400 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/70 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
