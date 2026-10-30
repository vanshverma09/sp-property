import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building,
  Home as HomeIcon,
  Briefcase,
  TrendingUp,
  Award,
  Users,
  Compass,
  FileCheck,
  Clock,
  MapPin,
  Star,
  Quote,
  Mail,
  Navigation,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { companyInfo } from '../data/companyInfo';
import heroEstateImg from '../assets/hero_estate.jpg';
import aboutRealtyImg from '../assets/about_consultation.jpg';
import logoImg from '../assets/logo.jpeg';

const Home = () => {
  // Services List according to exact specification
  const services = [
    {
      title: 'Property Buying Assistance',
      description:
        'Personalized guidance to help you find and purchase verified residential plots, luxury villas, and commercial spaces in Sonipat at the best market prices.',
      icon: HomeIcon,
      highlight: 'Verified Registry',
    },
    {
      title: 'Property Selling Assistance',
      description:
        'Strategic valuation and access to our active network of genuine buyers to sell your property quickly, safely, and at optimum market value.',
      icon: Briefcase,
      highlight: 'Quick & Transparent',
    },
    {
      title: 'Residential Property Consultancy',
      description:
        'End-to-end advisory for home seekers looking for approved builder floors, HUDA sector plots, and gated townships across Sonipat.',
      icon: Building,
      highlight: 'Family-Focused',
    },
    {
      title: 'Commercial Property Consultancy',
      description:
        'Specialized consultancy for prime SCO plots, high-visibility retail outlets, warehouses, and commercial spaces along key arterial roads.',
      icon: TrendingUp,
      highlight: 'High Footfall & ROI',
    },
    {
      title: 'Property Investment Guidance',
      description:
        'Strategic investment insights focusing on high-growth corridors, upcoming KMP Expressway belts, and high-appreciation land holdings in Sonipat NCR.',
      icon: Compass,
      highlight: 'Maximum Appreciation',
    },
  ];

  // Why Choose Us Pillars
  const whyChooseUs = [
    {
      title: 'Local Market Knowledge',
      description:
        'Deep-rooted presence across Sonipat sectors, village peripheries, and master plan developments gives us unparalleled on-ground market intelligence.',
      icon: MapPin,
    },
    {
      title: 'Transparent Guidance',
      description:
        'Zero ambiguity. Complete legal documentation review, title verification, clear circle rate advisory, and no hidden brokerage surprises.',
      icon: FileCheck,
    },
    {
      title: 'Customer-Focused Service',
      description:
        'Your goals come first. We listen to your family or business requirements and provide honest, pressure-free recommendations.',
      icon: Users,
    },
    {
      title: 'Professional Assistance',
      description:
        'Comprehensive support from site visits and price negotiations to registry execution, mutation assistance, and possession handover.',
      icon: Award,
    },
  ];

  // Testimonials with explicitly identified sample content disclaimer
  const sampleTestimonials = [
    {
      name: 'Ramesh Chander Malik',
      location: 'Sector 14, Sonipat',
      role: 'Home Buyer',
      rating: 5,
      comment:
        'SP Properties helped me acquire a prime residential plot in Sector 14. Their documentation verification was impeccable, giving my family complete peace of mind. Truly the most honest dealer in Sonipat!',
    },
    {
      name: 'Sunil Dahiya',
      location: 'Omaxe City, Sonipat',
      role: 'Property Seller',
      rating: 5,
      comment:
        'I needed to sell my villa in Omaxe City within a month. SP Properties brought genuine buyers and closed the transaction at a fair market price with zero stress. Highly recommended!',
    },
    {
      name: 'Vikas Aggarwal',
      location: 'Murthal Road Commercial',
      role: 'Commercial Investor',
      rating: 5,
      comment:
        'Their commercial market analysis along the GT Road belt is second to none. They guided me toward a high-return SCO plot that has already appreciated significantly.',
    },
  ];

  return (
    <div className="bg-white">
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Large Professional Real Estate Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroEstateImg}
            alt="Luxury Real Estate in Sonipat"
            className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-105 duration-1000"
          />
          {/* Elegant Gradient Dark Overlay with Navy Tones */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-white">
          <div className="max-w-3xl">
            {/* Eyebrow Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>SP Properties • Sonipat, Haryana</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Your Trusted Property Dealer in{' '}
              <span className="text-gold-gradient underline decoration-gold-400/40 decoration-4 underline-offset-8">
                Sonipat
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed mb-10 max-w-2xl">
              Helping home buyers, sellers, and smart investors navigate Sonipat's real estate market with transparent dealings, verified titles, and dependable guidance.
            </p>

            {/* CTA Buttons: Contact Us & WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-navy-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all duration-200 shadow-gold-glow active:scale-95 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={companyInfo.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all duration-200 shadow-lg active:scale-95 border border-white/20 group"
              >
                <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick Trust Pillars in Hero */}
            <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span>100% Registry Verified Deals</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span>Direct & Honest Negotiations</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span>Prime Sonipat Localities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ABOUT BUSINESS                                         */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100">
                <img
                  src={aboutRealtyImg}
                  alt="SP Properties Real Estate Advisory"
                  className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"></div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-6 bg-navy-900 text-white p-5 rounded-2xl shadow-xl border-2 border-gold-400 max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    SP
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-gold-400 font-bold tracking-wider">
                      Sonipat Specialist
                    </span>
                    <span className="text-sm font-semibold text-white">
                      High Return House
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 text-navy-900 text-xs font-bold uppercase tracking-wider border border-gold-400/40">
                <Award className="w-3.5 h-3.5 text-gold-600" />
                <span>About SP Properties</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-snug">
                Building Trust Through Transparent Property Dealing in Sonipat
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                <strong className="text-navy-900 font-semibold">SP Properties</strong> is a respected property dealing enterprise situated in Sonipat, Haryana. Established with the guiding philosophy of <em className="text-navy-900 not-italic font-medium">"High Return House • आपका रियल एस्टेट पार्टनर"</em>, we specialize in helping individuals, families, and commercial investors make sound real estate decisions.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you are seeking a residential plot to construct your dream home in HUDA sectors (Sector 14, 15, 8, 12), a gated villa in Omaxe City or TDI Kundli, or lucrative commercial land along the KMP expressway corridor, we bring rigorous legal verification, clear paperwork, and direct negotiations.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-2xl font-extrabold text-navy-900">100%</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Title & Registry Verification</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-2xl font-extrabold text-navy-900">Direct</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Buyer-Seller Transparency</p>
                </div>
              </div>

              {/* Read More Button */}
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 transition-all shadow-md group"
                >
                  <span>Read More About Us</span>
                  <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. OUR SERVICES                                           */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Dedicated Solutions"
            title="Our Real Estate Services"
            subtitle="Comprehensive property consultancy designed to make buying, selling, and investing in Sonipat smooth, secure, and rewarding."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-7 border border-slate-200 shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Service Icon */}
                    <div className="w-14 h-14 rounded-xl bg-navy-50 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-400 border border-navy-100 flex items-center justify-center mb-6 transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600 bg-gold-50 px-2.5 py-1 rounded-md border border-gold-200/60 inline-block mb-3">
                      {service.highlight}
                    </span>

                    <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors pt-4 border-t border-slate-100"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. WHY CHOOSE US                                          */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The SP Properties Advantage"
            title="Why Choose Us for Sonipat Property"
            subtitle="We distinguish ourselves through uncompromised integrity, rigorous paperwork checks, and a genuine commitment to our clients."
            light={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-navy-900/80 border border-navy-800 hover:border-gold-500/50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/20 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. CUSTOMER TESTIMONIALS                                  */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Client Feedback"
            title="What Our Clients Say"
            subtitle="Hear from property buyers, sellers, and business owners who have entrusted their real estate journey to SP Properties."
          />

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleTestimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-gold-300/40 group-hover:text-gold-400/60 transition-colors">
                  <Quote className="w-8 h-8" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4 text-gold-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{item.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-50 text-navy-900 border border-navy-200 font-bold flex items-center justify-center text-sm flex-shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">{item.name}</h4>
                    <p className="text-xs text-slate-500">
                      {item.role} • {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Clearly identified sample content note */}
          <div className="mt-8 text-center">
            <span className="inline-block text-xs text-slate-500 bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full">
              * Note: Sample client testimonials shown above for demonstration purposes until genuine verified client reviews are uploaded.
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. VISIT OUR OFFICE                                       */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Office & Location"
            title="Visit Our Office in Sonipat"
            subtitle="Stop by our office to discuss property opportunities over tea, review authentic floor plans, and receive tailored advice."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Office Details Card */}
            <div className="lg:col-span-5 bg-navy-900 text-white rounded-2xl p-7 sm:p-9 shadow-premium border border-navy-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold-400 flex-shrink-0">
                    <img
                      src={logoImg}
                      alt="SP Properties Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">SP Properties</h3>
                    <span className="text-xs text-gold-400 font-medium">
                      Sector 14, Sonipat, Haryana
                    </span>
                  </div>
                </div>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Office Location</h4>
                      <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                        {companyInfo.contact.address}
                      </p>
                      <p className="text-[11px] text-gold-400/80 mt-0.5 italic">
                        {companyInfo.contact.addressPlaceholderNote}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Visiting Hours</h4>
                      <p className="text-slate-300 text-xs mt-1">
                        {companyInfo.contact.workingHours}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Direct Line</h4>
                      <a
                        href={companyInfo.socialLinks.phone}
                        className="text-gold-300 hover:text-gold-200 text-xs mt-1 block font-medium"
                      >
                        {companyInfo.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-8 mt-8 border-t border-navy-800">
                <a
                  href={companyInfo.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all shadow-md active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-premium min-h-[380px]">
              <iframe
                title="SP Properties Sonipat Location Map"
                src={companyInfo.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. CONTACT SECTION                                        */}
      {/* ========================================================= */}
      <section id="contact-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Start The Conversation"
            title="Connect With SP Properties"
            subtitle="Reach out directly via phone, WhatsApp, email, or fill out our inquiry form for prompt assistance in Sonipat."
          />

          {/* Quick Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {/* Phone Card */}
            <a
              href={companyInfo.socialLinks.phone}
              className="bg-navy-50 hover:bg-navy-100/80 p-6 rounded-2xl border border-navy-100 transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-slate-500">Call Us</span>
                <p className="text-base font-extrabold text-navy-900 mt-0.5">
                  {companyInfo.contact.phoneDisplay}
                </p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={companyInfo.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-50 hover:bg-emerald-100/80 p-6 rounded-2xl border border-emerald-100 transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-emerald-700">WhatsApp</span>
                <p className="text-base font-extrabold text-navy-900 mt-0.5">
                  {companyInfo.contact.whatsappDisplay}
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${companyInfo.contact.email}`}
              className="bg-slate-50 hover:bg-slate-100 p-6 rounded-2xl border border-slate-200 transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="truncate">
                <span className="text-xs uppercase font-bold text-slate-500">Email Us</span>
                <p className="text-sm font-extrabold text-navy-900 mt-0.5 truncate">
                  {companyInfo.contact.email}
                </p>
              </div>
            </a>
          </div>

          {/* Interactive Inquiry Form */}
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
