'use client';

import { useState } from 'react';
import Section from './Section';
import SpotlightCard from './ui/SpotlightCard';
import MagneticButton from './ui/MagneticButton';
import { Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log("Form submitted:", formState);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Contact Me">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-5 flex flex-col justify-between text-left gap-8">
          <div className="flex flex-col gap-6">
            <h3 className="text-xl md:text-3xl font-display font-bold text-display tracking-tight leading-tight">
              Let's create something extraordinary together.
            </h3>
            
            <p className="text-sm font-light text-on-surface-variant leading-relaxed">
              Have an exciting project, a role opportunity, or just want to chat about machine learning and full-stack engineering? Shoot me a message, and I'll get back to you within 24 hours.
            </p>
          </div>

          {/* Contact Coordinates */}
          <div className="flex flex-col gap-4">
            {/* Email item */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-foreground/5 bg-surface-dim/30">
              <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-foreground/5 flex items-center justify-center text-primary">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Write me</span>
                <a href="mailto:nirjhorakash07@gmail.com" className="text-xs sm:text-sm font-semibold text-display hover:text-tertiary transition-colors duration-300">
                  nirjhorakash07@gmail.com
                </a>
              </div>
            </div>

            {/* Location item */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-foreground/5 bg-surface-dim/30">
              <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-foreground/5 flex items-center justify-center text-tertiary">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Location</span>
                <span className="text-xs sm:text-sm font-semibold text-display">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>
          
          {/* Quick legal/HUD disclaimer */}
          <span className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant/40 hidden lg:block">
            Secure connection established // SSL active
          </span>
        </div>

        {/* Right Column: High Tech Glass Form */}
        <div className="lg:col-span-7 w-full">
          <SpotlightCard
            className="border border-foreground/10 p-6 md:p-8 flex flex-col justify-start h-full"
            spotlightColor="rgba(0, 219, 231, 0.07)"
          >
            {submitted ? (
              <div className="flex-1 flex flex-col justify-center items-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 mb-6 animate-pulse">
                  <Send className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-display font-bold text-display mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-on-surface-variant max-w-xs font-light">
                  Thank you for reaching out, Akash will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left w-full h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-name" className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant font-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-background border border-foreground/10 focus:border-primary/50 text-display rounded-xl px-4 py-3.5 text-sm outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-email" className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant font-bold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-background border border-foreground/10 focus:border-primary/50 text-display rounded-xl px-4 py-3.5 text-sm outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-subject" className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant font-bold">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="form-subject"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Project Collaboration"
                    className="w-full bg-background border border-foreground/10 focus:border-primary/50 text-display rounded-xl px-4 py-3.5 text-sm outline-none transition-colors duration-300"
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="form-message" className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant font-bold">
                    Your Message
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your project, timeline, or inquiries..."
                    className="w-full bg-background border border-foreground/10 focus:border-primary/50 text-display rounded-xl px-4 py-3.5 text-sm outline-none transition-colors duration-300 resize-none flex-1 min-h-[120px]"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <MagneticButton className="w-full sm:w-auto">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-foreground hover:bg-tertiary text-background hover:text-black font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-tertiary/20"
                    >
                      Send Message
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </MagneticButton>
                </div>
              </form>
            )}
          </SpotlightCard>
        </div>

      </div>
    </Section>
  );
}
