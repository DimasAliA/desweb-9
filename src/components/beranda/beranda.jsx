import React from 'react';
import './beranda.css';

const SocialMediaCard = () => {
  return (
    <div>
      <div className="container">
        <div className="card-container">
        <div className="side-nav">
        <a href="#home">
          <img src="/images/home.jpg" alt="Home" className="nav-icon" />Home</a>
        <a href="#explore">
          <img src="/images/explore.jpg" alt="Explore" className="nav-icon" />Explore</a>
        <a href="#saved">
          <img src="/images/save.jpg" alt="Saved" className="nav-icon" />Saved</a>
        <a href="#messages"><img src="/images/chat.jpg" alt="Messages" className="nav-icon" />Messages</a></div>

          <div className="custom-size-card">
            <h2>Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
          </div>
          <div className="side-nav">
          <p>Contacts</p>
          <ul>
            <li>
              <button className="nav-button">
                <img src="/images/comment.jpg" alt="Beranda" className="nav-icon" />
                Alma</button>
            </li>
            <li>
              <button className="nav-button">
              <img src="/images/comment.jpg" alt="Beranda" className="nav-icon" />
                Felix</button>
            </li>
            <li>
              <button className="nav-button create-button">
              <img src="/images/comment.jpg" alt="Beranda" className="nav-icon" />
                Dims</button>
            </li>
          </ul>
        </div>
        </div>
      </div>

      <div className="container">
        <div className="card-container">
        <div className="side-nav">
          <p>Stories</p>
          <a href="#home">
            <img src="/images/story.jpg" alt="pengguna" className="nav-icon1" />maulanafzr</a>
          <a href="#explore">
            <img src="/images/story.jpg" alt="pengguna" className="nav-icon1" />felix dian</a>
          <a href="#saved">
            <img src="/images/story.jpg" alt="pengguna" className="nav-icon1" />almadtha</a>
          <a href="#messages">
            <img src="/images/story.jpg" alt="pengguna" className="nav-icon1" />dimsali</a>
          <a href="#messages">
            <img src="/images/story.jpg" alt="pengguna" className="nav-icon1" />hmif.itk</a>
          <a href="#messages">
            <img src="/images/story.jpg" alt="pengguna" className="nav-icon1" />km_itk</a>
        </div>

        <div className="instagram-post">
            <div className="user-info">
              <img src="/images/profile.jpg" alt="Profile" className="profile-image" />
              <span className="username">felix</span>
            </div>
            <img src="https://placekitten.com/600/300" alt="Post" className="post-image" />
            <div className="actions">
              <div className="like-share">
                <button className="action-button">Like</button>
                <button className="action-button">Share</button>
              </div>
              <div className="comments">
                <div className="comment">
                  <span className="comment-username">maulanafzr:</span> lucunya kucingmu lix
                </div>
                <div className="comment">
                  <span className="comment-username">dims:</span> keren
                </div>
                <div className="comment">
                  <span className="comment-username">alma:</span> imutnya 
                </div>
              </div>
            </div>
          </div>


          <div className="side-nav">
            <p>Recommended</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCard;
