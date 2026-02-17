'use client'
import { useState } from 'react';

export default function ContactForm() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    const name = (data.get('name') as string || '').trim();
    const email = (data.get('email') as string || '').trim();
    const message = (data.get('message') as string || '').trim();

    if (!name) errs.name = 'Please enter your name';
    if (!email) errs.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Please enter a valid email';
    if (!message) errs.message = 'Please tell us about your project';

    return errs;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    if (!endpoint) {
      // Fallback: mailto
      window.location.href = `mailto:contact@autostrata.ai?subject=Website Enquiry from ${data.get('name')}&body=${data.get('message')}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) setStatus('sent');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="bg-white/5 border border-brand/30 rounded-2xl p-8 text-center shadow-glow">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold mb-2 text-brand">Message Sent!</h3>
        <p className="opacity-80">Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-glow space-y-5"
      noValidate
    >
      <div className="grid md:grid-cols-2 gap-5">
        {/* Name */}
        <div className="relative">
          <input
            type="text"
            name="name"
            id="contact-name"
            required
            placeholder=" "
            aria-label="Full name"
            className={`peer w-full bg-[#0f1428] border ${errors.name ? 'border-red-400/60' : 'border-white/15'} rounded-xl px-4 pt-6 pb-2 text-white outline-none transition-all focus:ring-2 focus:ring-brand/40 focus:border-brand/50`}
          />
          <label
            htmlFor="contact-name"
            className="absolute left-4 top-2 text-xs opacity-50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand"
          >
            Full Name *
          </label>
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            name="email"
            id="contact-email"
            required
            placeholder=" "
            aria-label="Email address"
            className={`peer w-full bg-[#0f1428] border ${errors.email ? 'border-red-400/60' : 'border-white/15'} rounded-xl px-4 pt-6 pb-2 text-white outline-none transition-all focus:ring-2 focus:ring-brand/40 focus:border-brand/50`}
          />
          <label
            htmlFor="contact-email"
            className="absolute left-4 top-2 text-xs opacity-50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand"
          >
            Email *
          </label>
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Phone (optional) */}
      <div className="relative">
        <input
          type="tel"
          name="phone"
          id="contact-phone"
          placeholder=" "
          aria-label="Phone number (optional)"
          className="peer w-full bg-[#0f1428] border border-white/15 rounded-xl px-4 pt-6 pb-2 text-white outline-none transition-all focus:ring-2 focus:ring-brand/40 focus:border-brand/50"
        />
        <label
          htmlFor="contact-phone"
          className="absolute left-4 top-2 text-xs opacity-50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand"
        >
          Phone (optional)
        </label>
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          name="message"
          id="contact-message"
          rows={5}
          required
          placeholder=" "
          aria-label="Your message"
          className={`peer w-full bg-[#0f1428] border ${errors.message ? 'border-red-400/60' : 'border-white/15'} rounded-xl px-4 pt-6 pb-2 text-white outline-none transition-all focus:ring-2 focus:ring-brand/40 focus:border-brand/50 resize-none`}
        />
        <label
          htmlFor="contact-message"
          className="absolute left-4 top-2 text-xs opacity-50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand"
        >
          Tell us about your project *
        </label>
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-3.5 rounded-xl bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold text-lg shadow-glow hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please email us at{' '}
          <a href="mailto:contact@autostrata.ai" className="underline">contact@autostrata.ai</a>.
        </p>
      )}
    </form>
  );
}
