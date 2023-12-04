import React from "react";
import SocialMediaCard from "../beranda/beranda";
import Navigation from "../profile-page/Navigation";

const Homepage1 = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <SocialMediaCard />
      </div>
    </>
  );
};

export default Homepage1;
