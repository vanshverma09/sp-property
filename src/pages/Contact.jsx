import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

const Contact = () => {
  return (
    <div className="py-16 sm:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Contact SP Properties Sonipat"
          subtitle="Reach out to discuss property purchases, plot sales, rental inquiries, or site visit bookings in Sonipat."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-navy-900 text-white rounded-2xl p-6 sm:p-8 shadow-premium border border-navy-800">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-2">
              Office Information
            </span>
            <h3 className="text-2xl font-bold mb-4">
              Visit Our Office in Sonipat
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-8">
              We welcome you to visit our office for tea, detailed property portfolios, and one-on-one consultation with our senior advisors.
            </p>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Office Address</h4>
                  <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                    {companyInfo.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Call / WhatsApp</h4>
                  <a
                    href={companyInfo.socialLinks.phone}
                    className="text-gold-300 hover:text-gold-200 text-xs mt-1 block font-medium"
                  >
                    {companyInfo.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email Address</h4>
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className="text-slate-300 hover:text-gold-300 text-xs mt-1 block"
                  >
                    {companyInfo.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Working Hours</h4>
                  <p className="text-slate-300 text-xs mt-1">
                    {companyInfo.contact.workingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
