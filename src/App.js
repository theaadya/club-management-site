import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="bg-gray-800 py-4">
          <div className="container mx-auto flex items-center justify-between px-4">
            <Link to="/">
              <img className="h-10" src="/path/to/logo.png" alt="Logo" />
            </Link>
            <div>
              {/* Add other login options */}
            </div>
          </div>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
};

export default App;
