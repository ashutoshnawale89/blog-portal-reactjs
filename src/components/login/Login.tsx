import { useState } from "react";
import {  Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const [userId, setUserId] = useState('admin');
    const [password, setPassword] = useState('admin123');
    // const navigate = useNavigate();

    const onSubmitLogin = (e:any) => {
        e.preventDefault();
        if (userId === '' || password === '') {
            return alert('Please fill in all fields');
        }
        console.log('Logging in with', { userId, password });
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={onSubmitLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Enter your username"
                            onChange={(e) => setUserId(e.target.value)}
                            value={userId}
                            required 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required 
                        />
                    </div>
                    
                    <button type="submit" className="login-btn">Login</button>
                    
                    <div className="form-links">
                        <Link to="/forgetpassword" className="forgot-password">Forgot Password?</Link>
                        <Link to="/createuser" className="create-account">Create New User</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
