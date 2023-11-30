// registerform.jsx
import React, { useState } from 'react';
import './register.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    country: '',
    phoneNumber: '',
    birthDate: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration form submitted:', formData);
  };

  return (
    <div className="register-card">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Registrasi</h2>
        <div className="input-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Masukkan Nama Lengkap"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="country">Negara</label>
          <input
            type="text"
            name="country"
            placeholder="Masukkan Negara Anda"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="phoneNumber">No HP</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Masukkan Nomor HP"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="birthDate">Tanggal Lahir</label>
          <input
            type="text"
            name="birthDate"
            placeholder="Masukkan Tanggal Lahir Anda"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="gender">Jenis Kelamin</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="Laki-Laki"
                checked={formData.gender === 'Laki-Laki'}
                onChange={handleChange}
              />
              Laki-Laki
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Perempuan"
                checked={formData.gender === 'Perempuan'}
                onChange={handleChange}
              />
              Perempuan
            </label>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Masukkan Alamat Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Masukkan Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Masukkan Kembali Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="register-btn">Register</button>
        <p className="or-divider">OR</p>
        <button type="button" className="google-register-btn">Register with Google</button>
        <p className="login-link">
          Sudah punya akun? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
