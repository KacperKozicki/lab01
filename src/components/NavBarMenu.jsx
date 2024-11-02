import React from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../data/menuItems';

const NavBarMenu = () => {
  return (
    <div className="navbar bg-base-200 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Brand Logo */}
        <div className="navbar-start">
          <Link to="/" className="text-xl font-bold text-primary">
            My App
          </Link>
        </div>

        {/* Toggle button for mobile view */}
        <div className="navbar-end lg:hidden">
          <button className="btn btn-ghost btn-circle" onClick={() => document.getElementById('navbar-menu').classList.toggle('hidden')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div className="navbar-center hidden lg:flex" id="navbar-menu">
          <ul className="menu menu-horizontal p-0 space-x-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link to={item.url} className="text-base-content hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarMenu;
