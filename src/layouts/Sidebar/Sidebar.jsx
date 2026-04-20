import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FiHome, 
  FiUsers, 
  FiBook, 
  FiCalendar, 
  FiCheckSquare, 
  FiCreditCard, 
  FiBarChart2, 
  FiLogOut,
  FiSettings
} from 'react-icons/fi';
import './Sidebar.scss';

const Sidebar = () => {
  const menuItems = [
    { name: 'Tổng quan', path: '/', icon: <FiHome /> },
    { name: 'Học sinh', path: '/students', icon: <FiUsers /> },
    { name: 'Giáo viên', path: '/teachers', icon: <FiUsers /> },
    { name: 'Lớp học', path: '/classes', icon: <FiBook /> },
    { name: 'Môn học', path: '/subjects', icon: <FiBook /> },
    { name: 'Điểm số', path: '/grades', icon: <FiBarChart2 /> },
    { name: 'Chuyên cần', path: '/attendance', icon: <FiCheckSquare /> },
    { name: 'Học phí', path: '/fees', icon: <FiCreditCard /> },
    { name: 'Bài tập', path: '/assignments', icon: <FiCalendar /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">NetSchool</span>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                <span className="icon">{item.icon}</span>
                <span className="name">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/settings" className="nav-link">
          <span className="icon"><FiSettings /></span>
          <span className="name">Cài đặt</span>
        </NavLink>
        <button className="logout-btn">
          <span className="icon"><FiLogOut /></span>
          <span className="name">Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
