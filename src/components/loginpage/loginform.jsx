// loginform.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login form submitted:', formData);
  };

  return (
    <div className="login-card">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome to Sosmed</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <p className="forgot-password-link">
          <Link to="/forgot-password">Forgot your password?</Link>
        </p>
        <button type="submit" className="login-btn">Login</button>
        <p className="or-divider">OR</p>
        <button type="button" className="google-login-btn">Login with Google</button>
      </form>
    </div>
  );
};

export default Login;
