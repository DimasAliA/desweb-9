// loginpage.jsx

import React from 'react';
// import Login from './loginform';
import { Header, MainContent, Footer } from './backgroundlogin'; // Sesuaikan path
import './login.css';
import './bglogin.css'

const LoginPage = () => {
    return (
      <div className="login-page-container">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  };
  
  export default LoginPage;
