import "./CreateUser.css";
import { useState, useEffect, useContext, createContext } from "react";
import { Link } from 'react-router-dom';


function CreateUser() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onSubmitCreateUser = (e) => {
        if(password !== confirmPassword) {
            alert("Passwords do not match!");
        }
        alert("Account created successfully!");
        console.log({fullName, email, username, password});
        setFullName("");
        setEmail("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
    }


    return (
        <div className="createuser-container">
            <div className="createuser-form">
                <h2>Create New Account</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name</label>
                        <input 
                            type="text" 
                            id="fullname" 
                            name="fullname" 
                            placeholder="Enter your full name"
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Enter your email"
                            required 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Choose a username"
                            required 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Create a password"
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            placeholder="Re-enter your password"
                            required 
                        />
                    </div>
                    
                    <button type="submit" className="createuser-btn">Create Account</button>
                    
                    <div className="form-links">
                        <p>Already have an account? <Link to="/login">Login here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;