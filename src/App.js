import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignupPage from './SignUpPage';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import "./App.css";
import CompanyInfo from './CompanyInfo';
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {/* <li>
              <Link to="/dashboard">Dashboard</Link>
            </li> */}
            <li>
              <Link to="/company-info">Company Info</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/company-info" element={<CompanyInfo/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
