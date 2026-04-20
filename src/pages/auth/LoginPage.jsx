import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import './LoginPage.scss';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="logo-badge">🎓</div>
          <h1>Chào mừng trở lại</h1>
          <p>Đăng nhập để quản lý hệ thống trường học của bạn</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Email / Tên đăng nhập</label>
            <div className="input-wrapper">
              <FiMail className="input-icon" />
              <input type="text" placeholder="name@school.edu" required />
            </div>
          </div>

          <div className="form-group">
            <label>Mật khẩu</label>
            <div className="input-wrapper">
              <FiLock className="input-icon" />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                required 
              />
              <button 
                type="button" 
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Ghi nhớ đăng nhập</span>
            </label>
            <a href="#" className="forgot-link">Quên mật khẩu?</a>
          </div>

          <button type="submit" className="login-btn">Đăng nhập</button>
        </form>

        <div className="login-footer">
          <p>Chưa có tài khoản? <a href="#">Liên hệ quản trị viên</a></p>
        </div>
      </div>
      
      <div className="login-illustration">
        {/* Placeholder for a nice SVG or image */}
        <div className="illustration-content">
          <h2>NetSchool Management</h2>
          <p>Hệ thống quản lý giáo dục toàn diện, hiện đại và bảo mật.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
