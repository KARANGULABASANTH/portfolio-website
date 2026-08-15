import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import {
  Github,
  Terminal,
  Code2,
  Trophy,
  ExternalLink,
  Award,
  Flame,
  Globe,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Cpu
} from 'lucide-react';

export const CodingProfilesSection: React.FC = () => {
  const { social } = portfolioData;

  const isPlaceholder = (val?: string) => !val || val.startsWith('[') || val.trim() === '';

  // Helper to extract a displayable handle or path from a URL
  const extractHandle = (url?: string, platform?: string): string => {
    if (isPlaceholder(url)) return 'Not configured';
    try {
      const cleanUrl = url!.split('?')[0].replace(/\/+$/, '');
      const parts = cleanUrl.split('/');
      return parts[parts.length - 1] || platform || 'Profile';
    } catch {
      return platform || 'Profile';
    }
  };

  const platforms = [
    {
      id: 'profile-github',
      name: 'GitHub',
      category: 'Code Hosting & Projects',
      url: social.github,
      handle: extractHandle(social.github, 'GitHub'),
      icon: Github,
      iconColor: 'text-slate-100',
      iconBg: 'bg-slate-800/80 border-slate-700/80',
      accentGlow: 'hover:border-slate-600',
      tagline: 'Personal repositories, collaborative projects, and version-controlled source code.',
    },
    {
      id: 'profile-leetcode',
      name: 'LeetCode',
      category: 'DSA & Problem Solving',
      url: social.leetcode,
      handle: extractHandle(social.leetcode, 'LeetCode'),
      icon: Terminal,
      iconColor: 'text-amber-400',
      iconBg: 'bg-amber-500/10 border-amber-500/20',
      accentGlow: 'hover:border-amber-500/50',
      tagline: 'Practicing core data structures, algorithm patterns, and computational problem solving.',
    },
    {
      id: 'profile-hackerrank',
      name: 'HackerRank',
      category: 'Skills & Topic Practice',
      url: social.hackerrank,
      handle: extractHandle(social.hackerrank, 'HackerRank'),
      icon: Award,
      iconColor: 'text-emerald-400',
      iconBg: 'bg-emerald-500/10 border-emerald-500/20',
      accentGlow: 'hover:border-emerald-500/50',
      tagline: 'Language fundamentals, problem solving tracks, and skill verification modules.',
    },
    {
      id: 'profile-codechef',
      name: 'CodeChef',
      category: 'Contests & Challenges',
      url: social.codechef,
      handle: extractHandle(social.codechef, 'CodeChef'),
      icon: Flame,
      iconColor: 'text-amber-500',
      iconBg: 'bg-amber-600/10 border-amber-600/20',
      accentGlow: 'hover:border-amber-600/50',
      tagline: 'Participating in rated division contests, practice problem sets, and logic challenges.',
    },
    {
      id: 'profile-codeforces',
      name: 'Codeforces',
      category: 'Competitive Programming',
      url: social.codeforces,
      handle: extractHandle(social.codeforces, 'Codeforces'),
      icon: Code2,
      iconColor: 'text-rose-400',
      iconBg: 'bg-rose-500/10 border-rose-500/20',
      accentGlow: 'hover:border-rose-500/50',
      tagline: 'Round-based speed contests, mathematical problem analysis, and algorithmic training.',
    },
  ];

  return (
    <section
      id="profiles"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/50 text-indigo-300 text-xs font-mono mb-3.5 shadow-sm">
          <Terminal className="w-3.5 h-3.5 text-indigo-400" />
          <span>Coding & Developer Handles</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Coding Profiles & Platforms
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2.5 font-normal">
          Explore my active coding platform profiles, competitive programming accounts, and open-source project repositories.
        </p>
      </motion.div>

      {/* Grid of Profile Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {platforms.map((platform, idx) => {
          const Icon = platform.icon;
          const isUrlEmpty = isPlaceholder(platform.url);

          return (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={`group bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between shadow-xl ${platform.accentGlow}`}
            >
              <div>
                {/* Card Top: Icon, Name, Category & Status */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className={`p-3 rounded-xl border ${platform.iconBg} group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 ${platform.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                        {platform.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400 block">
                        {platform.category}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-medium ${
                      isUrlEmpty
                        ? 'bg-slate-800/80 text-slate-400 border border-slate-700'
                        : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center gap-1'
                    }`}
                  >
                    {!isUrlEmpty && <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />}
                    {isUrlEmpty ? 'Pending' : 'Connected'}
                  </span>
                </div>

                {/* Platform Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                  {platform.tagline}
                </p>
              </div>

              {/* Card Footer: Handle & "Visit Profile" Button */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-xs font-mono text-slate-400 truncate max-w-[170px]">
                  {!isUrlEmpty ? (
                    <span className="text-slate-300 font-medium">@{platform.handle}</span>
                  ) : (
                    <span className="text-slate-500 italic">Not configured</span>
                  )}
                </div>

                {isUrlEmpty ? (
                  <span className="text-xs font-mono text-slate-500 italic">
                    Add link in portfolioData.ts
                  </span>
                ) : (
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noreferrer"
                    id={`btn-visit-${platform.name.toLowerCase()}`}
                    aria-label={`Visit ${platform.name} Profile`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all shadow-sm group-hover:shadow-indigo-600/20"
                  >
                    <span>Visit Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 text-indigo-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Additional Profiles (Dynamic support for user-added platforms) */}
      {social.otherProfiles && social.otherProfiles.length > 0 && (
        <div className="mt-8 pt-8 border-t border-slate-800/80">
          <h3 className="text-sm font-semibold font-mono text-slate-400 mb-4 uppercase tracking-wider">
            Additional Platforms & Profiles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {social.otherProfiles.map((other, i) => {
              const isOtherEmpty = isPlaceholder(other.url);
              return (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-indigo-400">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white">{other.name}</h4>
                      {other.description && (
                        <p className="text-[11px] text-slate-400">{other.description}</p>
                      )}
                    </div>
                  </div>

                  {!isOtherEmpty && (
                    <a
                      href={other.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Note about statistics & competitive data authenticity */}
      <div className="mt-8 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center max-w-2xl mx-auto">
        <p className="text-xs text-slate-400 leading-relaxed font-normal">
          <span className="font-semibold text-slate-300">Authentic Profile Links:</span> Direct links to live coding and developer profiles. All statistics and problem counts reflect live activity directly on the respective platforms.
        </p>
      </div>
    </section>
  );
};
