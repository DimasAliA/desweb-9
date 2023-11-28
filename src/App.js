import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/profile-page/profile';
import Homepage from './components/home/home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;