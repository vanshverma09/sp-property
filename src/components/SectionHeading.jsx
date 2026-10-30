import React from 'react';

const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {/* Eyebrow Badge */}
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
            light
              ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30'
              : 'bg-navy-50 text-navy-900 border border-gold-400/40'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
          <span>{badge}</span>
        </div>
      )}

      {/* Main Title */}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>

      {/* Decorative Gold Divider */}
      <div
        className={`flex items-center gap-1.5 my-3.5 ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="w-8 h-0.5 bg-gold-400 rounded-full"></span>
        <span className="w-2 h-2 rounded-full bg-gold-500"></span>
        <span className="w-8 h-0.5 bg-gold-400 rounded-full"></span>
      </div>

      {/* Subtitle / Description */}
      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            light ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
