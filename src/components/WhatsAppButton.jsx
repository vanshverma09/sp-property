import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block absolute right-full mr-3.5 bg-navy-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg border border-navy-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        <span>Chat on WhatsApp</span>
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-navy-900 rotate-45 border-r border-t border-navy-700"></div>
      </div>

      {/* Main Floating WhatsApp Button */}
      <a
        href={companyInfo.socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none"
        aria-label="Contact SP Properties on WhatsApp"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75"></span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 relative z-10" />

        {/* Online Indicator Badge */}
        <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-gold-400 border-2 border-white rounded-full z-20"></span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
