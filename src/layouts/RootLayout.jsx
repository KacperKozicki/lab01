import React from 'react';
import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';

const RootLayout = ({ items, children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-base-200 text-base-content">
      {/* Navbar */}
      <NavBarMenu items={items} />
      
      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
