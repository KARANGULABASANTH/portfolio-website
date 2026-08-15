import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  FileCode,
  X,
  Copy,
  Check,
  Code2,
  CheckCircle2,
  FolderGit2,
  Award,
  Layers,
  Sparkles
} from 'lucide-react';

interface DataConfigHelperProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DataConfigHelper: React.FC<DataConfigHelperProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'raw' | 'snippets'>('overview');

  if (!isOpen) return null;

  const copyConfigJson = () => {
    navigator.clipboard.writeText(JSON.stringify(portfolioData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projectSnippet = `// Add this inside 'projects: []' in src/data/portfolioData.ts:
{
  id: "project-1",
  name: "My Project Title",
  description: "A comprehensive web app built for solving...",
  technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
  features: [
    "User authentication & profile management",
    "Real-time data visualization and filtering",
    "Responsive mobile-first layout"
  ],
  githubUrl: "https://github.com/your-username/my-project",
  liveDemoUrl: "https://my-project.vercel.app",
  dateOrYear: "2024"
}`;

  const certSnippet = `// Add this inside 'certificates: []' in src/data/portfolioData.ts:
{
  id: "cert-1",
  name: "Data Structures & Algorithms in Java",
  issuingOrganization: "Coursera / Stanford Online",
  date: "July 2024",
  certificateUrl: "https://coursera.org/verify/YOUR_ID",
  description: "Comprehensive coverage of asymptotic analysis, trees, graphs, and dynamic programming."
}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Centralized Data Configuration</h3>
              <p className="text-xs text-slate-400 font-mono">src/data/portfolioData.ts</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Nav Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800 bg-slate-950/40">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-2 text-xs font-medium border-b-2 transition-all ${
              activeTab === 'overview'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Structure & Guide
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('snippets')}
            className={`px-3 py-2 text-xs font-medium border-b-2 transition-all ${
              activeTab === 'snippets'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Ready-to-use Code Snippets
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('raw')}
            className={`px-3 py-2 text-xs font-medium border-b-2 transition-all ${
              activeTab === 'raw'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Current State (JSON)
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-900/40 text-xs text-indigo-200 leading-relaxed">
                <span className="font-semibold text-indigo-300 block mb-1 text-sm">
                  Single Source of Truth
                </span>
                All 8 requested sections (Personal Info, Contact, Profiles, Education, Certificates, Interests, Skills, Projects) read dynamically from <code className="text-cyan-300 font-mono">src/data/portfolioData.ts</code>. You never have to modify UI code to update your profile.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="font-semibold text-white text-xs block mb-1">1. Personal & Contact</span>
                  <p className="text-[11px] text-slate-400">
                    Edit name, role tagline, bio, phone, email, and location in <code className="text-indigo-400 font-mono">personal</code> & <code className="text-indigo-400 font-mono">contact</code> objects.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="font-semibold text-white text-xs block mb-1">2. Social & Coding Profiles</span>
                  <p className="text-[11px] text-slate-400">
                    Provide your URLs for GitHub, LinkedIn, LeetCode, Codeforces, HackerRank, CodeChef in <code className="text-indigo-400 font-mono">social</code>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="font-semibold text-white text-xs block mb-1">3. Education & Schooling</span>
                  <p className="text-[11px] text-slate-400">
                    Current B.Tech CSE details and 10th/12th school institutions in <code className="text-indigo-400 font-mono">education</code>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="font-semibold text-white text-xs block mb-1">4. Skills, Projects & Certs</span>
                  <p className="text-[11px] text-slate-400">
                    Structured 6-category skill buckets, project cards, and verification certificates in their respective arrays.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'snippets' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                  <FolderGit2 className="w-4 h-4 text-indigo-400" />
                  <span>How to add a Project</span>
                </h4>
                <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 overflow-x-auto">
                  {projectSnippet}
                </pre>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>How to add a Certificate</span>
                </h4>
                <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 overflow-x-auto">
                  {certSnippet}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'raw' && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400">Readonly Active Configuration:</span>
                <button
                  type="button"
                  onClick={copyConfigJson}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy JSON'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-indigo-300 overflow-x-auto max-h-96">
                {JSON.stringify(portfolioData, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Edit <code className="text-indigo-400 font-mono">src/data/portfolioData.ts</code> directly in the code editor anytime.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
