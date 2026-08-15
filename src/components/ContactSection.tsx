import React, { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  MessageSquare,
  Linkedin,
  Github,
  ExternalLink,
  AlertCircle,
  Clock,
  Sparkles,
  Info,
  CheckCircle2
} from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const { contact, social, personal } = portfolioData;

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lastDraftMailto, setLastDraftMailto] = useState<string | null>(null);

  const isPlaceholder = (val?: string) => !val || val.startsWith('[') || val.trim() === '';

  const hasPhone = !isPlaceholder(contact.phoneNumber);
  const hasEmail = !isPlaceholder(contact.email);
  const hasLocation = !isPlaceholder(contact.location);
  const hasLinkedIn = !isPlaceholder(social.linkedin);
  const hasGithub = !isPlaceholder(social.github);

  const handleCopy = (text: string, fieldName: string) => {
    if (isPlaceholder(text)) return;
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  // Validation logic
  const validate = (values: FormState): FormErrors => {
    const errs: FormErrors = {};

    if (!values.name.trim()) {
      errs.name = 'Please enter your full name';
    } else if (values.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!values.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      errs.email = 'Please enter a valid email address (e.g. name@example.com)';
    }

    if (!values.subject.trim()) {
      errs.subject = 'Please enter a subject for your message';
    } else if (values.subject.trim().length < 3) {
      errs.subject = 'Subject should be at least 3 characters';
    }

    if (!values.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (values.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }

    return errs;
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const currentErrors = validate(formData);
    setErrors(currentErrors);
  };

  const handleChange = (field: keyof FormState, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    if (touched[field]) {
      setErrors(validate(updated));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const recipientEmail = hasEmail ? contact.email : 'basanth9d@gmail.com';
      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Hi Basanth,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
      )}`;

      setLastDraftMailto(mailtoUrl);
      setFormSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setTouched({});
    setFormSubmitted(false);
    setLastDraftMailto(null);
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-3.5 shadow-sm">
          <Mail className="w-3.5 h-3.5 text-cyan-400" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Contact & Direct Reachout
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2.5 font-normal">
          Feel free to connect directly via email, phone, or professional networks for internships, engineering projects, or technical discussions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Contact Cards & Social Quick-Links (5 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Email ID Card */}
          <div
            id="card-contact-email"
            className="group relative bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 shadow-xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-600/15 border border-indigo-500/30 text-indigo-400 group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Email Address
                  </span>
                  {hasEmail ? (
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-indigo-300 transition-colors block mt-0.5 truncate"
                      title="Send email"
                    >
                      {contact.email}
                    </a>
                  ) : (
                    <span className="text-sm sm:text-base font-semibold text-slate-500 italic block mt-0.5">
                      [Email to be configured]
                    </span>
                  )}
                  <p className="text-xs text-slate-400 mt-1">Direct inquiries & technical reachouts</p>
                </div>
              </div>

              {hasEmail && (
                <button
                  type="button"
                  id="btn-copy-email"
                  onClick={() => handleCopy(contact.email, 'email')}
                  className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>

            {hasEmail && (
              <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Compose in mail client</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                {copiedField === 'email' && (
                  <span className="text-[11px] font-mono text-emerald-400">Copied to clipboard!</span>
                )}
              </div>
            )}
          </div>

          {/* Phone Number Card */}
          <div
            id="card-contact-phone"
            className="group relative bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 shadow-xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-600/15 border border-emerald-500/30 text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Phone Number
                  </span>
                  {hasPhone ? (
                    <a
                      href={`tel:${contact.phoneNumber.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-emerald-300 transition-colors block mt-0.5"
                    >
                      {contact.phoneNumber}
                    </a>
                  ) : (
                    <span className="text-sm sm:text-base font-semibold text-slate-500 italic block mt-0.5">
                      [Phone to be configured]
                    </span>
                  )}
                  <p className="text-xs text-slate-400 mt-1">Available for voice calls & SMS</p>
                </div>
              </div>

              {hasPhone && (
                <button
                  type="button"
                  id="btn-copy-phone"
                  onClick={() => handleCopy(contact.phoneNumber, 'phone')}
                  className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>

            {hasPhone && (
              <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={`tel:${contact.phoneNumber.replace(/\s+/g, '')}`}
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Direct phone call (tel:)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                {copiedField === 'phone' && (
                  <span className="text-[11px] font-mono text-emerald-400">Copied to clipboard!</span>
                )}
              </div>
            )}
          </div>

          {/* Social Links: LinkedIn & GitHub Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* LinkedIn Card */}
            <a
              href={hasLinkedIn ? social.linkedin : 'https://www.linkedin.com'}
              target="_blank"
              rel="noreferrer"
              id="link-contact-linkedin"
              className="group p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 flex items-center justify-between transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-white group-hover:text-blue-300 block transition-colors">
                    LinkedIn
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 block truncate">
                    Professional Network
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors shrink-0" />
            </a>

            {/* GitHub Card */}
            <a
              href={hasGithub ? social.github : 'https://github.com'}
              target="_blank"
              rel="noreferrer"
              id="link-contact-github"
              className="group p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-600 flex items-center justify-between transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-white group-hover:text-slate-200 block transition-colors">
                    GitHub
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 block truncate">
                    Open Source Code
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-200 transition-colors shrink-0" />
            </a>
          </div>

          {/* Location Card */}
          <div
            id="card-contact-location"
            className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 flex items-center gap-3.5 backdrop-blur-sm"
          >
            <div className="p-2.5 rounded-xl bg-violet-600/15 border border-violet-500/30 text-violet-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Current Location
              </span>
              <span
                className={`text-xs sm:text-sm font-semibold block mt-0.5 ${
                  hasLocation ? 'text-slate-200' : 'text-slate-500 italic'
                }`}
              >
                {hasLocation ? contact.location : '[Location to be configured]'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Frontend Contact Form (7 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative">
            {/* Form Card Header */}
            <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-600/15 border border-cyan-500/30 text-cyan-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Send a Direct Message</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Frontend-ready communication form</p>
                </div>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-slate-950 border border-slate-800 text-slate-400">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                Validated Inputs
              </span>
            </div>

            {formSubmitted ? (
              /* Success / Frontend Review Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4 space-y-6"
              >
                <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-3">
                  <div className="flex items-center gap-2.5 text-emerald-400 font-semibold text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Message Form Validated & Prepared!</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Your inquiry has been checked and formatted. Since this frontend does not use a hidden background service, you can trigger your email application directly with the drafted details pre-filled.
                  </p>
                </div>

                {/* Draft Summary Box */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-slate-400">
                    <span>Sender:</span>
                    <span className="text-white font-sans">{formData.name} &lt;{formData.email}&gt;</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Subject:</span>
                    <span className="text-white font-sans">{formData.subject}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 text-slate-300 font-sans line-clamp-3">
                    "{formData.message}"
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {lastDraftMailto && (
                    <a
                      href={lastDraftMailto}
                      id="btn-open-email-client"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all shadow-lg shadow-indigo-600/25"
                    >
                      <Send className="w-4 h-4" />
                      <span>Open in Email App (mailto:)</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 active:scale-95 transition-colors"
                  >
                    Draft Another Message
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 pt-2">
                  <Info className="w-3.5 h-3.5 shrink-0" />
                  <span>No backend API is configured yet. Direct client mailto guarantees reliable delivery.</span>
                </div>
              </motion.div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Row: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 transition-colors focus:outline-none ${
                        touched.name && errors.name
                          ? 'border-rose-500/80 focus:border-rose-500 ring-1 ring-rose-500/20'
                          : 'border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {touched.name && errors.name && (
                      <p className="flex items-center gap-1 text-[11px] text-rose-400 mt-1 font-medium">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 transition-colors focus:outline-none ${
                        touched.email && errors.email
                          ? 'border-rose-500/80 focus:border-rose-500 ring-1 ring-rose-500/20'
                          : 'border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="flex items-center gap-1 text-[11px] text-rose-400 mt-1 font-medium">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    onBlur={() => handleBlur('subject')}
                    placeholder="e.g. Internship Inquiry / Software Engineering Project Collaboration"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 transition-colors focus:outline-none ${
                      touched.subject && errors.subject
                        ? 'border-rose-500/80 focus:border-rose-500 ring-1 ring-rose-500/20'
                        : 'border-slate-800 focus:border-cyan-500'
                    }`}
                  />
                  {touched.subject && errors.subject && (
                    <p className="flex items-center gap-1 text-[11px] text-rose-400 mt-1 font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    placeholder="Write your message, project details, or inquiry here..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 transition-colors resize-none focus:outline-none ${
                      touched.message && errors.message
                        ? 'border-rose-500/80 focus:border-rose-500 ring-1 ring-rose-500/20'
                        : 'border-slate-800 focus:border-cyan-500'
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p className="flex items-center gap-1 text-[11px] text-rose-400 mt-1 font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="btn-submit-contact-form"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 shadow-lg shadow-indigo-600/25 active:scale-[0.99] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Prepare Message & Send</span>
                </button>

                {/* Honest Frontend Status Notice */}
                <div className="flex items-start gap-2 text-[11px] text-slate-400 bg-slate-950/50 p-3 rounded-xl border border-slate-800/80">
                  <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Frontend validation enabled. Submitting formats your message and triggers a direct draft to <strong className="text-slate-300 font-mono">{hasEmail ? contact.email : 'basanth9d@gmail.com'}</strong> without silent server reliance.
                  </span>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
