import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import {
  GraduationCap,
  Calendar,
  Building2,
  School,
  BookOpen,
  Award,
  CheckCircle2,
  Sparkles,
  Clock,
  MapPin,
  FileCheck
} from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = portfolioData;
  const { current, previous } = education;

  const isPlaceholder = (val?: string) => !val || val.startsWith('[') || val.trim() === '';

  // Safe display helper
  const displayVal = (val?: string, fallback: string = 'Not specified') => {
    if (isPlaceholder(val)) return fallback;
    return val;
  };

  // Timeline entries organized chronologically (Current B.Tech down to 10th School)
  const timelineItems = [
    {
      id: 'edu-btech',
      type: 'Undergraduate Degree',
      status: 'Currently Pursuing',
      isCurrent: true,
      degree: current.degree,
      branch: current.branch,
      title: `${current.degree} in ${current.branch}`,
      institution: current.college,
      universityAffiliation: current.university,
      currentYear: current.year,
      startYear: isPlaceholder(current.startYear) ? 'Start: [Year]' : current.startYear,
      expectedGraduation: isPlaceholder(current.expectedGraduation) ? 'Expected: [Year]' : `Graduation: ${current.expectedGraduation}`,
      duration: `${displayVal(current.startYear, 'Start Year')} – ${displayVal(current.expectedGraduation, 'Expected Year')}`,
      highlights: current.highlights || [],
      colorScheme: {
        node: 'bg-indigo-500 ring-indigo-500/30 text-indigo-100',
        badge: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300',
        statusBadge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
        cardBorder: 'border-indigo-500/40 hover:border-indigo-400/70',
        cardBg: 'bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-indigo-950/30',
        iconBg: 'bg-indigo-600/20 border-indigo-500/30 text-indigo-400',
      },
      icon: GraduationCap,
      details: [
        { label: 'College / Institute', value: current.college, icon: Building2 },
        { label: 'University / Affiliation', value: current.university, icon: School },
        { label: 'Academic Standing', value: current.year, icon: Clock },
      ]
    },
    {
      id: 'edu-intermediate',
      type: 'Higher Secondary / 12th',
      status: 'Completed',
      isCurrent: false,
      degree: 'Intermediate (10+2 / Class 12)',
      branch: previous.intermediate12th?.stream || 'Science / MPC',
      title: 'Intermediate / Class 12 Education',
      institution: previous.intermediate12th?.name,
      universityAffiliation: previous.intermediate12th?.board || 'State Board / CBSE',
      currentYear: null,
      startYear: null,
      expectedGraduation: null,
      duration: isPlaceholder(previous.intermediate12th?.year) ? 'Duration: [Year]' : previous.intermediate12th?.year,
      score: previous.intermediate12th?.score,
      highlights: [],
      colorScheme: {
        node: 'bg-violet-500 ring-violet-500/30 text-violet-100',
        badge: 'bg-violet-500/10 border-violet-500/30 text-violet-300',
        statusBadge: 'bg-slate-800 border-slate-700 text-slate-300',
        cardBorder: 'border-slate-800 hover:border-violet-500/50',
        cardBg: 'bg-slate-900/80',
        iconBg: 'bg-violet-600/20 border-violet-500/30 text-violet-400',
      },
      icon: School,
      details: [
        { label: 'Junior College / School', value: previous.intermediate12th?.name, icon: Building2 },
        { label: 'Board / Curriculum', value: previous.intermediate12th?.board, icon: FileCheck },
        { label: 'Stream / Discipline', value: previous.intermediate12th?.stream, icon: BookOpen },
        { label: 'Score / Result', value: previous.intermediate12th?.score, icon: Award },
      ]
    },
    {
      id: 'edu-school10th',
      type: 'Secondary Education / 10th',
      status: 'Completed',
      isCurrent: false,
      degree: 'Secondary School Certificate (Class 10)',
      branch: 'General Secondary Curriculum',
      title: 'Secondary School (Class 10 / SSC)',
      institution: previous.school10th?.name,
      universityAffiliation: previous.school10th?.board || 'State Board / CBSE / ICSE',
      currentYear: null,
      startYear: null,
      expectedGraduation: null,
      duration: isPlaceholder(previous.school10th?.year) ? 'Duration: [Year]' : previous.school10th?.year,
      score: previous.school10th?.score,
      highlights: [],
      colorScheme: {
        node: 'bg-cyan-500 ring-cyan-500/30 text-cyan-100',
        badge: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
        statusBadge: 'bg-slate-800 border-slate-700 text-slate-300',
        cardBorder: 'border-slate-800 hover:border-cyan-500/50',
        cardBg: 'bg-slate-900/80',
        iconBg: 'bg-cyan-600/20 border-cyan-500/30 text-cyan-400',
      },
      icon: BookOpen,
      details: [
        { label: 'School Name', value: previous.school10th?.name, icon: Building2 },
        { label: 'Board / Affiliation', value: previous.school10th?.board, icon: FileCheck },
        { label: 'Score / Result', value: previous.school10th?.score, icon: Award },
      ]
    }
  ];

  return (
    <section
      id="education"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-16 sm:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-800/50 text-violet-300 text-xs font-mono mb-3.5 shadow-sm">
          <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
          <span>Academic Pathway</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Education & Qualifications
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2.5 font-normal">
          Chronological educational timeline highlighting university degree coursework, institutional affiliations, and foundational schooling.
        </p>
      </motion.div>

      {/* Vertical Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Continuous Central/Left Timeline Spine Rail */}
        <div
          className="absolute left-4 sm:left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-indigo-500 via-violet-500 to-cyan-500/40 rounded-full"
          aria-hidden="true"
        />

        <div className="space-y-10 sm:space-y-12">
          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            const isItemPlaceholder = isPlaceholder(item.institution);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative pl-12 sm:pl-20 group"
              >
                {/* Timeline Node / Marker on the Vertical Spine */}
                <div
                  className={`absolute left-[7px] sm:left-[23px] top-6 -translate-x-1/2 w-8 h-8 rounded-full ${item.colorScheme.node} ring-4 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 z-10`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                {/* Timeline Content Card */}
                <div
                  className={`relative ${item.colorScheme.cardBg} border ${item.colorScheme.cardBorder} rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl transition-all duration-300`}
                >
                  {/* Card Header: Type Badge, Duration & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-800/80">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${item.colorScheme.badge}`}
                      >
                        {item.type}
                      </span>
                      {item.isCurrent ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Currently Pursuing • {item.currentYear}
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-800/80 border border-slate-700 text-slate-300">
                          {item.status}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-950/60 px-3 py-1 rounded-lg border border-slate-800/80">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Title & Qualification */}
                  <div className="mb-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-100 transition-colors">
                      {item.title}
                    </h3>
                    {item.branch && item.type !== 'Undergraduate Degree' && (
                      <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                        Stream: {item.branch}
                      </p>
                    )}
                  </div>

                  {/* Structured Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
                    {item.details.map((detail, dIdx) => {
                      const DetailIcon = detail.icon;
                      const isDetailPlaceholder = isPlaceholder(detail.value);

                      return (
                        <div
                          key={dIdx}
                          className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3"
                        >
                          <div className={`p-2 rounded-lg ${item.colorScheme.iconBg} shrink-0 mt-0.5`}>
                            <DetailIcon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                              {detail.label}
                            </span>
                            <span
                              className={`text-xs sm:text-sm font-semibold truncate block mt-0.5 ${
                                isDetailPlaceholder ? 'text-slate-500 italic' : 'text-slate-200'
                              }`}
                            >
                              {displayVal(detail.value, '[Information to be configured]')}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Undergraduate Highlights & Coursework */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-4 p-4 rounded-xl bg-indigo-950/30 border border-indigo-900/40">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase text-indigo-300 mb-2.5 font-semibold">
                        <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Core Coursework & Focus Areas</span>
                      </div>
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 font-normal"
                          >
                            <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Missing Info Placeholder Guidance */}
                  {isItemPlaceholder && (
                    <div className="mt-3 text-[11px] font-mono text-slate-500 italic">
                      Configure your details in <code className="text-slate-400">src/data/portfolioData.ts</code>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
