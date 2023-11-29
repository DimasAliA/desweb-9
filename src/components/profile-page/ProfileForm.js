import React, { useState, useEffect } from 'react';
import './profile.css';

function ProfileForm({ profileImage,setProfileImage }) {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    about: '',
    username: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('profile', JSON.stringify(profile));
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setProfileImage(URL.createObjectURL(img));
    }
  };

  return (
    <div className="profile-card">
      <div className="profile-image-section">
        <img src={profileImage} alt="Profil" className="profile-image"/>
        <input type="file" onChange={handleImageChange} hidden id="fileInput" />
        <button type="button" className="change-picture-button" onClick={() => document.getElementById('fileInput').click()}>Ganti</button>
      </div>
      <div className="profile-form-section">
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Nama depan"
                value={profile.firstName}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Nama belakang"
                value={profile.lastName}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div className="input-group full-width">
              <label htmlFor="about">Tentang</label>
              <textarea
                name="about"
                placeholder="Tentang"
                value={profile.about}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div className="input-group full-width">
              <label htmlFor="username">Nama Pengguna</label>
              <input
                type="text"
                name="username"
                placeholder="Nama pengguna"
                value={profile.username}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>
          <button 
            className={`edit-btn ${isEditing ? 'edit-btn-save' : 'edit-btn-edit'}`}
            type="button" 
            onClick={isEditing ? handleSubmit : handleEdit}>
            {isEditing ? 'Simpan' : 'Edit'}
        </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
