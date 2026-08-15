import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import {
  Code,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  const isPlaceholder = (item: string) => !item || item.startsWith('[') || item.trim() === '';

  const activeLanguages = (skills.programmingLanguages || []).filter(
    (lang) => !isPlaceholder(lang)
  );

  // Language meta information to provide high craft visual context
  const getLanguageDetails = (name: string) => {
    const lower = name.toLowerCase().trim();
    if (lower.includes('python')) {
      return {
        tag: 'Core Language',
        description: 'Object-oriented scripting, problem solving, data manipulation, and algorithmic foundations.',
        color: 'from-amber-500/20 via-yellow-500/10 to-transparent',
        border: 'border-yellow-500/30 hover:border-yellow-500/60',
        badgeColor: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
        accentColor: 'text-yellow-400',
        features: ['Data Structures & Logic', 'OOP & Modular Design', 'Problem Solving & Scripting'],
      };
    }
    if (lower === 'c' || lower.includes('c language')) {
      return {
        tag: 'System & Foundation',
        description: 'Procedural programming, pointers, memory allocation, and hardware-level algorithmic efficiency.',
        color: 'from-cyan-500/20 via-blue-500/10 to-transparent',
        border: 'border-cyan-500/30 hover:border-cyan-500/60',
        badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
        accentColor: 'text-cyan-400',
        features: ['Procedural Programming', 'Pointers & Memory Architecture', 'Algorithmic Optimization'],
      };
    }
    if (lower.includes('java')) {
      return {
        tag: 'Enterprise & OOP',
        description: 'Robust Object-Oriented Programming, platform independence, collections framework, and clean architecture.',
        color: 'from-orange-500/20 via-red-500/10 to-transparent',
        border: 'border-orange-500/30 hover:border-orange-500/60',
        badgeColor: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
        accentColor: 'text-orange-400',
        features: ['Classes, Interfaces & OOP', 'Collections Framework', 'Robust Type-Safe Architecture'],
      };
    }
    return {
      tag: 'Programming Language',
      description: 'Core syntax, problem solving, logic building, and software engineering foundations.',
      color: 'from-indigo-500/20 via-cyan-500/10 to-transparent',
      border: 'border-indigo-500/30 hover:border-indigo-500/60',
      badgeColor: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
      accentColor: 'text-indigo-400',
      features: ['Core Syntax & Logic', 'Data Structures', 'Algorithmic Problem Solving'],
    };
  };

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/50 text-indigo-300 text-xs font-mono mb-3.5 shadow-sm">
          <Terminal className="w-3.5 h-3.5 text-indigo-400" />
          <span>Core Competencies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Programming Languages
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2.5 font-normal">
          Foundational languages driving algorithmic problem solving, object-oriented software design, and computer science coursework.
        </p>
      </motion.div>

      {/* Languages Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {activeLanguages.map((lang, idx) => {
          const details = getLanguageDetails(lang);
          return (
            <motion.div
              key={lang}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className={`group relative bg-slate-900/90 border ${details.border} rounded-2xl p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1`}
            >
              {/* Subtle gradient glow header */}
              <div className={`absolute inset-0 bg-gradient-to-b ${details.color} rounded-2xl opacity-40 pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                      <Code className={`w-5 h-5 ${details.accentColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {lang}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {details.tag}
                      </span>
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono border ${details.badgeColor}`}>
                    Active
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6">
                  {details.description}
                </p>

                {/* Key Language Focus Areas */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Key Highlights
                  </span>
                  {details.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${details.accentColor} shrink-0`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="relative z-10 mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-slate-400" />
                  <span>CS Core Curriculum</span>
                </div>
                <span className="text-indigo-400 font-medium">B.Tech First Year</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-semibold text-white block">
              Continuous Technical Growth
            </span>
            <p className="text-xs text-slate-400 mt-0.5">
              Actively practicing Data Structures, Algorithms, and writing clean modular programs across Python, C, and Java.
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-cyan-300 shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>3 Languages Configured</span>
        </div>
      </motion.div>
    </section>
  );
};
