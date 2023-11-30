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
      <input type="search" placeholder="Cari..." />
      <div className="profile-circle">
        <img src={profileImage} alt="Profile" />
      </div>
    </nav>
  );
}

export default Navigation;
