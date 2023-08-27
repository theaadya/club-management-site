import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = ({ navigationButtons }) => {
  return (
    <nav className="bg-[#ffffff] py-5 border-b-2 border-[#666666] shadow">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 mr-7" />
        </Link>
        <div className="flex">
          {navigationButtons.map((button, index) => (
            <Link key={index} to={button.to} className="bg-[#3FADA8] hover:bg-[#808080] text-white py-2 px-4 rounded-md mr-4">
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
