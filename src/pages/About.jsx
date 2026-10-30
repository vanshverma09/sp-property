import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Award, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About SP Properties"
          title="Sonipat's Most Trusted Property Advisors"
          subtitle="Dedicated to providing honest property advisory, transparent transactions, and maximum investment returns across Sonipat and NCR."
        />

        <div className="mt-8 p-8 sm:p-12 bg-navy-50/50 rounded-2xl border border-slate-200/80 text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-navy-900 mb-2">
            About Us Page Ready
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            Placeholder ready for company story, milestones, mission, leadership, and customer trust statistics.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 transition-colors shadow-sm"
          >
            <span>Contact Our Team</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
