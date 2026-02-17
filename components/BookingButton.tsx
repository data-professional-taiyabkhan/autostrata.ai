'use client'

const CALENDLY_URL = 'https://calendly.com/your-name/30min';

export default function BookingButton({ className, children }: { className?: string; children?: React.ReactNode }) {
    const openCalendly = () => {
        if (typeof window !== 'undefined' && (window as any).Calendly) {
            (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
        } else {
            window.open(CALENDLY_URL, '_blank');
        }
    };

    return (
        <button
            onClick={openCalendly}
            className={className || "px-8 py-3.5 rounded-lg bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold text-lg hover-lift hover-glow cursor-pointer"}
        >
            {children || 'Book a Call'}
        </button>
    );
}
