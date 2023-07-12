import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';
import ClubCoordinator from './pages/ClubCoordinator';
import StudentCoordinator from './pages/StudentCoordinator';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/clubcoordinator" element={<ClubCoordinator />} />
          <Route path="/studentcoordinator" element={<StudentCoordinator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
