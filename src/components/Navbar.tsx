import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, Code2, GraduationCap, Sparkles, Send, FileCode } from 'lucide-react';

interface NavbarProps {
  onOpenConfigHelper?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConfigHelper }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Profiles', href: '#profiles' },
    { name: 'LinkedIn', href: '#linkedin' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const displayName = portfolioData.personal.shortName.startsWith('[')
    ? 'Student Portfolio'
    : portfolioData.personal.shortName;

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 p-[1.5px] shadow-sm group-hover:shadow-indigo-500/25 transition-all overflow-hidden">
              {portfolioData.personal.profilePhoto ? (
                <img
                  src={portfolioData.personal.profilePhoto}
                  alt={displayName}
                  className="w-full h-full object-cover rounded-[9px]"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-indigo-400 group-hover:text-cyan-300 transition-colors" />
                </div>
              )}
            </div>
            <div>
              <span className="font-semibold text-slate-100 text-base sm:text-lg tracking-tight block">
                {displayName}
              </span>
              <span className="text-xs text-indigo-400/90 flex items-center gap-1 font-mono">
                <GraduationCap className="w-3 h-3 inline" /> CSE Undergraduate
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/80 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenConfigHelper && (
              <button
                type="button"
                onClick={onOpenConfigHelper}
                id="btn-open-config-guide"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-indigo-300 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-all"
                title="View Centralized Config Information"
              >
                <FileCode className="w-3.5 h-3.5 text-indigo-400" />
                <span>Config File</span>
              </button>
            )}

            <a
              href="#contact"
              id="btn-navbar-contact"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-md shadow-indigo-600/20 active:scale-95 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            {onOpenConfigHelper && (
              <button
                type="button"
                onClick={onOpenConfigHelper}
                id="btn-mobile-config-guide"
                className="p-2 rounded-lg text-slate-300 bg-slate-800 border border-slate-700"
              >
                <FileCode className="w-4 h-4 text-indigo-400" />
              </button>
            )}
            <button
              type="button"
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800 border border-slate-700 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="sm:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-5 space-y-1 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`mobile-link-${link.name.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500"
            >
              <Send className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
