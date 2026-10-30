import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Clock } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';
import { companyInfo } from '../data/companyInfo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle sticky navbar elevation on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-navy-900 text-slate-200 text-xs border-b border-navy-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Sector 14, Sonipat, Haryana</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>Mon - Sun: 9:30 AM - 8:00 PM</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={`mailto:${companyInfo.contact.email}`}
              className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>{companyInfo.contact.email}</span>
            </a>
            <a
              href={companyInfo.socialLinks.phone}
              className="flex items-center gap-1.5 font-semibold text-gold-300 hover:text-gold-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{companyInfo.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-md border-b border-slate-100' : 'border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-400 shadow-sm group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                <img
                  src={logoImg}
                  alt="SP Properties Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-navy-900 group-hover:text-navy-700 transition-colors leading-tight">
                  SP <span className="text-gold-600">PROPERTIES</span>
                </span>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Sonipat, Haryana
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {companyInfo.navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold tracking-wide transition-all duration-200 relative py-1 ${
                      isActive
                        ? 'text-navy-900 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold-500'
                        : 'text-slate-600 hover:text-navy-900'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md border border-navy-700 group"
              >
                <span>Contact Us</span>
                <span className="ml-2 w-1.5 h-1.5 rounded-full bg-gold-400 group-hover:scale-125 transition-transform"></span>
              </Link>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-3 pb-6 space-y-2">
              {companyInfo.navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-navy-50 text-navy-900 font-bold border-l-4 border-gold-500'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-navy-900'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 transition-colors shadow-sm"
                >
                  Contact Business
                </Link>

                <a
                  href={companyInfo.socialLinks.phone}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-navy-900 bg-navy-50 hover:bg-navy-100 border border-navy-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-600" />
                  <span>Call {companyInfo.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
