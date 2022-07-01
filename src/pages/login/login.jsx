import React from 'react'
import './login.css'
import pic from '../../assets/logo.png'
import { Navbar } from '../../components'
import { Footer } from '../../components'

function Login() {
    return (
        <div>
            <Navbar />
            <div className="login-container">
                <div className="input-container flex-flow-column">
                    <img src={pic} height="70px" width="70%" alt="logo" />
                    <div className="input-box">
                        <label>
                            Email or mobile no.<span>*</span>
                        </label>
                        <input
                            type="text"
                            className="input"
                            placeholder="Username"
                        />
                    </div>
                    <div className="input-box password">
                        <label>
                            Password<span>*</span>
                        </label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                        />
                        <a href="#">Forgot password?</a>
                    </div>
                    <div className="input-box">
                        <span id="password-validation"></span>
                        <button className="input-btn">Login</button>
                    </div>
                    <p>
                        Create a new account?{' '}
                        <a href="signup.html">Click here</a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login
