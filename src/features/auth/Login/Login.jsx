import React from "react";
import "./Login.css";
import { FaUser, FaLock, FaEyeSlash, FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-card">
                <h3 className="text-center mb-4">Login</h3>

                {/* Username */}
                <div className="input-group-custom">
                    <FaUser className="icon" />
                    <input type="text" placeholder="Username or Email" />
                </div>

                {/* Password */}
                <div className="input-group-custom">
                    <FaLock className="icon" />
                    <input type="password" placeholder="Enter your Password" />
                    <FaEyeSlash className="eye" />
                </div>

                {/* Remember + Forgot */}
                <div className="d-flex justify-content-between align-items-center mb-3 small">
                    <div>
                        <input type="checkbox" id="remember" />{" "}
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <a href="#">Forgot password?</a>
                </div>

                {/* Button */}
                <button className="btn-login">Login</button>

                {/* Signup */}
                <p className="text-center mt-3 small">
                    Don't have an account? <a href="#">Sign up</a>
                </p>

                {/* Divider */}
                <div className="divider">or connect with</div>

                {/* Social */}
                <div className="social-login">
                    <FaFacebookF />
                    <FaGoogle />
                    <FaGithub />
                </div>
            </div>
        </div>
    );
};

export default Login;