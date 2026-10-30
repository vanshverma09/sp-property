import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Navigation,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Info,
  Calendar,
  Building,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { WhatsAppIcon } from '../components/SocialIcons';
import { companyInfo } from '../data/companyInfo';

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Field change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Frontend validation
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please select or enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details in your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submit handler (Frontend-only simulation)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate submission
    setSubmittedData({ ...formData });
    setIsSubmitted(true);
  };

  // Reset form
  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
  };

  // WhatsApp quick fallback url
  const whatsappUrl = `https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(
    `Hello SP Properties, my name is ${formData.name || 'Client'}. Subject: ${
      formData.subject || 'Property Inquiry'
    }. Message: ${formData.message || 'I am interested in properties in Sonipat.'}`
  )}`;

  return (
    <div className="bg-white">
      {/* ========================================================= */}
      {/* 1. HERO BANNER                                            */}
      {/* ========================================================= */}
      <section className="relative bg-navy-950 text-white py-16 sm:py-24 overflow-hidden border-b border-navy-800">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-[350px] h-[350px] bg-navy-800/40 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-gold-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-5 border border-gold-400/30">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Connect with SP Properties</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Contact Our <span className="text-gold-gradient">Sonipat Office</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about buying, selling, or investing in Sonipat? Reach out to our property advisors via phone, WhatsApp, email, or schedule an in-person office visit.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CONTACT INFORMATION CARDS (4 CARDS)                    */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Direct Channels"
            title="Get In Touch With Us"
            subtitle="Reach out directly through any of our channels. We are always ready to assist you with verified property information."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {/* Card 1: Phone */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-400 border border-navy-100 flex items-center justify-center mb-5 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Phone Call
                </span>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Call Our Team
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Speak directly with a senior property advisor for immediate queries.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={companyInfo.socialLinks.phone}
                  className="inline-flex items-center gap-1.5 text-sm font-extrabold text-navy-900 hover:text-gold-600 transition-colors"
                >
                  <span>{companyInfo.contact.phoneDisplay}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="block text-[11px] text-slate-400 mt-0.5">
                  (Placeholder / Active Number)
                </span>
              </div>
            </div>

            {/* Card 2: WhatsApp */}
            <div className="bg-white rounded-2xl p-7 border border-emerald-100 shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white border border-emerald-200 flex items-center justify-center mb-5 transition-colors">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Instant Messaging
                </span>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Chat on WhatsApp
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Quick chat, property brochure requests, and instant location pin sharing.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={companyInfo.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#25D366] hover:text-emerald-700 transition-colors"
                >
                  <span>{companyInfo.contact.whatsappDisplay}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="block text-[11px] text-slate-400 mt-0.5">
                  Available Mon - Sun
                </span>
              </div>
            </div>

            {/* Card 3: Email */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-400 border border-navy-100 flex items-center justify-center mb-5 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Email Support
                </span>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Official Email
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Send property documentation, business proposals, and formal queries.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="inline-flex items-center gap-1.5 text-sm font-extrabold text-navy-900 hover:text-gold-600 transition-colors truncate max-w-full"
                >
                  <span className="truncate">{companyInfo.contact.email}</span>
                </a>
                <span className="block text-[11px] text-slate-400 mt-0.5">
                  Response within 24 hours
                </span>
              </div>
            </div>

            {/* Card 4: Office Address */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold-600 group-hover:bg-gold-500 group-hover:text-white border border-gold-200 flex items-center justify-center mb-5 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-600 block mb-1">
                  In-Person Visit
                </span>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Office Address
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {companyInfo.contact.address}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="inline-block text-[11px] text-gold-600 font-semibold bg-gold-50 px-2 py-0.5 rounded border border-gold-200/60">
                  Placeholder Address (Update later)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. CONTACT FORM & WORKING HOURS SECTION                   */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Business Working Hours & Office Information */}
            <div className="lg:col-span-5 space-y-8">
              {/* Working Hours Card */}
              <div className="bg-navy-950 text-white rounded-3xl p-7 sm:p-9 shadow-xl border border-navy-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gold-300 text-xs font-bold uppercase tracking-wider mb-5 border border-gold-400/30">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>Office Schedule</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-3">
                    Business Working Hours
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                    Our Sonipat office is open all 7 days of the week for client meetings, property consultations, and guided site inspections.
                  </p>

                  <div className="space-y-4 text-sm">
                    {/* Mon - Sat */}
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-navy-900 border border-navy-800">
                      <div className="flex items-center gap-2.5">
                        <Calendar className="w-4 h-4 text-gold-400" />
                        <span className="font-semibold text-white">Monday - Saturday</span>
                      </div>
                      <span className="text-gold-300 font-bold text-xs sm:text-sm">
                        9:00 AM - 8:00 PM
                      </span>
                    </div>

                    {/* Sunday */}
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-navy-900 border border-navy-800">
                      <div className="flex items-center gap-2.5">
                        <Calendar className="w-4 h-4 text-gold-400" />
                        <span className="font-semibold text-white">Sunday</span>
                      </div>
                      <span className="text-gold-300 font-bold text-xs sm:text-sm">
                        10:00 AM - 6:00 PM
                      </span>
                    </div>
                  </div>

                  {/* Site Visit Note */}
                  <div className="mt-6 p-4 rounded-xl bg-gold-500/10 border border-gold-400/30 text-xs text-gold-300 leading-relaxed">
                    <p className="font-bold text-white mb-1">
                      💡 Weekend Site Visits
                    </p>
                    Sundays are ideal for visiting plots in Sector 14, 15, Omaxe City, and TDI Kundli. We recommend calling in advance to book a dedicated vehicle and advisor.
                  </div>
                </div>
              </div>

              {/* Office Location Placeholder Notice */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-slate-700">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-navy-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">
                      Placeholder Location Details
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      All address numbers, SCO details, and building coordinates displayed here are editable placeholders. When you have your final registered commercial address in Sonipat, it can be updated in a single data file.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-premium p-7 sm:p-10">
                <div className="border-b border-slate-100 pb-5 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-navy-900 text-xs font-bold uppercase tracking-wider mb-2 border border-navy-100">
                    <MessageSquare className="w-3.5 h-3.5 text-gold-600" />
                    <span>Send Us a Message</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy-900">
                    Customer Inquiry Form
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Please provide your contact details and message below.
                  </p>
                </div>

                {/* Demonstration Notice */}
                <div className="mb-6 p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-amber-800 text-xs">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600" />
                  <div>
                    <strong className="font-bold block text-amber-900">
                      Demonstration Form Notice:
                    </strong>
                    This website operates strictly frontend-only (no backend database). Submissions will simulate a successful response on this screen without storing or transmitting sensitive customer data.
                  </div>
                </div>

                {isSubmitted ? (
                  /* Success State */
                  <div className="text-center py-8 space-y-5 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h4 className="text-2xl font-bold text-navy-900">
                      Thank You, {submittedData?.name}!
                    </h4>

                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Your demonstration inquiry regarding{' '}
                      <span className="font-semibold text-navy-900">
                        "{submittedData?.subject}"
                      </span>{' '}
                      has been received in the browser.
                    </p>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-700">
                      <p>
                        <strong>Phone:</strong> {submittedData?.phone}
                      </p>
                      <p>
                        <strong>Email:</strong> {submittedData?.email}
                      </p>
                      <p>
                        <strong>Message:</strong> {submittedData?.message}
                      </p>
                    </div>

                    {/* Forward via WhatsApp & Reset buttons */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-md"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Forward Inquiry via WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="w-full sm:w-auto px-5 py-3 rounded-xl text-sm font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Input Form */
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Customer Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Customer Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Malik"
                        className={`w-full px-4 py-3 rounded-xl text-sm border ${
                          errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                        } text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-navy-900 transition-all`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
                            +91
                          </span>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="98123 45678"
                            className={`w-full pl-12 pr-4 py-3 rounded-xl text-sm border ${
                              errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                            } text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-navy-900 transition-all`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      {/* Email Address */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className={`w-full px-4 py-3 rounded-xl text-sm border ${
                            errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                          } text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-navy-900 transition-all`}
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Subject <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl text-sm border ${
                          errors.subject ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                        } text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-navy-900 transition-all bg-white`}
                      >
                        <option value="">-- Select Subject of Inquiry --</option>
                        <option value="Residential Plot Purchase in Sonipat">
                          Residential Plot Purchase in Sonipat
                        </option>
                        <option value="Commercial Showroom / SCO Inquiry">
                          Commercial Showroom / SCO Inquiry
                        </option>
                        <option value="Property Selling / Valuation Assistance">
                          Property Selling / Valuation Assistance
                        </option>
                        <option value="Villas in Omaxe City / TDI Kundli">
                          Villas in Omaxe City / TDI Kundli
                        </option>
                        <option value="Agricultural Land & Farmhouse Parcels">
                          Agricultural Land & Farmhouse Parcels
                        </option>
                        <option value="Site Visit Booking">Site Visit Booking</option>
                        <option value="General Property Consultation">
                          General Property Consultation
                        </option>
                      </select>
                      {errors.subject && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Message Details <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your specific requirements (e.g. plot size in Sector 14, budget range, preferred township, or question)..."
                        className={`w-full px-4 py-3 rounded-xl text-sm border ${
                          errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                        } text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-navy-900 transition-all resize-none`}
                      ></textarea>
                      {errors.message && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 active:scale-[0.99] transition-all duration-200 shadow-md border border-navy-700 group"
                    >
                      <span>Submit Property Inquiry</span>
                      <Send className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. GOOGLE MAPS EMBEDDED LOCATION & ACTION BUTTONS        */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Interactive Location"
            title="Locate Our Office on Google Maps"
            subtitle="Visit our office in Sector 14, Sonipat, Haryana. Get instant navigation routes or explore surrounding landmarks on Google Maps."
          />

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-premium">
            {/* Map Action Toolbar */}
            <div className="bg-navy-950 p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4 border-b border-navy-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">
                    SP Properties Office • Sonipat
                  </h4>
                  <p className="text-xs text-slate-400">
                    SCO 42, Main Market, Sector 14, Sonipat, Haryana - 131001 (Placeholder Location)
                  </p>
                </div>
              </div>

              {/* Map Buttons: Get Directions & Open in Google Maps */}
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                {/* 1. Get Directions Button */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Sector+14+Sonipat+Haryana+131001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all shadow-md active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                {/* 2. Open in Google Maps Button */}
                <a
                  href="https://maps.google.com/?q=Sector+14+Sonipat+Haryana+131001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-navy-800 hover:bg-navy-700 border border-navy-700 transition-all active:scale-95"
                >
                  <ExternalLink className="w-4 h-4 text-gold-400" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Google Maps iFrame */}
            <div className="w-full h-[450px] relative bg-slate-100">
              <iframe
                title="SP Properties Sonipat Office Map Location"
                src={companyInfo.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
