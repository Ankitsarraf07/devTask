import '../styles/ProfilePage.css';
import profilePic from '../assets/profile.jpg';
import cameraIcon from '../assets/camera.png';

const ProfilePage = () => {
    return (
        <div className="profile-container">
            <h2>My Profile</h2>
            <div className="image-wrapper">
                <img src={profilePic} alt="Profile" className="profile-pic" />
                <img src={cameraIcon} alt="Camera Icon" className="camera-icon" />
                <span><h1>Marry Doe</h1></span>
                <span>Marry@Gmail.com</span>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Esse beatae sapiente quidem quasi cumque sequi ad ipsa
                    fugiat corrupti.
                </p>
            </div>
        </div>
    );
};

export default ProfilePage;
