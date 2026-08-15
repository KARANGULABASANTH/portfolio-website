import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Github,
  Linkedin,
  Terminal,
  ArrowDown,
  Sparkles,
  Mail,
  GraduationCap,
  ExternalLink,
  Code,
  Award
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { personal, contact, social, education } = portfolioData;

  const isPlaceholder = (val?: string) => !val || val.startsWith('[') || val.trim() === '';

  const getInitials = (name: string) => {
    if (isPlaceholder(name)) return 'CS';
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('');
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs text-indigo-300 mb-6 backdrop-blur-sm shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium">{personal.currentRole}</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400 font-mono text-[11px]">{education.current.degree} ({education.current.year})</span>
        </div>

        {/* Profile Avatar / Photo Container */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[2px] shadow-xl shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center overflow-hidden relative">
                {personal.profilePhoto && !isPlaceholder(personal.profilePhoto) ? (
                  <img
                    src={personal.profilePhoto}
                    alt={personal.fullName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-2">
                    <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 via-white to-cyan-300">
                      {getInitials(personal.fullName)}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono mt-1">Photo Placeholder</span>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-slate-800 border border-slate-700 p-1.5 rounded-xl shadow-md">
              <Code className="w-4 h-4 text-indigo-400" />
            </div>
          </div>
        </div>

        {/* Full Name & Title */}
        <h1
          id="hero-name"
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4"
        >
          {isPlaceholder(personal.fullName) ? (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-slate-300">
              [Your Full Name]
            </span>
          ) : (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-200">
              {personal.fullName}
            </span>
          )}
        </h1>

        {/* Short Tagline */}
        <p
          id="hero-tagline"
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8"
        >
          {personal.shortTagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href="#certificates"
            id="btn-hero-certificates"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 active:scale-95 transition-all"
          >
            <Award className="w-4 h-4 text-emerald-300" />
            <span>View Certificates</span>
          </a>

          <a
            href="#education"
            id="btn-hero-education"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 active:scale-95 transition-all"
          >
            <GraduationCap className="w-4 h-4 text-indigo-400" />
            <span>Education & Skills</span>
          </a>

          <a
            href="#contact"
            id="btn-hero-contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 active:scale-95 transition-all"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Contact Details</span>
          </a>
        </div>

        {/* Quick Social & Coding Profile Chips */}
        <div className="pt-4 border-t border-slate-800/70 max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-mono text-slate-400 mb-3">
            Connect & Profiles
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {/* GitHub */}
            <a
              href={isPlaceholder(social.github) ? '#profiles' : social.github}
              target={isPlaceholder(social.github) ? '_self' : '_blank'}
              rel="noreferrer"
              id="hero-social-github"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-indigo-500/50 text-xs text-slate-300 hover:text-white transition-all"
            >
              <Github className="w-3.5 h-3.5 text-slate-300" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href={isPlaceholder(social.linkedin) ? '#linkedin' : social.linkedin}
              target={isPlaceholder(social.linkedin) ? '_self' : '_blank'}
              rel="noreferrer"
              id="hero-social-linkedin"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-indigo-500/50 text-xs text-slate-300 hover:text-white transition-all"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            {/* LeetCode */}
            <a
              href={isPlaceholder(social.leetcode) ? '#profiles' : social.leetcode}
              target={isPlaceholder(social.leetcode) ? '_self' : '_blank'}
              rel="noreferrer"
              id="hero-social-leetcode"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-amber-500/50 text-xs text-slate-300 hover:text-white transition-all"
            >
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>LeetCode</span>
            </a>

            {/* Codeforces */}
            <a
              href={isPlaceholder(social.codeforces) ? '#profiles' : social.codeforces}
              target={isPlaceholder(social.codeforces) ? '_self' : '_blank'}
              rel="noreferrer"
              id="hero-social-codeforces"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-red-500/50 text-xs text-slate-300 hover:text-white transition-all"
            >
              <Code className="w-3.5 h-3.5 text-red-400" />
              <span>Codeforces</span>
            </a>

            {/* All Profiles Link */}
            <a
              href="#profiles"
              id="hero-social-all"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800/40 hover:bg-slate-800 border border-slate-700/40 text-xs text-indigo-300 hover:text-indigo-200 transition-all"
            >
              <span>More Profiles</span>
              <ArrowDown className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
