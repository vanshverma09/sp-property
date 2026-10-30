import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, MessageSquare, AlertCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

const propertyTypes = [
  'Residential Plot',
  'Independent Villa / House',
  'Commercial Showroom / Shop',
  'Builder Floor / Apartment',
  'Agricultural Land',
  'Industrial Plot / Warehouse',
];

const budgetRanges = [
  'Under ₹50 Lakh',
  '₹50 Lakh - ₹1 Crore',
  '₹1 Crore - ₹2 Crore',
  '₹2 Crore - ₹5 Crore',
  'Above ₹5 Crore',
];

const preferredLocations = [
  'Sector 14, Sonipat',
  'Sector 15, Sonipat',
  'Sector 8 & 12, Sonipat',
  'Omaxe City, Sonipat',
  'TDI City, Kundli',
  'Express City / GT Road',
  'Murthal Road',
  'Other / Open to Suggestions',
];

const ContactForm = ({ compact = false, className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Residential Plot',
    location: 'Sector 14, Sonipat',
    budget: '₹50 Lakh - ₹1 Crore',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic frontend validation
    if (!formData.name.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setError('Please provide a valid 10-digit phone number.');
      return;
    }

    // Frontend-only submission simulation
    setSubmitted(true);
    setError('');
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      propertyType: 'Residential Plot',
      location: 'Sector 14, Sonipat',
      budget: '₹50 Lakh - ₹1 Crore',
      message: '',
    });
  };

  // WhatsApp quick redirect with prefilled message
  const whatsappEnquiryUrl = `https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(
    `Hello SP Properties, I am interested in: ${formData.propertyType} in ${formData.location} (Budget: ${formData.budget}). My Name: ${formData.name}, Contact: ${formData.phone}.`
  )}`;

  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200/80 shadow-premium p-6 sm:p-8 lg:p-10 ${className}`}
    >
      {submitted ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-navy-900">
            Inquiry Received Successfully!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Thank you, <span className="font-semibold text-navy-900">{formData.name}</span>. Our Sonipat property advisor will contact you at{' '}
            <span className="font-semibold text-navy-900">{formData.phone}</span> shortly.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Forward Directly via WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-navy-900">
              Request Property Information
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Fill out this quick form and our Sonipat property specialists will get in touch with you.
            </p>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 text-xs rounded-lg bg-rose-50 text-rose-700 border border-rose-200">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rajesh Kumar"
                className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-navy-900 transition-all"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500">
                  +91
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="98123 45678"
                  className="w-full pl-12 pr-3.5 py-2.5 rounded-lg text-sm border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-navy-900 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Email Address (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-navy-900 transition-all"
              />
            </div>

            {/* Property Type */}
            <div>
              <label
                htmlFor="propertyType"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-navy-900 transition-all bg-white"
              >
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {!compact && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Preferred Location */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-xs font-semibold text-slate-700 mb-1.5"
                >
                  Preferred Location in Sonipat
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-navy-900 transition-all bg-white"
                >
                  {preferredLocations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label
                  htmlFor="budget"
                  className="block text-xs font-semibold text-slate-700 mb-1.5"
                >
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-navy-900 transition-all bg-white"
                >
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Message / Specific Requirements */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Specific Requirements (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={compact ? 2 : 3}
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. Looking for a 200 sq. yard plot in Sector 14 with park facing or corner location..."
              className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-navy-900 transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 active:scale-[0.99] transition-all duration-200 shadow-md border border-navy-700 group"
          >
            <span>Submit Property Inquiry</span>
            <Send className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
