import './ForgetPassword.css';
import { useState, useEffect, useContext, createContext } from "react";
import { Link } from 'react-router-dom';


function ForgetPassword() {
    const [email, setEmail] = useState('');

    const onSubmit = () => {
        if (email == ''){
            alert("Please enter your email address.");
        }
        if (email == 'admin'){
            alert("A password reset link has been sent to your email.");
        }
        else {
            alert("Email address not found. Please try again.");
        }
        setEmail('');
    }
    
    return (
        <div className="forgetpassword-container">
            <div className="forgetpassword-form">
                <h2>Forgot Password?</h2>
                <p className="instruction">Enter your email address and we'll send you a link to reset your password.</p>
                
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    
                    <button type="submit" className="reset-btn">Send Reset Link</button>
                    
                    
                    <div className="form-links">
                        <Link to="/login" className="back-to-login">Back to Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword;