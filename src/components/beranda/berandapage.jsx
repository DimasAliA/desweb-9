import React from "react";
import SocialMediaCard from "../beranda/beranda";
import Navigation from "../profile-page/Navigation";
import Posting  from "../beranda/post";


const Homepage1 = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        {/* <SocialMediaCard /> */}
        <Posting/>
      </div>
    </>
  );
};

export default Homepage1;
