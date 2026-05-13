'use client'

const CALENDLY_URL = 'https://calendly.com/contact-autostrata/30min';

export default function BookingButton({ className, children }: { className?: string; children?: React.ReactNode }) {
  const openCalendly = () => {
    // Try the popup widget first
    if (typeof window !== 'undefined' && (window as any).Calendly?.initPopupWidget) {
      (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
      return;
    }
    // Fallback: open in new tab
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      type="button"
      onClick={openCalendly}
      className={className || "px-8 py-3.5 rounded-full bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold text-lg hover-lift hover-glow cursor-pointer"}
    >
      {children || 'Book a Call'}
    </button>
  );
}
