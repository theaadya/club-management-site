import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="bg-[#333333] py-7">
          {/* ... */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
