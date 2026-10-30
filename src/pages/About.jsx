import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Users,
  Building2,
  FileCheck2,
  Clock,
  Compass,
  CheckCircle,
  Phone,
  MessageCircle,
  ArrowRight,
  MapPin,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { companyInfo } from '../data/companyInfo';
import aboutRealtyImg from '../assets/about_consultation.jpg';
import logoImg from '../assets/logo.jpeg';

const About = () => {
  const coreValues = [
    {
      title: '100% Registry & Title Verification',
      desc: 'Every plot, house, and commercial property recommended by us undergoes meticulous scrutiny of ownership deeds, municipal sanctions, and encumbrance checks.',
      icon: ShieldCheck,
    },
    {
      title: 'Deep-Rooted Sonipat Expertise',
      desc: 'From established sectors like Sector 14 and 15 to rapid development belts along GT Road and the KMP expressway, our local knowledge is unmatched.',
      icon: MapPin,
    },
    {
      title: 'Transparent, Direct Pricing',
      desc: 'We foster direct buyer-seller interaction. No inflated markups, no hidden costs—just honest valuation and fair deal execution.',
      icon: FileCheck2,
    },
    {
      title: 'End-to-End Client Care',
      desc: 'We assist you from the first site visit, through circle rate valuations and banking processes, up to final registry and physical possession.',
      icon: Award,
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-16 sm:py-20 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4 border border-gold-400/30">
            <span>Our Heritage & Values</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            About SP Properties
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            {companyInfo.tagline} • {companyInfo.hindiTagline}
          </p>
        </div>
      </div>

      {/* Main Story & Philosophy Section */}
      <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-navy-900 text-xs font-bold uppercase tracking-wider border border-navy-100">
              <span>Trusted Real Estate Advisory</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight leading-snug">
              Your Dependable Property Partner Across Sonipat & NCR
            </h2>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Founded on the pillars of integrity, genuine advisory, and client empowerment, <strong>SP Properties</strong> is a full-service property dealing consultancy headquartered in Sonipat, Haryana.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm">
              We understand that purchasing a home or securing commercial land is one of life’s most pivotal financial milestones. Our mission is to eliminate confusion, safeguard your hard-earned savings against unverified deals, and guide you towards prime real estate assets that deliver exceptional long-term appreciation.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <span>Specialists in HUDA Sector Plots (Sector 8, 12, 14, 15, 23)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <span>Premium Villas & Township Properties in Omaxe City & TDI Kundli</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <span>Strategic Commercial Belts along GT Road & KMP Corridor</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <img
                src={aboutRealtyImg}
                alt="Real Estate Consultants in Sonipat"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-xs uppercase font-bold text-gold-400 block tracking-wider">
                    Our Commitment
                  </span>
                  <p className="text-sm font-medium mt-1">
                    "Honest consultations, legal clarity, and transparent deals for every client."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mt-20 pt-16 border-t border-slate-100">
          <SectionHeading
            badge="Why Clients Rely On Us"
            title="Our Foundational Principles"
            subtitle="How we consistently deliver successful property transactions with zero surprises."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {coreValues.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 hover:bg-white p-7 rounded-2xl border border-slate-200/80 hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-navy-900 rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden border border-navy-800 shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Ready to Discuss Your Property Plans in Sonipat?
            </h3>
            <p className="text-sm text-slate-300">
              Call us directly or send a message on WhatsApp for immediate property assistance and scheduled site visits.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={companyInfo.socialLinks.phone}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call {companyInfo.contact.phoneDisplay}</span>
              </a>
              <a
                href={companyInfo.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
