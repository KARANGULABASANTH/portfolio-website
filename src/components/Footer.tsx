import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Heart, GraduationCap, ArrowUp, Github, Linkedin, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal, social } = portfolioData;

  const isPlaceholder = (val?: string) => !val || val.startsWith('[') || val.trim() === '';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const displayName = isPlaceholder(personal.shortName) ? 'Student Developer' : personal.shortName;

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand & Summary */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <span className="text-white font-semibold text-sm sm:text-base block">
                {displayName} Portfolio
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {personal.currentRole}
              </span>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-medium text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#profiles" className="hover:text-white transition-colors">Profiles</a>
            <a href="#linkedin" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#certificates" className="hover:text-white transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Scroll to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            Centralized Personal Data Architecture • Ready for continuous updates
          </p>
          <p className="font-mono text-[11px] text-slate-400">
            Powered by <code className="text-indigo-400">src/data/portfolioData.ts</code>
          </p>
        </div>
      </div>
    </footer>
  );
};
