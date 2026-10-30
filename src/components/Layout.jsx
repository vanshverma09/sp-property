import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import FloatingSocialButtons from './FloatingSocialButtons';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Top Header & Sticky Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <WhatsAppButton />
      <FloatingSocialButtons />
    </div>
  );
};

export default Layout;
