import React from 'react';

export const JntuhHackfusionCertVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[16/11] bg-[#0c0c0e] text-white p-6 sm:p-8 rounded-xl border border-[#2a2a30] shadow-2xl flex flex-col justify-between overflow-hidden select-none font-sans ${className}`}>
      {/* Top Gold Gradient Wave Header */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#e5a842] via-[#b87c24] to-transparent opacity-90 pointer-events-none" />
      <div className="absolute -top-12 left-1/4 right-1/4 h-28 bg-[#fcd34d] blur-3xl opacity-20 pointer-events-none" />

      {/* Top Row: Logos & Certificate Title */}
      <div className="relative z-10 flex items-start justify-between">
        {/* Left: Brainovision Logo */}
        <div className="bg-white/95 px-2.5 py-1.5 rounded shadow-md border border-amber-400/40 flex items-center gap-1.5 text-slate-900">
          <div className="w-5 h-5 rounded bg-amber-600 flex items-center justify-center font-black text-[10px] text-white">
            BV
          </div>
          <div className="leading-none text-left">
            <div className="text-[10px] font-extrabold tracking-wider text-slate-900">BRAIN O</div>
            <div className="text-[8px] font-bold text-amber-700 tracking-widest">VISION</div>
          </div>
        </div>

        {/* Center: CERTIFICATE OF PARTICIPATION */}
        <div className="text-center">
          <h2 className="text-xl sm:text-3xl font-serif font-black tracking-widest text-white drop-shadow-md uppercase">
            CERTIFICATE
          </h2>
          <div className="text-[10px] sm:text-xs tracking-[0.25em] font-semibold text-amber-300/90 uppercase mt-0.5">
            OF PARTICIPATION
          </div>
        </div>

        {/* Right: JNTUH & AICTE Seals */}
        <div className="flex items-center gap-2">
          {/* JNTUH Emblem */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-950/80 border-2 border-purple-400 flex items-center justify-center shadow-md">
            <div className="w-6 h-6 rounded-full border border-dashed border-purple-300 flex items-center justify-center text-[7px] font-bold text-purple-200 text-center leading-tight">
              JNTUH
            </div>
          </div>
          {/* AICTE Emblem */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-950/80 border-2 border-amber-400 flex items-center justify-center shadow-md">
            <div className="w-6 h-6 rounded-full border border-amber-300 flex items-center justify-center text-[7px] font-bold text-amber-200">
              AICTE
            </div>
          </div>
        </div>
      </div>

      {/* Center Subheading & Recipient Box */}
      <div className="relative z-10 my-auto text-center space-y-3">
        <p className="text-[9px] sm:text-[11px] font-mono tracking-widest text-amber-200/80 uppercase">
          PROUDLY PRESENTED TO
        </p>

        {/* White Center Card for Name */}
        <div className="bg-white text-slate-950 rounded-2xl py-3 sm:py-4 px-6 max-w-xl mx-auto shadow-2xl border-2 border-amber-400/50">
          <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-slate-900 font-serif">
            Karangula Basanth
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
            B V Raju Institute of technology
          </p>
        </div>

        {/* Hackathon Description Paragraph */}
        <p className="text-[10px] sm:text-xs text-slate-300 max-w-2xl mx-auto leading-relaxed px-4 font-normal">
          has successfully participated in the <strong className="text-white font-semibold">&ldquo;HACKFUSION 2026 &ndash; International Level Hackathon &amp; Project Expo&rdquo;</strong> organized by <span className="text-amber-200">Department of ECE, Jawaharlal Nehru Technological University Hyderabad (JNTUH)</span>, Hyderabad in collaboration with Brainovision Solutions India Pvt. Ltd. held on <span className="text-white font-medium">3rd &amp; 4th April 2026</span> at JNTUH, Hyderabad.
        </p>
      </div>

      {/* Bottom Row: Signatures */}
      <div className="relative z-10 flex items-end justify-between pt-3 border-t border-slate-800 text-[9px] sm:text-[11px]">
        {/* Left Signatory */}
        <div className="text-center">
          <div className="h-7 flex items-center justify-center">
            <span className="font-serif italic font-bold text-amber-400 text-sm sm:text-base">
              Ganesh Nagu Doddi
            </span>
          </div>
          <div className="w-28 sm:w-36 h-[1px] bg-amber-500/60 mx-auto my-1" />
          <div className="font-bold text-slate-200">Ganesh Nagu Doddi</div>
          <div className="text-slate-400 text-[8px] sm:text-[9px]">Founder &amp; CEO, Brainovision Solutions</div>
        </div>

        {/* Brainovision Stamp */}
        <div className="hidden sm:flex flex-col items-center justify-center opacity-60">
          <div className="w-12 h-12 rounded-full border border-dashed border-amber-500/50 flex items-center justify-center text-[6px] font-mono text-amber-300 text-center leading-tight">
            OFFICIAL<br />SEAL
          </div>
        </div>

        {/* Right Signatory */}
        <div className="text-center">
          <div className="h-7 flex items-center justify-center">
            <span className="font-serif italic font-bold text-amber-400 text-sm sm:text-base">
              Dr. T. Madhavi Kumari
            </span>
          </div>
          <div className="w-28 sm:w-36 h-[1px] bg-amber-500/60 mx-auto my-1" />
          <div className="font-bold text-slate-200">Dr. T. Madhavi Kumari</div>
          <div className="text-slate-400 text-[8px] sm:text-[9px]">Professor &amp; HOD, JNTUH Hyderabad</div>
        </div>
      </div>
    </div>
  );
};

export const HackerrankCertVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[16/11] bg-[#fbfbfd] text-slate-900 p-6 sm:p-8 rounded-xl border-4 border-[#e2e8f0] shadow-2xl flex flex-col justify-between overflow-hidden select-none font-serif ${className}`}>
      {/* Delicate Guilloche Geometric Pattern Edge */}
      <div className="absolute inset-2 border border-slate-300 rounded-lg pointer-events-none" />
      <div className="absolute inset-3 border border-dashed border-slate-200 rounded pointer-events-none" />

      {/* Top Center: HackerRank Icon Emblem */}
      <div className="relative z-10 text-center">
        <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-[#1ba94c] p-1 shadow-md flex items-center justify-center border-2 border-white">
          <div className="w-full h-full rounded-full border border-white/60 flex items-center justify-center text-white font-mono font-black text-sm sm:text-base">
            H
          </div>
        </div>

        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2 sm:mt-3">
          Certificate of Accomplishment
        </h2>

        {/* Dark Banner Pill for Python (Basic) */}
        <div className="inline-block bg-slate-900 text-white text-[11px] sm:text-xs font-mono font-bold px-6 py-1.5 rounded-sm uppercase tracking-wider mt-2 shadow-sm">
          Python (Basic)
        </div>
      </div>

      {/* Center Recipient Content */}
      <div className="relative z-10 my-auto text-center space-y-2">
        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-500">
          PRESENTED TO
        </p>
        <h3 className="text-xl sm:text-3xl font-normal italic font-serif text-slate-900 border-b border-slate-300 pb-2 max-w-md mx-auto">
          KARANGULA BASANTH
        </h3>
        <p className="text-[10px] sm:text-xs text-slate-600 font-sans max-w-lg mx-auto mt-2">
          The bearer of this certificate has passed the HackerRank skill certification test
        </p>
      </div>

      {/* Bottom Metadata & Signature */}
      <div className="relative z-10 flex items-end justify-between pt-3 border-t border-slate-200 text-[10px] sm:text-xs font-sans">
        <div className="text-left font-mono">
          <div className="text-slate-800 font-medium">Earned on: <span className="font-bold">01 Jul, 2026</span></div>
          <div className="text-slate-500 text-[9px] sm:text-[10px]">ID: 5783F19504FC</div>
        </div>

        <div className="text-right">
          <div className="font-serif italic font-bold text-slate-800 text-sm sm:text-base">
            Harishankaran K
          </div>
          <div className="w-24 sm:w-32 h-[1px] bg-slate-400 ml-auto my-0.5" />
          <div className="font-bold text-slate-900 text-[10px] sm:text-[11px]">Harishankaran K</div>
          <div className="text-slate-500 text-[8px] sm:text-[9px]">CTO, HackerRank</div>
        </div>
      </div>
    </div>
  );
};

export const CbbCodingLeagueCertVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[16/11] bg-[#070b14] text-white p-6 sm:p-8 rounded-xl border-2 border-cyan-500/50 shadow-2xl flex flex-col justify-between overflow-hidden select-none font-sans ${className}`}>
      {/* Sci-Fi Tech Corner Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />

      {/* Header Logos Row */}
      <div className="relative z-10 flex items-center justify-between border-b border-cyan-900/60 pb-3">
        {/* CB2 Logo */}
        <div className="w-10 h-10 rounded-full border-2 border-cyan-400 flex items-center justify-center font-black text-cyan-300 text-xs shadow-md">
          CB²
        </div>

        {/* BVRIT / Vishnu Center Header */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-amber-500/80 flex items-center justify-center text-[8px] font-bold text-slate-950">
            V
          </div>
          <div className="text-left leading-tight">
            <div className="text-base sm:text-xl font-black tracking-wider text-emerald-400">
              BVRIT.
            </div>
            <div className="text-[7px] sm:text-[8px] font-mono tracking-widest text-slate-400">
              AUTONOMOUS
            </div>
          </div>
        </div>

        {/* Computer Society of India Seal */}
        <div className="w-10 h-10 rounded-full border-2 border-blue-400 flex flex-col items-center justify-center text-[6px] font-bold text-blue-200 leading-none">
          <span>CSI</span>
          <span className="text-[5px] text-blue-300">1965</span>
        </div>
      </div>

      {/* Center Certificate Content */}
      <div className="relative z-10 my-auto text-center space-y-2">
        <h2 className="text-2xl sm:text-4xl font-serif font-black tracking-[0.2em] text-white uppercase">
          CERTIFICATE
        </h2>
        <p className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-cyan-300 uppercase">
          OF PARTICIPATION
        </p>

        <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest pt-1">
          THIS IS TO CERTIFY THAT
        </p>

        <h3 className="text-xl sm:text-3xl font-serif italic text-cyan-200 border-b border-cyan-700/50 pb-1 max-w-sm mx-auto">
          Karangula basanth
        </h3>

        <p className="text-[10px] sm:text-xs text-slate-300 pt-1">
          has participated in the
        </p>

        <div className="text-base sm:text-xl font-bold tracking-wider text-cyan-400 uppercase">
          CBB WEEKLY CODING LEAGUE
        </div>

        <div className="text-[10px] sm:text-xs font-mono text-slate-400">
          held on <span className="text-white font-medium">2026-08-01</span>
        </div>
      </div>

      {/* Bottom Signatures & QR Code */}
      <div className="relative z-10 flex items-end justify-between pt-3 border-t border-cyan-900/60 text-[9px] sm:text-[10px]">
        {/* Conveyor */}
        <div className="text-center">
          <div className="font-serif italic text-cyan-300 text-xs sm:text-sm">Ch Madhubabu</div>
          <div className="w-20 sm:w-24 h-[1px] bg-cyan-700 mx-auto my-0.5" />
          <div className="font-bold text-slate-300 uppercase text-[8px]">CONVEYNOR</div>
          <div className="text-slate-500 text-[7px]">Ch Madhubabu</div>
        </div>

        {/* Faculty Coordinator */}
        <div className="text-center">
          <div className="font-serif italic text-cyan-300 text-xs sm:text-sm">Lanke Pallavi</div>
          <div className="w-20 sm:w-24 h-[1px] bg-cyan-700 mx-auto my-0.5" />
          <div className="font-bold text-slate-300 uppercase text-[8px]">FACULTY COORDINATOR</div>
          <div className="text-slate-500 text-[7px]">Lanke Pallavi</div>
        </div>

        {/* President */}
        <div className="text-center">
          <div className="font-serif italic text-cyan-300 text-xs sm:text-sm">Nikhil Mamilla</div>
          <div className="w-20 sm:w-24 h-[1px] bg-cyan-700 mx-auto my-0.5" />
          <div className="font-bold text-slate-300 uppercase text-[8px]">PRESIDENT</div>
          <div className="text-slate-500 text-[7px]">Nikhil Mamilla</div>
        </div>

        {/* Certificate ID & Verification QR */}
        <div className="text-right font-mono flex items-center gap-2">
          <div>
            <div className="text-[7px] text-slate-400 uppercase">CERTIFICATE ID</div>
            <div className="text-cyan-300 font-bold text-[8px] sm:text-[9px]">CWCL-AUG26-0104</div>
            <div className="text-[7px] text-slate-400">cwcl.cbbbvrit.org/verify</div>
          </div>
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white p-0.5 rounded shadow flex items-center justify-center">
            <div className="w-full h-full bg-slate-900 flex items-center justify-center text-[5px] text-white font-mono">
              QR
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DhruvaStandingsVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[16/11] bg-[#050811] text-white p-5 sm:p-7 rounded-xl border border-cyan-900/80 shadow-2xl flex flex-col justify-between overflow-hidden select-none font-mono ${className}`}>
      {/* Starry Background Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-3">
        <h2 className="text-xl sm:text-3xl font-black tracking-widest text-white uppercase drop-shadow-md">
          FINAL STANDINGS
        </h2>
        <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
          Top 15 move on.
        </p>
      </div>

      {/* Standings Leaderboard List */}
      <div className="relative z-10 space-y-1.5 my-auto max-w-xl mx-auto w-full">
        {/* Rank 1 */}
        <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-[10px]">1</span>
            <span className="font-bold text-slate-200">MIGHTY-MONARCHS</span>
          </div>
          <span className="font-bold text-amber-300">920</span>
        </div>

        {/* Rank 2 */}
        <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-slate-400/20 text-slate-300 font-bold flex items-center justify-center text-[10px]">2</span>
            <span className="font-medium text-slate-300">ELITEORBIT</span>
          </div>
          <span className="font-bold text-slate-300">915</span>
        </div>

        {/* Rank 3 */}
        <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-amber-700/20 text-amber-500 font-bold flex items-center justify-center text-[10px]">3</span>
            <span className="font-medium text-slate-300">TEAM-TITAN</span>
          </div>
          <span className="font-bold text-amber-400">915</span>
        </div>

        {/* Rank 4 */}
        <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 font-bold flex items-center justify-center text-[10px]">4</span>
            <span className="text-slate-400">CODE-TITANS</span>
          </div>
          <span className="text-slate-400">885</span>
        </div>

        {/* Rank 5 (YOU - SYNTAX SQUAD) - Highlighted */}
        <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-blue-600/30 border-2 border-blue-400 text-xs shadow-lg shadow-blue-500/20">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center text-[10px]">5</span>
            <span className="font-bold text-white tracking-wider">SYNTAX SQUAD</span>
            <span className="px-1.5 py-0.5 rounded bg-blue-400 text-slate-950 text-[9px] font-black uppercase ml-1">
              YOU
            </span>
          </div>
          <span className="font-black text-cyan-300 text-sm">885</span>
        </div>

        {/* Rank 6 */}
        <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900/40 border border-slate-800/60 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-500 font-bold flex items-center justify-center text-[10px]">6</span>
            <span className="text-slate-500">BYTE-ME</span>
          </div>
          <span className="text-slate-500">875</span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center pt-2 border-t border-slate-900">
        <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-widest">
          Powered by BVRIT ACM Student Chapter
        </p>
      </div>
    </div>
  );
};

export const CodeChefBadgeVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[16/11] bg-[#1a140f] text-white p-6 sm:p-8 rounded-xl border border-amber-900/60 shadow-2xl flex flex-col justify-between items-center text-center overflow-hidden select-none font-sans ${className}`}>
      {/* Warm Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a1d13] via-[#1a140f] to-[#120d09] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* Top Heading */}
      <div className="relative z-10">
        <p className="text-xs sm:text-sm text-slate-300 font-medium">
          Congratulations! You solved
        </p>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-200 tracking-tight mt-1 drop-shadow-md">
          50 Problems on CodeChef
        </h2>
      </div>

      {/* Central Bronze Badge Graphic */}
      <div className="relative z-10 my-auto py-2">
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto flex items-center justify-center">
          {/* Light Beams */}
          <div className="absolute inset-0 bg-gradient-to-t from-amber-400/20 to-transparent rounded-full blur-xl" />
          
          {/* Outer Gold Medallion */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-b from-[#fcd34d] via-[#d97706] to-[#78350f] p-1.5 shadow-2xl flex items-center justify-center border-2 border-amber-300">
            <div className="w-full h-full rounded-full bg-[#291b10] border border-amber-400/50 flex items-center justify-center p-3">
              {/* Puzzle Icon */}
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-inner">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-slate-950 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M19.439 7.85c0-1.57.8-2.35 1.561-2.35 1.4 0 2 1.3 2 2.85 0 2.2-2 3.65-3.561 3.65v3.15c0 1.57-.8 2.35-1.561 2.35-1.4 0-2-1.3-2-2.85 0-2.2 2-3.65 3.561-3.65v-3.15z" />
                  <path d="M12 2a4 4 0 0 0-4 4v2H6a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h2v2a4 4 0 0 0 8 0v-2h2a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4h-2V6a4 4 0 0 0-4-4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Title & Logo */}
      <div className="relative z-10 space-y-1">
        <h3 className="text-base sm:text-xl font-bold text-amber-100 tracking-wide">
          Problem Solver Bronze Badge
        </h3>
        <div className="text-xs sm:text-sm font-black tracking-widest text-slate-400 uppercase">
          CODECHEF
        </div>
      </div>
    </div>
  );
};
