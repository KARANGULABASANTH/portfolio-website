import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import {
  FolderGit2,
  Mail,
  Github,
  Linkedin,
  Award,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Code2,
  CheckCircle,
  ExternalLink,
  Terminal,
  Compass
} from 'lucide-react';

interface HomeSectionProps {
  onOpenConfigHelper?: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onOpenConfigHelper }) => {
  const { personal, contact, social, education, interests } = portfolioData;

  const isPlaceholder = (val?: string) => !val || val.startsWith('[') || val.trim() === '';

  const getInitials = (name: string) => {
    if (isPlaceholder(name)) return 'KB';
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('');
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Main Content Layout: Responsive 2-column or centered structure */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Column: Who I am → What I study → What I am interested in → Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Current Role Badge (What I study) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-indigo-300 mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
              <span className="font-medium text-slate-200">{personal.currentRole}</span>
            </div>

            {/* 1. Name Prominently Displayed (Who I am) */}
            <h1
              id="home-full-name"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3"
            >
              {isPlaceholder(personal.fullName) ? (
                <span className="text-slate-400 italic">[Your Full Name]</span>
              ) : (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-200">
                  {personal.fullName}
                </span>
              )}
            </h1>

            {/* 3. Short Professional Tagline */}
            <p
              id="home-tagline"
              className="text-lg sm:text-xl font-medium text-indigo-300/90 mb-4 max-w-2xl"
            >
              {personal.shortTagline}
            </p>

            {/* 4. Short Introduction */}
            <p
              id="home-introduction"
              className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-2xl font-normal"
            >
              {personal.aboutMe}
            </p>

            {/* Interests Quick Badges (What I am interested in) */}
            {interests && interests.length > 0 && (
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 mb-8">
                <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
                  <Compass className="w-3 h-3 text-cyan-400" /> Interests:
                </span>
                {interests.slice(0, 5).map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            )}

            {/* Action Buttons (Where visitors can explore my work) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              {/* "View Certificates" Button */}
              <a
                href="#certificates"
                id="btn-home-view-certificates"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/25 active:scale-95 transition-all"
              >
                <Award className="w-4 h-4 text-emerald-300" />
                <span>View Certificates & Accreditations</span>
              </a>

              {/* "Contact Me" Button */}
              <a
                href="#contact"
                id="btn-home-contact-me"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 active:scale-95 transition-all"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* 9. Social Icons/Links for GitHub and LinkedIn */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-800/70">
              <span className="text-xs font-mono text-slate-400">Connect:</span>

              {/* GitHub Link */}
              <a
                href={isPlaceholder(social.github) ? '#profiles' : social.github}
                target={isPlaceholder(social.github) ? '_self' : '_blank'}
                rel="noreferrer"
                id="home-link-github"
                aria-label="GitHub Profile"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-xs font-medium text-slate-300 hover:text-white transition-all"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn Link */}
              <a
                href={isPlaceholder(social.linkedin) ? '#linkedin' : social.linkedin}
                target={isPlaceholder(social.linkedin) ? '_self' : '_blank'}
                rel="noreferrer"
                id="home-link-linkedin"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/50 text-xs font-medium text-slate-300 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              {/* HackerRank Link */}
              <a
                href={isPlaceholder(social.hackerrank) ? '#profiles' : social.hackerrank}
                target={isPlaceholder(social.hackerrank) ? '_self' : '_blank'}
                rel="noreferrer"
                id="home-link-hackerrank"
                aria-label="HackerRank Profile"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-xs font-medium text-slate-300 hover:text-white transition-all"
              >
                <Award className="w-4 h-4 text-emerald-400" />
                <span>HackerRank</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: 5. Profile Picture Placeholder & 10. Subtle Animation Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="shrink-0 flex justify-center"
          >
            <div className="relative group">
              {/* Outer decorative subtle glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500" />
              
              {/* Main Avatar Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl bg-slate-900 border border-slate-800 p-3 shadow-2xl flex flex-col items-center justify-center text-center overflow-hidden">
                {personal.profilePhoto && !isPlaceholder(personal.profilePhoto) ? (
                  <img
                    src={personal.profilePhoto}
                    alt={personal.fullName}
                    className="w-full h-full object-cover object-top rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-col items-center justify-center p-6 space-y-3">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center">
                      <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 to-cyan-300 font-mono">
                        {getInitials(personal.fullName)}
                      </span>
                    </div>

                    <div>
                      <span className="text-sm font-semibold text-slate-200 block">
                        {personal.fullName || 'Student Developer'}
                      </span>
                      <span className="text-xs text-indigo-400 font-mono block mt-0.5">
                        B.Tech CSE (2nd Year)
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-[11px] text-indigo-300 font-mono">
                      <Sparkles className="w-3 h-3 text-indigo-400" />
                      <span>Software Engineering & CSE</span>
                    </div>
                  </div>
                )}

                {/* Subtitle status badge anchored at bottom */}
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-slate-700/80 px-2.5 py-1 rounded-lg text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 shadow-md backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open to Internships</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
