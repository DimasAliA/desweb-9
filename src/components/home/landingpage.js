import React from 'react';
import { Link } from 'react-router-dom';
import './land.css';

const Header = () => (
    <header>
      <nav>
        <ul>
          <li><button><a href="#social-media">Social media</a></button></li>
          <li><button><a href="#about">About</a></button></li>
          <li><button><a href="#sign-up">Sign up</a></button></li>
          <li><button><Link to="/profile">Login</Link></button></li>
        </ul>
      </nav>
    </header>
  );
  
  // Main Content Component
  const MainContent = () => (
    <main>
      <section className="hero">
        <div className="hero-text">
          <h1>Become a part of the world of ideas</h1>
        </div>
        <img src="/images/bawah.png" alt="Hero" />
      </section>
      <section className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <img src="/images/atas.png" alt="Photographer" />
      </section>
    </main>
  );
  
  // Footer Component
  const Footer = () => (
    <footer>
      <ul>
        <li><a href="#terms">Terms of Service</a></li>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#help">Help</a></li>
        <li><a href="#explore">Explore</a></li>
      </ul>
    </footer>
  );

  export { Header, MainContent, Footer };