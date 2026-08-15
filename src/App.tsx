/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { CodingProfilesSection } from './components/CodingProfilesSection';
import { LinkedInSection } from './components/LinkedInSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DataConfigHelper } from './components/DataConfigHelper';

export default function App() {
  const [configHelperOpen, setConfigHelperOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white antialiased font-sans">
      {/* Navigation Bar */}
      <Navbar onOpenConfigHelper={() => setConfigHelperOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative">
        <HomeSection onOpenConfigHelper={() => setConfigHelperOpen(true)} />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <CodingProfilesSection />
        <LinkedInSection />
        <CertificatesSection onOpenConfigHelper={() => setConfigHelperOpen(true)} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Centralized Configuration Helper Modal */}
      <DataConfigHelper
        isOpen={configHelperOpen}
        onClose={() => setConfigHelperOpen(false)}
      />
    </div>
  );
}

