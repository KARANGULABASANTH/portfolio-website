import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import {
  Award,
  ExternalLink,
  Calendar,
  ShieldCheck,
  Trophy,
  Code2,
  CheckCircle2,
  Copy,
  Check,
  Bookmark,
  Sparkles,
  Medal,
  Eye,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Download,
  Layers,
  FileCheck
} from 'lucide-react';
import { Certificate } from '../types';
import {
  JntuhHackfusionCertVisual,
  HackerrankCertVisual,
  CbbCodingLeagueCertVisual,
  DhruvaStandingsVisual,
  CodeChefBadgeVisual,
} from './CertificateVisuals';

interface CertificatesSectionProps {
  onOpenConfigHelper?: () => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = () => {
  const { certificates } = portfolioData;
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'visual' | 'image'>('visual');

  const isPlaceholder = (val?: string) => !val || val.startsWith('[') || val.trim() === '';

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCertVisualTheme = (cert: Certificate) => {
    const org = cert.issuingOrganization.toLowerCase();
    const name = cert.name.toLowerCase();

    if (org.includes('hackfusion') || name.includes('hackfusion') || name.includes('hackathon') || org.includes('jntuh')) {
      return {
        icon: <Trophy className="w-5 h-5 text-violet-400" />,
        accentBg: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
        badgeBg: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
        glow: 'from-violet-500/15 to-transparent',
        border: 'border-violet-500/30 hover:border-violet-500/60',
        buttonBg: 'bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border-violet-500/40',
      };
    }
    if (org.includes('hackerrank') || name.includes('python')) {
      return {
        icon: <Code2 className="w-5 h-5 text-emerald-400" />,
        accentBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
        badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
        glow: 'from-emerald-500/15 to-transparent',
        border: 'border-emerald-500/30 hover:border-emerald-500/60',
        buttonBg: 'bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border-emerald-500/40',
      };
    }
    if (org.includes('codechef') || name.includes('bronze')) {
      return {
        icon: <Medal className="w-5 h-5 text-amber-400" />,
        accentBg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
        badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
        glow: 'from-amber-500/15 to-transparent',
        border: 'border-amber-500/30 hover:border-amber-500/60',
        buttonBg: 'bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border-amber-500/40',
      };
    }
    if (org.includes('acm') || name.includes('dhruva') || name.includes('rank')) {
      return {
        icon: <Trophy className="w-5 h-5 text-cyan-400" />,
        accentBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
        badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
        glow: 'from-cyan-500/15 to-transparent',
        border: 'border-cyan-500/30 hover:border-cyan-500/60',
        buttonBg: 'bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border-cyan-500/40',
      };
    }
    return {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
      accentBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
      badgeBg: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
      glow: 'from-indigo-500/15 to-transparent',
      border: 'border-indigo-500/30 hover:border-indigo-500/60',
      buttonBg: 'bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border-indigo-500/40',
    };
  };

  const renderCertVisual = (certId: string, className = '') => {
    switch (certId) {
      case 'cert-jntuh-hackfusion-2026':
        return <JntuhHackfusionCertVisual className={className} />;
      case 'cert-hackerrank-python':
        return <HackerrankCertVisual className={className} />;
      case 'cert-cbb-coding-league':
        return <CbbCodingLeagueCertVisual className={className} />;
      case 'cert-dhruva-acm-coding':
        return <DhruvaStandingsVisual className={className} />;
      case 'cert-codechef-bronze-badge':
        return <CodeChefBadgeVisual className={className} />;
      default:
        return null;
    }
  };

  const activeCerts = certificates || [];

  const filteredCerts = activeCerts.filter((cert) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'hackathon') {
      return cert.category?.toLowerCase().includes('hackathon') || cert.name.toLowerCase().includes('hack');
    }
    if (filterCategory === 'contests') {
      return cert.category?.toLowerCase().includes('contest') || cert.category?.toLowerCase().includes('league') || cert.scoreOrRank;
    }
    if (filterCategory === 'certs') {
      return cert.category?.toLowerCase().includes('certification') || cert.category?.toLowerCase().includes('badge');
    }
    return true;
  });

  const openLightbox = (index: number) => {
    setSelectedCertIndex(index);
    setZoomLevel(1);
  };

  const closeLightbox = () => {
    setSelectedCertIndex(null);
    setZoomLevel(1);
  };

  const nextCert = useCallback(() => {
    if (selectedCertIndex === null) return;
    setSelectedCertIndex((prev) => (prev! + 1) % activeCerts.length);
    setZoomLevel(1);
  }, [selectedCertIndex, activeCerts.length]);

  const prevCert = useCallback(() => {
    if (selectedCertIndex === null) return;
    setSelectedCertIndex((prev) => (prev! - 1 + activeCerts.length) % activeCerts.length);
    setZoomLevel(1);
  }, [selectedCertIndex, activeCerts.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedCertIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextCert();
      if (e.key === 'ArrowLeft') prevCert();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCertIndex, nextCert, prevCert]);

  const selectedCert = selectedCertIndex !== null ? activeCerts[selectedCertIndex] : null;

  return (
    <section
      id="certificates"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80 relative"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/50 text-emerald-300 text-xs font-mono mb-3.5 shadow-sm">
          <Award className="w-3.5 h-3.5 text-emerald-400" />
          <span>Verified Credentials & Achievements</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Certificates & Accreditations
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2.5 font-normal">
          Click any certificate photo to view the full document, credential IDs, signatures, and contest standings.
        </p>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {[
            { id: 'all', label: 'All Credentials' },
            { id: 'hackathon', label: 'Hackathons' },
            { id: 'contests', label: 'Coding Contests & Leagues' },
            { id: 'certs', label: 'Certifications & Badges' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilterCategory(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                filterCategory === tab.id
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid of Certificates with Visible Image Previews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {filteredCerts.map((cert, idx) => {
          const originalIndex = activeCerts.findIndex((c) => c.id === cert.id);
          const theme = getCertVisualTheme(cert);

          return (
            <motion.div
              key={cert.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={`group relative bg-slate-900/90 border ${theme.border} rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1`}
            >
              {/* Top Image Preview Thumbnail with Interactive Hover */}
              <div
                className="relative w-full aspect-[16/11] bg-slate-950 overflow-hidden cursor-pointer group/img"
                onClick={() => openLightbox(originalIndex)}
              >
                {/* Visual Rendering */}
                <div className="w-full h-full transform scale-[0.98] transition-transform duration-500 group-hover/img:scale-100 flex items-center justify-center">
                  {renderCertVisual(cert.id) || (
                    <img
                      src={cert.certificateImageOrPdf}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>

                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none opacity-60" />

                {/* Hover overlay with "View Certificate" Pill */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/95 text-slate-950 text-xs font-semibold shadow-lg backdrop-blur-md transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5 text-slate-900" />
                    <span>View Full Certificate</span>
                  </span>
                </div>

                {/* Top Badge overlay */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 pointer-events-none">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border backdrop-blur-md ${theme.badgeBg}`}>
                    {cert.badgeText || cert.category || 'Verified'}
                  </span>
                  <div className="p-1 rounded-lg bg-slate-950/80 text-slate-300 border border-slate-800 backdrop-blur-md shadow-sm">
                    <Eye className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block line-clamp-1">
                      {cert.issuingOrganization}
                    </span>
                  </div>

                  <h3
                    onClick={() => openLightbox(originalIndex)}
                    className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors leading-snug cursor-pointer mb-2.5"
                  >
                    {cert.name}
                  </h3>

                  {/* Highlight Score or Rank Banner */}
                  {cert.scoreOrRank && (
                    <div className="mb-3 px-2.5 py-1.5 rounded-lg bg-slate-950/90 border border-slate-800/90 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-mono text-[11px]">Milestone / Rank:</span>
                      <span className="font-semibold text-cyan-300 font-mono text-xs flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        {cert.scoreOrRank}
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  {cert.description && (
                    <p className="text-xs text-slate-300 font-normal leading-relaxed mb-4 line-clamp-3">
                      {cert.description}
                    </p>
                  )}

                  {/* Credential ID metadata */}
                  {cert.credentialId && (
                    <div className="mb-4 inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800/90 text-[11px] font-mono text-slate-300">
                      <Bookmark className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="text-slate-400">ID:</span>
                      <span className="text-slate-200 font-medium select-all">{cert.credentialId}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(cert.credentialId!, cert.id);
                        }}
                        className="ml-1 p-0.5 hover:text-white transition-colors"
                        title="Copy Credential ID"
                      >
                        {copiedId === cert.id ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3 text-slate-400 hover:text-slate-200" />
                        )}
                      </button>
                    </div>
                  )}
                </div>

                {/* Footer with Date & Action Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs gap-2">
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{cert.date}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {cert.certificateUrl && !isPlaceholder(cert.certificateUrl) && (
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                        title="Verify Credential Online"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => openLightbox(originalIndex)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all active:scale-95 shadow-sm ${theme.buttonBg}`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Fullscreen Certificate Image Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && selectedCertIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 overflow-hidden"
            onClick={closeLightbox}
          >
            {/* Lightbox Top Control Bar */}
            <div
              className="flex items-center justify-between gap-4 pb-3 border-b border-slate-800/80 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                    {selectedCert.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span>{selectedCert.issuingOrganization}</span>
                    <span>•</span>
                    <span>{selectedCert.date}</span>
                  </div>
                </div>
              </div>

              {/* Top Controls: View Mode, Zoom, Download, Close */}
              <div className="flex items-center gap-2">
                {/* View Mode Toggle */}
                {selectedCert.certificateImageOrPdf && (
                  <div className="hidden sm:flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setViewMode('visual')}
                      className={`px-2.5 py-1 rounded-lg transition-colors ${
                        viewMode === 'visual'
                          ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Certificate View
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('image')}
                      className={`px-2.5 py-1 rounded-lg transition-colors ${
                        viewMode === 'image'
                          ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Photo Document
                    </button>
                  </div>
                )}

                <div className="hidden sm:flex items-center gap-1 bg-slate-900/90 border border-slate-800 rounded-xl p-1 text-slate-300">
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))}
                    className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
                    className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setZoomLevel(1)}
                    className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                {selectedCert.certificateImageOrPdf && (
                  <a
                    href={selectedCert.certificateImageOrPdf}
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
                    title="Download / Open Full File"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={closeLightbox}
                  className="p-2 rounded-xl bg-rose-950/60 border border-rose-800/60 hover:bg-rose-900/80 text-rose-300 hover:text-white transition-colors"
                  title="Close (ESC)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Central Stage: High-Resolution Photo Rendering with Zoom & Navigation */}
            <div
              className="relative flex-1 flex items-center justify-center my-3 overflow-hidden cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <button
                type="button"
                onClick={prevCert}
                className="absolute left-2 sm:left-4 z-30 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white shadow-2xl backdrop-blur-md transition-all active:scale-95"
                title="Previous Certificate (Left Arrow)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Certificate Image Viewport */}
              <div className="w-full h-full flex items-center justify-center p-2 sm:p-6 overflow-auto">
                <motion.div
                  key={`${selectedCert.id}-${viewMode}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: zoomLevel }}
                  transition={{ duration: 0.25 }}
                  className="max-w-4xl w-full flex items-center justify-center"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  {viewMode === 'image' && selectedCert.certificateImageOrPdf ? (
                    <img
                      src={selectedCert.certificateImageOrPdf}
                      alt={selectedCert.name}
                      className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl border border-slate-800/80 select-none"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    renderCertVisual(selectedCert.id, 'max-w-3xl max-h-[72vh]') || (
                      <img
                        src={selectedCert.certificateImageOrPdf}
                        alt={selectedCert.name}
                        className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl border border-slate-800/80 select-none"
                        referrerPolicy="no-referrer"
                      />
                    )
                  )}
                </motion.div>
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={nextCert}
                className="absolute right-2 sm:right-4 z-30 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white shadow-2xl backdrop-blur-md transition-all active:scale-95"
                title="Next Certificate (Right Arrow)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Bottom Info Bar */}
            <div
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-20 backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {selectedCert.badgeText || selectedCert.category || 'Official Credential'}
                  </span>
                  {selectedCert.credentialId && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                      <span>ID: {selectedCert.credentialId}</span>
                      <button
                        type="button"
                        onClick={() => handleCopy(selectedCert.credentialId!, selectedCert.id)}
                        className="hover:text-white"
                        title="Copy ID"
                      >
                        {copiedId === selectedCert.id ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3 text-slate-400" />
                        )}
                      </button>
                    </span>
                  )}
                  {selectedCert.scoreOrRank && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                      {selectedCert.scoreOrRank}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-300 max-w-3xl line-clamp-2 sm:line-clamp-none">
                  {selectedCert.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 text-xs font-mono text-slate-400 self-end sm:self-center">
                <span>
                  {selectedCertIndex + 1} of {activeCerts.length}
                </span>
                {selectedCert.certificateUrl && !isPlaceholder(selectedCert.certificateUrl) && (
                  <a
                    href={selectedCert.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 font-semibold transition-colors"
                  >
                    <span>Verify Online</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
