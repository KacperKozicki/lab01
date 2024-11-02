import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-center p-6 bg-base-200 text-base-content">
      <div className="container flex flex-col items-center">
        {/* Logo */}
        <img src="wsei.png" alt="Logo wsei" className="h-10 mb-2" />

        {/* Copyright Text */}
        <p className="text-sm">
          &copy; 2024 <span className="font-semibold">Kacper Kozicki</span> | Wszelkie prawa zastrzeżone
        </p>
      </div>
    </footer>
  );
};

export default Footer;
