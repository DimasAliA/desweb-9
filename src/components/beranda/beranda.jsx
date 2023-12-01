import React from 'react';
import './beranda.css';

const SocialMediaCard = () => {
  return (
    <div>
      <div className="container">
        <div className="card-container">
          <div className="side-nav">
            <a href="#home">Home</a>
            <a href="#explore">Explore</a>
            <a href="#saved">Saved</a>
            <a href="#messages">Messages</a>
          </div>
          <div className="card">
            <img src="https://placekitten.com/600/300" alt="Your Post" />
            <h2>Your Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
          </div>
          <div className="card">
            <img src="https://placekitten.com/600/300" alt="Recommended Friend" />
            <h2>Recommended Friend</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card-container">
          <div className="side-nav">
            <h1>Stories</h1>
            <a href="#home">Home</a>
            <a href="#explore">Explore</a>
            <a href="#saved">Saved</a>
            <a href="#messages">Messages</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCard;
