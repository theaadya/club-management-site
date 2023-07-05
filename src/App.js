import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import logo from './assets/logo.png';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="bg-[#ffffff] py-5 border-b-2 border-[#666666] shadow">
          <div className="container mx-auto flex items-center justify-between">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-12 mr-7" />
            </Link>
            {/* Navigation links */}
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
