'use client'
import { useState } from 'react';

export default function ContactForm(){
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const [status, setStatus] = useState<'idle'|'sent'|'error'>('idle');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!endpoint) return; // fallback to default form behavior
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(endpoint, { method:'POST', body: data });
      if (res.ok) setStatus('sent'); else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <form action={endpoint ? undefined : 'mailto:contact@autostrata.ai'} method={endpoint ? 'POST' : 'get'} onSubmit={onSubmit} className="space-y-3 bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow">
      <div className="grid md:grid-cols-2 gap-3">
        <label className="grid gap-1">
          <span>Full name</span>
          <input name="name" required className="bg-[#0f1428] border border-white/15 rounded-md px-3 py-2 outline-none focus:ring-4 focus:ring-brand/30" />
        </label>
        <label className="grid gap-1">
          <span>Email</span>
          <input type="email" name="email" required className="bg-[#0f1428] border border-white/15 rounded-md px-3 py-2 outline-none focus:ring-4 focus:ring-brand/30" />
        </label>
      </div>
      <label className="grid gap-1">
        <span>Company (optional)</span>
        <input name="company" className="bg-[#0f1428] border border-white/15 rounded-md px-3 py-2 outline-none focus:ring-4 focus:ring-brand/30" />
      </label>
      <label className="grid gap-1">
        <span>What do you need?</span>
        <textarea name="message" rows={5} required className="bg-[#0f1428] border border-white/15 rounded-md px-3 py-2 outline-none focus:ring-4 focus:ring-brand/30" />
      </label>
      <button type="submit" className="inline-flex items-center justify-center border border-white/10 rounded-lg px-4 py-2 font-semibold bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] shadow-glow hover:opacity-90 transition-opacity">
        {status === 'idle' ? 'Send message' : status === 'sent' ? 'Message sent!' : 'Try again'}
      </button>
      {status === 'sent' && <p className="text-green-300">Thanks! We'll get back to you shortly.</p>}
      {status === 'error' && <p className="text-red-300">Something went wrong. Email us at contact@autostrata.ai</p>}
    </form>
  );
}
