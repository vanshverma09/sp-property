import React, { useState } from 'react';
import { Phone, Mail, MapPin, Share2, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

const FloatingSocialButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-3 select-none">
      {/* Expanded Quick Contact Actions */}
      <div
        className={`flex flex-col gap-2.5 transition-all duration-300 ease-out origin-bottom ${
          isExpanded
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Direct Phone Call */}
        <a
          href={companyInfo.socialLinks.phone}
          className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-navy-900 text-white hover:bg-navy-800 shadow-lg border border-navy-700 transition-all"
          aria-label="Call SP Properties"
        >
          <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold pr-1">Direct Call</span>
        </a>

        {/* Send Email */}
        <a
          href={`mailto:${companyInfo.contact.email}`}
          className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-navy-900 text-white hover:bg-navy-800 shadow-lg border border-navy-700 transition-all"
          aria-label="Email SP Properties"
        >
          <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Mail className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold pr-1">Send Email</span>
        </a>

        {/* Office Location in Sonipat */}
        <a
          href="https://maps.google.com/?q=Sector+14+Sonipat+Haryana"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-navy-900 text-white hover:bg-navy-800 shadow-lg border border-navy-700 transition-all"
          aria-label="Find SP Properties Office"
        >
          <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold pr-1">Sonipat Office</span>
        </a>
      </div>

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-full shadow-premium transition-all duration-300 font-semibold text-xs border ${
          isExpanded
            ? 'bg-navy-900 text-gold-400 border-gold-500/50'
            : 'bg-white text-navy-900 hover:bg-slate-50 border-slate-200'
        }`}
        aria-label="Quick contact menu"
      >
        <div className={`p-1 rounded-full transition-transform duration-300 ${isExpanded ? 'rotate-45 text-gold-400' : 'text-navy-900'}`}>
          <Share2 className="w-4 h-4" />
        </div>
        <span>{isExpanded ? 'Close' : 'Quick Connect'}</span>
      </button>
    </div>
  );
};

export default FloatingSocialButtons;
