import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import ProfileForm from './ProfileForm';
import Footer from './Footer';

const Profile = () => {
    const [profileImage, setProfileImage] = useState('');

    useEffect(() => {
        const storedImage = localStorage.getItem('profileImage');
        if (storedImage) {
            setProfileImage(storedImage);
        }
    }, []);
    return (
        <>
            <Navigation profileImage={profileImage} />
            <ProfileForm profileImage={profileImage} setProfileImage={setProfileImage} />
            <Footer />
        </>
    );
};
export default Profile;
