import React from 'react';
import Navigation from './components/Navigation';
import ProfileForm from './components/ProfileForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <ProfileForm />
      <Footer />
    </div>
  );
}

export default App;
