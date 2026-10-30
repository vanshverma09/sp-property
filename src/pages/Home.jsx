import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { ArrowRight, ShieldCheck, MapPin, Building, Key } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="py-16 sm:py-24 bg-gradient-to-b from-navy-50/50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Welcome to SP Properties"
          title="Premier Real Estate Dealing in Sonipat, Haryana"
          subtitle="Your trusted partner for residential plots, luxury villas, commercial spaces, and high-return investment opportunities."
        />

        {/* Placeholder container */}
        <div className="mt-8 p-8 sm:p-12 bg-white rounded-2xl border border-slate-200/80 shadow-subtle text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 flex items-center justify-center mx-auto mb-4">
            <Building className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-navy-900 mb-2">
            Home Page Ready for Content
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            The core layout, header, footer, floating contact widgets, and color palette have been initialized. Detailed sections will be built in the next step.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 transition-colors shadow-sm"
            >
              <span>Explore Contact Page</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-navy-900 bg-navy-50 hover:bg-navy-100 border border-navy-200 transition-colors"
            >
              <span>Learn About Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
