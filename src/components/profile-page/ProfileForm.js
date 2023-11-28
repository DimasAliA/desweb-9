import React, { useState } from 'react';
import './profile.css';

function ProfileForm() {
  const [profile, setProfile] = useState({
    firstName: 'Dimas',
    lastName: 'Ali',
    about: 'kelompok 9 tubes',
    username: 'dimasali26',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="profile-card">
      <div className="profile-image-section">
        <img src="/images/wibu.jpg" alt="Profil" className="profile-image"/>
        <button type="button" className="change-picture-button">Ganti</button>
      </div>
      <div className="profile-form-section">
        <form onSubmit={handleSubmit} className="profile-form">
        <div>
      </div>
      <div className="form-row">
        <div className="input-group">
            <label htmlFor="first Name">First Name</label>
            <input
                type="text"
                name="firstName"
                placeholder="Nama depan"
                value={profile.firstName}
                onChange={handleChange}
            />
        </div>
        <div className="input-group">
            <label htmlFor="LastName">Last Name</label>
            <input
            type="text"
            name="lastName"
            placeholder="Nama belakang"
            value={profile.lastName}
            onChange={handleChange}
            />
        </div>
        <div className="input-group full-width">
            <label htmlFor="tentang">Tentang</label>
            <textarea
            name="about"
            placeholder="Tentang"
            value={profile.about}
            onChange={handleChange}
            />
        </div>
        <div className="input-group full-width">
            <label htmlFor="username">Nama Pengguna</label>
            <input
            type="text" class="user"
            name="username"
            placeholder="Nama pengguna"
            value={profile.username}
            onChange={handleChange}
            />
        </div>
        </div>
      <button type="submit">Simpan</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
