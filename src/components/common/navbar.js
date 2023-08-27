import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import axios from 'axios';

const fetchUserLevel = async (email) => {
  try {
    const response = await axios.get('/user');
    const users = response.data;
    const matchingUser = users.find((user) => user.email === email);
    if (matchingUser) {
      return matchingUser.level;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching user level:', error);
    return null;
  }
};

const Navbar = ({ navigationButtons }) => {
  const [sessionData, setSessionData] = useState(null);

  useEffect(() => {
      async function getSessionData() {
      try {
          const response = await axios.get('/auth/api/session', {
          withCredentials: true,
          });
          setSessionData(response.data);
      } catch (error) {
          console.error('Error fetching session data:', error);
          setSessionData(error.message);
      }
      }

      getSessionData();
  }, []);

  const [level, setLevel] = React.useState(null);
  React.useEffect(() => {
      fetchUserLevel(sessionData?.email).then((result) => {
      setLevel(result);
      });
  }, [sessionData?.email]);

  const logoLinkDestination = level === 'Student Club Coordinator' ? '/studentcoordinator' : level === 'Admin' ? '/admin' : level === 'Student' ? '/mainpage' : level === 'Club Coordinator' ? '/clubcoordinator' : '/';

  return (
    <nav className="bg-[#ffffff] py-5 border-b-2 border-[#666666] shadow">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={logoLinkDestination}>
          <img src={logo} alt="Logo" className="h-12 mr-7" />
        </Link>
        <div className="flex">
          {navigationButtons.map((button, index) => (
            <Link key={index} to={button.to} className="bg-[#3FADA8] hover:bg-[#808080] text-white py-2 px-4 rounded-md mr-4"
              onClick={button.click}>
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
