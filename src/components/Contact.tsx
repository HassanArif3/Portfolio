import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Send, CheckCircle2, ClipboardCheck, Clipboard, Phone } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export function Contact() {
  const { email, githubUrl, linkedinUrl, whatsappUrl } = portfolioData.personalInfo;
  
  // Contact form submission states
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    
    // Mimic real submit delays
    try {
      // NOTE: Formspree endpoint can be injected here
      // For instance: fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: JSON.stringify(formState) })
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    } catch (err) {
      console.error("Form submission failed", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0b0f17]/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-brand-cyan" />
            <span className="font-mono text-xs tracking-widest text-brand-cyan uppercase">04 / Contact</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
        </div>

        {/* Information Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-display font-semibold text-2xl text-white">
                Have a project, website, or automation idea?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                I’m available for freelance projects, portfolio collaborations, and remote opportunities. If you need a modern website, business web app, or automation workflow, feel free to contact me.
              </p>
            </div>

            {/* Direct Details Card */}
            <div className="rounded-2xl glass-panel p-6 border border-white/5 flex flex-col gap-6">
              
              {/* Copy Email Helper */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/20 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-brand-cyan/10 text-brand-cyan">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Email</span>
                    <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg hover:bg-white/5 text-gray-500 hover:text-brand-cyan transition-colors"
                  title="Copy email address"
                  aria-label="Copy email to clipboard"
                >
                  {copied ? <ClipboardCheck className="w-4 h-4 text-emerald-400" /> : <Clipboard className="w-4 h-4" />}
                </button>
              </div>

              {/* Whatsapp details (if provided) */}
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-purple/20 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-brand-purple/10 text-brand-purple">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Phone</span>
                    <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      0327 6284969
                    </span>
                  </div>
                </a>
              )}

              {/* Location details */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/20 transition-all group">
                <div className="p-2.5 rounded-lg bg-brand-cyan/10 text-brand-cyan">
                  <span className="w-4 h-4 flex justify-center items-center font-bold">📍</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Location</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    Gujrat, Pakistan / Remote
                  </span>
                </div>
              </div>

            </div>

            {/* Social Anchors */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mr-2">Connect:</span>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-brand-cyan/20 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-brand-purple/20 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Modern glassmorphic Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="flex flex-col gap-6"
                  >
                    {/* Form Description */}
                    <p className="font-mono text-xs text-brand-purple tracking-wider uppercase mb-2">
                      Send a Message
                    </p>

                    {/* Name Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#080a0f] border border-white/10 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 focus:bg-[#0b0f17] transition-all"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="e.g. jane@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#080a0f] border border-white/10 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 focus:bg-[#0b0f17] transition-all"
                      />
                    </div>
                    
                    {/* Project Type */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="projectType" className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        className="w-full px-4 py-3 rounded-xl bg-[#080a0f] border border-white/10 text-sm text-white focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 focus:bg-[#0b0f17] transition-all"
                        defaultValue="Website Development"
                      >
                        <option value="Website Development" className="bg-[#0b0f17]">Website Development</option>
                        <option value="Ecommerce Website" className="bg-[#0b0f17]">Ecommerce Website</option>
                        <option value="Business Web App" className="bg-[#0b0f17]">Business Web App</option>
                        <option value="AI Automation" className="bg-[#0b0f17]">AI Automation</option>
                        <option value="Other" className="bg-[#0b0f17]">Other</option>
                      </select>
                    </div>

                    {/* Message Textarea */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, timeline, or requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-[#080a0f] border border-white/10 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 focus:bg-[#0b0f17] transition-all resize-none"
                      />
                    </div>

                    {/* Formspree instructions inline tip */}
                    <p className="text-[10px] font-mono text-gray-500 leading-relaxed">
                      💡 Note: This form is for UI presentation. For direct contact, email me at <strong>hassanarif4625@gmail.com</strong>.
                    </p>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-purple text-white font-medium text-sm tracking-wide transition-all duration-300 hover:shadow-[0_4px_25px_rgba(6,182,212,0.3)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  // Success State screen
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-6 animate-bounce" />
                    <h3 className="font-display font-bold text-2xl text-white mb-2">
                      Message Received!
                    </h3>
                    <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-8">
                      Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl border border-white/10 hover:border-brand-cyan/30 text-xs font-mono tracking-wider text-gray-400 hover:text-white transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
