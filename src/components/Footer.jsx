import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building2,
  ExternalLink,
} from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import logoImg from '../assets/logo.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t-2 border-gold-500/40">
      {/* Top Banner / Call to Action Strip */}
      <div className="border-b border-navy-800/80 bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-wide">
                Looking to Buy, Sell, or Invest in Sonipat?
              </h3>
              <p className="text-sm text-slate-400">
                Connect with our local property specialists for genuine rates and verified properties.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all shadow-md"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Business Identity & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold-400 shadow-sm flex-shrink-0">
                <img
                  src={logoImg}
                  alt="SP Properties"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  SP <span className="text-gold-400">PROPERTIES</span>
                </span>
                <span className="block text-xs text-gold-300 font-medium">
                  {companyInfo.hindiTagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {companyInfo.description}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-gold-400 bg-gold-400/10 px-3 py-1.5 rounded-md border border-gold-400/20 w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Verified Deals & Clear Titles</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold tracking-wider uppercase border-b border-navy-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {companyInfo.navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-slate-400 hover:text-gold-300 transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-600 group-hover:bg-gold-400 transition-colors"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 text-slate-400 hover:text-gold-300 transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-600 group-hover:bg-gold-400 transition-colors"></span>
                  <span>Book Property Visit</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Prime Locations */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold tracking-wider uppercase border-b border-navy-800 pb-2">
              Key Areas in Sonipat
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {companyInfo.popularAreas.map((area, index) => (
                <li key={index} className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold-400/80 flex-shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold tracking-wider uppercase border-b border-navy-800 pb-2">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 leading-relaxed">
                  {companyInfo.contact.address}
                </span>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={companyInfo.socialLinks.phone}
                  className="text-slate-300 hover:text-gold-300 font-medium transition-colors"
                >
                  {companyInfo.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="text-slate-300 hover:text-gold-300 transition-colors"
                >
                  {companyInfo.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span className="text-slate-400 text-xs">
                  {companyInfo.contact.workingHours}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className="block text-xs uppercase font-semibold text-slate-400 mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={companyInfo.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-navy-900 border border-navy-800 hover:border-gold-400/50 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:bg-navy-800 transition-all"
                  aria-label="WhatsApp"
                >
                  <span className="text-xs font-bold">WA</span>
                </a>
                <a
                  href={companyInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-navy-900 border border-navy-800 hover:border-gold-400/50 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:bg-navy-800 transition-all"
                  aria-label="Facebook"
                >
                  <span className="text-xs font-bold">FB</span>
                </a>
                <a
                  href={companyInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-navy-900 border border-navy-800 hover:border-gold-400/50 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:bg-navy-800 transition-all"
                  aria-label="Instagram"
                >
                  <span className="text-xs font-bold">IG</span>
                </a>
                <a
                  href={companyInfo.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-navy-900 border border-navy-800 hover:border-gold-400/50 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:bg-navy-800 transition-all"
                  aria-label="YouTube"
                >
                  <span className="text-xs font-bold">YT</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location Badge */}
        <div className="mt-12 pt-8 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {companyInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Property Dealer & Real Estate Advisory • Sonipat (NCR), Haryana</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
