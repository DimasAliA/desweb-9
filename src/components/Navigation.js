import React from 'react';
import './nav.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><button>Beranda</button></li>
        <li><button>Teman</button></li>
        <li><button>Buat</button></li>
      </ul>
      <input type="search" placeholder="Cari..." />
      <div className="profile-circle">
        <img src="/images/wibu.jpg" alt="Profile" />
      </div>
    </nav>
  );
}

export default Navigation;
