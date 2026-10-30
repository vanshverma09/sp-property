import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, ExternalLink } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

const Contact = () => {
  return (
    <div className="py-16 sm:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Contact SP Properties Sonipat"
          subtitle="Reach out to discuss property purchases, plot sales, investment guidance, or site visit bookings in Sonipat."
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
              We welcome you to visit our office for tea, detailed property consultations, and direct discussion regarding approved plots and prime commercial opportunities in Sonipat.
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
                  <p className="text-[11px] text-gold-400/80 mt-0.5 italic">
                    {companyInfo.contact.addressPlaceholderNote}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Call / Direct Line</h4>
                  <a
                    href={companyInfo.socialLinks.phone}
                    className="text-gold-300 hover:text-gold-200 text-xs mt-1 block font-medium"
                  >
                    {companyInfo.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-700/60 flex items-center justify-center text-[#25D366] flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">WhatsApp Inquiry</h4>
                  <a
                    href={companyInfo.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 text-xs mt-1 block font-medium"
                  >
                    Chat on WhatsApp ({companyInfo.contact.whatsappDisplay})
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

            <div className="pt-6 mt-8 border-t border-navy-800">
              <a
                href={companyInfo.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions to Office</span>
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Embedded Map Section on Contact Page */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-slate-200 shadow-premium min-h-[400px]">
          <iframe
            title="SP Properties Office Map"
            src={companyInfo.contact.googleMapsEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
