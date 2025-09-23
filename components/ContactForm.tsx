'use client'
import { useState } from 'react';

export default function ContactForm(){
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const [status, setStatus] = useState<'idle'|'sent'|'error'>('idle');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!endpoint) {
      console.log('No Formspree endpoint configured, using fallback');
      return; // fallback to default form behavior
    }
    e.preventDefault();
    setStatus('idle'); // Reset status
    const data = new FormData(e.currentTarget);
    
    try {
      console.log('Submitting to:', endpoint);
      const res = await fetch(endpoint, { 
        method: 'POST', 
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      console.log('Response status:', res.status);
      const result = await res.json();
      console.log('Response:', result);
      
      if (res.ok) {
        setStatus('sent');
      } else {
        console.error('Form submission error:', result);
        setStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="space-y-3 bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow">
      {process.env.NODE_ENV === 'development' && (
        <div className="text-xs text-gray-400 mb-2">
          Debug: {endpoint ? `Using Formspree: ${endpoint}` : 'Using mailto fallback'}
        </div>
      )}
      <form action={endpoint ? undefined : 'mailto:contact@autostrata.ai'} method={endpoint ? 'POST' : 'get'} onSubmit={onSubmit} className="space-y-3">
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
    </div>
  );
}
