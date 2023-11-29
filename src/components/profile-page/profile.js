import React,{ useState } from 'react';
import Navigation from './Navigation';
import ProfileForm from './ProfileForm';
import Footer from './Footer';

const Profile = () => {
    const [profileImage, setProfileImage] = useState('/images/wibu.jpg');
    return (
      <>
        <Navigation profileImage={profileImage} />
        <ProfileForm profileImage={profileImage} setProfileImage={setProfileImage} />
        <Footer />
      </>
    );
  };
  

export default Profile;

