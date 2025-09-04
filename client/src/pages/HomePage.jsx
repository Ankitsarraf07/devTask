import { Link, useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import "../components/LoginForm";
import "../components/RegisterForm";
function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="home-conatiner">
            <div className="home-content">
                <h1>Welcome to PopX</h1>
                <p>Lorem ipsum dolor sit amet<br /> consectetur adipisicing elit.</p>
            </div>

            <div className="home-button">

                <button onClick={() => navigate('/register')}>Create Account</button>
                <button id="sec" onClick={() => navigate('/Login')}>Already Registered?Login</button>
            </div>
        </div>

    );
};

export default HomePage;
