import { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/RegisterForm.css";

function RegisterForm() {
    const [formData, setFormData] = useState({
        username: "",
        phonenum: "",
        email: "",
        password: "",
        companyname: ""

    });
    const [answer, setAnswer] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, phonenum, email, password, companyname } = formData;

        if (!username || !phonenum || !email || !password || !password) {
            alert("All fields are required");
            return;
        }

        console.log("user registered:", formData);

    };
    return (

        <form onSubmit={handleSubmit} className="reg-Form">
            <h2>Create your <br />PopX account</h2>
            <label htmlFor="name" >Name<span className="required-asterisk">*</span></label>
            <input
                type="text"
                name="username"
                placeholder="Enter your name"
                value={formData.username}
                onChange={handleChange}
            />
            <label htmlFor="Phone number" >Phone Number<span className="required-asterisk">*</span></label>
            <input
                type="tel"
                name="phonenum"
                placeholder="Enter your number"
                value={formData.phonenum}
                onChange={handleChange}
            />
            <label htmlFor="email" >Email<span className="required-asterisk">*</span></label>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <label htmlFor="password" >Password<span className="required-asterisk">*</span></label>
            <input
                type="password"
                name="password"
                placeholder='Enter password'
                value={formData.password}
                onChange={handleChange}
            />
            <label htmlFor="company" >Company<span className="required-asterisk">*</span></label>
            <input
                type="text"
                name="companyname"
                placeholder='Enter company name'
                value={formData.companyname}
                onChange={handleChange}
            />
            <label htmlFor="Agency" >Are you an Agency<span className="required-asterisk">*</span></label>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'black' }}>

                <spam style={{ display: "flex", alignItems: 'flex-start' }}> <input className="radio" type="radio" value="yes" checked={answer === 'yes'} onChange={e => setAnswer(e.target.value)} />Yes</spam>
                <spam style={{ display: "flex", alignItems: 'flex-start' }}><input className="radio" type="radio" value="no" checked={answer === 'no'} onChange={e => setAnswer(e.target.value)} /> No</spam>

            </div>





            <button type="submit" id="reg"><Link to="/profile>">Create Account</Link></button>
        </form>

    );
}

export default RegisterForm;