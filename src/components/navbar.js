import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-[#ffffff] py-5 border-b-2 border-[#666666] shadow">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 mr-7" />
        </Link>
        {/* Navigation links */}
      </div>
    </nav>
  );
};

export default Navbar;
