import React from 'react';
import './nav.css';

function Navigation({ profileImage }) {
  return (
    <nav className='nav-profile-page'>
      <ul>
        <li><button>Beranda</button></li>
        <li><button>Teman</button></li>
        <li><button>Buat</button></li>
      </ul>
      <div className="search-profile-container">
        <input className='nav-search' type="search" placeholder="Cari..." />
        <div className="profile-circle">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
