import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/profile-page/profile";
import Homepage from "./components/home/home";
import Loginpage from "./components/loginpage/loginpage";
import RegisterPage from "./components/registerpage/registerpage";
import "./App.css";
import Homepage1 from "./components/beranda/berandapage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/beranda" element={<Homepage1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
