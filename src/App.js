import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';
import ClubCoordinator from './pages/ClubCoordinator';
import StudentCoordinator from './pages/StudentCoordinator';
import ClubList from './pages/ClubList';
import EventList from './pages/EventList';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/clubcoordinator" element={<ClubCoordinator />} />
          <Route path="/studentcoordinator" element={<StudentCoordinator />} />
          <Route path="/clubs" element={<ClubList />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
