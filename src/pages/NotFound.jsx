import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="py-24 px-4 text-center">
      <div className="max-w-md mx-auto">
        <span className="text-6xl font-extrabold text-gold-500 block mb-2 font-display">
          404
        </span>
        <h2 className="text-2xl font-bold text-navy-900 mb-3">
          Page Not Found
        </h2>
        <p className="text-sm text-slate-500 mb-8">
          The property page or resource you are looking for does not exist or has been relocated.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 transition-colors shadow-sm"
        >
          <Home className="w-4 h-4 text-gold-400" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
