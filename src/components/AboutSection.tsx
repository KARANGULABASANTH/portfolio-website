import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import {
  User,
  GraduationCap,
  Sparkles,
  Compass,
  Milestone,
  Target,
  BookOpen,
  Cpu,
  Layers,
  Code2,
  CheckCircle2,
  Calendar,
  Building2,
  ArrowUpRight
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { personal, education, interests, aboutDetails } = portfolioData;

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

  const bioText = aboutDetails?.introduction || personal.aboutMe;
  const learningJourney = aboutDetails?.learningJourney || [];
  const careerAspirations = aboutDetails?.careerAspirations || 'Aspiring to become a proficient Software Development Engineer.';
  const currentlyLearning = aboutDetails?.currentlyLearning || [
    'Data Structures & Algorithms',
    'Full-Stack Web Development',
    'Database Management Systems',
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/50 text-indigo-300 text-xs font-mono mb-3.5 shadow-sm">
          <User className="w-3.5 h-3.5 text-indigo-400" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Background & Learning Journey
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2.5 font-normal">
          A genuine look into my academic progress, technical interests, and aspirations as a Computer Science undergraduate.
        </p>
      </motion.div>

      {/* Top Grid: Profile + Introduction + Current Education Status */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
        
        {/* 1. Profile Image / Placeholder Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-between text-center backdrop-blur-sm shadow-xl"
        >
          <div className="w-full flex flex-col items-center">
            {/* Profile Avatar Frame */}
            <div className="relative mb-5 group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-2xl blur-sm opacity-40 group-hover:opacity-70 transition duration-300" />
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden">
                {personal.profilePhoto && !isPlaceholder(personal.profilePhoto) ? (
                  <img
                    src={personal.profilePhoto}
                    alt={personal.fullName}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-3 text-center">
                    <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 via-slate-100 to-cyan-300 font-mono">
                      {getInitials(personal.fullName)}
                    </span>
                    <span className="text-[10px] text-slate-500 mt-2 font-mono">Profile Placeholder</span>
                  </div>
                )}
              </div>
            </div>

            {/* Name and Role */}
            <h3 className="text-xl font-bold text-white mb-1">
              {isPlaceholder(personal.fullName) ? 'Karangula Basanth' : personal.fullName}
            </h3>
            <p className="text-xs text-indigo-400 font-medium font-mono mb-4">
              {personal.currentRole}
            </p>

            <div className="w-full py-2.5 px-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Actively Learning & Building</span>
            </div>
          </div>

          {/* Quick Academic Meta */}
          <div className="w-full mt-6 pt-5 border-t border-slate-800/80 text-left space-y-2 text-xs text-slate-400">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Degree:</span>
              <span className="font-semibold text-slate-200">{education.current.degree}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Branch:</span>
              <span className="font-semibold text-slate-200 text-right">{education.current.branch}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Year:</span>
              <span className="font-semibold text-indigo-300">{education.current.year}</span>
            </div>
          </div>
        </motion.div>

        {/* 2 & 3: Short Introduction & Current Education Status Details */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-8 flex flex-col gap-6"
        >
          {/* 2. Short Introduction Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 backdrop-blur-sm shadow-xl flex-1">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Introduction</h3>
                <p className="text-xs text-slate-400 font-mono">Who I am & My Engineering Focus</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {bioText}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
              {personal.shortTagline}
            </p>
          </div>

          {/* 3. Current Education Status Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Current Academic Standing</h3>
                <p className="text-xs text-slate-400 font-mono">Undergraduate Computer Science & Engineering</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80 space-y-1">
                <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" /> College / University
                </span>
                <p className="font-semibold text-slate-200">
                  {isPlaceholder(education.current.college) ? (
                    <span className="text-slate-400 italic">[Your College Name in portfolioData.ts]</span>
                  ) : (
                    education.current.college
                  )}
                </p>
                {!isPlaceholder(education.current.university) && (
                  <p className="text-xs text-slate-400">{education.current.university}</p>
                )}
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80 space-y-1">
                <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" /> Academic Timeline
                </span>
                <p className="font-semibold text-slate-200">
                  {education.current.year} Undergraduate
                </p>
                <p className="text-xs text-indigo-300">
                  Focusing on core CS theory, data structures, and practical development
                </p>
              </div>
            </div>

            {education.current.highlights && education.current.highlights.length > 0 && (
              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <span className="text-xs font-mono text-slate-400 block mb-1.5">Key Coursework:</span>
                <ul className="space-y-1 text-xs text-slate-300">
                  {education.current.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </motion.div>
      </div>

      {/* 4. Programming & Development Interests */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white">
                Programming & Development Interests
              </h3>
              <p className="text-xs text-slate-400">Domains and technical areas I am passionate about exploring</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {interests.map((interest, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 hover:border-indigo-500/40 text-center transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:text-cyan-300 mx-auto flex items-center justify-center mb-2 transition-colors">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200 block">
                  {interest}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 5. Learning Journey & 6. Career Aspirations + 7. Currently Learning */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* 5. My Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Milestone className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  My Learning Journey
                </h3>
                <p className="text-xs text-slate-400 font-mono">Progression & Milestones</p>
              </div>
            </div>

            {/* Timeline Steps */}
            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800 pl-2">
              {learningJourney.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-4">
                  <div className="relative z-10 w-7 h-7 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center shrink-0">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 flex-1">
                    <span className="text-[11px] font-mono text-indigo-400 font-semibold uppercase tracking-wider block mb-1">
                      {step.phase}
                    </span>
                    <h4 className="text-sm sm:text-base font-semibold text-slate-100 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: 6. Career Aspirations & 7. Currently Learning */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* 6. Career Aspirations */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 backdrop-blur-sm shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Career Aspirations</h3>
                <p className="text-xs text-slate-400 font-mono">Future Goals & Growth</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/50 border border-slate-800/80 p-4 rounded-xl">
              {careerAspirations}
            </p>
          </motion.div>

          {/* 7. Currently Learning Subsection */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 backdrop-blur-sm shadow-xl flex-1"
          >
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Currently Learning</h3>
                <p className="text-xs text-slate-400 font-mono">Active Topics & Skills</p>
              </div>
            </div>

            <ul className="space-y-2.5">
              {currentlyLearning.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/80 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
