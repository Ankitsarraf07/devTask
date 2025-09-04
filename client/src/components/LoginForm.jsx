import { useState } from "react";
import "../styles/LoginForm.css";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert('PLease fill in both field');
            return;
        }
        console.log('Logging in:', { username, password });
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Signin to your<br /> PopX account</h2>
            <p>Lorem ipsum dolor sit amet<br /> consectetur adipisicing elit.</p>

            <div className="input-box">
                <label htmlFor="email" >Email<span className="required-asterisk">*</span></label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}

                />
            </div>
            <label htmlFor="password">Password<span className="required-asterisk">*</span></label>
            <input id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log In</button>
        </form>
    );
};

export default LoginForm;
