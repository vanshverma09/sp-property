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
  Target,
  Eye,
  CheckCircle2,
  TrendingUp,
  Landmark,
  FileText,
  BadgeCheck,
  SearchCheck,
  Scale,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { companyInfo } from '../data/companyInfo';
import aboutRealtyImg from '../assets/about_consultation.jpg';
import townshipImg from '../assets/township_aerial.jpg';
import logoImg from '../assets/logo.jpeg';

const About = () => {
  // Service Offerings on About Page
  const propertyServices = [
    {
      title: 'Residential Plots & HUDA Sectors',
      description:
        'Specializing in premium residential plots in Sector 14, 15, 8, 12, and 23. Clear title deeds, corner plots, and park-facing properties suitable for immediate construction.',
      icon: Building2,
      badge: 'Residential',
    },
    {
      title: 'Luxury Villas & Integrated Townships',
      description:
        'Helping buyers acquire ready-to-move and under-construction villas in gated communities including Omaxe City, TDI City Kundli, and Express City with modern amenities.',
      icon: Landmark,
      badge: 'Gated Townships',
    },
    {
      title: 'Commercial Showrooms & SCOs',
      description:
        'Prime commercial plots, SCOs, and high-street retail shops along GT Road, Murthal Road, and main sector markets offering high rental yield and long-term capital appreciation.',
      icon: TrendingUp,
      badge: 'High ROI',
    },
    {
      title: 'Agricultural & Farmhouse Land',
      description:
        'Verified agricultural holdings, rural parcels, and farmhouse lands along the KMP expressway and NCR peripheral belts with transparent ownership records.',
      icon: Compass,
      badge: 'Land & Agro',
    },
    {
      title: 'Fair Market Valuation & Resale',
      description:
        'Realistic, data-grounded property valuation for sellers to ensure fast, competitive deals without lengthy market stagnation or undervalued transactions.',
      icon: Scale,
      badge: 'Valuation',
    },
    {
      title: 'Registry & Legal Documentation',
      description:
        'Full support through revenue records, municipal NOCs, sub-registrar appointments, circle rate compliance, and smooth possession mutation.',
      icon: FileText,
      badge: 'Legal Clearance',
    },
  ];

  // Areas Served
  const areasServed = [
    {
      zone: 'Established HUDA Sectors',
      description: 'The core urban hubs of Sonipat featuring mature infrastructure, wide avenues, schools, and hospitals.',
      locations: ['Sector 14 (Commercial & Prime Residential)', 'Sector 15 (Upscale Kothis & Plots)', 'Sector 12 & Sector 8 (High Demand)', 'Sector 23 (Growth Hub)'],
    },
    {
      zone: 'Integrated Townships & Gated Communities',
      description: 'Modern planned developments offering gated security, landscaped clubhouses, and contemporary villas.',
      locations: ['Omaxe City, Sonipat', 'TDI City, Kundli (GT Road)', 'Express City, Sonipat', 'Parker City & Supermax Belt'],
    },
    {
      zone: 'Commercial & Arterial Corridors',
      description: 'High-footfall zones and strategic highway corridors connecting Sonipat to Delhi, Panipat, and Kundli-Manesar.',
      locations: ['GT Karnal Road (NH-44 Corridor)', 'Murthal Road Commercial Hub', 'KMP Expressway Junction', 'Rai & Rajiv Gandhi Education City Belt'],
    },
    {
      zone: 'Periphery & Developing Belts',
      description: 'Emerging sectors and peripheral lands offering high-return entry points for medium-to-long term investors.',
      locations: ['Bahalgarh Chowk Area', 'Rathdhana Road Expansion', 'Ganaur Industrial & Agro Belt', 'Sub-Urban Sonipat Master Plan 2031 Zones'],
    },
  ];

  // Why Choose Us Pillars
  const reasonsToChoose = [
    {
      title: 'Unrivaled On-Ground Market Knowledge',
      desc: 'We are active on the ground in Sonipat every single day. We understand authentic circle rates, upcoming infrastructure corridors, and localized price variations that automated portals miss.',
      icon: SearchCheck,
    },
    {
      title: '100% Verified Titles & Zero Scams',
      desc: 'Every single plot or commercial asset we represent undergoes strict verification of revenue ownership, non-encumbrance status, and municipal clearances before we introduce it to buyers.',
      icon: ShieldCheck,
    },
    {
      title: 'Transparent Direct Negotiations',
      desc: 'We operate with complete honesty. Buyers and sellers communicate directly with full clarity on prices, stamp duty charges, and registration timelines—no hidden fees or artificial inflation.',
      icon: Scale,
    },
    {
      title: 'End-to-End Handholding',
      desc: 'From your initial phone inquiry and guided site visits to title vetting, bank loan coordination, sub-registrar execution, and mutation, we stand beside you every step of the way.',
      icon: BadgeCheck,
    },
  ];

  // Customer-Focused 4-Step Process
  const customerApproach = [
    {
      step: '01',
      title: 'Requirement & Budget Analysis',
      desc: 'We begin by thoroughly understanding your goals—whether you need a family plot for immediate construction, a rental-yielding commercial shop, or an investment land parcel.',
    },
    {
      step: '02',
      title: 'Curated Shortlisting & Physical Visits',
      desc: 'Instead of overwhelming you with dozens of random listings, we shortlist genuine properties that precisely match your parameters and accompany you on in-person site inspections.',
    },
    {
      step: '03',
      title: 'Title Verification & Fair Deal Closure',
      desc: 'We audit property documents, confirm seller authenticity, cross-reference municipal records, and facilitate transparent, amicable price negotiations.',
    },
    {
      step: '04',
      title: 'Registration, Mutation & Handover',
      desc: 'We coordinate all registry paperwork at the Sonipat tehsil/sub-registrar office, ensuring smooth stamp duty calculation, formal registry, and hassle-free possession.',
    },
  ];

  return (
    <div className="bg-white">
      {/* ========================================================= */}
      {/* 1. HERO BANNER                                            */}
      {/* ========================================================= */}
      <section className="relative bg-navy-950 text-white py-20 lg:py-28 overflow-hidden">
        {/* Background glow & subtle pattern */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-navy-800/40 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb / Category Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-gold-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 border border-gold-400/30">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Dedicated Real Estate Advisory • Sonipat, Haryana</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            About <span className="text-gold-gradient">SP Properties</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            {companyInfo.tagline} • {companyInfo.hindiTagline}. Committed to delivering transparent property dealings, verified titles, and strategic real estate investments across Sonipat.
          </p>

          {/* Quick Stats Strip */}
          <div className="mt-12 pt-8 border-t border-navy-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-gold-400 font-display">
                100%
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1 block">
                Verified Titles & Registry
              </span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-white font-display">
                25+
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1 block">
                Sectors & Areas Covered
              </span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-gold-400 font-display">
                500+
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1 block">
                Satisfied Client Consultations
              </span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-white font-display">
                Zero
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1 block">
                Hidden Brokerage Fees
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ABOUT THE COMPANY INTRODUCTION                         */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column with Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
                <img
                  src={aboutRealtyImg}
                  alt="SP Properties Real Estate Consultation"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold-400 bg-navy-900/80 px-3 py-1 rounded-md border border-gold-400/40 mb-2">
                      Trusted Advisory
                    </span>
                    <p className="text-sm sm:text-base font-semibold">
                      "Real estate decisions require genuine local market knowledge and bulletproof documentation."
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-white p-5 rounded-2xl shadow-premium border-2 border-gold-400 max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-400 flex-shrink-0">
                    <img src={logoImg} alt="SP Properties" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-navy-900 block leading-tight">
                      SP Properties
                    </span>
                    <span className="text-[11px] text-gold-600 font-semibold block mt-0.5">
                      Sonipat Specialist
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-navy-900 text-xs font-bold uppercase tracking-wider border border-navy-100">
                <Award className="w-3.5 h-3.5 text-gold-600" />
                <span>Our Heritage & Experience</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-snug">
                Pioneering Transparent Real Estate Dealing Across Sonipat
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                <strong>SP Properties</strong> is a premier property consultancy and real estate dealing firm situated in Sonipat, Haryana. Established with the clear ambition to bring transparency, legal rigor, and client protection to the forefront of property transactions, we have become one of the region’s most dependable property advisory firms.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you are seeking an approved residential plot in high-demand HUDA sectors (Sector 14, 15, 8, 12, 23), an elegant villa in Omaxe City or TDI Kundli, or a high-footfall commercial shop along Murthal Road and the GT Karnal highway corridor, we provide comprehensive, unbiased advice tailored to your personal and financial goals.
              </p>

              {/* Highlight Points */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Title Due Diligence:</strong> Complete verification of ownership chain, registry records, and encumbrance certificates.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Buyer-Seller Interface:</strong> Clean negotiations without hidden broker margins or false pricing representations.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Custom Investment Roadmaps:</strong> Helping smart investors capitalize on Sonipat's rapid growth along the KMP Expressway and Delhi NCR expansion.</span>
                </div>
              </div>

              {/* Placeholder business note */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 italic">
                * Note: Company founding background and executive milestones are provided as customizable placeholders and can be tailored with specific details at any time.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. BUSINESS VISION AND MISSION                            */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50/80 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Strategic Direction"
            title="Our Vision & Mission"
            subtitle="The fundamental values that direct every property interaction, consultation, and deal at SP Properties."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-premium flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />

              <div>
                <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6 shadow-md">
                  <Eye className="w-7 h-7" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-gold-50 text-gold-700 text-xs font-bold uppercase tracking-wider mb-4 border border-gold-200/60">
                  Our Vision
                </div>

                <h3 className="text-2xl font-extrabold text-navy-900 mb-4">
                  Setting the Gold Standard for Real Estate in Sonipat
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  To be the undisputed, most trusted real estate consultancy across Sonipat and the Northern NCR corridor—recognized for uncompromised integrity, verified documentation, and for maximizing our clients’ return on investment through forward-thinking property advisory.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-navy-900">
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                <span>Ethical Dealing • Transparency • High Returns</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-10 border border-navy-800 shadow-premium flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />

              <div>
                <div className="w-14 h-14 rounded-2xl bg-gold-500/20 text-gold-400 border border-gold-400/30 flex items-center justify-center mb-6 shadow-md">
                  <Target className="w-7 h-7" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
                  Our Mission
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-4">
                  Empowering Every Client with Verified, High-Value Property
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  To eliminate the stress, opacity, and risk often associated with real estate dealing. We empower families and commercial enterprises with thoroughly verified property dossiers, realistic circle-rate valuations, and seamless legal assistance from exploration to registry.
                </p>
              </div>

              <div className="pt-6 border-t border-navy-800 flex items-center gap-2 text-xs font-bold text-gold-400">
                <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                <span>Customer First • Rigorous Diligence • Seamless Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. OUR PROPERTY DEALING SERVICES                          */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Full Suite Solutions"
            title="Our Property Dealing Services"
            subtitle="Providing specialized expertise across all facets of residential, commercial, and agricultural property in Sonipat."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {propertyServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-400 border border-navy-100 flex items-center justify-center mb-5 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600 bg-gold-50 px-2.5 py-1 rounded-md border border-gold-200/60 inline-block mb-3">
                      {service.badge}
                    </span>

                    <h3 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors pt-4 border-t border-slate-100"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. AREAS WE SERVE IN SONIPAT & NEARBY LOCATIONS           */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Geographic Coverage"
            title="Areas We Serve in Sonipat & Nearby Locations"
            subtitle="Our localized network spans the heart of Sonipat city, prestigious gated townships, and fast-accelerating industrial and highway corridors."
          />

          {/* Aerial Township Photo Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-14">
            <img
              src={townshipImg}
              alt="Sonipat Townships & Sectors"
              className="w-full h-[320px] sm:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-2">
                Sonipat Master Plan & Growth Corridors
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white max-w-2xl">
                Connecting You with High-Growth Real Estate Corridors in Sonipat (NCR)
              </h3>
            </div>
          </div>

          {/* 4 Distinct Zone Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areasServed.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-subtle hover:shadow-premium transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 border border-navy-100 flex items-center justify-center font-bold flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold-600" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">{area.zone}</h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {area.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {area.locations.map((loc, lIdx) => (
                    <div key={lIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0"></span>
                      <span className="font-medium">{loc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. WHY CUSTOMERS SHOULD CHOOSE US                         */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The SP Advantage"
            title="Why Customers Choose SP Properties"
            subtitle="Integrity, authentic on-ground intelligence, and client protection form the core of our brand."
            light={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {reasonsToChoose.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-navy-900/80 border border-navy-800 hover:border-gold-400/50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/20 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. CUSTOMER-FOCUSED APPROACH (4-Step Timeline)           */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Structured Process"
            title="Our Customer-Focused Approach"
            subtitle="A transparent, step-by-step roadmap designed to ensure complete peace of mind during your property journey."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 relative">
            {customerApproach.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80 hover:bg-white hover:shadow-premium hover:-translate-y-1 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-extrabold text-gold-500 font-display">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      Step {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-gold-600">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Client Protected</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. CONTACT US CALL-TO-ACTION                              */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 rounded-3xl p-8 sm:p-12 lg:p-14 text-white text-center relative overflow-hidden shadow-2xl border border-navy-800">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-800/50 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gold-300 text-xs font-bold uppercase tracking-wider border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Let's Discuss Your Real Estate Goals</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-snug">
                Connect with Sonipat’s Trusted Property Advisors Today
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Whether you want to buy your dream plot, sell an existing property at optimal valuation, or invest along upcoming highway belts, our team is ready to guide you.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={companyInfo.socialLinks.phone}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-navy-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all shadow-md active:scale-95"
                >
                  <Phone className="w-4 h-4 text-navy-950" />
                  <span>Call {companyInfo.contact.phoneDisplay}</span>
                </a>

                <a
                  href={companyInfo.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Message on WhatsApp</span>
                </a>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  <span>Visit Contact Page</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </Link>
              </div>

              {/* Quick direct contact info strip */}
              <div className="pt-6 border-t border-navy-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>Sector 14, Sonipat, Haryana</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>Mon - Sun: 9:00 AM - 8:00 PM</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
