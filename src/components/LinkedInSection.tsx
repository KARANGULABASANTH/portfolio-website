import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import {
  Linkedin,
  ExternalLink,
  GraduationCap,
  Building2,
  Sparkles,
  ShieldCheck,
  Globe2,
  ArrowUpRight
} from 'lucide-react';

export const LinkedInSection: React.FC = () => {
  const { personal, education, social } = portfolioData;

  const isPlaceholder = (val?: string) => !val || val.startsWith('[') || val.trim() === '';

  const linkedInUrl = isPlaceholder(social.linkedin)
    ? 'https://www.linkedin.com'
    : social.linkedin;

  const fullName = isPlaceholder(personal.fullName) ? 'Karangula Basanth' : personal.fullName;
  const currentDegree = education.current.degree || 'B.Tech';
  const currentBranch = education.current.branch || 'Computer Science and Engineering';
  const currentYear = education.current.year || '2nd Year';
  const collegeName = isPlaceholder(education.current.college)
    ? 'BV Raju Institute of Technology'
    : education.current.college;

  const professionalDescription =
    `${currentDegree} in ${currentBranch} (${currentYear}) at ${collegeName}. Actively expanding skills in data structures, algorithms, and full-stack software development with a passion for building clean, dependable applications.`;

  return (
    <section
      id="linkedin"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-blue-300 text-xs font-mono mb-3.5 shadow-sm">
          <Linkedin className="w-3.5 h-3.5 text-blue-400" />
          <span>Professional Network</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          LinkedIn Profile
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2.5 font-normal">
          Connect with me professionally, view my academic background, and follow my undergraduate engineering journey.
        </p>
      </motion.div>

      {/* Main LinkedIn Feature Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-3xl mx-auto"
      >
        <div
          className="group relative bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-7 sm:p-10 backdrop-blur-sm transition-all duration-300 shadow-2xl hover:shadow-blue-500/10"
        >
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent group-hover:via-blue-400 transition-all duration-500" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
            {/* Left: Icon & User Header */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:bg-blue-600/20 group-hover:text-blue-300 transition-all duration-300 shadow-sm shrink-0">
                <Linkedin className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-100 transition-colors">
                    {fullName}
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/10 border border-blue-500/20 text-blue-300">
                    <ShieldCheck className="w-3 h-3 text-blue-400" />
                    Verified
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-blue-400/90 font-mono mt-0.5">
                  {personal.currentRole}
                </p>
              </div>
            </div>

            {/* Right: Read-Only Public Badge */}
            <div className="hidden sm:flex flex-col items-end text-right">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Public Profile
              </span>
              <span className="text-xs text-slate-300 font-medium mt-0.5 flex items-center gap-1">
                <Globe2 className="w-3.5 h-3.5 text-slate-400" />
                Read-Only Overview
              </span>
            </div>
          </div>

          {/* Description Body */}
          <div className="py-6 space-y-4">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {professionalDescription}
            </p>

            {/* Academic Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                {currentDegree} • {currentBranch}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300 font-medium">
                <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                {collegeName}
              </span>
            </div>
          </div>

          {/* Card Footer: Actual URL Display & Action Button */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Display Actual Profile URL */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950/50 border border-slate-800/80 px-3.5 py-2 rounded-xl truncate max-w-full sm:max-w-md">
              <span className="text-slate-400 select-none">URL:</span>
              <span className="text-blue-300 truncate selection:bg-blue-600/40">
                {linkedInUrl}
              </span>
            </div>

            {/* View LinkedIn Profile Button */}
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              id="btn-view-linkedin-profile"
              aria-label="View LinkedIn Profile"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 shrink-0"
            >
              <span>View LinkedIn Profile</span>
              <ExternalLink className="w-4 h-4 text-blue-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
